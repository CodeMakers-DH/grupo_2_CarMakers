const res = require('express/lib/response')
const db = require('./database/models')


db.Emails.create({
    email: 'oso@gmail.com'
})

