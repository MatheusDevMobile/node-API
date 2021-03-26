module.exports = app => {
    const getManufacturers = (req, res) => {
        app.db('manufacturers')
            .select('*')
            .orderBy('name')
            .then(users => res.json(users))
    }
    
    const save = (req, res) => {
        app.db('manufacturers')
            .insert(
                {
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone
                })
            .then(_ => res.status(200).send('Fabricante inserido com sucesso!'))
            .catch(err => res.status(400).json(err))

    }

    const update = (req, res) => {
        app.db('manufacturers')
            .where({ id: req.params.id })
            .update(req.body)
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.status(200).send('Informações do Fabricante atualizadas!')
                } else {
                    const msg = `Não foi encontrado fabricante com o id ${req.params.id}`
                    res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).json(err))
    }

    const remove = (req, res) => {
        app.db('manufacturers')
            .where({ id: req.params.id })
            .del()
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.status(200).send('Fabricante excluído com sucesso!')
                } else {
                    const msg = `Não foi encontrado fabricante com o id ${req.params.id}`
                    res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).json(err))
    }

    return { getManufacturers, save, update, remove }
}