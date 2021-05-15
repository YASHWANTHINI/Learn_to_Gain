#### Database 
   Storage of data in organised and structured way.
   <b>Database Model</b> is a technique followed by database to organize and structure the data.
        1. Relational Database Model [MS SQL](https://www.guru99.com/ms-sql-server-tutorial.html)
        2. [Hierarchial DM](https://www.tutorialspoint.com/Hierarchical-Database-Model) 
        3. [Object oriented DM](https://phoenixnap.com/kb/object-oriented-database)
        4. [Network DM](https://www.c-sharpcorner.com/article/what-is-a-network-database/)
        5. [Document oriented DM (NoSQL)](https://www.mongodb.com/document-databases)

#### Notes
[Is MongoDB object oriented?](https://dzone.com/articles/why-mongodb) <br/>
[PostgreSQL vs MySQL](https://phoenixnap.com/kb/postgres-vs-mysql) <br/>
[MS SQL Learn](https://www.sqlservertutorial.net/)  <br/>

#### Relationship 
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

#### MS SQL SERVER
<b> Create New Database</b>

![image](https://user-images.githubusercontent.com/58984578/118349148-9a9ce100-b56c-11eb-8c55-f147ec3e933b.png)


