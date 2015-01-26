import TextLimit from './text-limit';

export default TextLimit.extend({
  _count: function(text) {
    return text.length;
  }
});
