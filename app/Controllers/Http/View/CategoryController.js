'use strict'

const Category = use('App/Models/Category');

class CategoryController {
  async index({ response }) {

    const categorias = await Category.query().select("id", "nombre", "icono", "nivel", "status", "roles_id").fetch()
    return response.json({
      status: true,
      mensaje: "Se obtuvieron las Categorias",
      data: categorias
    })
  }
  //Regresar por ID
  async show({ response, params }) {
    const categorias = await Category.query().select("id", "nombre", "icono", "nivel", "status").where({ id: params.id }).first()
    return response.json({
      status: true,
      mensaje: "Se obtuvieron las Categorias por ID",
      data: categorias
    })
  }
  //CONSULTA 
  async CategoriasSoporte({ response, params }) {

    const categorias = await Database.table('categories as c').innerJoin('roles as r', 'c.roles_id', 'r.id')
      .select("c.id", "c.nombre", "c.icono", "c.nivel", "c.status", "r.rol as Rol")

    return response.json({
      status: true,
      mensaje: "Se obtuvieron las Categorias por ID",
      data: categorias
    })
  }

  async store({ request, response, session }) {
    //Crear Una Nueva Categoria.
    const categoria = new Category()

    categoria.nombre = request.input('nombre'),
      categoria.icono = request.input('icono')
    categoria.nivel = request.input('nivel')
    categoria.status = request.input('status')
    categoria.roles_id = request.input('roles_id')
    await categoria.save()

    return response.json({
      status: true,
      mensaje: "Se ha creado la Categoria Correctamente.",
      data: categoria
    })
  }


  async update({ params, request, response }) {
    const categoria = await Category.find(params.id)
    categoria.nombre = request.input('nombre'),
    categoria.icono = request.input('icono'),
    categoria.nivel = request.input('nivel'),
    categoria.status = request.input('status') 
    await categoria.save()

    return response.json({
      status: true,
      mensaje: "Se actualizo la categoria.",
      data: categoria
    })
  }
  //Metodo Borrar Categoria.
  async destroy({ params, response }) {
    const data = await Category.findByOrFail({ id: params.id });
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

module.exports = CategoryController
