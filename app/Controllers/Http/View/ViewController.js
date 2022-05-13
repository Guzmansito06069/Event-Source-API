'use strict'

const View = use('App/Models/View');

class ViewController {
  async index({ response }) {
    const vistas = await View.query().select("id", "nombre", "nivel", "ruta", "icono", "category_id", "status").fetch()
    return response.json({
      status: true,
      mensaje: "Se obtuvieron las vistas",
      data: vistas
    })
  }
  //Regresar por ID
  async show({ response, params }) {
    const vistas = await View.query().select("id", "nombre", "icono", "nivel","ruta", "status").where({ id: params.id }).first()
    return response.json({
      status: true,
      mensaje: "Se obtuvieron las vistas por ID",
      data: vistas
    })
  }
  async VistaSoporte({ response, params }) {

    const categorias = await Database.table('views as v').innerJoin('categories as c', 'c.roles_id', 'r.id')
      .select("c.id", "c.nombre", "c.icono", "c.nivel", "c.status", "r.rol as Rol")

    return response.json({
      status: true,
      mensaje: "Se obtuvieron las Categorias por ID",
      data: categorias
    })
  }

  async store({ request, response, session }) {
    //Crear Una Nueva Categoria.
    const vistas = new View()

    vistas.nombre = request.input('nombre'),
    vistas.icono = request.input('icono')
    vistas.nivel = request.input('nivel')
    vistas.ruta = request.input('ruta')
    vistas.category_id = request.input('category_id')
    vistas.status = request.input('status')
    await vistas.save()

    return response.json({
      status: true,
      mensaje: "Se ha creado la Vista Correctamente.",
      data: vistas
    })
  }


  async update({ params, request, response }) {
    const vistas = await View.find(params.id)
    vistas.nombre = request.input('nombre'),
    vistas.icono = request.input('icono')
    vistas.nivel = request.input('nivel')
    vistas.ruta = request.input('ruta')
    vistas.categoria_id = request.input('categoria_id')
    vistas.status = request.input('status')
    await vistas.save()

    return response.json({
      status: true,
      mensaje: "Se actualizo la Vista.",
      data: vistas
    })
  }
  //Metodo Borrar Categoria.
  async destroy({ params, response }) {
    const data = await View.findByOrFail({ id: params.id });
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

module.exports = ViewController
