-- Write your PostgreSQL query statement below
select id
from weather w1
where temperature > (select temperature from weather w2 where recordDate = w1.recordDate - 1)

