/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-text-limit',

  included: function(app) {
    this._super.included(app);

    // ember-cli bug forces us to put styles in vendor folder for now
    app.import('vendor/ember-text-limit/app.css');
  }
};
