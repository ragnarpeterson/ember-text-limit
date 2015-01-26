import TextLimit from './text-limit';

var WORD = /\S+/g;

export default TextLimit.extend({
  _count: function(text) {
    var words = text.match(WORD);
    return words ? words.length : 0;
  }
});
