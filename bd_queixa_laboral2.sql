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
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bi`
--

LOCK TABLES `bi` WRITE;
/*!40000 ALTER TABLE `bi` DISABLE KEYS */;
INSERT INTO `bi` VALUES (1,'2022-04-19 00:00:00','2022-04-19 00:00:00','/BI.pdf','123456LA092'),(2,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(3,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(4,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(5,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(6,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(7,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(8,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(9,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(10,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(11,'2020-03-19 00:00:00','2023-03-19 00:00:00','/BI2.pdf','345566BG7128'),(12,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(13,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(14,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(15,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(16,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(17,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(18,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(19,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(20,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(21,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(22,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(23,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(24,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(25,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(26,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(27,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(28,'2018-02-20 00:00:00','2023-02-20 00:00:00','/BI2.pdf','345566BG7129'),(29,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(30,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(31,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(32,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(33,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(34,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(35,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(36,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(37,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(38,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(39,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(40,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(41,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(42,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(43,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(44,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(45,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(46,'2018-12-11 00:00:00','2023-12-11 00:00:00','/BI2.pdf','345566KZ7128'),(47,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(48,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(49,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(50,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(51,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(52,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(53,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(54,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(55,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(56,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(57,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(58,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(59,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(60,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(61,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(62,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(63,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(64,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(65,'2017-03-20 00:00:00','2023-03-20 00:00:00','/BI2.pdf','teste'),(66,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(67,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(68,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(69,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(70,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(71,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(72,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(73,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(74,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(75,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(76,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(77,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(78,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(79,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(80,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(81,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(82,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(83,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(84,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(85,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(86,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(87,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(88,'2019-04-21 00:00:00','2023-04-21 00:00:00','/BI2.pdf','teste2'),(89,'2022-04-24 00:00:00','2022-04-24 00:00:00','/BI.pdf','teste3');
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'teste2','teste2','teste2','teste2',NULL,116),(2,'teste2','teste2','teste2','teste2','teste2',118),(3,'teste2','teste2','teste2','teste2','teste2',120),(4,'teste2','teste2','teste2','teste2','teste2',122),(5,'teste2','teste2','teste2','teste2','teste2',124),(6,'teste2','teste2','teste2','teste2','teste2',126),(7,'teste2','teste2','teste2','teste2','teste2',128),(8,'teste2','teste2','teste2','teste2','teste2',130),(9,'teste2','teste2','teste2','teste2','teste2',132),(10,'teste2','teste2','teste2','teste2','teste2',134),(11,'teste2','teste2','teste2','teste2','teste2',136),(12,'teste2','teste2','teste2','teste2','teste2',138),(13,'teste2','teste2','teste2','teste2','teste2',140),(14,'teste2','teste2','teste2','teste2','teste2',142),(15,'teste2','teste2','teste2','teste2','teste2',144),(16,'teste2','teste2','teste2','teste2','teste2',146),(17,'teste2','teste2','teste2','teste2','teste2',148),(18,'teste2','teste2','teste2','teste2','teste2',150);
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (1,'ll','ll','edificio',NULL,'Cabinda'),(2,'ll','ll','edificio',NULL,'Cabinda'),(3,'ll','ll','edificio',NULL,'Bengo'),(4,'ll','ll','edificio',NULL,'Bengo'),(5,'çç','çç','edificio','casa_edificioEmp','Bié'),(6,'ll','ll','edificio',NULL,'Bengo'),(7,'ll','ll','edificio',NULL,'Bengo'),(8,'ll','ll','edificio',NULL,'Bengo'),(9,'çç','çç','edificio','casa_edificioEmp','Bié'),(10,'ll','ll','edificio',NULL,'Bengo'),(11,'çç','çç','edificio','casa_edificioEmp','Bié'),(12,'ll','ll','edificio',NULL,'Bengo'),(13,'çç','çç','edificio','casa_edificioEmp','Bié'),(14,'ll','ll','edificio',NULL,'Bengo'),(15,'çç','çç','edificio','casa_edificioEmp','Bié'),(16,'ll','ll','edificio',NULL,'Bengo'),(17,'çç','çç','edificio','casa_edificioEmp','Bié'),(18,'ll','ll','edificio',NULL,'Bengo'),(19,'çç','çç','edificio','casa_edificioEmp','Bié'),(20,'ll','ll','edificio',NULL,'Bengo'),(21,'çç','çç','edificio','casa_edificioEmp','Bié'),(22,'ll','ll','edificio',NULL,'Bengo'),(23,'çç','çç','edificio','casa_edificioEmp','Bié'),(24,'ll','ll','edificio',NULL,'Bengo'),(25,'çç','çç','edificio','casa_edificioEmp','Bié'),(26,'ll','ll','edificio',NULL,'Bengo'),(27,'çç','çç','edificio','casa_edificioEmp','Bié'),(28,'ll','ll','edificio',NULL,'Bengo'),(29,'çç','çç','edificio','casa_edificioEmp','Bié'),(30,'ll','ll','edificio',NULL,'Bengo'),(31,'çç','çç','edificio','casa_edificioEmp','Bié'),(32,'aa','aa','edificio',NULL,'Huambo'),(33,'bb','bb','edificio','casa_edificioEmp','Benguela'),(34,'aa','aa','edificio',NULL,'Huambo'),(35,'bb','bb','edificio','casa_edificioEmp','Benguela'),(36,'aa','aa','edificio',NULL,'Huambo'),(37,'bb','bb','edificio','casa_edificioEmp','Benguela'),(38,'aa','aa','edificio',NULL,'Huambo'),(39,'bb','bb','edificio','casa_edificioEmp','Benguela'),(40,'aa','aa','edificio',NULL,'Huambo'),(41,'bb','bb','edificio','casa_edificioEmp','Benguela'),(42,'aa','aa','edificio',NULL,'Huambo'),(43,'bb','bb','edificio','casa_edificioEmp','Benguela'),(44,'aa','aa','edificio',NULL,'Huambo'),(45,'bb','bb','edificio','casa_edificioEmp','Benguela'),(46,'aa','aa','edificio',NULL,'Huambo'),(47,'bb','bb','edificio','casa_edificioEmp','Benguela'),(48,'aa','aa','edificio',NULL,'Huambo'),(49,'bb','bb','edificio','casa_edificioEmp','Benguela'),(50,'aa','aa','edificio',NULL,'Huambo'),(51,'bb','bb','edificio','casa_edificioEmp','Benguela'),(52,'aa','aa','edificio',NULL,'Huambo'),(53,'bb','bb','edificio','casa_edificioEmp','Benguela'),(54,'aa','aa','edificio',NULL,'Huambo'),(55,'bb','bb','edificio','casa_edificioEmp','Benguela'),(56,'aa','aa','edificio',NULL,'Huambo'),(57,'bb','bb','edificio','casa_edificioEmp','Benguela'),(58,'aa','aa','edificio',NULL,'Huambo'),(59,'bb','bb','edificio','casa_edificioEmp','Benguela'),(60,'aa','aa','edificio',NULL,'Huambo'),(61,'bb','bb','edificio','casa_edificioEmp','Benguela'),(62,'aa','aa','edificio',NULL,'Huambo'),(63,'bb','bb','edificio','casa_edificioEmp','Benguela'),(64,'aa','aa','edificio',NULL,'Huambo'),(65,'bb','bb','edificio','casa_edificioEmp','Benguela'),(66,'aa','aa','edificio',NULL,'Huambo'),(67,'bb','bb','edificio','casa_edificioEmp','Benguela'),(68,'teste','teste','edificio',NULL,'Cuando-Cubango'),(69,'teste','teste','edificio','casa_edificioEmp','Benguela'),(70,'teste','teste','edificio',NULL,'Cuando-Cubango'),(71,'teste','teste','edificio','casa_edificioEmp','Benguela'),(72,'teste','teste','edificio',NULL,'Cuando-Cubango'),(73,'teste','teste','edificio','casa_edificioEmp','Benguela'),(74,'teste','teste','edificio',NULL,'Cuando-Cubango'),(75,'teste','teste','edificio','casa_edificioEmp','Benguela'),(76,'teste','teste','edificio',NULL,'Cuando-Cubango'),(77,'teste','teste','edificio','casa_edificioEmp','Benguela'),(78,'teste','teste','edificio',NULL,'Cuando-Cubango'),(79,'teste','teste','edificio','casa_edificioEmp','Benguela'),(80,'teste','teste','edificio',NULL,'Cuando-Cubango'),(81,'teste','teste','edificio','casa_edificioEmp','Benguela'),(82,'teste','teste','edificio',NULL,'Cuando-Cubango'),(83,'teste','teste','edificio','casa_edificioEmp','Benguela'),(84,'teste','teste','edificio',NULL,'Cuando-Cubango'),(85,'teste','teste','edificio','casa_edificioEmp','Benguela'),(86,'teste','teste','edificio',NULL,'Cuando-Cubango'),(87,'teste','teste','edificio','casa_edificioEmp','Benguela'),(88,'teste','teste','edificio',NULL,'Cuando-Cubango'),(89,'teste','teste','edificio','casa_edificioEmp','Benguela'),(90,'teste','teste','edificio',NULL,'Cuando-Cubango'),(91,'teste','teste','edificio','casa_edificioEmp','Benguela'),(92,'teste','teste','edificio',NULL,'Cuando-Cubango'),(93,'teste','teste','edificio','casa_edificioEmp','Benguela'),(94,'teste','teste','edificio',NULL,'Cuando-Cubango'),(95,'teste','teste','edificio','casa_edificioEmp','Benguela'),(96,'teste','teste','edificio',NULL,'Cuando-Cubango'),(97,'teste','teste','edificio','casa_edificioEmp','Benguela'),(98,'teste','teste','edificio',NULL,'Cuando-Cubango'),(99,'teste','teste','edificio','casa_edificioEmp','Benguela'),(100,'teste','teste','edificio',NULL,'Cuando-Cubango'),(101,'teste','teste','edificio','casa_edificioEmp','Benguela'),(102,'teste','teste','edificio',NULL,'Cuando-Cubango'),(103,'teste','teste','edificio','casa_edificioEmp','Benguela'),(104,'teste','teste','edificio',NULL,'Cuando-Cubango'),(105,'teste','teste','edificio','casa_edificioEmp','Benguela'),(106,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(107,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(108,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(109,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(110,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(111,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(112,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(113,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(114,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(115,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(116,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(117,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(118,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(119,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(120,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(121,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(122,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(123,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(124,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(125,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(126,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(127,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(128,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(129,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(130,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(131,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(132,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(133,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(134,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(135,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(136,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(137,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(138,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(139,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(140,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(141,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(142,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(143,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(144,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(145,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(146,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(147,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(148,'teste2','teste2','edificio','casa_edificioEmp','Cabinda'),(149,'teste2','teste2','edificio',NULL,'Cuanza-Norte'),(150,'teste2','teste2','edificio','casa_edificioEmp','Cabinda');
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
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
INSERT INTO `pessoa` VALUES (1,'edu','dato','aa','aa','Angola','Masculino','1.21',NULL,NULL,'',''),(2,'edu','dato','aa','aa','Angola','Masculino','1.21',NULL,NULL,'',''),(3,'edu','dato','aa','aa','Angola','Masculino','1.21',NULL,NULL,'',''),(4,'edu','dato','aa','aa','Angola','Masculino','1.21',NULL,NULL,'',''),(5,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(6,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(7,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(8,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(9,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(10,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(11,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(12,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(13,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(14,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(15,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(16,'teste','teste','teste','teste','teste','Masculino','1.22',NULL,NULL,'',''),(17,'teste','teste','teste','teste','teste','Masculino','1.22',59,NULL,'',''),(18,'teste','teste','teste','teste','teste','Masculino','1.22',60,NULL,'',''),(19,'teste','teste','teste','teste','teste','Masculino','1.22',61,96,'',''),(20,'teste','teste','teste','teste','teste','Masculino','1.22',62,98,'',''),(21,'teste','teste','teste','teste','teste','Masculino','1.22',63,100,'',''),(22,'teste','teste','teste','teste','teste','Masculino','1.22',64,102,'',''),(23,'teste','teste','teste','teste','teste','Masculino','1.22',65,104,'',''),(24,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',67,107,'',''),(25,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',68,109,'',''),(26,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',69,111,'',''),(27,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',70,113,'',''),(28,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',71,115,'',''),(29,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',72,117,'',''),(30,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',73,119,'',''),(31,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',74,121,'',''),(32,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',75,123,'',''),(33,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',76,125,'',''),(34,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',77,127,'',''),(35,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',78,129,'',''),(36,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',79,131,'',''),(37,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',80,133,'',''),(38,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',81,135,'',''),(39,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',82,137,'',''),(40,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',83,139,'',''),(41,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',84,141,'',''),(42,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',85,143,'',''),(43,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',86,145,'',''),(44,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',87,147,'',''),(45,'teste2','teste2','teste2','teste2','teste2','Masculino','1.11',88,149,'','');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoas`
--

LOCK TABLES `pessoas` WRITE;
/*!40000 ALTER TABLE `pessoas` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `queixa`
--

LOCK TABLES `queixa` WRITE;
/*!40000 ALTER TABLE `queixa` DISABLE KEYS */;
INSERT INTO `queixa` VALUES (10,'teste2','2023-05-22 22:57:20','2023-05-22 22:57:20',18,14,14,18,NULL,NULL,NULL),(11,'teste2','2023-05-22 22:59:22','2023-05-22 22:59:22',19,15,15,19,NULL,NULL,NULL),(12,'teste2','2023-05-22 23:00:30','2023-05-22 23:00:30',20,16,16,20,NULL,NULL,NULL),(13,'teste2','2023-05-22 23:00:49','2023-05-22 23:00:49',21,17,17,21,NULL,NULL,NULL),(14,'teste2','2023-05-22 23:01:06','2023-05-22 23:01:06',22,18,18,22,NULL,NULL,NULL);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recepcionista`
--

LOCK TABLES `recepcionista` WRITE;
/*!40000 ALTER TABLE `recepcionista` DISABLE KEYS */;
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
INSERT INTO `sequelizemeta` VALUES ('20230326013550-create-pessoa.js'),('20230408193503-create-dados-pessoais.js'),('20230418212036-create-endereco.js'),('20230418213526-create-bi.js'),('20230511061105-Create-bilhetesIdentidade.js'),('20230511214019-Create-endereco.js'),('20230511214523-Add-numeroBI.js'),('20230511220418-Create-pessoas.js'),('20230512051802-Create-trabalhadores.js'),('20230512053618-Create-Empresas.js'),('20230512055406-Create-inspectores.js'),('20230512055411-Create-recepcionista.js'),('20230512055424-Create-chefeServicos.js'),('20230512060602-Create-contactos_pessoas.js'),('20230512060608-Create-contactos_empresa.js'),('20230512060930-Create-contactos_pessoas.js'),('20230512061550-Create-contactos_pessoas.js'),('20230512061606-Create-contactos_empresas.js'),('20230513201706-Create-queixas.js'),('20230522192704-removeIDBI-e-Endereco.js'),('20230522195948-addEndereco-e-BI.js'),('20230524231606-add-estadoCivil.js'),('20230524232823-add-data_nascimento.js');
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
  PRIMARY KEY (`id`),
  KEY `pessoaID` (`pessoaID`),
  CONSTRAINT `trabalhador_ibfk_1` FOREIGN KEY (`pessoaID`) REFERENCES `pessoa` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabalhador`
--

LOCK TABLES `trabalhador` WRITE;
/*!40000 ALTER TABLE `trabalhador` DISABLE KEYS */;
INSERT INTO `trabalhador` VALUES (1,'teste2','teste2','Cabinda','Normal',24),(2,'teste2','teste2','Cabinda','Normal',25),(3,'teste2','teste2','Cabinda','Normal',26),(4,'teste2','teste2','Cabinda','Normal',27),(5,'teste2','teste2','Cabinda','Normal',28),(6,'teste2','teste2','Cabinda','Normal',29),(7,'teste2','teste2','Cabinda','Normal',30),(8,'teste2','teste2','Cabinda','Normal',31),(9,'teste2','teste2','Cabinda','Normal',32),(10,'teste2','teste2','Cabinda','Normal',33),(11,'teste2','teste2','Cabinda','Normal',34),(12,'teste2','teste2','Cabinda','Normal',35),(13,'teste2','teste2','Cabinda','Normal',36),(14,'teste2','teste2','Cabinda','Normal',37),(15,'teste2','teste2','Cabinda','Normal',38),(16,'teste2','teste2','Cabinda','Normal',39),(17,'teste2','teste2','Cabinda','Normal',40),(18,'teste2','teste2','Cabinda','Normal',41),(19,'teste2','teste2','Cabinda','Normal',42),(20,'teste2','teste2','Cabinda','Normal',43),(21,'teste2','teste2','Cabinda','Normal',44),(22,'teste2','teste2','Cabinda','Normal',45);
/*!40000 ALTER TABLE `trabalhador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'bd_queixa_laboral2'
--

--
-- Dumping routines for database 'bd_queixa_laboral2'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-25 20:56:33
