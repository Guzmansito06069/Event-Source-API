'use strict'
const Database = use('Database')
const Role = use('App/Models/Role')
const Categoria = use('App/Models/Category')
const Vista = use('App/Models/View')


class RoleController {
  async index({ response }) {
    const role = await Role.all()

    return response.json({
      "message": {
        "status": true,
        "message": "Lista de Roles",
      },
      "data": role
    })

  }
  async x({ response, params }) {

    const todo = await Database.table('roles as r').innerJoin('categories as c', 'c.roles_id', 'r.id')
      .innerJoin('views as v', 'v.category_id', 'c.id')
      .select("r.rol as Rol", "c.nombre as Categoria", "c.icono", "c.nivel", "v.nombre as Vistas", "v.icono", "v.ruta")
      .where("Rol", "soporte").groupBy('Categoria')

    return response.json({
      status: true,
      mensaje: "Se obtuvo el menu.",
      data: todo
    })
  }
  async VerMenu({ response }) {
    const CateView = await Categoria.query().with('View', (builder) => {
      builder.where('status', 1)
    }).fetch()
    return response.json({
      status: true,
      mensaje: "Se obtuvo el menu.",
      data: CateView
    })
  }
  /**
   * Create/save a new Role.
   * POST role
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {

    const data = new Role()

    data.rol = request.input('rol'),
      // data.status = request.input('status')
    await data.save()

    return response.json({
      status: true,
      mensaje: "Se Creo el Rol",
      data: data
    })

  }

  /**
  * Display a single Role.
  * GET role/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async show({ params, response }) {

    try {
      const role = await Role.findOrFail(params.id);

      return response.ok({
        "message": {
          "status": true,
          "message": "El Rol Fue Encontrada Exitosamente",
        },

        "data": role
      })
    }
    catch (error) {
      return response.status(500).json({
        "message": {
          "status": false,
          "message": "El Rol No Fue Encontrado.",
        },

        "data": error
      })
    }

  }

  /**
  * Update Role details.
  * PUT or PATCH role/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async update({ request, response, params }) {
    const data = await Role.findByOrFail({ id: params.id });
    data.rol = request.input('rol'),
    data.status = request.input('status')
    await data.save()
    
    return response.json({
      status: true,
      mensaje: "Se actualizo el Rol",
      data: data
    })
  }
  /**
  * Delete a Role with id.
  * DELETE role/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */

  async otro({ params, response }) {
    const data = await Role.findByOrFail({ id: params.id });
    await data.delete()

    return response.json({
      status: true,
      mensaje: "Se elimino el Role",
      data: data
    })
  }
  async destroy({ response, params }) {
    const data = await Role.findByOrFail({ id: params.id });
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


module.exports = RoleController
