# Write your MySQL query statement below
# subquery
select name as Employee from Employee e where (
    select salary from Employee where id = e.managerId
) < salary
