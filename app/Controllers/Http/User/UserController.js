'use strict'

const User = use('App/Models/User');
const Database = use('Database')
class UserController {
  async store({ request, response }) {
    const userData = request.only(['username', 'email', 'password', 'role_id','status'])
    const user = await User.create(userData)
    const newUser = await Database.table('users as u').innerJoin('roles as r', 'r.id', 'u.role_id').select("u.id", "u.username", "u.email", "r.rol","u.status").where("u.id", user.id)
    return response.created({
      status: true,
      data: newUser
    })
  }
  async show({ response, params }) {
    const user = await Database.table('users as u').innerJoin('roles as r', 'r.id', 'u.role_id').select("u.id", "u.username", "u.email", "u.password", "u.status", "r.rol").where({ "u.id": params.id }).first()
    return response.json({
      status: true,
      mensaje: "Se obtuvo el registro",
      data: user
    })

  }

  async index({ response }) {
    const newUser = await Database.table('users as i')
      .innerJoin('roles as m', 'i.role_id', 'm.id')
      .select("i.id", "i.username", "i.email", "i.status", "m.rol as Rol")


    return response.json({
      status: true,
      mensaje: "Se obtuvieron los Usuarios",
      data: newUser
    })
    // return view.render('marcas.index', { marcas: marcas.toJSON() })
  }
  async veradmin({ response }) {

    const newUser = await Database.table('users as i')
      .innerJoin('roles as m', 'i.role_id', 'm.id').select("i.id", "i.username", "i.email", "i.status", "i.password", "m.rol as Rol").where("Rol", "administracion")
    return response.json({
      status: true,
      mensaje: "Se obtuvieron los usuarios del Rol de Administrador",
      data: newUser
    })
  }
  async versoporte({ response }) {

    const newUser = await Database.table('users as i')
      .innerJoin('roles as m', 'i.role_id', 'm.id').select("i.id", "i.username", "i.email", "i.password", "m.rol as Rol").where("Rol", "soporte")
    return response.json({
      status: true,
      mensaje: "Se obtuvieron los usuarios del Rol de Soporte",
      data: newUser
    })
  }
  async vervisistante({ response }) {
    const newUser = await Database.table('users as i')
      .innerJoin('roles as m', 'i.role_id', 'm.id').select("i.id", "i.username", "i.email", "i.password", "m.rol as Rol").where("Rol", "invitado")
    return response.json({
      status: true,
      mensaje: "Se obtuvieron los usuarios del Rol de Invitado",
      data: newUser
    })
  }



  async actualizarcontra({ request, response, params }) {
    const newUser = await User.find(params.id)

    newUser.password = request.input('password')
    await newUser.save()

    return response.json({
      status: true,
      mensaje: "Se Cambio la contraseña",
      data: newUser
    })

  }
  async update({ request, response, params }) {
    const newUser = await User.find(params.id)
    newUser.username = request.input('username')
    newUser.email = request.input('email')
    newUser.password = request.input('password')
    newUser.role_id = request.input('role_id')
    newUser.status = request.input('status')
    await newUser.save()

    return response.json({
      status: true,
      mensaje: "Se Cambio la Configuracion del Usuario",
      data: newUser
    })

  }
  async destroy({ response, params }) {
    const data = await User.findByOrFail({ id: params.id });
    if (data) {
      data.status = !data.status;

      await data.save();
      return response.json({
        status: true,
        mensaje: "Se Cambio el Status",
        data: data
      })
    }
    return response.json({
      status: true,
      mensaje: "No Jalo",
      data: data
    })
    

  }

}

module.exports = UserController
