### Exercício 1
USE `silveira-21814712-karen-kubo`;
 
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
**a)**
*VARCHAR(n) - define o tipo como string de no máximo n caracteres*
*DATE - representa uma data*
**b)**
SHOW DATABASES; #Mostra a database
SHOW TABLES; #Mostra a tabela criada
**c)**
DESCRIBE Actor; #Descreve as informações da tabela (tipos)
### Exercício 2:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
**a)**
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
**b)**
#Error Code: 1062. Entrada duplicada para "002" para chave "primary", significa que o valor deve ser único para cada elemento e ele já existe na tabela;
**c)**
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
#Error Code: 1136.O valor da coluna não corresponde ao valor da linha 1;
**d)**
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Gasparzinho",
  400000,
  "1949-04-18", 
  "male"
);
#Error Code: 1364. O valor "name" não pode ser nulo.
**e)**
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
#Error Code: 1292. O valor data está incorreto
**f)**
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Johnny Depp",
  40000000,
  "1963-06-09", 
  "male"
);

SELECT * FROM Actor;
### Exercício 3:
**a)**
SELECT * FROM Actor WHERE gender="female";
**b)**
SELECT salary FROM Actor WHERE name="Tony Ramos";
**c)**
SELECT * FROM Actor WHERE gender="invalid"; #Retorna os valores null da tabela;
**d)**
SELECT id, name, salary FROM Actor WHERE salary < 500000;
**e)**
SELECT id, name from Actor WHERE id = "002"; #Error Code: 1054. Nome não exist no campo de valores.
### Exercício 4:
**a)**
SELECT * FROM Actor WHERE (name like "A%" OR name LIKE "J%") AND salary > 300000;
#Ele verifica quais atores possuem as iniciais A ou J e os filtra para ver quais tem o salário superior a R$300.000
**b)**
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;
**c)**
SELECT * FROM Actor WHERE name LIKE "%g%";
**d)**
SELECT * FROM Actor WHERE (name LIKE "%a%" or name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;
### Exercício 5:
**a)**
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
**b)**
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
	"001",
    "Se eu fosse você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    "7"
);
**c)**
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    "10"
);
**d)**
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    "8"
);
**e)**
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
	"004",
    "Minha mãe é uma peça",
    "Dona Hermínia (Paulo Gustavo) é uma mulher de meia idade, divorciada do marido (Herson Capri), que a trocou por uma mais jovem (Ingrid Guimarães). Hiperativa, ela não larga o pé de seus filhos Marcelina (Mariana Xavier) e Juliano (Rodrigo Pandolfo), sem se dar conta que eles já estão bem grandinhos. Um dia, após descobrir que eles consideram ela uma chata, resolve sair de casa sem avisar para ninguém, deixando todos, de alguma forma, preocupados com o que teria acontecido. Mal sabem eles que a mãe foi visitar a querida tia Zélia (Sueli Franco) para desabafar com ela suas tristezas do presente e recordar os bons tempos do passado.",
    "2013-06-21",
    "8"
);
### Exercício 6:
**a)**
SELECT id, title, rating FROM Movie WHERE id = "004";
**b)**
SELECT * FROM Movie WHERE title = "Minha mãe é uma peça";
**c)**
SELECT id, title, synopsis FROM Movie WHERE rating > 7;

### Exercício 7:
**a)**
SELECT * FROM Movie WHERE title LIKE "%vida%";
**b)**
SELECT * FROM Movie 
WHERE title LIKE "%com%" 
OR synopsis LIKE "%com%";

**c)**
SELECT * FROM Movie WHERE release_date < "2022-06-06";

**d)**
SELECT * FROM Movie
WHERE release_date < "2022-06-06" AND 
      (title LIKE "%com%" OR
      synopsis LIKE "%com%") AND rating > 7;




