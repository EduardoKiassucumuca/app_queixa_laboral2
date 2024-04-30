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
  `titulo` varchar(145) DEFAULT NULL,
  `descricao` varchar(145) DEFAULT NULL,
  `utl_artigo` varchar(145) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artigo`
--

LOCK TABLES `artigo` WRITE;
/*!40000 ALTER TABLE `artigo` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=316 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bi`
--

LOCK TABLES `bi` WRITE;
/*!40000 ALTER TABLE `bi` DISABLE KEYS */;
INSERT INTO `bi` VALUES (300,'2018-10-06 00:00:00','2023-10-06 00:00:00','uploads\\1699396286533-CIRURG â VOL 3 Resposta EndÃ³crina e ImunolÃ³gica ao Trauma, Queimaduras, CicatrizaÃ§Ã£o de Feridas, Choque, Suporte Nutricional, Cirurgia PlÃ¡stica.pdf','123456LA092'),(301,'2021-10-07 00:00:00','2022-10-07 00:00:00','uploads\\1699398612223-CIRURG â VOL 3 Resposta EndÃ³crina e ImunolÃ³gica ao Trauma, Queimaduras, CicatrizaÃ§Ã£o de Feridas, Choque, Suporte Nutricional, Cirurgia PlÃ¡stica.pdf','1234237BG543'),(302,'2021-10-07 00:00:00','2022-10-07 00:00:00','uploads\\1699398719086-CIRURG â VOL 3 Resposta EndÃ³crina e ImunolÃ³gica ao Trauma, Queimaduras, CicatrizaÃ§Ã£o de Feridas, Choque, Suporte Nutricional, Cirurgia PlÃ¡stica.pdf','1234237BG543'),(303,'2021-10-07 00:00:00','2022-10-07 00:00:00','uploads\\1699398808191-CIRURG â VOL 3 Resposta EndÃ³crina e ImunolÃ³gica ao Trauma, Queimaduras, CicatrizaÃ§Ã£o de Feridas, Choque, Suporte Nutricional, Cirurgia PlÃ¡stica.pdf','1234237BG543'),(304,'2021-10-07 00:00:00','2022-10-07 00:00:00','uploads\\1699398839276-CIRURG â VOL 3 Resposta EndÃ³crina e ImunolÃ³gica ao Trauma, Queimaduras, CicatrizaÃ§Ã£o de Feridas, Choque, Suporte Nutricional, Cirurgia PlÃ¡stica.pdf','1234237BG543'),(305,'2022-10-07 00:00:00','2022-10-07 00:00:00','uploads\\1699399496878-CIRURG â VOL 2 Preparo PrÃ©-operatÃ³rio, ComplicaÃ§Ãµes em Cirurgia, PrincÃ­pios de Anestesia, HÃ©rnias da Parede Abdominal.pdf','1234567LA543'),(306,'2022-10-07 00:00:00','2022-10-07 00:00:00','uploads\\1699399996799-CIRURG â VOL 2 Preparo PrÃ©-operatÃ³rio, ComplicaÃ§Ãµes em Cirurgia, PrincÃ­pios de Anestesia, HÃ©rnias da Parede Abdominal.pdf','193456LA092'),(307,'2022-10-06 00:00:00','2021-10-07 00:00:00','uploads\\1699400509293-CIRURG â VOL 4 Cirurgia Vascular, Proctologia, Cirurgia de Obesidade, Cirurgia PediÃ¡trica, Tumores de CabeÃ§a e PescoÃ§o.pdf','29301LA123'),(308,'2022-10-07 00:00:00','2022-10-07 00:00:00','uploads\\1699400727783-CIRURG â VOL 4 Cirurgia Vascular, Proctologia, Cirurgia de Obesidade, Cirurgia PediÃ¡trica, Tumores de CabeÃ§a e PescoÃ§o.pdf','09987LA213'),(309,'2022-10-07 00:00:00','2022-10-07 00:00:00','uploads\\1699401238518-CIRURG â VOL 4 Cirurgia Vascular, Proctologia, Cirurgia de Obesidade, Cirurgia PediÃ¡trica, Tumores de CabeÃ§a e PescoÃ§o.pdf','09987LA213'),(310,'2022-10-07 00:00:00','2022-10-07 00:00:00','uploads\\1699401448714-CIRURG â VOL 4 Cirurgia Vascular, Proctologia, Cirurgia de Obesidade, Cirurgia PediÃ¡trica, Tumores de CabeÃ§a e PescoÃ§o.pdf','09987LA213'),(311,'2021-10-10 00:00:00','2024-10-11 00:00:00','uploads\\1700039147380-CARDIO â VOL 2 InsuficiÃªncia CardÃ­aca e HipertensÃ£o Arterial.pdf','0922121LA234'),(312,'2022-10-14 00:00:00','2022-10-14 00:00:00','uploads\\1700041118350-CARDIO â VOL 4 DoenÃ§a Coronariana.pdf','3'),(313,'2022-12-31 00:00:00','2024-12-31 00:00:00','uploads/lauriÌssea Campos  2024(1).pdf','kjhhj'),(314,'2024-01-24 00:00:00','2024-01-18 00:00:00','uploads/laurÃ­ssea Campos  2024(1).pdf','102091LA123'),(315,'2024-01-02 00:00:00','2024-01-10 00:00:00','uploads/laurÃ­ssea Campos  2024(1).pdf','0922121LA232');
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
) ENGINE=InnoDB AUTO_INCREMENT=166 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conta`
--

LOCK TABLES `conta` WRITE;
/*!40000 ALTER TABLE `conta` DISABLE KEYS */;
INSERT INTO `conta` VALUES (133,'b@xpto.ao','$2a$12$2x/oP3kZdvkKK1/QIdeU8.AH7WYbwGyCijjvyRwlacl6csyzKhybG',NULL,'admin',0),(144,'20171226@isptec.co.ao','$2a$12$VKlZocjT5BIYaXDWUy0/m.GB7x5XUdsHwW/x/qwNtjb2wj73mqfMu',NULL,'user',0),(145,'nelo4902@gmail.com','$2a$12$VoM6F87Zk/tMW61ZY.UVp.vrMmM9jCGekbVazIhzADDEwvKKGZq2C',NULL,'user',0),(146,'nelsoneduardo33@outlook.com','$2a$12$Jajowq6UpVbutauKqpZDfeY2namT87.pV1S1n2Q1xX0VL0nxWBSUa',NULL,'user',0),(147,'lucykiassy@hotmail.com','$2a$12$63I3AgYrr2O5fJnKj6uyf.lfj64.XZAVDGWYtPg7lPbb6Qx4flhBO',NULL,'user',0),(148,'fernandokiassucumuca@hotmail.com','$2a$12$BH0RikAhRpl/IA6nm5Z5vurf7HbrPZAOi49fnUO4jBav3hq0Wdvsa',NULL,'user',0),(150,'torrinhoandersonkiole@gmail.com','$2a$12$haltIPzNerJeyj.7N1VnterJSIxfu42K/UloVUK7.3LZAZfP1UNAG',NULL,'user',0),(152,'kiassucristiano@hotmail.com','$2a$12$sfZB5dZY2z0LneXzgfIaHueQrGTVRTyBzXZhf/snrxpugnLDRSUr6',NULL,NULL,1),(157,'marciocristiano105@gmail.com','$2a$12$JihMfH9AHoIgzZ1F6K0gnOJOlnRkasOAxBdtHeCqocibzeqe1lXWq',NULL,NULL,0),(163,'ange.kiass@hotmail.com','$2a$12$UxZcFM1KN4GAM378EhM9j.gv.qJkwt24FVxO./dERcGi.ZAi6iIFG',NULL,NULL,0),(164,'guikiassucumuca@hotmail.com','$2a$12$CRjePt2zLNmIzLJtMsdwt.NSdzxuN5hLoS3ii3Rb49i63gLdpcxVO',NULL,NULL,0),(165,'n@hotmail.com','$2a$12$IUlXjX1/X.dy.JrYMppb7.Dp1iYYbg7dVsM8vuEUru1IPGAEMLAZK',NULL,NULL,0);
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
  `descricao` varchar(1045) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `resposta` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `duvida`
--

LOCK TABLES `duvida` WRITE;
/*!40000 ALTER TABLE `duvida` DISABLE KEYS */;
INSERT INTO `duvida` VALUES (1,'Eduardo Kiassucumuca','Exploracao de trabalhadores ','As empresas actuamente exigem muito dos trablhadores mas as questões financeiras são precarias, o que vocês fazem perante essas situações ','lida',NULL),(2,'Eduardo Kiassucumuca','Horas extras não se fazem sentir','Eu trabalho a 5 anos e a empresa nunnca me dá horas extras, oque tenho que fazer','lida',NULL),(3,'Eduardo Kiassucumuca','sods','sdsdsd\n','lida',NULL),(4,'Eduardo Kiassucumuca','sods','sdsdsd\n','lida',NULL),(5,'Edu','Novo','nova','lida','raaaajkjk\n'),(6,'e','e','e',NULL,NULL),(7,'Marcio Silva','Segurança no trabalho','Preciso saber se existe alguma lei correspondente a trabalhos de risco.',NULL,NULL),(8,'Joao Costa','duvida1','duvida1',NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (141,'Kero','12839LA232','kkk','meu@kero.ao','www.kero.co.ao',504,0,'queixante'),(142,'ISPTEC','12839LA230','ççl','dti@isptec.ao','www.isptec.co.ao',505,0,'queixante'),(143,'Movicel','1234LA903','fff','nao2@xpto.ao','www.d.co.ao',511,0,'queixante'),(144,'a','678LA','ff','guikiassucumuca@hotmail.com','a.co.ao',513,158,'queixoso'),(145,'sdf','Bati','kkkkk','guikiassucumuca@hotmail.com','www.isptec.co.ao',515,159,'queixoso'),(146,'AngoReal','1334LA913','ffffff','angoreal@outlook.com','angoreal.co.ao',520,0,'queixante'),(147,'xpto','132','dfd','artur.miguel@isptec.co.ao','xpto.com',522,161,'queixoso'),(148,'teste1','teste1','teste1','teste1@hotmail.com','teste1',524,0,'queixante'),(149,'teste2','teste2','teste2','teste2@hotmail.com','teste2',526,0,'queixante'),(150,'outra1','outra1','outra1','outra1@hotmail.com','outra1',527,0,'queixante'),(151,'novaM1','0093920','novaM1','guikiassucumuca@hotmail.com','novaM1',529,164,'queixoso'),(152,'m','m','m','m@hotmail.com','m',530,0,'queixante'),(153,'n','934BG099','n','n@hotmail.com','n',531,165,'queixoso');
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
) ENGINE=InnoDB AUTO_INCREMENT=532 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (428,'Valodia','Combatentes',NULL,'10','Luanda','930340539',959553137),(429,'Talatona','Belas','122',NULL,'Luanda','992333444',NULL),(439,'Viana','Viana','11',NULL,'Luanda','932332233',NULL),(463,'b','b',NULL,'b','Luanda','932332211',959553137),(464,'Valódia','Zé pirão','11',NULL,'Luanda','923443322',NULL),(465,'o','o',NULL,'o','Luanda','932332211',959887777),(466,'o','o',NULL,'o','Luanda','932332211',959887777),(467,'o','o',NULL,'o','Luanda','932332211',959887777),(468,'o','o',NULL,'o','Luanda','932332211',959887777),(469,'o','o',NULL,'o','Luanda','932332211',959887777),(470,'a','a','a',NULL,'Uíge','923445566',NULL),(471,'a','a','a',NULL,'Uíge','923445566',NULL),(472,'a','a','a',NULL,'Uíge','923445566',NULL),(473,'a','a','a',NULL,'Uíge','923445566',NULL),(480,NULL,NULL,NULL,NULL,NULL,'932332211',921223445),(481,NULL,NULL,NULL,NULL,NULL,'932332211',921223445),(489,NULL,NULL,NULL,NULL,'Luanda','923334454',959553137),(491,NULL,NULL,NULL,NULL,NULL,'923334454',921223445),(492,NULL,NULL,NULL,NULL,NULL,'930340539',959553137),(493,NULL,NULL,NULL,NULL,NULL,'943556677',921223445),(494,NULL,NULL,NULL,NULL,NULL,'923334454',921223445),(495,NULL,NULL,NULL,NULL,NULL,'923334454',959887777),(496,NULL,NULL,NULL,NULL,NULL,'912002200',932778899),(498,NULL,NULL,NULL,NULL,NULL,'923334454',959887777),(499,'Valodia','Combatentes',NULL,'vamo3','Luanda','930340539',921223445),(500,'Marçal','Belas','Kings Tower',NULL,'Benguela','932332233',NULL),(501,'Valodia','Combatentes',NULL,'vamo3','Luanda','930340539',921223445),(502,'Marçal','Belas','Kings Tower',NULL,'Benguela','932332233',NULL),(503,'Cazenga','lulul',NULL,'b','Luanda','930340539',921223445),(504,'Nova2','a','226',NULL,'Luanda','921234433',NULL),(505,'j','d','111',NULL,'Luanda','945556677',NULL),(506,'b','B',NULL,'105','Benguela','923334454',921223445),(507,'b','B',NULL,'105','Benguela','923334454',921223445),(508,'b','B',NULL,'105','Benguela','923334454',921223445),(509,'b','B',NULL,'105','Benguela','923334454',921223445),(510,'o','o',NULL,'o','Benguela','923334454',959553137),(511,'d','NovaEmpresa','111',NULL,'Benguela','932332212',NULL),(512,'B','df',NULL,'12','Benguela','923334454',959553137),(513,'tt','j','111',NULL,'Benguela','998998888',NULL),(514,'Rocha','teste1',NULL,'teste1','Benguela','923334454',921223445),(515,'a','Zé pirão','111',NULL,'Benguela','956789900',NULL),(516,'sdf','Rocha',NULL,'tt','Benguela','930340539',959553137),(517,'sdf','Rocha',NULL,'tt','Benguela','930340539',959553137),(518,'sdf','Rocha',NULL,'tt','Benguela','930340539',959553137),(519,'t','t',NULL,'t','Luanda','932332211',921223445),(520,'d','d','wd',NULL,'Luanda','923443322',NULL),(521,'t','t',NULL,'t','Luanda','943556678',932778899),(522,'NovaEmpresa','Belas','111',NULL,'Luanda','922122233',NULL),(523,'teste1','teste1',NULL,'teste1','Luanda','934556655',995445555),(524,'teste1','teste1','teste1',NULL,'Luanda','934554433',NULL),(525,'teste2','teste2',NULL,'teste2','Luanda','934443322',943221122),(526,'teste2','teste2','teste2',NULL,'Luanda','998887766',NULL),(527,'outra1','outra1','outra1',NULL,'Luanda','932223344',NULL),(528,'mais','mais',NULL,'mais','Luanda','993223344',998443344),(529,'novaM1','novaM1','novaM1',NULL,'Benguela','2449854433',NULL),(530,'m','m','m',NULL,'Benguela','934332233',NULL),(531,'n','n','n',NULL,'Benguela','924444444',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionarioigt`
--

LOCK TABLES `funcionarioigt` WRITE;
/*!40000 ALTER TABLE `funcionarioigt` DISABLE KEYS */;
INSERT INTO `funcionarioigt` VALUES (9,147,'Inspector'),(20,158,'Inspector'),(21,159,'Inspector'),(22,160,'Recepcionista'),(23,161,'Recepcionista'),(24,162,'chefe_servicos'),(26,164,'chefe_servicos');
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
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historico_queixa`
--

LOCK TABLES `historico_queixa` WRITE;
/*!40000 ALTER TABLE `historico_queixa` DISABLE KEYS */;
INSERT INTO `historico_queixa` VALUES (32,NULL,'Bom dia, podem por favor ajudar nesta questão. O salario combinado no contraro não é o que recebo.','2023-11-07 00:00:00','Salario não corresponde ao combinado','anonimo',NULL),(33,NULL,'Boa tarde, sempre que tiro ferias não consigo gozar por completo os meus direitos, sou sempreimpedido.','2023-11-07 00:00:00','Ferias no trabalho','anonimo',NULL),(34,NULL,'sasssss','2023-11-07 00:00:00','Mais1','anonimo',NULL),(35,NULL,'wsdsdsdsd','2023-11-08 00:00:00','Vamos ver1','normal',NULL),(42,NULL,'Bom dia, podem por favor ajudar nesta questão. O salário combinado no contrato não é o que recebo.','2024-01-09 00:00:00','Salario não corresponde ao combinado','anonimo',NULL),(43,NULL,'Bom dia, podem por favor ajudar nesta questão. O salário combinado no contrato não é o que recebo.','2024-01-09 00:00:00','Salario não corresponde ao combinado','anonimo',NULL),(44,NULL,'Bom dia, podem por favor ajudar nesta questão. O salário combinado no contrato não é o que recebo.','2024-01-09 00:00:00','Salario não corresponde ao combinado','anonimo',NULL),(45,125,'Bom dia, podem por favor ajudar nesta questão. O salário combinado no contrato não é o que recebo.','2024-01-09 00:00:00','Salario não corresponde ao combinado','anonimo',NULL),(46,125,'Bom dia, podem por favor ajudar nesta questão. O salário combinado no contrato não é o que recebo.','2024-01-09 00:00:00','Salario não corresponde ao combinado','anonimo',NULL),(47,145,'sdsd','2024-01-30 00:00:00','sods','normal',NULL),(48,145,'sdsd','2024-01-30 00:00:00','sods','normal',NULL),(49,145,'sdsd','2024-01-30 00:00:00','sods','normal',NULL),(50,145,'sdsd','2024-01-30 00:00:00','sods','normal',NULL),(51,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(52,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(53,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(54,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(55,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(56,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(57,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(58,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(59,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(60,145,'sdsd','2024-02-01 00:00:00','sods','normal',NULL),(61,145,'ssss','2024-02-01 00:00:00','sods01','anonimo',NULL),(62,145,'ssss','2024-02-01 00:00:00','sods01','anonimo',NULL),(63,145,'ssss09','2024-02-01 00:00:00','sods01','anonimo',NULL),(64,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(65,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(66,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(67,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(68,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(69,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(70,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(71,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(72,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(73,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(74,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(75,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(76,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(77,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(78,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(79,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(80,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(81,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(82,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(83,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(84,145,'ssss091','2024-02-01 00:00:00','sods01','anonimo',NULL),(85,145,'ssss091','2024-02-02 00:00:00','sods01','anonimo',NULL),(86,145,'ssss091','2024-02-02 00:00:00','sods01','anonimo',NULL),(87,145,'ssss091','2024-02-02 00:00:00','sods01','anonimo',NULL),(88,145,'ssss091','2024-02-02 00:00:00','sods01','anonimo',NULL),(89,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(90,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(91,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(92,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(93,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(94,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(95,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(96,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(97,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(98,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(99,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(100,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(101,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(102,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(103,145,'ssss091','2024-02-03 00:00:00','sods01','anonimo',NULL),(104,145,'ssss091','2024-02-03 00:00:00','sods015','anonimo',NULL),(105,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(106,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(107,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(108,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(109,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(110,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(111,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(112,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(113,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(114,145,'ssss091','2024-02-03 00:00:00','sods015','normal',NULL),(115,151,'Empresa sem bonus sem benefício ','2024-03-26 00:00:00','Bonus','normal',NULL),(116,151,'Empresa sem bonus sem benefício ','2024-03-26 00:00:00','Bonus','normal',NULL),(117,151,'Empresa sem bonus sem benefício ','2024-03-26 00:00:00','Bonusss','normal',NULL),(118,151,'Empresa sem bonus sem benefício ','2024-03-27 00:00:00','Bonus','anonimo',NULL),(119,154,'mais1','2024-03-27 00:00:00','mais1','normal',NULL),(120,138,'teste2','2024-04-02 00:00:00','teste2','normal',NULL),(121,138,'teste2','2024-04-23 00:00:00','teste23','anonimo',NULL),(122,138,'teste2','2024-04-23 00:00:00','teste23g','anonimo',NULL),(123,138,'teste2v','2024-04-23 00:00:00','teste23g','normal',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inspector`
--

LOCK TABLES `inspector` WRITE;
/*!40000 ALTER TABLE `inspector` DISABLE KEYS */;
INSERT INTO `inspector` VALUES (14,147),(16,158),(17,159);
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nota`
--

LOCK TABLES `nota` WRITE;
/*!40000 ALTER TABLE `nota` DISABLE KEYS */;
INSERT INTO `nota` VALUES (1,104,'nota1'),(2,104,'nota2'),(3,104,'nota3'),(4,104,'no'),(5,104,'2'),(6,104,'26'),(7,104,'263'),(8,104,' 99'),(9,104,'a'),(10,132,'suds'),(11,132,' sdsdsd'),(12,149,'k'),(13,154,'j');
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noticia`
--

LOCK TABLES `noticia` WRITE;
/*!40000 ALTER TABLE `noticia` DISABLE KEYS */;
INSERT INTO `noticia` VALUES (1,'Diretor de Cooperação participa na sessão de abertura da formação “Normas Internacionais do Trabalho” da OIT','O Diretor de Cooperação do Secretariado Executivo da Comunidade dos Países de Língua Portuguesa (CPLP), Manuel Clarote Lapão, participou na sessão de abertura da formação “Normas Internacionais do Trabalho”, no dia 12 de outubro de 2022.',NULL,'2022-10-12',NULL,'destaque');
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
) ENGINE=InnoDB AUTO_INCREMENT=271 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
INSERT INTO `pessoa` VALUES (235,'Nenhum','Nenhum',NULL,NULL,NULL,NULL,NULL,NULL,481,NULL,NULL),(246,'Eduardo ','Kiassucmuca',NULL,NULL,NULL,NULL,NULL,NULL,492,NULL,NULL),(247,'Manuel','Gomes',NULL,NULL,NULL,NULL,NULL,NULL,493,NULL,NULL),(248,'Nelson','Kiassucumuca',NULL,NULL,NULL,NULL,NULL,NULL,494,NULL,NULL),(249,'Lucy','Kiassucumuca',NULL,NULL,NULL,NULL,NULL,NULL,495,NULL,NULL),(250,'Fernando','Kiassucumuca',NULL,NULL,NULL,NULL,NULL,NULL,496,NULL,NULL),(252,'Anderson Matilde','Kiole',NULL,NULL,NULL,NULL,NULL,NULL,498,NULL,NULL),(255,'Marcio Cristiano','Da Silva','df','lulul','Angola','Masculino','1.23',300,503,'Solteiro','Invalid date'),(259,'Silva','Silvano','b','NovaEmpresa2','c2','Feminino','1.87',304,509,'Solteiro','2022-10-07 00:00:00'),(260,'Cris','iu','o','B','Angola','Masculino','1.23',305,510,'Solteiro','2022-10-07 00:00:00'),(261,'Levanta','Kiole','Gomes','dd','Angola','Feminino','1.23',306,512,'Viuvo','2022-10-07 00:00:00'),(262,'Manuel','iu','vamo3','vamo3','vamo3','Masculino','1.87',307,514,'Solteiro','2021-10-07 00:00:00'),(263,'lll','lklk','B','Engracia','Angola','Masculino','1.23',308,516,'Solteiro','2014-10-07 00:00:00'),(264,'lll','lklk','B','Engracia','Angola','Masculino','1.23',309,517,'Solteiro','2014-10-07 00:00:00'),(265,'lll','lklk','B','Engracia','Angola','Masculino','1.23',310,518,'Solteiro','2014-10-07 00:00:00'),(266,'João','Costa','t','t','Angola','Masculino','1.23',311,519,'Casado','2006-10-14 00:00:00'),(267,'t','t','t','t','Luanda','Masculino','1.23',312,521,'Casado','2022-09-14 00:00:00'),(268,'teste1','teste1','teste1','teste1','teste1','Masculino','1.2',313,523,'Solteiro','1996-12-30 00:00:00'),(269,'teste2','teste2','teste2','teste2','teste2','Masculino','1.26',314,525,'Solteiro','2024-01-17 00:00:00'),(270,'mais','mais','mais','mais','mais','Feminino','2.3',315,528,'Solteiro','2024-01-05 00:00:00');
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
  `url_file_acta` varchar(1045) DEFAULT NULL,
  `multa` double DEFAULT NULL,
  `obs` varchar(1045) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `recepcionistaID` (`recepcionistaID`),
  KEY `chefeServicosID` (`chefeServicosID`),
  KEY `queixa_ibfk_1` (`empresaID`),
  KEY `queixa_ibfk_2` (`trabalhadorID`),
  CONSTRAINT `queixa_ibfk_1` FOREIGN KEY (`empresaID`) REFERENCES `empresa` (`id`),
  CONSTRAINT `queixa_ibfk_2` FOREIGN KEY (`trabalhadorID`) REFERENCES `trabalhador` (`id`),
  CONSTRAINT `queixa_ibfk_3` FOREIGN KEY (`recepcionistaID`) REFERENCES `recepcionista` (`id`),
  CONSTRAINT `queixa_ibfk_5` FOREIGN KEY (`chefeServicosID`) REFERENCES `chefeservicos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `queixa`
--

LOCK TABLES `queixa` WRITE;
/*!40000 ALTER TABLE `queixa` DISABLE KEYS */;
INSERT INTO `queixa` VALUES (125,'Salario não corresponde ao combinado','Bom dia, podem por favor ajudar nesta questão. O salário combinado no contrato não é o que recebo.','2023-11-07 22:31:28','2023-11-07 22:31:28','166','141',141,166,NULL,14,NULL,'l2.pdf','Luanda','anonimo','Aberto',4,NULL,NULL,NULL,''),(126,'Ferias no trabalho','Boa tarde, sempre que tiro ferias não consigo gozar por completo os meus direitos, sou sempre impedido.','2023-11-07 22:47:29','2023-11-07 22:47:29','166','141',141,166,NULL,14,NULL,'uploads\\1699397249136-CIRURG â VOL 1 Trauma.pdf','Luanda','anonimo','Aberto',4,NULL,NULL,NULL,''),(128,'Mais1','sasssss3','2023-11-07 22:53:23','2023-11-07 22:53:23','166','142',142,166,NULL,14,NULL,'uploads\\1699397603264-ENDOCR â VOL 2 DoenÃ§as da Suprarrenal_ DoenÃ§as da Paratireoide_ DoenÃ§as da HipÃ³fise e HipotÃ¡lamo.pdf','Luanda','normal','Aberto',4,NULL,NULL,NULL,''),(129,'Mais2','kjhhh','2023-11-07 23:14:00','2023-11-07 23:14:00','170','142',142,170,NULL,14,NULL,'uploads\\1699398839128-CARDIO â VOL 4 DoenÃ§a Coronariana.pdf','Luanda','normal','Aberto',4,NULL,NULL,NULL,''),(130,'Vamos ver10','wsdsdsdsd','2023-11-07 23:24:58','2023-11-07 23:24:58','171','143',143,171,NULL,17,NULL,'uploads\\1699399496622-CARDIO â VOL 4 DoenÃ§a Coronariana.pdf','Benguela','normal','Analise',8,NULL,'uploads\\1700777869685-CIRURG â VOL 2 Preparo PrÃ©-operatÃ³rio, ComplicaÃ§Ãµes em Cirurgia, PrincÃ­pios de Anestesia, HÃ©rnias da Parede Abdominal.pdf',NULL,''),(131,'b','kugg','2023-11-07 23:33:18','2023-11-07 23:33:18','144','172',144,172,NULL,16,NULL,'uploads\\1699399996526-CIRURG â VOL 3 Resposta EndÃ³crina e ImunolÃ³gica ao Trauma, Queimaduras, CicatrizaÃ§Ã£o de Feridas, Choque, Suporte Nutricional, Cirurgia PlÃ¡stica.pdf','Benguela','normal','Aberto',8,NULL,'uploads\\1700777173973-CIRURG â VOL 1 Trauma.pdf',NULL,''),(132,'Meu assunto11','sdsdsd','2023-11-07 23:41:51','2023-11-07 23:41:51','145','173',145,173,NULL,17,NULL,'uploads\\1699400508534-DERMATO - AnÃ¡tomo-histologia e LesÃµes Elementares_ DÃ§s InfectoparasitÃ¡rias da Pele_ Dermatoses InflamatÃ³rias_ Oncologia DermatolÃ³gica.pdf','Benguela','normal','Encerrado',9,NULL,'Actividades de grande vulto 2024.docx',1500,''),(133,'dd','ddddd','2023-11-07 23:57:31','2023-11-07 23:57:31','141','176',141,176,NULL,14,NULL,'uploads\\1699401448891-CIRURG â VOL 2 Preparo PrÃ©-operatÃ³rio, ComplicaÃ§Ãµes em Cirurgia, PrincÃ­pios de Anestesia, HÃ©rnias da Parede Abdominal.pdf','Luanda','normal','Aberto',4,NULL,NULL,NULL,''),(134,'Sem Subsidio de ferias','','2023-11-15 09:05:49','2023-11-15 09:05:49','177','146',146,177,NULL,14,NULL,'uploads\\1700039147182-CARDIO â VOL 4 DoenÃ§a Coronariana.pdf','Luanda','anonimo','Aberto',4,NULL,NULL,NULL,''),(135,'xpto','xpto','2023-11-15 09:38:39','2023-11-15 09:38:39','147','178',147,178,NULL,14,NULL,'uploads\\1700041118049-CIRURG â VOL 1 Trauma.pdf','Luanda','normal','Aberto',4,NULL,NULL,NULL,''),(136,'novinho','novinho1','2023-11-29 22:00:12','2023-11-29 22:00:12','166','141',141,166,NULL,14,NULL,'uploads\\gonorreia.pdf','Luanda','normal','Aberto',4,NULL,NULL,NULL,''),(137,'teste1','teste1','2024-01-22 19:49:32','2024-01-22 19:49:32','179','148',148,179,NULL,14,NULL,'uploads/Hernania Ferreira  2024(1).pdf','Luanda','anonimo','Aberto',4,NULL,NULL,NULL,''),(138,'teste23g','teste2v','2024-01-24 22:17:32','2024-01-24 22:17:32','180','149',149,180,NULL,14,NULL,'DOSSIÃ DA FEIRA FAVOR DA SAÃDE PREVENTIVA.docx','Luanda','normal','Aberto',4,NULL,'Actividades de grande vulto 2024.docx',NULL,''),(139,'outra1','outra1','2024-01-25 19:20:51','2024-01-25 19:20:51','180','150',150,180,NULL,14,NULL,'uploads/laurÃ­ssea Campos  2024(1).pdf','Luanda','anonimo','Aberto',4,NULL,NULL,NULL,''),(140,'outra2','outra2','2024-01-25 19:32:35','2024-01-25 19:32:35','180','150',150,180,NULL,14,NULL,'uploads/Selton Barros 2023 (1).docx','Luanda','normal','Aberto',4,NULL,NULL,NULL,''),(141,'mais','mais','2024-01-25 21:30:53','2024-01-25 21:30:53','151','181',151,181,NULL,14,NULL,'uploads/l2.pdf','Benguela','normal','Aberto',4,NULL,NULL,NULL,''),(142,'jjk','kjjk','2024-01-26 22:27:50','2024-01-26 22:27:50','179','143',143,179,NULL,14,NULL,'uploads/Manual de OrientaÃ§Ã£o - VD.pdf','Benguela','normal','Aberto',4,NULL,NULL,NULL,''),(143,'jj','j','2024-01-26 22:30:47','2024-01-26 22:30:47','179','144',144,179,NULL,14,NULL,'uploads/l2.pdf','Benguela','normal','Aberto',4,NULL,NULL,NULL,''),(144,'teste3','rf','2024-01-26 22:32:24','2024-01-26 22:32:24','179','145',145,179,NULL,14,NULL,'l2.pdf','Benguela','normal','Aberto',4,NULL,NULL,NULL,''),(145,'sods0159','ssss0918','2024-01-26 22:38:47','2024-01-26 22:38:47','180','144',144,180,NULL,14,NULL,'Angola Effective currency value.xlsx','Benguela','anonimo','Analise',9,NULL,NULL,NULL,''),(146,'jaj',',Jill','2024-02-12 22:36:12','2024-02-12 22:36:12','180','142',142,180,NULL,14,NULL,'l2.pdf','Luanda','normal','Aberto',4,NULL,NULL,NULL,''),(147,'df','df','2024-02-12 22:38:52','2024-02-12 22:38:52','180','141',141,180,NULL,14,NULL,'Acta numero1 da primeira reuniÃ£o do corpo directivo.docx','Luanda','normal','Aberto',4,NULL,NULL,NULL,''),(148,'sods','sdsd','2024-02-12 22:47:49','2024-02-12 22:47:49','180','142',142,180,NULL,14,NULL,'Hernania Ferreira  2024(1).pdf','Luanda','normal','Aberto',4,NULL,NULL,NULL,''),(149,'hkjk','obj','2024-02-14 19:00:35','2024-02-14 19:00:35','151','181',151,181,NULL,17,NULL,'Acta numero1 da primeira reuniÃ£o do corpo directivo.docx','Benguela','normal','Analise',8,NULL,'Actividades de grande vulto 2024.docx',NULL,''),(150,'Bonus','Sem Bonus em empresa sem margem de crescimento','2024-03-26 19:08:57','2024-03-26 19:08:57','181','141',141,181,NULL,14,NULL,'Convite.pdf','Luanda','normal','Aberto',4,NULL,NULL,NULL,NULL),(151,'Bonus','Empresa sem bonus sem benefício ','2024-03-26 19:14:14','2024-03-26 19:14:14','180','152',152,180,NULL,14,NULL,'Acta numero1 da primeira reuniÃÂ£o do corpo directivo.docx','Benguela','anonimo','Aberto',4,NULL,NULL,NULL,NULL),(152,'b','b','2024-03-26 19:27:56','2024-03-26 19:27:56','180','142',142,180,NULL,14,NULL,'Actividades de grande vulto 2024.docx','Luanda','normal','Aberto',4,NULL,NULL,NULL,NULL),(153,'n','n','2024-03-26 20:50:54','2024-03-26 20:50:54','153','181',153,181,NULL,14,NULL,'C.pdf','Benguela','normal','Aberto',4,NULL,NULL,NULL,NULL),(154,'mais1skdksjd','mais1','2024-03-26 20:57:44','2024-03-26 20:57:44','180','143',143,180,NULL,17,NULL,'Actividades de grande vulto 2024.pdf','Benguela','normal','Analise',8,NULL,NULL,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reuniao`
--

LOCK TABLES `reuniao` WRITE;
/*!40000 ALTER TABLE `reuniao` DISABLE KEYS */;
INSERT INTO `reuniao` VALUES (5,'teste','teste','2023-12-12','12:12:00','agendada',125,NULL,NULL,166,'nenhuma'),(6,'teste2','teste2','2023-12-24','13:13:00','agndada',125,NULL,NULL,167,'nenhuma'),(7,'asas','asas','2024-02-28','12:22:00',NULL,149,NULL,151,NULL,'sands'),(8,'sdsdsds','sdsdsd','2024-02-21','13:00:00','1',149,181,NULL,NULL,'dxdx'),(9,'','jk','2024-02-10','09:30:00',NULL,149,NULL,151,NULL,''),(10,'','jk','2024-02-10','09:30:00','2',149,NULL,151,NULL,'jk'),(11,'dfdf','df','2024-02-24','04:23:00','4',149,NULL,151,NULL,'scud'),(12,'cd','dc','2024-02-25','23:22:00','1',149,181,NULL,NULL,'ddd'),(13,'sssh','ss','2024-04-20','12:22:00','3',149,NULL,151,NULL,'ss'),(14,'kjwe','jkas','2024-04-12','12:11:00','3',149,181,NULL,NULL,'mn'),(15,'as','as','2024-04-21','22:22:00','1',154,NULL,143,NULL,'sa'),(16,'as','as','2024-04-21','22:22:00','1',154,NULL,143,NULL,'sa');
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
) ENGINE=InnoDB AUTO_INCREMENT=182 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabalhador`
--

LOCK TABLES `trabalhador` WRITE;
/*!40000 ALTER TABLE `trabalhador` DISABLE KEYS */;
INSERT INTO `trabalhador` VALUES (147,'Inspector','Inspecção','Luanda','igt',235,133),(158,'Inspector','Inspecção','Benguela','igt',246,144),(159,'Inspector','Inspecção','Luanda','igt',247,145),(160,'Recepcionista','Administração','Benguela','igt',248,146),(161,'Recepcionista','Administração','Luanda','igt',249,147),(162,'chefe_servicos','Chefe','Benguela','igt',250,148),(164,'chefe_servicos','Chefe','Luanda','igt',252,150),(166,'Engnheiro Informatico','DTI','Luanda','queixoso',255,152),(170,'ccv','Master','Luanda','queixoso',259,156),(171,'Assistente de recursos humanos','NovaEmpresa','Benguela','queixoso',260,157),(172,'Engnheiro','Vendas','Benguela','queixante',261,0),(173,'xfd','dfdf','Benguela','queixante',262,0),(174,'zsd','sds','Luanda','queixamte',263,0),(175,'zsd','sds','Luanda','queixante',264,0),(176,'zsd','sds','Luanda','queixante',265,0),(177,'Engenheiro','Engenharia','Luanda','queixoso',266,160),(178,'r','r','Luanda','queixante',267,0),(179,'teste1','teste1','Luanda','queixoso',268,162),(180,'teste2','teste2','Luanda','queixoso',269,163),(181,'tester','mais','Benguela','queixante',270,0);
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

-- Dump completed on 2024-04-30  7:13:00
