#### Insert Data
[refer](https://docs.microsoft.com/en-us/sql/t-sql/statements/insert-transact-sql?view=sql-server-ver15)
```
use dbname;
insert into tablename (id,name) values (1,'yash');
```
if id is auto increment then we dnt wanna specify id in insert command.

For inserting more than one record then
```
insert into tablename(id, name) values
(2,'yashwa'),
(3,'meera'),
(4,'yashu');

insert into courses values
('Data Mining',3,'CS105'),
('Introduction to SQL',3,'CS106'),
('Introduction to C++',3,'CS107'),
('Website Development',3,'CS108'),
('Internet Authoring',3,'CS109'),
('Artificial Intelligence',3,'CS110')
```
#### Select data
[refer](https://docs.microsoft.com/en-us/sql/t-sql/queries/select-transact-sql?view=sql-server-ver15)
```
use dbname;
select * from tablename;
select id, firstname, lastname from tablename;

select id as [Student id] from tablename; // it will display the id column name with student id

select id [Student id] from tablename; // can specify without as
```

![image](https://user-images.githubusercontent.com/58984578/119770286-99a77000-bed9-11eb-9faa-f7f53519dd4e.png)

[Like operator](https://www.sqlshack.com/sql-like-logical-operator-introduction-and-overview/)

```
select * from [dbname].[dbo].[tablename] where lastname='name'; // without specifying use dbname
```
```
select lastname from [dbname].[dbo].[tablename] where lastname like '%i%'; // if lastname contains i in the name it will be selected. eg: retrieved sample data: Williams, Diya,lakshmi... 

select lastname from [dbname].[dbo].[tablename] where lastname like 'i%';//begin with i

select lastname from [dbname].[dbo].[tablename] where lastname like '%i';//end with i
```
dbo - schema (collection of db objects)

![image](https://user-images.githubusercontent.com/58984578/119771414-4cc49900-bedb-11eb-9863-bedace4086fa.png)

![image](https://user-images.githubusercontent.com/58984578/119771506-741b6600-bedb-11eb-9da5-56cdcfcf53f1.png)

![image](https://user-images.githubusercontent.com/58984578/119771564-885f6300-bedb-11eb-9019-fe0991750070.png)

```
select name from tablename where counting = 3 || counting < 2 || counting <= 5 || counting > 6 || counting >=6 ;
```
Select DISTINCT stmt is used to return only uniquerows in result.
```
select distinct deptnum from tablename;
```
#### update data
[refer](https://docs.microsoft.com/en-us/sql/t-sql/queries/update-transact-sql?view=sql-server-ver15)
```
update talename set columnaname='value' where condition;

update students set courseid= 123 where name = 'yash';

update Students set enrollmentdate = '2019-05-01' where enrollmentdate is null

-- Update all enrollment dates
-- Update multiple records (be careful)
update Students set enrollmentdate = '2019-06-10'
GO // optional

-- Update multiple columns
update Students set firstname = 'Tajee', lastname = 'McDermott'
where id = 7

update Students set firstname = 'Rhoddy', lastname = 'Shawn'
where id = 11

```
[Operator](https://www.c-sharpcorner.com/blogs/operators-in-sql-server)

#### Delete data
[Refer](https://docs.microsoft.com/en-us/sql/t-sql/statements/delete-transact-sql?view=sql-server-ver15)

[refer](https://stackoverflow.com/questions/22336807/difference-between-delete-and-delete-from-in-sql/22336960)
The first FROM keyword is syntactically optional in a DELETE statement.

[Refer](http://technet.microsoft.com/en-us/library/ms189835.aspx)

The keyword is optional for two reasons.

First, the standard requires the FROM keyword in the clause, so it would have to be there for standards compliance.

Second, although the keyword is redundant, that's probably not why it's optional. I believe that it's because SQL Server allows you to specify a JOIN in the DELETE statement, and making the first FROM mandatory makes it awkward.

For example, here's a normal delete:

```DELETE FROM Employee WHERE ID = @value```

And that can be shortened to:

```DELETE Employee WHERE ID = @value```

#### Truncate Table
delete all records but leaves the structures.

``` truncate table tablename; ```

#### Dropping database, table
deleting the table(including structure) from database.

```
drop table tablename
drop database dbname 
```

#### Backing up databse
full backup takes complete copy of ghe databse including transaction logs.
```
use dbname
backup database dbname
to disk ='D:\folderame\filename.bak'
go
```
#### Restore database
```
restore database dbname
from disk = 'D:\folderame\filename.bak'
go
```
