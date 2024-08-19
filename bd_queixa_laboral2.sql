-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (x86_64)
--
-- Host: localhost    Database: bd_queixa_laboral2
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `artigo`
--

DROP TABLE IF EXISTS `artigo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artigo` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(645) DEFAULT NULL,
  `descricao` varchar(1045) DEFAULT NULL,
  `url_artigo` varchar(145) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artigo`
--

LOCK TABLES `artigo` WRITE;
/*!40000 ALTER TABLE `artigo` DISABLE KEYS */;
INSERT INTO `artigo` VALUES (1,'Lei 12/23','A aprovação da constituição da república de Angola em 2010 lançou as premissas constitucionais para o fortalecimento do Estado democratico de direito, bem como reconfigurou o catálogo dos direitos fundamentais','LEI-GERAL-DO-TRABALHO-2023.pdf'),(2,'Lei 7/15','O processo de criação das condições mais adequadas para a aplicação das politicas publicas e dos programas nacionais com vista a assegurar o crescimento e o desenvolvimento económico e social do pais, exige a adpção, o aperfeiçoamento ou a modificação de distintos instrumentos de governação, com vista a concretizar, de forma dinâmica e gradual, esses objectivos.','LEI GERAL DO TRABALHGO 2015.pdf'),(3,'Lei geral do trabalho','A lei geral do trabalho aplica-se a todos os contratos de trabalho celebrados entre pessoas singulares e empresas públicas,privadas,mistas,cooperativas e consulares.','Apresentação da LGT.pdf');
/*!40000 ALTER TABLE `artigo` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=344 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bi`
--

LOCK TABLES `bi` WRITE;
/*!40000 ALTER TABLE `bi` DISABLE KEYS */;
INSERT INTO `bi` VALUES (318,'2024-04-03 00:00:00','2029-04-02 00:00:00','uploads/Attestation of engagement (Manuel) v.2.pdf','006401456LA048'),(319,'2021-12-30 00:00:00','2028-12-29 00:00:00','uploads/Acta numero1 da primeira reuniAÌÂ£o do corpo directivo.docx','092323330LA239'),(320,'2021-12-30 00:00:00','2028-12-29 00:00:00','uploads/Acta numero1 da primeira reuniAÌÂ£o do corpo directivo.docx','092323330LA231'),(321,'2021-12-30 00:00:00','2028-12-29 00:00:00','uploads/Acta numero1 da primeira reuniAÌÂ£o do corpo directivo.docx','092323330LA232'),(322,'2021-12-30 00:00:00','2028-12-29 00:00:00','uploads/Acta numero1 da primeira reuniAÌÂ£o do corpo directivo.docx','092323330LA233'),(323,'2021-12-30 00:00:00','2028-12-29 00:00:00','uploads/Acta numero1 da primeira reuniAÌÂ£o do corpo directivo.docx','092323330LA234'),(324,'2021-12-30 00:00:00','2028-12-29 00:00:00','uploads/Acta numero1 da primeira reuniAÌÂ£o do corpo directivo.docx','092323330LA235'),(325,'2021-12-30 00:00:00','2028-12-29 00:00:00','uploads/Acta numero1 da primeira reuniAÌÂ£o do corpo directivo.docx','092323330LA236'),(326,'2021-12-30 00:00:00','2028-12-29 00:00:00','uploads/Acta numero1 da primeira reuniAÌÂ£o do corpo directivo.docx','092323330LA237'),(327,'2021-12-30 00:00:00','2028-12-29 00:00:00','uploads/Acta numero1 da primeira reuniAÌÂ£o do corpo directivo.docx','092323330LA238'),(328,'2021-12-30 00:00:00','2028-12-29 00:00:00','uploads/Acta numero1 da primeira reuniAÌÂ£o do corpo directivo.docx','092323330LA230'),(329,'2024-07-13 00:00:00','2030-12-31 00:00:00','uploads/4. Letter to IRSEM [Brig. Gunji].docx','092323334LA323'),(330,'2024-12-31 00:00:00','2029-12-31 00:00:00','uploads/1716760509620.jpeg','019234857BG930'),(331,'2024-11-30 00:00:00','2029-11-30 00:00:00','4. Letter to IRSEM [Brig. Gunji] (Corrigido).docx','876923527BG098'),(332,'2024-10-29 00:00:00','2029-10-29 00:00:00','4. Letter to IRSEM [Brig. Gunji].docx','176923527BG091'),(333,'2024-12-31 00:00:00','2029-12-31 00:00:00','admin,+5-WILLIAN.pdf','276923527BG092'),(334,'2023-12-31 00:00:00','2029-12-31 00:00:00','uploads/Actividades de grande vulto 2024.pdf','236923527BG012'),(335,'2024-07-30 00:00:00','2030-07-30 00:00:00','uploads/DOSSIÃ DA FEIRA FAVOR DA SAÃDE PREVENTIVA.docx','000061810LA002'),(336,'2022-12-31 00:00:00','2029-12-30 00:00:00','uploads/4. Letter to IRSEM [Brig. Gunji].docx','232233232LA123'),(337,'2024-12-31 00:00:00','2029-12-30 00:00:00','4. (c) Letter to IRSEM [Brig. Gunji]_Final.pdf','232298232LA123'),(338,'2024-08-06 00:00:00','2029-08-06 00:00:00','uploads/Doc1.docx','123456789LA222'),(339,'2024-08-18 00:00:00','2029-08-18 00:00:00','uploads/Screenshot 2024-04-23 at 23.40.10.png','098908769LA899'),(340,'2024-08-18 00:00:00','2029-08-18 00:00:00','uploads/Screenshot 2024-04-23 at 23.40.10.png','098908769LA899'),(341,'2024-08-18 00:00:00','2029-08-18 00:00:00','uploads/Screenshot 2024-04-23 at 23.40.10.png','098908769LA899'),(342,'2024-08-19 00:00:00','2030-08-21 00:00:00','uploads/Screenshot 2024-04-23 at 23.40.10.png','909878765LA232'),(343,'2024-08-19 00:00:00','2029-08-08 00:00:00','uploads/Screenshot 2024-04-23 at 23.40.10.png','323423543LA132');
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
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `duvidaID` int NOT NULL,
  `comentario` varchar(1045) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `data` datetime DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `tipo_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_duvida_idx` (`duvidaID`),
  CONSTRAINT `duvidaID` FOREIGN KEY (`duvidaID`) REFERENCES `duvida` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
INSERT INTO `comentario` VALUES (1,1,'comentario1','Cristiano Marcio','2024-03-06 00:00:00','comentado',NULL),(2,1,'comentario2','Silvano Lamba','2024-03-07 00:00:00','comentado',NULL),(3,4,'comment','edu','2024-03-14 21:37:42',NULL,'Normal'),(4,4,'ddddd','Marcito','2024-03-14 21:38:45',NULL,'Normal'),(5,1,'vcvc','Manilson Gomes','2024-03-16 20:01:46',NULL,'Inspector'),(6,1,'dfdf','Manilson Gomes','2024-03-16 20:05:40',NULL,NULL),(7,1,'sds','Manilson','2024-03-20 22:36:27',NULL,NULL),(8,1,'mmm','mmm','2024-03-20 22:44:05',NULL,'Inspector'),(9,3,'novo outro','Manuel Gomes','2024-03-24 22:38:52',NULL,'Inspector');
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=192 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conta`
--

LOCK TABLES `conta` WRITE;
/*!40000 ALTER TABLE `conta` DISABLE KEYS */;
INSERT INTO `conta` VALUES (172,'kiassucristiano@hotmail.com','$2a$12$Ji0pVz/WfDZ00.1vjw7hm.CUl633Xon0s/sp/hwgD768dNkzWBdpm',NULL,NULL,0),(173,'kizua@igt.ao','$2a$12$42Fp8gRbYS/X4K38.SOI7eCkdzi00nj9HSUaQMu3C/d4fVu3l6bLa',NULL,NULL,0),(174,'20171226@isptec.co.ao','$2a$12$9ZAypEHP/FkOv.ix5OtTbeaQEFWMf/Z/trOlkZIhgGzsWcT4lGhOW',NULL,NULL,0),(175,'artur.miguel@isptec.co.ao','$2a$12$LbiWgJULyALMa.5cyeFq6OQRibUsQhIWo8EXh3gZyAyFNNS/ZLd1W',NULL,NULL,0),(176,'nelsoneduardo33@outlook.com','$2a$12$4shqLN4fP0qzu0ejFFsBEegF5PT0iKUhZqlgnPs088OguJe3HlJii',NULL,'user',0),(177,'lucykiassy@hotmail.com','$2a$12$pwosv6SFsvIJTN2sSEBGweGuOxbzdTrptrOjCVbQ8HiIP38ffDrTO',NULL,'user',0),(178,'entidade1@hotmail.com','$2a$12$.vwJq2PRj61i0MwdBR9B1.Zcx6nGdQffZrxYg0t3o4RQjkSi54W1m',NULL,NULL,0),(179,'fernandokiassucumuca@hotmail.com','$2a$12$rGpCPBqN6qC6hz2WXb4VOezf7SwE5fCO1j52AKZ0Gc4F2YTRrbTu6',NULL,'user',0),(180,'torrinhoandersonkiole@gmail.com','$2a$12$6h7tb4.xC46RYSs0ySB4UubAKfNYv10iD1uXHitvk/T92vOIMeepG',NULL,'user',0),(181,'ange.kiass@hotmail.com','$2a$12$qSi8Wtkg/7FKQk1qjHLs9O./R89Of6Jk.DTdIyfqX7ou0.ntBQYOO',NULL,'user',0),(182,'nelo4902@gmail.com','$2a$12$etQSw7C5wQ7ov7PcLbiUhu1kZE9NlaCSw0OZ057pCN2Bp9TlIeMf2',NULL,'user',0),(183,'xpto@hotmail.com','$2a$12$NNmexbZnvMp9LOFsvX.4iuFMESpA0Sa9b6bM8yxMvL1b5AQn0B6Wm',NULL,'user',0),(184,'joao.manuel@gmail.com','$2a$12$f3er.ab9DiyS0gNgEPnhzeNejsxlgE3x5wDeFzw/Q52957At5Z88O',NULL,NULL,0),(185,'info@zap.ao','$2a$12$l7o3D84QkJ.Zwso3TJEPWOnvolV0rodqL4dZrvowMz/qJBYWDZZJ2',NULL,NULL,0),(186,'fria@igt.ao','$2a$12$Is3iXdUzokhzzfSjhGv59etLMly2BO85i24V31pxf8OZNqPRgq08a',NULL,NULL,0),(187,'edu@gmail.com','$2a$12$wbeXWOnwWVr08Oa19YRVuejexX3E04SoYLWxcbdPhOaL2tPbUZckm',NULL,NULL,0),(188,'edu@gmail.com','$2a$12$K1BM5lX1m3c6G3IBxCkPoO3y17CW8Gg5.q6P5LZFIPcnw84v8SKpq',NULL,NULL,0),(189,'edu@gmail.com','$2a$12$Jrtnp8gs/fGUrU47nPn/KOS0/ikUlJa7CUpT4PblmN3mH6RJ4XxIS',NULL,NULL,0),(190,'vv@gmail.com','$2a$12$VnydjKPfi.oHfCJ5A5QAPekpP.bMa7.hjX68nwGoSYJeXqNiF0Oqy',NULL,NULL,0),(191,'asa@gmail.com','$2a$12$FXIeKrkINyKMmPKiPycKOusyjUAIMCE/S9kcc/4YJF1afjIySZobG',NULL,NULL,0);
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
-- Table structure for table `duvida`
--

DROP TABLE IF EXISTS `duvida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `duvida` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `assunto` varchar(45) DEFAULT NULL,
  `descricao` varchar(7045) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `resposta` varchar(5045) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `duvida`
--

LOCK TABLES `duvida` WRITE;
/*!40000 ALTER TABLE `duvida` DISABLE KEYS */;
INSERT INTO `duvida` VALUES (1,'Eduardo Kiassucumuca','Exploracao de trabalhadores ','As empresas actuamente exigem muito dos trablhadores mas as questões financeiras são precarias, o que vocês fazem perante essas situações ','lida',NULL),(2,'Eduardo Kiassucumuca','Horas extras não se fazem sentir','Eu trabalho a 5 anos e a empresa nunnca me dá horas extras, oque tenho que fazer','lida',NULL),(3,'Eduardo Kiassucumuca','Direitos dos trabalhadores','Quais são os direitos básicos dos trabalhadores em Angola?','lida','Direito a um salário mínimo, definido pelo governo.\nLimites de horas de trabalho regulares e horas extras.\nFérias remuneradas e feriados públicos.\nSegurança e saúde no local de trabalho.\nProteção contra discriminação no emprego com base em características como gênero, raça, religião, etc.\nDireito a sindicalização e negociação coletiva.'),(4,'Eduardo Kiassucumuca','Calculo das horas de trabalho','Como posso calcular as horas extras e os seus pagamentos?','',NULL),(5,'Eduina Jassira','Rescisão de contrato','Quais são os requisitos para rescindir um contrato de trabalho?','',''),(6,'Mariana Silveira','Despedimento por injusta causa','Quais são os direitos dos trabalhadores em caso de despedimento injustificado?','lida','kj'),(7,'Marcio Silva','Contratação de trabalhadores estrangeiros','Quais são os requisitos para a contratação de trabalhadores estrangeiros?','lida','Os requisitos para a contratação de trabalhadores estrangeiros em Angola são estabelecidos pela legislação de imigração e trabalho do país. Isso pode incluir a obtenção de vistos de trabalho adequados, autorizações de residência e cumprimento de outros requisitos legais. Os empregadores que desejam contratar trabalhadores estrangeiros devem seguir os procedimentos estabelecidos e garantir que estejam em conformidade com todas as leis e regulamentos aplicáveis.');
/*!40000 ALTER TABLE `duvida` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=165 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (141,'Kero','12839LA232','kkk','meu@kero.ao','www.kero.co.ao',504,0,'queixante'),(142,'ISPTEC','12839LA230','ççl','dti@isptec.ao','www.isptec.co.ao',505,0,'queixante'),(143,'Movicel','1234LA903','fff','nao2@xpto.ao','www.d.co.ao',511,0,'queixante'),(144,'a','678LA','ff','guikiassucumuca@hotmail.com','a.co.ao',513,158,'queixoso'),(145,'sdf','Bati','kkkkk','guikiassucumuca@hotmail.com','www.isptec.co.ao',515,159,'queixoso'),(146,'AngoReal','1334LA913','ffffff','angoreal@outlook.com','angoreal.co.ao',520,0,'queixante'),(147,'xpto','132','dfd','artur.miguel@isptec.co.ao','xpto.com',522,161,'queixoso'),(148,'teste1','teste1','teste1','teste1@hotmail.com','teste1',524,0,'queixante'),(149,'teste2','teste2','teste2','teste2@hotmail.com','teste2',526,0,'queixante'),(150,'outra1','outra1','outra1','outra1@hotmail.com','outra1',527,0,'queixante'),(151,'novaM1','0093920','novaM1','guikiassucumuca@hotmail.com','novaM1',529,164,'queixoso'),(152,'m','m','m','m@hotmail.com','m',530,0,'queixante'),(153,'n','934BG099','n','n@hotmail.com','n',531,165,'queixoso'),(154,'j','j','h\r\n','sd@sd.co','',537,0,'queixante'),(155,'Alien group','3232323','Empresa focada no desenvolvimento de soluções tecnológicas.','geral@alien-group.com','https://www.alien-group.com/.co.ao',540,0,'queixante'),(156,'TPA','2322332','Televisão pública de Angola','info@tpa.ao','https://tpa.ao/ao',551,0,'queixante'),(157,'Gregorio','2324533','Universidade','secgeral@ugs.ed.ao','https://ugs.ed.ao',553,0,'queixante'),(158,'Empresa1','111','tbr','artur.miguel@isptec.co.ao','tbr.ao',555,175,'queixoso'),(159,'emp2','121212','emp','emp2@xpto.ao','ded.ao',562,0,'queixante'),(160,'Joao Jose Manuel','000061810LA002','designacao1','joao.manuel@gmail.com','jm.co.ao',569,184,'queixoso'),(161,'ZAP','232233232LA123','des','info@zap.ao','zap.ao',571,185,'queixoso'),(162,'Pascoal LDA','123456BG543','S','pascoal@hotmail.com','undefined',574,0,'queixante'),(163,'t','123450000BG000','df','df@gmail.com','df.ao',575,0,'queixante'),(164,'a','09232930','a','asa@gmail.com','asa.ao',581,191,'queixoso');
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
) ENGINE=InnoDB AUTO_INCREMENT=582 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (539,'Valodia','Combatentes',NULL,'226/10','Luanda','930340539',959553137),(540,'Azul','Doutor António Agostinho Neto ','NA',NULL,'Luanda','941067525',NULL),(541,'bairro1','rua1',NULL,'casa1','Benguela','934556655',950550130),(542,'bairro1','rua1',NULL,'casa1','Benguela','934556655',950550130),(543,'bairro1','rua1',NULL,'casa1','Benguela','934556655',950550130),(544,'bairro1','rua1',NULL,'casa1','Benguela','934556655',950550130),(545,'bairro1','rua1',NULL,'casa1','Benguela','934556655',950550130),(546,'bairro1','rua1',NULL,'casa1','Benguela','934556655',950550130),(547,'bairro1','rua1',NULL,'casa1','Benguela','934556655',950550130),(548,'bairro1','rua1',NULL,'casa1','Benguela','934556655',950550130),(549,'bairro1','rua1',NULL,'casa1','Benguela','934556655',950550130),(550,'bairro1','rua1',NULL,'casa1','Benguela','934556655',950550130),(551,'bairro2','rua2','1',NULL,'Luanda','932332233',NULL),(552,'bairro2','bairro2',NULL,'casa2','Benguela','934556655',952523127),(553,'Murro Bento','rua3','2',NULL,'Benguela','931213054',NULL),(554,'t','t',NULL,'t','Benguela','924302392',934333344),(555,'tbr','tbr','J',NULL,'Benguela','943222323',NULL),(556,'b','r',NULL,'c','Benguela','923443322',983232323),(557,'bb','rr',NULL,'cc','Benguela','924302390',934333340),(558,'bb','rr',NULL,'c','Benguela','923443322',983232323),(559,NULL,NULL,NULL,NULL,NULL,'924122162',954332233),(560,NULL,NULL,NULL,NULL,NULL,'925040538',953234543),(561,'b','r',NULL,'ccc','Benguela','998232233',921323322),(562,'e','d','c',NULL,'Benguela','923223322',NULL),(563,NULL,NULL,NULL,NULL,NULL,'934556655',995445555),(564,NULL,NULL,NULL,NULL,NULL,'930340230',950550131),(565,NULL,NULL,NULL,NULL,NULL,'921223344',997322211),(566,NULL,NULL,NULL,NULL,'Benguela','946432211',957232222),(567,NULL,NULL,NULL,NULL,NULL,'998999999',921223344),(568,'Valodia','combatentes',NULL,'10','undefined','992334455',959553137),(569,'Rangel','Bes','B',NULL,'Luanda','923443444',NULL),(570,'golf','rua da unitel',NULL,'11','Luanda','921223344',997322211),(571,'bairro3','rua3','11',NULL,'Luanda','922334455',NULL),(572,'Vila','Vila',NULL,'casa2','Benguela','934556655',959553139),(573,'Ze pirão','Chamavo',NULL,'11','Benguela','925443311',953223311),(574,'Mutamba','Mutamba','111',NULL,'Benguela','994332211',NULL),(575,'df','df','33',NULL,'Benguela','923432234',NULL),(576,'Ces','C11',NULL,'11','Luanda','945554676',956766887),(577,'Ces','C11',NULL,'11','Luanda','945554676',956766887),(578,'Ces','C11',NULL,'11','Luanda','945554676',956766887),(579,'VVV','VVV',NULL,'VV','Luanda','923332322',945443322),(580,'TTT','TTT',NULL,'T','Luanda','938439944',954332233),(581,'aaa','asa','a',NULL,'Luanda','923223323',NULL);
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
-- Table structure for table `esclarecimento`
--

DROP TABLE IF EXISTS `esclarecimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `esclarecimento` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `duvidaID` int NOT NULL,
  `inspectorID` int DEFAULT NULL,
  `resposta` varchar(1045) DEFAULT NULL,
  `inquietacao` varchar(1045) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_duvida_idx` (`duvidaID`),
  KEY `fk_inspector_idx` (`inspectorID`),
  CONSTRAINT `fk_duvida` FOREIGN KEY (`duvidaID`) REFERENCES `duvida` (`id`),
  CONSTRAINT `fk_inspector` FOREIGN KEY (`inspectorID`) REFERENCES `inspector` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `esclarecimento`
--

LOCK TABLES `esclarecimento` WRITE;
/*!40000 ALTER TABLE `esclarecimento` DISABLE KEYS */;
INSERT INTO `esclarecimento` VALUES (1,1,NULL,NULL,' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','2024-05-06 15:12:47','2024-05-06 15:12:47'),(2,1,NULL,NULL,'','2024-05-13 21:50:39','2024-05-13 21:50:39');
/*!40000 ALTER TABLE `esclarecimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento`
--

DROP TABLE IF EXISTS `evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `tema` varchar(145) DEFAULT NULL,
  `descricao` varchar(245) DEFAULT NULL,
  `data` date DEFAULT NULL,
  `url_img` varchar(145) DEFAULT NULL,
  `hora` time DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento`
--

LOCK TABLES `evento` WRITE;
/*!40000 ALTER TABLE `evento` DISABLE KEYS */;
/*!40000 ALTER TABLE `evento` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionarioigt`
--

LOCK TABLES `funcionarioigt` WRITE;
/*!40000 ALTER TABLE `funcionarioigt` DISABLE KEYS */;
INSERT INTO `funcionarioigt` VALUES (23,161,'Recepcionista'),(24,162,'chefe_servicos'),(26,164,'chefe_servicos'),(31,195,'Recepcionista'),(32,196,'Recepcionista'),(33,198,'chefe_servicos'),(34,199,'chefe_servicos'),(35,200,'Inspector'),(36,201,'Inspector'),(37,202,'Inspector');
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
  `queixaID` int DEFAULT NULL,
  `facto` varchar(1500) DEFAULT NULL,
  `data` datetime DEFAULT NULL,
  `assunto` varchar(145) DEFAULT NULL,
  `modo` varchar(45) DEFAULT NULL,
  `url_file_contrato` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_queixa_idx` (`queixaID`),
  CONSTRAINT `queixaID` FOREIGN KEY (`queixaID`) REFERENCES `queixa` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historico_queixa`
--

LOCK TABLES `historico_queixa` WRITE;
/*!40000 ALTER TABLE `historico_queixa` DISABLE KEYS */;
INSERT INTO `historico_queixa` VALUES (32,NULL,'Bom dia, podem por favor ajudar nesta questão. O salario combinado no contraro não é o que recebo.','2023-11-07 00:00:00','Salario não corresponde ao combinado','anonimo',NULL),(33,NULL,'Boa tarde, sempre que tiro ferias não consigo gozar por completo os meus direitos, sou sempreimpedido.','2023-11-07 00:00:00','Ferias no trabalho','anonimo',NULL),(34,NULL,'sasssss','2023-11-07 00:00:00','Mais1','anonimo',NULL),(35,NULL,'wsdsdsdsd','2023-11-08 00:00:00','Vamos ver1','normal',NULL),(42,NULL,'Bom dia, podem por favor ajudar nesta questão. O salário combinado no contrato não é o que recebo.','2024-01-09 00:00:00','Salario não corresponde ao combinado','anonimo',NULL),(43,NULL,'Bom dia, podem por favor ajudar nesta questão. O salário combinado no contrato não é o que recebo.','2024-01-09 00:00:00','Salario não corresponde ao combinado','anonimo',NULL),(44,NULL,'Bom dia, podem por favor ajudar nesta questão. O salário combinado no contrato não é o que recebo.','2024-01-09 00:00:00','Salario não corresponde ao combinado','anonimo',NULL),(45,125,'Bom dia, podem por favor ajudar nesta questão. O salário combinado no contrato não é o que recebo.','2024-01-09 00:00:00','Salario não corresponde ao combinado','anonimo',NULL),(46,125,'Bom dia, podem por favor ajudar nesta questão. O salário combinado no contrato não é o que recebo.','2024-01-09 00:00:00','Salario não corresponde ao combinado','anonimo',NULL),(47,145,'sdsd','2024-01-30 00:00:00','sods','normal',NULL),(48,145,'sdsd','2024-01-30 00:00:00','sods','normal',NULL),(49,145,'sdsd','2024-01-30 00:00:00','sods','normal',NULL),(50,145,'sdsd','2024-01-30 00:00:00','sods','normal',NULL),(51,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(52,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(53,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(54,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(55,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(56,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(57,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(58,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(59,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(60,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(61,145,'ssss','2024-02-01 00:00:00','sods01','anonimo',NULL),(62,145,'ssss','2024-02-01 00:00:00','sods01','anonimo',NULL),(63,145,'ssss09','2024-02-01 00:00:00','sods01','anonimo',NULL),(64,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(65,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(66,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(67,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(68,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(69,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(70,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(71,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(72,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(73,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(74,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(75,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(76,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(77,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(78,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(79,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(80,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(81,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(82,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(83,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(84,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(85,145,'ssss091','2024-02-02 00:00:00','sods01','anonimo',NULL),(86,145,'ssss091','2024-02-02 00:00:00','sods01','anonimo',NULL),(87,145,'ssss091','2024-02-02 00:00:00','sods01','anonimo',NULL),(88,145,'ssss091','2024-02-02 00:00:00','sods01','anonimo',NULL),(89,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(90,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(91,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(92,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(93,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(94,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(95,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(96,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(97,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(98,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(99,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(100,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(101,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(102,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(103,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(104,145,'ssss091','2024-02-03 00:00:00','sods015','anonimo',NULL),(105,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(106,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(107,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(108,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(109,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(110,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(111,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(112,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(113,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(114,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(115,151,'Empresa sem bonus sem benefício ','2024-03-26 00:00:00','Bonus','normal',NULL),(116,151,'Empresa sem bonus sem benefício ','2024-03-26 00:00:00','Bonus','normal',NULL),(117,151,'Empresa sem bonus sem benefício ','2024-03-26 00:00:00','Bonusss','normal',NULL),(118,151,'Empresa sem bonus sem benefício ','2024-03-27 00:00:00','Bonus','anonimo',NULL),(119,154,'mais1','2024-03-27 00:00:00','mais1','normal',NULL),(120,138,'teste2','2024-04-02 00:00:00','teste2','normal',NULL),(121,138,'teste2','2024-04-23 00:00:00','teste23','anonimo',NULL),(122,138,'teste2','2024-04-23 00:00:00','teste23g','anonimo',NULL),(123,138,'teste2v','2024-04-23 00:00:00','teste23g','normal',NULL),(124,130,'wsdsdsdsd','2024-06-19 00:00:00','Vamos ver10','normal',NULL),(125,130,'wsdsdsdsd67','2024-06-19 00:00:00','Vamos ver10','normal',NULL),(134,154,'mais1','2024-06-25 00:00:00','mais1skdksjd','normal',NULL),(136,145,'ssss0918','2024-06-29 00:00:00','sods0159','anonimo',NULL),(137,145,'ssss0918','2024-06-29 00:00:00','sods0159','normal',NULL),(138,157,'Olá sou Eduardo, entrei na alien group depois de ter saido em segundo lugar na maratona de programação , obtive um estagio durante três meses, mas no decorrer do tempo passou-se seis meses de trabalho mas não recebi nenhuma proposta salarial. Até o momento estou a 1 ano nessa empresa e ainda continuo como estagiario, preciso de ajuda nessa questão . Obrigado.','2024-07-10 00:00:00','Trabalho sem remuneração ','normal',NULL),(139,163,'Descrição5','2024-07-18 00:00:00','Assunto5','normal',NULL),(140,161,'Em nome de todos professores desta universidade estamos exigindo melhores salários, condições de trabalho e a regularização de promoções e progressões na carreira.','2024-07-21 00:00:00','Greve dos professores universitarios','anonimo',NULL);
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
  `trabalhadorID` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inspector`
--

LOCK TABLES `inspector` WRITE;
/*!40000 ALTER TABLE `inspector` DISABLE KEYS */;
INSERT INTO `inspector` VALUES (14,202),(16,158),(17,159),(19,182),(20,185),(21,200),(22,201);
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nota`
--

LOCK TABLES `nota` WRITE;
/*!40000 ALTER TABLE `nota` DISABLE KEYS */;
INSERT INTO `nota` VALUES (15,161,'nota1'),(16,161,'hv');
/*!40000 ALTER TABLE `nota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `noticia`
--

DROP TABLE IF EXISTS `noticia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `noticia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(1045) DEFAULT NULL,
  `descricao` varchar(1045) DEFAULT NULL,
  `url_img_noticia` varchar(215) DEFAULT NULL,
  `data` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idnoticia_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noticia`
--

LOCK TABLES `noticia` WRITE;
/*!40000 ALTER TABLE `noticia` DISABLE KEYS */;
INSERT INTO `noticia` VALUES (1,'Diretor de Cooperação participa na sessão de abertura da formação “Normas Internacionais do Trabalho” da OIT','O Diretor de Cooperação do Secretariado Executivo da Comunidade dos Países de Língua Portuguesa (CPLP), Manuel Clarote Lapão, participou na sessão de abertura da formação “Normas Internacionais do Trabalho”, no dia 12 de outubro de 2022.','','2022-10-12',NULL,'normal'),(2,'Inspecção Geral do Trabalho regista mais de 23 mil infracções laborais','A Inspecção Geral do Trabalho (IGT) realizou, de Janeiro a Setembro deste ano, 6.115 visitas inspectivas, em várias empresas do país, que resultaram no registo de 23.426 infracções laborais, informou, quinta-feira, o inspector-geral do Trabalho.No campo das mediações de conflitos laborais, revelou que foram recepcionados 4.595 pedidos de mediação, com o registo de 1.987, dos quais 1.443 casos foram resolvidos, sendo 107 a favor dos empregadores e 1.336 a favor dos trabalhadores, que resultaram em indemnizações no valor de 330.879.818 de kwanzas.','','2023-11-17','10:13:00','destaque'),(3,'IGT no Bié regista mais de mil infracções laborais','Cuito - Mil e 171 infracções laborais foram notificadas de Janeiro a presente data pela Inspecção Geral do Trabalho (IGT) na província do Bié, menos 195 em relação ao igual período anterior.','noticia1.jfif','2022-12-26','17:39:00','normal'),(4,'Inspecção Geral do Trabalho dirimiu 14 mil conflitos laborais','Pelo menos 17.000 processos relacionados com conflitos laborais, deram entrada na Inspecção Geral do Trabalho e destes, 14 mil foram resolvidos com sucesso, revelou em Malanje, o ministro da Administração Pública, Trabalho e Segurança Social. Jesus Maiato disse que a acção exercida pela Inspecção Geral do Trabalho permitiu que o Tribunal do Trabalho e o Ministério Público passassem só a dirimir processos que não chegavam a consenso entre as partes. Segundo o titular do MAPTSS, com a entrada em vigor da nova Lei Geral do Trabalho, a Inspecção Geral do Trabalho passou a ter um papel de realce na mediação de conflitos laborais.','20181117104504ministro_da_administracao_publica','2018-11-17','13:10:00','normal');
/*!40000 ALTER TABLE `noticia` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=310 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
INSERT INTO `pessoa` VALUES (277,'Eduardo Cristiano Da Silva','Kiassucumuca','Eduardo Kiassucumuca','Cristina Guilherme','Sambizanga','Masculino','1.65',318,539,'Solteiro','1999-03-06 00:00:00'),(278,'Kizua ','Mbote','Mbote ','Kenue','Luanda','Masculino','1.90',319,541,'Casado','2005-12-31 00:00:00'),(279,'Kizua ','Mbote','Mbote ','Kenue','Luanda','Masculino','1.90',320,542,'Casado','2005-12-31 00:00:00'),(280,'Kizua ','Mbote','Mbote ','Kenue','Luanda','Masculino','1.90',321,543,'Casado','2005-12-31 00:00:00'),(281,'Kizua ','Mbote','Mbote ','Kenue','Luanda','Masculino','1.90',322,544,'Casado','2005-12-31 00:00:00'),(282,'Kizua ','Mbote','Mbote ','Kenue','Luanda','Masculino','1.90',323,545,'Casado','2005-12-31 00:00:00'),(283,'Kizua ','Mbote','Mbote ','Kenue','Luanda','Masculino','1.90',324,546,'Casado','2005-12-31 00:00:00'),(284,'Kizua ','Mbote','Mbote ','Kenue','Luanda','Masculino','1.90',325,547,'Casado','2005-12-31 00:00:00'),(285,'Kizua ','Mbote','Mbote ','Kenue','Luanda','Masculino','1.90',326,548,'Casado','2005-12-31 00:00:00'),(286,'Kizua ','Mbote','Mbote ','Kenue','Luanda','Masculino','1.90',327,549,'Casado','2005-12-31 00:00:00'),(287,'Kizua ','Mbote','Mbote ','Kenue','Luanda','Masculino','1.90',328,550,'Casado','2005-12-31 00:00:00'),(288,'Marcio ','Cristiano','kiki','kiki','Luanda','Masculino','1.20',329,552,'Solteiro','2002-01-13 00:00:00'),(289,'Miguel','Azevedo','Pai','mae','S','Masculino','2.22',330,554,'Solteiro','2000-12-31 00:00:00'),(290,'Outro ','Trabalhador','p','m','teste','Feminino','2.2',331,556,'Solteiro','2004-12-31 00:00:00'),(291,'mais um','trabalhador','pp','mm','nn','undefined','2.3',332,557,'Solteiro','2003-12-31 00:00:00'),(292,'tt','tt','pp','mm','s','Feminino','2.2',333,558,'Viuvo','2004-12-29 00:00:00'),(293,'Nelson','Kiassucumuca',NULL,NULL,NULL,NULL,NULL,NULL,559,NULL,NULL),(294,'Lucy ','Kiassucumuca',NULL,NULL,NULL,NULL,NULL,NULL,560,NULL,NULL),(295,'Nome','Sobrenome','p','m','q','Masculino','1.20',334,561,'Solteiro','2003-10-31 00:00:00'),(296,'Fernando','Kiassucumuca',NULL,NULL,NULL,NULL,NULL,NULL,563,NULL,NULL),(297,'Anderson','Kiole',NULL,NULL,NULL,NULL,NULL,NULL,564,NULL,NULL),(298,'Angélica','Kiassucumuca',NULL,NULL,NULL,NULL,NULL,NULL,565,NULL,NULL),(299,'Manuel','Gomes',NULL,NULL,NULL,NULL,NULL,NULL,566,NULL,NULL),(300,'Nenhum','Nenhum',NULL,NULL,NULL,NULL,NULL,NULL,567,NULL,NULL),(301,'Eduardo ','Cristiano','s','s','Luanda','Masculino','undefined',335,568,'Solteiro','2003-07-17 00:00:00'),(302,'Saciana','Garcia','m','p','Luanda','Feminino','1.2',336,570,'Solteiro','2003-11-30 00:00:00'),(303,'Miriam','Hamate','m','p','Luanda','Feminino','1.1',337,572,'Solteiro','2003-12-31 00:00:00'),(304,'Fria','Pascoal','p','m','Luanda','Feminino','1.22',338,573,'Solteiro','2003-08-06 00:00:00'),(305,'Edu','Duduh','d','d','Angola','Masculino','2.70',339,576,'Casado','2001-08-18 00:00:00'),(306,'Edu','Duduh','d','d','Angola','Masculino','2.70',340,577,'Casado','2001-08-18 00:00:00'),(307,'Edu','Duduh','d','d','Angola','Masculino','2.70',341,578,'Casado','2001-08-18 00:00:00'),(308,'V','V','V','V','Angola','Masculino','1.20',342,579,'Solteiro','2002-08-13 00:00:00'),(309,'T','T','T','T','A','Masculino','1.22',343,580,'Solteiro','2002-08-19 00:00:00');
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
  `funcionarioigtID` int DEFAULT NULL,
  `url_file_contrato` varchar(255) DEFAULT NULL,
  `provincia` varchar(45) DEFAULT NULL,
  `modo` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT 'Aberto',
  `testemunhaID` int DEFAULT NULL,
  `nota` varchar(1045) DEFAULT NULL,
  `url_file_acta` varchar(1045) DEFAULT NULL,
  `multa` double DEFAULT NULL,
  `obs` varchar(1045) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `recepcionistaID` (`recepcionistaID`),
  KEY `queixa_ibfk_1` (`empresaID`),
  KEY `queixa_ibfk_2` (`trabalhadorID`),
  KEY `fk_funcionarioigt_idx` (`funcionarioigtID`),
  CONSTRAINT `fk_funcionarioigt` FOREIGN KEY (`funcionarioigtID`) REFERENCES `funcionarioigt` (`id`),
  CONSTRAINT `queixa_ibfk_1` FOREIGN KEY (`empresaID`) REFERENCES `empresa` (`id`),
  CONSTRAINT `queixa_ibfk_2` FOREIGN KEY (`trabalhadorID`) REFERENCES `trabalhador` (`id`),
  CONSTRAINT `queixa_ibfk_3` FOREIGN KEY (`recepcionistaID`) REFERENCES `recepcionista` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=176 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `queixa`
--

LOCK TABLES `queixa` WRITE;
/*!40000 ALTER TABLE `queixa` DISABLE KEYS */;
INSERT INTO `queixa` VALUES (157,'Trabalho sem remuneração ','Olá sou Eduardo, entrei na alien group depois de ter saido em segundo lugar na maratona de programação , obtive um estagio durante três meses, mas no decorrer do tempo passou-se seis meses de trabalho mas não recebi nenhuma proposta salarial. Até o momento estou a 1 ano nessa empresa e ainda continuo como estagiario, preciso de ajuda nessa questão . Obrigado. sdsd','2024-07-10 21:26:39','2024-07-10 21:26:39','188','155',155,188,NULL,14,34,'Amira Elias.pdf','Luanda','anonimo','Aberto',4,NULL,NULL,NULL,NULL),(158,'Greve','Estou a quatro meses sem receber salário.','2024-07-13 19:19:27','2024-07-13 19:19:27','189','155',155,189,NULL,14,34,'1716760509620.jpeg','Luanda','normal','Aberto',4,NULL,NULL,NULL,NULL),(159,'Greve','Estou a quatro meses sem receber salário.','2024-07-13 20:06:34','2024-07-13 20:06:34','188','155',155,188,NULL,14,34,'agopip_full_pred_health_0.1.xlsx','Luanda','normal','Aberto',4,NULL,NULL,NULL,NULL),(160,'Melhores condições ','Em nome de todos os trabalhadores da TPA eu venho com este requerimento manifestar que queremos melhores condições de trabalho, aumento salariais e regularização dos contratos.','2024-07-13 20:22:02','2024-07-13 20:22:02','188','156',156,188,NULL,14,34,'Antigos Combatentes e Veteranos da PaÌtria.docx','Luanda','normal','Aberto',4,NULL,NULL,NULL,NULL),(161,'Greve dos professores universitarios2','Em nome de todos professores desta universidade estamos exigindo melhores salários, condições de trabalho e a regularização de promoções e progressões na carreira.','2024-07-13 20:43:29','2024-07-13 20:43:29','190','157',157,190,NULL,22,34,'Actividades de grande vulto 2024.docx','Benguela','anonimo','Encerrado',4,NULL,'DOSSIÃ DA FEIRA FAVOR DA SAÃDE PREVENTIVA.docx',300,NULL),(162,'Trabalho sem remuneração ','Sou professor e não tenho subsídio de ferias','2024-07-13 21:08:16','2024-07-13 21:08:16','190','157',157,190,NULL,14,34,'Actividades de grande vulto 2024.docx','Benguela','normal','Aberto',4,NULL,NULL,NULL,NULL),(163,'Assunto5','Descrição5.1','2024-07-18 20:24:53','2024-07-18 20:24:53','158','191',158,191,NULL,14,34,'10539415.jpg','Benguela','anonimo','Aberto',4,NULL,NULL,NULL,NULL),(164,'Assunto6','Descrição6','2024-07-18 20:39:38','2024-07-18 20:39:38','158','192',158,192,NULL,14,34,'4. Letter to IRSEM [Brig. Gunji].docx','Benguela','anonimo','Aberto',4,NULL,NULL,NULL,NULL),(165,'Assunto7','Descricao7','2024-07-18 20:41:57','2024-07-18 20:41:57','158','193',158,193,NULL,14,34,'Acta numero1 da primeira reuniAÌÂ£o do corpo directivo.docx','Benguela','anonimo','Aberto',4,NULL,NULL,NULL,NULL),(166,'Assunto8','Descrição 8','2024-07-18 20:55:48','2024-07-18 20:55:48','158','194',158,194,NULL,22,34,'Acta numero1 da primeira reuniAÌÂ£o do corpo directivo.docx','Benguela','normal','encaminhada_inspector',4,NULL,NULL,NULL,NULL),(167,'Assunto8','Descrição 8','2024-07-18 21:13:12','2024-07-18 21:13:12','197','159',159,197,NULL,14,34,'Actividades de grande vulto 2024.pdf','Benguela','normal','Aberto',4,NULL,NULL,NULL,NULL),(168,'ASSUNTO20','DESCRICAO20','2024-07-30 07:29:58','2024-07-30 07:29:58','160','203',160,203,NULL,21,34,'Doc1.docx','Luanda','normal','encaminhada_inspector',4,NULL,NULL,NULL,NULL),(169,'A','A','2024-08-03 16:13:19','2024-08-03 16:13:19','161','204',161,204,NULL,14,34,'4. Letter to IRSEM [Brig. Gunji].docx','Luanda','normal','Aberto',4,NULL,NULL,NULL,NULL),(170,'Trabalho sem remuneração ','S','2024-08-03 16:49:28','2024-08-03 16:49:28','161','205',161,205,NULL,14,34,'4. Letter to IRSEM [Brig. Gunji].docx','Luanda','normal','encaminhada_chefe',4,NULL,NULL,NULL,'Nova Observação observada'),(171,'QUEIXA1','DESC1','2024-08-06 22:02:37','2024-08-06 22:02:37','206','162',162,206,NULL,14,34,'DOSSIÃ DA FEIRA FAVOR DA SAÃDE PREVENTIVA.docx','Benguela','normal','Aberto',4,NULL,NULL,NULL,NULL),(172,'QUEIXA2','DESC2','2024-08-06 22:08:07','2024-08-06 22:08:07','206','163',163,206,NULL,14,34,'Doc1.docx','Benguela','anonimo','Aberto',4,NULL,NULL,NULL,NULL),(173,'Sem subsidios','No contrato de trabalho mostra que devo ter subsídios mas não recebo.','2024-08-18 13:37:59','2024-08-18 13:37:59','209','157',157,209,NULL,14,NULL,'pedido AUDIENCIA.docx','Luanda','normal','Aberto',4,NULL,NULL,NULL,NULL),(174,'V1','V1','2024-08-19 21:53:46','2024-08-19 21:53:46','210','155',155,210,NULL,14,34,'Screenshot 2024-02-25 at 21.14.26.png','Luanda','normal','encaminhada_chefe',4,NULL,NULL,NULL,NULL),(175,'T1','T1','2024-08-19 22:06:04','2024-08-19 22:06:04','164','211',164,211,NULL,14,NULL,'RESUMO.pdf','Luanda','normal','Aberto',4,NULL,NULL,NULL,NULL);
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
  `queixosoID` int DEFAULT NULL,
  `obs` varchar(1045) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reuniao`
--

LOCK TABLES `reuniao` WRITE;
/*!40000 ALTER TABLE `reuniao` DISABLE KEYS */;
INSERT INTO `reuniao` VALUES (21,'Assunto1','zoom','2024-07-28','23:30:00','1',161,190,NULL,NULL,'obs'),(22,'Assunto1','l','2024-07-21','02:06:00','1',161,NULL,157,NULL,'bb'),(23,'Reuniao2','Office','2024-07-22','22:00:00','1',166,NULL,158,NULL,'cc'),(24,'reuniao3','office','2024-07-22','23:59:00','1',166,NULL,158,NULL,'bb'),(25,'reuniao4','office','2024-07-22','23:59:00','1',166,NULL,158,158,'bn'),(26,'Kameso','Local','2024-07-27','15:00:00','1',168,NULL,160,NULL,'Designao'),(27,'Kameso','Local','2024-12-27','23:59:00','1',168,203,NULL,NULL,'a'),(28,'jk','','2024-08-07','23:59:00','1',168,NULL,160,NULL,''),(29,'hj','','2024-08-07','23:58:00','1',168,NULL,160,NULL,''),(30,'jh','','2024-08-07','23:59:00','1',168,NULL,160,NULL,''),(31,'HH','HH','2024-08-08','13:00:00','1',168,NULL,160,160,''),(32,'fy','','2024-08-07','22:58:00','1',168,203,NULL,NULL,''),(33,'hj','h','2024-08-08','17:03:00','1',168,203,NULL,203,'');
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
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testemunha`
--

LOCK TABLES `testemunha` WRITE;
/*!40000 ALTER TABLE `testemunha` DISABLE KEYS */;
INSERT INTO `testemunha` VALUES (4,14),(8,16),(9,17);
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
) ENGINE=InnoDB AUTO_INCREMENT=212 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabalhador`
--

LOCK TABLES `trabalhador` WRITE;
/*!40000 ALTER TABLE `trabalhador` DISABLE KEYS */;
INSERT INTO `trabalhador` VALUES (188,'Desenvolvedor de software ','Tic','Luanda','queixoso',277,172),(189,'cargo1','departamento1','Luanda','queixoso',287,173),(190,'cargo2','departamento2','Benguela','queixoso',288,174),(191,'CARGO4','DEPARTAMENTO4','Benguela','queixante',289,0),(192,'cargo5','Departamento 5','undefined','queixante',290,0),(193,'cargo6','departamento6','undefined','queixante',291,0),(194,'cargo7','departamento7','Benguela','queixante',292,0),(195,'Recepcionista','Administração','Luanda','igt',293,176),(196,'Recepcionista','Administração ','Benguela','igt',294,177),(197,'cargo8','dep8','Benguela','queixoso',295,178),(198,'chefe_servicos','Chief','Benguela','igt',296,179),(199,'chefe_servicos','Chief','Luanda','igt',297,180),(200,'Inspector','Técnica ','Luanda','igt',298,181),(201,'Inspector','Técnica ','Benguela','igt',299,182),(202,'Inspector','nenhum','Luanda','igt',300,183),(203,'Professor','DTI','Luanda','queixante',301,0),(204,'Médica','Clínica Geral','Luanda','queixante',302,0),(205,'ServiceDesk','Técnica ','Luanda','queixante',303,0),(206,'Contabilista','Finanças','Benguela','queixoso',304,186),(207,'HelpDesk','Tecnica','Benguela','queixoso',305,187),(208,'HelpDesk','Tecnica','Benguela','queixoso',306,188),(209,'HelpDesk','Tecnica','Benguela','queixoso',307,189),(210,'v','v','Luanda','queixoso',308,190),(211,'C','C','Luanda','queixante',309,0);
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

-- Dump completed on 2024-08-20  0:44:31
