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

A median is defined as a number separating the higher half of a data set from the lower half. Query the median of the Northern Latitudes (LAT_N) from STATION and round your answer to 4 decimal places.

```
select distinct
  cast(
     round(
       PERCENTILE_DISC (.5) WITHIN GROUP (order by lat_n) OVER()
     ,4) 
   as decimal(16,4))
from station
```
[Percentile_Disc](https://docs.microsoft.com/en-us/sql/t-sql/functions/percentile-disc-transact-sql?view=sql-server-ver15)

Julia just finished conducting a coding contest, and she needs your help assembling the leaderboard! Write a query to print the respective hacker_id and name of hackers who achieved full scores for more than one challenge. Order your output in descending order by the total number of challenges in which the hacker earned a full score. If more than one hacker received full scores in same number of challenges, then sort them by ascending hacker_id.

![image](https://user-images.githubusercontent.com/58984578/121293115-b8116080-c908-11eb-9797-a873da4a4554.png)

![image](https://user-images.githubusercontent.com/58984578/121293140-c2cbf580-c908-11eb-8539-e76e7ff4c123.png)

![image](https://user-images.githubusercontent.com/58984578/121293204-db3c1000-c908-11eb-8e71-9e395fb9379f.png)

##### Submission table

![image](https://user-images.githubusercontent.com/58984578/121293286-03c40a00-c909-11eb-8de4-85dd635a1b01.png)

![image](https://user-images.githubusercontent.com/58984578/121293312-0fafcc00-c909-11eb-8059-155fc2683d03.png)

```
SELECT CONCAT(CAST(hacker_id AS VARCHAR), SPACE(2), name)
FROM (
     SELECT S.hacker_id AS [hacker_id], H.name AS [name], COUNT(S.challenge_id) AS [Total_Challenges]
     FROM Submissions S
     INNER JOIN Challenges C ON S.challenge_id = C.challenge_id
     INNER JOIN Hackers H ON H.hacker_id = S.hacker_id
    INNER JOIN Difficulty D ON D.difficulty_level = C.difficulty_level AND S.score = D.score
        GROUP BY S.hacker_id, H.name
     HAVING COUNT(S.challenge_id) > 1
     ) 
     AS Derived_Table
ORDER BY Total_Challenges DESC, hacker_id ASC
```
Harry Potter and his friends are at Ollivander's with Ron, finally replacing Charlie's old broken wand.

Hermione decides the best way to choose is by determining the minimum number of gold galleons needed to buy each non-evil wand of high power and age. Write a query to print the id, age, coins_needed, and power of the wands that Ron's interested in, sorted in order of descending power. If more than one wand has same power, sort the result in order of descending age.

```
SELECT id, age, coins_needed, power
FROM 
(
    SELECT W.id, WP.age, W.coins_needed, W.power,
    ROW_NUMBER() OVER 
        (
            PARTITION BY W.code,W.power  
            ORDER BY W.coins_needed, W.power DESC
        ) AS RowNumber
    FROM Wands W WITH (NOLOCK)
    INNER JOIN Wands_Property WP WITH (NOLOCK) ON W.code = WP.code
    WHERE WP.is_evil = 0
)
AS Wand_Data
WHERE RowNumber = 1
ORDER BY power DESC, age DESC
```
[row_number](https://docs.microsoft.com/en-us/sql/t-sql/functions/row-number-transact-sql?view=sql-server-ver15) <br/>
[row_number example](https://www.sqlshack.com/overview-of-the-sql-row-number-function/)

Julia asked her students to create some coding challenges. Write a query to print the hacker_id, name, and the total number of challenges created by each student. Sort your results by the total number of challenges in descending order. If more than one student created the same number of challenges, then sort the result by hacker_id. If more than one student created the same number of challenges and the count is less than the maximum number of challenges created, then exclude those students from the result.

Hackers: The hacker_id is the id of the hacker, and name is the name of the hacker. 

![image](https://user-images.githubusercontent.com/58984578/121294845-b1d0b380-c90b-11eb-8de9-4936670cee46.png)

Challenges: The challenge_id is the id of the challenge, and hacker_id is the id of the student who created the challenge. 

![image](https://user-images.githubusercontent.com/58984578/121294864-b9905800-c90b-11eb-8f49-8c6e21eacf9e.png)

##### Sample Input

![image](https://user-images.githubusercontent.com/58984578/121294990-eba1ba00-c90b-11eb-8b18-d3033d8e7400.png)

![image](https://user-images.githubusercontent.com/58984578/121295008-f2c8c800-c90b-11eb-96cc-8d0765bb26f8.png)

##### Sample Output 0

21283 Angela 6
88255 Patrick 5
96196 Lisa 1

##### For Sample Case 0, we can get the following details:

Students 5077 and 62743 both created 4 challenges, but the maximum number of challenges created is 6 so these students are excluded from the result.

![image](https://user-images.githubusercontent.com/58984578/121295283-61a62100-c90c-11eb-887c-4d97c8753cd7.png)

```
/* count total submissions of challenges of each user */
WITH data
AS
(
SELECT c.hacker_id as id, h.name as name, count(c.hacker_id) as counter
FROM Hackers h
JOIN Challenges c on c.hacker_id = h.hacker_id
GROUP BY c.hacker_id, h.name
)
/* select records from above */
SELECT id,name,counter
FROM data
WHERE
counter=(SELECT max(counter) FROM data) /*select user that has max count submission*/
OR
counter in (SELECT counter FROM data
GROUP BY counter
HAVING count(counter)=1 ) /*filter out the submission count which is unique*/
ORDER BY counter desc, id
```
[with keyword](https://docs.microsoft.com/en-us/sql/t-sql/queries/with-common-table-expression-transact-sql?view=sql-server-ver15) <br/>

You did such a great job helping Julia with her last coding contest challenge that she wants you to work on this one, too!
The total score of a hacker is the sum of their maximum scores for all of the challenges. Write a query to print the hacker_id, name, and total score of the hackers ordered by the descending score. If more than one hacker achieved the same total score, then sort the result by ascending hacker_id. Exclude all hackers with a total score of  from your result.

#### Sample input

![image](https://user-images.githubusercontent.com/58984578/121295879-60292880-c90d-11eb-95e4-94902f5a1c04.png)

![image](https://user-images.githubusercontent.com/58984578/121295892-64eddc80-c90d-11eb-8e78-c8775f1d5662.png)

![image](https://user-images.githubusercontent.com/58984578/121295933-7505bc00-c90d-11eb-998d-d9e77fc08e68.png)

```
SELECT h.hacker_id, h.name, SUM(score) FROM (
    SELECT hacker_id, challenge_id, MAX(score) AS score FROM SUBMISSIONS
    GROUP BY hacker_id, challenge_id)t 
    
JOIN Hackers h on t.hacker_id = h.hacker_id
GROUP BY h.hacker_id, h.name
HAVING SUM(score) > 0
ORDER BY SUM(score) desc, h.hacker_id
```

![image](https://user-images.githubusercontent.com/58984578/121296457-5bb13f80-c90e-11eb-89bb-91d972142ab6.png)

![image](https://user-images.githubusercontent.com/58984578/121296495-69ff5b80-c90e-11eb-8eda-93d976fa44c7.png)

![image](https://user-images.githubusercontent.com/58984578/121296550-7e435880-c90e-11eb-9340-bec7caa4013f.png)

![image](https://user-images.githubusercontent.com/58984578/121296567-83a0a300-c90e-11eb-9e6f-306695e359b6.png)

![image](https://user-images.githubusercontent.com/58984578/121296596-8e5b3800-c90e-11eb-953d-2350bd4af587.png)

```
with A as
(
select c.contest_id, hacker_id, name, challenge_id
from contests c 
join colleges cd on c.contest_id=cd.contest_id
join challenges ca on cd.college_id=ca.college_id
)
,B as
(
select A.contest_id, max(hacker_id) as h, max(name) as n, sum(isnull(total_submissions,0)) as ts, sum(isnull(total_accepted_submissions,0)) as tas
from A
left outer join submission_stats ss on A.challenge_id=ss.challenge_id
group by A.contest_id
)
,C as
(
select A.contest_id, max(hacker_id) as h, max(name) as n, sum(isnull(total_views,0)) as tv, sum(isnull(total_unique_views,0)) as tuv
from A
left outer join view_stats vs on A.challenge_id=vs.challenge_id
group by A.contest_id
)
select B.contest_id, B.h, B.n, ts,tas,tv,tuv
from B join C
on B.contest_id=C.contest_id
where ts>0 or tas>0 or tv>0 or tuv>0
order by B.contest_id
```
![image](https://user-images.githubusercontent.com/58984578/121299263-c2385c80-c912-11eb-9342-beeeb83a11d5.png)

![image](https://user-images.githubusercontent.com/58984578/121299310-d7ad8680-c912-11eb-93ca-084744485131.png)

![image](https://user-images.githubusercontent.com/58984578/121299323-dd0ad100-c912-11eb-9e17-11b57e26741d.png)

![image](https://user-images.githubusercontent.com/58984578/121299409-00358080-c913-11eb-8d85-35d8f97091f2.png)

```
with temp as (
select submission_date,hacker_id,count(submission_id)c
    from submissions a
    group by submission_date,hacker_id
),
hacker as (
select submission_date,hacker_id, c ,row_number()over (partition by submission_date order by c desc, hacker_id) rank
    from temp
),
date as (
select distinct submission_date, row_number()over(order by submission_date) rank from (select distinct submission_date from submissions)a 
),
rank as (
select a.submission_date,rank,hacker_id,count(b.submission_date) c from date a
left join temp b on a.submission_date >=b.submission_date  
group by a.submission_date,rank,hacker_id
having count(b.submission_date) =rank
    )
    
select a.submission_date,count(a.hacker_id),b.hacker_id,name from rank a 
left join hacker b on a.submission_date=b.submission_date and b.rank=1
left join hackers c on b.hacker_id=c.hacker_id
group by a.submission_date,b.hacker_id,name 
order by 1
```

![image](https://user-images.githubusercontent.com/58984578/121303108-4c36f400-c918-11eb-96e2-613e184c2b62.png)

![image](https://user-images.githubusercontent.com/58984578/121303142-5a851000-c918-11eb-94b5-a0366b04a6e0.png)

![image](https://user-images.githubusercontent.com/58984578/121303190-6d97e000-c918-11eb-819d-b107d06ec556.png)

```
SELECT S.Name
FROM Students S WITH (NOLOCK)
INNER JOIN Friends F WITH (NOLOCK) ON S.ID = F.ID
INNER JOIN Packages P WITH (NOLOCK) ON P.ID = S.ID
INNER JOIN Packages PF WITH (NOLOCK) ON PF.ID = F.Friend_ID AND P.Salary < PF.Salary
ORDER BY PF.Salary
```
 
[nolock](https://www.mssqltips.com/sqlservertip/2470/understanding-the-sql-server-nolock-hint/) <br/>
[table hints](https://www.sqlshack.com/understanding-impact-clr-strict-security-configuration-setting-sql-server-2017/)

![image](https://user-images.githubusercontent.com/58984578/121304393-e9def300-c919-11eb-91d0-af57829f51da.png)

![image](https://user-images.githubusercontent.com/58984578/121304428-f400f180-c919-11eb-90aa-540c95aaaa08.png)

```
SELECT f1.X, f1.Y FROM Functions f1
INNER JOIN Functions f2 ON f1.X=f2.Y AND f1.Y=f2.X
GROUP BY f1.X, f1.Y
HAVING COUNT(f1.X)>1 or f1.X<f1.Y
ORDER BY f1.X 
```

![image](https://user-images.githubusercontent.com/58984578/121306519-8f936180-c91c-11eb-8a61-d5ee2da84ff9.png)

![image](https://user-images.githubusercontent.com/58984578/121306548-9de17d80-c91c-11eb-9d79-99e5001d8431.png)

![image](https://user-images.githubusercontent.com/58984578/121306586-a9cd3f80-c91c-11eb-8146-7c73298ec6a1.png)

```
WITH t AS (
  SELECT Start_Date s
        , End_Date e
        , ROW_NUMBER() OVER(ORDER BY Start_Date) rn
  FROM Projects
  GROUP BY Start_Date, End_Date
)
    
SELECT MIN(s),MAX(e)
FROM t
GROUP BY DATEDIFF(day,rn,s)
ORDER BY COUNT(DATEDIFF(day,rn,s)), MIN(s)
```

P(R) represents a pattern drawn by Julia in R rows. The following pattern represents P(5):
```
* * * * * 
* * * * 
* * * 
* * 
*
```
Write a query to print the pattern P(20).

```
DECLARE @i INT = 20
WHILE (@i > 0) 
BEGIN
   PRINT REPLICATE(' * ', @i) 
   SET @i = @i - 1
END

* 
* * 
* * * 
* * * * 
* * * * *

DECLARE @i INT = 1
while (@i < 21)
BEGIN
    PRINT REPLICATE (' * ', @i )
    SET @i = @i + 1
END 
    
```
[Replicate](https://docs.microsoft.com/en-us/sql/t-sql/functions/replicate-transact-sql?view=sql-server-ver15) <br/>
[replicate example](https://www.w3schools.com/sql/func_sqlserver_replicate.asp)

