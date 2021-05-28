#### Database 
   Storage of data in organised and structured way.
   <b>Database Model</b> is a technique followed by database to organize and structure the data.

* Relational Database Model [MS SQL](https://www.guru99.com/ms-sql-server-tutorial.html) 
* [Hierarchial DM](https://www.tutorialspoint.com/Hierarchical-Database-Model)  
* [Object oriented DM](https://phoenixnap.com/kb/object-oriented-database) 
* [Network DM](https://www.c-sharpcorner.com/article/what-is-a-network-database/) 
* [Document oriented DM (NoSQL)](https://www.mongodb.com/document-databases) 


#### Notes
[Is MongoDB object oriented?](https://dzone.com/articles/why-mongodb) <br/>
[PostgreSQL vs MySQL](https://phoenixnap.com/kb/postgres-vs-mysql) <br/>
[MS SQL Learn](https://www.sqlservertutorial.net/)  <br/>

#### Relationship (how data is related to each other)
  1. one to one (one person has one aadhar)

| UserID | Name | passportID |
|---|---|---|
| 1 | Yash | 1234 |
| 2 | Meena | 5678 |

Above passportID is consider as foreign key and UserID is primary key.
  2. one to many (one teacher has any number of student)

| TeacherID | StudentID |
|---|---|
| 1 | 24 | 
| 1 | 25 | 
| 1 | 35 |                                     
| 2 | 21 |
| 2 | 15 |
| 3 | 12 |
| 3 | 10 |

  3. many to many (any student can enroll any number of courses)
 
 | StudentID | CourseID | 
 |---|---|
 | 1 | 12 |
 | 2 | 13 |
 | 1 | 14 | 
 | 2 | 12 |
 
 #### Create relationship in Sql server
creating primary to foreign key relation.

Step1: ![image](https://user-images.githubusercontent.com/58984578/119218746-9a1dc080-baff-11eb-9400-f81b7a5c8942.png)
Step2 : Click Add it will opens up the below and click on ellipses 

![image](https://user-images.githubusercontent.com/58984578/119218786-d2bd9a00-baff-11eb-84f6-02735ec0ddda.png)
Step3: ![image](https://user-images.githubusercontent.com/58984578/119218814-f5e84980-baff-11eb-9776-4de3244ff381.png)

Step4: change the FK name 
![image](https://user-images.githubusercontent.com/58984578/119218890-2d56f600-bb00-11eb-85c8-b1b2572837ea.png)

 
#### SQL SERVER Structure

| structure | |
|---|---|
| Sql Server |
| Database 1 | ...n |
| schema 1 | ..Schema n |
| table 1 | other entites like sp, triggers, views, functions |
each database has n schema and each schema has n tables or other entities.
#### SQL Server editions

![image](https://user-images.githubusercontent.com/58984578/119929395-09c9fa80-bf9b-11eb-8e84-8fe073bf3494.png)

[Installation](https://www.udemy.com/course/microsoft-sql-for-beginners-ms-sql-servert-sql-ssms/learn/lecture/26650204#overview)

#### SSMS (SQL Server Management Studio)
 * It's an IDE that provides graphical interface for connecting & working with MS SQL Server.
 * Free tool
[Installation](https://www.udemy.com/course/microsoft-sql-for-beginners-ms-sql-servert-sql-ssms/learn/lecture/26650214#overview)
[Connection](https://www.udemy.com/course/microsoft-sql-for-beginners-ms-sql-servert-sql-ssms/learn/lecture/26650220#overview)

#### T-SQL(Transact - Sql)
 * It is a Microsft sql server's implementation of the standard SQL.
 * Has it's own proprietary extensions in addition to SQL standard.
 * Used to perform actions on SQL server database.
 * Create new db, tables and other objects.
 * Add user accounts, modify and manage access permissions.
 * Run maintenance tasks.
 * Query db for crud operation.
 * create stored procedures in db.
 * It tells the db engine what it wants and db engine handles the processing.

PL/SQL - Oracle version of SQL
T-SQL - Microsoft version of SQL

SQL is an international language recognised by ANSI & ISO. 

#### [MS SQL SERVER](https://sqliteonline.com/)

* RDBMS developed by Microsoft.
* An SQL server installation is called Instance and multipe instances can be installed on same machine.
<b> Requirement</b>

![image](https://user-images.githubusercontent.com/58984578/119217729-c3d3e900-baf9-11eb-84e5-64f8c3539552.png)

![image](https://user-images.githubusercontent.com/58984578/119217740-d3533200-baf9-11eb-82a0-72e0aa3ca1a3.png)

<b> Create New Database</b>

![image](https://user-images.githubusercontent.com/58984578/118349148-9a9ce100-b56c-11eb-8c55-f147ec3e933b.png)

using query ``` create database dbname; ```

to drop db ``` drop database dbname; ```

<b>Table</b>

![image](https://user-images.githubusercontent.com/58984578/118349896-29136180-b571-11eb-96b1-f4d7d58e2ea8.png)

To create with query then right click on database name and select New Query and type command for sql query and save

![image](https://user-images.githubusercontent.com/58984578/118765501-cbe11e00-b898-11eb-9817-7e122529f8be.png)

```
comments(-- it is used for commenting)
create table tablename (
id int,
name varchar(30)
);

-- using sp
USE dbname
GO
CREATE TABLE tablename
(
       ID INT NOT NULL,
   Name VARCHAR(50) not NULL
);
```
To add column in existing table 
```
alter table tablename add age int ;
// constrain as not null

alter table tablename
alter column age int not null
```
To drop column
```
alter table tablename 
drop column age
```
To drop table
```
drop table tablename
```
To define primary key
```
alter table tablename
add constraint PK_tablename primary key (id)
```

#### Composite Key
combination of two or more key to uniquely identifies a record.
first find columns for defining as composite and make sure those column are not null or use alter.
```
alter table tablename

alter column stud-id int not null

alter course_id int not null

add constraint Compositekey primary key(stud-id,course_id);
```

#### Foreign key
right click on the column name which you want to make as foreign key

![image](https://user-images.githubusercontent.com/58984578/118764581-5c1e6380-b897-11eb-9054-b91038590696.png)

Click Add and click on tables and columns specifications.

![image](https://user-images.githubusercontent.com/58984578/118764677-8708b780-b897-11eb-971a-6903e50580f9.png)

if needed change column, table details.

![image](https://user-images.githubusercontent.com/58984578/118764784-b1f30b80-b897-11eb-9945-87415c59011f.png)

![image](https://user-images.githubusercontent.com/58984578/118764900-d818ab80-b897-11eb-9437-74b9221d94d7.png)

To drop foreign key

![image](https://user-images.githubusercontent.com/58984578/118764991-09917700-b898-11eb-9fa9-8dea7dccd847.png)

![image](https://user-images.githubusercontent.com/58984578/118765039-1a41ed00-b898-11eb-871d-aa3a4fe6b5e1.png)


