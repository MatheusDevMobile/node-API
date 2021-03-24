module.exports = app => {
    const save = (req, res) => {

        app.db('products')
            .insert(
                {
                    name: req.body.name,
                    description: req.body.description,
                    manufacturerId: req.body.manufacturerid
                })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))

    }

    return { save }
}