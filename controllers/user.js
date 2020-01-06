
var sequelize = require('../models/index')
var user = require('../models/user')


function create_user (params) {
    user.create({
        name: params['name'],
        email: params['email'],
        password: params['password'],
        salt: params['password'],
        author_pseudonym: params['author_pseudonym']
    }).then(function(users){
        if (users) {
            return {'status': true, 'message': 'user created successfully'}
        } else {
            return {'status': false, 'message': 'failed to create user'}
        }
    })
}


function login (params) {
    user.find({
        where: {
            email: params['email']
        }
    }).then(function(row){
        if(!row){
            return {'message': 'user not found', 'status': -1}
        }else{
            password =  params['password']
            user_data = row.dataValue
        }
    })
}


module.exports = {
    'create_user': create_user,
    'login': login
}

