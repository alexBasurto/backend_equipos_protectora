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
-- Dumping data for table `tbBreeds`
--

LOCK TABLES `tbBreeds` WRITE;
/*!40000 ALTER TABLE `tbBreeds` DISABLE KEYS */;
INSERT INTO `tbBreeds` VALUES (1,'Mil Padres','World','Every sizes',12),(2,'Jack Russell Terrier','United Kingdom','Small',16),(3,'Labrador Retriever','United States','Large',12),(4,'German Shepherd','Germany','Large',11),(5,'Golden Retriever','United Kingdom','Large',12),(6,'French Bulldog','France','Small',10),(7,'Beagle','United Kingdom','Medium',13),(8,'Poodle','France','Medium',14),(9,'Rottweiler','Germany','Large',10),(10,'Yorkshire Terrier','United Kingdom','Small',15),(11,'Boxer','Germany','Large',10),(12,'Dachshund','Germany','Small',12),(13,'Doberman Pinscher','Germany','Large',10),(14,'Siberian Husky','Russia','Large',12),(15,'Great Dane','Germany','Giant',8),(16,'Chihuahua','Mexico','Small',15),(17,'Shih Tzu','China','Small',13),(18,'Pug','China','Small',12),(19,'Bulldog','United Kingdom','Medium',10),(20,'Cocker Spaniel','United Kingdom','Medium',12),(21,'Saint Bernard','Switzerland','Giant',10),(22,'Pomeranian','Poland','Small',14),(23,'Havanese','Cuba','Small',13),(24,'Maltese','Malta','Small',14),(25,'Pekingese','China','Small',12),(26,'Akita','Japan','Large',12),(27,'Bernese Mountain Dog','Switzerland','Giant',7),(28,'Border Collie','United Kingdom','Medium',14),(29,'Bichon Frise','France','Small',15),(30,'Basset Hound','France','Medium',11),(31,'Shetland Sheepdog','United Kingdom','Small',13),(32,'Australian Shepherd','United States','Medium',13),(33,'Alaskan Malamute','United States','Large',12),(34,'Collie','United Kingdom','Large',14),(35,'Weimaraner','Germany','Large',12),(36,'Bullmastiff','United Kingdom','Giant',8),(37,'Bloodhound','Belgium','Large',10),(38,'Newfoundland','Canada','Giant',10),(39,'English Springer Spaniel','United Kingdom','Medium',12),(40,'Italian Greyhound','Italy','Small',14),(41,'Cavalier King Charles Spaniel','United Kingdom','Small',12),(42,'Schnauzer','Germany','Medium',13),(43,'Shiba Inu','Japan','Small',13),(44,'English Bulldog','United Kingdom','Medium',10),(45,'Papillon','France','Small',14),(46,'Chow Chow','China','Medium',12),(47,'Vizsla','Hungary','Medium',12),(48,'Lhasa Apso','Tibet','Small',14),(49,'American Staffordshire Terrier','United States','Medium',12),(50,'Basenji','Congo','Small',12),(51,'Australian Terrier','Australia','Small',15),(52,'Cairn Terrier','Scotland','Small',14);
/*!40000 ALTER TABLE `tbBreeds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tbCandidates`
--

LOCK TABLES `tbCandidates` WRITE;
/*!40000 ALTER TABLE `tbCandidates` DISABLE KEYS */;
INSERT INTO `tbCandidates` VALUES (1,'Mikel','Zumaia','12348678A','1980','Prefiere perros grandes','Sí','Bilbao',1),(2,'Unai','Zamakola','29456789B','1982','Tiene experiencia con perros pequeños','Sí','Donostia',2),(3,'Ainhoa','Etxeberria','12345678A','1980','Prefiere perros grandes','Sí','Bilbao',1),(4,'Unai','Zubizarreta','23456789B','1982','Tiene experiencia con perros pequeños','Sí','Donostia',2),(5,'Leire','López','34567890C','1985','Le encantan los perros de raza mixta','No','Vitoria-Gasteiz',3),(6,'Jon','Martínez','45678901D','1929','Busca un perro activo para hacer ejercicio','Sí','San Sebastián',4),(7,'Maite','Ibarra','56789012E','1984','Desea adoptar un perro de refugio','Sí','Biarritz',3),(8,'Iker','Etxeberria','67890123F','1981','Preferencia por perros jóvenes','No','Zarautz',1),(9,'Amaia','Zabala','78901234G','1979','Interesada en perros entrenados','Sí','Hendaya',2),(10,'Oier','González','89012345H','1986','Busca un compañero para correr','Sí','Anglet',3),(11,'Miren','Etxeberria','90123456I','1983','Desea un perro tranquilo y cariñoso','Sí','Irun',4),(12,'Iñaki','Arana','01234567J','1987','Quiere adoptar un perro anciano','No','Hondarribia',3),(13,'Eider','Goikoetxea','11223344K','1980','Preferencia por perros pequeños','Sí','Hossegor',1),(14,'Iñigo','Uribe','22334455L','1982','Le gustan los perros de razas grandes','Sí','Bilbao',2),(15,'Naiara','Mendizabal','33445566M','1985','Interesada en perros de terapia','No','Donostia',3),(16,'Ekaitz','Larrañaga','44556677N','1978','Desea adoptar un perro de refugio','Sí','Vitoria-Gasteiz',4),(17,'Xabier','Etxeberria','55667788O','1984','Preferencia por perros jóvenes y juguetones','Sí','San Sebastián',3),(18,'Nora','Aguirre','66778899P','1981','Le gustan los perros grandes y activos','No','Biarritz',1),(19,'Maialen','Arrieta','77889900Q','1979','Busca un perro de raza específica','Sí','Hendaya',2),(20,'Eneko','Eguzkiza','88990011R','1986','Quiere un perro para acompañarle en caminatas','Sí','Anglet',3),(21,'Ainhoa','Bilbao','99001122S','1983','Preferencia por perros de razas pequeñas','Sí','Irun',4),(22,'Izan','Santamaría','00112233T','1987','Le gustaría adoptar un perro mayor','No','Hondarribia',3),(23,'Ane','Arana','11223344U','1980','Preferencia por perros pequeños','Sí','Hossegor',1),(24,'Asier','Zubiri','22334455V','1982','Le gustan los perros grandes y activos','Sí','Bilbao',2),(25,'Maddi','Larrazabal','33445566W','1985','Busca un perro de raza mixta','No','Donostia',3),(26,'Xabi','Etxeberria','44556677X','1978','Desea un perro que se lleve bien con niños','Sí','Vitoria-Gasteiz',4),(27,'Iratxe','Irizar','55667788Y','1984','Le gustan los perros pequeños y juguetones','Sí','San Sebastián',3),(28,'Gorka','Etxeberria','66778899Z','1981','Quiere un perro de raza específica','No','Bilbao',1),(29,'Amaia','Etxeberria','77889900A','1950','Tiene experiencia con perros mayores','Sí','Donostia',2),(30,'Ibai','Etxeberria','88990011B','1986','Desea adoptar un perro de refugio','Sí','Vitoria-Gasteiz',3),(31,'Nerea','Etxeberria','99001122C','1983','Le gustan los perros grandes y activos','Sí','San Sebastián',4),(32,'Eñaut','Etxeberria','00112233D','1987','Prefiere un perro entrenado','No','Bilbao',3),(33,'Haizea','Etxeberria','11223344E','1980','Busca un perro de raza específica','Sí','Donostia',1),(34,'Iñigo','Etxeberria','22334455F','1982','Tiene experiencia con perros pequeños','Sí','Vitoria-Gasteiz',2),(35,'Lur','Etxeberria','33445566G','1985','Preferencia por perros jóvenes','No','San Sebastián',3),(36,'Miren','Etxeberria','44556677H','1978','Desea un perro tranquilo y cariñoso','Sí','Bilbao',4),(37,'Asier','Etxeberria','55667788I','1984','Quiere un perro para hacer ejercicio','Sí','Donostia',3),(38,'Maialen','Etxeberria','66778899J','1981','Le gustan los perros grandes y activos','No','Vitoria-Gasteiz',1),(39,'Olatz','Etxeberria','77889900K','1979','Busca un perro de raza específica','Sí','San Sebastián',2),(40,'Iker','Etxeberria','88990011L','1986','Tiene experiencia con perros mayores','Sí','Bilbao',3),(41,'Amaia','Etxeberria','99001122M','1983','Desea un perro pequeño y amigable','Sí','Donostia',4),(42,'Markel','Etxeberria','00112233N','1987','Preferencia por perros jóvenes','No','Vitoria-Gasteiz',3),(43,'Naroa','Etxeberria','11223344O','1980','Desea adoptar un perro de refugio','Sí','San Sebastián',1),(44,'Aitor','Etxeberria','22334455P','1982','Le gustan los perros grandes y activos','Sí','Bilbao',2),(45,'Maddi','Etxeberria','33445566Q','1985','Tiene experiencia con perros pequeños','No','Vitoria-Gasteiz',3),(46,'Gorka','Etxeberria','44556677R','1978','Preferencia por perros jóvenes','Sí','San Sebastián',4),(47,'Eneko','Etxeberria','55667788S','1984','Desea un perro tranquilo y cariñoso','Sí','Bilbao',2);
/*!40000 ALTER TABLE `tbCandidates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tbDogs`
--

LOCK TABLES `tbDogs` WRITE;
/*!40000 ALTER TABLE `tbDogs` DISABLE KEYS */;
INSERT INTO `tbDogs` VALUES (1,'Max','Marrón','Mediano','perro1.jpg','Amigable','2017','Juguetón y enérgico',1),(2,'Bella','Blanco','Pequeño','perro2.jpg','Calmado','2019','Le encanta acurrucarse',2),(3,'Charlie','Negro','Grande','perro3.jpg','Enérgico','2018','Necesita ejercicio regular',3),(4,'Lucy','Marrón','Mediano','perro4.jpg','Leal','2016','Genial con los niños',4),(5,'Cooper','Dorado','Grande','perro5.jpg','Juguetón','2017','Le encantan las actividades al aire libre',5),(6,'Luna','Gris','Mediano','perro6.jpg','Dócil','2019','Se lleva bien con otras mascotas',6),(7,'Oliver','Negro y Blanco','Pequeño','perro7.jpg','Inteligente','2020','Aprende rápidamente',7),(8,'Mia','Marrón','Mediano','perro8.jpg','Animado','2018','Necesita estimulación mental',8),(9,'Bailey','Dorado','Grande','perro9.jpg','Cariñoso','2017','Disfruta de actividades acuáticas',9),(10,'Lola','Blanco','Pequeño','perro10.jpg','Curioso','2019','Le encanta explorar nuevos lugares',10),(11,'Maximus','Negro','Mediano','perro11.jpg','Ansioso por complacer','2016','Responde bien al entrenamiento',11),(12,'Zoe','Marrón','Grande','perro12.jpg','Dócil','2018','Adorable compañía familiar',12),(13,'Coco','Blanco y Negro','Pequeño','perro13.jpg','Divertido','2020','Le gusta jugar con juguetes',13),(14,'Lucky','Marrón','Mediano','perro14.jpg','Leal','2017','Le gusta correr en el parque',14),(15,'Milo','Gris','Pequeño','perro15.jpg','Cauteloso','2019','Prefiere espacios tranquilos',15),(16,'Oscar','Negro','Grande','perro16.jpg','Juguetón','2018','Le encanta jugar a buscar',16),(17,'Maya','Dorado','Mediano','perro17.jpg','Inteligente','2017','Aprende trucos rápidamente',17),(18,'Rocky','Blanco','Grande','perro18.jpg','Energético','2016','Le gusta nadar',18),(19,'Lola','Marrón','Mediano','perro19.jpg','Carácter fuerte','2018','Se lleva bien con otros perros',19),(20,'Simba','Dorado','Grande','perro20.jpg','Leal','2017','Le encanta jugar al aire libre',20),(21,'Toby','Negro y Blanco','Pequeño','perro21.jpg','Amigable','2019','Adora los mimos',21),(22,'Buddy','Marrón','Mediano','perro22.jpg','Energético','2018','Le gusta correr y jugar',22),(23,'Bailey','Blanco','Grande','perro23.jpg','Inteligente','2017','Le encanta resolver rompecabezas',23),(24,'Molly','Negro','Pequeño','perro24.jpg','Cariñosa','2019','Le gusta dormir en la cama',24),(25,'Cody','Marrón','Mediano','perro25.jpg','Leal','2018','Es un gran compañero de juego',25),(26,'Riley','Dorado','Grande','perro26.jpg','Curioso','2017','Explora el mundo con entusiasmo',26),(27,'Rosie','Negro y Blanco','Pequeño','perro27.jpg','Alegre','2019','Le encanta jugar a la pelota',27),(28,'Leo','Marrón','Mediano','perro28.jpg','Amigable','2018','Le gusta hacer nuevos amigos',28),(29,'Ziggy','Gris','Grande','perro29.jpg','Inteligente','2017','Aprende trucos increíbles',29),(30,'Luna','Blanco','Pequeño','perro30.jpg','Dócil','2019','Le gusta acurrucarse en el sofá',30);
/*!40000 ALTER TABLE `tbDogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tbDogsCandidates`
--

LOCK TABLES `tbDogsCandidates` WRITE;
/*!40000 ALTER TABLE `tbDogsCandidates` DISABLE KEYS */;
INSERT INTO `tbDogsCandidates` VALUES (1,1,1,'2023-10-30','Buena experiencia de adopción'),(1,5,4,'2023-10-30','Adopción confirmada por equipo de adopciones'),(1,7,7,'2023-10-30','Perro y adoptante se llevan bien en las visitas de prueba'),(1,10,10,'2023-10-30','Familia comprometida con entrenamiento del perro'),(1,13,13,'2023-10-27','Adoptante con historial de voluntariado en refugios'),(2,3,2,'2023-10-30','Familia amante de los animales'),(2,4,5,'2023-10-30','Familia con experiencia en cuidado de perros mayores'),(2,8,8,'2023-10-30','Adoptante dispuesto a recibir entrenamiento para cuidado especial'),(2,11,11,'2023-10-25','Adopción realizada en evento de adopción especial'),(3,2,3,'2023-10-30','Visita al hogar realizada'),(3,6,6,'2023-10-30','Adoptante con historial de adopciones exitosas'),(3,9,9,'2023-10-30','Adoptante con espacio y tiempo para cuidado del perro'),(3,12,12,'2023-10-26','Familia con experiencia en perros de raza específica');
/*!40000 ALTER TABLE `tbDogsCandidates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tbStaff`
--

LOCK TABLES `tbStaff` WRITE;
/*!40000 ALTER TABLE `tbStaff` DISABLE KEYS */;
/* admin123 hash $2b$10$oN6z7m3od75NptUHxMLyr.VeZ9pFQgl32vrmZ324lN01VycfPoh2i*/
INSERT INTO tbStaff
VALUES 
  (1, 'john.doe@biocan.com', '$2b$10$oN6z7m3od75NptUHxMLyr.VeZ9pFQgl32vrmZ324lN01VycfPoh2i', 'John', 'Doe', 'standardUser', '2023-10-30', 1),
  (2, 'jane.smith@biocan.com', '$2b$10$oN6z7m3od75NptUHxMLyr.VeZ9pFQgl32vrmZ324lN01VycfPoh2i', 'Jane', 'Smith', 'standardUser', '2023-10-30', 1),
  (3, 'michael.johnson@biocan.com', '$2b$10$oN6z7m3od75NptUHxMLyr.VeZ9pFQgl32vrmZ324lN01VycfPoh2i', 'Michael', 'Johnson', 'standardUser', '2023-10-30', 1),
  (4, 'emily.wilson@biocan.com', '$2b$10$oN6z7m3od75NptUHxMLyr.VeZ9pFQgl32vrmZ324lN01VycfPoh2i', 'Emily', 'Wilson', 'standardUser', '2023-10-30', 1),
  (5, 'admin@biocan.com', '$2b$10$oN6z7m3od75NptUHxMLyr.VeZ9pFQgl32vrmZ324lN01VycfPoh2i', 'Admin', 'User', 'admin', '2023-10-30', 1);
/*!40000 ALTER TABLE `tbStaff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tbTypeOfHousing`
--

LOCK TABLES `tbTypeOfHousing` WRITE;
/*!40000 ALTER TABLE `tbTypeOfHousing` DISABLE KEYS */;
INSERT INTO `tbTypeOfHousing` VALUES (1,'Casa propia'),(2,'Casa de alquiler'),(3,'Piso propio'),(4,'Piso de alquiler');
/*!40000 ALTER TABLE `tbTypeOfHousing` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-30 16:50:39