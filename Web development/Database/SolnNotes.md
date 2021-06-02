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
