#### What is Variable?
In MS SQL, variables are the object which acts as a placeholder to a memory location. Variable hold single data value.

MS SQL has two types of variables:

Local variable
Global variable.
However, the user can only create a local variable.

![image](https://user-images.githubusercontent.com/58984578/120588310-9b7eaf80-c454-11eb-82a9-380caca7bb6a.png)

#### Local variable:
A user declares the local variable.
By default, a local variable starts with @.
Every local variable scope has the restriction to the current batch or procedure within any given session.

#### Global variable:
The system maintains the global variable. A user cannot declare them.
The global variable starts with @@
It stores session related information.

#### How to DECLARE a variable
Before using any variable in batch or procedure, you need to declare the variable.
DECLARE command is used to DECLARE variable which acts as a placeholder for the memory location.
Only once the declaration is made, a variable can be used in the subsequent part of batch or procedure.

#### Rules:

      Initialization is an optional thing while declaring.
      By default, DECLARE initializes variable to NULL.
      Using the keyword 'AS' is optional.
      To declare more than one local variable, use a comma after the first local variable definition, and then define the next local variable name and data type.

#### Examples of Declaring a variable:
Query: With 'AS'
```DECLARE @COURSE_ID AS INT;```

Query: Without 'AS'
```DECLARE @COURSE_NAME VARCHAR (10);```

Query: DECLARE two variables
```DECLARE @COURSE_ID AS INT, @COURSE_NAME VARCHAR (10);```

#### Assigning a value to a VARIABLE
You can assign a value to a variable in the following three ways:

      During variable declaration using DECLARE keyword.
      Using SET
      Using SELECT

During variable declaration using DECLARE keyword.
T-SQL Syntax:

#### DECLARE { @Local_Variable [AS] Datatype [ = value ] }
Query:
```
DECLARE @COURSE_ID AS INT = 5
PRINT @COURSE_ID
```

#### Using SET
Sometimes we want to keep declaration and initialization separate. SET can be used to assign values to the variable, post declaring a variable.
Using SET
Sometimes we want to keep declaration and initialization separate. SET can be used to assign values to the variable, post declaring a variable.

#### Assign a value to multiple variables using SET.
Syntax:
```
DECLARE @Local_Variable _1 <Data_Type>, @Local_Variable_2 <Data_Type>,
SET @Local_Variable_1 = <Value_1>
SET @Local_Variable_2 = <Value_2>
```
Rule: One SET Keyword can be used to assign a value to only one variable.
Query:
```
DECLARE @COURSE_ID as INT, @COURSE_NAME AS VARCHAR(5)
SET @COURSE_ID = 5
SET @COURSE_NAME = 'UNIX'
PRINT @COURSE_ID
PRINT @COURSE_NAME
```
Assigning a value to a variable with a Scalar Subquery using SET

Syntax:

DECLARE @Local_Variable_1 <Data_Type>, @Local_Variable_2 <Data_Type>,SET @Local_Variable_1 = (SELECT <Column_1> from <Table_Name> where <Condition_1>)
Rules:

    Enclose the query in parenthesis.
    The query should be a scalar query. A scalar query is a query with results as just one row and one column. Otherwise, the query will throw an error.
    If the query returns zero rows, then the variable is set to EMPTY, i.e., NULL.
```
DECLARE @COURSE_NAME VARCHAR (10)
SET @COURSE_NAME = (select Tutorial_name from Guru99 where Tutorial_ID = 3)
PRINT @COURSE_NAME
```
#### USING SELECT
Just like SET, we can also use SELECT to assign values to the variables, post declaring a variable using DECLARE.
Assigning a value to a variable using SELECT
Syntax:
```
DECLARE @LOCAL_VARIABLE <Data_Type>
SELECT @LOCAL_VARIABLE = <Value>
```
Query:
```
DECLARE @COURSE_ID INT
SELECT @COURSE_ID = 5
PRINT @COURSE_ID
```

#### Assigning a value to multiple variable using SELECT
Syntax:
```
DECLARE @Local_Variable _1 <Data_Type>, @Local_Variable _2 <Data_Type>,SELECT @Local_Variable _1 = <Value_1>,  @Local_Variable _2 = <Value_2>
```
Rules: Unlike SET, SELECT can be used to assign a value to multiple variables separated by the comma.
```
DECLARE @COURSE_ID as INT, @COURSE_NAME AS VARCHAR(5)
SELECT @COURSE_ID = 5, @COURSE_NAME = 'UNIX'
PRINT @COURSE_ID
PRINT @COURSE_NAME
```
#### Assigning the value to a variable with a Subquery using SELECT
Syntax:
```
DECLARE @Local_Variable_1 <Data_Type>, @Local_Variable _2 <Data_Type>,SELECT @Local_Variable _1 = (SELECT <Column_1> from <Table_name> where <Condition_1>)
```
Rules:  
    Enclose the query in Parenthesis.
    The query should be a scalar query. The scalar query is the query with the result as one row and one column. Otherwise, the query will throw an error.
    If the query returns zero rows, then the variable is EMPTY, i.e., NULL.

```
DECLARE @COURSE_NAME VARCHAR (10)
SELECT @COURSE_NAME = (select Tutorial_name from Guru99 where Tutorial_ID = 1)
PRINT @COURSE_NAME  
```    
Using variable in the query
Query:
```
DECLARE @COURSE_ID Int = 1
SELECT * from Guru99 where Tutorial_id = @COURSE_ID
```
#### Facts
    A local variable can be displayed using PRINT as well as SELECT COMMAND
    Table Data type doesn't allow the use of 'AS' during declaration.
    SET complies with ANSI standards whereas SELECT does not.
    Creating a local variable with the name as @ is also allowed. We can declare it as,
    for example:'DECLARE @@ as VARCHAR (10)
    
 [declare reference](https://docs.microsoft.com/en-us/sql/t-sql/language-elements/declare-local-variable-transact-sql?view=sql-server-ver15)
 [variables reference](https://docs.microsoft.com/en-us/sql/t-sql/language-elements/variables-transact-sql?view=sql-server-ver15)
 
 
 
