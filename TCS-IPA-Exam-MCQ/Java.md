# Java

![image.png](./Image/Java_1.jpeg)
![image.png](./Image/Java_2.jpeg)
![image.png](./Image/Java_3.jpeg)
![image.png](./Image/Java_4.jpeg)
![image.png](./Image/Java_5.jpeg)
![image.png](./Image/Java_6.jpeg)
![image.png](./Image/Java_7.jpeg)
![image.png](./Image/Java_8.jpeg)
![image.png](./Image/Java_9.jpeg)
![image.png](./Image/Java_10.jpeg)
![image.png](./Image/Java_11.jpeg)
![image.png](./Image/Java_12.jpeg)
![image.png](./Image/Java_13.jpeg)
![image.png](./Image/Java_14.jpeg)
![image.png](./Image/Java_15.jpeg)
![image.png](./Image/Java_16.jpeg)
![image.png](./Image/Java_17.jpeg)
![image.png](./Image/Java_18.jpeg)
![image.png](./Image/Java_19.jpeg)
![image.png](./Image/Java_20.jpeg)
![image.png](./Image/Java_21.jpeg)
![image.png](./Image/Java_22.jpeg)
![image.png](./Image/Java_23.jpeg)
![image.png](./Image/Java_24.jpeg)
![image.png](./Image/Java_25.jpeg)
![image.png](./Image/Java_26.jpeg)
![image.png](./Image/Java_27.jpeg)
![image.png](./Image/Java_28.jpeg)
![image.png](./Image/Java_29.jpeg)
![image.png](./Image/Java_30.jpeg)


---

**PART - 01**

Q1 . What is size of float and double ?

1. 32 and 64
2. 32 and 32
3. 64 and 64
4. 64 and 32

**Ans : 32 and 64**

Q2 .  What will be the output ?

```java
short x=10;
x*=5;
System.out.println(x);
```

1. 50
2. 10
3. No output
4. Compilation Error

**Ans : Compilation Error**

Q3.  find the error in which line ?

```java
class A{
	final a;
	System.out.println(a);
}
```

1. Line 1
2. Line 2
3. Line 3
4. No Error

**Ans : Line 2**

Q4.  Find the length of String ?

1. using string.length()
2. using string.length

**Ans : a**

Q5.  Find the output ?

```java
class A{
	.........
}

class Solution{
	Box box[]={b1,b2,b3,b4,b5};
	for(int i=0;i<box.length();i++){
		System.out.println(box[i]);
	}
}
```

1. No Error
2. error
3. print all array object
4. none of these

**b. error**

Q6.  Objects includes ?

1. Attributes
2. both
3. Behavior
4. none

**Ans : c**

Q7.  Find the output ?

```java
String str="I like JAVA";
System.out.println(str.length());
```

1. 11
2. 10
3. 9
4. 3

**Ans : a**

Q8.  What is the extension of java file ?

**Ans : .java**

Q9.  Which of this is Super class of every class ?

1. String  class
2. Object class
3. Abstract class
4. ArrayList class

**Ans : b**

Q10.  Which modifier is used to prevent any method or attribute to be not visible to external classes ?

1. private
2. protected
3. public
4. default

**Ans : a**

Q11.  All the classes can be simultaneously imported by which wildcard ?

**Ans : ***

Q12.   Which of the following is the correct declaration of array of size 10 ?

1. int arr[10];
2. int arr[10]=new int[10];
3. int arr[]=new int[10];
4. int arr[]={10 elements };

**Ans : c and d**

Q13.

```java
public class Solution{
public static void main(String[] args){
		byte x = 127;
		x++;
		x++;
		System.out.print(x);                   
  }
}
```

**Ans : -127 (Range of byte data in java is -128 to 127. But the byte data type in java is cyclic in nature.)**

Q14. Arrays in java are -

1. object references
2. primitive data type
3. objects
4. none

**Ans : objects**

Q15.  Identify what can directly access and change the value of the variable res.

```java
Package com.mypackage;

Public class Solution{

Private int res = 100;

}
```

1. Any class
2. Solution class
3. Any class that extends Solution  class
4. None

**Ans :  b**

Q16.     Identify the output of the following program.

```java
String str = “abcde”;
System.out.println(str.substring(1, 3));
```

1. abc
2. bc
3. bcd
4. cd

**Ans : b**

Q17.    Identify the output of the following program.

```java
String str = “Hellow”;
System.out.println(str.indexOf(t));
```

1. 4
2. 3
3. 6
4. -1    

                                

**Ans : d ( because t is not present in the string )**

Q18.   Identify the output of the following program.

```java
Public class Test{
Public static void main(String argos[]){
	String str1 = “one”;
	String str2 = “two”;
	System.out.println(str1.concat(str2));
	}
}
```

**Ans : onetwo**

Q19.    How many objects will be created in the following?

```java
String a = new String(“Interviewbit”);

String b = new String(“Interviewbit”);

Strinc c = “Interviewbit”;

String d = “Interviewbit”;
```

**Ans : 3**

Q20.   Find the output of the following code.

```java
int ++a = 100;

System.out.println(++a);
```

**Ans :  compilation error ( not a valid identifier )**

Q21.  Find the output of the following code.

```java
Public class Solution{
Public static void main(String args[]){
		int i;
		for(i = 1; i < 6; i++){
			if(i > 3) continue;
		}
		System.out.println(i);
	}
}
```

**Ans : 6**

Q22.  Identify the infinite loop ?

1. for(;;) 
2. for(int i=0;i<1;i--)
3. for(int i=0;;i++)
4. All of the above

**Ans : d**

Q23.   Evaluate the following Java expression, if x=3, y=5, and z=10:

```java
**++z + y - y + z + x++**
```

**Ans :   25**

Q24.    What are the types of memory allocated in memory in java?

1. Heap memory
2. Stack memory
3. Both A and B
4. None of these

**Answer: C) Both A and B**

Q25.  What is the entry point of a program in Java?

1. main() method
2. The first line of code
3. Last line of code
4. main class

**Answer:  A) main() method**

Q26. Which of the below statement is true:

1. Java is a platform dependent language
2.  JRE is platform independent 
3. JVM is platform dependent
4. JVM interprets machine specific instruction set and converts into bytecode

**Answer: C) JVM is platform dependent**

Q26. Which is a not characteristic of java programming language?

1. procedural
2. robust
3. distributed
4. multithreaded

**Answer: A) procedural**



##### Note:
* Please confirm the above answers from your side, perhaps by consulting ChatGPT or checking on Google. All of them are correct, but kindly cross-check from your end