import { Polymer } from '@polymer/polymer/polymer-legacy.js';

Polymer({

  is: 'iron-scroll-fit',

  behaviors: [
    Polymer.IronFitBehavior,
    Polymer.IronScrollTargetBehavior
  ],

  _scrollHandler(e) {
    this.fit();
  }

});
