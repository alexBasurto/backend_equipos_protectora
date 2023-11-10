-- MySQL dump 10.13  Distrib 8.0.34, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: biocandb
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `tbBreeds`
--

DROP TABLE IF EXISTS `tbBreeds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbBreeds` (
  `idBreed` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `size` varchar(45) NOT NULL,
  `lifeExpectancy` int NOT NULL,
  PRIMARY KEY (`idBreed`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tbCandidates`
--

DROP TABLE IF EXISTS `tbCandidates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbCandidates` (
  `idCandidate` int NOT NULL AUTO_INCREMENT,
  `name` varchar(120) NOT NULL,
  `lastName` varchar(120) NOT NULL,
  `dni` varchar(9) NOT NULL,
  `yearOfBirth` varchar(45) NOT NULL,
  `comments` varchar(200) DEFAULT NULL,
  `validated` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `idTypeOfHousing` int NOT NULL,
  PRIMARY KEY (`idCandidate`),
  UNIQUE KEY `idCandidates_UNIQUE` (`idCandidate`),
  KEY `fk_tbCandidates_tbTypeOfHousing1_idx` (`idTypeOfHousing`),
  CONSTRAINT `fk_tbCandidates_tbTypeOfHousing1` FOREIGN KEY (`idTypeOfHousing`) REFERENCES `tbTypeOfHousing` (`idTypeOfHousing`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tbDogs`
--

DROP TABLE IF EXISTS `tbDogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbDogs` (
  `idDog` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `color` varchar(45) NOT NULL,
  `size` varchar(12) NOT NULL,
  `photo` varchar(200) DEFAULT NULL,
  `behavior` varchar(45) NOT NULL,
  `yearOfBirth` varchar(45) NOT NULL,
  `comments` varchar(200) DEFAULT NULL,
  `idBreed` int NOT NULL,
  PRIMARY KEY (`idDog`),
  UNIQUE KEY `idDogs_UNIQUE` (`idDog`),
  KEY `fk_tbDogs_tbBreeds_idx` (`idBreed`),
  CONSTRAINT `fk_tbDogs_tbBreeds` FOREIGN KEY (`idBreed`) REFERENCES `tbBreeds` (`idBreed`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tbDogsCandidates`
--

DROP TABLE IF EXISTS `tbDogsCandidates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbDogsCandidates` (
  `idStaff` int NOT NULL,
  `idDog` int NOT NULL,
  `idCandidate` int NOT NULL,
  `adopDate` date NOT NULL,
  `comments` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idStaff`,`idDog`,`idCandidate`),
  KEY `fk_tbDogsCandidates_tbStaff1_idx` (`idStaff`),
  KEY `fk_tbDogsCandidates_tbDogs1_idx` (`idDog`),
  KEY `fk_tbDogsCandidates_tbCandidates1_idx` (`idCandidate`),
  CONSTRAINT `fk_tbDogsCandidates_tbCandidates1` FOREIGN KEY (`idCandidate`) REFERENCES `tbCandidates` (`idCandidate`),
  CONSTRAINT `fk_tbDogsCandidates_tbDogs1` FOREIGN KEY (`idDog`) REFERENCES `tbDogs` (`idDog`),
  CONSTRAINT `fk_tbDogsCandidates_tbStaff1` FOREIGN KEY (`idStaff`) REFERENCES `tbStaff` (`idStaff`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tbStaff`
--

DROP TABLE IF EXISTS `tbStaff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbStaff` (
  `idStaff` int NOT NULL AUTO_INCREMENT,
  `email` varchar(120) NOT NULL,
  `password` varchar(120) NOT NULL,
  `name` varchar(120) NOT NULL,
  `lastName` varchar(120) NOT NULL,
  `rol` varchar(50) NOT NULL DEFAULT 'standardUser',
  `hiringDate` date NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`idStaff`),
  UNIQUE KEY `idStaff_UNIQUE` (`idStaff`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tbTypeOfHousing`
--

DROP TABLE IF EXISTS `tbTypeOfHousing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbTypeOfHousing` (
  `idTypeOfHousing` int NOT NULL AUTO_INCREMENT,
  `TypeOfHousing` varchar(45) NOT NULL,
  PRIMARY KEY (`idTypeOfHousing`),
  UNIQUE KEY `idTypeOfHousing_UNIQUE` (`idTypeOfHousing`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-30 16:51:07