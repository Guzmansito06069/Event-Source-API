'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments('id')
      table.string('nombre').nullable()
      table.string('icono').nullable()
      table.string('nivel').nullable()
      table.boolean('status').defaultTo(1)
       table.integer('roles_id').unsigned().references('id').inTable('roles')
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
