'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class RoleSeeder {
  static async run () {
    await Database.table('roles').insert([
      { 
        id: 1, 
        rol: 'administracion',
      },
      {
        id: 2, 
        rol: 'soporte',
      },
      {
        id: 3, 
        rol: 'debugger',
      },
      {
        id: 4, 
        rol: 'invitado',
      }
    ])
  }
}

module.exports = RoleSeeder
