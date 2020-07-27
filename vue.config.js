const webpack = require('webpack')
const path = require('path')
const appData = require('./data.json')
const sellers = appData.sellers
const goods = appData.goods
const ratings = appData.ratings
const sellertype = appData.sellertype

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before(app) {
      app.get('/api/sellers', function (req, res) {
        res.json({
          errno: 0,
          data: sellers
        })
      })
      app.get('/api/goods', function (req, res) {
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get('/api/ratings', function (req, res) {
        res.json({
          errno: 0,
          data: ratings
        })
      })
      app.get('/api/sellertype',function (req, res){
        res.json({
          errno: 0,
          data: sellertype
        })
      })
    }
  }
}
