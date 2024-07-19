-- MySQL dump 10.19  Distrib 10.3.39-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: movies
-- ------------------------------------------------------
-- Server version	10.3.39-MariaDB-0ubuntu0.20.04.2

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
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Inception',2010,1,'2023-07-18 00:00:00',1,1,12,'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.','https://m.media-amazon.com/images/I/51sU5+0pmaL._AC_.jpg'),(2,'The Matrix',1999,1,'2023-07-18 00:00:00',2,2,21,'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.','https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg'),(3,'Interstellar',2014,1,'2023-07-18 00:00:00',1,1,16,'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.','https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg'),(4,'The Godfather',1972,1,'2023-07-18 00:00:00',3,3,17,'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.','https://m.media-amazon.com/images/I/41+eK8zBwQL._AC_.jpg'),(5,'Pulp Fiction',1994,1,'2023-07-18 00:00:00',4,4,8,'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.','https://m.media-amazon.com/images/I/81fTBhbZn8L._AC_SY679_.jpg'),(6,'Fight Club',1999,1,'2023-07-18 00:00:00',5,5,16,'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into much more.','https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg'),(7,'Forrest Gump',1994,1,'2023-07-18 00:00:00',6,6,1,'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.','https://m.media-amazon.com/images/I/61rUbJpfgTL._AC_SY679_.jpg'),(8,'The Shawshank Redemption',1994,1,'2023-07-18 00:00:00',7,7,12,'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.','https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg'),(9,'The Dark Knight',2008,1,'2023-07-18 00:00:00',1,1,1,'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.','https://m.media-amazon.com/images/I/71pox3x-+PL._AC_SY679_.jpg'),(10,'Schindler\'s List',1993,1,'2023-07-18 00:00:00',8,8,22,'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.','https://m.media-amazon.com/images/I/81bwM9xoNGL._AC_SY679_.jpg'),(11,'Following ',1998,NULL,'2024-07-19 14:51:49',6,1,5,'A young writer who follows strangers for material meets a thief who takes him under his wing.','https://m.media-amazon.com/images/I/51vT-59MLLL._AC_SY445_.jpg'),(12,'Memento ',2000,NULL,'2024-07-19 14:51:49',1,1,23,'A man with short-term memory loss attempts to track down his wife\'s murderer.','https://m.media-amazon.com/images/I/51sZW87rx4L._AC_.jpg'),(13,'Insomnia ',2002,NULL,'2024-07-19 14:51:49',6,1,12,'Two Los Angeles homicide detectives are dispatched to a northern town where the sun doesn\'t set to investigate the methodical murder of a local teen.','https://m.media-amazon.com/images/I/71NGsXqn1DL._AC_SY679_.jpg'),(14,'Batman  Begins',2005,NULL,'2024-07-19 14:51:49',1,1,13,NULL,NULL),(15,'The Prestige ',2006,NULL,'2024-07-19 14:51:49',6,1,25,'After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.','https://m.media-amazon.com/images/I/51k0hb0FQ0L._AC_.jpg'),(16,'The Dark Knight Rises ',2012,NULL,'2024-07-19 14:51:49',1,1,10,'Eight years after the Joker\'s reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.','https://m.media-amazon.com/images/I/71qFRXcoNoL._AC_SY679_.jpg'),(17,'Dunkirk',2017,NULL,'2024-07-19 14:51:49',5,1,16,'Allied soldiers from Belgium, the British Commonwealth, and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.','https://m.media-amazon.com/images/I/81cZ1MhnZIL._AC_SY679_.jpg'),(18,'Tenet ',2020,NULL,'2024-07-19 14:51:49',4,1,13,'Armed with only one word, Tenet, and fighting for the survival of the world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.','https://m.media-amazon.com/images/I/81b+Lc+oCzL._AC_SY679_.jpg'),(19,'Oppenheimer ',2023,NULL,'2024-07-19 14:51:49',3,1,25,'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.','https://m.media-amazon.com/images/I/51qeTRu3FjL._AC_SY679_.jpg');
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
INSERT INTO `users` VALUES (1,'John','Smith','john.smith@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(2,'Jane','Doe','jane.doe@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(3,'Michael','Johnson','michael.johnson@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(4,'Emily','Williams','emily.williams@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(5,'William','Brown','william.brown@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(6,'Sophia','Jones','sophia.jones@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(7,'James','Garcia','james.garcia@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(8,'Olivia','Martinez','olivia.martinez@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(9,'Benjamin','Rodriguez','benjamin.rodriguez@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(10,'Isabella','Lopez','isabella.lopez@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(11,'Liam','Hernandez','liam.hernandez@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(12,'Ava','Gonzalez','ava.gonzalez@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(13,'Mason','Wilson','mason.wilson@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(14,'Amelia','Taylor','amelia.taylor@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(15,'Ethan','Moore','ethan.moore@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(16,'Ella','Anderson','ella.anderson@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(17,'Noah','Thomas','noah.thomas@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(18,'Charlotte','Jackson','charlotte.jackson@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(19,'Lily','White','lily.white@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41'),(20,'Lucas','Harris','lucas.harris@example.com','0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e',1,1,'2024-07-18 17:06:41');
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

-- Dump completed on 2024-07-19 15:27:22
