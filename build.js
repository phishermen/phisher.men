const app = require('./src/app')

//output a static homepage that produces SEO friendly html while actual
//user agents (browsers) will render an interactive version over it
console.log("<!doctype html>\n"+
  app(true).toString("/", null)
)
