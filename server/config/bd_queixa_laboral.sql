-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bd_queixa_laboral
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
-- Table structure for table `empregador`
--

DROP TABLE IF EXISTS `empregador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empregador` (
  `idEmpregador` int NOT NULL AUTO_INCREMENT,
  `nome_empresa` varchar(45) NOT NULL,
  `bairro_empresa` varchar(45) DEFAULT NULL,
  `rua_empresa` varchar(45) DEFAULT NULL,
  `provincia_empresa` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `website` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idEmpregador`),
  UNIQUE KEY `idEmpregador_UNIQUE` (`idEmpregador`),
  UNIQUE KEY `nome_empresa_UNIQUE` (`nome_empresa`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empregador`
--

LOCK TABLES `empregador` WRITE;
/*!40000 ALTER TABLE `empregador` DISABLE KEYS */;
INSERT INTO `empregador` VALUES (1,'Elavoko',NULL,NULL,'Huambo','s','https://elavoko.ao'),(11,'Elavoka',NULL,'s','Huambo','ela@xpto.com','https://elavoka.ao'),(12,'Elavok',NULL,'s','Huambo','el@xpto.com','https://elavoka.ao'),(13,'Elavo',NULL,'s','Huambo','e@xpto.com','https://elavoka.ao'),(14,'Elav',NULL,'s','Huambo','eç@xpto.com','https://elavoka.ao'),(15,'emp',NULL,NULL,NULL,'a@ss.ao',NULL),(17,'emp0',NULL,'çç','Cabinda','a@ss.aop','l'),(18,'emp1',NULL,'çç1','Cabinda','a@s1s.aop','l1'),(19,'emp2',NULL,'çç2','Bengo','a@s2s.aop','l2');
/*!40000 ALTER TABLE `empregador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pessoa`
--

DROP TABLE IF EXISTS `pessoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pessoa` (
  `idPessoa` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `sobrenome` varchar(45) DEFAULT NULL,
  `bairro` varchar(45) DEFAULT NULL,
  `rua` varchar(45) DEFAULT NULL,
  `provincia` varchar(45) DEFAULT NULL,
  `BI` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPessoa`),
  UNIQUE KEY `idPessoa_UNIQUE` (`idPessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
/*!40000 ALTER TABLE `pessoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `queixa`
--

DROP TABLE IF EXISTS `queixa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `queixa` (
  `idQueixa` int NOT NULL AUTO_INCREMENT,
  `fk_trabalhador` varchar(45) NOT NULL,
  `fk_empregador` varchar(45) NOT NULL,
  `descr_queixa` varchar(45) DEFAULT NULL,
  `data_queixa` date DEFAULT NULL,
  `local_queixa` varchar(45) DEFAULT NULL,
  `link_contrato` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idQueixa`),
  UNIQUE KEY `idQueixa_UNIQUE` (`idQueixa`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `queixa`
--

LOCK TABLES `queixa` WRITE;
/*!40000 ALTER TABLE `queixa` DISABLE KEYS */;
INSERT INTO `queixa` VALUES (1,'','','Pânico',NULL,NULL,NULL),(2,'','','Pânic',NULL,NULL,NULL),(3,'','','Pâni',NULL,NULL,NULL),(4,'','','Pânil',NULL,NULL,NULL),(5,'21','18','ll01',NULL,NULL,NULL),(6,'22','19','ll02',NULL,NULL,NULL);
/*!40000 ALTER TABLE `queixa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trabalhador`
--

DROP TABLE IF EXISTS `trabalhador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trabalhador` (
  `idTrabalhador` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `sobrenome` varchar(45) NOT NULL,
  `estado_civil` varchar(45) NOT NULL,
  `nBI` varchar(45) NOT NULL,
  `bairro` varchar(50) DEFAULT NULL,
  `rua` varchar(50) DEFAULT NULL,
  `data_nascimento` date NOT NULL,
  PRIMARY KEY (`idTrabalhador`),
  UNIQUE KEY `idTrabalhador_UNIQUE` (`idTrabalhador`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabalhador`
--

LOCK TABLES `trabalhador` WRITE;
/*!40000 ALTER TABLE `trabalhador` DISABLE KEYS */;
INSERT INTO `trabalhador` VALUES (1,'Eduardo','Kiassucumuca','S','09',NULL,NULL,'2022-12-12'),(5,'Marcio','Silva','Solteiro','1234567LA123',NULL,NULL,'1999-12-31'),(8,'Estressadinha','Sorteira','Solteiro','1234567LA125',NULL,NULL,'2001-11-27'),(15,'Cristina','Antunes','Solteiro','1234563LA120',NULL,NULL,'2001-12-31'),(16,'Cristin','Antune','Solteiro','1234563LA120',NULL,NULL,'2001-12-31'),(17,'Cristi','Antune','Solteiro','1234563LA120',NULL,NULL,'2001-12-31'),(18,'Crist','Antune','Solteiro','1234563LA120',NULL,NULL,'2001-12-31'),(19,'Teste','s','Casado','a',NULL,NULL,'2023-12-31'),(20,'Teste0','s0','Casado','a',NULL,NULL,'2023-12-31'),(21,'Teste1','s1','Casado','a',NULL,NULL,'2023-12-31'),(22,'Teste2','s2','Casado','a',NULL,NULL,'2023-12-31');
/*!40000 ALTER TABLE `trabalhador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilizador`
--

DROP TABLE IF EXISTS `utilizador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilizador` (
  `idUtilizador` int NOT NULL AUTO_INCREMENT,
  `fk_pessoa` int DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUtilizador`),
  UNIQUE KEY `idUtilizador_UNIQUE` (`idUtilizador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilizador`
--

LOCK TABLES `utilizador` WRITE;
/*!40000 ALTER TABLE `utilizador` DISABLE KEYS */;
/*!40000 ALTER TABLE `utilizador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'bd_queixa_laboral'
--

--
-- Dumping routines for database 'bd_queixa_laboral'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-19  0:04:35
