module.exports = app => {
    
    const getAccess = (req, res) => {
        app.db('access')
            .select('*')
            .orderBy('name')
            .then(users => res.json(users))
    }
    //Verificar melhor se vai ser adicionado também pelo app/web ou só pelo banco

    // const save = (req, res) => {
    //     app.db('access')
    //         .insert(
    //             {
    //                 name: req.body.name,
    //                 description: req.body.description
    //             })
    //         .then(_ => res.status(204).send())
    //         .catch(err => res.status(400).json(err))

    // }

    // const remove = (req, res) =>{
    //     app.db('access')
    //     .where({id: req.params.id})
    //     .del()
    //     .then(rowsDeleted => {
    //         if(rowsDeleted > 0){
    //             res.status(400).send()
    //         } else{
    //             const msg = `Não foi encontrado tipo de acesso com o id ${req.params.id}`
    //             res.status(400).send(msg)
    //         }
    //     })
    //     .catch(err => res.status(400).json(err))
    // }

    return { getAccess }
}