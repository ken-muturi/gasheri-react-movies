-- MySQL dump 10.19  Distrib 10.3.39-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: movies
-- ------------------------------------------------------
-- Server version	10.3.39-MariaDB-0ubuntu0.20.04.2

create DATABASE movies;

use movies;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `firstname` varchar(50) NOT NULL,
  `othernames` varchar(50) NOT NULL,
  `country_id` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp() COMMENT 'Create Time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Christopher','Nolan',1,1,'2024-07-18 17:00:05'),(2,'Lana','Wachowski',1,1,'2024-07-18 17:00:05'),(3,'Francis Ford','Coppola',1,1,'2024-07-18 17:00:05'),(4,'Quentin','Tarantino',1,1,'2024-07-18 17:00:05'),(5,'David','Fincher',1,1,'2024-07-18 17:00:05'),(6,'Robert','Zemeckis',1,1,'2024-07-18 17:00:05'),(7,'Frank','Darabont',1,1,'2024-07-18 17:00:05'),(8,'Steven','Spielberg',1,1,'2024-07-18 17:00:05');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `countries` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `name` varchar(100) DEFAULT NULL,
  `iso2` varchar(2) DEFAULT NULL,
  `iso3` varchar(3) DEFAULT NULL,
  `code` varchar(3) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp() COMMENT 'Create Time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'Afghanistan','AF','AFG','1',1,'2024-07-18 17:04:18'),(2,'Albania','AL','ALB','2',1,'2024-07-18 17:04:18'),(3,'Algeria','DZ','DZA','3',1,'2024-07-18 17:04:18'),(4,'Andorra','AD','AND','4',1,'2024-07-18 17:04:18'),(5,'Angola','AO','AGO','5',1,'2024-07-18 17:04:18'),(6,'Antigua and Barbuda','AG','ATG','6',1,'2024-07-18 17:04:18'),(7,'Argentina','AR','ARG','7',1,'2024-07-18 17:04:18'),(8,'Armenia','AM','ARM','8',1,'2024-07-18 17:04:18'),(9,'Australia','AU','AUS','9',1,'2024-07-18 17:04:18'),(10,'Austria','AT','AUT','10',1,'2024-07-18 17:04:18'),(11,'Azerbaijan','AZ','AZE','11',1,'2024-07-18 17:04:18'),(12,'Bahamas','BS','BHS','12',1,'2024-07-18 17:04:18'),(13,'Bahrain','BH','BHR','13',1,'2024-07-18 17:04:18'),(14,'Bangladesh','BD','BGD','14',1,'2024-07-18 17:04:18'),(15,'Barbados','BB','BRB','15',1,'2024-07-18 17:04:18'),(16,'Belarus','BY','BLR','16',1,'2024-07-18 17:04:18'),(17,'Belgium','BE','BEL','17',1,'2024-07-18 17:04:18'),(18,'Belize','BZ','BLZ','18',1,'2024-07-18 17:04:18'),(19,'Benin','BJ','BEN','19',1,'2024-07-18 17:04:18'),(20,'Bhutan','BT','BTN','20',1,'2024-07-18 17:04:18'),(21,'Bolivia','BO','BOL','21',1,'2024-07-18 17:04:18'),(22,'Bosnia and Herzegovina','BA','BIH','22',1,'2024-07-18 17:04:18'),(23,'Botswana','BW','BWA','23',1,'2024-07-18 17:04:18'),(24,'Brazil','BR','BRA','24',1,'2024-07-18 17:04:18'),(25,'Brunei','BN','BRN','25',1,'2024-07-18 17:04:18'),(26,'Bulgaria','BG','BGR','26',1,'2024-07-18 17:04:18'),(27,'Burkina Faso','BF','BFA','27',1,'2024-07-18 17:04:18');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genres` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `title` varchar(50) DEFAULT NULL COMMENT 'genre Name',
  `description` varchar(255) DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp() COMMENT 'Create Time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='This the movies genres table';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Action','Genre focused on physical feats, fights, and adventurous plots.',1,'2023-07-18 00:00:00'),(2,'Comedy','Genre intended to amuse and entertain.',1,'2023-07-18 00:00:00'),(3,'Drama','Genre focused on emotional themes and human relationships.',1,'2023-07-18 00:00:00'),(4,'Fantasy','Genre featuring elements of magic, mythology, or supernatural.',1,'2023-07-18 00:00:00'),(5,'Horror','Genre intended to evoke fear, shock, or dread.',1,'2023-07-18 00:00:00'),(6,'Mystery','Genre focused on solving a crime or uncovering secrets.',1,'2023-07-18 00:00:00'),(7,'Romance','Genre focused on romantic relationships and love.',1,'2023-07-18 00:00:00'),(8,'Sci-Fi','Genre featuring speculative fiction with futuristic elements.',1,'2023-07-18 00:00:00'),(9,'Thriller','Genre characterized by suspense, tension, and anticipation.',1,'2023-07-18 00:00:00'),(10,'Western','Genre set primarily in the American Old West with cowboy themes.',1,'2023-07-18 00:00:00');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `rating_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Inception',2010,1,'2023-07-18 00:00:00',1,1,1),(2,'The Matrix',1999,1,'2023-07-18 00:00:00',2,2,1),(3,'Interstellar',2014,1,'2023-07-18 00:00:00',1,1,1),(4,'The Godfather',1972,1,'2023-07-18 00:00:00',3,3,1),(5,'Pulp Fiction',1994,1,'2023-07-18 00:00:00',4,4,1),(6,'Fight Club',1999,1,'2023-07-18 00:00:00',5,5,1),(7,'Forrest Gump',1994,1,'2023-07-18 00:00:00',6,6,1),(8,'The Shawshank Redemption',1994,1,'2023-07-18 00:00:00',7,7,1),(9,'The Dark Knight',2008,1,'2023-07-18 00:00:00',1,1,1),(10,'Schindler\'s List',1993,1,'2023-07-18 00:00:00',8,8,1);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;

--
-- Table structure for table `movies_genres`
--

DROP TABLE IF EXISTS `movies_genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_genres` (
  `movie_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  PRIMARY KEY (`movie_id`,`genre_id`),
  KEY `genre_id` (`genre_id`),
  CONSTRAINT `movies_genres_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`),
  CONSTRAINT `movies_genres_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_genres`
--

/*!40000 ALTER TABLE `movies_genres` DISABLE KEYS */;
INSERT INTO `movies_genres` VALUES (1,1),(1,2),(2,1),(2,2),(3,2),(4,4),(5,3),(6,1),(6,5),(7,4),(8,4),(9,1),(10,8);
/*!40000 ALTER TABLE `movies_genres` ENABLE KEYS */;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ratings` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `rating` varchar(50) DEFAULT NULL COMMENT 'rating',
  `description` varchar(255) DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp() COMMENT 'Create Time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='This the movies ratings table';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (1,'PG-13',NULL,1,'2024-07-18 16:57:58'),(2,'R',NULL,1,'2024-07-18 16:57:58'),(3,'PG',NULL,1,'2024-07-18 16:57:58'),(4,'NC-17',NULL,1,'2024-07-18 16:57:58'),(5,'G',NULL,1,'2024-07-18 16:57:58'),(6,'Not Rated',NULL,1,'2024-07-18 16:57:58'),(7,'TV-MA',NULL,1,'2024-07-18 16:57:58'),(8,'TV-14',NULL,1,'2024-07-18 16:57:58');
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `firstname` varchar(50) NOT NULL,
  `othernames` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `active` tinyint(1) DEFAULT 0,
  `created_by` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp() COMMENT 'Create Time',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='This the users table';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'John','Smith','john.smith@example.com','password1',1,1,'2024-07-18 17:06:41'),(2,'Jane','Doe','jane.doe@example.com','password2',1,1,'2024-07-18 17:06:41'),(3,'Michael','Johnson','michael.johnson@example.com','password3',1,1,'2024-07-18 17:06:41'),(4,'Emily','Williams','emily.williams@example.com','password4',1,1,'2024-07-18 17:06:41'),(5,'William','Brown','william.brown@example.com','password5',1,1,'2024-07-18 17:06:41'),(6,'Sophia','Jones','sophia.jones@example.com','password6',1,1,'2024-07-18 17:06:41'),(7,'James','Garcia','james.garcia@example.com','password7',1,1,'2024-07-18 17:06:41'),(8,'Olivia','Martinez','olivia.martinez@example.com','password8',1,1,'2024-07-18 17:06:41'),(9,'Benjamin','Rodriguez','benjamin.rodriguez@example.com','password9',1,1,'2024-07-18 17:06:41'),(10,'Isabella','Lopez','isabella.lopez@example.com','password10',1,1,'2024-07-18 17:06:41'),(11,'Liam','Hernandez','liam.hernandez@example.com','password11',1,1,'2024-07-18 17:06:41'),(12,'Ava','Gonzalez','ava.gonzalez@example.com','password12',1,1,'2024-07-18 17:06:41'),(13,'Mason','Wilson','mason.wilson@example.com','password13',1,1,'2024-07-18 17:06:41'),(14,'Amelia','Taylor','amelia.taylor@example.com','password14',1,1,'2024-07-18 17:06:41'),(15,'Ethan','Moore','ethan.moore@example.com','password15',1,1,'2024-07-18 17:06:41'),(16,'Ella','Anderson','ella.anderson@example.com','password16',1,1,'2024-07-18 17:06:41'),(17,'Noah','Thomas','noah.thomas@example.com','password17',1,1,'2024-07-18 17:06:41'),(18,'Charlotte','Jackson','charlotte.jackson@example.com','password18',1,1,'2024-07-18 17:06:41'),(19,'Lily','White','lily.white@example.com','password19',1,1,'2024-07-18 17:06:41'),(20,'Lucas','Harris','lucas.harris@example.com','password20',1,1,'2024-07-18 17:06:41');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

--
-- Dumping routines for database 'movies'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-18 17:14:48
