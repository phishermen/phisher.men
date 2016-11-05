const html = require('choo/html')
const css = require('sheetify')

//mainStyle hold all styles for the Main view
const mainStyle = css('./main.css')

//include components
const signupFormView = require('../components/signupForm')
const accountFormView = require('../components/accountForm')

// <form class="account-form">
//     <button
//       type="submit"
//       style="position: absolute; right: 40px; top: 40px; border-color: #27ACFB; color: #27ACFB" />
//
//       <i class="fa fa-shield" aria-hidden="true"></i>SIGN UP
//     </button>
// </form>

//mainView is the first view that both static as dynamically
//rendered html have in common, can be considerd the main container
//of the application
const mainView = (state, prev, send) => html`
  <div id="main" class=${mainStyle}>
    <header>
        <img src="assets/logo.png" />

        ${accountFormView(state,prev,send)}

    </header>

    <main>
      <div id="form-left">
          <img src="assets/form_header.png" />

          ${signupFormView(state, prev, send)}
      </div>

      <div id="form-right">
          <img src="assets/form_right.png" />
      </div>
    </main>

    <summary>
        <div id="ship"></div>
        <div id="ocean-top"></div>
        <div id="ocean">
            <div id="ocean-feature" style="margin-top: 0px">
                <div id="ocean-feature-icon">
                    <i class="fa fa-safari" aria-hidden="true"></i>
                </div>
                <div id="ocean-feature-text">
                    <h1>Feature A</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet ligula dolor. Curabitur tincidunt vitae nibh nec tincidunt. Praesent auctor justo non lectus interdum aliquet. Maecenas lobortis facilisis venenatis. Ut eu dolor sit amet nisl eleifend dapibus non eget sapien. Nam egestas, risus vel molestie pretium, magna neque varius diam.</p>
                </div>
            </div>
            <div id="ocean-feature" style="margin-top: 50px; animation-delay: 1s;">
                <div id="ocean-feature-icon">
                    <i class="fa fa-anchor" aria-hidden="true"></i>
                </div>
                <div id="ocean-feature-text">
                    <h1>Feature B</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet ligula dolor. Curabitur tincidunt vitae nibh nec tincidunt. Praesent auctor justo non lectus interdum aliquet. Maecenas lobortis facilisis venenatis. Ut eu dolor sit amet nisl eleifend dapibus non eget sapien. Nam egestas, risus vel molestie pretium, magna neque varius diam.</p>
                </div>
            </div>
            <div id="ocean-feature" style="margin-top: 25px">
                <div id="ocean-feature-icon">
                    <i class="fa fa-bolt" aria-hidden="true"></i>
                </div>
                <div id="ocean-feature-text">
                    <h1>Feature C</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet ligula dolor. Curabitur tincidunt vitae nibh nec tincidunt. Praesent auctor justo non lectus interdum aliquet. Maecenas lobortis facilisis venenatis. Ut eu dolor sit amet nisl eleifend dapibus non eget sapien. Nam egestas, risus vel molestie pretium, magna neque varius diam.</p>
                </div>
            </div>
        </div>
        <div id="ocean-bottom">
          <div id="ocean-bottom-seaweed-left"></div>
          <div id="ocean-bottom-seaweed-right"></div>
        </div>
    </summary>

    <div id="pricing">
        <h1>Pricing</h1>

        <p>$0.09 per clicked fake phishing link</p>
    </div>

    <div id="try-out">
        <p>Try one of our FREE simulated phishing emails:</p>

        ${signupFormView(state, prev, send)}

        <p>- OR -</p>

        ${accountFormView(state, prev, send)}
    </div>

    <footer>
        <a href="mailto:hello@phisher.men">hello@phisher.men</a><br>
        <a href="tel:+31452211132">+31452211132</a>
    </footer>
  </div>
`

module.exports = mainView
