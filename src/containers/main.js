const html = require('choo/html')

//mainView is the first view that both static as dynamically
//rendered html have in common, can be considerd the main container
//of the application
const mainView = (state, prev, send) => html`
  <main id="main">
    <h1>Domain: ${state.domain}</h1>
    <input
      type="text"
      oninput=${(e) => { return send('update', e.target.value)}}>
  </main>
`

module.exports = mainView
