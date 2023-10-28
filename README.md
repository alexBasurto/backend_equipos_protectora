# PATITAS FELICES  🐕🐾
## Tabla de contenidos

- [Backend Equipos - Refugio Perros](#backend-equipos---refugio-perros)
    - [Proyecto por equipos Backend](#proyecto-por-equipos-Backend)
        - [Refugio Perros (asociación)](#refugio-perros-asociación)
        - [Protectora Perros (proyecto web)](#protectora-perros-proyecto-web)
- [Requisitos técnicos del proyecto](#requisitos-técnicos-del-proyecto)
- [Orientación técnica del proyecto](#orientación-técnica-del-proyecto)


## Backend Equipos - Refugio Perros
### Proyecto por equipos Backend
#### Refugio Perros (asociación)
Página web de la asociación PATITAS FELICES dedicada a la protección y reinserción de perros abandonados.

Primero, nos ocupamos de localizar, rescatar y salvar perros en situación de riesgo (perros perdidos, abandonados o maltratados).

Después nos ocupamos de su protección, cuidados, acogida y refugio. Se cubren sus necesidades de salud y bienestar, ofrenciendoles lo más parecido a un hogar.

Finalmente, cuando el perro recupera su salud y su equilibrio, se le busca un nuevo hogar donde mejor encaje dadas sus características y las características de su futura familia.

#### Protectora Perros (proyecto web)
El refugio PATITAS FELICES solicita una página web que cubra las siguientes necesidades:

## Requisitos técnicos del proyecto
El objetivo del proyecto es, en trabajo colaborativo, poner en práctica las siguientes técnicas de backend:

- Diseño bbdd MySQL en un contenedor Docker
- Creación de un proyecto backend con las siguientes tecnologías:
    - NodeJS como entorno de ejecución
    - ExpressJS como framework backend
    - NPM como gestor paquetes
- Puesta en práctica de los siguientes conceptos:
    - Middleware
    - Modelo Vista Controlador
    - Variables de entorno
    - Vistas
    - ORM
    - JWT
    - Cookies
    - Sesion

## Orientación técnica del proyecto

### Base de datos MySQL
Este es el esquema de la base de datos.

-- Tabla tbStaff
tbStaff = {
    idUser = "INT PRIMARY KEY",
    nombre = "VARCHAR(255)",
    apellidos = "VARCHAR(255)",
    fecha_alta = "DATE"
}

-- Tabla tbDogs
tbDogs = {
    idDog = "INT PRIMARY KEY",
    nombre = "VARCHAR(255)",
    color = "VARCHAR(50)",
    talla = "VARCHAR(50)",
    raza = "VARCHAR(100)",
    foto = "VARCHAR(255)",
    caracter = "TEXT",
    edad = "INT",
    observaciones = "TEXT"
}

-- Tabla tbCandidates
tbCandidates = {
    idCandidate = "INT PRIMARY KEY",
    nombre = "VARCHAR(255)",
    apellidos = "VARCHAR(255)",
    DNI = "VARCHAR(20)",
    tipoVivienda = "VARCHAR(50)",
    edad = "INT",
    observaciones = "TEXT",
    candidateApproved = "BOOLEAN"
}

-- Tabla tbDogsCandidatesStaff
tbDogsCandidatesStaff = {
    idDog = "INT",
    idCandidate = "INT",
    idUser = "INT",
    fechaAdopcion = "DATE",
    observaciones = "TEXT",
    FOREIGN KEY (idDog) REFERENCES tbDogs(idDog),
    FOREIGN KEY (idCandidate) REFERENCES tbCandidates(idCandidate),
    FOREIGN KEY (idUser) REFERENCES tbStaff(idUser)
}
