module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/manufacturer', app.api.manufacturers.save)
    app.post('/access', app.api.access.save)
    app.post('/product', app.api.products.save)
}