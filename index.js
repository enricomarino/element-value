
/**
 * Element
 * Element get/set input values component
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Expose `Element`
 */

module.exports = Element;

/**
 * Element
 */

function Element(el, val){
  this.el = el;
};

/**
 * value
 * Get/Set value.
 *
 * @param {Mixed} [value] value to set
 * @api public
 */

Element.prototype.value = function (value) {
  if (1 == arguments.length) {
    return this.set_value(value);
  }
  return this.get_value();
};

/**
 * get_value
 * Get value.
 *
 * @return {Mixed} the value.
 * @api public
 */

Element.prototype.get_value = function () {
  var el = this.el;
  var type = typeof(el);
  var value;
  var checked;

  if ('checkbox' === type) {
    checked = el.getAttribute('checked');
    if ('checked' === checked) {
      value = el.getAttribute('value');
      if (value == null) {
        return true;
      }
      return value;
    }
    return false;
  }

  return el.value;
};

/**
 * set_value
 * Set value.
 *
 * @param {Mixed} value value to set
 * @return {Element} this for chaining
 * @api public
 */

Element.prototype.set_value = function (value) {
  var el = this.el;
  var type = typeof(el);
  
  if ('checkbox' === type) {
    if (value) {
      el.setAttribute('checked', 'checked');
    } else {
      el.removeAttribute('checked');
    }
    return this;
  }

  if ('input' === type) {
    el.setAttribute('value', val);
    return this;
  }

  el.value = value;
  return this;
};

/**
 * typeof
 * Element type.
 * 
 * @api private
 */

function typeof(el) {
  var name = el.nodeName.toLowerCase();
  if ('input' == name && 'checkbox' == el.getAttribute('type')) {
    return 'checkbox';
  }
  return name.toLowerCase();
}
