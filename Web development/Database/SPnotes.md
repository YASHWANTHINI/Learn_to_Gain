#### Stored Procedure
 It is one or more T-SQL that executes as a batch.
 It can have both input and utput parameters.
 They can contain stmt to control flow of the code
 
 ```
 Create procedure pr_name @Varprice money
  AS
  BEGIN
  PRINT 'PRODUCT LESS THAN' + CAST (@Varprice AS varchar(10));
  SELECT NAME FROM TABLENAME / VIEWNAME WHERE price < @Varprice;
  END
 GO
 
 
 EXECUTE pr_name 10.00;
 GO
 ```
  
7th line - procedure created with name pr_name and @Varprice is a input variable and money as datatype.
9th line - stmt block should have begin and end keyword and includes set of sql stmt. stmt block is also refered as batch.
10th line - + is used for concatenate. cast is a function used t convert one datatype(money) to another datatype(varchar).
