var AddAnchors = {
  init: function(selector) {
    var elements = this.findElements(selector);
    if (elements) {
      elements.forEach(this.insertLink.bind(this))
    }
  },

  nonsafeChars: /[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\]/g,

  findElements: function(selector) {
    return this.nodeListToArray(document.querySelectorAll(selector))
  },

  insertLink: function(element) {
    var text = element.innerText;
    var fragment = this.createFragment(text)
    var newLink = document.createElement('a');

    element.innerText = ''

    newLink.innerText = text
    newLink.setAttribute('href', '#' + fragment)
    newLink.setAttribute('id', fragment)

    element.appendChild(newLink)
  },

  createFragment: function(text) {
    return text
      .trim()
      .toLowerCase()
      .replace(/\s/g, '-')
      .replace(this.nonsafeChars, '')
  },
  
  nodeListToArray: function(nl) {
    return Array.prototype.slice.call(nl);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  AddAnchors.init('h2')
})
