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
  `studentId` int DEFAULT NULL,
  `subjectId` int DEFAULT NULL,
  `attendanceDate` date DEFAULT NULL,
  `status` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`attendanceId`),
  KEY `studentId_idx` (`studentId`),
  KEY `subjectid_idx` (`subjectId`),
  CONSTRAINT `studentId` FOREIGN KEY (`studentId`) REFERENCES `student` (`studentId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `subjectid` FOREIGN KEY (`subjectId`) REFERENCES `subjects` (`subjectId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=160 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
INSERT INTO `attendance` VALUES (1,1,1,'2024-08-01','P'),(2,1,2,'2024-08-01','A'),(3,1,3,'2024-08-01','P'),(4,1,4,'2024-08-01','A'),(5,1,5,'2024-08-01','P'),(6,2,2,'2024-08-01','P'),(7,2,3,'2024-08-01','P'),(8,2,4,'2024-08-01','P'),(9,2,5,'2024-08-01','P'),(10,2,1,'2024-08-01','P'),(11,1,1,'2024-08-02','P'),(12,1,2,'2024-08-02','A'),(13,1,3,'2024-08-02','P'),(14,1,4,'2024-08-02','A'),(15,1,5,'2024-08-02','P'),(18,3,1,'2024-08-01','P'),(19,3,2,'2024-08-01','P'),(20,3,3,'2024-08-01','A'),(21,3,4,'2024-08-01','P'),(22,3,5,'2024-08-01','P'),(23,4,1,'2024-08-01','A'),(24,4,2,'2024-08-01','P'),(25,4,3,'2024-08-01','P'),(26,4,4,'2024-08-01','P'),(27,4,5,'2024-08-01','P'),(28,5,1,'2024-08-01','P'),(29,5,2,'2024-08-01','P'),(30,5,3,'2024-08-01','A'),(31,5,4,'2024-08-01','P'),(32,5,5,'2024-08-01','A'),(33,3,1,'2024-08-02','P'),(34,3,2,'2024-08-02','P'),(35,3,3,'2024-08-02','P'),(36,3,4,'2024-08-02','A'),(37,3,5,'2024-08-02','P'),(38,4,1,'2024-08-02','P'),(39,4,2,'2024-08-02','A'),(40,4,3,'2024-08-02','P'),(41,4,4,'2024-08-02','P'),(42,4,5,'2024-08-02','P'),(43,5,1,'2024-08-02','A'),(44,5,2,'2024-08-02','P'),(45,5,3,'2024-08-02','P'),(46,5,4,'2024-08-02','A'),(47,5,5,'2024-08-02','P'),(48,15,3,'2024-08-01','P'),(49,15,4,'2024-08-01','P'),(50,15,5,'2024-08-01','A'),(51,16,1,'2024-08-01','P'),(52,16,2,'2024-08-01','P'),(53,16,3,'2024-08-01','A'),(54,16,4,'2024-08-01','P'),(55,16,5,'2024-08-01','P'),(56,17,1,'2024-08-01','P'),(57,17,2,'2024-08-01','A'),(58,17,3,'2024-08-01','P'),(59,17,4,'2024-08-01','P'),(60,17,5,'2024-08-01','A'),(61,18,1,'2024-08-01','P'),(62,18,2,'2024-08-01','P'),(63,18,3,'2024-08-01','A'),(64,18,4,'2024-08-01','P'),(65,18,5,'2024-08-01','P'),(66,19,1,'2024-08-01','A'),(67,19,2,'2024-08-01','P'),(68,19,3,'2024-08-01','P'),(69,19,4,'2024-08-01','A'),(70,19,5,'2024-08-01','P'),(71,20,1,'2024-08-01','P'),(72,20,2,'2024-08-01','A'),(73,20,3,'2024-08-01','P'),(74,20,4,'2024-08-01','P'),(75,20,5,'2024-08-01','A'),(76,6,1,'2024-08-02','P'),(77,6,2,'2024-08-02','P'),(78,6,3,'2024-08-02','P'),(79,6,4,'2024-08-02','P'),(80,6,5,'2024-08-02','A'),(81,7,1,'2024-08-02','P'),(82,7,2,'2024-08-02','P'),(83,7,3,'2024-08-02','A'),(84,7,4,'2024-08-02','P'),(85,7,5,'2024-08-02','P'),(86,8,1,'2024-08-02','A'),(87,8,2,'2024-08-02','P'),(88,8,3,'2024-08-02','P'),(89,8,4,'2024-08-02','P'),(90,8,5,'2024-08-02','A'),(91,9,1,'2024-08-02','P'),(92,9,2,'2024-08-02','A'),(93,9,3,'2024-08-02','P'),(94,9,4,'2024-08-02','P'),(95,9,5,'2024-08-02','A'),(96,10,1,'2024-08-02','P'),(97,10,2,'2024-08-02','P'),(98,10,3,'2024-08-02','A'),(99,10,4,'2024-08-02','P'),(100,10,5,'2024-08-02','P'),(101,11,1,'2024-08-02','P'),(102,11,2,'2024-08-02','P'),(103,11,3,'2024-08-02','P'),(104,11,4,'2024-08-02','A'),(105,11,5,'2024-08-02','P'),(106,12,1,'2024-08-02','A'),(107,12,2,'2024-08-02','P'),(108,12,3,'2024-08-02','P'),(109,12,4,'2024-08-02','P'),(110,12,5,'2024-08-02','A'),(111,13,1,'2024-08-02','P'),(112,13,2,'2024-08-02','A'),(113,13,3,'2024-08-02','P'),(114,13,4,'2024-08-02','P'),(115,13,5,'2024-08-02','A'),(116,14,1,'2024-08-02','P'),(117,14,2,'2024-08-02','P'),(118,14,3,'2024-08-02','A'),(119,14,4,'2024-08-02','P'),(120,14,5,'2024-08-02','P'),(121,15,1,'2024-08-02','A'),(122,15,2,'2024-08-02','P'),(123,15,3,'2024-08-02','P'),(124,15,4,'2024-08-02','P'),(125,15,5,'2024-08-02','A'),(126,16,1,'2024-08-02','P'),(127,16,2,'2024-08-02','P'),(128,16,3,'2024-08-02','A'),(129,16,4,'2024-08-02','P'),(130,16,5,'2024-08-02','P'),(131,17,1,'2024-08-02','P'),(132,17,2,'2024-08-02','A'),(133,17,3,'2024-08-02','P'),(134,17,4,'2024-08-02','P'),(135,17,5,'2024-08-02','A'),(136,18,1,'2024-08-02','P'),(137,18,2,'2024-08-02','P'),(138,18,3,'2024-08-02','A'),(139,18,4,'2024-08-02','P'),(140,18,5,'2024-08-02','P'),(141,19,1,'2024-08-02','A'),(142,19,2,'2024-08-02','P'),(143,19,3,'2024-08-02','P'),(144,19,4,'2024-08-02','A'),(145,19,5,'2024-08-02','P'),(146,20,1,'2024-08-02','P'),(147,20,2,'2024-08-02','P'),(148,20,3,'2024-08-02','A'),(149,20,4,'2024-08-02','P'),(150,20,5,'2024-08-02','P'),(155,2,1,'2024-08-02','P'),(156,2,2,'2024-08-02','P'),(157,2,3,'2024-08-02','P'),(158,2,4,'2024-08-02','A'),(159,2,5,'2024-08-02','P');
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `new_view`
--

DROP TABLE IF EXISTS `new_view`;
/*!50001 DROP VIEW IF EXISTS `new_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `new_view` AS SELECT 
 1 AS `name`,
 1 AS `subjectName`,
 1 AS `attendance_percentage`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `studentId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `rollNo` int NOT NULL DEFAULT '0',
  `email` varchar(20) NOT NULL,
  PRIMARY KEY (`studentId`),
  UNIQUE KEY `rollno_UNIQUE` (`rollNo`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'Alice',31101,'alice@gmail.com'),(2,'Bob',31102,'bob@gmail.com'),(3,'Charlie',31103,'charlie@gmail.com'),(4,'Diana',31104,'diana@gmail.com'),(5,'Eve',31105,'eve@gmail.com'),(6,'Flora',31106,'flora@gmail.com'),(7,'George',31107,'george@gmail.com'),(8,'Hannah',31108,'hannah@gmail.com'),(9,'Ian',31109,'ian@gmail.com'),(10,'Judy',31110,'judy@gmail.com'),(11,'Kevin',31111,'kevin@gmail.com'),(12,'Laura',31112,'laura@gmail.com'),(13,'Mike',31113,'mike@gmail.com'),(14,'Nina',31114,'nina@gmail.com'),(15,'Oscar',31115,'oscar@gmail.com'),(16,'Paula',31116,'paula@gmail.com'),(17,'Quinn',31117,'quinn@gmail.com'),(18,'Ryan',31118,'ryan@gmail.com'),(19,'Sophie',31119,'sophie@gmail.com'),(20,'Tom',31120,'tom@gmail.com');
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
-- Final view structure for view `new_view`
--

/*!50001 DROP VIEW IF EXISTS `new_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `new_view` AS select `s`.`name` AS `name`,`sub`.`subjectName` AS `subjectName`,((count((case when (`a`.`status` = 'P') then 1 end)) * 100.0) / count(0)) AS `attendance_percentage` from ((`attendance` `a` join `student` `s` on((`a`.`studentId` = `s`.`studentId`))) join `subjects` `sub` on((`a`.`subjectId` = `sub`.`subjectId`))) where (`s`.`studentId` = 1) group by `s`.`name`,`sub`.`subjectName` */;
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

-- Dump completed on 2024-10-09 23:31:04
