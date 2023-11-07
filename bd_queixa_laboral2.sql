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
  `numeroBI` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=298 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bi`
--

LOCK TABLES `bi` WRITE;
/*!40000 ALTER TABLE `bi` DISABLE KEYS */;
INSERT INTO `bi` VALUES (277,'2022-08-27 00:00:00','2023-08-27 00:00:00','uploads\\1695941137701-CIRURG â VOL 2 Preparo PrÃ©-operatÃ³rio, ComplicaÃ§Ãµes em Cirurgia, PrincÃ­pios de Anestesia, HÃ©rnias da Parede Abdominal.pdf','123456LA092'),(285,'2019-07-26 00:00:00','2022-08-28 00:00:00','uploads\\1696018021088-CARDIO â VOL 2 InsuficiÃªncia CardÃ­aca e HipertensÃ£o Arterial.pdf','09987LA213'),(286,'2022-08-28 00:00:00','2022-07-28 00:00:00','uploads\\1696019352004-CIRURG â VOL 3 Resposta EndÃ³crina e ImunolÃ³gica ao Trauma, Queimaduras, CicatrizaÃ§Ã£o de Feridas, Choque, Suporte Nutricional, Cirurgia PlÃ¡stica.pdf','teste1'),(287,'2022-08-29 00:00:00','2022-08-29 00:00:00','uploads\\1696028743696-CIRURG â VOL 4 Cirurgia Vascular, Proctologia, Cirurgia de Obesidade, Cirurgia PediÃ¡trica, Tumores de CabeÃ§a e PescoÃ§o.pdf','tt'),(297,'2022-08-29 00:00:00','2021-08-29 00:00:00','uploads\\1696109054361-CIRURG â VOL 1 Trauma.pdf','233456LA022');
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
  `privilegio` varchar(45) DEFAULT NULL,
  `tentativa` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conta`
--

LOCK TABLES `conta` WRITE;
/*!40000 ALTER TABLE `conta` DISABLE KEYS */;
INSERT INTO `conta` VALUES (111,'kiassucristiano@hotmail.com','$2a$12$/jPOLgOz9kFZW86TNgjxMe.Vj0bafHZoXmX9qaiMbh3PZzinUCihi',NULL,NULL,1),(114,'kero@xpto.ao','$2a$12$0jhLt8rlJEyl1NFc.0Nl5eH4lCHvzHjHScu3IWApu/hYFHhmnfxxO',NULL,NULL,0),(117,'b@xpto.ao','$2a$12$ZcOxBDmPgyk6wz04HnDZr.T8Xbmr3GZKK4zcPy7FFSYFUysy0DaXi',NULL,NULL,0),(118,'d@ss.zp','$2a$12$FO8KrgMh/QZVf722PlMll.qu8LwyxuOIg2UHi3wnSw.glvzmT5BWW',NULL,NULL,0),(119,'unitel@xpto.ao','$2a$12$D6or/KYPg9ywqGqr2aAlkeigf4mxj8FHXoIrT.i9XFi9FCY.QQmve',NULL,NULL,0),(126,'a@xpto.ao','$2a$12$xmkfEEbUHpNMWnFWR4H.wOcndCcgZZFaBLf0degXzjgin.8B4r2K2',NULL,NULL,0),(133,'b@xpto.ao','$2a$12$2x/oP3kZdvkKK1/QIdeU8.AH7WYbwGyCijjvyRwlacl6csyzKhybG',NULL,'admin',0),(141,'20171226@isptec.co.ao','$2a$12$36csQBJvF0VomiSxgdLFWeONNTOPKLcHvk/EQEQ.Zhzb4lgz9TaWC',NULL,'user',0),(143,'nelo4902@gmail.com','$2a$12$YlgnaTBVGupKEnV1DuDVI.u2xKeUf6H57Uyo9D0S4cJw5YLPw7goW',NULL,'user',0);
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
  `enderecoID` int DEFAULT NULL,
  `fk_conta` int NOT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_conta_idx` (`fk_conta`),
  KEY `empresa_ibfk_1` (`enderecoID`),
  CONSTRAINT `empresa_ibfk_1` FOREIGN KEY (`enderecoID`) REFERENCES `endereco` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (124,'Africell','432LA999','Designação','kero@xpto.ao','www.kero.co.ao',429,0,'queixante'),(131,'Angomart','12390LA098','Dsigna','angomart@xpto.ao','www.angomart.ao',439,0,'queixante'),(136,'Unitel','12839LA232','Designation','unitel@xpto.ao','www.unitel.co.ao',464,120,'queixoso'),(139,'a','678LA','a','a@xpto.ao','a.co.ao',473,126,'queixoso');
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
  `bairro` varchar(255) DEFAULT NULL,
  `rua` varchar(255) DEFAULT NULL,
  `edificio` varchar(255) DEFAULT NULL,
  `casa` varchar(255) DEFAULT NULL,
  `provincia` varchar(255) DEFAULT NULL,
  `telefone_principal` varchar(255) NOT NULL,
  `telefone_alternativo` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=492 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (428,'Valodia','Combatentes',NULL,'10','Luanda','930340539',959553137),(429,'Talatona','Belas','122',NULL,'Luanda','992333444',NULL),(439,'Viana','Viana','11',NULL,'Luanda','932332233',NULL),(463,'b','b',NULL,'b','Luanda','932332211',959553137),(464,'Valódia','Zé pirão','11',NULL,'Luanda','923443322',NULL),(465,'o','o',NULL,'o','Luanda','932332211',959887777),(466,'o','o',NULL,'o','Luanda','932332211',959887777),(467,'o','o',NULL,'o','Luanda','932332211',959887777),(468,'o','o',NULL,'o','Luanda','932332211',959887777),(469,'o','o',NULL,'o','Luanda','932332211',959887777),(470,'a','a','a',NULL,'Uíge','923445566',NULL),(471,'a','a','a',NULL,'Uíge','923445566',NULL),(472,'a','a','a',NULL,'Uíge','923445566',NULL),(473,'a','a','a',NULL,'Uíge','923445566',NULL),(480,NULL,NULL,NULL,NULL,NULL,'932332211',921223445),(481,NULL,NULL,NULL,NULL,NULL,'932332211',921223445),(489,NULL,NULL,NULL,NULL,'Luanda','923334454',959553137),(491,NULL,NULL,NULL,NULL,NULL,'923334454',921223445);
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
  PRIMARY KEY (`id`),
  KEY `trabalhadorID_idx` (`trabalhadorID`),
  CONSTRAINT `trabalhadorID` FOREIGN KEY (`trabalhadorID`) REFERENCES `trabalhador` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionarioigt`
--

LOCK TABLES `funcionarioigt` WRITE;
/*!40000 ALTER TABLE `funcionarioigt` DISABLE KEYS */;
INSERT INTO `funcionarioigt` VALUES (8,146,'Inspector'),(9,147,'Inspector'),(17,155,'Recepcionista'),(19,157,'Inspector');
/*!40000 ALTER TABLE `funcionarioigt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historico_queixa`
--

DROP TABLE IF EXISTS `historico_queixa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historico_queixa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_queixa` int DEFAULT NULL,
  `facto` varchar(1500) DEFAULT NULL,
  `data` datetime DEFAULT NULL,
  `assunto` varchar(145) DEFAULT NULL,
  `modo` varchar(45) DEFAULT NULL,
  `url_file_contrato` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_queixa_idx` (`id_queixa`),
  CONSTRAINT `id_queixa` FOREIGN KEY (`id_queixa`) REFERENCES `queixa` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historico_queixa`
--

LOCK TABLES `historico_queixa` WRITE;
/*!40000 ALTER TABLE `historico_queixa` DISABLE KEYS */;
INSERT INTO `historico_queixa` VALUES (18,101,'Não sou reconpensado pelo que faço eu acho que trabalho. Faço mais tarefas daquilo que estava definido no contrato, ','2023-10-07 17:04:27','Trabalho intensivo',NULL,NULL),(19,104,'Boa tarde Prezado, gostaria de fazer a minha queixa sobre os cortes efectuados no meu salario. O valor do recibo não condiz com o valor recebido. Já informei a empresa mas não se resolve.\r\n\r\nPor favor preciso da vossa ajuda.','2023-10-16 22:36:12','Cortes no Salario','anonimo',NULL),(20,104,'Boa tarde Prezado, gostaria de fazer a minha queixa sobre os cortes efectuados no meu salario. O valor do recibo não condiz com o valor recebido. Já informei a empresa mas não se resolve.\r\n\r\nPor favor preciso da vossa ajuda.','2023-10-16 22:36:51','Cortes no Salario','anonimo',NULL),(21,104,'Boa tarde Prezado, gostaria de fazer a minha queixa sobre os cortes efectuados no meu salario. O valor do recibo não condiz com o valor recebido. Já informei a empresa mas não se resolve.\n\nPor favor preciso da vossa ajuda.43','2023-10-16 22:52:40','Cortes no Salario34','normal',NULL),(22,104,'Boa tarde Prezado, gostaria de fazer a minha queixa sobre os cortes efectuados no meu salario. O valor do recibo não condiz com o valor recebido. Já informei a empresa mas não se resolve.\n\nPor favor preciso da vossa ajuda.43','2023-10-17 19:06:57','Cortes no Salario34','anonimo',NULL),(23,104,'Boa tarde Prezado, gostaria de fazer a minha queixa sobre os cortes efectuados no meu salario. O valor do recibo não condiz com o valor recebido. Já informei a empresa mas não se resolve.\n\nPor favor preciso da vossa ajuda.43','2023-10-17 19:07:24','Cortes no Salario345','anonimo',NULL),(24,104,'Boa tarde Prezado, gostaria de fazer a minha queixa sobre os cortes efectuados no meu salario. O valor do recibo não condiz com o valor recebido. Já informei a empresa mas não se resolve.\n\nPor favor preciso da vossa ajuda.43','2023-10-17 19:08:31','Cortes no Salario345','anonimo',NULL),(25,104,'Boa tarde Prezado, gostaria de fazer a minha queixa sobre os cortes efectuados no meu salario. O valor do recibo não condiz com o valor recebido. Já informei a empresa mas não se resolve.\n\nPor favor preciso da vossa ajuda.43','2023-10-17 19:08:59','Cortes no Salario345','anonimo',NULL),(26,104,'Boa tarde Prezado, gostaria de fazer a minha queixa sobre os cortes efectuados no meu salario. O valor do recibo não condiz com o valor recebido. Já informei a empresa mas não se resolve.\n\nPor favor preciso da vossa ajuda.43','2023-10-17 19:10:26','Cortes no Salario345','anonimo',NULL),(27,104,'Boa tarde Prezado, gostaria de fazer a minha queixa sobre os cortes efectuados no meu salario. O valor do recibo não condiz com o valor recebido. Já informei a empresa mas não se resolve.\n\nPor favor preciso da vossa ajuda.43','2023-10-17 19:10:41','Cortes no Salario3','anonimo',NULL),(28,104,'Boa tarde Prezado, gostaria de fazer a minha queixa sobre os cortes efectuados no meu salario. O valor do recibo não condiz com o valor recebido. Já informei a empresa mas não se resolve.\n\nPor favor preciso da vossa ajuda.43','2023-10-17 19:13:51','Cortes no Salario34','anonimo',NULL),(29,104,'Boa tarde Prezado, gostaria de fazer a minha queixa sobre os cortes efectuados no meu salario. O valor do recibo não condiz com o valor recebido. Já informei a empresa mas não se resolve.\n\nPor favor preciso da vossa ajuda.43','2023-10-17 19:14:28','Cortes no Salario34','anonimo',NULL),(30,104,'Boa tarde Prezado, gostaria de fazer a minha queixa sobre os cortes efectuados no meu salario. O valor do recibo não condiz com o valor recebido. Já informei a empresa mas não se resolve.\n\nPor favor preciso da vossa ajuda.43','2023-10-17 19:17:47','Cortes no Salario342','anonimo',NULL),(31,104,'Boa tarde Prezado, gostaria de fazer a minha queixa sobre os cortes efectuados no meu salario. O valor do recibo não condiz com o valor recebido. Já informei a empresa mas não se resolve.\n\nPor favor preciso da vossa ajuda.43','2023-10-17 19:18:59','Cortes no Salario3','anonimo',NULL);
/*!40000 ALTER TABLE `historico_queixa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inspector`
--

DROP TABLE IF EXISTS `inspector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inspector` (
  `id` int NOT NULL AUTO_INCREMENT,
  `funcionarioIGTID` int NOT NULL,
  `fk_funcionarioIGT` int DEFAULT NULL,
  `trabalhadorID` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_funcionarioIGT` FOREIGN KEY (`id`) REFERENCES `funcionarioigt` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inspector`
--

LOCK TABLES `inspector` WRITE;
/*!40000 ALTER TABLE `inspector` DISABLE KEYS */;
INSERT INTO `inspector` VALUES (8,7,7,146),(9,1,2,155);
/*!40000 ALTER TABLE `inspector` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nota`
--

DROP TABLE IF EXISTS `nota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nota` (
  `id` int NOT NULL AUTO_INCREMENT,
  `queixaID` int DEFAULT NULL,
  `nota` varchar(1045) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nota`
--

LOCK TABLES `nota` WRITE;
/*!40000 ALTER TABLE `nota` DISABLE KEYS */;
INSERT INTO `nota` VALUES (1,104,'nota1'),(2,104,'nota2'),(3,104,'nota3');
/*!40000 ALTER TABLE `nota` ENABLE KEYS */;
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
  `nome_pai` varchar(255) DEFAULT NULL,
  `nome_mae` varchar(255) DEFAULT NULL,
  `naturalidade` varchar(255) DEFAULT NULL,
  `sexo` varchar(255) DEFAULT NULL,
  `altura` varchar(255) DEFAULT NULL,
  `biID` int DEFAULT NULL,
  `enderecoID` int DEFAULT NULL,
  `estado_civil` varchar(255) DEFAULT NULL,
  `data_nascimento` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=246 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
INSERT INTO `pessoa` VALUES (208,'Eduardo','Kiassucumuca','Eduardo Da Silva','Cristina Guilherme','Angola','undefined','2.8',277,428,'Solteiro','1999-03-06 00:00:00'),(209,'dada','vamo3','lulul','Cristina Guilherme','NovaEmpresa2','Masculino','1.23',278,441,'Casado','2022-08-28 00:00:00'),(210,'dada','vamo3','lulul','Cristina Guilherme','NovaEmpresa2','Masculino','1.23',279,443,'Casado','2022-08-28 00:00:00'),(211,'dada','vamo3','lulul','Cristina Guilherme','NovaEmpresa2','Masculino','1.23',280,445,'Casado','2022-08-28 00:00:00'),(212,'B','B','B','B','Angola','Masculino','1.20',281,447,'Casado','2022-08-28 00:00:00'),(213,'B','B','B','B','Angola','Masculino','1.20',282,448,'Casado','2022-08-28 00:00:00'),(214,'B','B','B','B','Angola','Masculino','1.20',283,449,'Casado','2022-08-28 00:00:00'),(215,'B','B','B','B','Angola','Masculino','1.20',284,450,'Casado','2022-08-28 00:00:00'),(216,'B','B','B','B','Angola','Masculino','1.20',285,451,'Casado','2022-08-28 00:00:00'),(217,'teste1','teste1','teste1','teste1','Angola','Feminino','1.1',286,452,'Solteiro','2022-08-28 00:00:00'),(218,'tt','tt','tt','undefined','Angola','Feminino','1.70',287,453,'Casado','2022-08-29 00:00:00'),(219,'Belmiro','Bebo','b','b','Angola','Masculino','1.2',288,455,'Solteiro','2022-08-29 00:00:00'),(220,'Belmiro','Bebo','b','b','Angola','Masculino','1.2',289,457,'Solteiro','2022-08-29 00:00:00'),(221,'Belmiro','Bebo','b','b','Angola','Masculino','1.2',290,459,'Solteiro','2022-08-29 00:00:00'),(222,'Belmiro','Bebo','b','b','Angola','Masculino','1.2',291,461,'Solteiro','2022-08-29 00:00:00'),(223,'Belmiro','Bebo','b','b','Angola','Masculino','1.2',292,463,'Solteiro','2022-08-29 00:00:00'),(224,'o','o','o','o','Angola','Masculino','1.20',293,465,'Solteiro','2022-08-29 00:00:00'),(225,'o','o','o','o','Angola','Masculino','1.20',294,466,'Solteiro','2022-08-29 00:00:00'),(226,'o','o','o','o','Angola','Masculino','1.20',295,467,'Solteiro','2022-08-29 00:00:00'),(227,'o','o','o','o','Angola','Masculino','1.20',296,468,'Solteiro','2022-08-29 00:00:00'),(228,'o','o','o','o','Angola','Masculino','1.20',297,469,'Solteiro','2022-08-29 00:00:00'),(234,'Silva','Silvano',NULL,NULL,NULL,NULL,NULL,NULL,480,NULL,NULL),(235,'Nenhum','Nenhum',NULL,NULL,NULL,NULL,NULL,NULL,481,NULL,NULL),(243,'Marcia ','Magalhaes',NULL,NULL,NULL,NULL,NULL,NULL,489,NULL,NULL),(245,'Manuel','Gomes',NULL,NULL,NULL,NULL,NULL,NULL,491,NULL,NULL);
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
  `assunto` varchar(45) DEFAULT NULL,
  `facto` varchar(1255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `queixosoID` varchar(50) DEFAULT NULL,
  `queixanteID` varchar(50) DEFAULT NULL,
  `empresaID` int DEFAULT NULL,
  `trabalhadorID` int DEFAULT NULL,
  `recepcionistaID` int DEFAULT NULL,
  `inspectorID` int NOT NULL,
  `chefeServicosID` int DEFAULT NULL,
  `url_file_contrato` varchar(255) DEFAULT NULL,
  `provincia` varchar(45) DEFAULT NULL,
  `modo` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT 'Aberto',
  `testemunhaID` int DEFAULT NULL,
  `nota` varchar(1045) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `recepcionistaID` (`recepcionistaID`),
  KEY `chefeServicosID` (`chefeServicosID`),
  KEY `queixa_ibfk_1` (`empresaID`),
  KEY `queixa_ibfk_2` (`trabalhadorID`),
  CONSTRAINT `queixa_ibfk_1` FOREIGN KEY (`empresaID`) REFERENCES `empresa` (`id`),
  CONSTRAINT `queixa_ibfk_2` FOREIGN KEY (`trabalhadorID`) REFERENCES `trabalhador` (`id`),
  CONSTRAINT `queixa_ibfk_3` FOREIGN KEY (`recepcionistaID`) REFERENCES `recepcionista` (`id`),
  CONSTRAINT `queixa_ibfk_5` FOREIGN KEY (`chefeServicosID`) REFERENCES `chefeservicos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `queixa`
--

LOCK TABLES `queixa` WRITE;
/*!40000 ALTER TABLE `queixa` DISABLE KEYS */;
INSERT INTO `queixa` VALUES (101,'Trabalho intensivoooo','Não sou reconpensado pelo que faço eu acho que trabalho. Faço mais tarefas daquilo que estava definido no contrato, mais','2023-09-28 22:45:40','2023-09-28 22:45:40','130','124',124,130,NULL,8,NULL,'1695941136145-CARDIO â VOL 1 Arritmias CardÃ­acas e Morte SÃºbita.pdf','Luanda','normal','aberto',4,NULL),(104,'Cortes no Salario34','Boa tarde Prezado, gostaria de fazer a minha queixa sobre os cortes efectuados no meu salario. O valor do recibo não condiz com o valor recebido. Já informei a empresa mas não se resolve.\n\nPor favor preciso da vossa ajuda.43','2023-09-28 23:42:15','2023-09-28 23:42:15','130','131',131,130,NULL,9,NULL,'uploads\\1695944534732-DERMATO - AnÃ¡tomo-histologia e LesÃµes Elementares_ DÃ§s InfectoparasitÃ¡rias da Pele_ Dermatoses InflamatÃ³rias_ Oncologia DermatolÃ³gica.pdf','Luanda','anonimo','aberto',4,NULL),(109,'ja','ja','2023-09-29 00:27:53','2023-09-29 00:27:53','130','131',136,130,NULL,9,NULL,'uploads\\1695947273194-ENDOCR â VOL 1 DoenÃ§as da Tireoide.pdf','Luanda','normal','aberto',4,NULL),(113,'b','b','2023-09-29 20:07:02','2023-09-29 20:07:02','135','124',139,135,NULL,9,NULL,'uploads\\1696018020797-CIRURG â VOL 4 Cirurgia Vascular, Proctologia, Cirurgia de Obesidade, Cirurgia PediÃ¡trica, Tumores de CabeÃ§a e PescoÃ§o.pdf','Luanda','normal','aberto',NULL,NULL),(114,'we','we','2023-09-29 20:29:13','2023-09-29 20:29:13','136','131',124,136,NULL,9,NULL,'uploads\\1696019351802-ENDOCR â VOL 1 DoenÃ§as da Tireoide.pdf','Luanda','normal','aberto',NULL,NULL),(115,'b','b','2023-09-30 20:55:46','2023-09-30 20:55:46','136','137',131,137,NULL,9,NULL,'uploads\\1696107307099-CIRURG â VOL 1 Trauma.pdf','Luanda','normal','aberto',NULL,NULL),(116,'O','O','2023-09-30 21:16:38','2023-09-30 21:16:38','136','138',136,138,NULL,9,NULL,'uploads\\1696108597458-DERMATO - AnÃ¡tomo-histologia e LesÃµes Elementares_ DÃ§s InfectoparasitÃ¡rias da Pele_ Dermatoses InflamatÃ³rias_ Oncologia DermatolÃ³gica.pdf','Luanda','normal','aberto',NULL,NULL),(117,'O','O','2023-09-30 21:18:49','2023-09-30 21:18:49','136','139',139,139,NULL,9,NULL,'uploads\\1696108728607-DERMATO - AnÃ¡tomo-histologia e LesÃµes Elementares_ DÃ§s InfectoparasitÃ¡rias da Pele_ Dermatoses InflamatÃ³rias_ Oncologia DermatolÃ³gica.pdf','Luanda','normal','aberto',NULL,NULL),(118,'O','O','2023-09-30 21:20:05','2023-09-30 21:20:05','136','140',124,140,NULL,9,NULL,'uploads\\1696108801021-DERMATO - AnÃ¡tomo-histologia e LesÃµes Elementares_ DÃ§s InfectoparasitÃ¡rias da Pele_ Dermatoses InflamatÃ³rias_ Oncologia DermatolÃ³gica.pdf','Luanda','normal','aberto',NULL,NULL),(119,'O','O','2023-09-30 21:22:24','2023-09-30 21:22:25','136','141',131,141,NULL,9,NULL,'uploads\\1696108880240-DERMATO - AnÃ¡tomo-histologia e LesÃµes Elementares_ DÃ§s InfectoparasitÃ¡rias da Pele_ Dermatoses InflamatÃ³rias_ Oncologia DermatolÃ³gica.pdf','Luanda','normal','aberto',NULL,NULL),(120,'O','O','2023-09-30 21:24:15','2023-09-30 21:24:15','136','142',136,142,NULL,9,NULL,'uploads\\1696109054631-DERMATO - AnÃ¡tomo-histologia e LesÃµes Elementares_ DÃ§s InfectoparasitÃ¡rias da Pele_ Dermatoses InflamatÃ³rias_ Oncologia DermatolÃ³gica.pdf','Luanda','normal','aberto',NULL,NULL),(121,'uiu','uiu','2023-10-01 00:07:06','2023-10-01 00:07:06','136','135',139,135,NULL,9,NULL,'uploads\\1696118826403-CARDIO â VOL 4 DoenÃ§a Coronariana.pdf','Luanda','normal','aberto',NULL,NULL),(122,'uiu','uiu','2023-10-01 00:08:27','2023-10-01 00:08:27','136','135',124,135,NULL,9,NULL,'uploads\\1696118907512-CARDIO â VOL 4 DoenÃ§a Coronariana.pdf','Luanda','normal','aberto',NULL,NULL),(123,'a','a','2023-10-03 05:03:59','2023-10-03 05:03:59','139','130',131,130,NULL,9,NULL,'uploads\\1696309438555-DERMATO - AnÃ¡tomo-histologia e LesÃµes Elementares_ DÃ§s InfectoparasitÃ¡rias da Pele_ Dermatoses InflamatÃ³rias_ Oncologia DermatolÃ³gica.pdf','Uíge','normal','aberto',NULL,NULL);
/*!40000 ALTER TABLE `queixa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `queixoso`
--

DROP TABLE IF EXISTS `queixoso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `queixoso` (
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `queixoso`
--

LOCK TABLES `queixoso` WRITE;
/*!40000 ALTER TABLE `queixoso` DISABLE KEYS */;
/*!40000 ALTER TABLE `queixoso` ENABLE KEYS */;
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
/*!40000 ALTER TABLE `recepcionista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reuniao`
--

DROP TABLE IF EXISTS `reuniao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reuniao` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `assunto` varchar(145) DEFAULT NULL,
  `local` varchar(45) DEFAULT NULL,
  `data` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `queixaID` int DEFAULT NULL,
  `trabalhadorID` int DEFAULT NULL,
  `empresaID` int DEFAULT NULL,
  `obs` varchar(1045) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reuniao`
--

LOCK TABLES `reuniao` WRITE;
/*!40000 ALTER TABLE `reuniao` DISABLE KEYS */;
INSERT INTO `reuniao` VALUES (3,'assunto2','Online','2023-09-01','11:11:00',NULL,104,NULL,131,'no'),(4,'assunto3','Online','2023-10-02','01:01:00',NULL,104,130,NULL,'AA');
/*!40000 ALTER TABLE `reuniao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reuniao_empregador`
--

DROP TABLE IF EXISTS `reuniao_empregador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reuniao_empregador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fk_empregador` int DEFAULT NULL,
  `fk_reuniao` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reuniao_empregador`
--

LOCK TABLES `reuniao_empregador` WRITE;
/*!40000 ALTER TABLE `reuniao_empregador` DISABLE KEYS */;
/*!40000 ALTER TABLE `reuniao_empregador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reuniao_trabalhador`
--

DROP TABLE IF EXISTS `reuniao_trabalhador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reuniao_trabalhador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fk_trabalhador` int DEFAULT NULL,
  `fk_reuniao` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reuniao_trabalhador`
--

LOCK TABLES `reuniao_trabalhador` WRITE;
/*!40000 ALTER TABLE `reuniao_trabalhador` DISABLE KEYS */;
/*!40000 ALTER TABLE `reuniao_trabalhador` ENABLE KEYS */;
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
-- Table structure for table `testemunha`
--

DROP TABLE IF EXISTS `testemunha`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testemunha` (
  `id` int NOT NULL AUTO_INCREMENT,
  `inspectorID` int NOT NULL,
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testemunha`
--

LOCK TABLES `testemunha` WRITE;
/*!40000 ALTER TABLE `testemunha` DISABLE KEYS */;
INSERT INTO `testemunha` VALUES (4,8);
/*!40000 ALTER TABLE `testemunha` ENABLE KEYS */;
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
  `pessoaID` int DEFAULT NULL,
  `contaID` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `trabalhador_ibfk_1` (`pessoaID`),
  CONSTRAINT `trabalhador_ibfk_1` FOREIGN KEY (`pessoaID`) REFERENCES `pessoa` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=158 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabalhador`
--

LOCK TABLES `trabalhador` WRITE;
/*!40000 ALTER TABLE `trabalhador` DISABLE KEYS */;
INSERT INTO `trabalhador` VALUES (130,'Gerente','Vendas','Luanda','queixoso',208,111),(134,'undefined','undefined','Luanda','queixoso',215,116),(135,'b','b','Luanda','queixoso',216,117),(136,'d','d','Luanda','queixoso',217,118),(137,'Assistente de recursos humanos','RH','Luanda','queixante',223,0),(138,'O','O','Luanda','queixante',224,0),(139,'O','O','Luanda','queixante',225,0),(140,'O','O','Luanda','queixante',226,0),(141,'O','O','Luanda','queixante',227,0),(142,'O','O','Luanda','queixante',228,0),(146,'Inspector','Inspecção','Benguela','igt',234,132),(147,'Inspector','Inspecção','Luanda','igt',235,133),(155,'Inspector','Inspecção','Luanda','igt',243,141),(157,'chefe_servicos','Chief','Luanda','igt',245,143);
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

-- Dump completed on 2023-11-06  2:16:37
