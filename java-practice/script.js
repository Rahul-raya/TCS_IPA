(function () {
  "use strict";

  var STORAGE_SOLVED_KEY = "javaPractice.solvedIds";
  var STORAGE_THEME_KEY = "javaPractice.theme";

  var state = {
    questions: [],
    categories: [],
    filters: {
      search: "",
      categories: new Set(),
      difficulties: new Set(["Easy", "Medium", "Hard"]),
      solvedOnly: false
    },
    solvedIds: new Set(),
    view: "list", // "list" | "detail"
    currentQuestionId: null,
    currentFileIndex: 0,
    revealed: false
  };

  // ---------- DOM refs ----------
  var el = {
    menuToggleBtn: document.getElementById("menu-toggle-btn"),
    themeToggleBtn: document.getElementById("theme-toggle-btn"),
    sidebar: document.getElementById("sidebar"),
    sidebarBackdrop: document.getElementById("sidebar-backdrop"),
    searchInput: document.getElementById("search-input"),
    categoryFilters: document.getElementById("category-filters"),
    difficultyCheckboxes: Array.prototype.slice.call(document.querySelectorAll(".difficulty-checkbox")),
    solvedOnlyCheckbox: document.getElementById("solved-only-checkbox"),
    progressText: document.getElementById("progress-text"),
    progressBarFill: document.getElementById("progress-bar-fill"),
    resetProgressBtn: document.getElementById("reset-progress-btn"),
    errorBanner: document.getElementById("error-banner"),
    listView: document.getElementById("list-view"),
    listStatus: document.getElementById("list-status"),
    questionGrid: document.getElementById("question-grid"),
    emptyState: document.getElementById("empty-state"),
    detailView: document.getElementById("detail-view"),
    backBtn: document.getElementById("back-btn"),
    detailTitle: document.getElementById("detail-title"),
    detailCategoryBadge: document.getElementById("detail-category-badge"),
    detailDifficultyBadge: document.getElementById("detail-difficulty-badge"),
    solvedToggleBtn: document.getElementById("solved-toggle-btn"),
    detailDescription: document.getElementById("detail-description"),
    fileTabs: document.getElementById("file-tabs"),
    revealContainer: document.getElementById("reveal-container"),
    revealBtn: document.getElementById("reveal-btn"),
    codeBlock: document.getElementById("code-block"),
    codeContent: document.getElementById("code-content")
  };

  // ---------- Theme ----------
  function initTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_THEME_KEY);
    } catch (e) {
      /* localStorage unavailable */
    }
    if (saved === "dark" || saved === "light") {
      document.documentElement.setAttribute("data-theme", saved);
    }
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute("data-theme");
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var effectiveCurrent = current || (prefersDark ? "dark" : "light");
    var next = effectiveCurrent === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_THEME_KEY, next);
    } catch (e) {
      /* ignore */
    }
  }

  // ---------- Persistence ----------
  function loadSolved() {
    try {
      var raw = localStorage.getItem(STORAGE_SOLVED_KEY);
      if (raw) {
        var arr = JSON.parse(raw);
        if (Array.isArray(arr)) {
          state.solvedIds = new Set(arr);
        }
      }
    } catch (e) {
      state.solvedIds = new Set();
    }
  }

  function saveSolved() {
    try {
      localStorage.setItem(STORAGE_SOLVED_KEY, JSON.stringify(Array.from(state.solvedIds)));
    } catch (e) {
      /* ignore quota / privacy errors */
    }
  }

  function isSolved(id) {
    return state.solvedIds.has(id);
  }

  function setSolved(id, solved) {
    if (solved) {
      state.solvedIds.add(id);
    } else {
      state.solvedIds.delete(id);
    }
    saveSolved();
  }

  // ---------- Data loading ----------
  function showError(message) {
    el.errorBanner.textContent = message;
    el.errorBanner.classList.remove("hidden");
  }

  function loadQuestions() {
    fetch("./questions.json")
      .then(function (resp) {
        if (!resp.ok) {
          throw new Error("HTTP " + resp.status);
        }
        return resp.json();
      })
      .then(function (data) {
        if (!Array.isArray(data)) {
          throw new Error("questions.json did not contain an array");
        }
        state.questions = data;
        var catSet = new Set();
        data.forEach(function (q) {
          if (q.category) {
            catSet.add(q.category);
          }
        });
        state.categories = Array.from(catSet).sort();
        state.filters.categories = new Set(state.categories);
        buildCategoryFilters();
        renderAll();
      })
      .catch(function (err) {
        showError(
          "Could not load questions.json (" + err.message + ").\n\n" +
          "This page must be served over HTTP, not opened directly as a file. " +
          "Run a local server from the java-practice directory, e.g.:\n\n" +
          "    python3 -m http.server 8000\n\n" +
          "then open http://localhost:8000/ in your browser."
        );
        el.listStatus.textContent = "";
        el.questionGrid.innerHTML = "";
        el.emptyState.classList.add("hidden");
      });
  }

  // ---------- Sidebar filters ----------
  function buildCategoryFilters() {
    el.categoryFilters.innerHTML = "";
    state.categories.forEach(function (cat) {
      var label = document.createElement("label");
      label.className = "filter-chip";

      var input = document.createElement("input");
      input.type = "checkbox";
      input.checked = true;
      input.className = "category-checkbox";
      input.value = cat;
      input.addEventListener("change", function () {
        if (input.checked) {
          state.filters.categories.add(cat);
        } else {
          state.filters.categories.delete(cat);
        }
        renderList();
      });

      label.appendChild(input);
      label.appendChild(document.createTextNode(cat));
      el.categoryFilters.appendChild(label);
    });
  }

  // ---------- Filtering ----------
  function getFilteredQuestions() {
    var search = state.filters.search.trim().toLowerCase();
    return state.questions.filter(function (q) {
      if (!state.filters.categories.has(q.category)) {
        return false;
      }
      if (!state.filters.difficulties.has(q.difficulty)) {
        return false;
      }
      if (state.filters.solvedOnly && !isSolved(q.id)) {
        return false;
      }
      if (search) {
        var title = (q.title || "").toLowerCase();
        var desc = (q.description || "").toLowerCase();
        if (title.indexOf(search) === -1 && desc.indexOf(search) === -1) {
          return false;
        }
      }
      return true;
    });
  }

  function difficultyBadgeClass(difficulty) {
    if (difficulty === "Easy") return "badge-easy";
    if (difficulty === "Medium") return "badge-medium";
    if (difficulty === "Hard") return "badge-hard";
    return "";
  }

  // ---------- Rendering: list ----------
  function renderList() {
    var filtered = getFilteredQuestions();
    el.questionGrid.innerHTML = "";

    if (state.questions.length === 0) {
      el.listStatus.textContent = "";
      el.emptyState.classList.add("hidden");
      return;
    }

    el.listStatus.textContent = filtered.length + " of " + state.questions.length + " questions";

    if (filtered.length === 0) {
      el.emptyState.classList.remove("hidden");
      return;
    }
    el.emptyState.classList.add("hidden");

    var fragment = document.createDocumentFragment();
    filtered.forEach(function (q) {
      var card = document.createElement("article");
      card.className = "question-card" + (isSolved(q.id) ? " solved" : "");
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "Open question: " + q.title);

      var topRow = document.createElement("div");
      topRow.className = "card-top-row";

      var title = document.createElement("h3");
      title.className = "card-title";
      title.textContent = q.title;
      topRow.appendChild(title);

      if (isSolved(q.id)) {
        var check = document.createElement("span");
        check.className = "card-solved-check";
        check.textContent = "✓";
        check.title = "Solved";
        topRow.appendChild(check);
      }

      card.appendChild(topRow);

      var badges = document.createElement("div");
      badges.className = "card-badges";

      var catBadge = document.createElement("span");
      catBadge.className = "badge badge-category";
      catBadge.textContent = q.category;
      badges.appendChild(catBadge);

      var diffBadge = document.createElement("span");
      diffBadge.className = "badge " + difficultyBadgeClass(q.difficulty);
      diffBadge.textContent = q.difficulty;
      badges.appendChild(diffBadge);

      card.appendChild(badges);

      card.addEventListener("click", function () {
        openDetail(q.id);
      });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openDetail(q.id);
        }
      });

      fragment.appendChild(card);
    });
    el.questionGrid.appendChild(fragment);
  }

  // ---------- Rendering: progress ----------
  function renderProgress() {
    var total = state.questions.length;
    var solvedCount = state.questions.reduce(function (acc, q) {
      return acc + (isSolved(q.id) ? 1 : 0);
    }, 0);
    el.progressText.textContent = "Solved " + solvedCount + " / " + total;
    var pct = total > 0 ? (solvedCount / total) * 100 : 0;
    el.progressBarFill.style.width = pct + "%";
  }

  // ---------- Detail view ----------
  function findQuestion(id) {
    for (var i = 0; i < state.questions.length; i++) {
      if (state.questions[i].id === id) {
        return state.questions[i];
      }
    }
    return null;
  }

  function openDetail(id) {
    var q = findQuestion(id);
    if (!q) {
      return;
    }
    state.currentQuestionId = id;
    state.currentFileIndex = 0;
    state.revealed = false;
    state.view = "detail";
    renderDetail();
    switchView();
    window.scrollTo(0, 0);
  }

  function closeDetail() {
    state.view = "list";
    state.currentQuestionId = null;
    switchView();
  }

  function switchView() {
    if (state.view === "detail") {
      el.listView.classList.add("hidden");
      el.detailView.classList.remove("hidden");
    } else {
      el.detailView.classList.add("hidden");
      el.listView.classList.remove("hidden");
      renderList();
    }
  }

  function renderDetail() {
    var q = findQuestion(state.currentQuestionId);
    if (!q) {
      return;
    }

    el.detailTitle.textContent = q.title;
    el.detailCategoryBadge.textContent = q.category;
    el.detailDifficultyBadge.textContent = q.difficulty;
    el.detailDifficultyBadge.className = "badge " + difficultyBadgeClass(q.difficulty);
    el.detailDescription.textContent = q.description || "";

    var solved = isSolved(q.id);
    el.solvedToggleBtn.textContent = solved ? "✓ Solved" : "Mark as solved";
    el.solvedToggleBtn.classList.toggle("is-solved", solved);

    // File tabs
    var files = Array.isArray(q.files) ? q.files : [];
    el.fileTabs.innerHTML = "";
    if (files.length > 1) {
      el.fileTabs.classList.remove("hidden");
      files.forEach(function (f, idx) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "file-tab-btn" + (idx === state.currentFileIndex ? " active" : "");
        btn.textContent = f.name || ("File " + (idx + 1));
        btn.addEventListener("click", function () {
          state.currentFileIndex = idx;
          renderDetail();
        });
        el.fileTabs.appendChild(btn);
      });
    } else {
      el.fileTabs.classList.add("hidden");
    }

    var currentFile = files[state.currentFileIndex] || files[0] || { name: "", code: "" };
    el.codeContent.textContent = currentFile.code || "";

    if (state.revealed) {
      el.codeBlock.classList.remove("hidden");
      el.revealContainer.classList.add("hidden");
    } else {
      el.codeBlock.classList.add("hidden");
      el.revealContainer.classList.remove("hidden");
    }
  }

  // ---------- Event wiring ----------
  function wireEvents() {
    el.themeToggleBtn.addEventListener("click", toggleTheme);

    el.menuToggleBtn.addEventListener("click", function () {
      var isOpen = el.sidebar.classList.toggle("open");
      el.sidebarBackdrop.classList.toggle("open", isOpen);
      el.menuToggleBtn.setAttribute("aria-expanded", String(isOpen));
    });

    el.sidebarBackdrop.addEventListener("click", function () {
      el.sidebar.classList.remove("open");
      el.sidebarBackdrop.classList.remove("open");
      el.menuToggleBtn.setAttribute("aria-expanded", "false");
    });

    el.searchInput.addEventListener("input", function () {
      state.filters.search = el.searchInput.value;
      renderList();
    });

    el.difficultyCheckboxes.forEach(function (cb) {
      cb.addEventListener("change", function () {
        if (cb.checked) {
          state.filters.difficulties.add(cb.value);
        } else {
          state.filters.difficulties.delete(cb.value);
        }
        renderList();
      });
    });

    el.solvedOnlyCheckbox.addEventListener("change", function () {
      state.filters.solvedOnly = el.solvedOnlyCheckbox.checked;
      renderList();
    });

    el.resetProgressBtn.addEventListener("click", function () {
      if (window.confirm("Reset all solved progress? This cannot be undone.")) {
        state.solvedIds = new Set();
        saveSolved();
        renderProgress();
        renderList();
        if (state.view === "detail") {
          renderDetail();
        }
      }
    });

    el.backBtn.addEventListener("click", closeDetail);

    el.solvedToggleBtn.addEventListener("click", function () {
      var q = findQuestion(state.currentQuestionId);
      if (!q) {
        return;
      }
      var nowSolved = !isSolved(q.id);
      setSolved(q.id, nowSolved);
      renderDetail();
      renderProgress();
    });

    el.revealBtn.addEventListener("click", function () {
      state.revealed = true;
      renderDetail();
    });
  }

  function renderAll() {
    renderList();
    renderProgress();
  }

  // ---------- Init ----------
  function init() {
    initTheme();
    loadSolved();
    wireEvents();
    renderProgress();
    loadQuestions();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
