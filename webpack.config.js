const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: __dirname+'/src/index.js',
        game: __dirname+'/src/game.js',
        login: __dirname+'/src/login.js',
        signup: __dirname+'/src/signup.js',
        rank: __dirname+'/src/rank.js',
        help: __dirname+'/src/help.js',
        level: __dirname+'/src/level.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist/'
    }
}

