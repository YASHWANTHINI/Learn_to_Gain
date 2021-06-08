[SQL-Interesting queries](https://www.c-sharpcorner.com/article/sql-interesting-queries/)

Write a query that prints a list of employee names (i.e.: the name attribute) for employees in Employee having a salary greater than 2000 per month who have been employees for less than  10 months. Sort your result by ascending employee_id.
```
SELECT name FROM Employee
WHERE salary > 2000 AND months < 10
ORDER BY employee_id;
```

Write a query to print all prime numbers less than or equal to 1000. Print your result on a single line, and use the ampersand (&) character as your separator (instead of a space).
```
DECLARE @i int=2;
declare @prime int = 0;
DECLARE @result nvarchar(1000) = ''; 
WHILE (@i<=1000)
begin
   DECLARE @j int = @i-1;
   SET @prime = 1;
   WHILE(@j > 1)
   begin
      IF @i % @j = 0
      begin 
         SET @PRIME = 0;
      end
    set @j = @j - 1;
   end
   
   IF @PRIME = 1
   BEGIN
      set @result += cast(@i as nvarchar(1000)) + '&';
   END
set @i = @i + 1;
end
set @result = SUBSTRING(@result, 1, LEN(@result) - 1)
select @result
```

Write a query identifying the type of each record in the TRIANGLES table using its three side lengths. Output one of the following statements for each record in the table:

Equilateral: It's a triangle with 3 sides of equal length.
Isosceles: It's a triangle with 2 sides of equal length.
Scalene: It's a triangle with 3 sides of differing lengths.
Not A Triangle: The given values of A, B, and C don't form a triangle.
```
SELECT 
    CASE 
        WHEN A >= (B + C) OR B >= (A + C) OR C >= (A + B) THEN 'Not A Triangle'
        WHEN A = B AND A = C THEN 'Equilateral'
        WHEN A = B OR B = C OR A = C THEN 'Isosceles'
        ELSE 'Scalene'
    END
FROM TRIANGLES;
```
[refer](https://docs.microsoft.com/en-us/sql/t-sql/language-elements/case-transact-sql?view=sql-server-ver15)

Generate the following two result sets:

Query an alphabetically ordered list of all names in OCCUPATIONS, immediately followed by the first letter of each profession as a parenthetical (i.e.: enclosed in parentheses). For example: AnActorName(A), ADoctorName(D), AProfessorName(P), and ASingerName(S).
Query the number of ocurrences of each occupation in OCCUPATIONS. Sort the occurrences in ascending order, and output them in the following format:

![image](https://user-images.githubusercontent.com/58984578/120007238-504d4280-bff7-11eb-8c92-52be88fde3ec.png)

![image](https://user-images.githubusercontent.com/58984578/120007202-44fa1700-bff7-11eb-9c08-f24dd39e6e21.png)

```
select concat(name,concat('(', concat(substring(occupation,1,1),')'))) from occupations order by name;

select concat('There are a total of',concat(' ',concat(count(occupation),concat(' ',concat(lower(occupation),'s.'))))) as total from occupations
group by occupation order by total;
```

Query the Name of any student in STUDENTS who scored higher than 75 Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.
```
select name from students where marks > 75 order by right(name, 3), id asc;
```

[refer](https://www.sqlservertutorial.net/sql-server-string-functions/sql-server-right-function/)

1) Given the CITY and COUNTRY tables, query the sum of the populations of all cities where the CONTINENT is 'Asia'.
Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

![image](https://user-images.githubusercontent.com/58984578/120260590-d39abc80-c2b3-11eb-8478-afaaec7e7df5.png)

![image](https://user-images.githubusercontent.com/58984578/120260602-d7c6da00-c2b3-11eb-83f4-0a1ba8a15ce3.png)

2) Given the CITY and COUNTRY tables, query the names of all cities where the CONTINENT is 'Africa'.
Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

3)Given the CITY and COUNTRY tables, query the names of all the continents (COUNTRY.Continent) and their respective average city populations (CITY.Population) rounded down to the nearest integer.
Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

```
//1
SELECT SUM(CITY.POPULATION) 
FROM CITY, COUNTRY
WHERE CITY.COUNTRYCODE = COUNTRY.CODE AND COUNTRY.CONTINENT = 'Asia';

//2
select city.name from city, country where city.countrycode = country.code and country.continent = 'Africa';

//3
SELECT COUNTRY.CONTINENT, FLOOR(AVG(CITY.POPULATION)) FROM CITY JOIN COUNTRY ON CITY.COUNTRYCODE = COUNTRY.CODE GROUP BY COUNTRY.CONTINENT;
```

![image](https://user-images.githubusercontent.com/58984578/120262113-e4006680-c2b6-11eb-962d-a65bab2af442.png)

![image](https://user-images.githubusercontent.com/58984578/120262122-e6fb5700-c2b6-11eb-8884-fc2dac733975.png)

Ketty gives Eve a task to generate a report containing three columns: Name, Grade and Mark. Ketty doesn't want the NAMES of those students who received a grade lower than 8. The report must be in descending order by grade -- i.e. higher grades are entered first. If there is more than one student with the same grade (8-10) assigned to them, order those particular students by their name alphabetically. Finally, if the grade is lower than 8, use "NULL" as their name and list them by their grades in descending order. If there is more than one student with the same grade (1-7) assigned to them, order those particular students by their marks in ascending order.
Sample Input

![image](https://user-images.githubusercontent.com/58984578/120262224-07c3ac80-c2b7-11eb-85f2-0a64081c46b1.png)

Sample Output
```
Maria 10 99
Jane 9 81
Julia 9 88 
Scarlet 8 78
NULL 7 63
NULL 7 68
```
```
SELECT CASE WHEN Grade < 8 THEN NULL
            ELSE Name 
       END 
       AS Name, Grade, Marks
FROM Students, Grades
WHERE Marks BETWEEN Min_Mark AND Max_Mark
ORDER BY Grade DESC, Name, Marks;
```
Query the difference between the maximum and minimum populations in CITY.
```
select max(population) - min(population) as difference from city;
```

Samantha was tasked with calculating the average monthly salaries for all employees in the EMPLOYEES table, but did not realize her keyboard's 0 key was broken until after completing the calculation. She wants your help finding the difference between her miscalculation (using salaries with any zeros removed), and the actual average salary.
Write a query calculating the amount of error (i.e.: actual-miscalculated average monthly salaries), and round it up to the next integer.
Sample input

![image](https://user-images.githubusercontent.com/58984578/120263813-15c6fc80-c2ba-11eb-8d8e-d765ccd17ee8.png)

Sample Output  2061

Explanation
The table below shows the salaries without zeros as they were entered by Samantha:

![image](https://user-images.githubusercontent.com/58984578/120263859-2d05ea00-c2ba-11eb-8c12-217bc1321288.png)

Samantha computes an average salary of 98.00. The actual average salary is 2159.00.
The resulting error between the two calculations is 2159.00 - 98.00 = 2061.00. Since it is equal to the integer 2061, it does not get rounded up.
```
SELECT CAST(CEILING((AVG(CAST(Salary AS Float)) - AVG(CAST(REPLACE(Salary, 0, '')AS Float)))) AS INT)
FROM EMPLOYEES;`
```
[refer1](https://docs.microsoft.com/en-us/sql/t-sql/functions/ceiling-transact-sql?view=sql-server-ver15)
[refer2](https://www.geeksforgeeks.org/floor-and-ceiling-function-in-sql-server/)
[refer3](https://www.mssqltips.com/sqlservertip/1589/sql-server-rounding-functions--round-ceiling-and-floor/)

Pivot the Occupation column in OCCUPATIONS so that each Name is sorted alphabetically and displayed underneath its corresponding Occupation. The output column headers should be Doctor, Professor, Singer, and Actor, respectively.

Note: Print NULL when there are no more names corresponding to an occupation.

Input Format

The OCCUPATIONS table is described as follows:

![image](https://user-images.githubusercontent.com/58984578/121135634-54c4f700-c852-11eb-8b0d-3f7d0cf7634f.png)

Occupation will only contain one of the following values: Doctor, Professor, Singer or Actor.

![image](https://user-images.githubusercontent.com/58984578/121135684-5e4e5f00-c852-11eb-9719-e57854c84d1c.png)

Sample Output
```
Jenny    Ashley     Meera  Jane
Samantha Christeen  Priya  Julia
NULL     Ketty      NULL   Maria
```
Explanation
The first column is an alphabetically ordered list of Doctor names.
The second column is an alphabetically ordered list of Professor names.
The third column is an alphabetically ordered list of Singer names.
The fourth column is an alphabetically ordered list of Actor names.
The empty cell data for columns with less than the maximum number of names per occupation (in this case, the Professor and Actor columns) are filled with NULL values.

```
SELECT
    [Doctor], [Professor], [Singer], [Actor]
FROM
(
    SELECT ROW_NUMBER() OVER (PARTITION BY OCCUPATION ORDER BY NAME) [RowNumber], * FROM OCCUPATIONS
) AS tempTable
PIVOT
(
    MAX(NAME) FOR OCCUPATION IN ([Doctor], [Professor], [Singer], [Actor])
) AS pivotTablev
```
[Pivot](https://www.google.com/search?q=pivot+in+sql+server&rlz=1C1SQJL_enIN880IN880&oq=pivot+in+sql+server&aqs=chrome..69i57.4677j0j4&sourceid=chrome&ie=UTF-8)

You are given a table, BST, containing two columns: N and P, where N represents the value of a node in Binary Tree, and P is the parent of N.

![image](https://user-images.githubusercontent.com/58984578/121136526-635fde00-c853-11eb-91af-5f984c23dcc7.png)

Write a query to find the node type of Binary Tree ordered by the value of the node. Output one of the following for each node:

Root: If node is root node.
Leaf: If node is leaf node.
Inner: If node is neither root nor leaf node.
Sample Input

![image](https://user-images.githubusercontent.com/58984578/121136561-6bb81900-c853-11eb-9530-af594f5c6711.png)

Sample Output

1 Leaf
2 Inner
3 Leaf
5 Root
6 Leaf
8 Inner
9 Leaf

Explanation

The Binary Tree below illustrates the sample:

![image](https://user-images.githubusercontent.com/58984578/121136599-75da1780-c853-11eb-8bb3-f9f094497363.png)

```
SELECT n,
    CASE
        WHEN p IS NULL THEN 'Root'
        WHEN n IN (SELECT DISTINCT p FROM bst) THEN 'Inner'
        ELSE 'Leaf'
    END
FROM bst
ORDER BY n;
```

Amber's conglomerate corporation just acquired some new companies. Each of the companies follows this hierarchy: 

![image](https://user-images.githubusercontent.com/58984578/121138685-91deb880-c855-11eb-8998-67c1546eb94d.png)

Given the table schemas below, write a query to print the company_code, founder name, total number of lead managers, total number of senior managers, total number of managers, and total number of employees. Order your output by ascending company_code.

Note:

The tables may contain duplicate records.
The company_code is string, so the sorting should not be numeric. For example, if the company_codes are C_1, C_2, and C_10, then the ascending company_codes will be C_1, C_10, and C_2.
Input Format

The following tables contain company data:

Company: The company_code is the code of the company and founder is the founder of the company. 

![image](https://user-images.githubusercontent.com/58984578/121138706-986d3000-c855-11eb-93fa-e2b2e1480f64.png)

Lead_Manager: The lead_manager_code is the code of the lead manager, and the company_code is the code of the working company. 

![image](https://user-images.githubusercontent.com/58984578/121138730-9efba780-c855-11eb-85c6-a9bc026161e8.png)

Senior_Manager: The senior_manager_code is the code of the senior manager, the lead_manager_code is the code of its lead manager, and the company_code is the code of the working company. 

![image](https://user-images.githubusercontent.com/58984578/121138752-a458f200-c855-11eb-9cd8-ddd4956dca3f.png)

Manager: The manager_code is the code of the manager, the senior_manager_code is the code of its senior manager, the lead_manager_code is the code of its lead manager, and the company_code is the code of the working company. 

![image](https://user-images.githubusercontent.com/58984578/121138776-a9b63c80-c855-11eb-8e21-6c7e96049430.png)

Employee: The employee_code is the code of the employee, the manager_code is the code of its manager, the senior_manager_code is the code of its senior manager, the lead_manager_code is the code of its lead manager, and the company_code is the code of the working company. 

![image](https://user-images.githubusercontent.com/58984578/121138799-ae7af080-c855-11eb-9e10-50ed44d3598d.png)

Sample Input
Company Table:

![image](https://user-images.githubusercontent.com/58984578/121138850-bcc90c80-c855-11eb-9f99-564a50a02c9f.png)
 
Lead_Manager Table: 

![image](https://user-images.githubusercontent.com/58984578/121138903-ce121900-c855-11eb-9f33-74ccf243965d.png)

Senior_Manager Table: 

![image](https://user-images.githubusercontent.com/58984578/121138934-d8341780-c855-11eb-986a-13775b7c14c1.png)

Manager Table:

![image](https://user-images.githubusercontent.com/58984578/121138958-dd916200-c855-11eb-87e7-de6fb5c0a6dc.png)

Employee Table: 

![image](https://user-images.githubusercontent.com/58984578/121138980-e2eeac80-c855-11eb-8b2a-d12f07a25bba.png)

Sample Output

C1 Monika 1 2 1 2
C2 Samantha 1 1 2 2
Explanation

In company C1, the only lead manager is LM1. There are two senior managers, SM1 and SM2, under LM1. There is one manager, M1, under senior manager SM1. There are two employees, E1 and E2, under manager M1.

In company C2, the only lead manager is LM2. There is one senior manager, SM3, under LM2. There are two managers, M2 and M3, under senior manager SM3. There is one employee, E3, under manager M2, and another employee, E4, under manager, M3.

```
select c.company_code, c.founder, 
    count(distinct l.lead_manager_code), count(distinct s.senior_manager_code), 
    count(distinct m.manager_code),count(distinct e.employee_code) 
from Company c, Lead_Manager l, Senior_Manager s, Manager m, Employee e 
where c.company_code = l.company_code 
    and l.lead_manager_code=s.lead_manager_code 
    and s.senior_manager_code=m.senior_manager_code 
    and m.manager_code=e.manager_code 
group by c.company_code, c.founder 
order by c.company_code;
```

We define an employee's total earnings to be their monthly  worked, and the maximum total earnings to be the maximum total earnings for any employee in the Employee table. Write a query to find the maximum total earnings for all employees as well as the total number of employees who have maximum total earnings. Then print these values as  space-separated integers.

```
SELECT TOP (1)  max(salary * months), COUNT(salary * months)
FROM Employee
GROUP BY salary * months
ORDER BY salary * months DESC;
```
Query the following two values from the STATION table:

The sum of all values in LAT_N rounded to a scale of 2 decimal places.
The sum of all values in LONG_W rounded to a scale of 2 decimal places.

```
SELECT CAST(SUM(LAT_N) as DECIMAL(12,2)) as lat, CAST(SUM(LONG_W) as DECIMAL(12,2)) as lon FROM Station;

DECIMAL(m,a) M: is the number of total digits your decimal can have. A: is the max number of digits you can have after the decimal point.

Look this example:

If you put PI into a Decimal(18,2) it will be recorded as 3.14

If you put PI into Decimal(18,10) be recorded as 3.1415926535.

select cast(max(LAT_N)as decimal(10,4)) from STATION where LAT_N < 137.2345
```
[cast](https://docs.microsoft.com/en-us/sql/t-sql/functions/cast-and-convert-transact-sql?view=sql-server-ver15)
<br/>
[round](https://docs.microsoft.com/en-us/sql/t-sql/functions/round-transact-sql?view=sql-server-ver15)

Query the Western Longitude (LONG_W) for the largest Northern Latitude (LAT_N) in STATION that is less than 137.2345. Round your answer to 4 decimal places.
```
Select format(LONG_W,'N4') from STATION WHERE LAT_N = (SELECT MAX(LAT_N) FROM STATION WHERE LAT_N < 137.2345);
```
[format](https://docs.microsoft.com/en-us/sql/t-sql/functions/format-transact-sql?view=sql-server-ver15) <br/>
[format ex](https://www.w3schools.com/sql/trysqlserver.asp?filename=trysql_func_sqlserver_format2) <br/>
[format_int](https://database.guide/how-to-format-numbers-in-sql-server/)

Query the Western Longitude (LONG_W)where the smallest Northern Latitude (LAT_N) in STATION is greater than 38.7780. Round your answer to 4 decimal places.
```
Select format(LONG_W,'N4') from STATION WHERE LAT_N = (SELECT MIN(LAT_N) FROM STATION WHERE LAT_N > 38.7780);
```

Consider p(a,b) and q(c,d) to be two points on a 2D plane.

 happens to equal the minimum value in Northern Latitude (LAT_N in STATION).
 happens to equal the minimum value in Western Longitude (LONG_W in STATION).
 happens to equal the maximum value in Northern Latitude (LAT_N in STATION).
 happens to equal the maximum value in Western Longitude (LONG_W in STATION).
Query the Manhattan Distance between points p and q and round it to a scale of 4 decimal places.

```
SELECT CAST((ABS(MAX(LAT_N)-MIN(LAT_N)) + ABS(MAX(LONG_W)-MIN(LONG_W))) AS NUMERIC(18,4)) FROM STATION;
```
[Absolute (positive)](https://docs.microsoft.com/en-us/sql/t-sql/functions/abs-transact-sql?view=sql-server-ver15)
