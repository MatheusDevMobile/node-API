module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signIn)

    //User
    app.route('/users')
        .all(app.config.passport.authenticate())
        .get(app.api.user.getUsers)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.user.update)
        .delete(app.api.user.remove)

    //Manufacturer
    app.route('/manufacturers')
        .all(app.config.passport.authenticate())
        .get(app.api.manufacturers.getManufacturers)
        .post(app.api.manufacturers.save)

    app.route('/manufacturers/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.manufacturers.update)
        .delete(app.api.manufacturers.remove)

    //Products  
    app.route('/products')
        .all(app.config.passport.authenticate())
        .get(app.api.products.getProducts)
        .post(app.api.products.save)

    app.route('/products/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.products.update)
        .delete(app.api.products.remove)
    
    //Access  
    app.route('/access')
        .all(app.config.passport.authenticate())
        .get(app.api.access.getAccess)
}