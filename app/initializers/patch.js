import Em from 'ember';
import TextLimit from 'ember-text-limit/components/text-limit';

export default {
  name: 'patch',

  initialize: function() {
    Em.TextArea.reopen({
      _registerWithTextLimit: function() {
        var parent = this.get('parentView');
        if (parent instanceof TextLimit) { parent.send('register', this); }
      }.on('init')
    })
  }
};
