'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class CategoriaSeeder {
  static async run () {
    await Database.table('categories').insert([
      { 
        id: 1, 
        nombre: 'Categorias',
        icono:'calendar_view_day',
        nivel:'Normal',
        status:'1',
        roles_id:2
      },
      {
        id: 2, 
        nombre: 'Usuarios',
        icono:'face',
        nivel:'Normal',
        status:'1',
        roles_id:2
      },
      {
        id:3,
        nombre: 'Reportes',
        icono:'open_in_browser',
        nivel:'Normal',
        status:'1',
        roles_id:2
      },
     
    ])
  }
}
module.exports = CategoriaSeeder
