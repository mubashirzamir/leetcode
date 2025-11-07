# Write your MySQL query statement below
select email as Email from (select email, count(*) as times from Person group by email) as aux where aux.times > 1

