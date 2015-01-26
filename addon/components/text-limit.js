import Em from 'ember';

export default Em.Component.extend({
  classNames: ['text-limit'],
  classNameBindings: ['over'],
  max: null,
  textarea: null,
  value: Em.computed.alias('textarea.value'),
  over: Em.computed.lt('remaining', 0),

  count: function() {
    var text = this.get('value');
    return text ? this._count(text) : 0;
  }.property('value'),

  remaining: function() {
    return this.get('max') - this.get('count');
  }.property('max', 'count'),

  actions: {
    register: function(textarea) {
      this.set('textarea', textarea);
    }
  }
});
