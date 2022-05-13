'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


// Route.post('/login', 'AuthController.login')

// Route.resource('users','UserController')
// .apiOnly().validator(new Map([
//     [['users.store'],['StoreUser']]
// ]))

// // ---------------------------------------------------//
// //Tablas dependiendo del Rol.
// //--Tabla de Usuarios rol de Administrador.
// Route.get('veradmin','UserController.veradmin')
// //--Tabla de Usuarios rol de soporte.
// Route.get('versoporte','UserController.versoporte')
// //--Tabla de Usuarios rol de Visitante.
// Route.get('vervisistante','UserController.vervisistante')
// // ---------------------------------------------------//

// // ---------------------------------------------------//
// //--Opciones de Rol
// Route.resource('rol', 'RolController').apiOnly()

// Route.resource('categorias','CategoriaController').apiOnly()
// Route.resource('vistas','VistaController').apiOnly()
// Route.get('VerMenu','RolController.VerMenu')


// Route.get('CategoriasSoporte','CategoriaController.CategoriasSoporte')
// Route.group(() => {

    
// }).middleware(['authenticated']);

use('./routes/routesAuth.js');
use('./routes/routesCategory.js');
use('./routes/routesRole.js');
use('./routes/routesRoleView.js');
use('./routes/routesUser.js');
use('./routes/routesView.js');
