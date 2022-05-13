'use strict'

/*
|--------------------------------------------------------------------------
| VistaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class VistaSeeder {
  static async run () {
    await Database.table('views').insert([
      { 
        id: 1, 
        nombre: 'Categoria',
        icono:'stars',
        nivel:'Normal',
        ruta:'/Categorias',
        status:'1',
        category_id:'1',
      },
      {
        id: 2, 
        nombre: 'Vistas',
        icono:'subject',
        nivel:'Normal',
        ruta:'/Vistas',
        status:'1',
        category_id:'1',
      },
      {
        id:3,
        nombre: 'Asignar Vistas',
        icono:'supervised_user_circle',
        nivel:'Normal',
        ruta:'/AsignarV',
        status:'1',
        category_id:'1',
      },
      { 
        id: 4, 
        nombre: 'Roles',
        icono:'timeline',
        nivel:'Normal',
        ruta:'/Roles',
        status:'1',
        category_id:'2',
      },
      {
        id: 5, 
        nombre: 'Usuarios',
        icono:'visibility',
        nivel:'Normal',
        ruta:'/Usuarios',
        status:'1',
        category_id:'2',
      },
     
      {
        id:6,
        nombre: 'Administradores',
        icono:'sentiment_satisfied_alt',
        nivel:'Normal',
        ruta:'/Administradores',
        status:'1',
        category_id:'3',
      },
      {
        id:7,
        nombre: 'Operadores',
        icono:'contact_phone',
        nivel:'Normal',
        ruta:'/Operadores',
        status:'1',
        category_id:'3',
      }
     
    ])
  }
}

module.exports = VistaSeeder
