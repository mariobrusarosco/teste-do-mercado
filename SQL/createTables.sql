--DROP DATABASE IF EXISTS valemobi;
--CREATE DATABASE valemobi;
-- CREATE DATABASE cl58-valemobi;
USE valemobi;

DROP TABLE IF EXISTS negociacoes;
CREATE TABLE negociacoes (
  ID INT(255) UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
  codMercadoria INT(10) UNSIGNED ZEROFILL NOT NULL,
  tipoMercadoria VARCHAR(75) NOT NULL,
  nome VARCHAR(75) NOT NULL,
  qtd MEDIUMINT UNSIGNED ZEROFILL NOT NULL,
  preco DECIMAL(10,2) UNSIGNED NOT NULL,
  tipoNegociacao  VARCHAR(75) NOT NULL
);


INSERT INTO negociacoes VALUES
(null,1,"mercadoria 01","nome 01",50,145.78,"negocio 01"),
(null,28,"mercadoria 02","nome 02",1250,15.2,"negocio 02");


SELECT * FROM negociacoes;
