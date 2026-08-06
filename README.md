# TCS IPA

Preparation material and practice solutions for the TCS Xplore Individual Programming Assessment (IPA) / NQT — covering Java coding problems, curated important programs, subject-wise MCQ notes, and a self-built interactive practice web app.

---

## Table of Contents

1. [Contents](#contents)
2. [Java Practice App](#java-practice-app)
3. [Project Structure](#project-structure)
4. [Usage](#usage)

---

## Contents

| Directory | What's inside |
|---|---|
| `Java-Solutions-TCS-IPA-Questions/` | 185 solved Java programs covering string manipulation, arrays, recursion, and common IPA coding patterns |
| `Important-Java-Program--IPA-15Marks/` | Curated beginner-level programs for the 15-mark IPA section, set up as an IntelliJ project |
| `Important-Java-Program--IPA-35Marks/` | Curated intermediate programs for the 35-mark IPA section, organized by problem statement (course/footwear/hotel/college/etc.) |
| `TCS-IPA-Exam-MCQ/` | Subject-wise MCQ notes and answers — Java, SQL/PLSQL, HTML/CSS/JavaScript, Unix, previous-year papers, and organization-knowledge questions |
| `java-practice/` | A standalone browser-based practice app (see below) |

Each subdirectory has its own README with more detail on that section.

---

## Java Practice App

`java-practice/` is a self-contained, dependency-free web app (plain HTML/CSS/JS) for drilling IPA material interactively:

- **Coding Questions** — browse and search practice problems
- **MCQ Quiz** — multiple-choice drilling mode
- **Mock Exam** — timed, exam-style practice run
- Light/dark theme toggle

To use it, just open `java-practice/index.html` in a browser — no build step or server required.

---

## Project Structure

```
TCS_IPA/
├── Java-Solutions-TCS-IPA-Questions/    # 185 solved practice programs
├── Important-Java-Program--IPA-15Marks/ # IntelliJ project, 15-mark section
├── Important-Java-Program--IPA-35Marks/ # 35-mark section, by problem
├── TCS-IPA-Exam-MCQ/                    # MCQ notes by subject
│   ├── Java.md
│   ├── SQL PLSQL.md
│   ├── UI - HTML, CSS AND JAVASCRIPT.md
│   ├── Unix.pdf
│   ├── Know Your Organization.md
│   ├── Previous Year MCQ.md
│   └── Image/
└── java-practice/                       # Interactive practice web app
    ├── index.html
    ├── script.js
    ├── style.css
    ├── questions.json
    └── mcqs.json
```

---

## Usage

**Java solutions**: each `.java` file is self-contained and can be compiled/run directly:

```bash
javac SomeProgram.java
java SomeProgram
```

**IntelliJ projects**: open `Important-Java-Program--IPA-15Marks/` directly as an IntelliJ project (`.iml` file included).

**Practice app**: open `java-practice/index.html` in any browser.
