Used to generate summary of data by grouping multiple rows.
Transact-SQL provides the following aggregate functions:

      APPROX_COUNT_DISTINCT
      AVG
      CHECKSUM_AGG
      COUNT
      COUNT_BIG
      GROUPING
      GROUPING_ID
      MAX
      MIN
      STDEV
      STDEVP
      STRING_AGG
      SUM
      VAR
      VARP
      
[refer](https://docs.microsoft.com/en-us/sql/t-sql/functions/aggregate-functions-transact-sql?view=sql-server-ver15)

#### Count
```
select count(*) from tavlename;

select name, count(*) from tavlename group by name;
```

#### MIN
    SELECT MIN(TaxRate) FROM Sales.SalesTaxRate;

#### MAX

     SELECT MAX(TaxRate) FROM Sales.SalesTaxRate;
     
#### SUM

    SELECT SUM(TaxRate) FROM Sales.SalesTaxRate;
    
#### AVG
    select AVG(TaxRate) from Sales.SalesTaxRate;
