'use strict'

/*
|--------------------------------------------------------------------------
| AdminSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Hash = use('Hash')
class AdminSeeder {
  static async run () {
    const encryptedPassword = await Hash.make('12345')
    await Database.table('users').insert([
      
      {
        id: 1,
        username:'admin106',
        email: 'admin@gmail.com',
        password: encryptedPassword,
        status:true,
        role_id: 1,
      },
      {
        id: 2,
        username:'spo98',
        email: 'soporte@gmail.com',
        password: encryptedPassword,
        status:true,
        role_id: 2
      },
      {
        id: 3,
        username:'debu76po98',
        email: 'debu@gmail.com',
        password: encryptedPassword,
        status:true,
        role_id: 3
      }
    ])
  }
}

module.exports = AdminSeeder
