module.exports = app => {
    const getProducts = (req, res) => {
        app.db('products')
            .select('*')
            .orderBy('name')
            .then(users => res.json(users))
    }

    const save = (req, res) => {
        app.db('products')
            .insert(
                {
                    name: req.body.name,
                    description: req.body.description,
                    manufacturerId: req.body.manufacturerid
                })
            .then(_ => res.status(200).send('Produto cadastrado com sucesso!'))
            .catch(err => res.status(400).json(err))

    }

    const update = (req, res) => {
        app.db('products')
            .where({ id: req.params.id })
            .update(req.body)
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.status(200).send('Informações do produto atualizadas!')
                } else {
                    const msg = `Não foi encontrado fabricante com o id ${req.params.id}`
                    res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).json(err))
    }

    const remove = (req, res) =>{
        app.db('products')
        .where({id: req.params.id})
        .del()
        .then(rowsDeleted => {
            if(rowsDeleted > 0){
                res.status(200).send('Produto excluído com sucesso!')
            } else{
                const msg = `Não foi encontrado produto com o id ${req.params.id}`
                res.status(400).send(msg)
            }
        })
        .catch(err => res.status(400).json(err))
    }

    return { getProducts, save, update, remove }
}