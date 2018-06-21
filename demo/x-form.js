import '../google-recaptcha.js';


Polymer({
  _template: `
    <style>
      :host {
        display: block;
        height: 150vh;
        @apply --paper-font-common-base;
      }
    </style>

    <paper-input label="V2 recpatcha token" readonly="" value="[[v2token]]"></paper-input>

    <paper-input label="Invisible recpatcha token" readonly="" value="[[invisibleToken]]"></paper-input>

    <paper-button on-tap="reset">Reset </paper-button>
    
    <!--
      Please create your own sitekey at https://www.google.com/recaptcha/admin
    -->

    <h2>V2 Recaptcha</h2>

    <google-recaptcha id="v2Recaptcha" value="{{v2token}}" sitekey="6LdHISEUAAAAAN0FxtC5OBGQv-zrtj1tQ1Z_KUWf"></google-recaptcha>

    <h2>Invisible</h2>

    <google-recaptcha id="invisibleRecaptcha" invisible="" badge="inline" value="{{invisibleToken}}" sitekey="6LdHISEUAAAAAN0FxtC5OBGQv-zrtj1tQ1Z_KUWf"></google-recaptcha>

    <paper-button on-tap="executeInvisibleRecaptcha">Execute invisible recaptcha</paper-button>
`,

  is: 'x-form',

  executeInvisibleRecaptcha: function() {
    this.$.invisibleRecaptcha.execute();
  },

  reset: function() {
    this.$.v2Recaptcha.reset();
    this.$.invisibleRecaptcha.reset();
  }
});
