'use strict'
const {formatters}=use('Validator')
class StoreUser {
  get rules () {
    return {
      email:'required|email|max:255|unique:users,email',
      password:'required|max:100' 
    }
  }
  get validateAll(){
    return true
  }
  get formatter(){
    return formatters.JsonApi;
  }
}
module.exports = StoreUser
