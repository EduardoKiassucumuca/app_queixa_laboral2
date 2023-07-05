-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bd_queixa_laboral2
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bi`
--

DROP TABLE IF EXISTS `bi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emitido_em` datetime NOT NULL,
  `valido_ate` datetime NOT NULL,
  `file` varchar(255) NOT NULL,
  `numeroBI` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bi`
--

LOCK TABLES `bi` WRITE;
/*!40000 ALTER TABLE `bi` DISABLE KEYS */;
INSERT INTO `bi` VALUES (1,'2022-04-19 00:00:00','2022-04-19 00:00:00','/BI.pdf','123456LA092'),(2,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(3,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(4,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(5,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(6,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(7,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(8,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(9,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(10,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(11,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(12,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(13,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(14,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(15,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(16,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(17,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(18,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(19,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(20,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(21,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(22,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(23,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(24,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(25,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(26,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(27,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(28,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(29,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(30,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(31,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(32,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(33,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(34,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(35,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(36,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(37,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(38,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(39,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(40,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(41,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(42,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(43,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(44,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(45,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(46,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(47,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(48,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(49,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(50,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(51,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(52,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(53,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(54,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(55,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(56,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(57,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(58,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(59,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(60,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(61,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(62,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(63,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(64,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(65,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(66,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(67,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(68,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(69,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(70,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(71,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(72,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(73,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(74,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(75,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(76,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(77,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(78,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(79,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(80,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(81,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(82,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(83,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(84,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(85,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(86,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(87,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(88,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(89,'2022-04-24 00:00:00','2022-04-24 00:00:00','/BI.pdf','teste3'),(90,'2022-04-24 00:00:00','2022-04-24 00:00:00','/BI.pdf','teste3'),(91,'2021-03-21 00:00:00','2023-03-21 00:00:00','/BI.pdf','teste4'),(92,'2021-03-21 00:00:00','2023-03-21 00:00:00','/BI.pdf','teste4'),(93,'2021-03-20 00:00:00','2023-03-20 00:00:00','/BI.pdf','Teste5'),(94,'2021-03-20 00:00:00','2023-03-20 00:00:00','/BI.pdf','Teste5'),(95,'2022-04-24 00:00:00','2022-04-24 00:00:00','/BI.pdf','teste6'),(96,'2022-04-24 00:00:00','2022-04-24 00:00:00','/BI.pdf','teste6'),(97,'2022-04-24 00:00:00','2022-04-24 00:00:00','/BI.pdf','teste6'),(98,'2022-04-24 00:00:00','2022-04-24 00:00:00','/BI.pdf','teste6'),(99,'2022-04-24 00:00:00','2022-04-24 00:00:00','/BI.pdf','teste6'),(100,'2022-04-24 00:00:00','2022-04-24 00:00:00','/BI.pdf','teste6'),(101,'2022-04-24 00:00:00','2022-04-24 00:00:00','/BI.pdf','teste6'),(102,'2022-04-24 00:00:00','2022-04-24 00:00:00','/BI.pdf','teste6'),(103,'2022-04-24 00:00:00','2022-04-24 00:00:00','/BI.pdf','teste6'),(104,'2022-04-24 00:00:00','2022-04-24 00:00:00','/BI.pdf','teste6'),(105,'2022-04-24 00:00:00','2022-04-24 00:00:00','/BI.pdf','teste6'),(106,'2020-05-06 00:00:00','2023-05-06 00:00:00','uploads\\1686530739543-Malaria Out 2022.pdf','1234567BG543'),(107,'2020-05-06 00:00:00','2023-05-06 00:00:00','uploads\\1686531645011-How to Stop Worrying and Start Living by Dale Carnegie (z-lib.org).pdf','1234567BG543'),(108,'2020-05-06 00:00:00','2023-05-06 00:00:00','uploads\\1686531812485-How to Stop Worrying and Start Living by Dale Carnegie (z-lib.org).pdf','1234567BG543'),(109,'2020-05-06 00:00:00','2023-05-06 00:00:00','uploads\\How to Stop Worrying and Start Living by Dale Carnegie (z-lib.org).pdf-1686531882176','1234567BG543'),(110,'2020-05-06 00:00:00','2023-05-06 00:00:00','uploads\\1686531916404-How to Stop Worrying and Start Living by Dale Carnegie (z-lib.org).pdf','1234567BG543'),(111,'2020-05-06 00:00:00','2023-05-06 00:00:00','uploads\\1686532062180-How to Stop Worrying and Start Living by Dale Carnegie (z-lib.org).pdf','1234567BG543'),(112,'2022-05-11 00:00:00','2022-05-11 00:00:00','uploads\\1686606873246-Novo FasciÌculo 2017 PPP.pdf','TESTE22'),(113,'2022-05-11 00:00:00','2022-05-11 00:00:00','uploads\\1686606911169-Novo FasciÌculo 2017 PPP.pdf','TESTE22'),(114,'2022-05-11 00:00:00','2022-05-11 00:00:00','uploads\\1686606929178-Novo FasciÌculo 2017 PPP.pdf','TESTE22'),(115,'2022-05-11 00:00:00','2022-05-11 00:00:00','uploads\\1686607072823-Novo FasciÌculo 2017 PPP.pdf','TESTE22'),(116,'2022-05-11 00:00:00','2022-05-11 00:00:00','uploads\\1686607184981-Novo FasciÌculo 2017 PPP.pdf','TESTE22'),(117,'2022-05-11 00:00:00','2022-05-11 00:00:00','uploads\\1686607953687-Novo FasciÌculo 2017 PPP.pdf','TESTE22'),(118,'2022-05-11 00:00:00','2022-05-11 00:00:00','uploads\\1686609753639-Novo FasciÌculo 2017 PPP.pdf','TESTE22'),(119,'2022-05-11 00:00:00','2022-05-11 00:00:00','uploads\\1686609773726-Novo FasciÌculo 2017 PPP.pdf','TESTE22'),(120,'2022-05-11 00:00:00','2022-05-11 00:00:00','uploads\\1686609789591-Novo FasciÌculo 2017 PPP.pdf','TESTE22'),(121,'2022-05-11 00:00:00','2022-05-11 00:00:00','uploads\\1686609991579-Novo FasciÌculo 2017 PPP.pdf','TESTE22'),(122,'2022-04-13 00:00:00','2022-05-13 00:00:00','uploads\\1686781626140-l4pt.pdf','TESTE23'),(123,'2022-04-13 00:00:00','2022-05-13 00:00:00','uploads\\1686781685092-l4pt.pdf','TESTE23'),(124,'2022-04-13 00:00:00','2022-05-13 00:00:00','uploads\\1686781718194-l4pt.pdf','TESTE23'),(125,'2022-05-18 00:00:00','2022-05-18 00:00:00','uploads\\1687214384706-l5 pt.pdf','novo_teste'),(126,'2022-05-18 00:00:00','2022-05-18 00:00:00','uploads\\1687214445309-l5 pt.pdf','novo_teste'),(127,'2022-05-21 00:00:00','2023-05-21 00:00:00','uploads\\1687469719192-l10 pt.pdf','TESTE24'),(128,'2022-05-21 00:00:00','2023-05-21 00:00:00','uploads\\1687469786558-l10 pt.pdf','TESTE24'),(129,'2021-05-21 00:00:00','2022-05-21 00:00:00','uploads\\1687469917727-l2.pdf','TESTE25'),(130,'2022-10-11 00:00:00','2023-10-11 00:00:00','/file.pdf','0123456LA123'),(131,'2020-09-10 00:00:00','2023-09-10 00:00:00','/file2.pdf','542456BG153');
/*!40000 ALTER TABLE `bi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bis`
--

DROP TABLE IF EXISTS `bis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bis` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `sobrenome` varchar(255) DEFAULT NULL,
  `numeroBI` varchar(255) DEFAULT NULL,
  `naturalidade` varchar(255) DEFAULT NULL,
  `data_nascimento` datetime DEFAULT NULL,
  `sexo` varchar(255) DEFAULT NULL,
  `altura` float DEFAULT NULL,
  `emitido_em` datetime DEFAULT NULL,
  `valido_ate` datetime DEFAULT NULL,
  `enderecoID` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bis`
--

LOCK TABLES `bis` WRITE;
/*!40000 ALTER TABLE `bis` DISABLE KEYS */;
/*!40000 ALTER TABLE `bis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chefeservicos`
--

DROP TABLE IF EXISTS `chefeservicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chefeservicos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `trabalhadorID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `trabalhadorID` (`trabalhadorID`),
  CONSTRAINT `chefeservicos_ibfk_1` FOREIGN KEY (`trabalhadorID`) REFERENCES `trabalhador` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chefeservicos`
--

LOCK TABLES `chefeservicos` WRITE;
/*!40000 ALTER TABLE `chefeservicos` DISABLE KEYS */;
/*!40000 ALTER TABLE `chefeservicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conta`
--

DROP TABLE IF EXISTS `conta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `senha` varchar(1000) DEFAULT NULL,
  `user_logado` tinyint DEFAULT NULL,
  `privilegios` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conta`
--

LOCK TABLES `conta` WRITE;
/*!40000 ALTER TABLE `conta` DISABLE KEYS */;
INSERT INTO `conta` VALUES (1,'edkiassu@isptec.co.ao','edkiassu',NULL,NULL),(2,'marcio@hotmail.com','marcio123',NULL,NULL),(4,'cristiano@hotmail.com','$2b$12$F3Q9UnHVBIDFLh/q/scUR.eFfXpT2PLFnHfoLG20CsKDyRRUKDEre',NULL,NULL);
/*!40000 ALTER TABLE `conta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacto_empresa`
--

DROP TABLE IF EXISTS `contacto_empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacto_empresa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contacto` int NOT NULL,
  `empresaID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `empresaID` (`empresaID`),
  CONSTRAINT `contacto_empresa_ibfk_1` FOREIGN KEY (`empresaID`) REFERENCES `empresa` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacto_empresa`
--

LOCK TABLES `contacto_empresa` WRITE;
/*!40000 ALTER TABLE `contacto_empresa` DISABLE KEYS */;
/*!40000 ALTER TABLE `contacto_empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacto_pessoa`
--

DROP TABLE IF EXISTS `contacto_pessoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacto_pessoa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contacto` int NOT NULL,
  `pessoaID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pessoaID` (`pessoaID`),
  CONSTRAINT `contacto_pessoa_ibfk_1` FOREIGN KEY (`pessoaID`) REFERENCES `pessoa` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacto_pessoa`
--

LOCK TABLES `contacto_pessoa` WRITE;
/*!40000 ALTER TABLE `contacto_pessoa` DISABLE KEYS */;
/*!40000 ALTER TABLE `contacto_pessoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dados_pessoais`
--

DROP TABLE IF EXISTS `dados_pessoais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dados_pessoais` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `sobrenome` varchar(255) DEFAULT NULL,
  `bairro` varchar(255) DEFAULT NULL,
  `rua` varchar(255) DEFAULT NULL,
  `descricao_casa` varchar(255) DEFAULT NULL,
  `provincia` varchar(255) DEFAULT NULL,
  `nBI` varchar(255) DEFAULT NULL,
  `data_nascimento` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dados_pessoais`
--

LOCK TABLES `dados_pessoais` WRITE;
/*!40000 ALTER TABLE `dados_pessoais` DISABLE KEYS */;
/*!40000 ALTER TABLE `dados_pessoais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_empresa` varchar(255) NOT NULL,
  `nif` varchar(255) NOT NULL,
  `designacao` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `url_website` varchar(255) DEFAULT NULL,
  `enderecoID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `enderecoID` (`enderecoID`),
  CONSTRAINT `empresa_ibfk_1` FOREIGN KEY (`enderecoID`) REFERENCES `endereco` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'teste2','teste2','teste2','teste2',NULL,116),(2,'teste2','teste2','teste2','teste2','teste2',118),(3,'teste2','teste2','teste2','teste2','teste2',120),(4,'teste2','teste2','teste2','teste2','teste2',122),(5,'teste2','teste2','teste2','teste2','teste2',124),(6,'teste2','teste2','teste2','teste2','teste2',126),(7,'teste2','teste2','teste2','teste2','teste2',128),(8,'teste2','teste2','teste2','teste2','teste2',130),(9,'teste2','teste2','teste2','teste2','teste2',132),(10,'teste2','teste2','teste2','teste2','teste2',134),(11,'teste2','teste2','teste2','teste2','teste2',136),(12,'teste2','teste2','teste2','teste2','teste2',138),(13,'teste2','teste2','teste2','teste2','teste2',140),(14,'teste2','teste2','teste2','teste2','teste2',142),(15,'teste2','teste2','teste2','teste2','teste2',144),(16,'teste2','teste2','teste2','teste2','teste2',146),(17,'teste2','teste2','teste2','teste2','teste2',148),(18,'teste2','teste2','teste2','teste2','teste2',150),(19,'emp1','ÇÇ','KK','emp1','emp1',165),(20,'emp1','ÇÇ','KK','emp1','emp1',167),(21,'emp1','ÇÇ','KK','emp1','emp1',169),(22,'emp1','ÇÇ','KK','emp1','emp1',171),(23,'TESTE20','TESTE20','TESTE20','undefined','undefined',173),(24,'TESTE21','TESTESTE21TE20','TESTE21','TESTE21@xpto.ao','TESTE21',175),(25,'TESTE21','TESTESTE21TE20','TESTE21','TESTE21@xpto.ao','TESTE21',177),(26,'TESTE21','TESTESTE21TE20','TESTE21','TESTE21@xpto.ao','TESTE21',179),(27,'TESTE21','TESTESTE21TE20','TESTE21','TESTE21@xpto.ao','TESTE21',181),(28,'TESTE21','TESTESTE21TE20','TESTE21','TESTE21@xpto.ao','TESTE21',183),(29,'TESTE22','TESTE22','TESTE22','TESTE22@cc.xx','TESTE22',185),(30,'TESTE22','TESTE22','TESTE22','TESTE22@cc.xx','TESTE22',187),(31,'TESTE22','TESTE22','TESTE22','TESTE22@cc.xx','TESTE22',189),(32,'TESTE22','TESTE22','TESTE22','TESTE22@cc.xx','TESTE22',191),(33,'TESTE22','TESTE22','TESTE22','TESTE22@cc.xx','TESTE22',193),(34,'TESTE22','TESTE22','TESTE22','TESTE22@cc.xx','TESTE22',195),(35,'TESTE22','TESTE22','TESTE22','TESTE22@cc.xx','TESTE22',197),(36,'TESTE22','TESTE22','TESTE22','TESTE22@cc.xx','TESTE22',199),(37,'TESTE22','TESTE22','TESTE22','TESTE22@cc.xx','TESTE22',201),(38,'TESTE22','TESTE22','TESTE22','TESTE22@cc.xx','TESTE22',203),(39,'TESTE23','TESTE23','TESTE23','TESTE23@XPTO.AO','TESTE23',205),(40,'TESTE23','TESTE23','TESTE23','TESTE23@XPTO.AO','TESTE23',207),(41,'TESTE23','TESTE23','TESTE23','TESTE23@XPTO.AO','TESTE23',209),(42,'novo_teste','novo_teste','novo_teste','novo_teste@ds.ao','novo_teste.xpto.ao',211),(43,'novo_teste','novo_teste','novo_teste','novo_teste@ds.ao','novo_teste.xpto.ao',213),(44,'TESTE24','TESTE24','TESTE24','TESTE24@XPTR.OE','TESTE24',215),(45,'TESTE24','TESTE24','TESTE24','TESTE24@XPTR.OE','TESTE24',217),(46,'TESTE25','TESTE25','TESTE25','TESTE25@gmail.com','TESTE25.co.ao',219);
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bairro` varchar(255) NOT NULL,
  `rua` varchar(255) NOT NULL,
  `edificio` varchar(255) DEFAULT NULL,
  `casa` varchar(255) DEFAULT NULL,
  `provincia` varchar(255) NOT NULL,
  `telefone_principal` varchar(255) NOT NULL,
  `telefone_alternativo` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=222 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (1,'ll','ll','edificio',NULL,'Cabinda','',NULL),(2,'ll','ll','edificio',NULL,'Cabinda','',NULL),(3,'ll','ll','edificio',NULL,'Bengo','',NULL),(4,'ll','ll','edificio',NULL,'Bengo','',NULL),(5,'çç','çç','edificio','casa_edificioEmp','Bié','',NULL),(6,'ll','ll','edificio',NULL,'Bengo','',NULL),(7,'ll','ll','edificio',NULL,'Bengo','',NULL),(8,'ll','ll','edificio',NULL,'Bengo','',NULL),(9,'çç','çç','edificio','casa_edificioEmp','Bié','',NULL),(10,'ll','ll','edificio',NULL,'Bengo','',NULL),(11,'çç','çç','edificio','casa_edificioEmp','Bié','',NULL),(12,'ll','ll','edificio',NULL,'Bengo','',NULL),(13,'çç','çç','edificio','casa_edificioEmp','Bié','',NULL),(14,'ll','ll','edificio',NULL,'Bengo','',NULL),(15,'çç','çç','edificio','casa_edificioEmp','Bié','',NULL),(16,'ll','ll','edificio',NULL,'Bengo','',NULL),(17,'çç','çç','edificio','casa_edificioEmp','Bié','',NULL),(18,'ll','ll','edificio',NULL,'Bengo','',NULL),(19,'çç','çç','edificio','casa_edificioEmp','Bié','',NULL),(20,'ll','ll','edificio',NULL,'Bengo','',NULL),(21,'çç','çç','edificio','casa_edificioEmp','Bié','',NULL),(22,'ll','ll','edificio',NULL,'Bengo','',NULL),(23,'çç','çç','edificio','casa_edificioEmp','Bié','',NULL),(24,'ll','ll','edificio',NULL,'Bengo','',NULL),(25,'çç','çç','edificio','casa_edificioEmp','Bié','',NULL),(26,'ll','ll','edificio',NULL,'Bengo','',NULL),(27,'çç','çç','edificio','casa_edificioEmp','Bié','',NULL),(28,'ll','ll','edificio',NULL,'Bengo','',NULL),(29,'çç','çç','edificio','casa_edificioEmp','Bié','',NULL),(30,'ll','ll','edificio',NULL,'Bengo','',NULL),(31,'çç','çç','edificio','casa_edificioEmp','Bié','',NULL),(32,'aa','aa','edificio',NULL,'Huambo','',NULL),(33,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(34,'aa','aa','edificio',NULL,'Huambo','',NULL),(35,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(36,'aa','aa','edificio',NULL,'Huambo','',NULL),(37,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(38,'aa','aa','edificio',NULL,'Huambo','',NULL),(39,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(40,'aa','aa','edificio',NULL,'Huambo','',NULL),(41,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(42,'aa','aa','edificio',NULL,'Huambo','',NULL),(43,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(44,'aa','aa','edificio',NULL,'Huambo','',NULL),(45,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(46,'aa','aa','edificio',NULL,'Huambo','',NULL),(47,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(48,'aa','aa','edificio',NULL,'Huambo','',NULL),(49,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(50,'aa','aa','edificio',NULL,'Huambo','',NULL),(51,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(52,'aa','aa','edificio',NULL,'Huambo','',NULL),(53,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(54,'aa','aa','edificio',NULL,'Huambo','',NULL),(55,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(56,'aa','aa','edificio',NULL,'Huambo','',NULL),(57,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(58,'aa','aa','edificio',NULL,'Huambo','',NULL),(59,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(60,'aa','aa','edificio',NULL,'Huambo','',NULL),(61,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(62,'aa','aa','edificio',NULL,'Huambo','',NULL),(63,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(64,'aa','aa','edificio',NULL,'Huambo','',NULL),(65,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(66,'aa','aa','edificio',NULL,'Huambo','',NULL),(67,'bb','bb','edificio','casa_edificioEmp','Benguela','',NULL),(68,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(69,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(70,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(71,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(72,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(73,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(74,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(75,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(76,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(77,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(78,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(79,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(80,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(81,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(82,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(83,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(84,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(85,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(86,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(87,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(88,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(89,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(90,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(91,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(92,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(93,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(94,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(95,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(96,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(97,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(98,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(99,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(100,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(101,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(102,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(103,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(104,'teste','teste','edificio',NULL,'Cuando-Cubango','',NULL),(105,'teste','teste','edificio','casa_edificioEmp','Benguela','',NULL),(106,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(107,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(108,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(109,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(110,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(111,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(112,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(113,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(114,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(115,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(116,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(117,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(118,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(119,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(120,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(121,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(122,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(123,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(124,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(125,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(126,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(127,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(128,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(129,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(130,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(131,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(132,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(133,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(134,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(135,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(136,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(137,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(138,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(139,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(140,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(141,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(142,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(143,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(144,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(145,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(146,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(147,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(148,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(149,'teste2','teste2','edificio',NULL,'Cuanza-Norte','',NULL),(150,'teste2','teste2','edificio','casa_edificioEmp','Cabinda','',NULL),(151,'teste4','teste4',NULL,'teste4','Luanda','',NULL),(152,'teste4','teste4',NULL,'teste4','Luanda','',NULL),(153,'Teste5','Teste5',NULL,'Teste5','Luanda','',NULL),(154,'Teste5','Teste5',NULL,'Teste5','Luanda','',NULL),(155,'teste6','teste6',NULL,'teste6','Namibe','',NULL),(156,'teste6','teste6',NULL,'teste6','Namibe','',NULL),(157,'teste6','teste6',NULL,'teste6','Namibe','',NULL),(158,'teste6','teste6',NULL,'teste6','Namibe','',NULL),(159,'teste6','teste6',NULL,'teste6','Namibe','',NULL),(160,'teste6','teste6',NULL,'teste6','Namibe','',NULL),(161,'teste6','teste6',NULL,'teste6','Namibe','',NULL),(162,'emp1','emp1','emp1',NULL,'Benguela','',NULL),(163,'emp1','emp1','emp1',NULL,'Benguela','',NULL),(164,'teste6','teste6',NULL,'teste6','Namibe','',NULL),(165,'emp1','emp1','emp1',NULL,'Benguela','',NULL),(166,'teste6','teste6',NULL,'teste6','Namibe','',NULL),(167,'emp1','emp1','emp1',NULL,'Benguela','',NULL),(168,'teste6','teste6',NULL,'teste6','Namibe','',NULL),(169,'emp1','emp1','emp1',NULL,'Benguela','',NULL),(170,'teste6','teste6',NULL,'teste6','Namibe','',NULL),(171,'emp1','emp1','emp1',NULL,'Benguela','',NULL),(172,'TESTE20','TESTE20',NULL,'TESTE20','Benguela','923445566',953223355),(173,'TESTE20','undefined','TESTE20',NULL,'undefined','934332211',NULL),(174,'TESTE21','TESTTESTE21E20',NULL,'TESTE21','Benguela','923445566',953223355),(175,'TESTE21','TESTE21','TESTE21',NULL,'Benguela','934332211',NULL),(176,'TESTE21','TESTTESTE21E20',NULL,'TESTE21','Benguela','923445566',953223355),(177,'TESTE21','TESTE21','TESTE21',NULL,'Benguela','934332211',NULL),(178,'TESTE21','TESTTESTE21E20',NULL,'TESTE21','Benguela','923445566',953223355),(179,'TESTE21','TESTE21','TESTE21',NULL,'Benguela','934332211',NULL),(180,'TESTE21','TESTTESTE21E20',NULL,'TESTE21','Benguela','923445566',953223355),(181,'TESTE21','TESTE21','TESTE21',NULL,'Benguela','934332211',NULL),(182,'TESTE21','TESTTESTE21E20',NULL,'TESTE21','Benguela','923445566',953223355),(183,'TESTE21','TESTE21','TESTE21',NULL,'Benguela','934332211',NULL),(184,'TESTE22','TESTE22',NULL,'TESTE22','Bié','922112211',934332222),(185,'TESTE22','TESTE22','TESTE22',NULL,'Cabinda','912334433',NULL),(186,'TESTE22','TESTE22',NULL,'TESTE22','Bié','922112211',934332222),(187,'TESTE22','TESTE22','TESTE22',NULL,'Cabinda','912334433',NULL),(188,'TESTE22','TESTE22',NULL,'TESTE22','Bié','922112211',934332222),(189,'TESTE22','TESTE22','TESTE22',NULL,'Cabinda','912334433',NULL),(190,'TESTE22','TESTE22',NULL,'TESTE22','Bié','922112211',934332222),(191,'TESTE22','TESTE22','TESTE22',NULL,'Cabinda','912334433',NULL),(192,'TESTE22','TESTE22',NULL,'TESTE22','Bié','922112211',934332222),(193,'TESTE22','TESTE22','TESTE22',NULL,'Cabinda','912334433',NULL),(194,'TESTE22','TESTE22',NULL,'TESTE22','Bié','922112211',934332222),(195,'TESTE22','TESTE22','TESTE22',NULL,'Cabinda','912334433',NULL),(196,'TESTE22','TESTE22',NULL,'TESTE22','Bié','922112211',934332222),(197,'TESTE22','TESTE22','TESTE22',NULL,'Cabinda','912334433',NULL),(198,'TESTE22','TESTE22',NULL,'TESTE22','Bié','922112211',934332222),(199,'TESTE22','TESTE22','TESTE22',NULL,'Cabinda','912334433',NULL),(200,'TESTE22','TESTE22',NULL,'TESTE22','Bié','922112211',934332222),(201,'TESTE22','TESTE22','TESTE22',NULL,'Cabinda','912334433',NULL),(202,'TESTE22','TESTE22',NULL,'TESTE22','Bié','922112211',934332222),(203,'TESTE22','TESTE22','TESTE22',NULL,'Cabinda','912334433',NULL),(204,'TESTE23','TESTE23',NULL,'TESTE23','Bié','912334433',921234433),(205,'TESTE23','TESTE23','TESTE23',NULL,'Bié','990234422',NULL),(206,'TESTE23','TESTE23',NULL,'TESTE23','Bié','912334433',921234433),(207,'TESTE23','TESTE23','TESTE23',NULL,'Bié','990234422',NULL),(208,'TESTE23','TESTE23',NULL,'TESTE23','Bié','912334433',921234433),(209,'TESTE23','TESTE23','TESTE23',NULL,'Bié','990234422',NULL),(210,'novo_teste','novo_teste',NULL,'novo_teste','Bié','998776666',990345566),(211,'novo_teste','novo_teste','novo_teste',NULL,'Bengo','900000000',NULL),(212,'novo_teste','novo_teste',NULL,'novo_teste','Bié','998776666',990345566),(213,'novo_teste','novo_teste','novo_teste',NULL,'Bengo','900000000',NULL),(214,'TESTE24','TESTE24',NULL,'TESTE24','Lunda-Sul','912002200',934332232),(215,'TESTE24','TESTE24','TESTE24',NULL,'Bié','TESTE24',NULL),(216,'TESTE24','TESTE24',NULL,'TESTE24','Lunda-Sul','912002200',934332232),(217,'TESTE24','TESTE24','TESTE24',NULL,'Bié','TESTE24',NULL),(218,'TESTE25','TESTE25',NULL,'TESTE25','Huíla','990332233',932003344),(219,'TESTE25','TESTE25','TESTE25',NULL,'Bengo','934332233',NULL),(220,'Valodia','Combatentes','226','10','Luanda','930340539',954554433),(221,'Catumbela','Catumbela','234','12','Benguela','922330439',953534433);
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enderecos`
--

DROP TABLE IF EXISTS `enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enderecos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bairro` varchar(255) DEFAULT NULL,
  `rua` varchar(255) DEFAULT NULL,
  `numero_casa` varchar(255) DEFAULT NULL,
  `descricao_casa` varchar(255) DEFAULT NULL,
  `provincia` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES `enderecos` WRITE;
/*!40000 ALTER TABLE `enderecos` DISABLE KEYS */;
/*!40000 ALTER TABLE `enderecos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcionarioigt`
--

DROP TABLE IF EXISTS `funcionarioigt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcionarioigt` (
  `id` int NOT NULL AUTO_INCREMENT,
  `trabalhadorID` int DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionarioigt`
--

LOCK TABLES `funcionarioigt` WRITE;
/*!40000 ALTER TABLE `funcionarioigt` DISABLE KEYS */;
INSERT INTO `funcionarioigt` VALUES (1,55,'Recepcionista');
/*!40000 ALTER TABLE `funcionarioigt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inspector`
--

DROP TABLE IF EXISTS `inspector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inspector` (
  `id` int NOT NULL AUTO_INCREMENT,
  `trabalhadorID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `trabalhadorID` (`trabalhadorID`),
  CONSTRAINT `inspector_ibfk_1` FOREIGN KEY (`trabalhadorID`) REFERENCES `trabalhador` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inspector`
--

LOCK TABLES `inspector` WRITE;
/*!40000 ALTER TABLE `inspector` DISABLE KEYS */;
/*!40000 ALTER TABLE `inspector` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pessoa`
--

DROP TABLE IF EXISTS `pessoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pessoa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `nome_pai` varchar(255) NOT NULL,
  `nome_mae` varchar(255) NOT NULL,
  `naturalidade` varchar(255) NOT NULL,
  `sexo` varchar(255) DEFAULT NULL,
  `altura` varchar(255) DEFAULT NULL,
  `biID` int DEFAULT NULL,
  `enderecoID` int DEFAULT NULL,
  `estado_civil` varchar(255) NOT NULL,
  `data_nascimento` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
INSERT INTO `pessoa` VALUES (1,'edu','dato','aa','aa','Angola','Masculino','1.21',NULL,NULL,'',''),(2,'edu','dato','aa','aa','Angola','Masculino','1.21',NULL,NULL,'',''),(3,'edu','dato','aa','aa','Angola','Masculino','1.21',NULL,NULL,'',''),(4,'edu','dato','aa','aa','Angola','Masculino','1.21',NULL,NULL,'',''),(5,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(6,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(7,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(8,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(9,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(10,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(11,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(12,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(13,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(14,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(15,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(16,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(17,'teste','teste','teste','teste','teste','Masculino','1.22',59,NULL,'',''),(18,'teste','teste','teste','teste','teste','Masculino','1.22',60,NULL,'',''),(19,'teste','teste','teste','teste','teste','Masculino','1.22',61,96,'',''),(20,'teste','teste','teste','teste','teste','Masculino','1.22',62,98,'',''),(21,'teste','teste','teste','teste','teste','Masculino','1.22',63,100,'',''),(22,'teste','teste','teste','teste','teste','Masculino','1.22',64,102,'',''),(23,'teste','teste','teste','teste','teste','Masculino','1.22',65,104,'',''),(24,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',67,107,'',''),(25,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',68,109,'',''),(26,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',69,111,'',''),(27,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',70,113,'',''),(28,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',71,115,'',''),(29,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',72,117,'',''),(30,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',73,119,'',''),(31,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',74,121,'',''),(32,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',75,123,'',''),(33,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',76,125,'',''),(34,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',77,127,'',''),(35,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',78,129,'',''),(36,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',79,131,'',''),(37,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',80,133,'',''),(38,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',81,135,'',''),(39,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',82,137,'',''),(40,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',83,139,'',''),(41,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',84,141,'',''),(42,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',85,143,'',''),(43,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',86,145,'',''),(44,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',87,147,'',''),(45,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',88,149,'',''),(46,'Teste5','Teste5','Teste5','Teste5','Teste5',NULL,'Teste5',93,153,'Solteiro','2003-10-17 00:00:00'),(47,'Teste5','Teste5','Teste5','Teste5','Teste5',NULL,'Teste5',94,154,'Solteiro','2003-10-17 00:00:00'),(48,'teste6','teste6','teste6','teste6','v',NULL,'teste6',95,155,'Solteiro','2012-04-18 00:00:00'),(49,'teste6','teste6','teste6','teste6','v',NULL,'teste6',96,156,'Solteiro','2012-04-18 00:00:00'),(50,'teste6','teste6','teste6','teste6','v',NULL,'teste6',97,157,'Solteiro','2012-04-18 00:00:00'),(51,'teste6','teste6','teste6','teste6','v',NULL,'teste6',98,158,'Solteiro','2012-04-18 00:00:00'),(52,'teste6','teste6','teste6','teste6','v',NULL,'teste6',99,159,'Solteiro','2012-04-18 00:00:00'),(53,'teste6','teste6','teste6','teste6','v',NULL,'teste6',100,160,'Solteiro','2012-04-18 00:00:00'),(54,'teste6','teste6','teste6','teste6','v',NULL,'teste6',101,161,'Solteiro','2012-04-18 00:00:00'),(55,'teste6','teste6','teste6','teste6','v',NULL,'teste6',102,164,'Solteiro','2012-04-18 00:00:00'),(56,'teste6','teste6','teste6','teste6','v',NULL,'teste6',103,166,'Solteiro','2012-04-18 00:00:00'),(57,'teste6','teste6','teste6','teste6','v',NULL,'teste6',104,168,'Solteiro','2012-04-18 00:00:00'),(58,'teste6','teste6','teste6','teste6','v',NULL,'teste6',105,170,'Solteiro','2012-04-18 00:00:00'),(59,'TESTE20','TESTE20','TESTE20','TESTE20','TESTE20',NULL,'1.80',106,172,'undefined','Invalid date'),(60,'TESTE21','TESTE21','TESTE21','TESTE21','TESTE20',NULL,'1.90',107,174,'Viuvo','1999-03-01 00:00:00'),(61,'TESTE21','TESTE21','TESTE21','TESTE21','TESTE20',NULL,'1.90',108,176,'Viuvo','1999-03-01 00:00:00'),(62,'TESTE21','TESTE21','TESTE21','TESTE21','TESTE20',NULL,'1.90',109,178,'Viuvo','1999-03-01 00:00:00'),(63,'TESTE21','TESTE21','TESTE21','TESTE21','TESTE20',NULL,'1.90',110,180,'Viuvo','1999-03-01 00:00:00'),(64,'TESTE21','TESTE21','TESTE21','TESTE21','TESTE20','Feminino','1.90',111,182,'Viuvo','1999-03-01 00:00:00'),(65,'TESTE22','TESTE22','TESTE22','TESTE22','TESTE22','Masculino','TESTE22',112,184,'Casado','2011-05-11 00:00:00'),(66,'TESTE22','TESTE22','TESTE22','TESTE22','TESTE22','Masculino','TESTE22',113,186,'Casado','2011-05-11 00:00:00'),(67,'TESTE22','TESTE22','TESTE22','TESTE22','TESTE22','Masculino','TESTE22',114,188,'Casado','2011-05-11 00:00:00'),(68,'TESTE22','TESTE22','TESTE22','TESTE22','TESTE22','Masculino','TESTE22',115,190,'Casado','2011-05-11 00:00:00'),(69,'TESTE22','TESTE22','TESTE22','TESTE22','TESTE22','Masculino','TESTE22',116,192,'Casado','2011-05-11 00:00:00'),(70,'TESTE22','TESTE22','TESTE22','TESTE22','TESTE22','Masculino','TESTE22',117,194,'Casado','2011-05-11 00:00:00'),(71,'TESTE22','TESTE22','TESTE22','TESTE22','TESTE22','Masculino','TESTE22',118,196,'Casado','2011-05-11 00:00:00'),(72,'TESTE22','TESTE22','TESTE22','TESTE22','TESTE22','Masculino','TESTE22',119,198,'Casado','2011-05-11 00:00:00'),(73,'TESTE22','TESTE22','TESTE22','TESTE22','TESTE22','Masculino','TESTE22',120,200,'Casado','2011-05-11 00:00:00'),(74,'TESTE22','TESTE22','TESTE22','TESTE22','TESTE22','Masculino','TESTE22',121,202,'Casado','2011-05-11 00:00:00'),(75,'TESTE23','TESTE23','TESTE23','TESTE23','TESTE23','Masculino','TESTE23',122,204,'Solteiro','2022-05-13 00:00:00'),(76,'TESTE23','TESTE23','TESTE23','TESTE23','TESTE23','Masculino','TESTE23',123,206,'Solteiro','2022-05-13 00:00:00'),(77,'TESTE23','TESTE23','TESTE23','TESTE23','TESTE23','Masculino','TESTE23',124,208,'Solteiro','2022-05-13 00:00:00'),(78,'novo_teste','novo_teste','novo_teste','novo_teste','novo_teste','Masculino','novo_teste',125,210,'Viuvo','2008-02-16 00:00:00'),(79,'novo_teste','novo_teste','novo_teste','novo_teste','novo_teste','Masculino','novo_teste',126,212,'Viuvo','2008-02-16 00:00:00'),(80,'TESTE24','TESTE24','TESTE24','TESTE24','TESTE24','Feminino','TESTE24',127,214,'Solteiro','2018-05-21 00:00:00'),(81,'TESTE24','TESTE24','TESTE24','TESTE24','TESTE24','Feminino','TESTE24',128,216,'Solteiro','2018-05-21 00:00:00'),(82,'TESTE25','TESTE25','TESTE25','TESTE25','TESTE25','Masculino','TESTE25',129,218,'Solteiro','2012-05-21 00:00:00'),(83,'Eduardo','Kiassucumuca','Eduardo','Da Silva','Sambizanga','Masculino','1.70',130,220,'solteiro','1999-03-06'),(84,'Marcio','Cristiano','Eduardo','Da Silva','Sambizanga','Masculino','1.80',131,221,'solteiro','2001-06-06');
/*!40000 ALTER TABLE `pessoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pessoas`
--

DROP TABLE IF EXISTS `pessoas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pessoas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `sobrenome` varchar(255) DEFAULT NULL,
  `bairro` varchar(255) DEFAULT NULL,
  `descricao_casa` varchar(255) DEFAULT NULL,
  `rua` varchar(255) DEFAULT NULL,
  `provincia` varchar(255) DEFAULT NULL,
  `nBI` varchar(255) DEFAULT NULL,
  `data_nascimento` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoas`
--

LOCK TABLES `pessoas` WRITE;
/*!40000 ALTER TABLE `pessoas` DISABLE KEYS */;
INSERT INTO `pessoas` VALUES (1,'Eduardo','Kiassucumuca','Valódia','prédio 226 casa numero 10','Combatentes','Luanda','1234567LA897','1999-03-06 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `pessoas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `queixa`
--

DROP TABLE IF EXISTS `queixa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `queixa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `facto` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `queixosoID` int NOT NULL,
  `queixanteID` int NOT NULL,
  `empresaID` int NOT NULL,
  `trabalhadorID` int NOT NULL,
  `recepcionistaID` int DEFAULT NULL,
  `inspectorID` int DEFAULT NULL,
  `chefeServicosID` int DEFAULT NULL,
  `url_file_contrato` varchar(255) DEFAULT NULL,
  `provincia` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT 'Aberto',
  PRIMARY KEY (`id`),
  KEY `empresaID` (`empresaID`),
  KEY `trabalhadorID` (`trabalhadorID`),
  KEY `recepcionistaID` (`recepcionistaID`),
  KEY `inspectorID` (`inspectorID`),
  KEY `chefeServicosID` (`chefeServicosID`),
  CONSTRAINT `queixa_ibfk_1` FOREIGN KEY (`empresaID`) REFERENCES `empresa` (`id`),
  CONSTRAINT `queixa_ibfk_2` FOREIGN KEY (`trabalhadorID`) REFERENCES `trabalhador` (`id`),
  CONSTRAINT `queixa_ibfk_3` FOREIGN KEY (`recepcionistaID`) REFERENCES `recepcionista` (`id`),
  CONSTRAINT `queixa_ibfk_4` FOREIGN KEY (`inspectorID`) REFERENCES `inspector` (`id`),
  CONSTRAINT `queixa_ibfk_5` FOREIGN KEY (`chefeServicosID`) REFERENCES `chefeservicos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `queixa`
--

LOCK TABLES `queixa` WRITE;
/*!40000 ALTER TABLE `queixa` DISABLE KEYS */;
INSERT INTO `queixa` VALUES (10,'teste2','2023-05-22 22:57:20','2023-05-22 22:57:20',18,14,14,18,NULL,NULL,NULL,NULL,'Benguela','aberto'),(11,'teste2','2023-05-22 22:59:22','2023-05-22 22:59:22',19,15,15,19,NULL,NULL,NULL,NULL,'Benguela','aberto'),(12,'teste2','2023-05-22 23:00:30','2023-05-22 23:00:30',20,16,16,20,NULL,NULL,NULL,NULL,'Benguela','aberto'),(13,'teste2','2023-05-22 23:00:49','2023-05-22 23:00:49',21,17,17,21,NULL,NULL,NULL,NULL,'Benguela','aberto'),(14,'teste2','2023-05-22 23:01:06','2023-05-22 23:01:06',22,18,18,22,NULL,NULL,NULL,NULL,NULL,'aberto'),(15,'facto1','2023-05-25 22:44:10','2023-05-25 22:44:10',28,21,21,28,NULL,NULL,NULL,NULL,NULL,'aberto'),(16,'facto1','2023-05-25 22:44:53','2023-05-25 22:44:53',29,22,22,29,NULL,NULL,NULL,NULL,NULL,'aberto'),(17,'TESTE20','2023-06-12 00:45:52','2023-06-12 00:45:52',30,23,23,30,NULL,NULL,NULL,'undefined',NULL,'aberto'),(18,'TESTE21','2023-06-12 01:00:45','2023-06-12 01:00:45',31,24,24,31,NULL,NULL,NULL,'undefined',NULL,'aberto'),(19,'TESTE21','2023-06-12 01:03:32','2023-06-12 01:03:32',32,25,25,32,NULL,NULL,NULL,'uploads\\1686531812342-programa-de-jejum-2021.pdf',NULL,'aberto'),(20,'TESTE21','2023-06-12 01:04:42','2023-06-12 01:04:42',33,26,26,33,NULL,NULL,NULL,'uploads\\programa-de-jejum-2021.pdf-1686531882027',NULL,'aberto'),(21,'TESTE21','2023-06-12 01:05:17','2023-06-12 01:05:17',34,27,27,34,NULL,NULL,NULL,'uploads\\1686531916275-programa-de-jejum-2021.pdf',NULL,'aberto'),(22,'TESTE21','2023-06-12 01:07:42','2023-06-12 01:07:42',35,28,28,35,NULL,NULL,NULL,'uploads\\1686532062080-programa-de-jejum-2021.pdf',NULL,'aberto'),(23,'TESTE22','2023-06-12 21:54:34','2023-06-12 21:54:34',36,29,29,36,NULL,NULL,NULL,'uploads\\1686606873226-CAPA APROVAÃÃO DE TEMA 2023 PGCCBC.docx NELSON.docx',NULL,'aberto'),(24,'TESTE22','2023-06-12 21:55:13','2023-06-12 21:55:13',37,30,30,37,NULL,NULL,NULL,'uploads\\1686606911159-CAPA APROVAÃÃO DE TEMA 2023 PGCCBC.docx NELSON.docx',NULL,'aberto'),(25,'TESTE22','2023-06-12 21:55:29','2023-06-12 21:55:29',38,31,31,38,NULL,NULL,NULL,'uploads\\1686606929165-CAPA APROVAÃÃO DE TEMA 2023 PGCCBC.docx NELSON.docx',NULL,'aberto'),(26,'TESTE22','2023-06-12 21:57:53','2023-06-12 21:57:53',39,32,32,39,NULL,NULL,NULL,'uploads\\1686607072812-CAPA APROVAÃÃO DE TEMA 2023 PGCCBC.docx NELSON.docx',NULL,'aberto'),(27,'TESTE22','2023-06-12 21:59:56','2023-06-12 21:59:56',40,33,33,40,NULL,NULL,NULL,'uploads\\1686607184963-CAPA APROVAÃÃO DE TEMA 2023 PGCCBC.docx NELSON.docx',NULL,'aberto'),(28,'TESTE22','2023-06-12 22:12:34','2023-06-12 22:12:34',41,34,34,41,NULL,NULL,NULL,'uploads\\1686607953677-CAPA APROVAÃÃO DE TEMA 2023 PGCCBC.docx NELSON.docx',NULL,'aberto'),(29,'TESTE22','2023-06-12 22:42:54','2023-06-12 22:42:54',43,36,36,43,NULL,NULL,NULL,'uploads\\1686609772610-scan_2020-01-23_19h05.pdf',NULL,'aberto'),(30,'TESTE22','2023-06-12 22:43:10','2023-06-12 22:43:10',44,37,37,44,NULL,NULL,NULL,'uploads\\1686609789053-scan_2020-01-23_19h05.pdf',NULL,'aberto'),(31,'TESTE22','2023-06-12 22:46:32','2023-06-12 22:46:32',45,38,38,45,NULL,NULL,NULL,'uploads\\1686609990777-scan_2020-01-23_19h05.pdf',NULL,'aberto'),(32,'TESTE23','2023-06-14 22:27:09','2023-06-14 22:27:09',46,39,39,46,NULL,NULL,NULL,'uploads\\1686781626130-l1.pdf',NULL,'aberto'),(33,'TESTE23','2023-06-14 22:28:06','2023-06-14 22:28:06',47,40,40,47,NULL,NULL,NULL,'uploads\\1686781685088-l1.pdf',NULL,'aberto'),(34,'TESTE23','2023-06-14 22:28:39','2023-06-14 22:28:39',48,41,41,48,NULL,NULL,NULL,'uploads\\1686781718186-l1.pdf',NULL,'aberto'),(35,'novo_teste','2023-06-19 22:39:48','2023-06-19 22:39:48',42,49,42,49,NULL,NULL,NULL,'uploads\\1687214384676-l4pt.pdf',NULL,'aberto'),(36,'novo_teste','2023-06-19 22:40:47','2023-06-19 22:40:47',43,50,43,50,NULL,NULL,NULL,'uploads\\1687214445270-l4pt.pdf',NULL,'aberto'),(37,'TESTE24','2023-06-22 21:35:20','2023-06-22 21:35:20',51,44,44,51,NULL,NULL,NULL,'uploads\\1687469719164-l9.pdf',NULL,'aberto'),(38,'TESTE24','2023-06-22 21:36:27','2023-06-22 21:36:27',52,45,45,52,NULL,NULL,NULL,'uploads\\1687469786547-l9.pdf',NULL,'aberto'),(39,'TESTE25','2023-06-22 21:38:38','2023-06-22 21:38:38',46,53,46,53,NULL,NULL,NULL,'uploads\\1687469917724-l1.pdf',NULL,'aberto');
/*!40000 ALTER TABLE `queixa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recepcionista`
--

DROP TABLE IF EXISTS `recepcionista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recepcionista` (
  `id` int NOT NULL AUTO_INCREMENT,
  `trabalhadorID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `trabalhadorID` (`trabalhadorID`),
  CONSTRAINT `recepcionista_ibfk_1` FOREIGN KEY (`trabalhadorID`) REFERENCES `trabalhador` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recepcionista`
--

LOCK TABLES `recepcionista` WRITE;
/*!40000 ALTER TABLE `recepcionista` DISABLE KEYS */;
INSERT INTO `recepcionista` VALUES (1,55);
/*!40000 ALTER TABLE `recepcionista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20230326013550-create-pessoa.js'),('20230408193503-create-dados-pessoais.js'),('20230418212036-create-endereco.js'),('20230418213526-create-bi.js'),('20230511061105-Create-bilhetesIdentidade.js'),('20230511214019-Create-endereco.js'),('20230511214523-Add-numeroBI.js'),('20230511220418-Create-pessoas.js'),('20230512051802-Create-trabalhadores.js'),('20230512053618-Create-Empresas.js'),('20230512055406-Create-inspectores.js'),('20230512055411-Create-recepcionista.js'),('20230512055424-Create-chefeServicos.js'),('20230512060602-Create-contactos_pessoas.js'),('20230512060608-Create-contactos_empresa.js'),('20230512060930-Create-contactos_pessoas.js'),('20230512061550-Create-contactos_pessoas.js'),('20230512061606-Create-contactos_empresas.js'),('20230513201706-Create-queixas.js'),('20230522192704-removeIDBI-e-Endereco.js'),('20230522195948-addEndereco-e-BI.js'),('20230524231606-add-estadoCivil.js'),('20230524232823-add-data_nascimento.js'),('20230611212733-add-contacto.js'),('20230611213439-add-contacto-alternativo.js'),('20230611234041-add-fileContrato.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trabalhador`
--

DROP TABLE IF EXISTS `trabalhador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trabalhador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cargo` varchar(255) NOT NULL,
  `area_departamento` varchar(255) NOT NULL,
  `localizacao_office` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `pessoaID` int NOT NULL,
  `contaID` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `pessoaID` (`pessoaID`),
  CONSTRAINT `trabalhador_ibfk_1` FOREIGN KEY (`pessoaID`) REFERENCES `pessoa` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabalhador`
--

LOCK TABLES `trabalhador` WRITE;
/*!40000 ALTER TABLE `trabalhador` DISABLE KEYS */;
INSERT INTO `trabalhador` VALUES (1,'teste2','teste2','Cabinda','Normal',24,0),(2,'teste2','teste2','Cabinda','Normal',25,0),(3,'teste2','teste2','Cabinda','Normal',26,0),(4,'teste2','teste2','Cabinda','Normal',27,0),(5,'teste2','teste2','Cabinda','Normal',28,0),(6,'teste2','teste2','Cabinda','Normal',29,0),(7,'teste2','teste2','Cabinda','Normal',30,0),(8,'teste2','teste2','Cabinda','Normal',31,0),(9,'teste2','teste2','Cabinda','Normal',32,0),(10,'teste2','teste2','Cabinda','Normal',33,0),(11,'teste2','teste2','Cabinda','Normal',34,0),(12,'teste2','teste2','Cabinda','Normal',35,0),(13,'teste2','teste2','Cabinda','Normal',36,0),(14,'teste2','teste2','Cabinda','Normal',37,0),(15,'teste2','teste2','Cabinda','Normal',38,0),(16,'teste2','teste2','Cabinda','Normal',39,0),(17,'teste2','teste2','Cabinda','Normal',40,0),(18,'teste2','teste2','Cabinda','Normal',41,0),(19,'teste2','teste2','Cabinda','Normal',42,0),(20,'teste2','teste2','Cabinda','Normal',43,0),(21,'teste2','teste2','Cabinda','Normal',44,0),(22,'teste2','teste2','Cabinda','Normal',45,0),(23,'teste6','teste6','Benguela','Normal',52,0),(24,'teste6','teste6','Benguela','Normal',54,0),(25,'teste6','teste6','Benguela','Normal',53,0),(26,'teste6','teste6','Benguela','Normal',55,0),(27,'teste6','teste6','Benguela','Normal',56,0),(28,'teste6','teste6','Benguela','Normal',57,0),(29,'teste6','teste6','Benguela','Normal',58,0),(30,'TESTE20','TESTE20','undefined','Normal',59,0),(31,'TESTE21','TESTE21','Benguela','Normal',60,0),(32,'TESTE21','TESTE21','Benguela','Normal',61,0),(33,'TESTE21','TESTE21','Benguela','Normal',62,0),(34,'TESTE21','TESTE21','Benguela','Normal',63,0),(35,'TESTE21','TESTE21','Benguela','Normal',64,0),(36,'TESTE22','TESTE22','Cabinda','Normal',65,0),(37,'TESTE22','TESTE22','Cabinda','Normal',66,0),(38,'TESTE22','TESTE22','Cabinda','Normal',67,0),(39,'TESTE22','TESTE22','Cabinda','Normal',68,0),(40,'TESTE22','TESTE22','Cabinda','Normal',69,0),(41,'TESTE22','TESTE22','Cabinda','Normal',70,0),(42,'TESTE22','TESTE22','Cabinda','Normal',71,0),(43,'TESTE22','TESTE22','Cabinda','Normal',72,0),(44,'TESTE22','TESTE22','Cabinda','Normal',73,0),(45,'TESTE22','TESTE22','Cabinda','Normal',74,0),(46,'TESTE23','TESTE23','Bié','Normal',75,0),(47,'TESTE23','TESTE23','Bié','Normal',76,0),(48,'TESTE23','TESTE23','Bié','Normal',77,0),(49,'undefined','undefined','Bengo','Normal',78,0),(50,'undefined','undefined','Bengo','Normal',79,0),(51,'TESTE24','TESTE24','Bié','Normal',80,0),(52,'TESTE24','TESTE24','Bié','Normal',81,0),(53,'undefined','undefined','Bengo','Normal',82,0),(54,'ServiceDesk','Technical','Luanda','IGT',83,1),(55,'BSS','business','Benguela','IGT',84,4);
/*!40000 ALTER TABLE `trabalhador` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-05  8:46:45
