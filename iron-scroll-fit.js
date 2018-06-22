import { Polymer } from '@polymer/polymer/polymer-legacy.js';
import { IronScrollTargetBehavior } from '@polymer/iron-scroll-target-behavior';
import { IronFitBehavior } from '@polymer/iron-fit-behavior';

Polymer({

  is: 'iron-scroll-fit',

  behaviors: [
    IronFitBehavior,
    IronScrollTargetBehavior
  ],

  _scrollHandler(e) {
    this.fit();
  }

});
