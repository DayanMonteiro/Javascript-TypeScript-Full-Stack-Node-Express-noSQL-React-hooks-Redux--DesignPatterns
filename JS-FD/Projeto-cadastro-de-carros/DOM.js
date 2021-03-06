(function(win, document){
    'use strict';

    function DOM(elements){
        if(!(this instanceof DOM))
            return new DOM(elements);

        this.element = document.querySelectorAll(elements);
       // if(this.element.length === 1);
       // return this.get();
      }
      
      // metodos estáticos
      DOM.isNumber = function isNumber(parametro){
        return Object.prototype.toString.call(parametro) === '[object Number]';
      };
      
      DOM.isString = function isString(parametro){
        return Object.prototype.toString.call(parametro) === '[object String]';
      };
      
      DOM.isBoolean = function isBoolean(parametro){
        return Object.prototype.toString.call(parametro) === '[object Boolean]';
      };
      
      DOM.isNull = function isNull(parametro){
        return Object.prototype.toString.call(parametro) === '[object Null]'
        || Object.prototype.toString.call(parametro) === '[object Undefined]';
      };

      //fim dos metodos estáticos

      DOM.prototype.on = function on(eventType, callback) {
        Array.prototype.forEach.call(this.element, function(element){
          element.addEventListener(eventType, callback, false);
        });
      };
      
      DOM.prototype.off = function off(eventType, callback) {
        Array.prototype.forEach.call(this.element, function(element){
          element.removeEventListener(eventType, callback, false);
        });
      };
      
      DOM.prototype.get = function get(index) {
          if(!index)
        return this.element[0];
        return this.element[index];
      };
    
      DOM.prototype.forEach = function forEach() {
        return Array.prototype.forEach.apply(this.element, arguments);
      };
    
      DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.element, arguments);
      };
    
      DOM.prototype.filter = function filter() {
        return Array.prototype.filter.apply(this.element, arguments);
      };
    
      DOM.prototype.reduce = function reduce() {
        return Array.prototype.reduce.apply(this.element, arguments);
      };
    
      DOM.prototype.reduceRight = function reduceRight() {
        return Array.prototype.reduceRight.apply(this.element, arguments);
      };
    
      DOM.prototype.every = function every() {
        return Array.prototype.every.apply(this.element, arguments);
      };
    
      DOM.prototype.some = function some() {
        return Array.prototype.some.apply(this.element, arguments);
      }; 
    
    DOM.prototype.isArray = function isArray(parametro){
      return Object.prototype.toString.call(parametro) === '[object Array]';
    };
    
    DOM.prototype.isObject = function isObject(parametro){
      return Object.prototype.toString.call(parametro) === '[object Object]';
    };
    
    DOM.prototype.isFunction = function isFunction(parametro){
      return Object.prototype.toString.call(parametro) === '[object Function]';
    };
  
    
//para reconhecer a DOM
win.DOM = DOM;
}(window, document));