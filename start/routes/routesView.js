'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('vista/ruta', () => {return { greeting: 'Rutas de Vistas' }
}).prefix('api/v1')

Route.group(() => {
    Route.resource('vistas', 'ViewController')
    .apiOnly()})
.prefix('api/v1')
.namespace('View')
.middleware(['authenticated'])