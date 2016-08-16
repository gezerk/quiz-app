const getConfig = require('hjs-webpack')
const React = require('react')

module.exports = getConfig({
    in: 'src/app.js',
    out: 'public',
    clearBeforeBuild: true
})
