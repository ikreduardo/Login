'use strict'
const User = use('App/Models/User')
class UserController {
    async store({request, response}){
        const userData = request.only(['email','password'])
        const user = await User.create(userData)
        
        //creamos la propiedad status para despues atraparlo en angular
        return response.created({
            status: true,
            data: user
        })
    }
}

module.exports = UserController
