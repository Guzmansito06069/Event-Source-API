'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('user/ruta', () => {
  return { greeting: 'Funciona rutas User' }
}).prefix('api/v1')


Route.group(() => {
  Route.resource('users', 'UserController')
    .apiOnly().validator(new Map([
      [['users.store'], ['StoreUser']]
    ]))
})
  .prefix('api/v1')
  .namespace('User')
  

