'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('rol/routes', () => {return { greeting: 'Funciona rutas Rol' }
}).prefix('api/v1')


Route.group(() => {
    Route.resource('roles', 'RoleController')
    .apiOnly()
    Route.get('VerMenu','RoleController.VerMenu')
    Route.put('rolcambia','RoleController.rolcambia')
    // validator(new Map([
    //   [['role.store'], ['role/StoreRole']]
    // ]))
    // Route.get('Respuesta', ({ source }) => {
        
    //     source.send("Se ha dectetado un cambio");
    // })

    Route.get('/Respuesta', ({ source }) => {
        // send a server-sent events comment
     source.send("Se ha dectetado un cambio", '!NUEVO ROL!')
     
    //  
  })
  .middleware([' '])
  
})
.prefix('api/v1')
.namespace('User')
  
  