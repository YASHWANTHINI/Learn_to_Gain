#### TOP command
Limits the rows returned in a query result set to a specified number of rows or percentage of rows in SQL Server. When you use TOP with the ORDER BY clause, the result set is limited to the first N number of ordered rows. Otherwise, TOP returns the first N number of rows in an undefined order. Use this clause to specify the number of rows returned from a SELECT statement. Or, use TOP to specify the rows affected by an INSERT, UPDATE, MERGE, or DELETE statement.

#### Syntax
``` TOP (expression) [PERCENT]  ```
 expression
The numeric expression that specifies the number of rows to be returned. expression is implicitly converted to a float value if you specify PERCENT. Otherwise, expression is converted to bigint.

PERCENT
Indicates that the query returns only the first expression percent of rows from the result set. Fractional values are rounded up to the next integer value.
 ```
 SELECT TOP(1) Model, Color, Price  
FROM dbo.Cars  
WHERE Color = 'red'  
UNION ALL  
SELECT TOP(1) Model, Color, Price  
FROM dbo.Cars  
WHERE Color = 'blue'  
ORDER BY Price ASC;  
GO 

Model         Color      Price  
------------- ---------- -------  
sedan         red        10000.00  
convertible   blue       15000.00

select TOP 7 name from tablename
```

#### GO 
 * GO is a command recognised bt SSMS and not T-SQL stmt.
 * it is used as a signal to perform a task or batch terminator.
 * GO command is used to group SQL commands into batches which are sent to the server together. The commands included in the batch, that is, the set of commands since the last GO command or the start of the session, must be logically consistent.  
 * Tools> option 👇

![image](https://user-images.githubusercontent.com/58984578/119944004-60daca00-bfb1-11eb-846b-b7426adaa669.png)

#### USE 
 * USE command is used to change the database context to specified db.
```
use dbname;
```
#### DISTINCT 
unique data are accessed through distinct.
```
select DISTINCT TOP 5 name from tablename;
```
#### Difference between distinct and unique
The main difference between unique and distinct is that UNIQUE is a constraint that is used on the input of data and ensures data integrity. While DISTINCT keyword is used when we want to query our results or in other words, output the data. Both UNIQUE and DISTINCT key words ensure the same thing, i.e. data is not repeated.

#### Substring
syntax : SUBSTRING ( expression ,start , length )
```
select SUBSTRING (name, 1 , 3) from tablename;
if a name is yashwa then output will ne yas

select name from tablename where substring(name,2,1)='o';

if a name contains (osho, polard, goal) then polard and goal is the result.

SELECT x = SUBSTRING('abcdef', 2, 3);
x  
----------  
bcd  
```
[refer](https://docs.microsoft.com/en-us/sql/t-sql/functions/substring-transact-sql?view=sql-server-ver15)

#### LIKE 
 * this operator is used in where clause to search for specific pattern in column.
 * Is used in conjunction with wildcard to find patterns within string attributes.
 * Wildcard characters are percent sign(%) and underscore sign( _ )
 * percent sign means any and all following or preceding characters are eligible and represents 0, one or multiple characters.
 * underscore means any one character may be substituted and represents one, sinle character. 
```
select name from tablename where name like '%y%;

name
-----
yashwa  // can also executed when like '%ya%'
divya
manasvy
```
[wildcard refer](https://docs.microsoft.com/en-us/sql/t-sql/language-elements/wildcard-character-s-to-match-transact-sql?view=sql-server-2017)

#### Upper and lower case
```
select upper(name) as uppercase, lower(name) as lowercase from tablename;
```

#### AS
alias name given to column name tablename and result of aritmetic expression.
``` select salary*2 as budget from employee; ```

#### BETWEEN
 * it select rows/values within the given range. the values can be numbers, text or dates.
 * This operator is inclusive to begin and end values are included.
``` 
select name from tablename where salary between 1500 and 3000;
//salary including 1500, 3000 and it's between values are listed. 

SELECT Fname, Lname
FROM Employee
where DOB
BETWEEN '1985-01-01' AND '1990-12-30';

SELECT Fname, Lname
FROM Emplyoee
WHERE Salary
NOT BETWEEN 30000 AND 45000;

//not between excludes the basic between results.
```

 #### IN
  * allows to specify multiple values in where clause
  * it will select the rows if any of the value in the condition matched.
  * IN operator allows you to easily test if the expression matches any value in the list of values. It is used to remove the need of multiple OR condition in SELECT, INSERT, UPDATE or DELETE. 
```
SELECT Fname, Lname
FROM Employee
WHERE Salary IN (30000, 40000, 25000);

SELECT Fname, Lname
FROM Employee
WHERE Salary NOT IN (25000, 30000);

-- Uses AdventureWorks  
  
SELECT * FROM FactInternetSalesReason   
WHERE SalesReasonKey   
IN (SELECT SalesReasonKey FROM DimSalesReason);

-- Uses AdventureWorks  
  
SELECT * FROM FactInternetSalesReason   
WHERE SalesReasonKey   
NOT IN (SELECT SalesReasonKey FROM DimSalesReason);

-- Uses AdventureWorks  
  
SELECT FirstName, LastName  
FROM DimEmployee  
WHERE FirstName IN ('Mike', 'Michael');
```
<b> Caution</b>
Any null values returned by subquery or expression that are compared to test_expression using IN or NOT IN return UNKNOWN. Using null values in together with IN or NOT IN can produce unexpected results.
Explicitly including an extremely large number of values (many thousands of values separated by commas) within the parentheses, in an IN clause can consume resources and return errors 8623 or 8632. To work around this problem, store the items in the IN list in a table, and use a SELECT subquery within an IN clause.
Error 8623:
The query processor ran out of internal resources and could not produce a query plan. This is a rare event and only expected for extremely complex queries or queries that reference a very large number of tables or partitions. Please simplify the query. If you believe you have received this message in error, contact Customer Support Services for more information.
Error 8632:
Internal error: An expression services limit has been reached. Please look for potentially complex expressions in your query, and try to simplify them.

#### Comparing OR vs IN
OR
```
-- Uses AdventureWorks  
  
SELECT p.FirstName, p.LastName, e.JobTitle  
FROM Person.Person AS p  
JOIN HumanResources.Employee AS e  
    ON p.BusinessEntityID = e.BusinessEntityID  
WHERE e.JobTitle = 'Design Engineer'   
   OR e.JobTitle = 'Tool Designer'   
   OR e.JobTitle = 'Marketing Assistant';  
GO
```
IN
```
-- Uses AdventureWorks  
  
SELECT p.FirstName, p.LastName, e.JobTitle  
FROM Person.Person AS p  
JOIN HumanResources.Employee AS e  
    ON p.BusinessEntityID = e.BusinessEntityID  
WHERE e.JobTitle IN ('Design Engineer', 'Tool Designer', 'Marketing Assistant');  
GO
```
#### IS NULL
NULL value - if a field in a table is optional or field with no value.

IS NULL - used to check NULL attribute value.
IS NOT NULL - used to check for non null attribute value.
```
name
----
null
null
yashwa
yash

select name from tablename where name IS NULL ; 2 null executed
select name from tablename where IS NOT NUL; // 2 name executed.
 
