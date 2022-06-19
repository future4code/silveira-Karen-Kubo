USE `silveira-21814712-karen-kubo`;
SHOW DATABASES; #Mostra a database
SHOW TABLES; #Mostra a tabela criada

SELECT * FROM Movie;

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

##foreign key é uma chave que referencia a primary key de outra tabela

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Muito bom!",
    9,
	"001"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Muito bom!",
    9,
	"005"
);
## Error Code: 1452. Erro na foreign key (não existe)

ALTER TABLE Movie DROP COLUMN rating;

DELETE FROM Movie WHERE id="001";
## Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`silveira-21814712-karen-kubo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
## Existe um erro, pois outra tabela está utilizando a referência.

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
## Ele cria uma tabela de elenco dos filmes, referenciando as tabelas Actor e Movie.

INSERT INTO MovieCast (movie_id, actor_id) VALUES ("005",
    "004");

SELECT * FROM MovieCast;
# Não pode atualizar um dado inexistente.

DELETE FROM Actor WHERE id="001";
#Não pode deletar um dado sendo utilizado por outra tabela;

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

#O operador ON é uma condição que diz quais dados devem ser comparados e juntados.

SELECT Movie.id as movie_id, Rating.rate as rating FROM Movie
INNER JOIN Rating ON movie_id = Rating.movie_id;

SELECT title, rate FROM Movie
LEFT JOIN Rating ON movie_id = Rating.movie_id;

SELECT Movie.id as movie_id, Movie.title, MovieCast.actor_id FROM Movie
RIGHT JOIN MovieCast ON movie_id = MovieCast.movie_id;








