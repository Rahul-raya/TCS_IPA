
# 📘 UI – HTML, CSS and JavaScript (TCS IPA Notes)



### **Part A – Theory & Concept MCQs**



#### 1. Syntax of background image in CSS ?

1. background-img
2. background-color
3. **background-image ✅**
4. bg-img



#### 2. All html tags have closing tags ?

1. True
2. **False ✅**



#### 3. What is command for ordered list with roman number ?

1. `<ol type="A">`
2. `<ol type="a">`
3. `<ol type="1">`
4. `**<ol type="I"> ✅**`



#### 4. Which is not CSS unit ?

1. em
2. **ut ✅**
3. %
4. px



#### 5.

```css
p { color: green }
<p>xyz</p>
```

Paragraph is printed in which color?

1. **Green ✅**
2. Red
3. Blue
4. Error



#### 6. Emphasing the text in html ... ?

1. `<b>`  
2. `<i>`  
3. `<strong>`  
4. `**<em> ✅**`



#### 7. Tag which is not for formatting text ?

1. `<b>`  
2. `**<p> ✅**`
3. `<strong>`  
4. `<i>`  



#### 8. Which is the invalid field in HTML5 ?

1. **Day ✅**
2. Date
3. Datetime
4. Month



#### 9. Which is invalid escape sequence in JavaScript ?

1. \r
2. \b
3. \f
4. **\e ✅**



#### 10. You have created a shell script and wants to run the script. What should you do before try to run the script ?

1. No action required
2. Compile the script
3. **Update the execute permission of the script ✅**



#### 11. Caption tag is used with ...

1. Image
2. Table
3. **Both ✅**
4. None



#### 12. Text-align:justify ... ?

1. Left
2. Right
3. Center
4. **None of these (Stretches the lines so each line has equal width) ✅**



#### 13.

```css
a:link, a:visited {background-color : red;}
a:hover {background-color : green;}
<a href="abc.html">Click me</a>
```

1. will create a button having background color red
2. **will create a link having background color red and on moving the pointer background color will be green ✅**
3. will create a link having background color green
4. will create a button having background color red and on hover background color will be green



#### 14. Question from javascript section, `var x=100+5**3 ?`

1. 125
2. **225 ✅**
3. NAN
4. Error



#### 15. Which tag is used to emphasize the text.. ?

1. `<b>`  
2. `<strong>`  
3. `**<em> ✅**`
4. `<emph>`  



#### 16.

```html
<p>top news</p>
<blockquote url: Hindu news.com</blockquote>
```

Today’s news blockquote display or not?

1. **True ✅**
2. False



#### 17. Which is not inline in html ?

1. `**<hr> ✅**`
2. `<br>`  
3. `<img>`  
4. `<a>`  



#### 18. Array in javascript.. ?

1. **List form [] ✅**
2. Tuple form ()
3. Dictionary form {}
4. None of these



#### 19. Color in html not valid .. ?

1. color: darkblue
2. **color: #000ff ✅**
3. color: rgb(0,0,255)
4. color: blue



#### 20. `<img url="sky.jpg" width="100" height="100" opacity="0.25">` ?

1. Display with mentioned width and height
2. Display image as watermark
3. **None of these ✅** (opacity is not valid attribute in HTML)



#### 21. Appearance of `<ins>` tag ?

1. Italics
2. **Underline ✅**
3. Bold
4. Unformatted



#### 22. A link can be image or any other html element ?

1. **True ✅**
2. False



#### 23. Svg is used for ?

1. **Drawing lines , graphics etc ✅**
2. For sound (play/pause)



#### 24. `<span>` is used for ?

1. To select inline block
2. **To group elements for styling ✅**



#### 25. Which property is not applicable for paragraph ?

1. **float ✅ (exam answer)**
2. border
3. margin
4. font-family



#### 26. Which block of code will be executed ?

1. `p{<!--comment color:red;}`
2. `**p{/* comment */ color: red;} ✅**`
3. `p{// comment color:red;}`
4. `p{# comment color:red;}`



#### 27. Which of below block is used to style `<h1 class="Xplore">` ?

1. h1 {....}
2. xplore.h1 {....}
3. h1{....}
4. **h1.Xplore {....} ✅**



#### 28.

```html
<p class="abc"></p>
<script>
var x;
document.getElementByClass("abc").innerHTML = x;
</script>
```

What is output of code ?

1. NaN
2. 0
3. 14
4. **Error ✅** (wrong method, should be `getElementsByClassName`)



#### 29. JavaScript run using ScriptEngine?

1. True
2. **False ✅**



#### 30. Which of these statement is correct in JavaScript?

1. true and false are numeric values 1 and 0.
2. true and false are numeric values 0 and 1.
3. true is any nonzero value and false is 0.
4. **true and false are non-numeric values ✅**



#### 31. `<p class="A">ABC</p>` how to style ABC?

1. **.A { color: red; } ✅**
2. #A { color: red; }
3. *A { color: red; }
4. A { color: red; }



#### 32. Which is not CSS properties?

1. **background-render ✅**
2. background-attachment
3. background-repeat
4. background-position



### **Part B – Output & Coding Based MCQs**



#### Q1. Which is correct way to set font size?

1. h2 {font-size:200pixels;}
2. h2 {font-size:200;}
3. **h2 {font-size:200px;} ✅**
4. **h2 {font-size:200%;} ✅**



#### Q2. To specify table border in CSS ____ property is used.

1. table-border
2. **border ✅**
3. Tb-border
4. tbl-border



#### Q3. Block element can be aligned by setting left & right margin to auto?

1. **True ✅**
2. False



#### Q4. Output?

```html
<p id="showresult"><b> Welcome To TCS </b></p>
<input type="button" onclick="display()" value="Click Me"/>
<script>
function display() {
   b = document.getElementById("showresult").innerHTML;
   alert(b);
}
</script>
```

1. Internal Error
2. None
3. **<b> Welcome To TCS </b> ✅**
4. Welcome To TCS



#### Q5. Output?

```html
<input type="text" name="Java" value="JDK"/>
<input type="text" name="Version" value="1.8"/>
<button onclick="display()">Display</button>
<div id="content"></div>
<script>
function display() {
   a = document.getElementsByTagName("input");
   document.getElementById("content").innerText = a[0].value + a[1].value;
}
</script>
```

1. None
2. **JDK1.8 ✅**
3. JavaVersion
4. Internal Error



#### Q6. Which attribute is used for equal style for same class name?

1. **class ✅**
2. id
3. element
4. universal



#### Q7. Which is invalid in HTML5?

1. datetime
2. **day ✅**
3. month
4. date



#### Q8. Correct syntax for table border?

1. table, th, td { border=1px solid black; }
2. table, th, td { border-1px solid black; }
3. table, th, td { 1px solid black; }
4. **table, th, td { border:1px solid black; } ✅**



#### Q9. Which is valid margin property value?

1. solid
2. **auto ✅**
3. dashed
4. dotted



#### Q10. Which is not CSS background property?

1. background-attachment
2. background-repeat
3. background-position
4. **background-render ✅**



#### Q11. Value of x: `var x = 100 + 5**3;`

1. 125
2. **225 ✅**
3. 115
4. NAN



#### Q12. Which is inline element?

1. `<hr>`  
2. `<br>`  
3. `<img>`  
4. `**<a> ✅**`



#### Q13. Output?

```js
var a = "Scaler";
var result = a.substring(2, 4);
document.write(result);
```

Ans: **al ✅**



#### Q14. Output?

```js
var x=12;
var y=8;
var res=eval("x+y");
document.write(res);
```

Ans: **20 ✅**



#### Q15. Output?

```js
var a=1;
var b=0;
while(a<=3) {
   a++;
   b+=a*2;
   print(b);
}
```

Ans: **4, 10, 18 ✅**



#### Q16. Output?

```js
var a = Math.max();
var b = Math.min();
print(a);
print(b);
```

Ans: **-Infinity , Infinity ✅**



#### Q17. Output?

```js
var a = Math.max() < Math.min();
var b = Math.max() > Math.min();
print(a);
print(b);
```

Ans: **true , false ✅**



#### Q18. Output?

```js
let sum = 0;
const a = [1, 2, 3];
a.forEach(getSum);
print(sum);
function getSum(ele) {
   sum += ele;
}
```

Ans: **6 ✅**



#### Q19. Output?

```js
var arr=[4,3,,1];
for(i=0;i<4;i++) {
   document.writeln(arr[i]);
}
```

Ans: **4 , 3 , undefined , 1 ✅**



#### Q20. Output?

```html
<p id="demo"></p>
<script>
function ourFunction() {
   document.getElementById("demo").innerHTML = Math.abs(-7.25);
}
</script>
```

Ans: **7.25 ✅**


#### Note: 
- Please confirm the above answers from your side, perhaps by consulting ChatGPT or checking on Google. All of them are correct, but kindly cross-check from your end