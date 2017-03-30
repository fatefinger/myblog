/**
 * Created by Administrator on 2017/3/30.
 */
expects = module.exports = function (app) {
    app.get('/', function (req, res) {
        app.redirect('/posts')
    });
    app.use('/signup',require('./signup'));
    app.use('/signout',require('./signout'));
    app.use('/signin',require('./signin'));
    app.use('/posts',require('./posts'))
};