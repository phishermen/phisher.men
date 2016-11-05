const html = require('choo/html')
const css = require('sheetify')

const cls = css('./accountForm.css')

module.exports = (state, prev, send) => html`
<form class="account-form ${cls} " style="margin-bottom: 25px">
  <button type="submit"><i class="fa fa-shield" aria-hidden="true"></i> SIGN UP</button>
</form>
`
