/**
 * value
 * get/set input values plugin for element
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Component dependencies
 */

var type = require('element-type');

/**
 * Expose component
 */

module.exports = function (element) {

  element.use(type);

  /**
   * value
   * Get/Set value.
   *
   * @param {Mixed} [value] value to set
   * @api public
   */
  
  element.prototype.value = function (value) {
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
  
  element.prototype.get_value = function () {
    var el = this.el;
    var type = this.type();
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
  
  element.prototype.set_value = function (value) {
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

  return element;
}
