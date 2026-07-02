# SQL/PLSQL

![image.png](./Image/SQL-PLSQL-1.jpeg)
![image.png](./Image/SQL-PLSQL-2.jpeg)
![image.png](./Image/SQL-PLSQL-3.jpeg)
![image.png](./Image/SQL-PLSQL-4.jpeg)
![image.png](./Image/SQL-PLSQL-5.jpeg)
![image.png](./Image/SQL-PLSQL-6.jpeg)
![image.png](./Image/SQL-PLSQL-7.jpeg)
![image.png](./Image/SQL-PLSQL-8.jpeg)
![image.png](./Image/SQL-PLSQL-9.jpeg)
![image.png](./Image/SQL-PLSQL-10.jpeg)
![image.png](./Image/SQL-PLSQL-11.jpeg)
![image.png](./Image/SQL-PLSQL-12.jpeg)
![image.png](./Image/SQL-PLSQL-13.jpeg)
![image.png](./Image/SQL-PLSQL-14.jpeg)
![image.png](./Image/SQL-PLSQL-15.jpeg)
![image.png](./Image/SQL-PLSQL-16.jpeg)
![image.png](./Image/SQL-PLSQL-17.jpeg)
![image.png](./Image/SQL-PLSQL-18.jpeg)
![image.png](./Image/SQL-PLSQL-19.jpeg)

**Answer:** DELETE is a SQL command . The answer is ORDER BY.

![image.png](./Image/SQL-PLSQL-20.jpeg)
![image.png](./Image/SQL-PLSQL-21.jpeg)
![image.png](./Image/SQL-PLSQL-22.jpeg)
![image.png](./Image/SQL-PLSQL-23.jpeg)
![image.png](./Image/SQL-PLSQL-24.jpeg)
![image.png](./Image/SQL-PLSQL-25.jpeg)
![image.png](./Image/SQL-PLSQL-26.jpeg)
![image.png](./Image/SQL-PLSQL-27.jpeg)
![image.png](./Image/SQL-PLSQL-28.jpeg)
![image.png](./Image/SQL-PLSQL-29.jpeg)
![image.png](./Image/SQL-PLSQL-30.jpeg)


Note: 
* Truncate -> delete all rows 
* Drop-> delete all rows and also the structure of the table from the database



**PLSQL - Procedural Language/SQL**

**Advantage :** 

- It offers extensive error checking , numerous data types and a variety of programming structures.

----

Q1.  What is wrong in the following code snippet?

```java
DECLARE

x number := 1;

BEGIN

LOOP

dbms_output.put_line(x);

x := x + 1;

IF x > 10 THEN

exit;

END IF;

dbms_output.put_line('After Exit x is: ' || x);

END;
```

1. There is nothing wrong.
2. The IF statement is not required.
3. There should be an END LOOP statement.
4. The exit statement should be in capital letters.

**Ans : c**

Q2.  Consider the following code snippet: how many times the loop will run?

```java
DECLARE
a number(2);
BEGIN
FOR a in 10 .. 20 LOOP
END LOOP;
END;
```

1. 11
2. 10
3. 9
4. Infinite loop

**Ans : A**

Q3.  Which of the following is true about PL/SQL package body?

1. The package body has the codes for various methods declared in the package specification and other private declarations.
2. It is created using the CREATE PACKAGE Statement.
3. The codes, methods and types declared in package body are not hidden from code outside the package.
4. All of the above.

**Ans : A**

Q4.   Which of the following code is the correct syntax for creating a nested table named salary that will store integer values?

1. TYPE salary IS TABLE OF INTEGER;
2. TYPE salary IS NESTED TABLE OF INTEGER;
3. TABLE salary IS NESTED BY INTEGER;
4. TABLE salary IS INDEXED BY INTEGER;

**Ans :A**

Q5.  PL/SQL programs are written as lines of text using a specific set of characters.

1. Upper- and lower-case letters A .. Z and a .. z
2. Numerals 0 .. 9
3. Symbols ( ) + - * / < > = ! ~ ^ ; : . ' @ % , " # $ & _ | { } ? [ ]
4. Tabs, spaces, and carriage returns
5. All mentioned above

**Ans : e**

Q6.  Which statements execute a sequence of statements multiple times?

1. EXIT
2. LOOP
3. Both A & B
4. None of the above

**Ans : b**

Q7.  A Variable in PL/SQL should not exceed –

1. 10
2. 20
3. 30
4. 40

**Ans : c**

Q8.  What is the syntax of PL/SQL Loop?

```java
a. 
LOOP
END LOOP;
Sequence of statements;

b. 
END LOOP;
LOOP
Sequence of statements;

c. 
LOOP
Sequence of statements;
END LOOP;

d. 
END LOOP;
Sequence of statements;
LOOP
```

**Ans : c**

Q9.  How many types of PL/SQL Loops are there?

1. 3
2. 5
3. 4
4. 6

**Ans: c**

Q10.  In order to remove the PL/SQL function, which function is used?

1. REMOVE FUNCTION
2. DELETE FUNCTION
3. ERASE FUNCTION
4. DROP FUNCTION

**Ans: d**

Q11.  ____________is not a PL/SQL unit.

1. Type
2. Table
3. Trigger
4. none

**Ans : Table**

SQL -- Structured Query Language

Table Create -   create table

```java
CREATE TABLE STUDENTS (
	ID INT NOT NULL,
	NAMEVARCHAR(20) NOT NULL,
	AGE INT NOT NULL,
	ADDRESS CHAR (25),
	PRIMARY KEY (ID)
);
```

**Insert Values :**

```java
INSERT INTO Students (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (1, 'Ramesh', 32, 'Ahmedabad', 2000.00 );
```

**Q1.   Which of the following is not a valid SQL type?**

1. FLOAT
2. NUMERIC
3. DECIMAL
4. CHARACTER

**Ans : Decimal**

**Q2.  Which of the following is not a DDL command?**

1. TRUNCATE
2. ALTER
3. CREATE
4. UPDATE

**Ans : d**

Explanation :  DDL commands are used to define the structure of the database, table, schemas, etc . It enables us to perform the operations like CREATE, DROP, ALTER, RENAME, and TRUNCATE schema objects.

An UPDATE command is used for managing the data stored in a database. It is an example of a DML command that also includes the INSERT and DELETE commands.

**Q3.  How many Primary keys can have in a table?**

1. Only 1
2. Only 2
3. Depends on no of Columns
4. Depends on DBA

**Ans : a**

**Q4.    What is the difference between a PRIMARY KEY and a UNIQUE KEY?**

1. Primary key can store null value, whereas a unique key cannot store null value.
2. We can have only one primary key in a table while we can have multiple unique keys
3. Primary key cannot be a date variable whereas unique key can be
4. None of these

**Ans : b**

**Q5.  ______ is NOT a type of constraint in SQL language?**

1. FOREIGN KEY
2. PRIMARY KEY
3. UNIQUE
4. ALTERNATE KEY

**Ans : d**

**Q6.   Find the cities name with the condition and temperature from table 'whether' where condition = sunny or cloudy but temperature >= 60.**

1. SELECT city, temperature, condition FROM weather WHERE condition = 'cloudy' AND condition = 'sunny' OR temperature >= 60
2. SELECT city, temperature, condition FROM weather WHERE condition = 'cloudy' OR condition = 'sunny' OR temperature >= 60
3. SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' OR condition = 'cloudy' AND temperature >= 60
4. SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' AND condition = 'cloudy' AND temperature >= 60

**Ans : c**

**Q7.   Which statement is used to get all data from the student table whose name starts with  p?**

1. SELECT * FROM student WHERE name LIKE '%p%';
2. SELECT * FROM student WHERE name LIKE 'p%';
3. SELECT * FROM student WHERE name LIKE '_p%';
4. SELECT * FROM student WHERE name LIKE '%p';

**Ans : b**

**Q8.    How can you change "Thomas" into "Michel" in the "LastName" column in the Users table?**

1. UPDATE User SET LastName = 'Thomas' INTO LastName = 'Michel'
2. MODIFY Users SET LastName = 'Michel' WHERE LastName = 'Thomas'
3. MODIFY Users SET LastName = 'Thomas' INTO LastName = 'Michel'
4. UPDATE Users SET LastName = 'Michel' WHERE LastName = 'Thomas'

**Ans : d**

Q9.    **What does the following statement in SQL do?**

**Drop table Student ;**

**Ans : Deletes a table called Student**

**Q10.     How many operations are considered to be the most basic SQL operations?**

**Ans :    4 (CRUD)**

**create, read, update and delete**

**Q11.    What is a table joined with itself called?**

1. join
2. outer join
3. Self join
4. None of these

**Ans :  Self join**

**Q12.    Which of the following is also known as a concatenated key?**

Ans :    Composite Key

**Q13.  Which of the following is known as the minimal super key?**

Ans :   Candidate Key

**Q14.   Which of the following is not a valid aggregate function?**

1. COUNT
2. COMPUTE
3. SUM
4. MAX

**Ans: Compute**

**Q15.   What does BLOB in SQL stand for?**

Ans : Binary Large Object



#### Note: 
- Please confirm the above answers from your side, perhaps by consulting ChatGPT or checking on Google. All of them are correct, but kindly cross-check from your end