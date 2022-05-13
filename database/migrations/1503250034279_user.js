'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username').notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.integer('role_id').unsigned().references('id').inTable('roles').onDelete('CASCADE').defaultTo(4)
      table.string('confirmation_token')
      table.boolean('status').defaultTo(1)
      table.timestamps()
   
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
