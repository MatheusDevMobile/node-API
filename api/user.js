const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const getHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))

        })
    }

    const uuid = () => {

        // Retorna um número randômico entre 0 e 15.
        function randomDigit() {
    
            return ((Math.random() * 16) | 0).toString(16);
            
        }
        
        // para cada caracter [x] na string abaixo um valor hexadecimal é gerado via
        // replace:
        return 'xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx'.replace(/x/g, randomDigit);
    }
    

    const getUsers = (req, res) => {
        app.db('users')
            .select('name', 'email', 'typeOfAccessId')
            .orderBy('name')
            .then(users => res.json(users))
    }

    const save = (req, res) => {
        getHash(req.body.password, hash => {
            const password = hash

            app.db('users')
                .insert(
                    {
                        name: req.body.name,
                        email: req.body.email,
                        password,
                        guid: uuid(),
                        typeOfAccessId: req.body.typeOfAccessId,
                    })
                .then(_ => res.status(200).send('Salvo com sucesso!'))
                .catch(err => res.status(400).json(err))
        })
    }

    const remove = (req, res) => {
        app.db('users')
            .where({ id: req.params.id })
            .del()
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.status(200).send('Usuário excluído com sucesso!')
                } else {
                    const msg = `Não foi encontrado usuário com o id ${req.params.id}`
                    res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).json(err))
    }

    const update = (req, res) => {
        app.db('users')
            .where({ id: req.params.id })
            .update(req.body)
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.status(200).send('Informações do usuário atualizadas!')
                } else {
                    const msg = `Não foi encontrado fabricante com o id ${req.params.id}`
                    res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).json(err))
    }

    return { getUsers, save, remove, update }
}