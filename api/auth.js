const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signIn = async (req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send('Dados incompletos!')
        }

        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if (err || !isMatch) {
                    return req.status(401).send()
                }

                const payLoad = { guid: user.guid }
                res.json({
                    name: user.name,
                    email: user.email,
                    token: jwt.encode(payLoad, authSecret)
                })
            })
        } else {
            return res.status(400).send('Usuário não cadastrado!')
        }
    }

    return { signIn }
}