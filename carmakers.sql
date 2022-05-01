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
    (1,'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eaque ut porro pariatur eveniet. Paris: se desataca por su confprt y potencia que lo hace un superdeportivo muy diferente a otro. Su alto diseno y mas amplio confort lo hace ser hoy en dia un auto envidiable por su competencia. EL fabricante Bnezema de origen frances nomino al auto en honor a su ciudad de origen. SU color principal hace honor a los colores de la bandera de su pais.','Paris','producto2.jpg',90,2.5,1500,230,3,NULL),
    (2,'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eaque ut porro pariatur eveniet. Roma: es un superdeportivo de origen Argentino cuyo nombre respresenta la ciudad natal de sucreador Ernesto Quiq,Destaca un gran motor y una agilidad para las curvas a seguir.','Roma','producto.jpg',20,2.2,500,180,4,NULL),
    (3,'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eaque ut porro pariatur eveniet.Zenit: auto creado excluivamente para Putin, destaca por sus asientos de cuero animal y mas alto confort','Zenit','producto2.jpg',60,2,1300,180,3,NULL),
    (4,'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eaque ut porro pariatur eveniet.  Berlin: es un diseno exclusivo que se realizo en apoyo a Mercedes, dicha compania baso su diseno y realizacion en el auto ya conocido AMG vision. ','Berlin','producto.jpg',30,1.5,1300,110,3,NULL),
    (5,'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eaque ut porro pariatur eveniet. Madrid: es un camioneta premiu, desarrollada por el piloto de carrera Alonso para brindarle un obsequio al plantel del Real Madrid en conmemoracion a su 14 champions. Su nombre hace honor a la capital de la ciudad espanola.','Madrid','producto2.jpg',90,5,1500,230,3,NULL);
UNLOCK TABLES;
  
/*SELECT * from modelos_autos*/

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
    `idUsuario` INT unsigned NOT NULL AUTO_INCREMENT,
    `nombres` VARCHAR(100) CHARACTER SET utf8,
    `apellidos` VARCHAR(100) CHARACTER SET utf8,
    `email` VARCHAR(200) CHARACTER SET utf8,
    `password` VARCHAR(100) CHARACTER SET utf8,
    `imgPerfil` VARCHAR(200) CHARACTER SET utf8,
PRIMARY KEY (`idUsuario`)
);

INSERT INTO usuarios VALUES
    (1,'Sara','Latyn','latynsara41@mail.com','$2b$10$mBjltuoEHceV.3iykvqbyuzPJErPRBKrV8hWWtcuFIgMqi38UDjL.','perrito.jpg'),
    (2,'Gonzalo','González','gonzalogonzalez@gmail.com','$2b$10$RxWeJbr9u1PklvqvwmPVUup703LhVCdEMtwFJ5SWGfGMm1PH4zya6','nombre_imagen1650320611191.png'),
    (3,'Lucas','Lucas','lucaslucas@gmail.com','$2b$10$9FzJoXxuu9bNo5FuY2tU5.xGxBf227QN1/LAGrhB.cTImZatNxDE.','nombre_imagen1650321246265.png'),
    (4,'Sara','Latyn','latynsara@mail.com','$2b$10$eCWAWuzqob5/gxL1U7mGHex2wUEm79PZC5AYHl952t0fPDEp0XgLC','nombre_imagen1650331039002.png'),
    (5,'Tuesday','Slowey','tslowey0@economist.com','iVk9bpr','user_1.jpg'),
    (6,'Rubi','Higgan','rhiggan1@twitpic.com','w8UoRswc4IK','user_2.jpg'),
    (7,'Karil','Hammerton','khammerton2@princeton.edu','ZF8RmbY1','user_3.jpg'),
    (8,'Katheryn','Hawkswell','khawkswell3@weather.com','wcMYwPT','user_4.jpg'),
    (9,'Carlie','Buncom','cbuncom4@networkadvertising.org','Xd0fZKxq5','user_5.jpg'),
    (10,'Margaret','Tisor','mtisor5@apache.org','cXb1sW','user_6.jpg'),
    (11,'Torr','Hassur','thassur6@theguardian.com','XiidSE','user_7.jpg'),
    (12,'Gigi','Cornfield','gcornfield7@alexa.com','LnX9Nk5wpvm','user_8.jpg'),
    (13,'Winny','Farlamb','wfarlamb8@vinaora.com','fi1HGXgaVEKu','user_9.jpg'),
    (14,'Kirsteni','Bolgar','kbolgar9@reference.com','Zrt2ur','user_10.jpg'),
    (15,'Siusan','Troni','stronia@hud.gov','fnIXDxjNPO','user_11.jpg'),
    (16,'Alys','Soonhouse','asoonhouseb@cocolog-nifty.com','Rh0Dx81Qt','user_12.jpg'),
    (17,'Pavel','Kilroy','pkilroyc@slate.com','DKzCFjXj2c','user_13.jpg'),
    (18,'Isador','Scarratt','iscarrattd@usda.gov','UlRJRI','user_14.jpg'),
    (19,'Virginia','Shankster','vshankstere@ameblo.jp','IhLYBv','user_15.jpg'),
    (20,'Allin','Fegan','afeganf@netlog.com','H1cUQ9W','user_16.jpg'),
    (21,'Patience','Fitzmaurice','pfitzmauriceg@goo.gl','chz86FFO','user_17.jpg'),
    (22,'Cathryn','Kellart','ckellarth@tumblr.com','xhqugnm','user_18.jpg'),
    (23,'Sydney','Heales','shealesi@twitpic.com','ytS8GA1f7','user_19.jpg'),
    (24,'Bennett','Lambertz','blambertzj@elegantthemes.com','3CYZObn5cV','user_20.jpg');
