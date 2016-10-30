const html = require('choo/html')
const mainView = require('./main')

//the pageView is used for rendering a whole page
//for either static hosting or server side rendering
const pageView = (state, prev, send) => html`
  <html lang="en">
    <head>
      <meta charset="utf-8">

      <title>phisher.men - simple phishing simulation</title>
      <meta name="description" content="phisher.men is an online service that offers simple phishing simulation to train your employees in recognizing phishing attacks with pay-as-you-go pricing">
    </head>
    <body>
      ${mainView(state, prev, send)}
      <script src="index.js"></script>
    </body>
  </html>
`

module.exports = pageView
