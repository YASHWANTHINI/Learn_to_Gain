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

