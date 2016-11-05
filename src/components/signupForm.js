const html = require('choo/html')
const css = require('sheetify')

const cls = css('./signupForm.css')

module.exports = (state, prev, send) => html`
<form class="signup-form ${cls}" style="margin-left: 120px; margin-top: 50px;">
  <input type="email" placeholder="your-email@company.org" />
  <button type="submit">
    <i class="fa fa-envelope" aria-hidden="true"></i>
    phish me!
  </button>
</form>
`
