-- MySQL dump 10.13  Distrib 5.7.18, for Linux (x86_64)
--
-- Host: localhost    Database: laravel-database
-- ------------------------------------------------------
-- Server version	5.7.18-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actor_episode`
--

DROP DATABASE IF EXISTS carmakers;
CREATE DATABASE carmakers;
USE carmakers;

DROP TABLE IF EXISTS `modelos_autos`;

CREATE TABLE `modelos_autos` (
  `idModelo` int unsigned NOT NULL AUTO_INCREMENT,
  `descripcion` TEXT,
  `nombreModelo` varchar(500),
  `imgProducto` varchar(500),
  `deliveryEstimado` int(10),
  `precio` int(10),
  `autonomia` int(10),
  `velocidadMaxima` int(10),
  `tiempoDeCeroCien` int(10),
  `ingreso` DATE ,

  PRIMARY KEY (`idModelo`)
);

LOCK TABLES `modelos_autos` WRITE;
INSERT INTO `modelos_autos` VALUES
    (1,'Se destaca por su confort y potencia haciéndolo un superdeportivo diferente a cualquier otro. Su elegante diseño y cómoda estructura lo hace ser hoy en dia un auto envidiable por su competencia. El fabricante Bnezema de origen francés, le dió el nombre en honor a su ciudad de origen. Su color principal referencia los colores de la bandera de su pais.','Paris','miniaturaParis.jpg',90,40000,1500,230,3,NULL),
    (2,'Es un superdeportivo de origen argentino cuyo nombre respresenta la ciudad natal de su creador Ernesto Quiq. Se destaca por su gran motor y una agilidad para las curvas a seguir.','Roma','miniaturaRoma.jpg',20,35000,500,180,4,NULL),
    (3,'Este móvil se destaca por sus asientos de cuero y más alto confort','Zenit','miniaturaZenit.jpg',60,25000,1300,180,3,NULL),
    (4,'Exclusivo producto que se realizó en apoyo a Mercedes. Dicha compañía basó su diseño y realización en el auto ya conocido AMG vision. ','Berlin','miniaturaBerlin.jpg',30,30000,1300,110,3,NULL),
    (5,'Automóvil premium, desarrollado por el piloto de carrera Alonso para brindarle un obsequio al plantel del Real Madrid en conmemoración a su 14 champions. Su nombre hace honor a la capital de la ciudad española.','Madrid','miniaturaMadrid.jpg',90,50000,1500,230,3,NULL);
UNLOCK TABLES;
  
#SELECT * from modelos_autos;

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
    `idUsuario` INT unsigned NOT NULL AUTO_INCREMENT,
    `nombres` VARCHAR(100) CHARACTER SET utf8,
    `apellidos` VARCHAR(100) CHARACTER SET utf8,
    `email` VARCHAR(200) CHARACTER SET utf8,
    `password` VARCHAR(100) CHARACTER SET utf8,
    `imgPerfil` VARCHAR(200) CHARACTER SET utf8,
    `is_admin` INT unsigned not NULL,
PRIMARY KEY (`idUsuario`)
);

INSERT INTO usuarios VALUES
    (1,'Sara','Latyn','latynsara41@mail.com','$2b$10$mBjltuoEHceV.3iykvqbyuzPJErPRBKrV8hWWtcuFIgMqi38UDjL.','perrito.jpg', 1),
    (2,'Gonzalo','González','gonzalogonzalez@gmail.com','$2b$10$RxWeJbr9u1PklvqvwmPVUup703LhVCdEMtwFJ5SWGfGMm1PH4zya6','nombre_imagen1655343048296.jpg', 0),
    (3,'Lucas','Lucas','lucaslucas@gmail.com','$2b$10$9FzJoXxuu9bNo5FuY2tU5.xGxBf227QN1/LAGrhB.cTImZatNxDE.','nombre_imagen1655424055900.jpg', 0),
    (4,'Sara','Latyn','latynsara@mail.com','$2b$10$eCWAWuzqob5/gxL1U7mGHex2wUEm79PZC5AYHl952t0fPDEp0XgLC','nombre_imagen1650331039002.png', 0),
    (5,'Tuesday','Slowey','tslowey0@economist.com','iVk9bpr','default.png', 0),
    (6,'Rubi','Higgan','rhiggan1@twitpic.com','w8UoRswc4IK','default.png', 0),
    (7,'Karil','Hammerton','khammerton2@princeton.edu','ZF8RmbY1','default.png', 0),
    (8,'Katheryn','Hawkswell','khawkswell3@weather.com','wcMYwPT','default.png', 0),
    (9,'Carlie','Buncom','cbuncom4@networkadvertising.org','Xd0fZKxq5','default.png', 0),
    (10,'Margaret','Tisor','mtisor5@apache.org','cXb1sW','default.png', 0),
    (11,'Torr','Hassur','thassur6@theguardian.com','XiidSE','default.png', 0),
    (12,'Gigi','Cornfield','gcornfield7@alexa.com','LnX9Nk5wpvm','default.png', 0),
    (13,'Winny','Farlamb','wfarlamb8@vinaora.com','fi1HGXgaVEKu','default.png', 0),
    (14,'Kirsteni','Bolgar','kbolgar9@reference.com','Zrt2ur','default.png', 0),
    (15,'Siusan','Troni','stronia@hud.gov','fnIXDxjNPO','default.png', 0),
    (16,'Alys','Soonhouse','asoonhouseb@cocolog-nifty.com','Rh0Dx81Qt','default.png', 0),
    (17,'Pavel','Kilroy','pkilroyc@slate.com','DKzCFjXj2c','default.png', 0),
    (18,'Isador','Scarratt','iscarrattd@usda.gov','UlRJRI','default.png', 0),
    (19,'Virginia','Shankster','vshankstere@ameblo.jp','IhLYBv','default.png', 0),
    (20,'Allin','Fegan','afeganf@netlog.com','H1cUQ9W','default.png', 0),
    (21,'Patience','Fitzmaurice','pfitzmauriceg@goo.gl','chz86FFO','default.png', 0),
    (22,'Cathryn','Kellart','ckellarth@tumblr.com','xhqugnm','default.png', 0),
    (23,'Sydney','Heales','shealesi@twitpic.com','ytS8GA1f7','default.png', 0),
    (24,'Bennett','Lambertz','blambertzj@elegantthemes.com','3CYZObn5cV','default.png', 0),
    (25,'cris','Lambertz','criscriscris@cris.com','$2b$10$RR1nbUvNivf.GSISFaek5.Bf6A.jf.iJzWIIyD8YNPiJsRGlaaffu','default.png', 1);
   
   #select * from usuarios;
   
   CREATE TABLE `emails` (
  `idEmail` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100),

  PRIMARY KEY (`idEmail`)
);

#select * from emails;

