### [config functions](https://docs.microsoft.com/en-us/sql/t-sql/functions/configuration-functions-transact-sql?view=sql-server-ver15)

These scalar functions return information about current configuration option settings:

@@DATEFIRST
@@DBTS
@@LANGID
@@LANGUAGE
@@LOCK_TIMEOUT
@@MAX_CONNECTIONS
@@MAX_PRECISION
@@NESTLEVEL
@@OPTIONS
@@REMSERVER
@@SERVERNAME
@@SERVICENAME
@@SPID
@@TEXTSIZE
@@VERSION

All configuration functions operate in a nondeterministic way. In other words, these functions do not always return the same results every time they are called, even with the same set of input values.

Deterministic functions always return the same result any time they are called with a specific set of input values and given the same state of the database. Nondeterministic functions may return different results each time they are called with a specific set of input values even if the database state that they access remains the same. For example, the function AVG always returns the same result given the qualifications stated above, but the GETDATE function, which returns the current datetime value, always returns a different result.

[Det vs non-det](https://docs.microsoft.com/en-us/sql/relational-databases/user-defined-functions/deterministic-and-nondeterministic-functions?view=sql-server-ver15)

[System database](https://www.mssqltips.com/sql-server-tip-category/112/system-databases/)

[Understanding how SQL Server stores data in data files](https://www.mssqltips.com/sqlservertip/4345/understanding-how-sql-server-stores-data-in-data-files/)

![image](https://user-images.githubusercontent.com/58984578/133727430-837f4642-f32a-4ae6-8eb9-dc72b4af6a7e.png)

[Designing storage for db](https://medium.com/geekculture/designing-storage-for-a-database-using-sql-server-bdc307f7dd06)
