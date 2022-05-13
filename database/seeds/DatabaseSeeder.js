'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Admin = require('./AdminSeeder')
const Rol = require('./RoleSeeder')

const Cate = require('./CategoriaSeeder')
const Vista = require('./VistaSeeder')
class DatabaseSeeder {
  async run () {
    await Rol.run()
    await Admin.run()
    await Cate.run()
    await Vista.run()
    
  }
}

module.exports = DatabaseSeeder
