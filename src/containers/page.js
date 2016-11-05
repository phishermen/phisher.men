const html = require('choo/html')
const mainView = require('./main')

//the pageView is used for rendering a whole page
//for either static hosting or server side rendering
const pageView = (state, prev, send) => html`
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

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
