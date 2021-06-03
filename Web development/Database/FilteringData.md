### Filtering records
  * where clause
  * equality comparison
  * basic comparison
  * logical comparison
  * string comparison
  * null comparison
  * RegEx expression

#### Predicate Logic
Predicate Logic is a foundational concept that is fundamental to Relational Database Management Systems. By definition, a predicate is an expression that evaluates to TRUE, FALSE or UNKNOWN. The result of such expression is often used on filtering clauses like WHERE, HAVING, and JOINS to determine the final result set extracted from a table or a set of tables.
```
-- Simple Predicate with IN Operator
USE KTrain
GO
SELECT * FROM TAB2
WHERE EMPID IN (2,3,4);
```
below image is considered when where clause is used.

![image](https://user-images.githubusercontent.com/58984578/120438666-492f8700-c39f-11eb-8e38-1575b0876b95.png)

The most common operators are processed in the following order:

     Parenthesis ()
     Multiplication Division and Modulo (* , / , % – )
     Positive, Negative, Addition, Concatenation, Subtraction (+, -)
     Comparison Operators (=, >, <, >=, <=, <>,!= , !>, !<)
     NOT
     AND
     BETWEEN, IN, LIKE, OR
     Assignment (=)

#### Filtering Groups of Rows
T-SQL provides a technique to organize a data set into groups of rows to perform aggregate operations on each group. Once these groups are achieved, it is then possible to filter the groups of rows using the HAVING Clause. The HAVING clause is essentially a way to filter groups in the same way the WHERE clause is used to filter rows.

#### Difference between WHERE and HAVING Clause

![image](https://user-images.githubusercontent.com/58984578/120505580-b9abc780-c3e2-11eb-8922-e9ef2ad576c8.png)

```
SELECT Age, COUNT(Roll_No) AS No_of_Students 
FROM Student GROUP BY Age
HAVING COUNT(Roll_No) > 1 

SELECT S_Name, Age FROM Student 
WHERE Age >=18
```
#### Group By stmt
The GROUP BY Statement in SQL is used to arrange identical data into groups with the help of some functions. i.e if a particular column has same values in different rows then it will arrange these rows in a group.

Important Points:

    GROUP BY clause is used with the SELECT statement.
    In the query, GROUP BY clause is placed after the WHERE clause.
    In the query, GROUP BY clause is placed before ORDER BY clause if used any.

The GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one or more columns.

#### Group By single column

![image](https://user-images.githubusercontent.com/58984578/120506458-8fa6d500-c3e3-11eb-9ea6-e8f8671cc4ba.png)

![image](https://user-images.githubusercontent.com/58984578/120507111-27a4be80-c3e4-11eb-8b29-07853ab09919.png)

``` SELECT NAME, SUM(SALARY) FROM Employee GROUP BY NAME;```

![image](https://user-images.githubusercontent.com/58984578/120506503-9b929700-c3e3-11eb-9b77-ec67f2a3393e.png)

#### Group By multiple columns

```
SELECT SUBJECT, YEAR, Count(*)
FROM Student
GROUP BY SUBJECT, YEAR;
```

![image](https://user-images.githubusercontent.com/58984578/120506818-e4e2e680-c3e3-11eb-8194-72e9723f1f3a.png)

#### Having
```
SELECT NAME, SUM(SALARY) FROM Employee 
GROUP BY NAME
HAVING SUM(SALARY)>3000; 
```

![image](https://user-images.githubusercontent.com/58984578/120507239-430fc980-c3e4-11eb-8dc2-9bacc2166877.png)

#### WITH TIES clause

![image](https://user-images.githubusercontent.com/58984578/120508243-2fb12e00-c3e5-11eb-87d3-61b71513987d.png)

```
SELECT * from myTable 
order by salary desc 
fetch first 3 rows only;
```
![image](https://user-images.githubusercontent.com/58984578/120508437-58d1be80-c3e5-11eb-951e-413d3d9f355a.png)

Note: In the above result we got first 3 rows, ordered by Salary in Descending Order, but we have one more row with same salary i.e, the row with name Watson and Salary 10000, but it didn’t came up, because we restricted our output to first three rows only. But this is not optimal, because most of the time in live applications we will be required to display the tied rows also.

Real Life Example – Suppose we have 10 Racers running, and we have only 3 prizes i.e, first, second, third, but suppose, Racers 3 and 4 finished the race together in same time, so in this case we have a tie between 3 and 4 and that’s why both are holder of Position 3.

So, to overcome the above problem, Oracle introduces a clause known as With Ties clause. Now, let’s see our previous example using With Ties clause.
```
Query:
SELECT * from myTable 
order by salary desc 
fetch first 3 rows With Ties;

Output:
See we get only first 3 rows order by Salary in Descending Order along with Tied Row also

ID    NAME       SALARY
--------------------------
3    Dhoni     16000
1    Geeks     10000
6    Watson    10000 // We get Tied Row also
4    Finch     10000
```
Note: We get the tied row in our output, only when we use the order by clause in our Select statement. Suppose, if we won’t use order by clause, and still we are using with ties clause, then we won’t get the tied row in our output 
```
Query:
SELECT * from myTable 
fetch first 3 rows With Ties;

Output:
See we won't get the tied row because we didn't use order by clause

ID    NAME      SALARY
--------------------------
1    Geeks    10000
4    Finch    10000
2    RR       6000
```
#### OFFSET-FETCH Clause
OFFSET and FETCH Clause are used in conjunction with SELECT and ORDER BY clause to provide a means to retrieve a range of records.

#### OFFSET
The OFFSET argument is used to identify the starting point to return rows from a result set. Basically, it exclude the first set of records.
Note:

    OFFSET can only be used with ORDER BY clause. It cannot be used on its own.
    OFFSET value must be greater than or equal to zero. It cannot be negative, else return error.
```
SELECT column_name(s)
FROM table_name
WHERE condition
ORDER BY column_name
OFFSET rows_to_skip ROWS;
```
![image](https://user-images.githubusercontent.com/58984578/120513603-11016600-c3ea-11eb-88ae-d2e076a7b28d.png)
```
SELECT Fname, Lname
FROM Employee
ORDER BY Salary
OFFSET 1 ROWS;
```
Print Fname, Lname of all the Employee except the employee having lowest salary.

![image](https://user-images.githubusercontent.com/58984578/120513737-2ffff800-c3ea-11eb-81a9-661936230a31.png)

#### FETCH
The FETCH argument is used to return a set of number of rows. FETCH can’t be used itself, it is used in conjuction with OFFSET.
Syntax:
```
SELECT column_name(s)
FROM table_name
ORDER BY column_name
OFFSET rows_to_skip
FETCH NEXT number_of_rows ROWS ONLY;
```
Print the Fname, Lname from 3rd to 6th tuple of Employee table when sorted according to the Salary.
```
SELECT Fname, Lname
FROM Employee
ORDER BY Salary
OFFSET 2 ROWS
FETCH NEXT 4 ROWS ONLY;
```

![image](https://user-images.githubusercontent.com/58984578/120514105-9127cb80-c3ea-11eb-9e7a-2761ffde0dbe.png)

Print the bottom 2 tuples of Employee table when sorted by Salary.
```
SELECT Fname, Lname
FROM Employee
ORDER BY Salary
OFFSET (SELECT COUNT(*) FROM EMPLOYEE) - 2 ROWS
FETCH NEXT 2 ROWS;
```
![image](https://user-images.githubusercontent.com/58984578/120514173-a3a20500-c3ea-11eb-867a-0e6447b80c94.png)

Important Points:

    OFFSET clause is mandatory with FETCH. You can never use, ORDER BY … FETCH.
    TOP cannot be combined with OFFSET and FETCH.
    The OFFSET/FETCH row count expression can be only be any arithmetic, constant, or parameter expression which will return an integer value.
    ORDER BY is mandatory to be used with  OFFSET and FETCH clause.
    OFFSET value must be greater than or equal to zero. It cannot be negative, else return error.

#### equality comparison

[refer](https://docs.microsoft.com/en-us/sql/t-sql/language-elements/comparison-operators-transact-sql?view=sql-server-ver15)
```
DECLARE @MyVar int;
SET @MyVar = 5;

select name from tablename where id = @MyVar; // equal to
select name from tablename where id <> @MyVar;//not equal
select name from tablename where id <= @MyVar;//lessthan (possible for >, < , >=)
```
<b>When you compare using a NULL expression, the result depends on the ANSI_NULLS setting:

If ANSI_NULLS is set to ON, the result of any comparison with NULL is UNKNOWN, following the ANSI convention that NULL is an unknown value and cannot be compared with any other value, including other NULLs.
<br/>
If ANSI_NULLS is set to OFF, the result of comparing NULL to NULL is TRUE, and the result of comparing NULL to any other value is FALSE.</b>
```
-- SET ANSI_NULLS to ON and test.  
PRINT 'Testing ANSI_NULLS ON';  
SET ANSI_NULLS ON;  
GO  
DECLARE @varname int;  
SET @varname = NULL  
  
SELECT a   
FROM t1   
WHERE a = @varname;  
  
SELECT a   
FROM t1   
WHERE a <> @varname;  
  
SELECT a   
FROM t1   
WHERE a IS NULL;  
GO  
//output 
 Testing ANSI_NULLS ON  
a  
-----------  
  
(0 row(s) affected)  
  
a  
-----------  
  
(0 row(s) affected)  
  
a  
-----------  
NULL  
  
(1 row(s) affected)

-- SET ANSI_NULLS to OFF and test.  
PRINT 'Testing SET ANSI_NULLS OFF';  
SET ANSI_NULLS OFF;  
GO  
DECLARE @varname int;  
SET @varname = NULL;  
SELECT a   
FROM t1   
WHERE a = @varname;  
  
SELECT a   
FROM t1   
WHERE a <> @varname;  
  
SELECT a   
FROM t1   
WHERE a IS NULL;  
GO  

//output
Testing SET ANSI_NULLS OFF  
a  
-----------  
NULL  
  
(1 row(s) affected)  
  
a  
-----------  
0  
1  
  
(2 row(s) affected)  
  
a  
-----------  
NULL  
  
(1 row(s) affected)  
```

### Using >, < 
```
DECLARE @a INT = 45, @b INT = 40;  
SELECT IIF ( @a > @b, 'TRUE', 'FALSE' ) AS Result; //true if < then false
```

