const app = require('./src/app')
const yo = require('yo-yo')

const mainEl = document.getElementById('app')
if (mainEl == null) {
  document.body.appendChild(yo`<main id="main"></main>`)
}

app(false).start('#main')
