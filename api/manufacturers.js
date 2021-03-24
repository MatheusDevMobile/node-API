module.exports = app => {
    const save = (req, res) => {

        app.db('manufacturers')
            .insert(
                {
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone
                })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))

    }

    return { save }
}