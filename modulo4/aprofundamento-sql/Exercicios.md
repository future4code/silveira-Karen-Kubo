### Exercício 1
**a)**
Ele apaga a coluna salário da tabela Actor;
**b)**
Ele muda o título do tipo gender para sex;
**c)**
Altera o n° de caracteres permitidos para gender;

### Exercício 2
**a)**
SELECT * FROM Actor where id=003;
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "003
**b)**
SELECT UPPER(name)
FROM Actor
WHERE name = "Juliana Paes";
SELECT name
FROM Actor
WHERE name = "Juliana Paes";
**c)**
UPDATE Actor
SET name = "Angelina Jolie",
 salary=1000000 ,
 birth_date = "1975-06-04",
 gender = "female"
WHERE id = "005";
**d)**
Ele mostra que foi alterado, mas não é possível visualizá-lo na tabela, pois os outros valores são nulos.

### Exercício 3
**a)**
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
**b)**
DELETE FROM Actor WHERE salary > 1000000;

### Exercício 4
**a)**
SELECT MAX(salary)
FROM Actor;
**b)**
SELECT MIN(salary)
FROM Actor
WHERE gender="female";
**c)**
SELECT COUNT(*)
FROM Actor
WHERE gender = "female";
**d)**
SELECT SUM(salary) FROM Actor;

### Exercício 5
**a)**
Ele soma os atores de acordo com o critério gênero.
**b)**
SELECT id, name FROM Actor
ORDER BY name DESC;
**c)**
SELECT * FROM Actor
ORDER BY salary;
**d)**
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
**e)**
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

### Exercício 6
**a)**
ALTER TABLE Movie ADD playing_limit_date DATE;
**b)**
ALTER TABLE Movie CHANGE rating rating FLOAT;
**c)**
UPDATE Movie
SET	playing_limit_date = "2020-12-31"
WHERE id = "001"
**d)**
DELETE FROM Movie WHERE id = "001"
