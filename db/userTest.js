// import user model
const User = require('../models/User')

User.create({
    email: 'hakina@matata.com',
    password: 'hakuna matata',
    motto: 'it means no worries'
},(err,createdUser)=>{
    if(err) console.log('Err adding test user', err)
    else console.log('Sucess!', createdUser)
})