# Flujos del código
## Llamada a `localhost:3001/dogs`

1. Al ser `/dogs` `router.js` pasa la solicitud HTTP GET a `routerDogs.js`.
2. Dentro de `/dogs` es una solicitud a la raíz, por lo que:
a. llama a `authMiddleware.js` para comprobar si está autenticado.
b. en caso afirmativo, llama a `dogsViewController.js`
3. `dogsViewController.js` llama a `dogsContorller.js`
4. `dogsController.js` llama a `dogsModel.js`
5. `dogsModel.js` mediante el ORM **sequelize** saca los datos de la base de datos **MySQL**.
6. `dogsModel.js` pasa los datos a `dogsController.js`.
7. `dogsController.js` pasa los datos a `dogsViewController.js`.
8. `dogsViewController.js` renderiza la vista `list.pug` con los datos recibidos y el usuario los ve en el navegador.

```mermaid
sequenceDiagram
    participant browser
    router->>dogsRouter: 1. Routing 
    dogsRouter->>authMiddleware: 2A. isAuthenticated
    dogsRouter->>dogsViewController: 2B. Routing
    dogsViewController->>dogsController: 3. Handling Views
    dogsController->>dogsModel: 4. Business Logic
    dogsModel->>sequelize: 5. Data Access
    dogsModel-->>dogsController: 6. Data
    dogsController-->>dogsViewController: 7. Data
    dogsViewController-->>browser: 8. Rendering Views (res render, pug)
```

## Crear un nuevo perro desde `localhost:3001/dogs/new`, después de  botón `Nuevo Perro`.

1. Desde `/dogs/new` pasa una solicitud HTTP POST de `router.js` a `roterDogs.js`.
2. Dentro de `/dogs` es una solicitud a la raíz, por lo que:
a. llama a `authMiddleware.js` para comprobar si está autenticado.
b. en caso afirmativo, llama a `dogsViewController.js`
3. `dogsViewController.js` llama a `dogsContorller.js` llamando al método CREATE.
4. `dogsController.js` llama a `dogsModel.js` mediante el método CREATE.
5. `dogsModel.js` mediante el ORM **sequelize** saca los datos de la base de datos **MySQL**.
6. `dogsModel.js` pasa los datos a `dogsController.js`.
7. `dogsController.js` pasa confirmación a `dogsViewController.js`.
8. `dogsViewController.js` nos redirige a `/dogs`.


```mermaid
sequenceDiagram
    participant browser
    router->>dogsRouter: 1. Routing
    dogsRouter->>dogsViewController: 2. Routing
    dogsViewController->>dogsController: 3. Handling Views
    dogsController->>dogsModel: 4. Business Logic
    dogsModel->>sequelize: 5. Data Writing
    dogsModel-->>dogsController: 6 OK
    dogsController-->>dogsViewController: 7 OK
    dogsViewController-->>browser: 8 Redirect /dogs
```