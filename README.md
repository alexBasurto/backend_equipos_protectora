# BIO CAN  🐕🐾
## Tabla de contenidos

- [BIO CAN  🐕🐾](#patitas-felices--)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Backend Equipos - Refugio Perros](#backend-equipos---refugio-perros)
    - [Proyecto por equipos Backend](#proyecto-por-equipos-backend)
      - [Refugio Perros (asociación)](#refugio-perros-asociación)
      - [Protectora Perros (proyecto web)](#protectora-perros-proyecto-web)
  - [Requisitos técnicos del proyecto](#requisitos-técnicos-del-proyecto)
  - [Orientación técnica del proyecto](#orientación-técnica-del-proyecto)
    - [Funcionalidad página web](#funcionalidad-página-web)
      - [Parte pública](#parte-pública)
      - [Parte autenticada](#parte-autenticada)
    - [Base de datos MySQL](#base-de-datos-mysql)


## Backend Equipos - Refugio Perros
### Proyecto por equipos Backend
#### Refugio Perros (asociación)
Página web de la asociación BIO CAN dedicada a la protección y reinserción de perros abandonados.

Primero, nos ocupamos de localizar, rescatar y salvar perros en situación de riesgo (perros perdidos, abandonados o maltratados).

Después nos ocupamos de su protección, cuidados, acogida y refugio. Se cubren sus necesidades de salud y bienestar, ofrenciendoles lo más parecido a un hogar.

Finalmente, cuando el perro recupera su salud y su equilibrio, se le busca un nuevo hogar donde mejor encaje dadas sus características y las características de su futura familia.

#### Protectora Perros (proyecto web)
El refugio BIO CAN solicita una página web que cubra las siguientes necesidades:

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

### Funcionalidad página web
#####  Parte pública
En la parte pública se mostrará una página de bienvenida y otra donde se muestran los distintos perros en acogida y una descripción del hogar ideal para cada uno de ellos.

##### Parte autenticada
Solo los voluntarios de la asociación tienen acceso a la parte Intranet, y desde la misma podrán llevar a cabo las siguientes operaciones:
- Añadir/consultar/actualizar/borrar perros.
- Añadir/consultar/actualizar/borrar candidatos.
- Añadir/consultar/actualizar/borrar adopciones.

### Base de datos MySQL
Este es el esquema de la base de datos.

```mermaid
erDiagram
    tbStaff |o--o{ tbDogsCandidates : allows
    tbStaff {
        id idStaff PK
        string firstName
        string lastName
        date fechaAlta
        string comments
    }
    tbDogs |o--o{ tbDogsCandidates : allows
    tbDogs {
        id idDog PK
        string name
        string breed
        string color
        string size
        string photo
        string character
        year yearOfBirth
        string comments
    }
    tbCandidates |o--o{ tbDogsCandidates : allows
    tbCandidates {
        id idCandidate PK
        string firstName
        string lastName
        string dni
        string typeOfHousing
        year yearOfBirth
        string validated
        string comments
    }
    tbDogsCandidates {
        id idDog PK, FK
        id idCandidate PK, FK
        id idStaff PK, FK
        date dateOfAdop
        string comments
    }

```
