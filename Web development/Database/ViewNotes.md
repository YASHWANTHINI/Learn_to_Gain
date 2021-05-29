#### View
 * It is a virtual table based on the result-set of SQL stmt.
 * These are stored SELECT stmt that can be queried like table
 * Data in view is uaually up-to-date. 

```
create view vw_Name
AS
select name from tablename;
GO
```
AS keywork is alias. These are used to give table or column in table, temporary name. It onl exists for the duration of the queery. 

[View refer](https://docs.microsoft.com/en-us/sql/relational-databases/views/views?view=sql-server-ver15)

[View notes](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-view-transact-sql?view=sql-server-ver15)
