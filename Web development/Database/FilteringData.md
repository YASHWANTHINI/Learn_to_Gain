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

