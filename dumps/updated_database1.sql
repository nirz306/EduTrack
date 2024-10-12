-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: mini_project
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance` (
  `attendanceId` int NOT NULL AUTO_INCREMENT,
  `rollNo` int DEFAULT NULL,
  `subjectId` int DEFAULT NULL,
  `attendanceDate` date DEFAULT NULL,
  `status` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`attendanceId`),
  KEY `studentId_idx` (`rollNo`),
  KEY `subjectid_idx` (`subjectId`),
  CONSTRAINT `subjectid` FOREIGN KEY (`subjectId`) REFERENCES `subjects` (`subjectId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=208 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
INSERT INTO `attendance` VALUES (1,31101,1,'2024-08-01','P'),(2,31101,2,'2024-08-01','A'),(3,31101,3,'2024-08-01','P'),(4,31101,4,'2024-08-01','A'),(5,31101,5,'2024-08-01','P'),(6,31102,2,'2024-08-01','P'),(7,31102,3,'2024-08-01','P'),(8,31102,4,'2024-08-01','P'),(9,31102,5,'2024-08-01','P'),(10,31102,1,'2024-08-01','P'),(11,31101,1,'2024-08-02','P'),(12,31101,2,'2024-08-02','A'),(13,31101,3,'2024-08-02','P'),(14,31101,4,'2024-08-02','A'),(15,31101,5,'2024-08-02','P'),(18,31103,1,'2024-08-01','P'),(19,31103,2,'2024-08-01','P'),(20,31103,3,'2024-08-01','A'),(21,31103,4,'2024-08-01','P'),(22,31103,5,'2024-08-01','P'),(23,31104,1,'2024-08-01','A'),(24,31104,2,'2024-08-01','P'),(25,31104,3,'2024-08-01','P'),(26,31104,4,'2024-08-01','P'),(27,31104,5,'2024-08-01','P'),(28,31105,1,'2024-08-01','P'),(29,31105,2,'2024-08-01','P'),(30,31105,3,'2024-08-01','A'),(31,31105,4,'2024-08-01','P'),(32,31105,5,'2024-08-01','A'),(33,31103,1,'2024-08-02','P'),(34,31103,2,'2024-08-02','P'),(35,31103,3,'2024-08-02','P'),(36,31103,4,'2024-08-02','A'),(37,31103,5,'2024-08-02','P'),(38,31104,1,'2024-08-02','P'),(39,31104,2,'2024-08-02','A'),(40,31104,3,'2024-08-02','P'),(41,31104,4,'2024-08-02','P'),(42,31104,5,'2024-08-02','P'),(43,31105,1,'2024-08-02','A'),(44,31105,2,'2024-08-02','P'),(45,31105,3,'2024-08-02','P'),(46,31105,4,'2024-08-02','A'),(47,31105,5,'2024-08-02','P'),(48,31115,3,'2024-08-01','P'),(49,31115,4,'2024-08-01','P'),(50,31115,5,'2024-08-01','A'),(51,31116,1,'2024-08-01','P'),(52,31116,2,'2024-08-01','P'),(53,31116,3,'2024-08-01','A'),(54,31116,4,'2024-08-01','P'),(55,31116,5,'2024-08-01','P'),(56,31117,1,'2024-08-01','P'),(57,31117,2,'2024-08-01','A'),(58,31117,3,'2024-08-01','P'),(59,31117,4,'2024-08-01','P'),(60,31117,5,'2024-08-01','A'),(61,31118,1,'2024-08-01','P'),(62,31118,2,'2024-08-01','P'),(63,31118,3,'2024-08-01','A'),(64,31118,4,'2024-08-01','P'),(65,31118,5,'2024-08-01','P'),(66,31118,1,'2024-08-01','A'),(67,31119,2,'2024-08-01','P'),(68,31119,3,'2024-08-01','P'),(69,31119,4,'2024-08-01','A'),(70,31119,5,'2024-08-01','P'),(71,31120,1,'2024-08-01','P'),(72,31120,2,'2024-08-01','A'),(73,31120,3,'2024-08-01','P'),(74,31120,4,'2024-08-01','P'),(75,31120,5,'2024-08-01','A'),(76,31106,1,'2024-08-02','P'),(77,31106,2,'2024-08-02','P'),(78,31106,3,'2024-08-02','P'),(79,31106,4,'2024-08-02','P'),(80,31106,5,'2024-08-02','A'),(81,31107,1,'2024-08-02','P'),(82,31107,2,'2024-08-02','P'),(83,31107,3,'2024-08-02','A'),(84,31107,4,'2024-08-02','P'),(85,31107,5,'2024-08-02','P'),(86,31108,1,'2024-08-02','A'),(87,31108,2,'2024-08-02','P'),(88,31108,3,'2024-08-02','P'),(89,31108,4,'2024-08-02','P'),(90,31108,5,'2024-08-02','A'),(91,31109,1,'2024-08-02','P'),(92,31109,2,'2024-08-02','A'),(93,31109,3,'2024-08-02','P'),(94,31109,4,'2024-08-02','P'),(95,31109,5,'2024-08-02','A'),(96,31110,1,'2024-08-02','P'),(97,31110,2,'2024-08-02','P'),(98,31110,3,'2024-08-02','A'),(99,31110,4,'2024-08-02','P'),(100,31110,5,'2024-08-02','P'),(101,31111,1,'2024-08-02','P'),(102,31111,2,'2024-08-02','P'),(103,31111,3,'2024-08-02','P'),(104,31111,4,'2024-08-02','A'),(105,31111,5,'2024-08-02','P'),(106,31112,1,'2024-08-02','A'),(107,31112,2,'2024-08-02','P'),(108,31112,3,'2024-08-02','P'),(109,31112,4,'2024-08-02','P'),(110,31112,5,'2024-08-02','A'),(111,31113,1,'2024-08-02','P'),(112,31113,2,'2024-08-02','A'),(113,31113,3,'2024-08-02','P'),(114,31113,4,'2024-08-02','P'),(115,31113,5,'2024-08-02','A'),(116,31114,1,'2024-08-02','P'),(117,31114,2,'2024-08-02','P'),(118,31114,3,'2024-08-02','A'),(119,31114,4,'2024-08-02','P'),(120,31114,5,'2024-08-02','P'),(121,31115,1,'2024-08-02','A'),(122,31115,2,'2024-08-02','P'),(123,31115,3,'2024-08-02','P'),(124,31115,4,'2024-08-02','P'),(125,31115,5,'2024-08-02','A'),(126,31116,1,'2024-08-02','P'),(127,31116,2,'2024-08-02','P'),(128,31116,3,'2024-08-02','A'),(129,31116,4,'2024-08-02','P'),(130,31116,5,'2024-08-02','P'),(131,31117,1,'2024-08-02','P'),(132,31117,2,'2024-08-02','A'),(133,31117,3,'2024-08-02','P'),(134,31117,4,'2024-08-02','P'),(135,31117,5,'2024-08-02','A'),(136,31118,1,'2024-08-02','P'),(137,31118,2,'2024-08-02','P'),(138,31118,3,'2024-08-02','A'),(139,31118,4,'2024-08-02','P'),(140,31118,5,'2024-08-02','P'),(141,31119,1,'2024-08-02','A'),(142,31119,2,'2024-08-02','P'),(143,31119,3,'2024-08-02','P'),(144,31119,4,'2024-08-02','A'),(145,31119,5,'2024-08-02','P'),(146,31120,1,'2024-08-02','P'),(147,31120,2,'2024-08-02','P'),(148,31120,3,'2024-08-02','A'),(149,31120,4,'2024-08-02','P'),(150,31120,5,'2024-08-02','P'),(155,31102,1,'2024-08-02','P'),(156,31102,2,'2024-08-02','P'),(157,31102,3,'2024-08-02','P'),(158,31102,4,'2024-08-02','A'),(159,31102,5,'2024-08-02','P'),(160,31115,1,'2024-08-01','P'),(161,31115,2,'2024-08-01','A'),(162,31114,1,'2024-08-01','P'),(163,31114,2,'2024-08-01','P'),(164,31114,3,'2024-08-01','A'),(165,31113,1,'2024-08-01','P'),(166,31113,2,'2024-08-01','P'),(167,31113,3,'2024-08-01','A'),(168,31113,4,'2024-08-01','P'),(169,31113,5,'2024-08-01','P'),(170,31112,1,'2024-08-01','P'),(171,31112,2,'2024-08-01','A'),(172,31112,3,'2024-08-01','P'),(173,31112,4,'2024-08-01','P'),(174,31112,5,'2024-08-01','P'),(175,31111,1,'2024-08-01','P'),(176,31111,2,'2024-08-01','P'),(177,31111,3,'2024-08-01','A'),(178,31111,4,'2024-08-01','P'),(179,31111,5,'2024-08-01','A'),(180,31110,1,'2024-08-01','P'),(181,31110,2,'2024-08-01','P'),(182,31110,3,'2024-08-01','A'),(183,31110,4,'2024-08-01','P'),(184,31110,5,'2024-08-01','A'),(185,31109,1,'2024-08-01','A'),(186,31109,2,'2024-08-01','P'),(187,31109,3,'2024-08-01','P'),(188,31109,4,'2024-08-01','A'),(189,31109,5,'2024-08-01','P'),(190,31108,1,'2024-08-01','P'),(191,31108,2,'2024-08-01','A'),(192,31108,3,'2024-08-01','P'),(193,31108,4,'2024-08-01','P'),(194,31108,5,'2024-08-01','A'),(195,31107,1,'2024-08-01','P'),(196,31107,2,'2024-08-01','A'),(197,31107,3,'2024-08-01','P'),(198,31107,4,'2024-08-01','A'),(199,31107,5,'2024-08-01','P'),(200,31106,1,'2024-08-01','P'),(201,31106,2,'2024-08-01','P'),(202,31106,3,'2024-08-01','A'),(203,31106,4,'2024-08-01','P'),(204,31106,5,'2024-08-01','A'),(205,31114,4,'2024-08-01','P'),(206,31114,5,'2024-08-01','P'),(207,31119,1,'2024-08-01','P');
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `name` varchar(20) NOT NULL,
  `rollNo` int NOT NULL,
  `email` varchar(20) NOT NULL,
  PRIMARY KEY (`rollNo`),
  UNIQUE KEY `rollno_UNIQUE` (`rollNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('Alice',31101,'alice@gmail.com'),('Bob',31102,'bob@gmail.com'),('Charlie',31103,'charlie@gmail.com'),('Diana',31104,'diana@gmail.com'),('Eve',31105,'eve@gmail.com'),('Flora',31106,'flora@gmail.com'),('George',31107,'george@gmail.com'),('Hannah',31108,'hannah@gmail.com'),('Ian',31109,'ian@gmail.com'),('Judy',31110,'judy@gmail.com'),('Kevin',31111,'kevin@gmail.com'),('Laura',31112,'laura@gmail.com'),('Mike',31113,'mike@gmail.com'),('Nina',31114,'nina@gmail.com'),('Oscar',31115,'oscar@gmail.com'),('Paula',31116,'paula@gmail.com'),('Quinn',31117,'quinn@gmail.com'),('Ryan',31118,'ryan@gmail.com'),('Sophie',31119,'sophie@gmail.com'),('Tom',31120,'tom@gmail.com');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
  `subjectId` int NOT NULL AUTO_INCREMENT,
  `subjectName` varchar(20) NOT NULL,
  PRIMARY KEY (`subjectId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'DBMS'),(2,'TOC'),(3,'CNS'),(4,'SPOS'),(5,'HCI');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `view2`
--

DROP TABLE IF EXISTS `view2`;
/*!50001 DROP VIEW IF EXISTS `view2`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view2` AS SELECT 
 1 AS `attendanceDate`,
 1 AS `31101`,
 1 AS `31102`,
 1 AS `31103`,
 1 AS `31104`,
 1 AS `31105`,
 1 AS `31106`,
 1 AS `31107`,
 1 AS `31108`,
 1 AS `31109`,
 1 AS `31110`,
 1 AS `31111`,
 1 AS `31112`,
 1 AS `31113`,
 1 AS `31114`,
 1 AS `31115`,
 1 AS `31116`,
 1 AS `31117`,
 1 AS `31118`,
 1 AS `31119`,
 1 AS `31120`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'mini_project'
--

--
-- Final view structure for view `view2`
--

/*!50001 DROP VIEW IF EXISTS `view2`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view2` AS select `a`.`attendanceDate` AS `attendanceDate`,max((case when (`s`.`rollNo` = 31101) then `a`.`status` end)) AS `31101`,max((case when (`s`.`rollNo` = 31102) then `a`.`status` end)) AS `31102`,max((case when (`s`.`rollNo` = 31103) then `a`.`status` end)) AS `31103`,max((case when (`s`.`rollNo` = 31104) then `a`.`status` end)) AS `31104`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31105`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31106`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31107`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31108`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31109`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31110`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31111`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31112`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31113`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31114`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31115`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31116`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31117`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31118`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31119`,max((case when (`s`.`rollNo` = 31105) then `a`.`status` end)) AS `31120` from ((`attendance` `a` join `subjects` `sub` on((`a`.`subjectId` = `sub`.`subjectId`))) join `student` `s` on((`a`.`rollNo` = `s`.`rollNo`))) where (`sub`.`subjectName` = 'CNS') group by `a`.`attendanceDate` order by `a`.`attendanceDate` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-12 13:21:34
