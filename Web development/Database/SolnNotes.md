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
