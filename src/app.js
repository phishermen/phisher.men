const choo = require('choo')
const html = require('choo/html')
const app = choo()

//Export a constructor that creates a new choo for either
//static rendering or dynamic interactions in the browser
module.exports = (staticRendering = false) => {
  var rootView = require('./containers/main')
  if (staticRendering == true) {
    rootView = require('./containers/page')
  }

  app.router((route) => [
    route('/', rootView)
  ])

  app.model({
    state: {
      domain: 'my-org.com',
    },
    reducers: {
      update: (data, state) => ({ domain: data })
    }
  })

  return app
}
