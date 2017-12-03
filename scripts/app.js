/*!
 * modernizr v3.5.0
 * Build https://modernizr.com/download?-csstransforms-csstransforms3d-inlinesvg-svg-touchevents-prefixed-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
!function(e,t,n){function r(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(){var e=t.body;return e||(e=s(x?"svg":"body"),e.fake=!0),e}function a(e,n,r,o){var a,f,l,u,p="modernizr",d=s("div"),c=i();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=o?o[r]:p+(r+1),d.appendChild(l);return a=s("style"),a.type="text/css",a.id="s"+p,(c.fake?c:d).appendChild(a),c.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),d.id=p,c.fake&&(c.style.background="",c.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(c)),f=n(d,e),c.fake?(c.parentNode.removeChild(c),S.style.overflow=u,S.offsetHeight):d.parentNode.removeChild(d),!!f}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function l(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function u(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+f(t[o])+":"+r+")");return s=s.join(" or "),a("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==l(e,null,"position")})}return n}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t,i,a){function f(){d&&(delete z.style,delete z.modElem)}if(a=!r(a,"undefined")&&a,!r(i,"undefined")){var l=u(e,i);if(!r(l,"undefined"))return l}for(var d,c,m,v,h,g=["modernizr","tspan","samp"];!z.style&&g.length;)d=!0,z.modElem=s(g.shift()),z.style=z.modElem.style;for(m=e.length,c=0;c<m;c++)if(v=e[c],h=z.style[v],o(v,"-")&&(v=p(v)),z.style[v]!==n){if(a||r(i,"undefined"))return f(),"pfx"!=t||v;try{z.style[v]=i}catch(e){}if(z.style[v]!=h)return f(),"pfx"!=t||v}return f(),!1}function c(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var o;for(var s in e)if(e[s]in t)return!1===n?e[s]:(o=t[e[s]],r(o,"function")?c(o,n||t):o);return!1}function v(e,t,n,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?d(a,t,o,s):(a=(e+" "+P.join(i+" ")+i).split(" "),m(a,t,n))}function h(e,t,r){return v(e,n,n,t,r)}var g=[],y={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){g.push({name:e,fn:t,options:n})},addAsyncTest:function(e){g.push({name:null,fn:e})}},C=function(){};C.prototype=y,C=new C;var w=[],S=t.documentElement,x="svg"===S.nodeName.toLowerCase(),_="Moz O ms Webkit",b=y._config.usePrefixes?_.split(" "):[];y._cssomPrefixes=b;var T={elem:s("modernizr")};C._q.push(function(){delete T.elem});var z={style:T.elem.style};C._q.unshift(function(){delete z.style});var P=y._config.usePrefixes?_.toLowerCase().split(" "):[];y._domPrefixes=P,y.testAllProps=v;var E=function(t){var r,o=A.length,s=e.CSSRule;if(void 0===s)return n;if(!t)return!1;if(t=t.replace(/^@/,""),(r=t.replace(/-/g,"_").toUpperCase()+"_RULE")in s)return"@"+t;for(var i=0;i<o;i++){var a=A[i];if(a.toUpperCase()+"_"+r in s)return"@-"+a.toLowerCase()+"-"+t}return!1};y.atRule=E;y.prefixed=function(e,t,n){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=p(e)),t?v(e,t,n):v(e,"pfx"))};C.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),y.testAllProps=h,C.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)});var N=y.testStyles=a,j="CSS"in e&&"supports"in e.CSS,k="supportsCSS"in e;C.addTest("supports",j||k),C.addTest("csstransforms3d",function(){var e=!!h("perspective","1px",!0),t=C._config.usePrefixes;if(e&&(!t||"webkitPerspective"in S.style)){var n;C.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",N("#modernizr{width:0;height:0}"+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),C.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var A=y._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];y._prefixes=A,C.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",A.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");N(r,function(e){n=9===e.offsetTop})}return n}),function(){var e,t,n,o,s,i,a;for(var f in g)if(g.hasOwnProperty(f)){if(e=[],t=g[f],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?C[a[0]]=o:(!C[a[0]]||C[a[0]]instanceof Boolean||(C[a[0]]=new Boolean(C[a[0]])),C[a[0]][a[1]]=o),w.push((o?"":"no-")+a.join("-"))}}(),function(e){var t=S.className,n=C._config.classPrefix||"";if(x&&(t=t.baseVal),C._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}C._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?S.className.baseVal=t:S.className=t)}(w),delete y.addTest,delete y.addAsyncTest;for(var L=0;L<C._q.length;L++)C._q[L]();e.Modernizr=C}(window,document);
/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

  "use strict";

  if ( typeof module === "object" && typeof module.exports === "object" ) {

    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ?
      factory( global, true ) :
      function( w ) {
        if ( !w.document ) {
          throw new Error( "jQuery requires a window with a document" );
        }
        return factory( w );
      };
  } else {
    factory( global );
  }

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



  function DOMEval( code, doc ) {
    doc = doc || document;

    var script = doc.createElement( "script" );

    script.text = code;
    doc.head.appendChild( script ).parentNode.removeChild( script );
  }
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
  version = "3.1.1",

  // Define a local copy of jQuery
  jQuery = function( selector, context ) {

    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init( selector, context );
  },

  // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

  // Matches dashed string for camelizing
  rmsPrefix = /^-ms-/,
  rdashAlpha = /-([a-z])/g,

  // Used by jQuery.camelCase as callback to replace()
  fcamelCase = function( all, letter ) {
    return letter.toUpperCase();
  };

jQuery.fn = jQuery.prototype = {

  // The current version of jQuery being used
  jquery: version,

  constructor: jQuery,

  // The default length of a jQuery object is 0
  length: 0,

  toArray: function() {
    return slice.call( this );
  },

  // Get the Nth element in the matched element set OR
  // Get the whole matched element set as a clean array
  get: function( num ) {

    // Return all the elements in a clean array
    if ( num == null ) {
      return slice.call( this );
    }

    // Return just the one element from the set
    return num < 0 ? this[ num + this.length ] : this[ num ];
  },

  // Take an array of elements and push it onto the stack
  // (returning the new matched element set)
  pushStack: function( elems ) {

    // Build a new jQuery matched element set
    var ret = jQuery.merge( this.constructor(), elems );

    // Add the old object onto the stack (as a reference)
    ret.prevObject = this;

    // Return the newly-formed element set
    return ret;
  },

  // Execute a callback for every element in the matched set.
  each: function( callback ) {
    return jQuery.each( this, callback );
  },

  map: function( callback ) {
    return this.pushStack( jQuery.map( this, function( elem, i ) {
      return callback.call( elem, i, elem );
    } ) );
  },

  slice: function() {
    return this.pushStack( slice.apply( this, arguments ) );
  },

  first: function() {
    return this.eq( 0 );
  },

  last: function() {
    return this.eq( -1 );
  },

  eq: function( i ) {
    var len = this.length,
      j = +i + ( i < 0 ? len : 0 );
    return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
  },

  end: function() {
    return this.prevObject || this.constructor();
  },

  // For internal use only.
  // Behaves like an Array's method, not like a jQuery method.
  push: push,
  sort: arr.sort,
  splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
  var options, name, src, copy, copyIsArray, clone,
    target = arguments[ 0 ] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  // Handle a deep copy situation
  if ( typeof target === "boolean" ) {
    deep = target;

    // Skip the boolean and the target
    target = arguments[ i ] || {};
    i++;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
    target = {};
  }

  // Extend jQuery itself if only one argument is passed
  if ( i === length ) {
    target = this;
    i--;
  }

  for ( ; i < length; i++ ) {

    // Only deal with non-null/undefined values
    if ( ( options = arguments[ i ] ) != null ) {

      // Extend the base object
      for ( name in options ) {
        src = target[ name ];
        copy = options[ name ];

        // Prevent never-ending loop
        if ( target === copy ) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
          ( copyIsArray = jQuery.isArray( copy ) ) ) ) {

          if ( copyIsArray ) {
            copyIsArray = false;
            clone = src && jQuery.isArray( src ) ? src : [];

          } else {
            clone = src && jQuery.isPlainObject( src ) ? src : {};
          }

          // Never move original objects, clone them
          target[ name ] = jQuery.extend( deep, clone, copy );

        // Don't bring in undefined values
        } else if ( copy !== undefined ) {
          target[ name ] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
};

jQuery.extend( {

  // Unique for each copy of jQuery on the page
  expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

  // Assume jQuery is ready without the ready module
  isReady: true,

  error: function( msg ) {
    throw new Error( msg );
  },

  noop: function() {},

  isFunction: function( obj ) {
    return jQuery.type( obj ) === "function";
  },

  isArray: Array.isArray,

  isWindow: function( obj ) {
    return obj != null && obj === obj.window;
  },

  isNumeric: function( obj ) {

    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type( obj );
    return ( type === "number" || type === "string" ) &&

      // parseFloat NaNs numeric-cast false positives ("")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      !isNaN( obj - parseFloat( obj ) );
  },

  isPlainObject: function( obj ) {
    var proto, Ctor;

    // Detect obvious negatives
    // Use toString instead of jQuery.type to catch host objects
    if ( !obj || toString.call( obj ) !== "[object Object]" ) {
      return false;
    }

    proto = getProto( obj );

    // Objects with no prototype (e.g., `Object.create( null )`) are plain
    if ( !proto ) {
      return true;
    }

    // Objects with prototype are plain iff they were constructed by a global Object function
    Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
    return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
  },

  isEmptyObject: function( obj ) {

    /* eslint-disable no-unused-vars */
    // See https://github.com/eslint/eslint/issues/6125
    var name;

    for ( name in obj ) {
      return false;
    }
    return true;
  },

  type: function( obj ) {
    if ( obj == null ) {
      return obj + "";
    }

    // Support: Android <=2.3 only (functionish RegExp)
    return typeof obj === "object" || typeof obj === "function" ?
      class2type[ toString.call( obj ) ] || "object" :
      typeof obj;
  },

  // Evaluates a script in a global context
  globalEval: function( code ) {
    DOMEval( code );
  },

  // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 13
  // Microsoft forgot to hump their vendor prefix (#9572)
  camelCase: function( string ) {
    return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
  },

  nodeName: function( elem, name ) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  },

  each: function( obj, callback ) {
    var length, i = 0;

    if ( isArrayLike( obj ) ) {
      length = obj.length;
      for ( ; i < length; i++ ) {
        if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
          break;
        }
      }
    } else {
      for ( i in obj ) {
        if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
          break;
        }
      }
    }

    return obj;
  },

  // Support: Android <=4.0 only
  trim: function( text ) {
    return text == null ?
      "" :
      ( text + "" ).replace( rtrim, "" );
  },

  // results is for internal usage only
  makeArray: function( arr, results ) {
    var ret = results || [];

    if ( arr != null ) {
      if ( isArrayLike( Object( arr ) ) ) {
        jQuery.merge( ret,
          typeof arr === "string" ?
          [ arr ] : arr
        );
      } else {
        push.call( ret, arr );
      }
    }

    return ret;
  },

  inArray: function( elem, arr, i ) {
    return arr == null ? -1 : indexOf.call( arr, elem, i );
  },

  // Support: Android <=4.0 only, PhantomJS 1 only
  // push.apply(_, arraylike) throws on ancient WebKit
  merge: function( first, second ) {
    var len = +second.length,
      j = 0,
      i = first.length;

    for ( ; j < len; j++ ) {
      first[ i++ ] = second[ j ];
    }

    first.length = i;

    return first;
  },

  grep: function( elems, callback, invert ) {
    var callbackInverse,
      matches = [],
      i = 0,
      length = elems.length,
      callbackExpect = !invert;

    // Go through the array, only saving the items
    // that pass the validator function
    for ( ; i < length; i++ ) {
      callbackInverse = !callback( elems[ i ], i );
      if ( callbackInverse !== callbackExpect ) {
        matches.push( elems[ i ] );
      }
    }

    return matches;
  },

  // arg is for internal usage only
  map: function( elems, callback, arg ) {
    var length, value,
      i = 0,
      ret = [];

    // Go through the array, translating each of the items to their new values
    if ( isArrayLike( elems ) ) {
      length = elems.length;
      for ( ; i < length; i++ ) {
        value = callback( elems[ i ], i, arg );

        if ( value != null ) {
          ret.push( value );
        }
      }

    // Go through every key on the object,
    } else {
      for ( i in elems ) {
        value = callback( elems[ i ], i, arg );

        if ( value != null ) {
          ret.push( value );
        }
      }
    }

    // Flatten any nested arrays
    return concat.apply( [], ret );
  },

  // A global GUID counter for objects
  guid: 1,

  // Bind a function to a context, optionally partially applying any
  // arguments.
  proxy: function( fn, context ) {
    var tmp, args, proxy;

    if ( typeof context === "string" ) {
      tmp = fn[ context ];
      context = fn;
      fn = tmp;
    }

    // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.
    if ( !jQuery.isFunction( fn ) ) {
      return undefined;
    }

    // Simulated bind
    args = slice.call( arguments, 2 );
    proxy = function() {
      return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
    };

    // Set the guid of unique handler to the same of original handler, so it can be removed
    proxy.guid = fn.guid = fn.guid || jQuery.guid++;

    return proxy;
  },

  now: Date.now,

  // jQuery.support is not used in Core but other projects attach their
  // properties to it so it needs to exist.
  support: support
} );

if ( typeof Symbol === "function" ) {
  jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
  class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

  // Support: real iOS 8.2 only (not reproducible in simulator)
  // `in` check used to prevent JIT error (gh-2145)
  // hasOwn isn't used here due to false negatives
  // regarding Nodelist length in IE
  var length = !!obj && "length" in obj && obj.length,
    type = jQuery.type( obj );

  if ( type === "function" || jQuery.isWindow( obj ) ) {
    return false;
  }

  return type === "array" || length === 0 ||
    typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
  support,
  Expr,
  getText,
  isXML,
  tokenize,
  compile,
  select,
  outermostContext,
  sortInput,
  hasDuplicate,

  // Local document vars
  setDocument,
  document,
  docElem,
  documentIsHTML,
  rbuggyQSA,
  rbuggyMatches,
  matches,
  contains,

  // Instance-specific data
  expando = "sizzle" + 1 * new Date(),
  preferredDoc = window.document,
  dirruns = 0,
  done = 0,
  classCache = createCache(),
  tokenCache = createCache(),
  compilerCache = createCache(),
  sortOrder = function( a, b ) {
    if ( a === b ) {
      hasDuplicate = true;
    }
    return 0;
  },

  // Instance methods
  hasOwn = ({}).hasOwnProperty,
  arr = [],
  pop = arr.pop,
  push_native = arr.push,
  push = arr.push,
  slice = arr.slice,
  // Use a stripped-down indexOf as it's faster than native
  // https://jsperf.com/thor-indexof-vs-for/5
  indexOf = function( list, elem ) {
    var i = 0,
      len = list.length;
    for ( ; i < len; i++ ) {
      if ( list[i] === elem ) {
        return i;
      }
    }
    return -1;
  },

  booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

  // Regular expressions

  // http://www.w3.org/TR/css3-selectors/#whitespace
  whitespace = "[\\x20\\t\\r\\n\\f]",

  // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
  identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

  // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
  attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
    // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace +
    // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
    "*\\]",

  pseudos = ":(" + identifier + ")(?:\\((" +
    // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
    // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
    // 3. anything else (capture 2)
    ".*" +
    ")\\)|)",

  // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
  rwhitespace = new RegExp( whitespace + "+", "g" ),
  rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

  rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
  rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

  rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

  rpseudo = new RegExp( pseudos ),
  ridentifier = new RegExp( "^" + identifier + "$" ),

  matchExpr = {
    "ID": new RegExp( "^#(" + identifier + ")" ),
    "CLASS": new RegExp( "^\\.(" + identifier + ")" ),
    "TAG": new RegExp( "^(" + identifier + "|[*])" ),
    "ATTR": new RegExp( "^" + attributes ),
    "PSEUDO": new RegExp( "^" + pseudos ),
    "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
      "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
      "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
    "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
    // For use in libraries implementing .is()
    // We use this for POS matching in `select`
    "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
      whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
  },

  rinputs = /^(?:input|select|textarea|button)$/i,
  rheader = /^h\d$/i,

  rnative = /^[^{]+\{\s*\[native \w/,

  // Easily-parseable/retrievable ID or TAG or CLASS selectors
  rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

  rsibling = /[+~]/,

  // CSS escapes
  // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
  runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
  funescape = function( _, escaped, escapedWhitespace ) {
    var high = "0x" + escaped - 0x10000;
    // NaN means non-codepoint
    // Support: Firefox<24
    // Workaround erroneous numeric interpretation of +"0x"
    return high !== high || escapedWhitespace ?
      escaped :
      high < 0 ?
        // BMP codepoint
        String.fromCharCode( high + 0x10000 ) :
        // Supplemental Plane codepoint (surrogate pair)
        String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
  },

  // CSS string/identifier serialization
  // https://drafts.csswg.org/cssom/#common-serializing-idioms
  rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
  fcssescape = function( ch, asCodePoint ) {
    if ( asCodePoint ) {

      // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
      if ( ch === "\0" ) {
        return "\uFFFD";
      }

      // Control characters and (dependent upon position) numbers get escaped as code points
      return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
    }

    // Other potentially-special ASCII characters get backslash-escaped
    return "\\" + ch;
  },

  // Used for iframes
  // See setDocument()
  // Removing the function wrapper causes a "Permission Denied"
  // error in IE
  unloadHandler = function() {
    setDocument();
  },

  disabledAncestor = addCombinator(
    function( elem ) {
      return elem.disabled === true && ("form" in elem || "label" in elem);
    },
    { dir: "parentNode", next: "legend" }
  );

// Optimize for push.apply( _, NodeList )
try {
  push.apply(
    (arr = slice.call( preferredDoc.childNodes )),
    preferredDoc.childNodes
  );
  // Support: Android<4.0
  // Detect silently failing push.apply
  arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
  push = { apply: arr.length ?

    // Leverage slice if possible
    function( target, els ) {
      push_native.apply( target, slice.call(els) );
    } :

    // Support: IE<9
    // Otherwise append directly
    function( target, els ) {
      var j = target.length,
        i = 0;
      // Can't trust NodeList.length
      while ( (target[j++] = els[i++]) ) {}
      target.length = j - 1;
    }
  };
}

function Sizzle( selector, context, results, seed ) {
  var m, i, elem, nid, match, groups, newSelector,
    newContext = context && context.ownerDocument,

    // nodeType defaults to 9, since context defaults to document
    nodeType = context ? context.nodeType : 9;

  results = results || [];

  // Return early from calls with invalid selector or context
  if ( typeof selector !== "string" || !selector ||
    nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

    return results;
  }

  // Try to shortcut find operations (as opposed to filters) in HTML documents
  if ( !seed ) {

    if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
      setDocument( context );
    }
    context = context || document;

    if ( documentIsHTML ) {

      // If the selector is sufficiently simple, try using a "get*By*" DOM method
      // (excepting DocumentFragment context, where the methods don't exist)
      if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

        // ID selector
        if ( (m = match[1]) ) {

          // Document context
          if ( nodeType === 9 ) {
            if ( (elem = context.getElementById( m )) ) {

              // Support: IE, Opera, Webkit
              // TODO: identify versions
              // getElementById can match elements by name instead of ID
              if ( elem.id === m ) {
                results.push( elem );
                return results;
              }
            } else {
              return results;
            }

          // Element context
          } else {

            // Support: IE, Opera, Webkit
            // TODO: identify versions
            // getElementById can match elements by name instead of ID
            if ( newContext && (elem = newContext.getElementById( m )) &&
              contains( context, elem ) &&
              elem.id === m ) {

              results.push( elem );
              return results;
            }
          }

        // Type selector
        } else if ( match[2] ) {
          push.apply( results, context.getElementsByTagName( selector ) );
          return results;

        // Class selector
        } else if ( (m = match[3]) && support.getElementsByClassName &&
          context.getElementsByClassName ) {

          push.apply( results, context.getElementsByClassName( m ) );
          return results;
        }
      }

      // Take advantage of querySelectorAll
      if ( support.qsa &&
        !compilerCache[ selector + " " ] &&
        (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

        if ( nodeType !== 1 ) {
          newContext = context;
          newSelector = selector;

        // qSA looks outside Element context, which is not what we want
        // Thanks to Andrew Dupont for this workaround technique
        // Support: IE <=8
        // Exclude object elements
        } else if ( context.nodeName.toLowerCase() !== "object" ) {

          // Capture the context ID, setting it first if necessary
          if ( (nid = context.getAttribute( "id" )) ) {
            nid = nid.replace( rcssescape, fcssescape );
          } else {
            context.setAttribute( "id", (nid = expando) );
          }

          // Prefix every selector in the list
          groups = tokenize( selector );
          i = groups.length;
          while ( i-- ) {
            groups[i] = "#" + nid + " " + toSelector( groups[i] );
          }
          newSelector = groups.join( "," );

          // Expand context for sibling selectors
          newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
            context;
        }

        if ( newSelector ) {
          try {
            push.apply( results,
              newContext.querySelectorAll( newSelector )
            );
            return results;
          } catch ( qsaError ) {
          } finally {
            if ( nid === expando ) {
              context.removeAttribute( "id" );
            }
          }
        }
      }
    }
  }

  // All others
  return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *  property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *  deleting the oldest entry
 */
function createCache() {
  var keys = [];

  function cache( key, value ) {
    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
    if ( keys.push( key + " " ) > Expr.cacheLength ) {
      // Only keep the most recent entries
      delete cache[ keys.shift() ];
    }
    return (cache[ key + " " ] = value);
  }
  return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
  fn[ expando ] = true;
  return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
  var el = document.createElement("fieldset");

  try {
    return !!fn( el );
  } catch (e) {
    return false;
  } finally {
    // Remove from its parent by default
    if ( el.parentNode ) {
      el.parentNode.removeChild( el );
    }
    // release memory in IE
    el = null;
  }
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
  var arr = attrs.split("|"),
    i = arr.length;

  while ( i-- ) {
    Expr.attrHandle[ arr[i] ] = handler;
  }
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
  var cur = b && a,
    diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
      a.sourceIndex - b.sourceIndex;

  // Use IE sourceIndex if available on both nodes
  if ( diff ) {
    return diff;
  }

  // Check if b follows a
  if ( cur ) {
    while ( (cur = cur.nextSibling) ) {
      if ( cur === b ) {
        return -1;
      }
    }
  }

  return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
  return function( elem ) {
    var name = elem.nodeName.toLowerCase();
    return name === "input" && elem.type === type;
  };
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
  return function( elem ) {
    var name = elem.nodeName.toLowerCase();
    return (name === "input" || name === "button") && elem.type === type;
  };
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

  // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
  return function( elem ) {

    // Only certain elements can match :enabled or :disabled
    // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
    // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
    if ( "form" in elem ) {

      // Check for inherited disabledness on relevant non-disabled elements:
      // * listed form-associated elements in a disabled fieldset
      //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
      //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
      // * option elements in a disabled optgroup
      //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
      // All such elements have a "form" property.
      if ( elem.parentNode && elem.disabled === false ) {

        // Option elements defer to a parent optgroup if present
        if ( "label" in elem ) {
          if ( "label" in elem.parentNode ) {
            return elem.parentNode.disabled === disabled;
          } else {
            return elem.disabled === disabled;
          }
        }

        // Support: IE 6 - 11
        // Use the isDisabled shortcut property to check for disabled fieldset ancestors
        return elem.isDisabled === disabled ||

          // Where there is no isDisabled, check manually
          /* jshint -W018 */
          elem.isDisabled !== !disabled &&
            disabledAncestor( elem ) === disabled;
      }

      return elem.disabled === disabled;

    // Try to winnow out elements that can't be disabled before trusting the disabled property.
    // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
    // even exist on them, let alone have a boolean value.
    } else if ( "label" in elem ) {
      return elem.disabled === disabled;
    }

    // Remaining elements are neither :enabled nor :disabled
    return false;
  };
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
  return markFunction(function( argument ) {
    argument = +argument;
    return markFunction(function( seed, matches ) {
      var j,
        matchIndexes = fn( [], seed.length, argument ),
        i = matchIndexes.length;

      // Match elements found at the specified indexes
      while ( i-- ) {
        if ( seed[ (j = matchIndexes[i]) ] ) {
          seed[j] = !(matches[j] = seed[j]);
        }
      }
    });
  });
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
  return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
  // documentElement is verified for cases where it doesn't yet exist
  // (such as loading iframes in IE - #4833)
  var documentElement = elem && (elem.ownerDocument || elem).documentElement;
  return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
  var hasCompare, subWindow,
    doc = node ? node.ownerDocument || node : preferredDoc;

  // Return early if doc is invalid or already selected
  if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
    return document;
  }

  // Update global variables
  document = doc;
  docElem = document.documentElement;
  documentIsHTML = !isXML( document );

  // Support: IE 9-11, Edge
  // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
  if ( preferredDoc !== document &&
    (subWindow = document.defaultView) && subWindow.top !== subWindow ) {

    // Support: IE 11, Edge
    if ( subWindow.addEventListener ) {
      subWindow.addEventListener( "unload", unloadHandler, false );

    // Support: IE 9 - 10 only
    } else if ( subWindow.attachEvent ) {
      subWindow.attachEvent( "onunload", unloadHandler );
    }
  }

  /* Attributes
  ---------------------------------------------------------------------- */

  // Support: IE<8
  // Verify that getAttribute really returns attributes and not properties
  // (excepting IE8 booleans)
  support.attributes = assert(function( el ) {
    el.className = "i";
    return !el.getAttribute("className");
  });

  /* getElement(s)By*
  ---------------------------------------------------------------------- */

  // Check if getElementsByTagName("*") returns only elements
  support.getElementsByTagName = assert(function( el ) {
    el.appendChild( document.createComment("") );
    return !el.getElementsByTagName("*").length;
  });

  // Support: IE<9
  support.getElementsByClassName = rnative.test( document.getElementsByClassName );

  // Support: IE<10
  // Check if getElementById returns elements by name
  // The broken getElementById methods don't pick up programmatically-set names,
  // so use a roundabout getElementsByName test
  support.getById = assert(function( el ) {
    docElem.appendChild( el ).id = expando;
    return !document.getElementsByName || !document.getElementsByName( expando ).length;
  });

  // ID filter and find
  if ( support.getById ) {
    Expr.filter["ID"] = function( id ) {
      var attrId = id.replace( runescape, funescape );
      return function( elem ) {
        return elem.getAttribute("id") === attrId;
      };
    };
    Expr.find["ID"] = function( id, context ) {
      if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
        var elem = context.getElementById( id );
        return elem ? [ elem ] : [];
      }
    };
  } else {
    Expr.filter["ID"] =  function( id ) {
      var attrId = id.replace( runescape, funescape );
      return function( elem ) {
        var node = typeof elem.getAttributeNode !== "undefined" &&
          elem.getAttributeNode("id");
        return node && node.value === attrId;
      };
    };

    // Support: IE 6 - 7 only
    // getElementById is not reliable as a find shortcut
    Expr.find["ID"] = function( id, context ) {
      if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
        var node, i, elems,
          elem = context.getElementById( id );

        if ( elem ) {

          // Verify the id attribute
          node = elem.getAttributeNode("id");
          if ( node && node.value === id ) {
            return [ elem ];
          }

          // Fall back on getElementsByName
          elems = context.getElementsByName( id );
          i = 0;
          while ( (elem = elems[i++]) ) {
            node = elem.getAttributeNode("id");
            if ( node && node.value === id ) {
              return [ elem ];
            }
          }
        }

        return [];
      }
    };
  }

  // Tag
  Expr.find["TAG"] = support.getElementsByTagName ?
    function( tag, context ) {
      if ( typeof context.getElementsByTagName !== "undefined" ) {
        return context.getElementsByTagName( tag );

      // DocumentFragment nodes don't have gEBTN
      } else if ( support.qsa ) {
        return context.querySelectorAll( tag );
      }
    } :

    function( tag, context ) {
      var elem,
        tmp = [],
        i = 0,
        // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName( tag );

      // Filter out possible comments
      if ( tag === "*" ) {
        while ( (elem = results[i++]) ) {
          if ( elem.nodeType === 1 ) {
            tmp.push( elem );
          }
        }

        return tmp;
      }
      return results;
    };

  // Class
  Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
    if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
      return context.getElementsByClassName( className );
    }
  };

  /* QSA/matchesSelector
  ---------------------------------------------------------------------- */

  // QSA and matchesSelector support

  // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
  rbuggyMatches = [];

  // qSa(:focus) reports false when true (Chrome 21)
  // We allow this because of a bug in IE8/9 that throws an error
  // whenever `document.activeElement` is accessed on an iframe
  // So, we allow :focus to pass through QSA all the time to avoid the IE error
  // See https://bugs.jquery.com/ticket/13378
  rbuggyQSA = [];

  if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
    // Build QSA regex
    // Regex strategy adopted from Diego Perini
    assert(function( el ) {
      // Select is set to empty string on purpose
      // This is to test IE's treatment of not explicitly
      // setting a boolean content attribute,
      // since its presence should be enough
      // https://bugs.jquery.com/ticket/12359
      docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
        "<select id='" + expando + "-\r\\' msallowcapture=''>" +
        "<option selected=''></option></select>";

      // Support: IE8, Opera 11-12.16
      // Nothing should be selected when empty strings follow ^= or $= or *=
      // The test attribute must be unknown in Opera but "safe" for WinRT
      // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
      if ( el.querySelectorAll("[msallowcapture^='']").length ) {
        rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
      }

      // Support: IE8
      // Boolean attributes and "value" are not treated correctly
      if ( !el.querySelectorAll("[selected]").length ) {
        rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
      }

      // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
      if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
        rbuggyQSA.push("~=");
      }

      // Webkit/Opera - :checked should return selected option elements
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
      // IE8 throws error here and will not see later tests
      if ( !el.querySelectorAll(":checked").length ) {
        rbuggyQSA.push(":checked");
      }

      // Support: Safari 8+, iOS 8+
      // https://bugs.webkit.org/show_bug.cgi?id=136851
      // In-page `selector#id sibling-combinator selector` fails
      if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
        rbuggyQSA.push(".#.+[+~]");
      }
    });

    assert(function( el ) {
      el.innerHTML = "<a href='' disabled='disabled'></a>" +
        "<select disabled='disabled'><option/></select>";

      // Support: Windows 8 Native Apps
      // The type and name attributes are restricted during .innerHTML assignment
      var input = document.createElement("input");
      input.setAttribute( "type", "hidden" );
      el.appendChild( input ).setAttribute( "name", "D" );

      // Support: IE8
      // Enforce case-sensitivity of name attribute
      if ( el.querySelectorAll("[name=d]").length ) {
        rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
      }

      // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
      // IE8 throws error here and will not see later tests
      if ( el.querySelectorAll(":enabled").length !== 2 ) {
        rbuggyQSA.push( ":enabled", ":disabled" );
      }

      // Support: IE9-11+
      // IE's :disabled selector does not pick up the children of disabled fieldsets
      docElem.appendChild( el ).disabled = true;
      if ( el.querySelectorAll(":disabled").length !== 2 ) {
        rbuggyQSA.push( ":enabled", ":disabled" );
      }

      // Opera 10-11 does not throw on post-comma invalid pseudos
      el.querySelectorAll("*,:x");
      rbuggyQSA.push(",.*:");
    });
  }

  if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
    docElem.webkitMatchesSelector ||
    docElem.mozMatchesSelector ||
    docElem.oMatchesSelector ||
    docElem.msMatchesSelector) )) ) {

    assert(function( el ) {
      // Check to see if it's possible to do matchesSelector
      // on a disconnected node (IE 9)
      support.disconnectedMatch = matches.call( el, "*" );

      // This should fail with an exception
      // Gecko does not error, returns false instead
      matches.call( el, "[s!='']:x" );
      rbuggyMatches.push( "!=", pseudos );
    });
  }

  rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
  rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

  /* Contains
  ---------------------------------------------------------------------- */
  hasCompare = rnative.test( docElem.compareDocumentPosition );

  // Element contains another
  // Purposefully self-exclusive
  // As in, an element does not contain itself
  contains = hasCompare || rnative.test( docElem.contains ) ?
    function( a, b ) {
      var adown = a.nodeType === 9 ? a.documentElement : a,
        bup = b && b.parentNode;
      return a === bup || !!( bup && bup.nodeType === 1 && (
        adown.contains ?
          adown.contains( bup ) :
          a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
      ));
    } :
    function( a, b ) {
      if ( b ) {
        while ( (b = b.parentNode) ) {
          if ( b === a ) {
            return true;
          }
        }
      }
      return false;
    };

  /* Sorting
  ---------------------------------------------------------------------- */

  // Document order sorting
  sortOrder = hasCompare ?
  function( a, b ) {

    // Flag for duplicate removal
    if ( a === b ) {
      hasDuplicate = true;
      return 0;
    }

    // Sort on method existence if only one input has compareDocumentPosition
    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
    if ( compare ) {
      return compare;
    }

    // Calculate position if both inputs belong to the same document
    compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
      a.compareDocumentPosition( b ) :

      // Otherwise we know they are disconnected
      1;

    // Disconnected nodes
    if ( compare & 1 ||
      (!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

      // Choose the first element that is related to our preferred document
      if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
        return -1;
      }
      if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
        return 1;
      }

      // Maintain original order
      return sortInput ?
        ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
        0;
    }

    return compare & 4 ? -1 : 1;
  } :
  function( a, b ) {
    // Exit early if the nodes are identical
    if ( a === b ) {
      hasDuplicate = true;
      return 0;
    }

    var cur,
      i = 0,
      aup = a.parentNode,
      bup = b.parentNode,
      ap = [ a ],
      bp = [ b ];

    // Parentless nodes are either documents or disconnected
    if ( !aup || !bup ) {
      return a === document ? -1 :
        b === document ? 1 :
        aup ? -1 :
        bup ? 1 :
        sortInput ?
        ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
        0;

    // If the nodes are siblings, we can do a quick check
    } else if ( aup === bup ) {
      return siblingCheck( a, b );
    }

    // Otherwise we need full lists of their ancestors for comparison
    cur = a;
    while ( (cur = cur.parentNode) ) {
      ap.unshift( cur );
    }
    cur = b;
    while ( (cur = cur.parentNode) ) {
      bp.unshift( cur );
    }

    // Walk down the tree looking for a discrepancy
    while ( ap[i] === bp[i] ) {
      i++;
    }

    return i ?
      // Do a sibling check if the nodes have a common ancestor
      siblingCheck( ap[i], bp[i] ) :

      // Otherwise nodes in our document sort first
      ap[i] === preferredDoc ? -1 :
      bp[i] === preferredDoc ? 1 :
      0;
  };

  return document;
};

Sizzle.matches = function( expr, elements ) {
  return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
  // Set document vars if needed
  if ( ( elem.ownerDocument || elem ) !== document ) {
    setDocument( elem );
  }

  // Make sure that attribute selectors are quoted
  expr = expr.replace( rattributeQuotes, "='$1']" );

  if ( support.matchesSelector && documentIsHTML &&
    !compilerCache[ expr + " " ] &&
    ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
    ( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

    try {
      var ret = matches.call( elem, expr );

      // IE 9's matchesSelector returns false on disconnected nodes
      if ( ret || support.disconnectedMatch ||
          // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11 ) {
        return ret;
      }
    } catch (e) {}
  }

  return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
  // Set document vars if needed
  if ( ( context.ownerDocument || context ) !== document ) {
    setDocument( context );
  }
  return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
  // Set document vars if needed
  if ( ( elem.ownerDocument || elem ) !== document ) {
    setDocument( elem );
  }

  var fn = Expr.attrHandle[ name.toLowerCase() ],
    // Don't get fooled by Object.prototype properties (jQuery #13807)
    val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
      fn( elem, name, !documentIsHTML ) :
      undefined;

  return val !== undefined ?
    val :
    support.attributes || !documentIsHTML ?
      elem.getAttribute( name ) :
      (val = elem.getAttributeNode(name)) && val.specified ?
        val.value :
        null;
};

Sizzle.escape = function( sel ) {
  return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
  throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
  var elem,
    duplicates = [],
    j = 0,
    i = 0;

  // Unless we *know* we can detect duplicates, assume their presence
  hasDuplicate = !support.detectDuplicates;
  sortInput = !support.sortStable && results.slice( 0 );
  results.sort( sortOrder );

  if ( hasDuplicate ) {
    while ( (elem = results[i++]) ) {
      if ( elem === results[ i ] ) {
        j = duplicates.push( i );
      }
    }
    while ( j-- ) {
      results.splice( duplicates[ j ], 1 );
    }
  }

  // Clear input after sorting to release objects
  // See https://github.com/jquery/sizzle/pull/225
  sortInput = null;

  return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
  var node,
    ret = "",
    i = 0,
    nodeType = elem.nodeType;

  if ( !nodeType ) {
    // If no nodeType, this is expected to be an array
    while ( (node = elem[i++]) ) {
      // Do not traverse comment nodes
      ret += getText( node );
    }
  } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
    // Use textContent for elements
    // innerText usage removed for consistency of new lines (jQuery #11153)
    if ( typeof elem.textContent === "string" ) {
      return elem.textContent;
    } else {
      // Traverse its children
      for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
        ret += getText( elem );
      }
    }
  } else if ( nodeType === 3 || nodeType === 4 ) {
    return elem.nodeValue;
  }
  // Do not include comment or processing instruction nodes

  return ret;
};

Expr = Sizzle.selectors = {

  // Can be adjusted by the user
  cacheLength: 50,

  createPseudo: markFunction,

  match: matchExpr,

  attrHandle: {},

  find: {},

  relative: {
    ">": { dir: "parentNode", first: true },
    " ": { dir: "parentNode" },
    "+": { dir: "previousSibling", first: true },
    "~": { dir: "previousSibling" }
  },

  preFilter: {
    "ATTR": function( match ) {
      match[1] = match[1].replace( runescape, funescape );

      // Move the given value to match[3] whether quoted or unquoted
      match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

      if ( match[2] === "~=" ) {
        match[3] = " " + match[3] + " ";
      }

      return match.slice( 0, 4 );
    },

    "CHILD": function( match ) {
      /* matches from matchExpr["CHILD"]
        1 type (only|nth|...)
        2 what (child|of-type)
        3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
        4 xn-component of xn+y argument ([+-]?\d*n|)
        5 sign of xn-component
        6 x of xn-component
        7 sign of y-component
        8 y of y-component
      */
      match[1] = match[1].toLowerCase();

      if ( match[1].slice( 0, 3 ) === "nth" ) {
        // nth-* requires argument
        if ( !match[3] ) {
          Sizzle.error( match[0] );
        }

        // numeric x and y parameters for Expr.filter.CHILD
        // remember that false/true cast respectively to 0/1
        match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
        match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

      // other types prohibit arguments
      } else if ( match[3] ) {
        Sizzle.error( match[0] );
      }

      return match;
    },

    "PSEUDO": function( match ) {
      var excess,
        unquoted = !match[6] && match[2];

      if ( matchExpr["CHILD"].test( match[0] ) ) {
        return null;
      }

      // Accept quoted arguments as-is
      if ( match[3] ) {
        match[2] = match[4] || match[5] || "";

      // Strip excess characters from unquoted arguments
      } else if ( unquoted && rpseudo.test( unquoted ) &&
        // Get excess from tokenize (recursively)
        (excess = tokenize( unquoted, true )) &&
        // advance to the next closing parenthesis
        (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

        // excess is a negative index
        match[0] = match[0].slice( 0, excess );
        match[2] = unquoted.slice( 0, excess );
      }

      // Return only captures needed by the pseudo filter method (type and argument)
      return match.slice( 0, 3 );
    }
  },

  filter: {

    "TAG": function( nodeNameSelector ) {
      var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
      return nodeNameSelector === "*" ?
        function() { return true; } :
        function( elem ) {
          return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
        };
    },

    "CLASS": function( className ) {
      var pattern = classCache[ className + " " ];

      return pattern ||
        (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
        classCache( className, function( elem ) {
          return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
        });
    },

    "ATTR": function( name, operator, check ) {
      return function( elem ) {
        var result = Sizzle.attr( elem, name );

        if ( result == null ) {
          return operator === "!=";
        }
        if ( !operator ) {
          return true;
        }

        result += "";

        return operator === "=" ? result === check :
          operator === "!=" ? result !== check :
          operator === "^=" ? check && result.indexOf( check ) === 0 :
          operator === "*=" ? check && result.indexOf( check ) > -1 :
          operator === "$=" ? check && result.slice( -check.length ) === check :
          operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
          operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
          false;
      };
    },

    "CHILD": function( type, what, argument, first, last ) {
      var simple = type.slice( 0, 3 ) !== "nth",
        forward = type.slice( -4 ) !== "last",
        ofType = what === "of-type";

      return first === 1 && last === 0 ?

        // Shortcut for :nth-*(n)
        function( elem ) {
          return !!elem.parentNode;
        } :

        function( elem, context, xml ) {
          var cache, uniqueCache, outerCache, node, nodeIndex, start,
            dir = simple !== forward ? "nextSibling" : "previousSibling",
            parent = elem.parentNode,
            name = ofType && elem.nodeName.toLowerCase(),
            useCache = !xml && !ofType,
            diff = false;

          if ( parent ) {

            // :(first|last|only)-(child|of-type)
            if ( simple ) {
              while ( dir ) {
                node = elem;
                while ( (node = node[ dir ]) ) {
                  if ( ofType ?
                    node.nodeName.toLowerCase() === name :
                    node.nodeType === 1 ) {

                    return false;
                  }
                }
                // Reverse direction for :only-* (if we haven't yet done so)
                start = dir = type === "only" && !start && "nextSibling";
              }
              return true;
            }

            start = [ forward ? parent.firstChild : parent.lastChild ];

            // non-xml :nth-child(...) stores cache data on `parent`
            if ( forward && useCache ) {

              // Seek `elem` from a previously-cached index

              // ...in a gzip-friendly way
              node = parent;
              outerCache = node[ expando ] || (node[ expando ] = {});

              // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)
              uniqueCache = outerCache[ node.uniqueID ] ||
                (outerCache[ node.uniqueID ] = {});

              cache = uniqueCache[ type ] || [];
              nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
              diff = nodeIndex && cache[ 2 ];
              node = nodeIndex && parent.childNodes[ nodeIndex ];

              while ( (node = ++nodeIndex && node && node[ dir ] ||

                // Fallback to seeking `elem` from the start
                (diff = nodeIndex = 0) || start.pop()) ) {

                // When found, cache indexes on `parent` and break
                if ( node.nodeType === 1 && ++diff && node === elem ) {
                  uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
                  break;
                }
              }

            } else {
              // Use previously-cached element index if available
              if ( useCache ) {
                // ...in a gzip-friendly way
                node = elem;
                outerCache = node[ expando ] || (node[ expando ] = {});

                // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)
                uniqueCache = outerCache[ node.uniqueID ] ||
                  (outerCache[ node.uniqueID ] = {});

                cache = uniqueCache[ type ] || [];
                nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                diff = nodeIndex;
              }

              // xml :nth-child(...)
              // or :nth-last-child(...) or :nth(-last)?-of-type(...)
              if ( diff === false ) {
                // Use the same loop as above to seek `elem` from the start
                while ( (node = ++nodeIndex && node && node[ dir ] ||
                  (diff = nodeIndex = 0) || start.pop()) ) {

                  if ( ( ofType ?
                    node.nodeName.toLowerCase() === name :
                    node.nodeType === 1 ) &&
                    ++diff ) {

                    // Cache the index of each encountered element
                    if ( useCache ) {
                      outerCache = node[ expando ] || (node[ expando ] = {});

                      // Support: IE <9 only
                      // Defend against cloned attroperties (jQuery gh-1709)
                      uniqueCache = outerCache[ node.uniqueID ] ||
                        (outerCache[ node.uniqueID ] = {});

                      uniqueCache[ type ] = [ dirruns, diff ];
                    }

                    if ( node === elem ) {
                      break;
                    }
                  }
                }
              }
            }

            // Incorporate the offset, then check against cycle size
            diff -= last;
            return diff === first || ( diff % first === 0 && diff / first >= 0 );
          }
        };
    },

    "PSEUDO": function( pseudo, argument ) {
      // pseudo-class names are case-insensitive
      // http://www.w3.org/TR/selectors/#pseudo-classes
      // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
      // Remember that setFilters inherits from pseudos
      var args,
        fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
          Sizzle.error( "unsupported pseudo: " + pseudo );

      // The user may use createPseudo to indicate that
      // arguments are needed to create the filter function
      // just as Sizzle does
      if ( fn[ expando ] ) {
        return fn( argument );
      }

      // But maintain support for old signatures
      if ( fn.length > 1 ) {
        args = [ pseudo, pseudo, "", argument ];
        return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
          markFunction(function( seed, matches ) {
            var idx,
              matched = fn( seed, argument ),
              i = matched.length;
            while ( i-- ) {
              idx = indexOf( seed, matched[i] );
              seed[ idx ] = !( matches[ idx ] = matched[i] );
            }
          }) :
          function( elem ) {
            return fn( elem, 0, args );
          };
      }

      return fn;
    }
  },

  pseudos: {
    // Potentially complex pseudos
    "not": markFunction(function( selector ) {
      // Trim the selector passed to compile
      // to avoid treating leading and trailing
      // spaces as combinators
      var input = [],
        results = [],
        matcher = compile( selector.replace( rtrim, "$1" ) );

      return matcher[ expando ] ?
        markFunction(function( seed, matches, context, xml ) {
          var elem,
            unmatched = matcher( seed, null, xml, [] ),
            i = seed.length;

          // Match elements unmatched by `matcher`
          while ( i-- ) {
            if ( (elem = unmatched[i]) ) {
              seed[i] = !(matches[i] = elem);
            }
          }
        }) :
        function( elem, context, xml ) {
          input[0] = elem;
          matcher( input, null, xml, results );
          // Don't keep the element (issue #299)
          input[0] = null;
          return !results.pop();
        };
    }),

    "has": markFunction(function( selector ) {
      return function( elem ) {
        return Sizzle( selector, elem ).length > 0;
      };
    }),

    "contains": markFunction(function( text ) {
      text = text.replace( runescape, funescape );
      return function( elem ) {
        return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
      };
    }),

    // "Whether an element is represented by a :lang() selector
    // is based solely on the element's language value
    // being equal to the identifier C,
    // or beginning with the identifier C immediately followed by "-".
    // The matching of C against the element's language value is performed case-insensitively.
    // The identifier C does not have to be a valid language name."
    // http://www.w3.org/TR/selectors/#lang-pseudo
    "lang": markFunction( function( lang ) {
      // lang value must be a valid identifier
      if ( !ridentifier.test(lang || "") ) {
        Sizzle.error( "unsupported lang: " + lang );
      }
      lang = lang.replace( runescape, funescape ).toLowerCase();
      return function( elem ) {
        var elemLang;
        do {
          if ( (elemLang = documentIsHTML ?
            elem.lang :
            elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

            elemLang = elemLang.toLowerCase();
            return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
          }
        } while ( (elem = elem.parentNode) && elem.nodeType === 1 );
        return false;
      };
    }),

    // Miscellaneous
    "target": function( elem ) {
      var hash = window.location && window.location.hash;
      return hash && hash.slice( 1 ) === elem.id;
    },

    "root": function( elem ) {
      return elem === docElem;
    },

    "focus": function( elem ) {
      return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
    },

    // Boolean properties
    "enabled": createDisabledPseudo( false ),
    "disabled": createDisabledPseudo( true ),

    "checked": function( elem ) {
      // In CSS3, :checked should return both checked and selected elements
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
      var nodeName = elem.nodeName.toLowerCase();
      return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
    },

    "selected": function( elem ) {
      // Accessing this property makes selected-by-default
      // options in Safari work properly
      if ( elem.parentNode ) {
        elem.parentNode.selectedIndex;
      }

      return elem.selected === true;
    },

    // Contents
    "empty": function( elem ) {
      // http://www.w3.org/TR/selectors/#empty-pseudo
      // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
      //   but not by others (comment: 8; processing instruction: 7; etc.)
      // nodeType < 6 works because attributes (2) do not appear as children
      for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
        if ( elem.nodeType < 6 ) {
          return false;
        }
      }
      return true;
    },

    "parent": function( elem ) {
      return !Expr.pseudos["empty"]( elem );
    },

    // Element/input types
    "header": function( elem ) {
      return rheader.test( elem.nodeName );
    },

    "input": function( elem ) {
      return rinputs.test( elem.nodeName );
    },

    "button": function( elem ) {
      var name = elem.nodeName.toLowerCase();
      return name === "input" && elem.type === "button" || name === "button";
    },

    "text": function( elem ) {
      var attr;
      return elem.nodeName.toLowerCase() === "input" &&
        elem.type === "text" &&

        // Support: IE<8
        // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
        ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
    },

    // Position-in-collection
    "first": createPositionalPseudo(function() {
      return [ 0 ];
    }),

    "last": createPositionalPseudo(function( matchIndexes, length ) {
      return [ length - 1 ];
    }),

    "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
      return [ argument < 0 ? argument + length : argument ];
    }),

    "even": createPositionalPseudo(function( matchIndexes, length ) {
      var i = 0;
      for ( ; i < length; i += 2 ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),

    "odd": createPositionalPseudo(function( matchIndexes, length ) {
      var i = 1;
      for ( ; i < length; i += 2 ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),

    "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
      var i = argument < 0 ? argument + length : argument;
      for ( ; --i >= 0; ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),

    "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
      var i = argument < 0 ? argument + length : argument;
      for ( ; ++i < length; ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    })
  }
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
  Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
  Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
  var matched, match, tokens, type,
    soFar, groups, preFilters,
    cached = tokenCache[ selector + " " ];

  if ( cached ) {
    return parseOnly ? 0 : cached.slice( 0 );
  }

  soFar = selector;
  groups = [];
  preFilters = Expr.preFilter;

  while ( soFar ) {

    // Comma and first run
    if ( !matched || (match = rcomma.exec( soFar )) ) {
      if ( match ) {
        // Don't consume trailing commas as valid
        soFar = soFar.slice( match[0].length ) || soFar;
      }
      groups.push( (tokens = []) );
    }

    matched = false;

    // Combinators
    if ( (match = rcombinators.exec( soFar )) ) {
      matched = match.shift();
      tokens.push({
        value: matched,
        // Cast descendant combinators to space
        type: match[0].replace( rtrim, " " )
      });
      soFar = soFar.slice( matched.length );
    }

    // Filters
    for ( type in Expr.filter ) {
      if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
        (match = preFilters[ type ]( match ))) ) {
        matched = match.shift();
        tokens.push({
          value: matched,
          type: type,
          matches: match
        });
        soFar = soFar.slice( matched.length );
      }
    }

    if ( !matched ) {
      break;
    }
  }

  // Return the length of the invalid excess
  // if we're just parsing
  // Otherwise, throw an error or return tokens
  return parseOnly ?
    soFar.length :
    soFar ?
      Sizzle.error( selector ) :
      // Cache the tokens
      tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
  var i = 0,
    len = tokens.length,
    selector = "";
  for ( ; i < len; i++ ) {
    selector += tokens[i].value;
  }
  return selector;
}

function addCombinator( matcher, combinator, base ) {
  var dir = combinator.dir,
    skip = combinator.next,
    key = skip || dir,
    checkNonElements = base && key === "parentNode",
    doneName = done++;

  return combinator.first ?
    // Check against closest ancestor/preceding element
    function( elem, context, xml ) {
      while ( (elem = elem[ dir ]) ) {
        if ( elem.nodeType === 1 || checkNonElements ) {
          return matcher( elem, context, xml );
        }
      }
      return false;
    } :

    // Check against all ancestor/preceding elements
    function( elem, context, xml ) {
      var oldCache, uniqueCache, outerCache,
        newCache = [ dirruns, doneName ];

      // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
      if ( xml ) {
        while ( (elem = elem[ dir ]) ) {
          if ( elem.nodeType === 1 || checkNonElements ) {
            if ( matcher( elem, context, xml ) ) {
              return true;
            }
          }
        }
      } else {
        while ( (elem = elem[ dir ]) ) {
          if ( elem.nodeType === 1 || checkNonElements ) {
            outerCache = elem[ expando ] || (elem[ expando ] = {});

            // Support: IE <9 only
            // Defend against cloned attroperties (jQuery gh-1709)
            uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

            if ( skip && skip === elem.nodeName.toLowerCase() ) {
              elem = elem[ dir ] || elem;
            } else if ( (oldCache = uniqueCache[ key ]) &&
              oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

              // Assign to newCache so results back-propagate to previous elements
              return (newCache[ 2 ] = oldCache[ 2 ]);
            } else {
              // Reuse newcache so results back-propagate to previous elements
              uniqueCache[ key ] = newCache;

              // A match means we're done; a fail means we have to keep checking
              if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
                return true;
              }
            }
          }
        }
      }
      return false;
    };
}

function elementMatcher( matchers ) {
  return matchers.length > 1 ?
    function( elem, context, xml ) {
      var i = matchers.length;
      while ( i-- ) {
        if ( !matchers[i]( elem, context, xml ) ) {
          return false;
        }
      }
      return true;
    } :
    matchers[0];
}

function multipleContexts( selector, contexts, results ) {
  var i = 0,
    len = contexts.length;
  for ( ; i < len; i++ ) {
    Sizzle( selector, contexts[i], results );
  }
  return results;
}

function condense( unmatched, map, filter, context, xml ) {
  var elem,
    newUnmatched = [],
    i = 0,
    len = unmatched.length,
    mapped = map != null;

  for ( ; i < len; i++ ) {
    if ( (elem = unmatched[i]) ) {
      if ( !filter || filter( elem, context, xml ) ) {
        newUnmatched.push( elem );
        if ( mapped ) {
          map.push( i );
        }
      }
    }
  }

  return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
  if ( postFilter && !postFilter[ expando ] ) {
    postFilter = setMatcher( postFilter );
  }
  if ( postFinder && !postFinder[ expando ] ) {
    postFinder = setMatcher( postFinder, postSelector );
  }
  return markFunction(function( seed, results, context, xml ) {
    var temp, i, elem,
      preMap = [],
      postMap = [],
      preexisting = results.length,

      // Get initial elements from seed or context
      elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

      // Prefilter to get matcher input, preserving a map for seed-results synchronization
      matcherIn = preFilter && ( seed || !selector ) ?
        condense( elems, preMap, preFilter, context, xml ) :
        elems,

      matcherOut = matcher ?
        // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

          // ...intermediate processing is necessary
          [] :

          // ...otherwise use results directly
          results :
        matcherIn;

    // Find primary matches
    if ( matcher ) {
      matcher( matcherIn, matcherOut, context, xml );
    }

    // Apply postFilter
    if ( postFilter ) {
      temp = condense( matcherOut, postMap );
      postFilter( temp, [], context, xml );

      // Un-match failing elements by moving them back to matcherIn
      i = temp.length;
      while ( i-- ) {
        if ( (elem = temp[i]) ) {
          matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
        }
      }
    }

    if ( seed ) {
      if ( postFinder || preFilter ) {
        if ( postFinder ) {
          // Get the final matcherOut by condensing this intermediate into postFinder contexts
          temp = [];
          i = matcherOut.length;
          while ( i-- ) {
            if ( (elem = matcherOut[i]) ) {
              // Restore matcherIn since elem is not yet a final match
              temp.push( (matcherIn[i] = elem) );
            }
          }
          postFinder( null, (matcherOut = []), temp, xml );
        }

        // Move matched elements from seed to results to keep them synchronized
        i = matcherOut.length;
        while ( i-- ) {
          if ( (elem = matcherOut[i]) &&
            (temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

            seed[temp] = !(results[temp] = elem);
          }
        }
      }

    // Add elements to results, through postFinder if defined
    } else {
      matcherOut = condense(
        matcherOut === results ?
          matcherOut.splice( preexisting, matcherOut.length ) :
          matcherOut
      );
      if ( postFinder ) {
        postFinder( null, results, matcherOut, xml );
      } else {
        push.apply( results, matcherOut );
      }
    }
  });
}

function matcherFromTokens( tokens ) {
  var checkContext, matcher, j,
    len = tokens.length,
    leadingRelative = Expr.relative[ tokens[0].type ],
    implicitRelative = leadingRelative || Expr.relative[" "],
    i = leadingRelative ? 1 : 0,

    // The foundational matcher ensures that elements are reachable from top-level context(s)
    matchContext = addCombinator( function( elem ) {
      return elem === checkContext;
    }, implicitRelative, true ),
    matchAnyContext = addCombinator( function( elem ) {
      return indexOf( checkContext, elem ) > -1;
    }, implicitRelative, true ),
    matchers = [ function( elem, context, xml ) {
      var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
        (checkContext = context).nodeType ?
          matchContext( elem, context, xml ) :
          matchAnyContext( elem, context, xml ) );
      // Avoid hanging onto element (issue #299)
      checkContext = null;
      return ret;
    } ];

  for ( ; i < len; i++ ) {
    if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
      matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
    } else {
      matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

      // Return special upon seeing a positional matcher
      if ( matcher[ expando ] ) {
        // Find the next relative operator (if any) for proper handling
        j = ++i;
        for ( ; j < len; j++ ) {
          if ( Expr.relative[ tokens[j].type ] ) {
            break;
          }
        }
        return setMatcher(
          i > 1 && elementMatcher( matchers ),
          i > 1 && toSelector(
            // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
          ).replace( rtrim, "$1" ),
          matcher,
          i < j && matcherFromTokens( tokens.slice( i, j ) ),
          j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
          j < len && toSelector( tokens )
        );
      }
      matchers.push( matcher );
    }
  }

  return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
  var bySet = setMatchers.length > 0,
    byElement = elementMatchers.length > 0,
    superMatcher = function( seed, context, xml, results, outermost ) {
      var elem, j, matcher,
        matchedCount = 0,
        i = "0",
        unmatched = seed && [],
        setMatched = [],
        contextBackup = outermostContext,
        // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
        // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
        len = elems.length;

      if ( outermost ) {
        outermostContext = context === document || context || outermost;
      }

      // Add elements passing elementMatchers directly to results
      // Support: IE<9, Safari
      // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
      for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
        if ( byElement && elem ) {
          j = 0;
          if ( !context && elem.ownerDocument !== document ) {
            setDocument( elem );
            xml = !documentIsHTML;
          }
          while ( (matcher = elementMatchers[j++]) ) {
            if ( matcher( elem, context || document, xml) ) {
              results.push( elem );
              break;
            }
          }
          if ( outermost ) {
            dirruns = dirrunsUnique;
          }
        }

        // Track unmatched elements for set filters
        if ( bySet ) {
          // They will have gone through all possible matchers
          if ( (elem = !matcher && elem) ) {
            matchedCount--;
          }

          // Lengthen the array for every element, matched or not
          if ( seed ) {
            unmatched.push( elem );
          }
        }
      }

      // `i` is now the count of elements visited above, and adding it to `matchedCount`
      // makes the latter nonnegative.
      matchedCount += i;

      // Apply set filters to unmatched elements
      // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
      // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
      // no element matchers and no seed.
      // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
      // case, which will result in a "00" `matchedCount` that differs from `i` but is also
      // numerically zero.
      if ( bySet && i !== matchedCount ) {
        j = 0;
        while ( (matcher = setMatchers[j++]) ) {
          matcher( unmatched, setMatched, context, xml );
        }

        if ( seed ) {
          // Reintegrate element matches to eliminate the need for sorting
          if ( matchedCount > 0 ) {
            while ( i-- ) {
              if ( !(unmatched[i] || setMatched[i]) ) {
                setMatched[i] = pop.call( results );
              }
            }
          }

          // Discard index placeholder values to get only actual matches
          setMatched = condense( setMatched );
        }

        // Add matches to results
        push.apply( results, setMatched );

        // Seedless set matches succeeding multiple successful matchers stipulate sorting
        if ( outermost && !seed && setMatched.length > 0 &&
          ( matchedCount + setMatchers.length ) > 1 ) {

          Sizzle.uniqueSort( results );
        }
      }

      // Override manipulation of globals by nested matchers
      if ( outermost ) {
        dirruns = dirrunsUnique;
        outermostContext = contextBackup;
      }

      return unmatched;
    };

  return bySet ?
    markFunction( superMatcher ) :
    superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
  var i,
    setMatchers = [],
    elementMatchers = [],
    cached = compilerCache[ selector + " " ];

  if ( !cached ) {
    // Generate a function of recursive functions that can be used to check each element
    if ( !match ) {
      match = tokenize( selector );
    }
    i = match.length;
    while ( i-- ) {
      cached = matcherFromTokens( match[i] );
      if ( cached[ expando ] ) {
        setMatchers.push( cached );
      } else {
        elementMatchers.push( cached );
      }
    }

    // Cache the compiled function
    cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

    // Save selector and tokenization
    cached.selector = selector;
  }
  return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
  var i, tokens, token, type, find,
    compiled = typeof selector === "function" && selector,
    match = !seed && tokenize( (selector = compiled.selector || selector) );

  results = results || [];

  // Try to minimize operations if there is only one selector in the list and no seed
  // (the latter of which guarantees us context)
  if ( match.length === 1 ) {

    // Reduce context if the leading compound selector is an ID
    tokens = match[0] = match[0].slice( 0 );
    if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
        context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

      context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
      if ( !context ) {
        return results;

      // Precompiled matchers will still verify ancestry, so step up a level
      } else if ( compiled ) {
        context = context.parentNode;
      }

      selector = selector.slice( tokens.shift().value.length );
    }

    // Fetch a seed set for right-to-left matching
    i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
    while ( i-- ) {
      token = tokens[i];

      // Abort if we hit a combinator
      if ( Expr.relative[ (type = token.type) ] ) {
        break;
      }
      if ( (find = Expr.find[ type ]) ) {
        // Search, expanding context for leading sibling combinators
        if ( (seed = find(
          token.matches[0].replace( runescape, funescape ),
          rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
        )) ) {

          // If seed is empty or no tokens remain, we can return early
          tokens.splice( i, 1 );
          selector = seed.length && toSelector( tokens );
          if ( !selector ) {
            push.apply( results, seed );
            return results;
          }

          break;
        }
      }
    }
  }

  // Compile and execute a filtering function if one is not provided
  // Provide `match` to avoid retokenization if we modified the selector above
  ( compiled || compile( selector, match ) )(
    seed,
    context,
    !documentIsHTML,
    results,
    !context || rsibling.test( selector ) && testContext( context.parentNode ) || context
  );
  return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
  // Should return 1, but returns 4 (following)
  return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
  el.innerHTML = "<a href='#'></a>";
  return el.firstChild.getAttribute("href") === "#" ;
}) ) {
  addHandle( "type|href|height|width", function( elem, name, isXML ) {
    if ( !isXML ) {
      return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
    }
  });
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
  el.innerHTML = "<input/>";
  el.firstChild.setAttribute( "value", "" );
  return el.firstChild.getAttribute( "value" ) === "";
}) ) {
  addHandle( "value", function( elem, name, isXML ) {
    if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
      return elem.defaultValue;
    }
  });
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
  return el.getAttribute("disabled") == null;
}) ) {
  addHandle( booleans, function( elem, name, isXML ) {
    var val;
    if ( !isXML ) {
      return elem[ name ] === true ? name.toLowerCase() :
          (val = elem.getAttributeNode( name )) && val.specified ?
          val.value :
        null;
    }
  });
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
  var matched = [],
    truncate = until !== undefined;

  while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
    if ( elem.nodeType === 1 ) {
      if ( truncate && jQuery( elem ).is( until ) ) {
        break;
      }
      matched.push( elem );
    }
  }
  return matched;
};


var siblings = function( n, elem ) {
  var matched = [];

  for ( ; n; n = n.nextSibling ) {
    if ( n.nodeType === 1 && n !== elem ) {
      matched.push( n );
    }
  }

  return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
  if ( jQuery.isFunction( qualifier ) ) {
    return jQuery.grep( elements, function( elem, i ) {
      return !!qualifier.call( elem, i, elem ) !== not;
    } );
  }

  // Single element
  if ( qualifier.nodeType ) {
    return jQuery.grep( elements, function( elem ) {
      return ( elem === qualifier ) !== not;
    } );
  }

  // Arraylike of elements (jQuery, arguments, Array)
  if ( typeof qualifier !== "string" ) {
    return jQuery.grep( elements, function( elem ) {
      return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
    } );
  }

  // Simple selector that can be filtered directly, removing non-Elements
  if ( risSimple.test( qualifier ) ) {
    return jQuery.filter( qualifier, elements, not );
  }

  // Complex selector, compare the two sets, removing non-Elements
  qualifier = jQuery.filter( qualifier, elements );
  return jQuery.grep( elements, function( elem ) {
    return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
  } );
}

jQuery.filter = function( expr, elems, not ) {
  var elem = elems[ 0 ];

  if ( not ) {
    expr = ":not(" + expr + ")";
  }

  if ( elems.length === 1 && elem.nodeType === 1 ) {
    return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
  }

  return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
    return elem.nodeType === 1;
  } ) );
};

jQuery.fn.extend( {
  find: function( selector ) {
    var i, ret,
      len = this.length,
      self = this;

    if ( typeof selector !== "string" ) {
      return this.pushStack( jQuery( selector ).filter( function() {
        for ( i = 0; i < len; i++ ) {
          if ( jQuery.contains( self[ i ], this ) ) {
            return true;
          }
        }
      } ) );
    }

    ret = this.pushStack( [] );

    for ( i = 0; i < len; i++ ) {
      jQuery.find( selector, self[ i ], ret );
    }

    return len > 1 ? jQuery.uniqueSort( ret ) : ret;
  },
  filter: function( selector ) {
    return this.pushStack( winnow( this, selector || [], false ) );
  },
  not: function( selector ) {
    return this.pushStack( winnow( this, selector || [], true ) );
  },
  is: function( selector ) {
    return !!winnow(
      this,

      // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test( selector ) ?
        jQuery( selector ) :
        selector || [],
      false
    ).length;
  }
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

  // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

  init = jQuery.fn.init = function( selector, context, root ) {
    var match, elem;

    // HANDLE: $(""), $(null), $(undefined), $(false)
    if ( !selector ) {
      return this;
    }

    // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)
    root = root || rootjQuery;

    // Handle HTML strings
    if ( typeof selector === "string" ) {
      if ( selector[ 0 ] === "<" &&
        selector[ selector.length - 1 ] === ">" &&
        selector.length >= 3 ) {

        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [ null, selector, null ];

      } else {
        match = rquickExpr.exec( selector );
      }

      // Match html or make sure no context is specified for #id
      if ( match && ( match[ 1 ] || !context ) ) {

        // HANDLE: $(html) -> $(array)
        if ( match[ 1 ] ) {
          context = context instanceof jQuery ? context[ 0 ] : context;

          // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present
          jQuery.merge( this, jQuery.parseHTML(
            match[ 1 ],
            context && context.nodeType ? context.ownerDocument || context : document,
            true
          ) );

          // HANDLE: $(html, props)
          if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
            for ( match in context ) {

              // Properties of context are called as methods if possible
              if ( jQuery.isFunction( this[ match ] ) ) {
                this[ match ]( context[ match ] );

              // ...and otherwise set as attributes
              } else {
                this.attr( match, context[ match ] );
              }
            }
          }

          return this;

        // HANDLE: $(#id)
        } else {
          elem = document.getElementById( match[ 2 ] );

          if ( elem ) {

            // Inject the element directly into the jQuery object
            this[ 0 ] = elem;
            this.length = 1;
          }
          return this;
        }

      // HANDLE: $(expr, $(...))
      } else if ( !context || context.jquery ) {
        return ( context || root ).find( selector );

      // HANDLE: $(expr, context)
      // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor( context ).find( selector );
      }

    // HANDLE: $(DOMElement)
    } else if ( selector.nodeType ) {
      this[ 0 ] = selector;
      this.length = 1;
      return this;

    // HANDLE: $(function)
    // Shortcut for document ready
    } else if ( jQuery.isFunction( selector ) ) {
      return root.ready !== undefined ?
        root.ready( selector ) :

        // Execute immediately if ready is not present
        selector( jQuery );
    }

    return jQuery.makeArray( selector, this );
  };

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

  // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };

jQuery.fn.extend( {
  has: function( target ) {
    var targets = jQuery( target, this ),
      l = targets.length;

    return this.filter( function() {
      var i = 0;
      for ( ; i < l; i++ ) {
        if ( jQuery.contains( this, targets[ i ] ) ) {
          return true;
        }
      }
    } );
  },

  closest: function( selectors, context ) {
    var cur,
      i = 0,
      l = this.length,
      matched = [],
      targets = typeof selectors !== "string" && jQuery( selectors );

    // Positional selectors never match, since there's no _selection_ context
    if ( !rneedsContext.test( selectors ) ) {
      for ( ; i < l; i++ ) {
        for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

          // Always skip document fragments
          if ( cur.nodeType < 11 && ( targets ?
            targets.index( cur ) > -1 :

            // Don't pass non-elements to Sizzle
            cur.nodeType === 1 &&
              jQuery.find.matchesSelector( cur, selectors ) ) ) {

            matched.push( cur );
            break;
          }
        }
      }
    }

    return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
  },

  // Determine the position of an element within the set
  index: function( elem ) {

    // No argument, return index in parent
    if ( !elem ) {
      return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
    }

    // Index in selector
    if ( typeof elem === "string" ) {
      return indexOf.call( jQuery( elem ), this[ 0 ] );
    }

    // Locate the position of the desired element
    return indexOf.call( this,

      // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[ 0 ] : elem
    );
  },

  add: function( selector, context ) {
    return this.pushStack(
      jQuery.uniqueSort(
        jQuery.merge( this.get(), jQuery( selector, context ) )
      )
    );
  },

  addBack: function( selector ) {
    return this.add( selector == null ?
      this.prevObject : this.prevObject.filter( selector )
    );
  }
} );

function sibling( cur, dir ) {
  while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
  return cur;
}

jQuery.each( {
  parent: function( elem ) {
    var parent = elem.parentNode;
    return parent && parent.nodeType !== 11 ? parent : null;
  },
  parents: function( elem ) {
    return dir( elem, "parentNode" );
  },
  parentsUntil: function( elem, i, until ) {
    return dir( elem, "parentNode", until );
  },
  next: function( elem ) {
    return sibling( elem, "nextSibling" );
  },
  prev: function( elem ) {
    return sibling( elem, "previousSibling" );
  },
  nextAll: function( elem ) {
    return dir( elem, "nextSibling" );
  },
  prevAll: function( elem ) {
    return dir( elem, "previousSibling" );
  },
  nextUntil: function( elem, i, until ) {
    return dir( elem, "nextSibling", until );
  },
  prevUntil: function( elem, i, until ) {
    return dir( elem, "previousSibling", until );
  },
  siblings: function( elem ) {
    return siblings( ( elem.parentNode || {} ).firstChild, elem );
  },
  children: function( elem ) {
    return siblings( elem.firstChild );
  },
  contents: function( elem ) {
    return elem.contentDocument || jQuery.merge( [], elem.childNodes );
  }
}, function( name, fn ) {
  jQuery.fn[ name ] = function( until, selector ) {
    var matched = jQuery.map( this, fn, until );

    if ( name.slice( -5 ) !== "Until" ) {
      selector = until;
    }

    if ( selector && typeof selector === "string" ) {
      matched = jQuery.filter( selector, matched );
    }

    if ( this.length > 1 ) {

      // Remove duplicates
      if ( !guaranteedUnique[ name ] ) {
        jQuery.uniqueSort( matched );
      }

      // Reverse order for parents* and prev-derivatives
      if ( rparentsprev.test( name ) ) {
        matched.reverse();
      }
    }

    return this.pushStack( matched );
  };
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
  var object = {};
  jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
    object[ flag ] = true;
  } );
  return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *  options: an optional list of space-separated options that will change how
 *      the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *  once:     will ensure the callback list can only be fired once (like a Deferred)
 *
 *  memory:     will keep track of previous values and will call any callback added
 *          after the list has been fired right away with the latest "memorized"
 *          values (like a Deferred)
 *
 *  unique:     will ensure a callback can only be added once (no duplicate in the list)
 *
 *  stopOnFalse:  interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

  // Convert options from String-formatted to Object-formatted if needed
  // (we check in cache first)
  options = typeof options === "string" ?
    createOptions( options ) :
    jQuery.extend( {}, options );

  var // Flag to know if list is currently firing
    firing,

    // Last fire value for non-forgettable lists
    memory,

    // Flag to know if list was already fired
    fired,

    // Flag to prevent firing
    locked,

    // Actual callback list
    list = [],

    // Queue of execution data for repeatable lists
    queue = [],

    // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,

    // Fire callbacks
    fire = function() {

      // Enforce single-firing
      locked = options.once;

      // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes
      fired = firing = true;
      for ( ; queue.length; firingIndex = -1 ) {
        memory = queue.shift();
        while ( ++firingIndex < list.length ) {

          // Run callback and check for early termination
          if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
            options.stopOnFalse ) {

            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      }

      // Forget the data if we're done with it
      if ( !options.memory ) {
        memory = false;
      }

      firing = false;

      // Clean up if we're done firing for good
      if ( locked ) {

        // Keep an empty list if we have data for future add calls
        if ( memory ) {
          list = [];

        // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },

    // Actual Callbacks object
    self = {

      // Add a callback or a collection of callbacks to the list
      add: function() {
        if ( list ) {

          // If we have memory from a past run, we should fire after adding
          if ( memory && !firing ) {
            firingIndex = list.length - 1;
            queue.push( memory );
          }

          ( function add( args ) {
            jQuery.each( args, function( _, arg ) {
              if ( jQuery.isFunction( arg ) ) {
                if ( !options.unique || !self.has( arg ) ) {
                  list.push( arg );
                }
              } else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

                // Inspect recursively
                add( arg );
              }
            } );
          } )( arguments );

          if ( memory && !firing ) {
            fire();
          }
        }
        return this;
      },

      // Remove a callback from the list
      remove: function() {
        jQuery.each( arguments, function( _, arg ) {
          var index;
          while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
            list.splice( index, 1 );

            // Handle firing indexes
            if ( index <= firingIndex ) {
              firingIndex--;
            }
          }
        } );
        return this;
      },

      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function( fn ) {
        return fn ?
          jQuery.inArray( fn, list ) > -1 :
          list.length > 0;
      },

      // Remove all callbacks from the list
      empty: function() {
        if ( list ) {
          list = [];
        }
        return this;
      },

      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function() {
        locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function() {
        return !list;
      },

      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function() {
        locked = queue = [];
        if ( !memory && !firing ) {
          list = memory = "";
        }
        return this;
      },
      locked: function() {
        return !!locked;
      },

      // Call all callbacks with the given context and arguments
      fireWith: function( context, args ) {
        if ( !locked ) {
          args = args || [];
          args = [ context, args.slice ? args.slice() : args ];
          queue.push( args );
          if ( !firing ) {
            fire();
          }
        }
        return this;
      },

      // Call all the callbacks with the given arguments
      fire: function() {
        self.fireWith( this, arguments );
        return this;
      },

      // To know if the callbacks have already been called at least once
      fired: function() {
        return !!fired;
      }
    };

  return self;
};


function Identity( v ) {
  return v;
}
function Thrower( ex ) {
  throw ex;
}

function adoptValue( value, resolve, reject ) {
  var method;

  try {

    // Check for promise aspect first to privilege synchronous behavior
    if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
      method.call( value ).done( resolve ).fail( reject );

    // Other thenables
    } else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
      method.call( value, resolve, reject );

    // Other non-thenables
    } else {

      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      resolve.call( undefined, value );
    }

  // For Promises/A+, convert exceptions into rejections
  // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
  // Deferred#then to conditionally suppress rejection.
  } catch ( value ) {

    // Support: Android 4.0 only
    // Strict mode functions invoked without .call/.apply get global-object context
    reject.call( undefined, value );
  }
}

jQuery.extend( {

  Deferred: function( func ) {
    var tuples = [

        // action, add listener, callbacks,
        // ... .then handlers, argument index, [final state]
        [ "notify", "progress", jQuery.Callbacks( "memory" ),
          jQuery.Callbacks( "memory" ), 2 ],
        [ "resolve", "done", jQuery.Callbacks( "once memory" ),
          jQuery.Callbacks( "once memory" ), 0, "resolved" ],
        [ "reject", "fail", jQuery.Callbacks( "once memory" ),
          jQuery.Callbacks( "once memory" ), 1, "rejected" ]
      ],
      state = "pending",
      promise = {
        state: function() {
          return state;
        },
        always: function() {
          deferred.done( arguments ).fail( arguments );
          return this;
        },
        "catch": function( fn ) {
          return promise.then( null, fn );
        },

        // Keep pipe for back-compat
        pipe: function( /* fnDone, fnFail, fnProgress */ ) {
          var fns = arguments;

          return jQuery.Deferred( function( newDefer ) {
            jQuery.each( tuples, function( i, tuple ) {

              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

              // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })
              deferred[ tuple[ 1 ] ]( function() {
                var returned = fn && fn.apply( this, arguments );
                if ( returned && jQuery.isFunction( returned.promise ) ) {
                  returned.promise()
                    .progress( newDefer.notify )
                    .done( newDefer.resolve )
                    .fail( newDefer.reject );
                } else {
                  newDefer[ tuple[ 0 ] + "With" ](
                    this,
                    fn ? [ returned ] : arguments
                  );
                }
              } );
            } );
            fns = null;
          } ).promise();
        },
        then: function( onFulfilled, onRejected, onProgress ) {
          var maxDepth = 0;
          function resolve( depth, deferred, handler, special ) {
            return function() {
              var that = this,
                args = arguments,
                mightThrow = function() {
                  var returned, then;

                  // Support: Promises/A+ section 2.3.3.3.3
                  // https://promisesaplus.com/#point-59
                  // Ignore double-resolution attempts
                  if ( depth < maxDepth ) {
                    return;
                  }

                  returned = handler.apply( that, args );

                  // Support: Promises/A+ section 2.3.1
                  // https://promisesaplus.com/#point-48
                  if ( returned === deferred.promise() ) {
                    throw new TypeError( "Thenable self-resolution" );
                  }

                  // Support: Promises/A+ sections 2.3.3.1, 3.5
                  // https://promisesaplus.com/#point-54
                  // https://promisesaplus.com/#point-75
                  // Retrieve `then` only once
                  then = returned &&

                    // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    ( typeof returned === "object" ||
                      typeof returned === "function" ) &&
                    returned.then;

                  // Handle a returned thenable
                  if ( jQuery.isFunction( then ) ) {

                    // Special processors (notify) just wait for resolution
                    if ( special ) {
                      then.call(
                        returned,
                        resolve( maxDepth, deferred, Identity, special ),
                        resolve( maxDepth, deferred, Thrower, special )
                      );

                    // Normal processors (resolve) also hook into progress
                    } else {

                      // ...and disregard older resolution values
                      maxDepth++;

                      then.call(
                        returned,
                        resolve( maxDepth, deferred, Identity, special ),
                        resolve( maxDepth, deferred, Thrower, special ),
                        resolve( maxDepth, deferred, Identity,
                          deferred.notifyWith )
                      );
                    }

                  // Handle all other returned values
                  } else {

                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if ( handler !== Identity ) {
                      that = undefined;
                      args = [ returned ];
                    }

                    // Process the value(s)
                    // Default process is resolve
                    ( special || deferred.resolveWith )( that, args );
                  }
                },

                // Only normal processors (resolve) catch and reject exceptions
                process = special ?
                  mightThrow :
                  function() {
                    try {
                      mightThrow();
                    } catch ( e ) {

                      if ( jQuery.Deferred.exceptionHook ) {
                        jQuery.Deferred.exceptionHook( e,
                          process.stackTrace );
                      }

                      // Support: Promises/A+ section 2.3.3.3.4.1
                      // https://promisesaplus.com/#point-61
                      // Ignore post-resolution exceptions
                      if ( depth + 1 >= maxDepth ) {

                        // Only substitute handlers pass on context
                        // and multiple values (non-spec behavior)
                        if ( handler !== Thrower ) {
                          that = undefined;
                          args = [ e ];
                        }

                        deferred.rejectWith( that, args );
                      }
                    }
                  };

              // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors
              if ( depth ) {
                process();
              } else {

                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if ( jQuery.Deferred.getStackHook ) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }
                window.setTimeout( process );
              }
            };
          }

          return jQuery.Deferred( function( newDefer ) {

            // progress_handlers.add( ... )
            tuples[ 0 ][ 3 ].add(
              resolve(
                0,
                newDefer,
                jQuery.isFunction( onProgress ) ?
                  onProgress :
                  Identity,
                newDefer.notifyWith
              )
            );

            // fulfilled_handlers.add( ... )
            tuples[ 1 ][ 3 ].add(
              resolve(
                0,
                newDefer,
                jQuery.isFunction( onFulfilled ) ?
                  onFulfilled :
                  Identity
              )
            );

            // rejected_handlers.add( ... )
            tuples[ 2 ][ 3 ].add(
              resolve(
                0,
                newDefer,
                jQuery.isFunction( onRejected ) ?
                  onRejected :
                  Thrower
              )
            );
          } ).promise();
        },

        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function( obj ) {
          return obj != null ? jQuery.extend( obj, promise ) : promise;
        }
      },
      deferred = {};

    // Add list-specific methods
    jQuery.each( tuples, function( i, tuple ) {
      var list = tuple[ 2 ],
        stateString = tuple[ 5 ];

      // promise.progress = list.add
      // promise.done = list.add
      // promise.fail = list.add
      promise[ tuple[ 1 ] ] = list.add;

      // Handle state
      if ( stateString ) {
        list.add(
          function() {

            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            state = stateString;
          },

          // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[ 3 - i ][ 2 ].disable,

          // progress_callbacks.lock
          tuples[ 0 ][ 2 ].lock
        );
      }

      // progress_handlers.fire
      // fulfilled_handlers.fire
      // rejected_handlers.fire
      list.add( tuple[ 3 ].fire );

      // deferred.notify = function() { deferred.notifyWith(...) }
      // deferred.resolve = function() { deferred.resolveWith(...) }
      // deferred.reject = function() { deferred.rejectWith(...) }
      deferred[ tuple[ 0 ] ] = function() {
        deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
        return this;
      };

      // deferred.notifyWith = list.fireWith
      // deferred.resolveWith = list.fireWith
      // deferred.rejectWith = list.fireWith
      deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
    } );

    // Make the deferred a promise
    promise.promise( deferred );

    // Call given func if any
    if ( func ) {
      func.call( deferred, deferred );
    }

    // All done!
    return deferred;
  },

  // Deferred helper
  when: function( singleValue ) {
    var

      // count of uncompleted subordinates
      remaining = arguments.length,

      // count of unprocessed arguments
      i = remaining,

      // subordinate fulfillment data
      resolveContexts = Array( i ),
      resolveValues = slice.call( arguments ),

      // the master Deferred
      master = jQuery.Deferred(),

      // subordinate callback factory
      updateFunc = function( i ) {
        return function( value ) {
          resolveContexts[ i ] = this;
          resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
          if ( !( --remaining ) ) {
            master.resolveWith( resolveContexts, resolveValues );
          }
        };
      };

    // Single- and empty arguments are adopted like Promise.resolve
    if ( remaining <= 1 ) {
      adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

      // Use .then() to unwrap secondary thenables (cf. gh-3000)
      if ( master.state() === "pending" ||
        jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

        return master.then();
      }
    }

    // Multiple arguments are aggregated like Promise.all array elements
    while ( i-- ) {
      adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
    }

    return master.promise();
  }
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

  // Support: IE 8 - 9 only
  // Console exists when dev tools are open, which can happen at any time
  if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
    window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
  }
};




jQuery.readyException = function( error ) {
  window.setTimeout( function() {
    throw error;
  } );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

  readyList
    .then( fn )

    // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    .catch( function( error ) {
      jQuery.readyException( error );
    } );

  return this;
};

jQuery.extend( {

  // Is the DOM ready to be used? Set to true once it occurs.
  isReady: false,

  // A counter to track how many items to wait for before
  // the ready event fires. See #6781
  readyWait: 1,

  // Hold (or release) the ready event
  holdReady: function( hold ) {
    if ( hold ) {
      jQuery.readyWait++;
    } else {
      jQuery.ready( true );
    }
  },

  // Handle when the DOM is ready
  ready: function( wait ) {

    // Abort if there are pending holds or we're already ready
    if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
      return;
    }

    // Remember that the DOM is ready
    jQuery.isReady = true;

    // If a normal DOM Ready event fired, decrement, and wait if need be
    if ( wait !== true && --jQuery.readyWait > 0 ) {
      return;
    }

    // If there are functions bound, to execute
    readyList.resolveWith( document, [ jQuery ] );
  }
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
  document.removeEventListener( "DOMContentLoaded", completed );
  window.removeEventListener( "load", completed );
  jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
  ( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

  // Handle it asynchronously to allow scripts the opportunity to delay ready
  window.setTimeout( jQuery.ready );

} else {

  // Use the handy event callback
  document.addEventListener( "DOMContentLoaded", completed );

  // A fallback to window.onload, that will always work
  window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
  var i = 0,
    len = elems.length,
    bulk = key == null;

  // Sets many values
  if ( jQuery.type( key ) === "object" ) {
    chainable = true;
    for ( i in key ) {
      access( elems, fn, i, key[ i ], true, emptyGet, raw );
    }

  // Sets one value
  } else if ( value !== undefined ) {
    chainable = true;

    if ( !jQuery.isFunction( value ) ) {
      raw = true;
    }

    if ( bulk ) {

      // Bulk operations run against the entire set
      if ( raw ) {
        fn.call( elems, value );
        fn = null;

      // ...except when executing function values
      } else {
        bulk = fn;
        fn = function( elem, key, value ) {
          return bulk.call( jQuery( elem ), value );
        };
      }
    }

    if ( fn ) {
      for ( ; i < len; i++ ) {
        fn(
          elems[ i ], key, raw ?
          value :
          value.call( elems[ i ], i, fn( elems[ i ], key ) )
        );
      }
    }
  }

  if ( chainable ) {
    return elems;
  }

  // Gets
  if ( bulk ) {
    return fn.call( elems );
  }

  return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

  // Accepts only:
  //  - Node
  //    - Node.ELEMENT_NODE
  //    - Node.DOCUMENT_NODE
  //  - Object
  //    - Any
  return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
  this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

  cache: function( owner ) {

    // Check if the owner object already has a cache
    var value = owner[ this.expando ];

    // If not, create one
    if ( !value ) {
      value = {};

      // We can accept data for non-element nodes in modern browsers,
      // but we should not, see #8335.
      // Always return an empty object.
      if ( acceptData( owner ) ) {

        // If it is a node unlikely to be stringify-ed or looped over
        // use plain assignment
        if ( owner.nodeType ) {
          owner[ this.expando ] = value;

        // Otherwise secure it in a non-enumerable property
        // configurable must be true to allow the property to be
        // deleted when data is removed
        } else {
          Object.defineProperty( owner, this.expando, {
            value: value,
            configurable: true
          } );
        }
      }
    }

    return value;
  },
  set: function( owner, data, value ) {
    var prop,
      cache = this.cache( owner );

    // Handle: [ owner, key, value ] args
    // Always use camelCase key (gh-2257)
    if ( typeof data === "string" ) {
      cache[ jQuery.camelCase( data ) ] = value;

    // Handle: [ owner, { properties } ] args
    } else {

      // Copy the properties one-by-one to the cache object
      for ( prop in data ) {
        cache[ jQuery.camelCase( prop ) ] = data[ prop ];
      }
    }
    return cache;
  },
  get: function( owner, key ) {
    return key === undefined ?
      this.cache( owner ) :

      // Always use camelCase key (gh-2257)
      owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
  },
  access: function( owner, key, value ) {

    // In cases where either:
    //
    //   1. No key was specified
    //   2. A string key was specified, but no value provided
    //
    // Take the "read" path and allow the get method to determine
    // which value to return, respectively either:
    //
    //   1. The entire cache object
    //   2. The data stored at the key
    //
    if ( key === undefined ||
        ( ( key && typeof key === "string" ) && value === undefined ) ) {

      return this.get( owner, key );
    }

    // When the key is not a string, or both a key and value
    // are specified, set or extend (existing objects) with either:
    //
    //   1. An object of properties
    //   2. A key and value
    //
    this.set( owner, key, value );

    // Since the "set" path can have two possible entry points
    // return the expected data based on which path was taken[*]
    return value !== undefined ? value : key;
  },
  remove: function( owner, key ) {
    var i,
      cache = owner[ this.expando ];

    if ( cache === undefined ) {
      return;
    }

    if ( key !== undefined ) {

      // Support array or space separated string of keys
      if ( jQuery.isArray( key ) ) {

        // If key is an array of keys...
        // We always set camelCase keys, so remove that.
        key = key.map( jQuery.camelCase );
      } else {
        key = jQuery.camelCase( key );

        // If a key with the spaces exists, use it.
        // Otherwise, create an array by matching non-whitespace
        key = key in cache ?
          [ key ] :
          ( key.match( rnothtmlwhite ) || [] );
      }

      i = key.length;

      while ( i-- ) {
        delete cache[ key[ i ] ];
      }
    }

    // Remove the expando if there's no more data
    if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

      // Support: Chrome <=35 - 45
      // Webkit & Blink performance suffers when deleting properties
      // from DOM nodes, so set to undefined instead
      // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
      if ( owner.nodeType ) {
        owner[ this.expando ] = undefined;
      } else {
        delete owner[ this.expando ];
      }
    }
  },
  hasData: function( owner ) {
    var cache = owner[ this.expando ];
    return cache !== undefined && !jQuery.isEmptyObject( cache );
  }
};
var dataPriv = new Data();

var dataUser = new Data();



//  Implementation Summary
//
//  1. Enforce API surface and semantic compatibility with 1.9.x branch
//  2. Improve the module's maintainability by reducing the storage
//    paths to a single mechanism.
//  3. Use the same single mechanism to support "private" and "user" data.
//  4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//  5. Avoid exposing implementation details on user objects (eg. expando properties)
//  6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  rmultiDash = /[A-Z]/g;

function getData( data ) {
  if ( data === "true" ) {
    return true;
  }

  if ( data === "false" ) {
    return false;
  }

  if ( data === "null" ) {
    return null;
  }

  // Only convert to a number if it doesn't change the string
  if ( data === +data + "" ) {
    return +data;
  }

  if ( rbrace.test( data ) ) {
    return JSON.parse( data );
  }

  return data;
}

function dataAttr( elem, key, data ) {
  var name;

  // If nothing was found internally, try to fetch any
  // data from the HTML5 data-* attribute
  if ( data === undefined && elem.nodeType === 1 ) {
    name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
    data = elem.getAttribute( name );

    if ( typeof data === "string" ) {
      try {
        data = getData( data );
      } catch ( e ) {}

      // Make sure we set the data so it isn't changed later
      dataUser.set( elem, key, data );
    } else {
      data = undefined;
    }
  }
  return data;
}

jQuery.extend( {
  hasData: function( elem ) {
    return dataUser.hasData( elem ) || dataPriv.hasData( elem );
  },

  data: function( elem, name, data ) {
    return dataUser.access( elem, name, data );
  },

  removeData: function( elem, name ) {
    dataUser.remove( elem, name );
  },

  // TODO: Now that all calls to _data and _removeData have been replaced
  // with direct calls to dataPriv methods, these can be deprecated.
  _data: function( elem, name, data ) {
    return dataPriv.access( elem, name, data );
  },

  _removeData: function( elem, name ) {
    dataPriv.remove( elem, name );
  }
} );

jQuery.fn.extend( {
  data: function( key, value ) {
    var i, name, data,
      elem = this[ 0 ],
      attrs = elem && elem.attributes;

    // Gets all values
    if ( key === undefined ) {
      if ( this.length ) {
        data = dataUser.get( elem );

        if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
          i = attrs.length;
          while ( i-- ) {

            // Support: IE 11 only
            // The attrs elements can be null (#14894)
            if ( attrs[ i ] ) {
              name = attrs[ i ].name;
              if ( name.indexOf( "data-" ) === 0 ) {
                name = jQuery.camelCase( name.slice( 5 ) );
                dataAttr( elem, name, data[ name ] );
              }
            }
          }
          dataPriv.set( elem, "hasDataAttrs", true );
        }
      }

      return data;
    }

    // Sets multiple values
    if ( typeof key === "object" ) {
      return this.each( function() {
        dataUser.set( this, key );
      } );
    }

    return access( this, function( value ) {
      var data;

      // The calling jQuery object (element matches) is not empty
      // (and therefore has an element appears at this[ 0 ]) and the
      // `value` parameter was not undefined. An empty jQuery object
      // will result in `undefined` for elem = this[ 0 ] which will
      // throw an exception if an attempt to read a data cache is made.
      if ( elem && value === undefined ) {

        // Attempt to get data from the cache
        // The key will always be camelCased in Data
        data = dataUser.get( elem, key );
        if ( data !== undefined ) {
          return data;
        }

        // Attempt to "discover" the data in
        // HTML5 custom data-* attrs
        data = dataAttr( elem, key );
        if ( data !== undefined ) {
          return data;
        }

        // We tried really hard, but the data doesn't exist.
        return;
      }

      // Set the data...
      this.each( function() {

        // We always store the camelCased key
        dataUser.set( this, key, value );
      } );
    }, null, value, arguments.length > 1, null, true );
  },

  removeData: function( key ) {
    return this.each( function() {
      dataUser.remove( this, key );
    } );
  }
} );


jQuery.extend( {
  queue: function( elem, type, data ) {
    var queue;

    if ( elem ) {
      type = ( type || "fx" ) + "queue";
      queue = dataPriv.get( elem, type );

      // Speed up dequeue by getting out quickly if this is just a lookup
      if ( data ) {
        if ( !queue || jQuery.isArray( data ) ) {
          queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
        } else {
          queue.push( data );
        }
      }
      return queue || [];
    }
  },

  dequeue: function( elem, type ) {
    type = type || "fx";

    var queue = jQuery.queue( elem, type ),
      startLength = queue.length,
      fn = queue.shift(),
      hooks = jQuery._queueHooks( elem, type ),
      next = function() {
        jQuery.dequeue( elem, type );
      };

    // If the fx queue is dequeued, always remove the progress sentinel
    if ( fn === "inprogress" ) {
      fn = queue.shift();
      startLength--;
    }

    if ( fn ) {

      // Add a progress sentinel to prevent the fx queue from being
      // automatically dequeued
      if ( type === "fx" ) {
        queue.unshift( "inprogress" );
      }

      // Clear up the last queue stop function
      delete hooks.stop;
      fn.call( elem, next, hooks );
    }

    if ( !startLength && hooks ) {
      hooks.empty.fire();
    }
  },

  // Not public - generate a queueHooks object, or return the current one
  _queueHooks: function( elem, type ) {
    var key = type + "queueHooks";
    return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
      empty: jQuery.Callbacks( "once memory" ).add( function() {
        dataPriv.remove( elem, [ type + "queue", key ] );
      } )
    } );
  }
} );

jQuery.fn.extend( {
  queue: function( type, data ) {
    var setter = 2;

    if ( typeof type !== "string" ) {
      data = type;
      type = "fx";
      setter--;
    }

    if ( arguments.length < setter ) {
      return jQuery.queue( this[ 0 ], type );
    }

    return data === undefined ?
      this :
      this.each( function() {
        var queue = jQuery.queue( this, type, data );

        // Ensure a hooks for this queue
        jQuery._queueHooks( this, type );

        if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
          jQuery.dequeue( this, type );
        }
      } );
  },
  dequeue: function( type ) {
    return this.each( function() {
      jQuery.dequeue( this, type );
    } );
  },
  clearQueue: function( type ) {
    return this.queue( type || "fx", [] );
  },

  // Get a promise resolved when queues of a certain type
  // are emptied (fx is the type by default)
  promise: function( type, obj ) {
    var tmp,
      count = 1,
      defer = jQuery.Deferred(),
      elements = this,
      i = this.length,
      resolve = function() {
        if ( !( --count ) ) {
          defer.resolveWith( elements, [ elements ] );
        }
      };

    if ( typeof type !== "string" ) {
      obj = type;
      type = undefined;
    }
    type = type || "fx";

    while ( i-- ) {
      tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
      if ( tmp && tmp.empty ) {
        count++;
        tmp.empty.add( resolve );
      }
    }
    resolve();
    return defer.promise( obj );
  }
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem;

    // Inline style trumps all
    return elem.style.display === "none" ||
      elem.style.display === "" &&

      // Otherwise, check computed style
      // Support: Firefox <=43 - 45
      // Disconnected elements can have computed display: none, so first confirm that elem is
      // in the document.
      jQuery.contains( elem.ownerDocument, elem ) &&

      jQuery.css( elem, "display" ) === "none";
  };

var swap = function( elem, options, callback, args ) {
  var ret, name,
    old = {};

  // Remember the old values, and insert the new ones
  for ( name in options ) {
    old[ name ] = elem.style[ name ];
    elem.style[ name ] = options[ name ];
  }

  ret = callback.apply( elem, args || [] );

  // Revert the old values
  for ( name in options ) {
    elem.style[ name ] = old[ name ];
  }

  return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
  var adjusted,
    scale = 1,
    maxIterations = 20,
    currentValue = tween ?
      function() {
        return tween.cur();
      } :
      function() {
        return jQuery.css( elem, prop, "" );
      },
    initial = currentValue(),
    unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

    // Starting value computation is required for potential unit mismatches
    initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
      rcssNum.exec( jQuery.css( elem, prop ) );

  if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

    // Trust units reported by jQuery.css
    unit = unit || initialInUnit[ 3 ];

    // Make sure we update the tween properties later on
    valueParts = valueParts || [];

    // Iteratively approximate from a nonzero starting point
    initialInUnit = +initial || 1;

    do {

      // If previous iteration zeroed out, double until we get *something*.
      // Use string for doubling so we don't accidentally see scale as unchanged below
      scale = scale || ".5";

      // Adjust and apply
      initialInUnit = initialInUnit / scale;
      jQuery.style( elem, prop, initialInUnit + unit );

    // Update scale, tolerating zero or NaN from tween.cur()
    // Break the loop if scale is unchanged or perfect, or if we've just had enough.
    } while (
      scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
    );
  }

  if ( valueParts ) {
    initialInUnit = +initialInUnit || +initial || 0;

    // Apply relative offset (+=/-=) if specified
    adjusted = valueParts[ 1 ] ?
      initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
      +valueParts[ 2 ];
    if ( tween ) {
      tween.unit = unit;
      tween.start = initialInUnit;
      tween.end = adjusted;
    }
  }
  return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
  var temp,
    doc = elem.ownerDocument,
    nodeName = elem.nodeName,
    display = defaultDisplayMap[ nodeName ];

  if ( display ) {
    return display;
  }

  temp = doc.body.appendChild( doc.createElement( nodeName ) );
  display = jQuery.css( temp, "display" );

  temp.parentNode.removeChild( temp );

  if ( display === "none" ) {
    display = "block";
  }
  defaultDisplayMap[ nodeName ] = display;

  return display;
}

function showHide( elements, show ) {
  var display, elem,
    values = [],
    index = 0,
    length = elements.length;

  // Determine new display value for elements that need to change
  for ( ; index < length; index++ ) {
    elem = elements[ index ];
    if ( !elem.style ) {
      continue;
    }

    display = elem.style.display;
    if ( show ) {

      // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
      // check is required in this first loop unless we have a nonempty display value (either
      // inline or about-to-be-restored)
      if ( display === "none" ) {
        values[ index ] = dataPriv.get( elem, "display" ) || null;
        if ( !values[ index ] ) {
          elem.style.display = "";
        }
      }
      if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
        values[ index ] = getDefaultDisplay( elem );
      }
    } else {
      if ( display !== "none" ) {
        values[ index ] = "none";

        // Remember what we're overwriting
        dataPriv.set( elem, "display", display );
      }
    }
  }

  // Set the display of the elements in a second loop to avoid constant reflow
  for ( index = 0; index < length; index++ ) {
    if ( values[ index ] != null ) {
      elements[ index ].style.display = values[ index ];
    }
  }

  return elements;
}

jQuery.fn.extend( {
  show: function() {
    return showHide( this, true );
  },
  hide: function() {
    return showHide( this );
  },
  toggle: function( state ) {
    if ( typeof state === "boolean" ) {
      return state ? this.show() : this.hide();
    }

    return this.each( function() {
      if ( isHiddenWithinTree( this ) ) {
        jQuery( this ).show();
      } else {
        jQuery( this ).hide();
      }
    } );
  }
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

  // Support: IE <=9 only
  option: [ 1, "<select multiple='multiple'>", "</select>" ],

  // XHTML parsers do not magically insert elements in the
  // same way that tag soup parsers do. So we cannot shorten
  // this by omitting <tbody> or other required elements.
  thead: [ 1, "<table>", "</table>" ],
  col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
  tr: [ 2, "<table><tbody>", "</tbody></table>" ],
  td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

  _default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

  // Support: IE <=9 - 11 only
  // Use typeof to avoid zero-argument method invocation on host objects (#15151)
  var ret;

  if ( typeof context.getElementsByTagName !== "undefined" ) {
    ret = context.getElementsByTagName( tag || "*" );

  } else if ( typeof context.querySelectorAll !== "undefined" ) {
    ret = context.querySelectorAll( tag || "*" );

  } else {
    ret = [];
  }

  if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
    return jQuery.merge( [ context ], ret );
  }

  return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
  var i = 0,
    l = elems.length;

  for ( ; i < l; i++ ) {
    dataPriv.set(
      elems[ i ],
      "globalEval",
      !refElements || dataPriv.get( refElements[ i ], "globalEval" )
    );
  }
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
  var elem, tmp, tag, wrap, contains, j,
    fragment = context.createDocumentFragment(),
    nodes = [],
    i = 0,
    l = elems.length;

  for ( ; i < l; i++ ) {
    elem = elems[ i ];

    if ( elem || elem === 0 ) {

      // Add nodes directly
      if ( jQuery.type( elem ) === "object" ) {

        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

      // Convert non-html into a text node
      } else if ( !rhtml.test( elem ) ) {
        nodes.push( context.createTextNode( elem ) );

      // Convert html into DOM nodes
      } else {
        tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

        // Deserialize a standard representation
        tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
        wrap = wrapMap[ tag ] || wrapMap._default;
        tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

        // Descend through wrappers to the right content
        j = wrap[ 0 ];
        while ( j-- ) {
          tmp = tmp.lastChild;
        }

        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        jQuery.merge( nodes, tmp.childNodes );

        // Remember the top-level container
        tmp = fragment.firstChild;

        // Ensure the created nodes are orphaned (#12392)
        tmp.textContent = "";
      }
    }
  }

  // Remove wrapper from fragment
  fragment.textContent = "";

  i = 0;
  while ( ( elem = nodes[ i++ ] ) ) {

    // Skip elements already in the context collection (trac-4087)
    if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
      if ( ignored ) {
        ignored.push( elem );
      }
      continue;
    }

    contains = jQuery.contains( elem.ownerDocument, elem );

    // Append to fragment
    tmp = getAll( fragment.appendChild( elem ), "script" );

    // Preserve script evaluation history
    if ( contains ) {
      setGlobalEval( tmp );
    }

    // Capture executables
    if ( scripts ) {
      j = 0;
      while ( ( elem = tmp[ j++ ] ) ) {
        if ( rscriptType.test( elem.type || "" ) ) {
          scripts.push( elem );
        }
      }
    }
  }

  return fragment;
}


( function() {
  var fragment = document.createDocumentFragment(),
    div = fragment.appendChild( document.createElement( "div" ) ),
    input = document.createElement( "input" );

  // Support: Android 4.0 - 4.3 only
  // Check state lost if the name is set (#11217)
  // Support: Windows Web Apps (WWA)
  // `name` and `type` must use .setAttribute for WWA (#14901)
  input.setAttribute( "type", "radio" );
  input.setAttribute( "checked", "checked" );
  input.setAttribute( "name", "t" );

  div.appendChild( input );

  // Support: Android <=4.1 only
  // Older WebKit doesn't clone checked state correctly in fragments
  support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

  // Support: IE <=11 only
  // Make sure textarea (and checkbox) defaultValue is properly cloned
  div.innerHTML = "<textarea>x</textarea>";
  support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
  rkeyEvent = /^key/,
  rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
  return true;
}

function returnFalse() {
  return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
  try {
    return document.activeElement;
  } catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
  var origFn, type;

  // Types can be a map of types/handlers
  if ( typeof types === "object" ) {

    // ( types-Object, selector, data )
    if ( typeof selector !== "string" ) {

      // ( types-Object, data )
      data = data || selector;
      selector = undefined;
    }
    for ( type in types ) {
      on( elem, type, selector, data, types[ type ], one );
    }
    return elem;
  }

  if ( data == null && fn == null ) {

    // ( types, fn )
    fn = selector;
    data = selector = undefined;
  } else if ( fn == null ) {
    if ( typeof selector === "string" ) {

      // ( types, selector, fn )
      fn = data;
      data = undefined;
    } else {

      // ( types, data, fn )
      fn = data;
      data = selector;
      selector = undefined;
    }
  }
  if ( fn === false ) {
    fn = returnFalse;
  } else if ( !fn ) {
    return elem;
  }

  if ( one === 1 ) {
    origFn = fn;
    fn = function( event ) {

      // Can use an empty set, since event contains the info
      jQuery().off( event );
      return origFn.apply( this, arguments );
    };

    // Use same guid so caller can remove using origFn
    fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
  }
  return elem.each( function() {
    jQuery.event.add( this, types, fn, data, selector );
  } );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

  global: {},

  add: function( elem, types, handler, data, selector ) {

    var handleObjIn, eventHandle, tmp,
      events, t, handleObj,
      special, handlers, type, namespaces, origType,
      elemData = dataPriv.get( elem );

    // Don't attach events to noData or text/comment nodes (but allow plain objects)
    if ( !elemData ) {
      return;
    }

    // Caller can pass in an object of custom data in lieu of the handler
    if ( handler.handler ) {
      handleObjIn = handler;
      handler = handleObjIn.handler;
      selector = handleObjIn.selector;
    }

    // Ensure that invalid selectors throw exceptions at attach time
    // Evaluate against documentElement in case elem is a non-element node (e.g., document)
    if ( selector ) {
      jQuery.find.matchesSelector( documentElement, selector );
    }

    // Make sure that the handler has a unique ID, used to find/remove it later
    if ( !handler.guid ) {
      handler.guid = jQuery.guid++;
    }

    // Init the element's event structure and main handler, if this is the first
    if ( !( events = elemData.events ) ) {
      events = elemData.events = {};
    }
    if ( !( eventHandle = elemData.handle ) ) {
      eventHandle = elemData.handle = function( e ) {

        // Discard the second event of a jQuery.event.trigger() and
        // when an event is called after a page has unloaded
        return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
          jQuery.event.dispatch.apply( elem, arguments ) : undefined;
      };
    }

    // Handle multiple events separated by a space
    types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
    t = types.length;
    while ( t-- ) {
      tmp = rtypenamespace.exec( types[ t ] ) || [];
      type = origType = tmp[ 1 ];
      namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

      // There *must* be a type, no attaching namespace-only handlers
      if ( !type ) {
        continue;
      }

      // If event changes its type, use the special event handlers for the changed type
      special = jQuery.event.special[ type ] || {};

      // If selector defined, determine special event api type, otherwise given type
      type = ( selector ? special.delegateType : special.bindType ) || type;

      // Update special based on newly reset type
      special = jQuery.event.special[ type ] || {};

      // handleObj is passed to all event handlers
      handleObj = jQuery.extend( {
        type: type,
        origType: origType,
        data: data,
        handler: handler,
        guid: handler.guid,
        selector: selector,
        needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
        namespace: namespaces.join( "." )
      }, handleObjIn );

      // Init the event handler queue if we're the first
      if ( !( handlers = events[ type ] ) ) {
        handlers = events[ type ] = [];
        handlers.delegateCount = 0;

        // Only use addEventListener if the special events handler returns false
        if ( !special.setup ||
          special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

          if ( elem.addEventListener ) {
            elem.addEventListener( type, eventHandle );
          }
        }
      }

      if ( special.add ) {
        special.add.call( elem, handleObj );

        if ( !handleObj.handler.guid ) {
          handleObj.handler.guid = handler.guid;
        }
      }

      // Add to the element's handler list, delegates in front
      if ( selector ) {
        handlers.splice( handlers.delegateCount++, 0, handleObj );
      } else {
        handlers.push( handleObj );
      }

      // Keep track of which events have ever been used, for event optimization
      jQuery.event.global[ type ] = true;
    }

  },

  // Detach an event or set of events from an element
  remove: function( elem, types, handler, selector, mappedTypes ) {

    var j, origCount, tmp,
      events, t, handleObj,
      special, handlers, type, namespaces, origType,
      elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

    if ( !elemData || !( events = elemData.events ) ) {
      return;
    }

    // Once for each type.namespace in types; type may be omitted
    types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
    t = types.length;
    while ( t-- ) {
      tmp = rtypenamespace.exec( types[ t ] ) || [];
      type = origType = tmp[ 1 ];
      namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

      // Unbind all events (on this namespace, if provided) for the element
      if ( !type ) {
        for ( type in events ) {
          jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
        }
        continue;
      }

      special = jQuery.event.special[ type ] || {};
      type = ( selector ? special.delegateType : special.bindType ) || type;
      handlers = events[ type ] || [];
      tmp = tmp[ 2 ] &&
        new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

      // Remove matching events
      origCount = j = handlers.length;
      while ( j-- ) {
        handleObj = handlers[ j ];

        if ( ( mappedTypes || origType === handleObj.origType ) &&
          ( !handler || handler.guid === handleObj.guid ) &&
          ( !tmp || tmp.test( handleObj.namespace ) ) &&
          ( !selector || selector === handleObj.selector ||
            selector === "**" && handleObj.selector ) ) {
          handlers.splice( j, 1 );

          if ( handleObj.selector ) {
            handlers.delegateCount--;
          }
          if ( special.remove ) {
            special.remove.call( elem, handleObj );
          }
        }
      }

      // Remove generic event handler if we removed something and no more handlers exist
      // (avoids potential for endless recursion during removal of special event handlers)
      if ( origCount && !handlers.length ) {
        if ( !special.teardown ||
          special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

          jQuery.removeEvent( elem, type, elemData.handle );
        }

        delete events[ type ];
      }
    }

    // Remove data and the expando if it's no longer used
    if ( jQuery.isEmptyObject( events ) ) {
      dataPriv.remove( elem, "handle events" );
    }
  },

  dispatch: function( nativeEvent ) {

    // Make a writable jQuery.Event from the native event object
    var event = jQuery.event.fix( nativeEvent );

    var i, j, ret, matched, handleObj, handlerQueue,
      args = new Array( arguments.length ),
      handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
      special = jQuery.event.special[ event.type ] || {};

    // Use the fix-ed jQuery.Event rather than the (read-only) native event
    args[ 0 ] = event;

    for ( i = 1; i < arguments.length; i++ ) {
      args[ i ] = arguments[ i ];
    }

    event.delegateTarget = this;

    // Call the preDispatch hook for the mapped type, and let it bail if desired
    if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
      return;
    }

    // Determine handlers
    handlerQueue = jQuery.event.handlers.call( this, event, handlers );

    // Run delegates first; they may want to stop propagation beneath us
    i = 0;
    while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
      event.currentTarget = matched.elem;

      j = 0;
      while ( ( handleObj = matched.handlers[ j++ ] ) &&
        !event.isImmediatePropagationStopped() ) {

        // Triggered event must either 1) have no namespace, or 2) have namespace(s)
        // a subset or equal to those in the bound event (both can have no namespace).
        if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

          event.handleObj = handleObj;
          event.data = handleObj.data;

          ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
            handleObj.handler ).apply( matched.elem, args );

          if ( ret !== undefined ) {
            if ( ( event.result = ret ) === false ) {
              event.preventDefault();
              event.stopPropagation();
            }
          }
        }
      }
    }

    // Call the postDispatch hook for the mapped type
    if ( special.postDispatch ) {
      special.postDispatch.call( this, event );
    }

    return event.result;
  },

  handlers: function( event, handlers ) {
    var i, handleObj, sel, matchedHandlers, matchedSelectors,
      handlerQueue = [],
      delegateCount = handlers.delegateCount,
      cur = event.target;

    // Find delegate handlers
    if ( delegateCount &&

      // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType &&

      // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !( event.type === "click" && event.button >= 1 ) ) {

      for ( ; cur !== this; cur = cur.parentNode || this ) {

        // Don't check non-elements (#13208)
        // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
        if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
          matchedHandlers = [];
          matchedSelectors = {};
          for ( i = 0; i < delegateCount; i++ ) {
            handleObj = handlers[ i ];

            // Don't conflict with Object.prototype properties (#13203)
            sel = handleObj.selector + " ";

            if ( matchedSelectors[ sel ] === undefined ) {
              matchedSelectors[ sel ] = handleObj.needsContext ?
                jQuery( sel, this ).index( cur ) > -1 :
                jQuery.find( sel, this, null, [ cur ] ).length;
            }
            if ( matchedSelectors[ sel ] ) {
              matchedHandlers.push( handleObj );
            }
          }
          if ( matchedHandlers.length ) {
            handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
          }
        }
      }
    }

    // Add the remaining (directly-bound) handlers
    cur = this;
    if ( delegateCount < handlers.length ) {
      handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
    }

    return handlerQueue;
  },

  addProp: function( name, hook ) {
    Object.defineProperty( jQuery.Event.prototype, name, {
      enumerable: true,
      configurable: true,

      get: jQuery.isFunction( hook ) ?
        function() {
          if ( this.originalEvent ) {
              return hook( this.originalEvent );
          }
        } :
        function() {
          if ( this.originalEvent ) {
              return this.originalEvent[ name ];
          }
        },

      set: function( value ) {
        Object.defineProperty( this, name, {
          enumerable: true,
          configurable: true,
          writable: true,
          value: value
        } );
      }
    } );
  },

  fix: function( originalEvent ) {
    return originalEvent[ jQuery.expando ] ?
      originalEvent :
      new jQuery.Event( originalEvent );
  },

  special: {
    load: {

      // Prevent triggered image.load events from bubbling to window.load
      noBubble: true
    },
    focus: {

      // Fire native event if possible so blur/focus sequence is correct
      trigger: function() {
        if ( this !== safeActiveElement() && this.focus ) {
          this.focus();
          return false;
        }
      },
      delegateType: "focusin"
    },
    blur: {
      trigger: function() {
        if ( this === safeActiveElement() && this.blur ) {
          this.blur();
          return false;
        }
      },
      delegateType: "focusout"
    },
    click: {

      // For checkbox, fire native event so checked state will be right
      trigger: function() {
        if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
          this.click();
          return false;
        }
      },

      // For cross-browser consistency, don't fire native .click() on links
      _default: function( event ) {
        return jQuery.nodeName( event.target, "a" );
      }
    },

    beforeunload: {
      postDispatch: function( event ) {

        // Support: Firefox 20+
        // Firefox doesn't alert if the returnValue field is not set.
        if ( event.result !== undefined && event.originalEvent ) {
          event.originalEvent.returnValue = event.result;
        }
      }
    }
  }
};

jQuery.removeEvent = function( elem, type, handle ) {

  // This "if" is needed for plain objects
  if ( elem.removeEventListener ) {
    elem.removeEventListener( type, handle );
  }
};

jQuery.Event = function( src, props ) {

  // Allow instantiation without the 'new' keyword
  if ( !( this instanceof jQuery.Event ) ) {
    return new jQuery.Event( src, props );
  }

  // Event object
  if ( src && src.type ) {
    this.originalEvent = src;
    this.type = src.type;

    // Events bubbling up the document may have been marked as prevented
    // by a handler lower down the tree; reflect the correct value.
    this.isDefaultPrevented = src.defaultPrevented ||
        src.defaultPrevented === undefined &&

        // Support: Android <=2.3 only
        src.returnValue === false ?
      returnTrue :
      returnFalse;

    // Create target properties
    // Support: Safari <=6 - 7 only
    // Target should not be a text node (#504, #13143)
    this.target = ( src.target && src.target.nodeType === 3 ) ?
      src.target.parentNode :
      src.target;

    this.currentTarget = src.currentTarget;
    this.relatedTarget = src.relatedTarget;

  // Event type
  } else {
    this.type = src;
  }

  // Put explicitly provided properties onto the event object
  if ( props ) {
    jQuery.extend( this, props );
  }

  // Create a timestamp if incoming event doesn't have one
  this.timeStamp = src && src.timeStamp || jQuery.now();

  // Mark it as fixed
  this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
  constructor: jQuery.Event,
  isDefaultPrevented: returnFalse,
  isPropagationStopped: returnFalse,
  isImmediatePropagationStopped: returnFalse,
  isSimulated: false,

  preventDefault: function() {
    var e = this.originalEvent;

    this.isDefaultPrevented = returnTrue;

    if ( e && !this.isSimulated ) {
      e.preventDefault();
    }
  },
  stopPropagation: function() {
    var e = this.originalEvent;

    this.isPropagationStopped = returnTrue;

    if ( e && !this.isSimulated ) {
      e.stopPropagation();
    }
  },
  stopImmediatePropagation: function() {
    var e = this.originalEvent;

    this.isImmediatePropagationStopped = returnTrue;

    if ( e && !this.isSimulated ) {
      e.stopImmediatePropagation();
    }

    this.stopPropagation();
  }
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
  altKey: true,
  bubbles: true,
  cancelable: true,
  changedTouches: true,
  ctrlKey: true,
  detail: true,
  eventPhase: true,
  metaKey: true,
  pageX: true,
  pageY: true,
  shiftKey: true,
  view: true,
  "char": true,
  charCode: true,
  key: true,
  keyCode: true,
  button: true,
  buttons: true,
  clientX: true,
  clientY: true,
  offsetX: true,
  offsetY: true,
  pointerId: true,
  pointerType: true,
  screenX: true,
  screenY: true,
  targetTouches: true,
  toElement: true,
  touches: true,

  which: function( event ) {
    var button = event.button;

    // Add which for key events
    if ( event.which == null && rkeyEvent.test( event.type ) ) {
      return event.charCode != null ? event.charCode : event.keyCode;
    }

    // Add which for click: 1 === left; 2 === middle; 3 === right
    if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
      if ( button & 1 ) {
        return 1;
      }

      if ( button & 2 ) {
        return 3;
      }

      if ( button & 4 ) {
        return 2;
      }

      return 0;
    }

    return event.which;
  }
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
  mouseenter: "mouseover",
  mouseleave: "mouseout",
  pointerenter: "pointerover",
  pointerleave: "pointerout"
}, function( orig, fix ) {
  jQuery.event.special[ orig ] = {
    delegateType: fix,
    bindType: fix,

    handle: function( event ) {
      var ret,
        target = this,
        related = event.relatedTarget,
        handleObj = event.handleObj;

      // For mouseenter/leave call the handler if related is outside the target.
      // NB: No relatedTarget if the mouse left/entered the browser window
      if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
        event.type = handleObj.origType;
        ret = handleObj.handler.apply( this, arguments );
        event.type = fix;
      }
      return ret;
    }
  };
} );

jQuery.fn.extend( {

  on: function( types, selector, data, fn ) {
    return on( this, types, selector, data, fn );
  },
  one: function( types, selector, data, fn ) {
    return on( this, types, selector, data, fn, 1 );
  },
  off: function( types, selector, fn ) {
    var handleObj, type;
    if ( types && types.preventDefault && types.handleObj ) {

      // ( event )  dispatched jQuery.Event
      handleObj = types.handleObj;
      jQuery( types.delegateTarget ).off(
        handleObj.namespace ?
          handleObj.origType + "." + handleObj.namespace :
          handleObj.origType,
        handleObj.selector,
        handleObj.handler
      );
      return this;
    }
    if ( typeof types === "object" ) {

      // ( types-object [, selector] )
      for ( type in types ) {
        this.off( type, selector, types[ type ] );
      }
      return this;
    }
    if ( selector === false || typeof selector === "function" ) {

      // ( types [, fn] )
      fn = selector;
      selector = undefined;
    }
    if ( fn === false ) {
      fn = returnFalse;
    }
    return this.each( function() {
      jQuery.event.remove( this, types, fn, selector );
    } );
  }
} );


var

  /* eslint-disable max-len */

  // See https://github.com/eslint/eslint/issues/3229
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

  /* eslint-enable */

  // Support: IE <=10 - 11, Edge 12 - 13
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,

  // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
  rscriptTypeMasked = /^true\/(.*)/,
  rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
  if ( jQuery.nodeName( elem, "table" ) &&
    jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

    return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
  }

  return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
  elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
  return elem;
}
function restoreScript( elem ) {
  var match = rscriptTypeMasked.exec( elem.type );

  if ( match ) {
    elem.type = match[ 1 ];
  } else {
    elem.removeAttribute( "type" );
  }

  return elem;
}

function cloneCopyEvent( src, dest ) {
  var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

  if ( dest.nodeType !== 1 ) {
    return;
  }

  // 1. Copy private data: events, handlers, etc.
  if ( dataPriv.hasData( src ) ) {
    pdataOld = dataPriv.access( src );
    pdataCur = dataPriv.set( dest, pdataOld );
    events = pdataOld.events;

    if ( events ) {
      delete pdataCur.handle;
      pdataCur.events = {};

      for ( type in events ) {
        for ( i = 0, l = events[ type ].length; i < l; i++ ) {
          jQuery.event.add( dest, type, events[ type ][ i ] );
        }
      }
    }
  }

  // 2. Copy user data
  if ( dataUser.hasData( src ) ) {
    udataOld = dataUser.access( src );
    udataCur = jQuery.extend( {}, udataOld );

    dataUser.set( dest, udataCur );
  }
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
  var nodeName = dest.nodeName.toLowerCase();

  // Fails to persist the checked state of a cloned checkbox or radio button.
  if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
    dest.checked = src.checked;

  // Fails to return the selected option to the default selected state when cloning options
  } else if ( nodeName === "input" || nodeName === "textarea" ) {
    dest.defaultValue = src.defaultValue;
  }
}

function domManip( collection, args, callback, ignored ) {

  // Flatten any nested arrays
  args = concat.apply( [], args );

  var fragment, first, scripts, hasScripts, node, doc,
    i = 0,
    l = collection.length,
    iNoClone = l - 1,
    value = args[ 0 ],
    isFunction = jQuery.isFunction( value );

  // We can't cloneNode fragments that contain checked, in WebKit
  if ( isFunction ||
      ( l > 1 && typeof value === "string" &&
        !support.checkClone && rchecked.test( value ) ) ) {
    return collection.each( function( index ) {
      var self = collection.eq( index );
      if ( isFunction ) {
        args[ 0 ] = value.call( this, index, self.html() );
      }
      domManip( self, args, callback, ignored );
    } );
  }

  if ( l ) {
    fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
    first = fragment.firstChild;

    if ( fragment.childNodes.length === 1 ) {
      fragment = first;
    }

    // Require either new content or an interest in ignored elements to invoke the callback
    if ( first || ignored ) {
      scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
      hasScripts = scripts.length;

      // Use the original fragment for the last item
      // instead of the first because it can end up
      // being emptied incorrectly in certain situations (#8070).
      for ( ; i < l; i++ ) {
        node = fragment;

        if ( i !== iNoClone ) {
          node = jQuery.clone( node, true, true );

          // Keep references to cloned scripts for later restoration
          if ( hasScripts ) {

            // Support: Android <=4.0 only, PhantomJS 1 only
            // push.apply(_, arraylike) throws on ancient WebKit
            jQuery.merge( scripts, getAll( node, "script" ) );
          }
        }

        callback.call( collection[ i ], node, i );
      }

      if ( hasScripts ) {
        doc = scripts[ scripts.length - 1 ].ownerDocument;

        // Reenable scripts
        jQuery.map( scripts, restoreScript );

        // Evaluate executable scripts on first document insertion
        for ( i = 0; i < hasScripts; i++ ) {
          node = scripts[ i ];
          if ( rscriptType.test( node.type || "" ) &&
            !dataPriv.access( node, "globalEval" ) &&
            jQuery.contains( doc, node ) ) {

            if ( node.src ) {

              // Optional AJAX dependency, but won't run scripts if not present
              if ( jQuery._evalUrl ) {
                jQuery._evalUrl( node.src );
              }
            } else {
              DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
            }
          }
        }
      }
    }
  }

  return collection;
}

function remove( elem, selector, keepData ) {
  var node,
    nodes = selector ? jQuery.filter( selector, elem ) : elem,
    i = 0;

  for ( ; ( node = nodes[ i ] ) != null; i++ ) {
    if ( !keepData && node.nodeType === 1 ) {
      jQuery.cleanData( getAll( node ) );
    }

    if ( node.parentNode ) {
      if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
        setGlobalEval( getAll( node, "script" ) );
      }
      node.parentNode.removeChild( node );
    }
  }

  return elem;
}

jQuery.extend( {
  htmlPrefilter: function( html ) {
    return html.replace( rxhtmlTag, "<$1></$2>" );
  },

  clone: function( elem, dataAndEvents, deepDataAndEvents ) {
    var i, l, srcElements, destElements,
      clone = elem.cloneNode( true ),
      inPage = jQuery.contains( elem.ownerDocument, elem );

    // Fix IE cloning issues
    if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
        !jQuery.isXMLDoc( elem ) ) {

      // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
      destElements = getAll( clone );
      srcElements = getAll( elem );

      for ( i = 0, l = srcElements.length; i < l; i++ ) {
        fixInput( srcElements[ i ], destElements[ i ] );
      }
    }

    // Copy the events from the original to the clone
    if ( dataAndEvents ) {
      if ( deepDataAndEvents ) {
        srcElements = srcElements || getAll( elem );
        destElements = destElements || getAll( clone );

        for ( i = 0, l = srcElements.length; i < l; i++ ) {
          cloneCopyEvent( srcElements[ i ], destElements[ i ] );
        }
      } else {
        cloneCopyEvent( elem, clone );
      }
    }

    // Preserve script evaluation history
    destElements = getAll( clone, "script" );
    if ( destElements.length > 0 ) {
      setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
    }

    // Return the cloned set
    return clone;
  },

  cleanData: function( elems ) {
    var data, elem, type,
      special = jQuery.event.special,
      i = 0;

    for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
      if ( acceptData( elem ) ) {
        if ( ( data = elem[ dataPriv.expando ] ) ) {
          if ( data.events ) {
            for ( type in data.events ) {
              if ( special[ type ] ) {
                jQuery.event.remove( elem, type );

              // This is a shortcut to avoid jQuery.event.remove's overhead
              } else {
                jQuery.removeEvent( elem, type, data.handle );
              }
            }
          }

          // Support: Chrome <=35 - 45+
          // Assign undefined instead of using delete, see Data#remove
          elem[ dataPriv.expando ] = undefined;
        }
        if ( elem[ dataUser.expando ] ) {

          // Support: Chrome <=35 - 45+
          // Assign undefined instead of using delete, see Data#remove
          elem[ dataUser.expando ] = undefined;
        }
      }
    }
  }
} );

jQuery.fn.extend( {
  detach: function( selector ) {
    return remove( this, selector, true );
  },

  remove: function( selector ) {
    return remove( this, selector );
  },

  text: function( value ) {
    return access( this, function( value ) {
      return value === undefined ?
        jQuery.text( this ) :
        this.empty().each( function() {
          if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
            this.textContent = value;
          }
        } );
    }, null, value, arguments.length );
  },

  append: function() {
    return domManip( this, arguments, function( elem ) {
      if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
        var target = manipulationTarget( this, elem );
        target.appendChild( elem );
      }
    } );
  },

  prepend: function() {
    return domManip( this, arguments, function( elem ) {
      if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
        var target = manipulationTarget( this, elem );
        target.insertBefore( elem, target.firstChild );
      }
    } );
  },

  before: function() {
    return domManip( this, arguments, function( elem ) {
      if ( this.parentNode ) {
        this.parentNode.insertBefore( elem, this );
      }
    } );
  },

  after: function() {
    return domManip( this, arguments, function( elem ) {
      if ( this.parentNode ) {
        this.parentNode.insertBefore( elem, this.nextSibling );
      }
    } );
  },

  empty: function() {
    var elem,
      i = 0;

    for ( ; ( elem = this[ i ] ) != null; i++ ) {
      if ( elem.nodeType === 1 ) {

        // Prevent memory leaks
        jQuery.cleanData( getAll( elem, false ) );

        // Remove any remaining nodes
        elem.textContent = "";
      }
    }

    return this;
  },

  clone: function( dataAndEvents, deepDataAndEvents ) {
    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

    return this.map( function() {
      return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
    } );
  },

  html: function( value ) {
    return access( this, function( value ) {
      var elem = this[ 0 ] || {},
        i = 0,
        l = this.length;

      if ( value === undefined && elem.nodeType === 1 ) {
        return elem.innerHTML;
      }

      // See if we can take a shortcut and just use innerHTML
      if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
        !wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

        value = jQuery.htmlPrefilter( value );

        try {
          for ( ; i < l; i++ ) {
            elem = this[ i ] || {};

            // Remove element nodes and prevent memory leaks
            if ( elem.nodeType === 1 ) {
              jQuery.cleanData( getAll( elem, false ) );
              elem.innerHTML = value;
            }
          }

          elem = 0;

        // If using innerHTML throws an exception, use the fallback method
        } catch ( e ) {}
      }

      if ( elem ) {
        this.empty().append( value );
      }
    }, null, value, arguments.length );
  },

  replaceWith: function() {
    var ignored = [];

    // Make the changes, replacing each non-ignored context element with the new content
    return domManip( this, arguments, function( elem ) {
      var parent = this.parentNode;

      if ( jQuery.inArray( this, ignored ) < 0 ) {
        jQuery.cleanData( getAll( this ) );
        if ( parent ) {
          parent.replaceChild( elem, this );
        }
      }

    // Force callback invocation
    }, ignored );
  }
} );

jQuery.each( {
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
}, function( name, original ) {
  jQuery.fn[ name ] = function( selector ) {
    var elems,
      ret = [],
      insert = jQuery( selector ),
      last = insert.length - 1,
      i = 0;

    for ( ; i <= last; i++ ) {
      elems = i === last ? this : this.clone( true );
      jQuery( insert[ i ] )[ original ]( elems );

      // Support: Android <=4.0 only, PhantomJS 1 only
      // .get() because push.apply(_, arraylike) throws on ancient WebKit
      push.apply( ret, elems.get() );
    }

    return this.pushStack( ret );
  };
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if ( !view || !view.opener ) {
      view = window;
    }

    return view.getComputedStyle( elem );
  };



( function() {

  // Executing both pixelPosition & boxSizingReliable tests require only one layout
  // so they're executed at the same time to save the second computation.
  function computeStyleTests() {

    // This is a singleton, we need to execute it only once
    if ( !div ) {
      return;
    }

    div.style.cssText =
      "box-sizing:border-box;" +
      "position:relative;display:block;" +
      "margin:auto;border:1px;padding:1px;" +
      "top:1%;width:50%";
    div.innerHTML = "";
    documentElement.appendChild( container );

    var divStyle = window.getComputedStyle( div );
    pixelPositionVal = divStyle.top !== "1%";

    // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
    reliableMarginLeftVal = divStyle.marginLeft === "2px";
    boxSizingReliableVal = divStyle.width === "4px";

    // Support: Android 4.0 - 4.3 only
    // Some styles come back with percentage values, even though they shouldn't
    div.style.marginRight = "50%";
    pixelMarginRightVal = divStyle.marginRight === "4px";

    documentElement.removeChild( container );

    // Nullify the div so it wouldn't be stored in the memory and
    // it will also be a sign that checks already performed
    div = null;
  }

  var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
    container = document.createElement( "div" ),
    div = document.createElement( "div" );

  // Finish early in limited (non-browser) environments
  if ( !div.style ) {
    return;
  }

  // Support: IE <=9 - 11 only
  // Style of cloned element affects source element cloned (#8908)
  div.style.backgroundClip = "content-box";
  div.cloneNode( true ).style.backgroundClip = "";
  support.clearCloneStyle = div.style.backgroundClip === "content-box";

  container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
    "padding:0;margin-top:1px;position:absolute";
  container.appendChild( div );

  jQuery.extend( support, {
    pixelPosition: function() {
      computeStyleTests();
      return pixelPositionVal;
    },
    boxSizingReliable: function() {
      computeStyleTests();
      return boxSizingReliableVal;
    },
    pixelMarginRight: function() {
      computeStyleTests();
      return pixelMarginRightVal;
    },
    reliableMarginLeft: function() {
      computeStyleTests();
      return reliableMarginLeftVal;
    }
  } );
} )();


function curCSS( elem, name, computed ) {
  var width, minWidth, maxWidth, ret,
    style = elem.style;

  computed = computed || getStyles( elem );

  // Support: IE <=9 only
  // getPropertyValue is only needed for .css('filter') (#12537)
  if ( computed ) {
    ret = computed.getPropertyValue( name ) || computed[ name ];

    if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
      ret = jQuery.style( elem, name );
    }

    // A tribute to the "awesome hack by Dean Edwards"
    // Android Browser returns percentage for some values,
    // but width seems to be reliably pixels.
    // This is against the CSSOM draft spec:
    // https://drafts.csswg.org/cssom/#resolved-values
    if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

      // Remember the original values
      width = style.width;
      minWidth = style.minWidth;
      maxWidth = style.maxWidth;

      // Put in the new values to get a computed value out
      style.minWidth = style.maxWidth = style.width = ret;
      ret = computed.width;

      // Revert the changed values
      style.width = width;
      style.minWidth = minWidth;
      style.maxWidth = maxWidth;
    }
  }

  return ret !== undefined ?

    // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" :
    ret;
}


function addGetHookIf( conditionFn, hookFn ) {

  // Define the hook, we'll check on the first run if it's really needed.
  return {
    get: function() {
      if ( conditionFn() ) {

        // Hook not needed (or it's not possible to use it due
        // to missing dependency), remove it.
        delete this.get;
        return;
      }

      // Hook needed; redefine it so that the support test is not executed again.
      return ( this.get = hookFn ).apply( this, arguments );
    }
  };
}


var

  // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
  cssShow = { position: "absolute", visibility: "hidden", display: "block" },
  cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  },

  cssPrefixes = [ "Webkit", "Moz", "ms" ],
  emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

  // Shortcut for names that are not vendor prefixed
  if ( name in emptyStyle ) {
    return name;
  }

  // Check for vendor prefixed names
  var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
    i = cssPrefixes.length;

  while ( i-- ) {
    name = cssPrefixes[ i ] + capName;
    if ( name in emptyStyle ) {
      return name;
    }
  }
}

function setPositiveNumber( elem, value, subtract ) {

  // Any relative (+/-) values have already been
  // normalized at this point
  var matches = rcssNum.exec( value );
  return matches ?

    // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
    value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
  var i,
    val = 0;

  // If we already have the right measurement, avoid augmentation
  if ( extra === ( isBorderBox ? "border" : "content" ) ) {
    i = 4;

  // Otherwise initialize for horizontal or vertical properties
  } else {
    i = name === "width" ? 1 : 0;
  }

  for ( ; i < 4; i += 2 ) {

    // Both box models exclude margin, so add it if we want it
    if ( extra === "margin" ) {
      val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
    }

    if ( isBorderBox ) {

      // border-box includes padding, so remove it if we want content
      if ( extra === "content" ) {
        val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
      }

      // At this point, extra isn't border nor margin, so remove border
      if ( extra !== "margin" ) {
        val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
      }
    } else {

      // At this point, extra isn't content, so add padding
      val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

      // At this point, extra isn't content nor padding, so add border
      if ( extra !== "padding" ) {
        val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
      }
    }
  }

  return val;
}

function getWidthOrHeight( elem, name, extra ) {

  // Start with offset property, which is equivalent to the border-box value
  var val,
    valueIsBorderBox = true,
    styles = getStyles( elem ),
    isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

  // Support: IE <=11 only
  // Running getBoundingClientRect on a disconnected node
  // in IE throws an error.
  if ( elem.getClientRects().length ) {
    val = elem.getBoundingClientRect()[ name ];
  }

  // Some non-html elements return undefined for offsetWidth, so check for null/undefined
  // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
  // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
  if ( val <= 0 || val == null ) {

    // Fall back to computed then uncomputed css if necessary
    val = curCSS( elem, name, styles );
    if ( val < 0 || val == null ) {
      val = elem.style[ name ];
    }

    // Computed unit is not pixels. Stop here and return.
    if ( rnumnonpx.test( val ) ) {
      return val;
    }

    // Check for style in case a browser which returns unreliable values
    // for getComputedStyle silently falls back to the reliable elem.style
    valueIsBorderBox = isBorderBox &&
      ( support.boxSizingReliable() || val === elem.style[ name ] );

    // Normalize "", auto, and prepare for extra
    val = parseFloat( val ) || 0;
  }

  // Use the active box-sizing model to add/subtract irrelevant styles
  return ( val +
    augmentWidthOrHeight(
      elem,
      name,
      extra || ( isBorderBox ? "border" : "content" ),
      valueIsBorderBox,
      styles
    )
  ) + "px";
}

jQuery.extend( {

  // Add in style property hooks for overriding the default
  // behavior of getting and setting a style property
  cssHooks: {
    opacity: {
      get: function( elem, computed ) {
        if ( computed ) {

          // We should always get a number back from opacity
          var ret = curCSS( elem, "opacity" );
          return ret === "" ? "1" : ret;
        }
      }
    }
  },

  // Don't automatically add "px" to these possibly-unitless properties
  cssNumber: {
    "animationIterationCount": true,
    "columnCount": true,
    "fillOpacity": true,
    "flexGrow": true,
    "flexShrink": true,
    "fontWeight": true,
    "lineHeight": true,
    "opacity": true,
    "order": true,
    "orphans": true,
    "widows": true,
    "zIndex": true,
    "zoom": true
  },

  // Add in properties whose names you wish to fix before
  // setting or getting the value
  cssProps: {
    "float": "cssFloat"
  },

  // Get and set the style property on a DOM Node
  style: function( elem, name, value, extra ) {

    // Don't set styles on text and comment nodes
    if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
      return;
    }

    // Make sure that we're working with the right name
    var ret, type, hooks,
      origName = jQuery.camelCase( name ),
      style = elem.style;

    name = jQuery.cssProps[ origName ] ||
      ( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

    // Gets hook for the prefixed version, then unprefixed version
    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

    // Check if we're setting a value
    if ( value !== undefined ) {
      type = typeof value;

      // Convert "+=" or "-=" to relative numbers (#7345)
      if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
        value = adjustCSS( elem, name, ret );

        // Fixes bug #9237
        type = "number";
      }

      // Make sure that null and NaN values aren't set (#7116)
      if ( value == null || value !== value ) {
        return;
      }

      // If a number was passed in, add the unit (except for certain CSS properties)
      if ( type === "number" ) {
        value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
      }

      // background-* props affect original clone's values
      if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
        style[ name ] = "inherit";
      }

      // If a hook was provided, use that value, otherwise just set the specified value
      if ( !hooks || !( "set" in hooks ) ||
        ( value = hooks.set( elem, value, extra ) ) !== undefined ) {

        style[ name ] = value;
      }

    } else {

      // If a hook was provided get the non-computed value from there
      if ( hooks && "get" in hooks &&
        ( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

        return ret;
      }

      // Otherwise just get the value from the style object
      return style[ name ];
    }
  },

  css: function( elem, name, extra, styles ) {
    var val, num, hooks,
      origName = jQuery.camelCase( name );

    // Make sure that we're working with the right name
    name = jQuery.cssProps[ origName ] ||
      ( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

    // Try prefixed name followed by the unprefixed name
    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

    // If a hook was provided get the computed value from there
    if ( hooks && "get" in hooks ) {
      val = hooks.get( elem, true, extra );
    }

    // Otherwise, if a way to get the computed value exists, use that
    if ( val === undefined ) {
      val = curCSS( elem, name, styles );
    }

    // Convert "normal" to computed value
    if ( val === "normal" && name in cssNormalTransform ) {
      val = cssNormalTransform[ name ];
    }

    // Make numeric if forced or a qualifier was provided and val looks numeric
    if ( extra === "" || extra ) {
      num = parseFloat( val );
      return extra === true || isFinite( num ) ? num || 0 : val;
    }
    return val;
  }
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
  jQuery.cssHooks[ name ] = {
    get: function( elem, computed, extra ) {
      if ( computed ) {

        // Certain elements can have dimension info if we invisibly show them
        // but it must have a current display style that would benefit
        return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

          // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          ( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
            swap( elem, cssShow, function() {
              return getWidthOrHeight( elem, name, extra );
            } ) :
            getWidthOrHeight( elem, name, extra );
      }
    },

    set: function( elem, value, extra ) {
      var matches,
        styles = extra && getStyles( elem ),
        subtract = extra && augmentWidthOrHeight(
          elem,
          name,
          extra,
          jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
          styles
        );

      // Convert to pixels if value adjustment is needed
      if ( subtract && ( matches = rcssNum.exec( value ) ) &&
        ( matches[ 3 ] || "px" ) !== "px" ) {

        elem.style[ name ] = value;
        value = jQuery.css( elem, name );
      }

      return setPositiveNumber( elem, value, subtract );
    }
  };
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
  function( elem, computed ) {
    if ( computed ) {
      return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
        elem.getBoundingClientRect().left -
          swap( elem, { marginLeft: 0 }, function() {
            return elem.getBoundingClientRect().left;
          } )
        ) + "px";
    }
  }
);

// These hooks are used by animate to expand properties
jQuery.each( {
  margin: "",
  padding: "",
  border: "Width"
}, function( prefix, suffix ) {
  jQuery.cssHooks[ prefix + suffix ] = {
    expand: function( value ) {
      var i = 0,
        expanded = {},

        // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split( " " ) : [ value ];

      for ( ; i < 4; i++ ) {
        expanded[ prefix + cssExpand[ i ] + suffix ] =
          parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
      }

      return expanded;
    }
  };

  if ( !rmargin.test( prefix ) ) {
    jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
  }
} );

jQuery.fn.extend( {
  css: function( name, value ) {
    return access( this, function( elem, name, value ) {
      var styles, len,
        map = {},
        i = 0;

      if ( jQuery.isArray( name ) ) {
        styles = getStyles( elem );
        len = name.length;

        for ( ; i < len; i++ ) {
          map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
        }

        return map;
      }

      return value !== undefined ?
        jQuery.style( elem, name, value ) :
        jQuery.css( elem, name );
    }, name, value, arguments.length > 1 );
  }
} );


function Tween( elem, options, prop, end, easing ) {
  return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
  constructor: Tween,
  init: function( elem, options, prop, end, easing, unit ) {
    this.elem = elem;
    this.prop = prop;
    this.easing = easing || jQuery.easing._default;
    this.options = options;
    this.start = this.now = this.cur();
    this.end = end;
    this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
  },
  cur: function() {
    var hooks = Tween.propHooks[ this.prop ];

    return hooks && hooks.get ?
      hooks.get( this ) :
      Tween.propHooks._default.get( this );
  },
  run: function( percent ) {
    var eased,
      hooks = Tween.propHooks[ this.prop ];

    if ( this.options.duration ) {
      this.pos = eased = jQuery.easing[ this.easing ](
        percent, this.options.duration * percent, 0, 1, this.options.duration
      );
    } else {
      this.pos = eased = percent;
    }
    this.now = ( this.end - this.start ) * eased + this.start;

    if ( this.options.step ) {
      this.options.step.call( this.elem, this.now, this );
    }

    if ( hooks && hooks.set ) {
      hooks.set( this );
    } else {
      Tween.propHooks._default.set( this );
    }
    return this;
  }
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
  _default: {
    get: function( tween ) {
      var result;

      // Use a property on the element directly when it is not a DOM element,
      // or when there is no matching style property that exists.
      if ( tween.elem.nodeType !== 1 ||
        tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
        return tween.elem[ tween.prop ];
      }

      // Passing an empty string as a 3rd parameter to .css will automatically
      // attempt a parseFloat and fallback to a string if the parse fails.
      // Simple values such as "10px" are parsed to Float;
      // complex values such as "rotate(1rad)" are returned as-is.
      result = jQuery.css( tween.elem, tween.prop, "" );

      // Empty strings, null, undefined and "auto" are converted to 0.
      return !result || result === "auto" ? 0 : result;
    },
    set: function( tween ) {

      // Use step hook for back compat.
      // Use cssHook if its there.
      // Use .style if available and use plain properties where available.
      if ( jQuery.fx.step[ tween.prop ] ) {
        jQuery.fx.step[ tween.prop ]( tween );
      } else if ( tween.elem.nodeType === 1 &&
        ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
          jQuery.cssHooks[ tween.prop ] ) ) {
        jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
      } else {
        tween.elem[ tween.prop ] = tween.now;
      }
    }
  }
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
  set: function( tween ) {
    if ( tween.elem.nodeType && tween.elem.parentNode ) {
      tween.elem[ tween.prop ] = tween.now;
    }
  }
};

jQuery.easing = {
  linear: function( p ) {
    return p;
  },
  swing: function( p ) {
    return 0.5 - Math.cos( p * Math.PI ) / 2;
  },
  _default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
  fxNow, timerId,
  rfxtypes = /^(?:toggle|show|hide)$/,
  rrun = /queueHooks$/;

function raf() {
  if ( timerId ) {
    window.requestAnimationFrame( raf );
    jQuery.fx.tick();
  }
}

// Animations created synchronously will run synchronously
function createFxNow() {
  window.setTimeout( function() {
    fxNow = undefined;
  } );
  return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
  var which,
    i = 0,
    attrs = { height: type };

  // If we include width, step value is 1 to do all cssExpand values,
  // otherwise step value is 2 to skip over Left and Right
  includeWidth = includeWidth ? 1 : 0;
  for ( ; i < 4; i += 2 - includeWidth ) {
    which = cssExpand[ i ];
    attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
  }

  if ( includeWidth ) {
    attrs.opacity = attrs.width = type;
  }

  return attrs;
}

function createTween( value, prop, animation ) {
  var tween,
    collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
    index = 0,
    length = collection.length;
  for ( ; index < length; index++ ) {
    if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

      // We're done with this property
      return tween;
    }
  }
}

function defaultPrefilter( elem, props, opts ) {
  var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
    isBox = "width" in props || "height" in props,
    anim = this,
    orig = {},
    style = elem.style,
    hidden = elem.nodeType && isHiddenWithinTree( elem ),
    dataShow = dataPriv.get( elem, "fxshow" );

  // Queue-skipping animations hijack the fx hooks
  if ( !opts.queue ) {
    hooks = jQuery._queueHooks( elem, "fx" );
    if ( hooks.unqueued == null ) {
      hooks.unqueued = 0;
      oldfire = hooks.empty.fire;
      hooks.empty.fire = function() {
        if ( !hooks.unqueued ) {
          oldfire();
        }
      };
    }
    hooks.unqueued++;

    anim.always( function() {

      // Ensure the complete handler is called before this completes
      anim.always( function() {
        hooks.unqueued--;
        if ( !jQuery.queue( elem, "fx" ).length ) {
          hooks.empty.fire();
        }
      } );
    } );
  }

  // Detect show/hide animations
  for ( prop in props ) {
    value = props[ prop ];
    if ( rfxtypes.test( value ) ) {
      delete props[ prop ];
      toggle = toggle || value === "toggle";
      if ( value === ( hidden ? "hide" : "show" ) ) {

        // Pretend to be hidden if this is a "show" and
        // there is still data from a stopped show/hide
        if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
          hidden = true;

        // Ignore all other no-op show/hide data
        } else {
          continue;
        }
      }
      orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
    }
  }

  // Bail out if this is a no-op like .hide().hide()
  propTween = !jQuery.isEmptyObject( props );
  if ( !propTween && jQuery.isEmptyObject( orig ) ) {
    return;
  }

  // Restrict "overflow" and "display" styles during box animations
  if ( isBox && elem.nodeType === 1 ) {

    // Support: IE <=9 - 11, Edge 12 - 13
    // Record all 3 overflow attributes because IE does not infer the shorthand
    // from identically-valued overflowX and overflowY
    opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

    // Identify a display type, preferring old show/hide data over the CSS cascade
    restoreDisplay = dataShow && dataShow.display;
    if ( restoreDisplay == null ) {
      restoreDisplay = dataPriv.get( elem, "display" );
    }
    display = jQuery.css( elem, "display" );
    if ( display === "none" ) {
      if ( restoreDisplay ) {
        display = restoreDisplay;
      } else {

        // Get nonempty value(s) by temporarily forcing visibility
        showHide( [ elem ], true );
        restoreDisplay = elem.style.display || restoreDisplay;
        display = jQuery.css( elem, "display" );
        showHide( [ elem ] );
      }
    }

    // Animate inline elements as inline-block
    if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
      if ( jQuery.css( elem, "float" ) === "none" ) {

        // Restore the original display value at the end of pure show/hide animations
        if ( !propTween ) {
          anim.done( function() {
            style.display = restoreDisplay;
          } );
          if ( restoreDisplay == null ) {
            display = style.display;
            restoreDisplay = display === "none" ? "" : display;
          }
        }
        style.display = "inline-block";
      }
    }
  }

  if ( opts.overflow ) {
    style.overflow = "hidden";
    anim.always( function() {
      style.overflow = opts.overflow[ 0 ];
      style.overflowX = opts.overflow[ 1 ];
      style.overflowY = opts.overflow[ 2 ];
    } );
  }

  // Implement show/hide animations
  propTween = false;
  for ( prop in orig ) {

    // General show/hide setup for this element animation
    if ( !propTween ) {
      if ( dataShow ) {
        if ( "hidden" in dataShow ) {
          hidden = dataShow.hidden;
        }
      } else {
        dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
      }

      // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
      if ( toggle ) {
        dataShow.hidden = !hidden;
      }

      // Show elements before animating them
      if ( hidden ) {
        showHide( [ elem ], true );
      }

      /* eslint-disable no-loop-func */

      anim.done( function() {

      /* eslint-enable no-loop-func */

        // The final step of a "hide" animation is actually hiding the element
        if ( !hidden ) {
          showHide( [ elem ] );
        }
        dataPriv.remove( elem, "fxshow" );
        for ( prop in orig ) {
          jQuery.style( elem, prop, orig[ prop ] );
        }
      } );
    }

    // Per-property setup
    propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
    if ( !( prop in dataShow ) ) {
      dataShow[ prop ] = propTween.start;
      if ( hidden ) {
        propTween.end = propTween.start;
        propTween.start = 0;
      }
    }
  }
}

function propFilter( props, specialEasing ) {
  var index, name, easing, value, hooks;

  // camelCase, specialEasing and expand cssHook pass
  for ( index in props ) {
    name = jQuery.camelCase( index );
    easing = specialEasing[ name ];
    value = props[ index ];
    if ( jQuery.isArray( value ) ) {
      easing = value[ 1 ];
      value = props[ index ] = value[ 0 ];
    }

    if ( index !== name ) {
      props[ name ] = value;
      delete props[ index ];
    }

    hooks = jQuery.cssHooks[ name ];
    if ( hooks && "expand" in hooks ) {
      value = hooks.expand( value );
      delete props[ name ];

      // Not quite $.extend, this won't overwrite existing keys.
      // Reusing 'index' because we have the correct "name"
      for ( index in value ) {
        if ( !( index in props ) ) {
          props[ index ] = value[ index ];
          specialEasing[ index ] = easing;
        }
      }
    } else {
      specialEasing[ name ] = easing;
    }
  }
}

function Animation( elem, properties, options ) {
  var result,
    stopped,
    index = 0,
    length = Animation.prefilters.length,
    deferred = jQuery.Deferred().always( function() {

      // Don't match elem in the :animated selector
      delete tick.elem;
    } ),
    tick = function() {
      if ( stopped ) {
        return false;
      }
      var currentTime = fxNow || createFxNow(),
        remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

        // Support: Android 2.3 only
        // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
        temp = remaining / animation.duration || 0,
        percent = 1 - temp,
        index = 0,
        length = animation.tweens.length;

      for ( ; index < length; index++ ) {
        animation.tweens[ index ].run( percent );
      }

      deferred.notifyWith( elem, [ animation, percent, remaining ] );

      if ( percent < 1 && length ) {
        return remaining;
      } else {
        deferred.resolveWith( elem, [ animation ] );
        return false;
      }
    },
    animation = deferred.promise( {
      elem: elem,
      props: jQuery.extend( {}, properties ),
      opts: jQuery.extend( true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options ),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function( prop, end ) {
        var tween = jQuery.Tween( elem, animation.opts, prop, end,
            animation.opts.specialEasing[ prop ] || animation.opts.easing );
        animation.tweens.push( tween );
        return tween;
      },
      stop: function( gotoEnd ) {
        var index = 0,

          // If we are going to the end, we want to run all the tweens
          // otherwise we skip this part
          length = gotoEnd ? animation.tweens.length : 0;
        if ( stopped ) {
          return this;
        }
        stopped = true;
        for ( ; index < length; index++ ) {
          animation.tweens[ index ].run( 1 );
        }

        // Resolve when we played the last frame; otherwise, reject
        if ( gotoEnd ) {
          deferred.notifyWith( elem, [ animation, 1, 0 ] );
          deferred.resolveWith( elem, [ animation, gotoEnd ] );
        } else {
          deferred.rejectWith( elem, [ animation, gotoEnd ] );
        }
        return this;
      }
    } ),
    props = animation.props;

  propFilter( props, animation.opts.specialEasing );

  for ( ; index < length; index++ ) {
    result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
    if ( result ) {
      if ( jQuery.isFunction( result.stop ) ) {
        jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
          jQuery.proxy( result.stop, result );
      }
      return result;
    }
  }

  jQuery.map( props, createTween, animation );

  if ( jQuery.isFunction( animation.opts.start ) ) {
    animation.opts.start.call( elem, animation );
  }

  jQuery.fx.timer(
    jQuery.extend( tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    } )
  );

  // attach callbacks from options
  return animation.progress( animation.opts.progress )
    .done( animation.opts.done, animation.opts.complete )
    .fail( animation.opts.fail )
    .always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

  tweeners: {
    "*": [ function( prop, value ) {
      var tween = this.createTween( prop, value );
      adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
      return tween;
    } ]
  },

  tweener: function( props, callback ) {
    if ( jQuery.isFunction( props ) ) {
      callback = props;
      props = [ "*" ];
    } else {
      props = props.match( rnothtmlwhite );
    }

    var prop,
      index = 0,
      length = props.length;

    for ( ; index < length; index++ ) {
      prop = props[ index ];
      Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
      Animation.tweeners[ prop ].unshift( callback );
    }
  },

  prefilters: [ defaultPrefilter ],

  prefilter: function( callback, prepend ) {
    if ( prepend ) {
      Animation.prefilters.unshift( callback );
    } else {
      Animation.prefilters.push( callback );
    }
  }
} );

jQuery.speed = function( speed, easing, fn ) {
  var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
    complete: fn || !fn && easing ||
      jQuery.isFunction( speed ) && speed,
    duration: speed,
    easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
  };

  // Go to the end state if fx are off or if document is hidden
  if ( jQuery.fx.off || document.hidden ) {
    opt.duration = 0;

  } else {
    if ( typeof opt.duration !== "number" ) {
      if ( opt.duration in jQuery.fx.speeds ) {
        opt.duration = jQuery.fx.speeds[ opt.duration ];

      } else {
        opt.duration = jQuery.fx.speeds._default;
      }
    }
  }

  // Normalize opt.queue - true/undefined/null -> "fx"
  if ( opt.queue == null || opt.queue === true ) {
    opt.queue = "fx";
  }

  // Queueing
  opt.old = opt.complete;

  opt.complete = function() {
    if ( jQuery.isFunction( opt.old ) ) {
      opt.old.call( this );
    }

    if ( opt.queue ) {
      jQuery.dequeue( this, opt.queue );
    }
  };

  return opt;
};

jQuery.fn.extend( {
  fadeTo: function( speed, to, easing, callback ) {

    // Show any hidden elements after setting opacity to 0
    return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

      // Animate to the value specified
      .end().animate( { opacity: to }, speed, easing, callback );
  },
  animate: function( prop, speed, easing, callback ) {
    var empty = jQuery.isEmptyObject( prop ),
      optall = jQuery.speed( speed, easing, callback ),
      doAnimation = function() {

        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation( this, jQuery.extend( {}, prop ), optall );

        // Empty animations, or finishing resolves immediately
        if ( empty || dataPriv.get( this, "finish" ) ) {
          anim.stop( true );
        }
      };
      doAnimation.finish = doAnimation;

    return empty || optall.queue === false ?
      this.each( doAnimation ) :
      this.queue( optall.queue, doAnimation );
  },
  stop: function( type, clearQueue, gotoEnd ) {
    var stopQueue = function( hooks ) {
      var stop = hooks.stop;
      delete hooks.stop;
      stop( gotoEnd );
    };

    if ( typeof type !== "string" ) {
      gotoEnd = clearQueue;
      clearQueue = type;
      type = undefined;
    }
    if ( clearQueue && type !== false ) {
      this.queue( type || "fx", [] );
    }

    return this.each( function() {
      var dequeue = true,
        index = type != null && type + "queueHooks",
        timers = jQuery.timers,
        data = dataPriv.get( this );

      if ( index ) {
        if ( data[ index ] && data[ index ].stop ) {
          stopQueue( data[ index ] );
        }
      } else {
        for ( index in data ) {
          if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
            stopQueue( data[ index ] );
          }
        }
      }

      for ( index = timers.length; index--; ) {
        if ( timers[ index ].elem === this &&
          ( type == null || timers[ index ].queue === type ) ) {

          timers[ index ].anim.stop( gotoEnd );
          dequeue = false;
          timers.splice( index, 1 );
        }
      }

      // Start the next in the queue if the last step wasn't forced.
      // Timers currently will call their complete callbacks, which
      // will dequeue but only if they were gotoEnd.
      if ( dequeue || !gotoEnd ) {
        jQuery.dequeue( this, type );
      }
    } );
  },
  finish: function( type ) {
    if ( type !== false ) {
      type = type || "fx";
    }
    return this.each( function() {
      var index,
        data = dataPriv.get( this ),
        queue = data[ type + "queue" ],
        hooks = data[ type + "queueHooks" ],
        timers = jQuery.timers,
        length = queue ? queue.length : 0;

      // Enable finishing flag on private data
      data.finish = true;

      // Empty the queue first
      jQuery.queue( this, type, [] );

      if ( hooks && hooks.stop ) {
        hooks.stop.call( this, true );
      }

      // Look for any active animations, and finish them
      for ( index = timers.length; index--; ) {
        if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
          timers[ index ].anim.stop( true );
          timers.splice( index, 1 );
        }
      }

      // Look for any animations in the old queue and finish them
      for ( index = 0; index < length; index++ ) {
        if ( queue[ index ] && queue[ index ].finish ) {
          queue[ index ].finish.call( this );
        }
      }

      // Turn off finishing flag
      delete data.finish;
    } );
  }
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
  var cssFn = jQuery.fn[ name ];
  jQuery.fn[ name ] = function( speed, easing, callback ) {
    return speed == null || typeof speed === "boolean" ?
      cssFn.apply( this, arguments ) :
      this.animate( genFx( name, true ), speed, easing, callback );
  };
} );

// Generate shortcuts for custom animations
jQuery.each( {
  slideDown: genFx( "show" ),
  slideUp: genFx( "hide" ),
  slideToggle: genFx( "toggle" ),
  fadeIn: { opacity: "show" },
  fadeOut: { opacity: "hide" },
  fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
  jQuery.fn[ name ] = function( speed, easing, callback ) {
    return this.animate( props, speed, easing, callback );
  };
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
  var timer,
    i = 0,
    timers = jQuery.timers;

  fxNow = jQuery.now();

  for ( ; i < timers.length; i++ ) {
    timer = timers[ i ];

    // Checks the timer has not already been removed
    if ( !timer() && timers[ i ] === timer ) {
      timers.splice( i--, 1 );
    }
  }

  if ( !timers.length ) {
    jQuery.fx.stop();
  }
  fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
  jQuery.timers.push( timer );
  if ( timer() ) {
    jQuery.fx.start();
  } else {
    jQuery.timers.pop();
  }
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
  if ( !timerId ) {
    timerId = window.requestAnimationFrame ?
      window.requestAnimationFrame( raf ) :
      window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
  }
};

jQuery.fx.stop = function() {
  if ( window.cancelAnimationFrame ) {
    window.cancelAnimationFrame( timerId );
  } else {
    window.clearInterval( timerId );
  }

  timerId = null;
};

jQuery.fx.speeds = {
  slow: 600,
  fast: 200,

  // Default speed
  _default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
  time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
  type = type || "fx";

  return this.queue( type, function( next, hooks ) {
    var timeout = window.setTimeout( next, time );
    hooks.stop = function() {
      window.clearTimeout( timeout );
    };
  } );
};


( function() {
  var input = document.createElement( "input" ),
    select = document.createElement( "select" ),
    opt = select.appendChild( document.createElement( "option" ) );

  input.type = "checkbox";

  // Support: Android <=4.3 only
  // Default value for a checkbox should be "on"
  support.checkOn = input.value !== "";

  // Support: IE <=11 only
  // Must access selectedIndex to make default options select
  support.optSelected = opt.selected;

  // Support: IE <=11 only
  // An input loses its value after becoming a radio
  input = document.createElement( "input" );
  input.value = "t";
  input.type = "radio";
  support.radioValue = input.value === "t";
} )();


var boolHook,
  attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
  attr: function( name, value ) {
    return access( this, jQuery.attr, name, value, arguments.length > 1 );
  },

  removeAttr: function( name ) {
    return this.each( function() {
      jQuery.removeAttr( this, name );
    } );
  }
} );

jQuery.extend( {
  attr: function( elem, name, value ) {
    var ret, hooks,
      nType = elem.nodeType;

    // Don't get/set attributes on text, comment and attribute nodes
    if ( nType === 3 || nType === 8 || nType === 2 ) {
      return;
    }

    // Fallback to prop when attributes are not supported
    if ( typeof elem.getAttribute === "undefined" ) {
      return jQuery.prop( elem, name, value );
    }

    // Attribute hooks are determined by the lowercase version
    // Grab necessary hook if one is defined
    if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
      hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
        ( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
    }

    if ( value !== undefined ) {
      if ( value === null ) {
        jQuery.removeAttr( elem, name );
        return;
      }

      if ( hooks && "set" in hooks &&
        ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
        return ret;
      }

      elem.setAttribute( name, value + "" );
      return value;
    }

    if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
      return ret;
    }

    ret = jQuery.find.attr( elem, name );

    // Non-existent attributes return null, we normalize to undefined
    return ret == null ? undefined : ret;
  },

  attrHooks: {
    type: {
      set: function( elem, value ) {
        if ( !support.radioValue && value === "radio" &&
          jQuery.nodeName( elem, "input" ) ) {
          var val = elem.value;
          elem.setAttribute( "type", value );
          if ( val ) {
            elem.value = val;
          }
          return value;
        }
      }
    }
  },

  removeAttr: function( elem, value ) {
    var name,
      i = 0,

      // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match( rnothtmlwhite );

    if ( attrNames && elem.nodeType === 1 ) {
      while ( ( name = attrNames[ i++ ] ) ) {
        elem.removeAttribute( name );
      }
    }
  }
} );

// Hooks for boolean attributes
boolHook = {
  set: function( elem, value, name ) {
    if ( value === false ) {

      // Remove boolean attributes when set to false
      jQuery.removeAttr( elem, name );
    } else {
      elem.setAttribute( name, name );
    }
    return name;
  }
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
  var getter = attrHandle[ name ] || jQuery.find.attr;

  attrHandle[ name ] = function( elem, name, isXML ) {
    var ret, handle,
      lowercaseName = name.toLowerCase();

    if ( !isXML ) {

      // Avoid an infinite loop by temporarily removing this function from the getter
      handle = attrHandle[ lowercaseName ];
      attrHandle[ lowercaseName ] = ret;
      ret = getter( elem, name, isXML ) != null ?
        lowercaseName :
        null;
      attrHandle[ lowercaseName ] = handle;
    }
    return ret;
  };
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
  rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
  prop: function( name, value ) {
    return access( this, jQuery.prop, name, value, arguments.length > 1 );
  },

  removeProp: function( name ) {
    return this.each( function() {
      delete this[ jQuery.propFix[ name ] || name ];
    } );
  }
} );

jQuery.extend( {
  prop: function( elem, name, value ) {
    var ret, hooks,
      nType = elem.nodeType;

    // Don't get/set properties on text, comment and attribute nodes
    if ( nType === 3 || nType === 8 || nType === 2 ) {
      return;
    }

    if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

      // Fix name and attach hooks
      name = jQuery.propFix[ name ] || name;
      hooks = jQuery.propHooks[ name ];
    }

    if ( value !== undefined ) {
      if ( hooks && "set" in hooks &&
        ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
        return ret;
      }

      return ( elem[ name ] = value );
    }

    if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
      return ret;
    }

    return elem[ name ];
  },

  propHooks: {
    tabIndex: {
      get: function( elem ) {

        // Support: IE <=9 - 11 only
        // elem.tabIndex doesn't always return the
        // correct value when it hasn't been explicitly set
        // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
        // Use proper attribute retrieval(#12072)
        var tabindex = jQuery.find.attr( elem, "tabindex" );

        if ( tabindex ) {
          return parseInt( tabindex, 10 );
        }

        if (
          rfocusable.test( elem.nodeName ) ||
          rclickable.test( elem.nodeName ) &&
          elem.href
        ) {
          return 0;
        }

        return -1;
      }
    }
  },

  propFix: {
    "for": "htmlFor",
    "class": "className"
  }
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
  jQuery.propHooks.selected = {
    get: function( elem ) {

      /* eslint no-unused-expressions: "off" */

      var parent = elem.parentNode;
      if ( parent && parent.parentNode ) {
        parent.parentNode.selectedIndex;
      }
      return null;
    },
    set: function( elem ) {

      /* eslint no-unused-expressions: "off" */

      var parent = elem.parentNode;
      if ( parent ) {
        parent.selectedIndex;

        if ( parent.parentNode ) {
          parent.parentNode.selectedIndex;
        }
      }
    }
  };
}

jQuery.each( [
  "tabIndex",
  "readOnly",
  "maxLength",
  "cellSpacing",
  "cellPadding",
  "rowSpan",
  "colSpan",
  "useMap",
  "frameBorder",
  "contentEditable"
], function() {
  jQuery.propFix[ this.toLowerCase() ] = this;
} );




  // Strip and collapse whitespace according to HTML spec
  // https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
  function stripAndCollapse( value ) {
    var tokens = value.match( rnothtmlwhite ) || [];
    return tokens.join( " " );
  }


function getClass( elem ) {
  return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
  addClass: function( value ) {
    var classes, elem, cur, curValue, clazz, j, finalValue,
      i = 0;

    if ( jQuery.isFunction( value ) ) {
      return this.each( function( j ) {
        jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
      } );
    }

    if ( typeof value === "string" && value ) {
      classes = value.match( rnothtmlwhite ) || [];

      while ( ( elem = this[ i++ ] ) ) {
        curValue = getClass( elem );
        cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

        if ( cur ) {
          j = 0;
          while ( ( clazz = classes[ j++ ] ) ) {
            if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
              cur += clazz + " ";
            }
          }

          // Only assign if different to avoid unneeded rendering.
          finalValue = stripAndCollapse( cur );
          if ( curValue !== finalValue ) {
            elem.setAttribute( "class", finalValue );
          }
        }
      }
    }

    return this;
  },

  removeClass: function( value ) {
    var classes, elem, cur, curValue, clazz, j, finalValue,
      i = 0;

    if ( jQuery.isFunction( value ) ) {
      return this.each( function( j ) {
        jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
      } );
    }

    if ( !arguments.length ) {
      return this.attr( "class", "" );
    }

    if ( typeof value === "string" && value ) {
      classes = value.match( rnothtmlwhite ) || [];

      while ( ( elem = this[ i++ ] ) ) {
        curValue = getClass( elem );

        // This expression is here for better compressibility (see addClass)
        cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

        if ( cur ) {
          j = 0;
          while ( ( clazz = classes[ j++ ] ) ) {

            // Remove *all* instances
            while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
              cur = cur.replace( " " + clazz + " ", " " );
            }
          }

          // Only assign if different to avoid unneeded rendering.
          finalValue = stripAndCollapse( cur );
          if ( curValue !== finalValue ) {
            elem.setAttribute( "class", finalValue );
          }
        }
      }
    }

    return this;
  },

  toggleClass: function( value, stateVal ) {
    var type = typeof value;

    if ( typeof stateVal === "boolean" && type === "string" ) {
      return stateVal ? this.addClass( value ) : this.removeClass( value );
    }

    if ( jQuery.isFunction( value ) ) {
      return this.each( function( i ) {
        jQuery( this ).toggleClass(
          value.call( this, i, getClass( this ), stateVal ),
          stateVal
        );
      } );
    }

    return this.each( function() {
      var className, i, self, classNames;

      if ( type === "string" ) {

        // Toggle individual class names
        i = 0;
        self = jQuery( this );
        classNames = value.match( rnothtmlwhite ) || [];

        while ( ( className = classNames[ i++ ] ) ) {

          // Check each className given, space separated list
          if ( self.hasClass( className ) ) {
            self.removeClass( className );
          } else {
            self.addClass( className );
          }
        }

      // Toggle whole class name
      } else if ( value === undefined || type === "boolean" ) {
        className = getClass( this );
        if ( className ) {

          // Store className if set
          dataPriv.set( this, "__className__", className );
        }

        // If the element has a class name or if we're passed `false`,
        // then remove the whole classname (if there was one, the above saved it).
        // Otherwise bring back whatever was previously saved (if anything),
        // falling back to the empty string if nothing was stored.
        if ( this.setAttribute ) {
          this.setAttribute( "class",
            className || value === false ?
            "" :
            dataPriv.get( this, "__className__" ) || ""
          );
        }
      }
    } );
  },

  hasClass: function( selector ) {
    var className, elem,
      i = 0;

    className = " " + selector + " ";
    while ( ( elem = this[ i++ ] ) ) {
      if ( elem.nodeType === 1 &&
        ( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
          return true;
      }
    }

    return false;
  }
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
  val: function( value ) {
    var hooks, ret, isFunction,
      elem = this[ 0 ];

    if ( !arguments.length ) {
      if ( elem ) {
        hooks = jQuery.valHooks[ elem.type ] ||
          jQuery.valHooks[ elem.nodeName.toLowerCase() ];

        if ( hooks &&
          "get" in hooks &&
          ( ret = hooks.get( elem, "value" ) ) !== undefined
        ) {
          return ret;
        }

        ret = elem.value;

        // Handle most common string cases
        if ( typeof ret === "string" ) {
          return ret.replace( rreturn, "" );
        }

        // Handle cases where value is null/undef or number
        return ret == null ? "" : ret;
      }

      return;
    }

    isFunction = jQuery.isFunction( value );

    return this.each( function( i ) {
      var val;

      if ( this.nodeType !== 1 ) {
        return;
      }

      if ( isFunction ) {
        val = value.call( this, i, jQuery( this ).val() );
      } else {
        val = value;
      }

      // Treat null/undefined as ""; convert numbers to string
      if ( val == null ) {
        val = "";

      } else if ( typeof val === "number" ) {
        val += "";

      } else if ( jQuery.isArray( val ) ) {
        val = jQuery.map( val, function( value ) {
          return value == null ? "" : value + "";
        } );
      }

      hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

      // If set returns undefined, fall back to normal setting
      if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
        this.value = val;
      }
    } );
  }
} );

jQuery.extend( {
  valHooks: {
    option: {
      get: function( elem ) {

        var val = jQuery.find.attr( elem, "value" );
        return val != null ?
          val :

          // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse( jQuery.text( elem ) );
      }
    },
    select: {
      get: function( elem ) {
        var value, option, i,
          options = elem.options,
          index = elem.selectedIndex,
          one = elem.type === "select-one",
          values = one ? null : [],
          max = one ? index + 1 : options.length;

        if ( index < 0 ) {
          i = max;

        } else {
          i = one ? index : 0;
        }

        // Loop through all the selected options
        for ( ; i < max; i++ ) {
          option = options[ i ];

          // Support: IE <=9 only
          // IE8-9 doesn't update selected after form reset (#2551)
          if ( ( option.selected || i === index ) &&

              // Don't return options that are disabled or in a disabled optgroup
              !option.disabled &&
              ( !option.parentNode.disabled ||
                !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

            // Get the specific value for the option
            value = jQuery( option ).val();

            // We don't need an array for one selects
            if ( one ) {
              return value;
            }

            // Multi-Selects return an array
            values.push( value );
          }
        }

        return values;
      },

      set: function( elem, value ) {
        var optionSet, option,
          options = elem.options,
          values = jQuery.makeArray( value ),
          i = options.length;

        while ( i-- ) {
          option = options[ i ];

          /* eslint-disable no-cond-assign */

          if ( option.selected =
            jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
          ) {
            optionSet = true;
          }

          /* eslint-enable no-cond-assign */
        }

        // Force browsers to behave consistently when non-matching value is set
        if ( !optionSet ) {
          elem.selectedIndex = -1;
        }
        return values;
      }
    }
  }
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
  jQuery.valHooks[ this ] = {
    set: function( elem, value ) {
      if ( jQuery.isArray( value ) ) {
        return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
      }
    }
  };
  if ( !support.checkOn ) {
    jQuery.valHooks[ this ].get = function( elem ) {
      return elem.getAttribute( "value" ) === null ? "on" : elem.value;
    };
  }
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

  trigger: function( event, data, elem, onlyHandlers ) {

    var i, cur, tmp, bubbleType, ontype, handle, special,
      eventPath = [ elem || document ],
      type = hasOwn.call( event, "type" ) ? event.type : event,
      namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

    cur = tmp = elem = elem || document;

    // Don't do events on text and comment nodes
    if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
      return;
    }

    // focus/blur morphs to focusin/out; ensure we're not firing them right now
    if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
      return;
    }

    if ( type.indexOf( "." ) > -1 ) {

      // Namespaced trigger; create a regexp to match event type in handle()
      namespaces = type.split( "." );
      type = namespaces.shift();
      namespaces.sort();
    }
    ontype = type.indexOf( ":" ) < 0 && "on" + type;

    // Caller can pass in a jQuery.Event object, Object, or just an event type string
    event = event[ jQuery.expando ] ?
      event :
      new jQuery.Event( type, typeof event === "object" && event );

    // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
    event.isTrigger = onlyHandlers ? 2 : 3;
    event.namespace = namespaces.join( "." );
    event.rnamespace = event.namespace ?
      new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
      null;

    // Clean up the event in case it is being reused
    event.result = undefined;
    if ( !event.target ) {
      event.target = elem;
    }

    // Clone any incoming data and prepend the event, creating the handler arg list
    data = data == null ?
      [ event ] :
      jQuery.makeArray( data, [ event ] );

    // Allow special events to draw outside the lines
    special = jQuery.event.special[ type ] || {};
    if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
      return;
    }

    // Determine event propagation path in advance, per W3C events spec (#9951)
    // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
    if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

      bubbleType = special.delegateType || type;
      if ( !rfocusMorph.test( bubbleType + type ) ) {
        cur = cur.parentNode;
      }
      for ( ; cur; cur = cur.parentNode ) {
        eventPath.push( cur );
        tmp = cur;
      }

      // Only add window if we got to document (e.g., not plain obj or detached DOM)
      if ( tmp === ( elem.ownerDocument || document ) ) {
        eventPath.push( tmp.defaultView || tmp.parentWindow || window );
      }
    }

    // Fire handlers on the event path
    i = 0;
    while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

      event.type = i > 1 ?
        bubbleType :
        special.bindType || type;

      // jQuery handler
      handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
        dataPriv.get( cur, "handle" );
      if ( handle ) {
        handle.apply( cur, data );
      }

      // Native handler
      handle = ontype && cur[ ontype ];
      if ( handle && handle.apply && acceptData( cur ) ) {
        event.result = handle.apply( cur, data );
        if ( event.result === false ) {
          event.preventDefault();
        }
      }
    }
    event.type = type;

    // If nobody prevented the default action, do it now
    if ( !onlyHandlers && !event.isDefaultPrevented() ) {

      if ( ( !special._default ||
        special._default.apply( eventPath.pop(), data ) === false ) &&
        acceptData( elem ) ) {

        // Call a native DOM method on the target with the same name as the event.
        // Don't do default actions on window, that's where global variables be (#6170)
        if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

          // Don't re-trigger an onFOO event when we call its FOO() method
          tmp = elem[ ontype ];

          if ( tmp ) {
            elem[ ontype ] = null;
          }

          // Prevent re-triggering of the same event, since we already bubbled it above
          jQuery.event.triggered = type;
          elem[ type ]();
          jQuery.event.triggered = undefined;

          if ( tmp ) {
            elem[ ontype ] = tmp;
          }
        }
      }
    }

    return event.result;
  },

  // Piggyback on a donor event to simulate a different one
  // Used only for `focus(in | out)` events
  simulate: function( type, elem, event ) {
    var e = jQuery.extend(
      new jQuery.Event(),
      event,
      {
        type: type,
        isSimulated: true
      }
    );

    jQuery.event.trigger( e, null, elem );
  }

} );

jQuery.fn.extend( {

  trigger: function( type, data ) {
    return this.each( function() {
      jQuery.event.trigger( type, data, this );
    } );
  },
  triggerHandler: function( type, data ) {
    var elem = this[ 0 ];
    if ( elem ) {
      return jQuery.event.trigger( type, data, elem, true );
    }
  }
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
  "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
  "change select submit keydown keypress keyup contextmenu" ).split( " " ),
  function( i, name ) {

  // Handle event binding
  jQuery.fn[ name ] = function( data, fn ) {
    return arguments.length > 0 ?
      this.on( name, null, data, fn ) :
      this.trigger( name );
  };
} );

jQuery.fn.extend( {
  hover: function( fnOver, fnOut ) {
    return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
  }
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
  jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

    // Attach a single capturing handler on the document while someone wants focusin/focusout
    var handler = function( event ) {
      jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
    };

    jQuery.event.special[ fix ] = {
      setup: function() {
        var doc = this.ownerDocument || this,
          attaches = dataPriv.access( doc, fix );

        if ( !attaches ) {
          doc.addEventListener( orig, handler, true );
        }
        dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
      },
      teardown: function() {
        var doc = this.ownerDocument || this,
          attaches = dataPriv.access( doc, fix ) - 1;

        if ( !attaches ) {
          doc.removeEventListener( orig, handler, true );
          dataPriv.remove( doc, fix );

        } else {
          dataPriv.access( doc, fix, attaches );
        }
      }
    };
  } );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
  var xml;
  if ( !data || typeof data !== "string" ) {
    return null;
  }

  // Support: IE 9 - 11 only
  // IE throws on parseFromString with invalid input.
  try {
    xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
  } catch ( e ) {
    xml = undefined;
  }

  if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
    jQuery.error( "Invalid XML: " + data );
  }
  return xml;
};


var
  rbracket = /\[\]$/,
  rCRLF = /\r?\n/g,
  rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
  rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
  var name;

  if ( jQuery.isArray( obj ) ) {

    // Serialize array item.
    jQuery.each( obj, function( i, v ) {
      if ( traditional || rbracket.test( prefix ) ) {

        // Treat each array item as a scalar.
        add( prefix, v );

      } else {

        // Item is non-scalar (array or object), encode its numeric index.
        buildParams(
          prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
          v,
          traditional,
          add
        );
      }
    } );

  } else if ( !traditional && jQuery.type( obj ) === "object" ) {

    // Serialize object item.
    for ( name in obj ) {
      buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
    }

  } else {

    // Serialize scalar item.
    add( prefix, obj );
  }
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
  var prefix,
    s = [],
    add = function( key, valueOrFunction ) {

      // If value is a function, invoke it and use its return value
      var value = jQuery.isFunction( valueOrFunction ) ?
        valueOrFunction() :
        valueOrFunction;

      s[ s.length ] = encodeURIComponent( key ) + "=" +
        encodeURIComponent( value == null ? "" : value );
    };

  // If an array was passed in, assume that it is an array of form elements.
  if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

    // Serialize the form elements
    jQuery.each( a, function() {
      add( this.name, this.value );
    } );

  } else {

    // If traditional, encode the "old" way (the way 1.3.2 or older
    // did it), otherwise encode params recursively.
    for ( prefix in a ) {
      buildParams( prefix, a[ prefix ], traditional, add );
    }
  }

  // Return the resulting serialization
  return s.join( "&" );
};

jQuery.fn.extend( {
  serialize: function() {
    return jQuery.param( this.serializeArray() );
  },
  serializeArray: function() {
    return this.map( function() {

      // Can add propHook for "elements" to filter or add form elements
      var elements = jQuery.prop( this, "elements" );
      return elements ? jQuery.makeArray( elements ) : this;
    } )
    .filter( function() {
      var type = this.type;

      // Use .is( ":disabled" ) so that fieldset[disabled] works
      return this.name && !jQuery( this ).is( ":disabled" ) &&
        rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
        ( this.checked || !rcheckableType.test( type ) );
    } )
    .map( function( i, elem ) {
      var val = jQuery( this ).val();

      if ( val == null ) {
        return null;
      }

      if ( jQuery.isArray( val ) ) {
        return jQuery.map( val, function( val ) {
          return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
        } );
      }

      return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
    } ).get();
  }
} );


var
  r20 = /%20/g,
  rhash = /#.*$/,
  rantiCache = /([?&])_=[^&]*/,
  rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

  // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  rnoContent = /^(?:GET|HEAD)$/,
  rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},

  // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat( "*" ),

  // Anchor tag for parsing the document origin
  originAnchor = document.createElement( "a" );
  originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

  // dataTypeExpression is optional and defaults to "*"
  return function( dataTypeExpression, func ) {

    if ( typeof dataTypeExpression !== "string" ) {
      func = dataTypeExpression;
      dataTypeExpression = "*";
    }

    var dataType,
      i = 0,
      dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

    if ( jQuery.isFunction( func ) ) {

      // For each dataType in the dataTypeExpression
      while ( ( dataType = dataTypes[ i++ ] ) ) {

        // Prepend if requested
        if ( dataType[ 0 ] === "+" ) {
          dataType = dataType.slice( 1 ) || "*";
          ( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

        // Otherwise append
        } else {
          ( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
        }
      }
    }
  };
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

  var inspected = {},
    seekingTransport = ( structure === transports );

  function inspect( dataType ) {
    var selected;
    inspected[ dataType ] = true;
    jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
      var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
      if ( typeof dataTypeOrTransport === "string" &&
        !seekingTransport && !inspected[ dataTypeOrTransport ] ) {

        options.dataTypes.unshift( dataTypeOrTransport );
        inspect( dataTypeOrTransport );
        return false;
      } else if ( seekingTransport ) {
        return !( selected = dataTypeOrTransport );
      }
    } );
    return selected;
  }

  return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
  var key, deep,
    flatOptions = jQuery.ajaxSettings.flatOptions || {};

  for ( key in src ) {
    if ( src[ key ] !== undefined ) {
      ( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
    }
  }
  if ( deep ) {
    jQuery.extend( true, target, deep );
  }

  return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

  var ct, type, finalDataType, firstDataType,
    contents = s.contents,
    dataTypes = s.dataTypes;

  // Remove auto dataType and get content-type in the process
  while ( dataTypes[ 0 ] === "*" ) {
    dataTypes.shift();
    if ( ct === undefined ) {
      ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
    }
  }

  // Check if we're dealing with a known content-type
  if ( ct ) {
    for ( type in contents ) {
      if ( contents[ type ] && contents[ type ].test( ct ) ) {
        dataTypes.unshift( type );
        break;
      }
    }
  }

  // Check to see if we have a response for the expected dataType
  if ( dataTypes[ 0 ] in responses ) {
    finalDataType = dataTypes[ 0 ];
  } else {

    // Try convertible dataTypes
    for ( type in responses ) {
      if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
        finalDataType = type;
        break;
      }
      if ( !firstDataType ) {
        firstDataType = type;
      }
    }

    // Or just use first one
    finalDataType = finalDataType || firstDataType;
  }

  // If we found a dataType
  // We add the dataType to the list if needed
  // and return the corresponding response
  if ( finalDataType ) {
    if ( finalDataType !== dataTypes[ 0 ] ) {
      dataTypes.unshift( finalDataType );
    }
    return responses[ finalDataType ];
  }
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
  var conv2, current, conv, tmp, prev,
    converters = {},

    // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice();

  // Create converters map with lowercased keys
  if ( dataTypes[ 1 ] ) {
    for ( conv in s.converters ) {
      converters[ conv.toLowerCase() ] = s.converters[ conv ];
    }
  }

  current = dataTypes.shift();

  // Convert to each sequential dataType
  while ( current ) {

    if ( s.responseFields[ current ] ) {
      jqXHR[ s.responseFields[ current ] ] = response;
    }

    // Apply the dataFilter if provided
    if ( !prev && isSuccess && s.dataFilter ) {
      response = s.dataFilter( response, s.dataType );
    }

    prev = current;
    current = dataTypes.shift();

    if ( current ) {

      // There's only work to do if current dataType is non-auto
      if ( current === "*" ) {

        current = prev;

      // Convert response if prev dataType is non-auto and differs from current
      } else if ( prev !== "*" && prev !== current ) {

        // Seek a direct converter
        conv = converters[ prev + " " + current ] || converters[ "* " + current ];

        // If none found, seek a pair
        if ( !conv ) {
          for ( conv2 in converters ) {

            // If conv2 outputs current
            tmp = conv2.split( " " );
            if ( tmp[ 1 ] === current ) {

              // If prev can be converted to accepted input
              conv = converters[ prev + " " + tmp[ 0 ] ] ||
                converters[ "* " + tmp[ 0 ] ];
              if ( conv ) {

                // Condense equivalence converters
                if ( conv === true ) {
                  conv = converters[ conv2 ];

                // Otherwise, insert the intermediate dataType
                } else if ( converters[ conv2 ] !== true ) {
                  current = tmp[ 0 ];
                  dataTypes.unshift( tmp[ 1 ] );
                }
                break;
              }
            }
          }
        }

        // Apply converter (if not an equivalence)
        if ( conv !== true ) {

          // Unless errors are allowed to bubble, catch and return them
          if ( conv && s.throws ) {
            response = conv( response );
          } else {
            try {
              response = conv( response );
            } catch ( e ) {
              return {
                state: "parsererror",
                error: conv ? e : "No conversion from " + prev + " to " + current
              };
            }
          }
        }
      }
    }
  }

  return { state: "success", data: response };
}

jQuery.extend( {

  // Counter for holding the number of active queries
  active: 0,

  // Last-Modified header cache for next request
  lastModified: {},
  etag: {},

  ajaxSettings: {
    url: location.href,
    type: "GET",
    isLocal: rlocalProtocol.test( location.protocol ),
    global: true,
    processData: true,
    async: true,
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",

    /*
    timeout: 0,
    data: null,
    dataType: null,
    username: null,
    password: null,
    cache: null,
    throws: false,
    traditional: false,
    headers: {},
    */

    accepts: {
      "*": allTypes,
      text: "text/plain",
      html: "text/html",
      xml: "application/xml, text/xml",
      json: "application/json, text/javascript"
    },

    contents: {
      xml: /\bxml\b/,
      html: /\bhtml/,
      json: /\bjson\b/
    },

    responseFields: {
      xml: "responseXML",
      text: "responseText",
      json: "responseJSON"
    },

    // Data converters
    // Keys separate source (or catchall "*") and destination types with a single space
    converters: {

      // Convert anything to text
      "* text": String,

      // Text to html (true = no transformation)
      "text html": true,

      // Evaluate text as a json expression
      "text json": JSON.parse,

      // Parse text as xml
      "text xml": jQuery.parseXML
    },

    // For options that shouldn't be deep extended:
    // you can add your own custom options here if
    // and when you create one that shouldn't be
    // deep extended (see ajaxExtend)
    flatOptions: {
      url: true,
      context: true
    }
  },

  // Creates a full fledged settings object into target
  // with both ajaxSettings and settings fields.
  // If target is omitted, writes into ajaxSettings.
  ajaxSetup: function( target, settings ) {
    return settings ?

      // Building a settings object
      ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

      // Extending ajaxSettings
      ajaxExtend( jQuery.ajaxSettings, target );
  },

  ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
  ajaxTransport: addToPrefiltersOrTransports( transports ),

  // Main method
  ajax: function( url, options ) {

    // If url is an object, simulate pre-1.5 signature
    if ( typeof url === "object" ) {
      options = url;
      url = undefined;
    }

    // Force options to be an object
    options = options || {};

    var transport,

      // URL without anti-cache param
      cacheURL,

      // Response headers
      responseHeadersString,
      responseHeaders,

      // timeout handle
      timeoutTimer,

      // Url cleanup var
      urlAnchor,

      // Request state (becomes false upon send and true upon completion)
      completed,

      // To know if global events are to be dispatched
      fireGlobals,

      // Loop variable
      i,

      // uncached part of the url
      uncached,

      // Create the final options object
      s = jQuery.ajaxSetup( {}, options ),

      // Callbacks context
      callbackContext = s.context || s,

      // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context &&
        ( callbackContext.nodeType || callbackContext.jquery ) ?
          jQuery( callbackContext ) :
          jQuery.event,

      // Deferreds
      deferred = jQuery.Deferred(),
      completeDeferred = jQuery.Callbacks( "once memory" ),

      // Status-dependent callbacks
      statusCode = s.statusCode || {},

      // Headers (they are sent all at once)
      requestHeaders = {},
      requestHeadersNames = {},

      // Default abort message
      strAbort = "canceled",

      // Fake xhr
      jqXHR = {
        readyState: 0,

        // Builds headers hashtable if needed
        getResponseHeader: function( key ) {
          var match;
          if ( completed ) {
            if ( !responseHeaders ) {
              responseHeaders = {};
              while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
                responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
              }
            }
            match = responseHeaders[ key.toLowerCase() ];
          }
          return match == null ? null : match;
        },

        // Raw string
        getAllResponseHeaders: function() {
          return completed ? responseHeadersString : null;
        },

        // Caches the header
        setRequestHeader: function( name, value ) {
          if ( completed == null ) {
            name = requestHeadersNames[ name.toLowerCase() ] =
              requestHeadersNames[ name.toLowerCase() ] || name;
            requestHeaders[ name ] = value;
          }
          return this;
        },

        // Overrides response content-type header
        overrideMimeType: function( type ) {
          if ( completed == null ) {
            s.mimeType = type;
          }
          return this;
        },

        // Status-dependent callbacks
        statusCode: function( map ) {
          var code;
          if ( map ) {
            if ( completed ) {

              // Execute the appropriate callbacks
              jqXHR.always( map[ jqXHR.status ] );
            } else {

              // Lazy-add the new callbacks in a way that preserves old ones
              for ( code in map ) {
                statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
              }
            }
          }
          return this;
        },

        // Cancel the request
        abort: function( statusText ) {
          var finalText = statusText || strAbort;
          if ( transport ) {
            transport.abort( finalText );
          }
          done( 0, finalText );
          return this;
        }
      };

    // Attach deferreds
    deferred.promise( jqXHR );

    // Add protocol if not provided (prefilters might expect it)
    // Handle falsy url in the settings object (#10093: consistency with old signature)
    // We also use the url parameter if available
    s.url = ( ( url || s.url || location.href ) + "" )
      .replace( rprotocol, location.protocol + "//" );

    // Alias method option to type as per ticket #12004
    s.type = options.method || options.type || s.method || s.type;

    // Extract dataTypes list
    s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

    // A cross-domain request is in order when the origin doesn't match the current origin.
    if ( s.crossDomain == null ) {
      urlAnchor = document.createElement( "a" );

      // Support: IE <=8 - 11, Edge 12 - 13
      // IE throws exception on accessing the href property if url is malformed,
      // e.g. http://example.com:80x/
      try {
        urlAnchor.href = s.url;

        // Support: IE <=8 - 11 only
        // Anchor's host property isn't correctly set when s.url is relative
        urlAnchor.href = urlAnchor.href;
        s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
          urlAnchor.protocol + "//" + urlAnchor.host;
      } catch ( e ) {

        // If there is an error parsing the URL, assume it is crossDomain,
        // it can be rejected by the transport if it is invalid
        s.crossDomain = true;
      }
    }

    // Convert data if not already a string
    if ( s.data && s.processData && typeof s.data !== "string" ) {
      s.data = jQuery.param( s.data, s.traditional );
    }

    // Apply prefilters
    inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

    // If request was aborted inside a prefilter, stop there
    if ( completed ) {
      return jqXHR;
    }

    // We can fire global events as of now if asked to
    // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
    fireGlobals = jQuery.event && s.global;

    // Watch for a new set of requests
    if ( fireGlobals && jQuery.active++ === 0 ) {
      jQuery.event.trigger( "ajaxStart" );
    }

    // Uppercase the type
    s.type = s.type.toUpperCase();

    // Determine if request has content
    s.hasContent = !rnoContent.test( s.type );

    // Save the URL in case we're toying with the If-Modified-Since
    // and/or If-None-Match header later on
    // Remove hash to simplify url manipulation
    cacheURL = s.url.replace( rhash, "" );

    // More options handling for requests with no content
    if ( !s.hasContent ) {

      // Remember the hash so we can put it back
      uncached = s.url.slice( cacheURL.length );

      // If data is available, append data to url
      if ( s.data ) {
        cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

        // #9682: remove data so that it's not used in an eventual retry
        delete s.data;
      }

      // Add or update anti-cache param if needed
      if ( s.cache === false ) {
        cacheURL = cacheURL.replace( rantiCache, "$1" );
        uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
      }

      // Put hash and anti-cache on the URL that will be requested (gh-1732)
      s.url = cacheURL + uncached;

    // Change '%20' to '+' if this is encoded form body content (gh-2658)
    } else if ( s.data && s.processData &&
      ( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
      s.data = s.data.replace( r20, "+" );
    }

    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
    if ( s.ifModified ) {
      if ( jQuery.lastModified[ cacheURL ] ) {
        jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
      }
      if ( jQuery.etag[ cacheURL ] ) {
        jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
      }
    }

    // Set the correct header, if data is being sent
    if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
      jqXHR.setRequestHeader( "Content-Type", s.contentType );
    }

    // Set the Accepts header for the server, depending on the dataType
    jqXHR.setRequestHeader(
      "Accept",
      s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
        s.accepts[ s.dataTypes[ 0 ] ] +
          ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
        s.accepts[ "*" ]
    );

    // Check for headers option
    for ( i in s.headers ) {
      jqXHR.setRequestHeader( i, s.headers[ i ] );
    }

    // Allow custom headers/mimetypes and early abort
    if ( s.beforeSend &&
      ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

      // Abort if not done already and return
      return jqXHR.abort();
    }

    // Aborting is no longer a cancellation
    strAbort = "abort";

    // Install callbacks on deferreds
    completeDeferred.add( s.complete );
    jqXHR.done( s.success );
    jqXHR.fail( s.error );

    // Get transport
    transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

    // If no transport, we auto-abort
    if ( !transport ) {
      done( -1, "No Transport" );
    } else {
      jqXHR.readyState = 1;

      // Send global event
      if ( fireGlobals ) {
        globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
      }

      // If request was aborted inside ajaxSend, stop there
      if ( completed ) {
        return jqXHR;
      }

      // Timeout
      if ( s.async && s.timeout > 0 ) {
        timeoutTimer = window.setTimeout( function() {
          jqXHR.abort( "timeout" );
        }, s.timeout );
      }

      try {
        completed = false;
        transport.send( requestHeaders, done );
      } catch ( e ) {

        // Rethrow post-completion exceptions
        if ( completed ) {
          throw e;
        }

        // Propagate others as results
        done( -1, e );
      }
    }

    // Callback for when everything is done
    function done( status, nativeStatusText, responses, headers ) {
      var isSuccess, success, error, response, modified,
        statusText = nativeStatusText;

      // Ignore repeat invocations
      if ( completed ) {
        return;
      }

      completed = true;

      // Clear timeout if it exists
      if ( timeoutTimer ) {
        window.clearTimeout( timeoutTimer );
      }

      // Dereference transport for early garbage collection
      // (no matter how long the jqXHR object will be used)
      transport = undefined;

      // Cache response headers
      responseHeadersString = headers || "";

      // Set readyState
      jqXHR.readyState = status > 0 ? 4 : 0;

      // Determine if successful
      isSuccess = status >= 200 && status < 300 || status === 304;

      // Get response data
      if ( responses ) {
        response = ajaxHandleResponses( s, jqXHR, responses );
      }

      // Convert no matter what (that way responseXXX fields are always set)
      response = ajaxConvert( s, response, jqXHR, isSuccess );

      // If successful, handle type chaining
      if ( isSuccess ) {

        // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
        if ( s.ifModified ) {
          modified = jqXHR.getResponseHeader( "Last-Modified" );
          if ( modified ) {
            jQuery.lastModified[ cacheURL ] = modified;
          }
          modified = jqXHR.getResponseHeader( "etag" );
          if ( modified ) {
            jQuery.etag[ cacheURL ] = modified;
          }
        }

        // if no content
        if ( status === 204 || s.type === "HEAD" ) {
          statusText = "nocontent";

        // if not modified
        } else if ( status === 304 ) {
          statusText = "notmodified";

        // If we have data, let's convert it
        } else {
          statusText = response.state;
          success = response.data;
          error = response.error;
          isSuccess = !error;
        }
      } else {

        // Extract error from statusText and normalize for non-aborts
        error = statusText;
        if ( status || !statusText ) {
          statusText = "error";
          if ( status < 0 ) {
            status = 0;
          }
        }
      }

      // Set data for the fake xhr object
      jqXHR.status = status;
      jqXHR.statusText = ( nativeStatusText || statusText ) + "";

      // Success/Error
      if ( isSuccess ) {
        deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
      } else {
        deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
      }

      // Status-dependent callbacks
      jqXHR.statusCode( statusCode );
      statusCode = undefined;

      if ( fireGlobals ) {
        globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
          [ jqXHR, s, isSuccess ? success : error ] );
      }

      // Complete
      completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

      if ( fireGlobals ) {
        globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

        // Handle the global AJAX counter
        if ( !( --jQuery.active ) ) {
          jQuery.event.trigger( "ajaxStop" );
        }
      }
    }

    return jqXHR;
  },

  getJSON: function( url, data, callback ) {
    return jQuery.get( url, data, callback, "json" );
  },

  getScript: function( url, callback ) {
    return jQuery.get( url, undefined, callback, "script" );
  }
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
  jQuery[ method ] = function( url, data, callback, type ) {

    // Shift arguments if data argument was omitted
    if ( jQuery.isFunction( data ) ) {
      type = type || callback;
      callback = data;
      data = undefined;
    }

    // The url can be an options object (which then must have .url)
    return jQuery.ajax( jQuery.extend( {
      url: url,
      type: method,
      dataType: type,
      data: data,
      success: callback
    }, jQuery.isPlainObject( url ) && url ) );
  };
} );


jQuery._evalUrl = function( url ) {
  return jQuery.ajax( {
    url: url,

    // Make this explicit, since user can override this through ajaxSetup (#11264)
    type: "GET",
    dataType: "script",
    cache: true,
    async: false,
    global: false,
    "throws": true
  } );
};


jQuery.fn.extend( {
  wrapAll: function( html ) {
    var wrap;

    if ( this[ 0 ] ) {
      if ( jQuery.isFunction( html ) ) {
        html = html.call( this[ 0 ] );
      }

      // The elements to wrap the target around
      wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

      if ( this[ 0 ].parentNode ) {
        wrap.insertBefore( this[ 0 ] );
      }

      wrap.map( function() {
        var elem = this;

        while ( elem.firstElementChild ) {
          elem = elem.firstElementChild;
        }

        return elem;
      } ).append( this );
    }

    return this;
  },

  wrapInner: function( html ) {
    if ( jQuery.isFunction( html ) ) {
      return this.each( function( i ) {
        jQuery( this ).wrapInner( html.call( this, i ) );
      } );
    }

    return this.each( function() {
      var self = jQuery( this ),
        contents = self.contents();

      if ( contents.length ) {
        contents.wrapAll( html );

      } else {
        self.append( html );
      }
    } );
  },

  wrap: function( html ) {
    var isFunction = jQuery.isFunction( html );

    return this.each( function( i ) {
      jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
    } );
  },

  unwrap: function( selector ) {
    this.parent( selector ).not( "body" ).each( function() {
      jQuery( this ).replaceWith( this.childNodes );
    } );
    return this;
  }
} );


jQuery.expr.pseudos.hidden = function( elem ) {
  return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
  return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
  try {
    return new window.XMLHttpRequest();
  } catch ( e ) {}
};

var xhrSuccessStatus = {

    // File protocol always yields status code 0, assume 200
    0: 200,

    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
  xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
  var callback, errorCallback;

  // Cross domain only allowed if supported through XMLHttpRequest
  if ( support.cors || xhrSupported && !options.crossDomain ) {
    return {
      send: function( headers, complete ) {
        var i,
          xhr = options.xhr();

        xhr.open(
          options.type,
          options.url,
          options.async,
          options.username,
          options.password
        );

        // Apply custom fields if provided
        if ( options.xhrFields ) {
          for ( i in options.xhrFields ) {
            xhr[ i ] = options.xhrFields[ i ];
          }
        }

        // Override mime type if needed
        if ( options.mimeType && xhr.overrideMimeType ) {
          xhr.overrideMimeType( options.mimeType );
        }

        // X-Requested-With header
        // For cross-domain requests, seeing as conditions for a preflight are
        // akin to a jigsaw puzzle, we simply never set it to be sure.
        // (it can always be set on a per-request basis or even using ajaxSetup)
        // For same-domain requests, won't change header if already provided.
        if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
          headers[ "X-Requested-With" ] = "XMLHttpRequest";
        }

        // Set headers
        for ( i in headers ) {
          xhr.setRequestHeader( i, headers[ i ] );
        }

        // Callback
        callback = function( type ) {
          return function() {
            if ( callback ) {
              callback = errorCallback = xhr.onload =
                xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

              if ( type === "abort" ) {
                xhr.abort();
              } else if ( type === "error" ) {

                // Support: IE <=9 only
                // On a manual native abort, IE9 throws
                // errors on any property access that is not readyState
                if ( typeof xhr.status !== "number" ) {
                  complete( 0, "error" );
                } else {
                  complete(

                    // File: protocol always yields status 0; see #8605, #14207
                    xhr.status,
                    xhr.statusText
                  );
                }
              } else {
                complete(
                  xhrSuccessStatus[ xhr.status ] || xhr.status,
                  xhr.statusText,

                  // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  ( xhr.responseType || "text" ) !== "text"  ||
                  typeof xhr.responseText !== "string" ?
                    { binary: xhr.response } :
                    { text: xhr.responseText },
                  xhr.getAllResponseHeaders()
                );
              }
            }
          };
        };

        // Listen to events
        xhr.onload = callback();
        errorCallback = xhr.onerror = callback( "error" );

        // Support: IE 9 only
        // Use onreadystatechange to replace onabort
        // to handle uncaught aborts
        if ( xhr.onabort !== undefined ) {
          xhr.onabort = errorCallback;
        } else {
          xhr.onreadystatechange = function() {

            // Check readyState before timeout as it changes
            if ( xhr.readyState === 4 ) {

              // Allow onerror to be called first,
              // but that will not handle a native abort
              // Also, save errorCallback to a variable
              // as xhr.onerror cannot be accessed
              window.setTimeout( function() {
                if ( callback ) {
                  errorCallback();
                }
              } );
            }
          };
        }

        // Create the abort callback
        callback = callback( "abort" );

        try {

          // Do send the request (this may raise an exception)
          xhr.send( options.hasContent && options.data || null );
        } catch ( e ) {

          // #14683: Only rethrow if this hasn't been notified as an error yet
          if ( callback ) {
            throw e;
          }
        }
      },

      abort: function() {
        if ( callback ) {
          callback();
        }
      }
    };
  }
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
  if ( s.crossDomain ) {
    s.contents.script = false;
  }
} );

// Install script dataType
jQuery.ajaxSetup( {
  accepts: {
    script: "text/javascript, application/javascript, " +
      "application/ecmascript, application/x-ecmascript"
  },
  contents: {
    script: /\b(?:java|ecma)script\b/
  },
  converters: {
    "text script": function( text ) {
      jQuery.globalEval( text );
      return text;
    }
  }
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
  if ( s.cache === undefined ) {
    s.cache = false;
  }
  if ( s.crossDomain ) {
    s.type = "GET";
  }
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

  // This transport only deals with cross domain requests
  if ( s.crossDomain ) {
    var script, callback;
    return {
      send: function( _, complete ) {
        script = jQuery( "<script>" ).prop( {
          charset: s.scriptCharset,
          src: s.url
        } ).on(
          "load error",
          callback = function( evt ) {
            script.remove();
            callback = null;
            if ( evt ) {
              complete( evt.type === "error" ? 404 : 200, evt.type );
            }
          }
        );

        // Use native DOM manipulation to avoid our domManip AJAX trickery
        document.head.appendChild( script[ 0 ] );
      },
      abort: function() {
        if ( callback ) {
          callback();
        }
      }
    };
  }
} );




var oldCallbacks = [],
  rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
  jsonp: "callback",
  jsonpCallback: function() {
    var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
    this[ callback ] = true;
    return callback;
  }
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

  var callbackName, overwritten, responseContainer,
    jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
      "url" :
      typeof s.data === "string" &&
        ( s.contentType || "" )
          .indexOf( "application/x-www-form-urlencoded" ) === 0 &&
        rjsonp.test( s.data ) && "data"
    );

  // Handle iff the expected data type is "jsonp" or we have a parameter to set
  if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

    // Get callback name, remembering preexisting value associated with it
    callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
      s.jsonpCallback() :
      s.jsonpCallback;

    // Insert callback into url or form data
    if ( jsonProp ) {
      s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
    } else if ( s.jsonp !== false ) {
      s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
    }

    // Use data converter to retrieve json after script execution
    s.converters[ "script json" ] = function() {
      if ( !responseContainer ) {
        jQuery.error( callbackName + " was not called" );
      }
      return responseContainer[ 0 ];
    };

    // Force json dataType
    s.dataTypes[ 0 ] = "json";

    // Install callback
    overwritten = window[ callbackName ];
    window[ callbackName ] = function() {
      responseContainer = arguments;
    };

    // Clean-up function (fires after converters)
    jqXHR.always( function() {

      // If previous value didn't exist - remove it
      if ( overwritten === undefined ) {
        jQuery( window ).removeProp( callbackName );

      // Otherwise restore preexisting value
      } else {
        window[ callbackName ] = overwritten;
      }

      // Save back as free
      if ( s[ callbackName ] ) {

        // Make sure that re-using the options doesn't screw things around
        s.jsonpCallback = originalSettings.jsonpCallback;

        // Save the callback name for future use
        oldCallbacks.push( callbackName );
      }

      // Call if it was a function and we have a response
      if ( responseContainer && jQuery.isFunction( overwritten ) ) {
        overwritten( responseContainer[ 0 ] );
      }

      responseContainer = overwritten = undefined;
    } );

    // Delegate to script
    return "script";
  }
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
  var body = document.implementation.createHTMLDocument( "" ).body;
  body.innerHTML = "<form></form><form></form>";
  return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
  if ( typeof data !== "string" ) {
    return [];
  }
  if ( typeof context === "boolean" ) {
    keepScripts = context;
    context = false;
  }

  var base, parsed, scripts;

  if ( !context ) {

    // Stop scripts or inline event handlers from being executed immediately
    // by using document.implementation
    if ( support.createHTMLDocument ) {
      context = document.implementation.createHTMLDocument( "" );

      // Set the base href for the created document
      // so any parsed elements with URLs
      // are based on the document's URL (gh-2965)
      base = context.createElement( "base" );
      base.href = document.location.href;
      context.head.appendChild( base );
    } else {
      context = document;
    }
  }

  parsed = rsingleTag.exec( data );
  scripts = !keepScripts && [];

  // Single tag
  if ( parsed ) {
    return [ context.createElement( parsed[ 1 ] ) ];
  }

  parsed = buildFragment( [ data ], context, scripts );

  if ( scripts && scripts.length ) {
    jQuery( scripts ).remove();
  }

  return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
  var selector, type, response,
    self = this,
    off = url.indexOf( " " );

  if ( off > -1 ) {
    selector = stripAndCollapse( url.slice( off ) );
    url = url.slice( 0, off );
  }

  // If it's a function
  if ( jQuery.isFunction( params ) ) {

    // We assume that it's the callback
    callback = params;
    params = undefined;

  // Otherwise, build a param string
  } else if ( params && typeof params === "object" ) {
    type = "POST";
  }

  // If we have elements to modify, make the request
  if ( self.length > 0 ) {
    jQuery.ajax( {
      url: url,

      // If "type" variable is undefined, then "GET" method will be used.
      // Make value of this field explicit since
      // user can override it through ajaxSetup method
      type: type || "GET",
      dataType: "html",
      data: params
    } ).done( function( responseText ) {

      // Save response for use in complete callback
      response = arguments;

      self.html( selector ?

        // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

        // Otherwise use the full result
        responseText );

    // If the request succeeds, this function gets "data", "status", "jqXHR"
    // but they are ignored because response was set above.
    // If it fails, this function gets "jqXHR", "status", "error"
    } ).always( callback && function( jqXHR, status ) {
      self.each( function() {
        callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
      } );
    } );
  }

  return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
  "ajaxStart",
  "ajaxStop",
  "ajaxComplete",
  "ajaxError",
  "ajaxSuccess",
  "ajaxSend"
], function( i, type ) {
  jQuery.fn[ type ] = function( fn ) {
    return this.on( type, fn );
  };
} );




jQuery.expr.pseudos.animated = function( elem ) {
  return jQuery.grep( jQuery.timers, function( fn ) {
    return elem === fn.elem;
  } ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
  return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
  setOffset: function( elem, options, i ) {
    var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
      position = jQuery.css( elem, "position" ),
      curElem = jQuery( elem ),
      props = {};

    // Set position first, in-case top/left are set even on static elem
    if ( position === "static" ) {
      elem.style.position = "relative";
    }

    curOffset = curElem.offset();
    curCSSTop = jQuery.css( elem, "top" );
    curCSSLeft = jQuery.css( elem, "left" );
    calculatePosition = ( position === "absolute" || position === "fixed" ) &&
      ( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

    // Need to be able to calculate position if either
    // top or left is auto and position is either absolute or fixed
    if ( calculatePosition ) {
      curPosition = curElem.position();
      curTop = curPosition.top;
      curLeft = curPosition.left;

    } else {
      curTop = parseFloat( curCSSTop ) || 0;
      curLeft = parseFloat( curCSSLeft ) || 0;
    }

    if ( jQuery.isFunction( options ) ) {

      // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
      options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
    }

    if ( options.top != null ) {
      props.top = ( options.top - curOffset.top ) + curTop;
    }
    if ( options.left != null ) {
      props.left = ( options.left - curOffset.left ) + curLeft;
    }

    if ( "using" in options ) {
      options.using.call( elem, props );

    } else {
      curElem.css( props );
    }
  }
};

jQuery.fn.extend( {
  offset: function( options ) {

    // Preserve chaining for setter
    if ( arguments.length ) {
      return options === undefined ?
        this :
        this.each( function( i ) {
          jQuery.offset.setOffset( this, options, i );
        } );
    }

    var docElem, win, rect, doc,
      elem = this[ 0 ];

    if ( !elem ) {
      return;
    }

    // Support: IE <=11 only
    // Running getBoundingClientRect on a
    // disconnected node in IE throws an error
    if ( !elem.getClientRects().length ) {
      return { top: 0, left: 0 };
    }

    rect = elem.getBoundingClientRect();

    // Make sure element is not hidden (display: none)
    if ( rect.width || rect.height ) {
      doc = elem.ownerDocument;
      win = getWindow( doc );
      docElem = doc.documentElement;

      return {
        top: rect.top + win.pageYOffset - docElem.clientTop,
        left: rect.left + win.pageXOffset - docElem.clientLeft
      };
    }

    // Return zeros for disconnected and hidden elements (gh-2310)
    return rect;
  },

  position: function() {
    if ( !this[ 0 ] ) {
      return;
    }

    var offsetParent, offset,
      elem = this[ 0 ],
      parentOffset = { top: 0, left: 0 };

    // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
    // because it is its only offset parent
    if ( jQuery.css( elem, "position" ) === "fixed" ) {

      // Assume getBoundingClientRect is there when computed position is fixed
      offset = elem.getBoundingClientRect();

    } else {

      // Get *real* offsetParent
      offsetParent = this.offsetParent();

      // Get correct offsets
      offset = this.offset();
      if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
        parentOffset = offsetParent.offset();
      }

      // Add offsetParent borders
      parentOffset = {
        top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
        left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
      };
    }

    // Subtract parent offsets and element margins
    return {
      top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
      left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
    };
  },

  // This method will return documentElement in the following cases:
  // 1) For the element inside the iframe without offsetParent, this method will return
  //    documentElement of the parent window
  // 2) For the hidden or detached element
  // 3) For body or html element, i.e. in case of the html node - it will return itself
  //
  // but those exceptions were never presented as a real life use-cases
  // and might be considered as more preferable results.
  //
  // This logic, however, is not guaranteed and can change at any point in the future
  offsetParent: function() {
    return this.map( function() {
      var offsetParent = this.offsetParent;

      while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
        offsetParent = offsetParent.offsetParent;
      }

      return offsetParent || documentElement;
    } );
  }
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
  var top = "pageYOffset" === prop;

  jQuery.fn[ method ] = function( val ) {
    return access( this, function( elem, method, val ) {
      var win = getWindow( elem );

      if ( val === undefined ) {
        return win ? win[ prop ] : elem[ method ];
      }

      if ( win ) {
        win.scrollTo(
          !top ? val : win.pageXOffset,
          top ? val : win.pageYOffset
        );

      } else {
        elem[ method ] = val;
      }
    }, method, val, arguments.length );
  };
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
  jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
    function( elem, computed ) {
      if ( computed ) {
        computed = curCSS( elem, prop );

        // If curCSS returns percentage, fallback to offset
        return rnumnonpx.test( computed ) ?
          jQuery( elem ).position()[ prop ] + "px" :
          computed;
      }
    }
  );
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
  jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
    function( defaultExtra, funcName ) {

    // Margin is only for outerHeight, outerWidth
    jQuery.fn[ funcName ] = function( margin, value ) {
      var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
        extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

      return access( this, function( elem, type, value ) {
        var doc;

        if ( jQuery.isWindow( elem ) ) {

          // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
          return funcName.indexOf( "outer" ) === 0 ?
            elem[ "inner" + name ] :
            elem.document.documentElement[ "client" + name ];
        }

        // Get document width or height
        if ( elem.nodeType === 9 ) {
          doc = elem.documentElement;

          // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
          // whichever is greatest
          return Math.max(
            elem.body[ "scroll" + name ], doc[ "scroll" + name ],
            elem.body[ "offset" + name ], doc[ "offset" + name ],
            doc[ "client" + name ]
          );
        }

        return value === undefined ?

          // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css( elem, type, extra ) :

          // Set width or height on the element
          jQuery.style( elem, type, value, extra );
      }, type, chainable ? margin : undefined, chainable );
    };
  } );
} );


jQuery.fn.extend( {

  bind: function( types, data, fn ) {
    return this.on( types, null, data, fn );
  },
  unbind: function( types, fn ) {
    return this.off( types, null, fn );
  },

  delegate: function( selector, types, data, fn ) {
    return this.on( types, selector, data, fn );
  },
  undelegate: function( selector, types, fn ) {

    // ( namespace ) or ( selector, types [, fn] )
    return arguments.length === 1 ?
      this.off( selector, "**" ) :
      this.off( types, selector || "**", fn );
  }
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
  define( "jquery", [], function() {
    return jQuery;
  } );
}




var

  // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,

  // Map over the $ in case of overwrite
  _$ = window.$;

jQuery.noConflict = function( deep ) {
  if ( window.$ === jQuery ) {
    window.$ = _$;
  }

  if ( deep && window.jQuery === jQuery ) {
    window.jQuery = _jQuery;
  }

  return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
  window.jQuery = window.$ = jQuery;
}





return jQuery;
} );
/*!
 * ---------------------------- DRAGEND JS -------------------------------------
 *
 * Version: <%= pkg.version %>
 * https://github.com/Stereobit/dragend
 * Copyright (c) 2014 Tobias Otte, t@stereob.it
 *
 * Licensed under MIT-style license:
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

 ;(function( window ) {
  "use strict";

  // help the minifier
  var doc = document,
      win = window;

  function init( $ ) {

    // Welcome To dragend JS
    // =====================
    //
    // dragend.js is a touch ready, full responsive, content swipe script. It has no dependencies
    // It also can, but don't has to, used as a jQuery
    // (https://github.com/jquery/jquery/) plugin.
    //
    // The current version is <%= pkg.version %>
    //
    // Usage
    // =====================
    //
    // To activate dragend JS just call the function on a jQuery element
    //
    // $("#swipe-container").dragend();
    //
    // You could rather pass in a options object or a string to bump on of the
    // following behaviors: "up", "down", "left", "right" for swiping in one of
    // these directions, "page" with the page number as second argument to go to a
    // explicit page and without any value to go to the first page
    //
    // Settings
    // =====================
    //
    // You can use the following options:
    //
    // * pageClass: classname selector for all elments that should provide a page
    // * direction: "horizontal" or "vertical"
    // * minDragDistance: minuimum distance (in pixel) the user has to drag
    //   to trigger swip
    // * scribe: pixel value for a possible scribe
    // * onSwipeStart: callback function before the animation
    // * onSwipeEnd: callback function after the animation
    // * onDragStart: called on drag start
    // * onDrag: callback on drag
    // * onDragEnd: callback on dragend
    // * borderBetweenPages: if you need space between pages add a pixel value
    // * duration
    // * stopPropagation
    // * afterInitialize called after the pages are size
    // * preventDrag if want to prevent user interactions and only swipe manualy

    var

      // Default setting
      defaultSettings = {
        pageClass          : "dragend-page",
        direction          : "horizontal",
        minDragDistance    : "40",
        onSwipeStart       : noop,
        onSwipeEnd         : noop,
        onDragStart        : noop,
        onDrag             : noop,
        onDragEnd          : noop,
        afterInitialize    : noop,
        keyboardNavigation : false,
        stopPropagation    : false,
        itemsInPage        : 1,
        scribe             : 0,
        borderBetweenPages : 0,
        duration           : 300,
        preventDrag        : false
      },

      isTouch = 'ontouchstart' in win,

      startEvent = isTouch ? 'touchstart' : 'mousedown',
      moveEvent = isTouch ? 'touchmove' : 'mousemove',
      endEvent = isTouch ? 'touchend' : 'mouseup',

      keycodes = {
        37: "left",
        38: "up",
        39: "right",
        40: "down"
      },

      errors = {
        pages: "No pages found"
      },

      containerStyles = {
        overflow: "hidden",
        padding : 0
      },

      supports = (function() {
         var div = doc.createElement('div'),
             vendors = 'Khtml Ms O Moz Webkit'.split(' '),
             len = vendors.length;

         return function( prop ) {
            if ( prop in div.style ) return true;

            prop = prop.replace(/^[a-z]/, function(val) {
               return val.toUpperCase();
            });

            while( len-- ) {
               if ( vendors[len] + prop in div.style ) {
                  return true;
               }
            }
            return false;
         };
      })(),

      supportTransform = supports('transform');

    function noop() {}

    function setStyles( element, styles ) {

      var property,
          value;

      for ( property in styles ) {

        if ( styles.hasOwnProperty(property) ) {
          value = styles[property];

          switch ( property ) {
            case "height":
            case "width":
            case "marginLeft":
            case "marginTop":
              value += "px";
          }

          element.style[property] = value;

        }

      }

      return element;

    }

    function extend( destination, source ) {

      var property;

      for ( property in source ) {
        destination[property] = source[property];
      }

      return destination;

    }

    function proxy( fn, context ) {

      return function() {
        return fn.apply( context, Array.prototype.slice.call(arguments) );
      };

    }

    function getElementsByClassName( className, root ) {
      var elements;

      if ( $ ) {
        elements = $(root).find("." + className);
      } else {
        elements = Array.prototype.slice.call(root.getElementsByClassName( className ));
      }

      return elements;
    }

    function animate( element, propery, to, speed, callback ) {
      var propertyObj = {};

      propertyObj[propery] = to;

      if ($) {
        $(element).animate(propertyObj, speed, callback);
      } else {
        setStyles(element, propertyObj);
      }

    }

    /**
     * Returns an object containing the co-ordinates for the event, normalising for touch / non-touch.
     * @param {Object} event
     * @returns {Object}
     */
    function getCoords(event) {
      // touch move and touch end have different touch data
      var touches = event.touches,
          data = touches && touches.length ? touches : event.changedTouches;

      return {
        x: isTouch ? data[0].pageX : event.pageX,
        y: isTouch ? data[0].pageY : event.pageY
      };
    }

    function Dragend( container, settings ) {
      var defaultSettingsCopy = extend( {}, defaultSettings );

      this.settings      = extend( defaultSettingsCopy, settings );
      this.container     = container;
      this.pageContainer = doc.createElement( "div" );
      this.scrollBorder  = { x: 0, y: 0 };
      this.page          = 0;
      this.preventScroll = false;
      this.pageCssProperties = {
        margin: 0
      };

      // bind events
      this._onStart = proxy( this._onStart, this );
      this._onMove = proxy( this._onMove, this );
      this._onEnd = proxy( this._onEnd, this );
      this._onKeydown = proxy( this._onKeydown, this );
      this._sizePages = proxy( this._sizePages, this );
      this._afterScrollTransform = proxy(this._afterScrollTransform, this);

      this.pageContainer.innerHTML = container.cloneNode(true).innerHTML;
      container.innerHTML = "";
      container.appendChild( this.pageContainer );

      this._scroll = supportTransform ? this._scrollWithTransform : this._scrollWithoutTransform;
      this._animateScroll = supportTransform ? this._animateScrollWithTransform : this._animateScrollWithoutTransform;

      // Initialisation

      setStyles(container, containerStyles);

      // Give the DOM some time to update ...
      setTimeout( proxy(function() {
          this.updateInstance( settings );
          if (!this.settings.preventDrag) {
            this._observe();
          }
          this.settings.afterInitialize.call(this);
      }, this), 10 );

    }

    function addEventListener(container, event, callback) {
      if ($) {
        $(container).on(event, callback);
      } else {
        container.addEventListener(event, callback, false);
      }
    }

    function removeEventListener(container, event, callback) {
      if ($) {
        $(container).off(event, callback);
      } else {
        container.removeEventListener(event, callback, false);
      }
    }

    extend(Dragend.prototype, {

      // Private functions
      // =================

      // ### Overscroll lookup table
      //
      // Checks if its the last or first page to slow down the scrolling if so
      //
      // Takes:
      // Drag event

      _checkOverscroll: function( direction, x, y ) {
        var coordinates = {
          x: x,
          y: y,
          overscroll: true
        };

        switch ( direction ) {

          case "right":
            if ( !this.scrollBorder.x ) {
              coordinates.x = Math.round((x - this.scrollBorder.x) / 5 );
              return coordinates;
            }
            break;

          case "left":
            if ( (this.pagesCount - 1) * this.pageDimentions.width <= this.scrollBorder.x ) {
              coordinates.x = Math.round( - ((Math.ceil(this.pagesCount) - 1) * (this.pageDimentions.width + this.settings.borderBetweenPages)) + x / 5 );
              return coordinates;
            }
            break;

          case "down":
            if ( !this.scrollBorder.y ) {
              coordinates.y = Math.round( (y - this.scrollBorder.y) / 5 );
              return coordinates;
            }
            break;

          case "up":
            if ( (this.pagesCount - 1) * this.pageDimentions.height <= this.scrollBorder.y ) {
              coordinates.y = Math.round( - ((Math.ceil(this.pagesCount) - 1) * (this.pageDimentions.height + this.settings.borderBetweenPages)) + y / 5 );
              return coordinates;
            }
            break;
        }

        return {
          x: x - this.scrollBorder.x,
          y: y - this.scrollBorder.y,
          overscroll: false
        };
      },

      // Observe
      //
      // Sets the observers for drag, resize and key events

      _observe: function() {

        addEventListener(this.container, startEvent, this._onStart);

        if ( this.settings.keyboardNavigation ) {
          addEventListener(doc.body, "keydown", this._onKeydown);
        }

        addEventListener(win, "resize", this._sizePages);

      },


      _onStart: function(event) {

        event = event.originalEvent || event;

        if (this.settings.stopPropagation) {
          event.stopPropagation();
        }

        addEventListener(doc.body, moveEvent, this._onMove);
        addEventListener(doc.body, endEvent, this._onEnd);

        this.startCoords = getCoords(event);

        this.settings.onDragStart.call( this, event );

      },

      _onMove: function( event ) {

        event = event.originalEvent || event;

        // ensure swiping with one touch and not pinching
        if ( event.touches && event.touches.length > 1 || event.scale && event.scale !== 1) return;

        event.preventDefault();
        if (this.settings.stopPropagation) {
          event.stopPropagation();
        }

        var parsedEvent = this._parseEvent(event),
            coordinates = this._checkOverscroll( parsedEvent.direction , - parsedEvent.distanceX, - parsedEvent.distanceY );

        this.settings.onDrag.call( this, this.activeElement, parsedEvent, coordinates.overscroll, event );

        if ( !this.preventScroll ) {
          this._scroll( coordinates );
        }
      },

      _onEnd: function( event ) {

        event = event.originalEvent || event;

        if (this.settings.stopPropagation) {
          event.stopPropagation();
        }

        var parsedEvent = this._parseEvent(event);

        this.startCoords = { x: 0, y: 0 };

        if ( Math.abs(parsedEvent.distanceX) > this.settings.minDragDistance || Math.abs(parsedEvent.distanceY) > this.settings.minDragDistance) {
          this.swipe( parsedEvent.direction );
        } else if (parsedEvent.distanceX > 0 || parsedEvent.distanceX > 0) {
          this._scrollToPage();
        }

        this.settings.onDragEnd.call( this, this.container, this.activeElement, this.page, event );

        removeEventListener(doc.body, moveEvent, this._onMove);
        removeEventListener(doc.body, endEvent, this._onEnd);

      },

      _parseEvent: function( event ) {
        var coords = getCoords(event),
            x = this.startCoords.x - coords.x,
            y = this.startCoords.y - coords.y;

        return this._addDistanceValues( x, y );
      },

      _addDistanceValues: function( x, y ) {
        var eventData = {
          distanceX: 0,
          distanceY: 0
        };

        if ( this.settings.direction === "horizontal" ) {
          eventData.distanceX = x;
          eventData.direction = x > 0 ? "left" : "right";
        } else {
          eventData.distanceY = y;
          eventData.direction = y > 0 ? "up" : "down";
        }

        return eventData;
      },

      _onKeydown: function( event ) {
        var direction = keycodes[event.keyCode];

        if ( direction ) {
          this._scrollToPage(direction);
        }
      },

      _setHorizontalContainerCssValues: function() {
        extend( this.pageCssProperties, {
          "cssFloat" : "left",
          "overflowY": "auto",
          "overflowX": "hidden",
          "padding"  : 0,
          "display"  : "block"
        });

        setStyles(this.pageContainer, {
          "overflow"                   : "hidden",
          "width"                      : (this.pageDimentions.width + this.settings.borderBetweenPages) * this.pagesCount,
          "boxSizing"                  : "content-box",
          "-webkit-backface-visibility": "hidden",
          "-webkit-perspective"        : 1000,
          "margin"                     : 0,
          "padding"                    : 0
        });
      },

      _setVerticalContainerCssValues: function() {
        extend( this.pageCssProperties, {
          "overflow": "hidden",
          "padding" : 0,
          "display" : "block"
        });

        setStyles(this.pageContainer, {
          "padding-bottom"              : this.settings.scribe,
          "boxSizing"                   : "content-box",
          "-webkit-backface-visibility" : "hidden",
          "-webkit-perspective"         : 1000,
          "margin"                      : 0
        });
      },

      setContainerCssValues: function(){
        if ( this.settings.direction === "horizontal") {
            this._setHorizontalContainerCssValues();
        } else {
            this._setVerticalContainerCssValues();
        }
      },

      // ### Calculate page dimentions
      //
      // Updates the page dimentions values

      _setPageDimentions: function() {
        var width  = this.container.offsetWidth,
            height = this.container.offsetHeight;

        if ( this.settings.direction === "horizontal" ) {
          width = width - parseInt( this.settings.scribe, 10 );
        } else {
          height = height - parseInt( this.settings.scribe, 10 );
        }

        this.pageDimentions = {
          width : width,
          height: height
        };

      },

      // ### Size pages

      _sizePages: function() {

        var pagesCount = this.pages.length;

        this._setPageDimentions();

        this.setContainerCssValues();

        if ( this.settings.direction === "horizontal" ) {
          extend( this.pageCssProperties, {
            height: this.pageDimentions.height,
            width : this.pageDimentions.width / this.settings.itemsInPage
          });
        } else {
          extend( this.pageCssProperties, {
            height: this.pageDimentions.height / this.settings.itemsInPage,
            width : this.pageDimentions.width
          });
        }

        for (var i = 0; i < pagesCount; i++) {
          setStyles(this.pages[i], this.pageCssProperties);
        }

        this._jumpToPage( "page", this.page );

      },

      // ### Callculate new page
      //
      // Update global values for specific swipe action
      //
      // Takes direction and, if specific page is used the pagenumber

      _calcNewPage: function( direction, pageNumber ) {

        var borderBetweenPages = this.settings.borderBetweenPages,
            height = this.pageDimentions.height,
            width = this.pageDimentions.width,
            page = this.page;

        switch ( direction ) {
          case "up":
            if ( page < this.pagesCount - 1 ) {
              this.scrollBorder.y = this.scrollBorder.y + height + borderBetweenPages;
              this.page++;
            }
            break;

          case "down":
            if ( page > 0 ) {
              this.scrollBorder.y = this.scrollBorder.y - height - borderBetweenPages;
              this.page--;
            }
            break;

          case "left":
            if ( page < this.pagesCount - 1 ) {
              this.scrollBorder.x = this.scrollBorder.x + width + borderBetweenPages;
              this.page++;
            }
            break;

          case "right":
            if ( page > 0 ) {
              this.scrollBorder.x = this.scrollBorder.x - width - borderBetweenPages;
              this.page--;
            }
            break;

          case "page":
            switch ( this.settings.direction ) {
              case "horizontal":
                this.scrollBorder.x = (width + borderBetweenPages) * pageNumber;
                break;

              case "vertical":
                this.scrollBorder.y = (height + borderBetweenPages) * pageNumber;
                break;
            }
            this.page = pageNumber;
            break;

          default:
            this.scrollBorder.y = 0;
            this.scrollBorder.x = 0;
            this.page           = 0;
            break;
        }
      },

      // ### On swipe end
      //
      // Function called after the scroll animation ended

      _onSwipeEnd: function() {
        this.preventScroll = false;

        this.activeElement = this.pages[this.page * this.settings.itemsInPage];

        // Call onSwipeEnd callback function
        this.settings.onSwipeEnd.call( this, this.container, this.activeElement, this.page);
      },

      // Jump to page
      //
      // Jumps without a animantion to specific page. The page number is only
      // necessary for the specific page direction
      //
      // Takes:
      // Direction and pagenumber

      _jumpToPage: function( options, pageNumber ) {

        if ( options ) {
          this._calcNewPage( options, pageNumber );
        }

        this._scroll({
          x: - this.scrollBorder.x,
          y: - this.scrollBorder.y
        });
      },

      // Scroll to page
      //
      // Scrolls with a animantion to specific page. The page number is only necessary
      // for the specific page direction
      //
      // Takes:
      // Direction and pagenumber

      _scrollToPage: function( options, pageNumber ) {
        this.preventScroll = true;

        if ( options ) this._calcNewPage( options, pageNumber );

        this._animateScroll();
      },

      // ### Scroll translate
      //
      // Animation when translate is supported
      //
      // Takes:
      // x and y values to go with

      _scrollWithTransform: function ( coordinates ) {
        var style = this.settings.direction === "horizontal" ? "translateX(" + coordinates.x + "px)" : "translateY(" + coordinates.y + "px)";

        setStyles( this.pageContainer, {
          "-webkit-transform": style,
          "-moz-transform": style,
          "-ms-transform": style,
          "-o-transform": style,
          "transform": style
        });

      },

      // ### Animated scroll with translate support

      _animateScrollWithTransform: function() {

        var style = "transform " + this.settings.duration + "ms ease-out",
            container = this.container,
            afterScrollTransform = this._afterScrollTransform;

        setStyles( this.pageContainer, {
          "-webkit-transition": "-webkit-" + style,
          "-moz-transition": "-moz-" + style,
          "-ms-transition": "-ms-" + style,
          "-o-transition": "-o-" + style,
          "transition": style
        });

        this._scroll({
          x: - this.scrollBorder.x,
          y: - this.scrollBorder.y
        });

        addEventListener(this.container, "webkitTransitionEnd", afterScrollTransform);
        addEventListener(this.container, "oTransitionEnd", afterScrollTransform);
        addEventListener(this.container, "transitionend", afterScrollTransform);
        addEventListener(this.container, "transitionEnd", afterScrollTransform);

      },

      _afterScrollTransform: function() {

        var container = this.container,
            afterScrollTransform = this._afterScrollTransform;

        this._onSwipeEnd();

        removeEventListener(container, "webkitTransitionEnd", afterScrollTransform);
        removeEventListener(container, "oTransitionEnd", afterScrollTransform);
        removeEventListener(container, "transitionend", afterScrollTransform);
        removeEventListener(container, "transitionEnd", afterScrollTransform);

        setStyles( this.pageContainer, {
          "-webkit-transition": "",
          "-moz-transition": "",
          "-ms-transition": "",
          "-o-transition": "",
          "transition": ""
        });

      },

      // ### Scroll fallback
      //
      // Animation lookup table  when translate isn't supported
      //
      // Takes:
      // x and y values to go with

      _scrollWithoutTransform: function( coordinates ) {
        var styles = this.settings.direction === "horizontal" ? { "marginLeft": coordinates.x } : { "marginTop": coordinates.y };

        setStyles(this.pageContainer, styles);
      },

      // ### Animated scroll without translate support

      _animateScrollWithoutTransform: function() {
        var property = this.settings.direction === "horizontal" ? "marginLeft" : "marginTop",
            value = this.settings.direction === "horizontal" ? - this.scrollBorder.x : - this.scrollBorder.y;

        animate( this.pageContainer, property, value, this.settings.duration, proxy( this._onSwipeEnd, this ));

      },

      // Public functions
      // ================

      swipe: function( direction ) {
        // Call onSwipeStart callback function
        this.settings.onSwipeStart.call( this, this.container, this.activeElement, this.page );
        this._scrollToPage( direction );
      },

      updateInstance: function( settings ) {

        settings = settings || {};

        if ( typeof settings === "object" ) extend( this.settings, settings );

        this.pages = getElementsByClassName(this.settings.pageClass, this.pageContainer);

        if (this.pages.length) {
          this.pagesCount = this.pages.length / this.settings.itemsInPage;
        } else {
          throw new Error(errors.pages);
        }

        this.activeElement = this.pages[this.page * this.settings.itemsInPage];
        this._sizePages();

        if ( this.settings.jumpToPage ) {
          this.jumpToPage( settings.jumpToPage );
          delete this.settings.jumpToPage;
        }

        if ( this.settings.scrollToPage ) {
          this.scrollToPage( this.settings.scrollToPage );
          delete this.settings.scrollToPage;
        }

      },

      destroy: function() {

        var container = this.container;

        removeEventListener(container, startEvent);
        removeEventListener(container, moveEvent);
        removeEventListener(container, endEvent);
        removeEventListener(doc.body, "keydown", this._onKeydown);
        removeEventListener(win, "resize", this._sizePages);

        container.removeAttribute("style");

        for (var i = 0; i < this.pages.length; i++) {
          this.pages[i].removeAttribute("style");
        }

        container.innerHTML = this.pageContainer.innerHTML;

      },

      scrollToPage: function( page ) {
        this._scrollToPage( "page", page - 1);
      },

      jumpToPage: function( page ) {
        this._jumpToPage( "page", page - 1);
      }

    });

    if ( $ ) {

        // Register jQuery plugin
        $.fn.dragend = function( settings ) {

          settings = settings || {};

          this.each(function() {
            var instance = $(this).data( "dragend" );

            // check if instance already created
            if ( instance ) {
              instance.updateInstance( settings );
            } else {
              instance = new Dragend( this, settings );
              $(this).data( "dragend", instance );
            }

            // check if should trigger swipe
            if ( typeof settings === "string" ) instance.swipe( settings );

          });

          // jQuery functions should always return the instance
          return this;
        };

    }

    return Dragend;

  }

  if ( typeof define == 'function' && typeof define.amd == 'object' && define.amd ) {
      define(function() {
        return init( win.jQuery || win.Zepto );
      });
  } else {
      win.Dragend = init( win.jQuery || win.Zepto );
  }

})( window );
/*! jQuery UI - v1.12.1 - 2017-06-15
* http://jqueryui.com
* Includes: widget.js, position.js, keycode.js, unique-id.js, widgets/autocomplete.js, widgets/menu.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
  if ( typeof define === "function" && define.amd ) {

    // AMD. Register as an anonymous module.
    define([ "jquery" ], factory );
  } else {

    // Browser globals
    factory( jQuery );
  }
}(function( $ ) {

$.ui = $.ui || {};

var version = $.ui.version = "1.12.1";


/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/



var widgetUuid = 0;
var widgetSlice = Array.prototype.slice;

$.cleanData = ( function( orig ) {
  return function( elems ) {
    var events, elem, i;
    for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
      try {

        // Only trigger remove when necessary to save time
        events = $._data( elem, "events" );
        if ( events && events.remove ) {
          $( elem ).triggerHandler( "remove" );
        }

      // Http://bugs.jquery.com/ticket/8235
      } catch ( e ) {}
    }
    orig( elems );
  };
} )( $.cleanData );

$.widget = function( name, base, prototype ) {
  var existingConstructor, constructor, basePrototype;

  // ProxiedPrototype allows the provided prototype to remain unmodified
  // so that it can be used as a mixin for multiple widgets (#8876)
  var proxiedPrototype = {};

  var namespace = name.split( "." )[ 0 ];
  name = name.split( "." )[ 1 ];
  var fullName = namespace + "-" + name;

  if ( !prototype ) {
    prototype = base;
    base = $.Widget;
  }

  if ( $.isArray( prototype ) ) {
    prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
  }

  // Create selector for plugin
  $.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
    return !!$.data( elem, fullName );
  };

  $[ namespace ] = $[ namespace ] || {};
  existingConstructor = $[ namespace ][ name ];
  constructor = $[ namespace ][ name ] = function( options, element ) {

    // Allow instantiation without "new" keyword
    if ( !this._createWidget ) {
      return new constructor( options, element );
    }

    // Allow instantiation without initializing for simple inheritance
    // must use "new" keyword (the code above always passes args)
    if ( arguments.length ) {
      this._createWidget( options, element );
    }
  };

  // Extend with the existing constructor to carry over any static properties
  $.extend( constructor, existingConstructor, {
    version: prototype.version,

    // Copy the object used to create the prototype in case we need to
    // redefine the widget later
    _proto: $.extend( {}, prototype ),

    // Track widgets that inherit from this widget in case this widget is
    // redefined after a widget inherits from it
    _childConstructors: []
  } );

  basePrototype = new base();

  // We need to make the options hash a property directly on the new instance
  // otherwise we'll modify the options hash on the prototype that we're
  // inheriting from
  basePrototype.options = $.widget.extend( {}, basePrototype.options );
  $.each( prototype, function( prop, value ) {
    if ( !$.isFunction( value ) ) {
      proxiedPrototype[ prop ] = value;
      return;
    }
    proxiedPrototype[ prop ] = ( function() {
      function _super() {
        return base.prototype[ prop ].apply( this, arguments );
      }

      function _superApply( args ) {
        return base.prototype[ prop ].apply( this, args );
      }

      return function() {
        var __super = this._super;
        var __superApply = this._superApply;
        var returnValue;

        this._super = _super;
        this._superApply = _superApply;

        returnValue = value.apply( this, arguments );

        this._super = __super;
        this._superApply = __superApply;

        return returnValue;
      };
    } )();
  } );
  constructor.prototype = $.widget.extend( basePrototype, {

    // TODO: remove support for widgetEventPrefix
    // always use the name + a colon as the prefix, e.g., draggable:start
    // don't prefix for widgets that aren't DOM-based
    widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
  }, proxiedPrototype, {
    constructor: constructor,
    namespace: namespace,
    widgetName: name,
    widgetFullName: fullName
  } );

  // If this widget is being redefined then we need to find all widgets that
  // are inheriting from it and redefine all of them so that they inherit from
  // the new version of this widget. We're essentially trying to replace one
  // level in the prototype chain.
  if ( existingConstructor ) {
    $.each( existingConstructor._childConstructors, function( i, child ) {
      var childPrototype = child.prototype;

      // Redefine the child widget using the same prototype that was
      // originally used, but inherit from the new version of the base
      $.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
        child._proto );
    } );

    // Remove the list of existing child constructors from the old constructor
    // so the old child constructors can be garbage collected
    delete existingConstructor._childConstructors;
  } else {
    base._childConstructors.push( constructor );
  }

  $.widget.bridge( name, constructor );

  return constructor;
};

$.widget.extend = function( target ) {
  var input = widgetSlice.call( arguments, 1 );
  var inputIndex = 0;
  var inputLength = input.length;
  var key;
  var value;

  for ( ; inputIndex < inputLength; inputIndex++ ) {
    for ( key in input[ inputIndex ] ) {
      value = input[ inputIndex ][ key ];
      if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

        // Clone objects
        if ( $.isPlainObject( value ) ) {
          target[ key ] = $.isPlainObject( target[ key ] ) ?
            $.widget.extend( {}, target[ key ], value ) :

            // Don't extend strings, arrays, etc. with objects
            $.widget.extend( {}, value );

        // Copy everything else by reference
        } else {
          target[ key ] = value;
        }
      }
    }
  }
  return target;
};

$.widget.bridge = function( name, object ) {
  var fullName = object.prototype.widgetFullName || name;
  $.fn[ name ] = function( options ) {
    var isMethodCall = typeof options === "string";
    var args = widgetSlice.call( arguments, 1 );
    var returnValue = this;

    if ( isMethodCall ) {

      // If this is an empty collection, we need to have the instance method
      // return undefined instead of the jQuery instance
      if ( !this.length && options === "instance" ) {
        returnValue = undefined;
      } else {
        this.each( function() {
          var methodValue;
          var instance = $.data( this, fullName );

          if ( options === "instance" ) {
            returnValue = instance;
            return false;
          }

          if ( !instance ) {
            return $.error( "cannot call methods on " + name +
              " prior to initialization; " +
              "attempted to call method '" + options + "'" );
          }

          if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
            return $.error( "no such method '" + options + "' for " + name +
              " widget instance" );
          }

          methodValue = instance[ options ].apply( instance, args );

          if ( methodValue !== instance && methodValue !== undefined ) {
            returnValue = methodValue && methodValue.jquery ?
              returnValue.pushStack( methodValue.get() ) :
              methodValue;
            return false;
          }
        } );
      }
    } else {

      // Allow multiple hashes to be passed on init
      if ( args.length ) {
        options = $.widget.extend.apply( null, [ options ].concat( args ) );
      }

      this.each( function() {
        var instance = $.data( this, fullName );
        if ( instance ) {
          instance.option( options || {} );
          if ( instance._init ) {
            instance._init();
          }
        } else {
          $.data( this, fullName, new object( options, this ) );
        }
      } );
    }

    return returnValue;
  };
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
  widgetName: "widget",
  widgetEventPrefix: "",
  defaultElement: "<div>",

  options: {
    classes: {},
    disabled: false,

    // Callbacks
    create: null
  },

  _createWidget: function( options, element ) {
    element = $( element || this.defaultElement || this )[ 0 ];
    this.element = $( element );
    this.uuid = widgetUuid++;
    this.eventNamespace = "." + this.widgetName + this.uuid;

    this.bindings = $();
    this.hoverable = $();
    this.focusable = $();
    this.classesElementLookup = {};

    if ( element !== this ) {
      $.data( element, this.widgetFullName, this );
      this._on( true, this.element, {
        remove: function( event ) {
          if ( event.target === element ) {
            this.destroy();
          }
        }
      } );
      this.document = $( element.style ?

        // Element within the document
        element.ownerDocument :

        // Element is window or document
        element.document || element );
      this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
    }

    this.options = $.widget.extend( {},
      this.options,
      this._getCreateOptions(),
      options );

    this._create();

    if ( this.options.disabled ) {
      this._setOptionDisabled( this.options.disabled );
    }

    this._trigger( "create", null, this._getCreateEventData() );
    this._init();
  },

  _getCreateOptions: function() {
    return {};
  },

  _getCreateEventData: $.noop,

  _create: $.noop,

  _init: $.noop,

  destroy: function() {
    var that = this;

    this._destroy();
    $.each( this.classesElementLookup, function( key, value ) {
      that._removeClass( value, key );
    } );

    // We can probably remove the unbind calls in 2.0
    // all event bindings should go through this._on()
    this.element
      .off( this.eventNamespace )
      .removeData( this.widgetFullName );
    this.widget()
      .off( this.eventNamespace )
      .removeAttr( "aria-disabled" );

    // Clean up events and states
    this.bindings.off( this.eventNamespace );
  },

  _destroy: $.noop,

  widget: function() {
    return this.element;
  },

  option: function( key, value ) {
    var options = key;
    var parts;
    var curOption;
    var i;

    if ( arguments.length === 0 ) {

      // Don't return a reference to the internal hash
      return $.widget.extend( {}, this.options );
    }

    if ( typeof key === "string" ) {

      // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
      options = {};
      parts = key.split( "." );
      key = parts.shift();
      if ( parts.length ) {
        curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
        for ( i = 0; i < parts.length - 1; i++ ) {
          curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
          curOption = curOption[ parts[ i ] ];
        }
        key = parts.pop();
        if ( arguments.length === 1 ) {
          return curOption[ key ] === undefined ? null : curOption[ key ];
        }
        curOption[ key ] = value;
      } else {
        if ( arguments.length === 1 ) {
          return this.options[ key ] === undefined ? null : this.options[ key ];
        }
        options[ key ] = value;
      }
    }

    this._setOptions( options );

    return this;
  },

  _setOptions: function( options ) {
    var key;

    for ( key in options ) {
      this._setOption( key, options[ key ] );
    }

    return this;
  },

  _setOption: function( key, value ) {
    if ( key === "classes" ) {
      this._setOptionClasses( value );
    }

    this.options[ key ] = value;

    if ( key === "disabled" ) {
      this._setOptionDisabled( value );
    }

    return this;
  },

  _setOptionClasses: function( value ) {
    var classKey, elements, currentElements;

    for ( classKey in value ) {
      currentElements = this.classesElementLookup[ classKey ];
      if ( value[ classKey ] === this.options.classes[ classKey ] ||
          !currentElements ||
          !currentElements.length ) {
        continue;
      }

      // We are doing this to create a new jQuery object because the _removeClass() call
      // on the next line is going to destroy the reference to the current elements being
      // tracked. We need to save a copy of this collection so that we can add the new classes
      // below.
      elements = $( currentElements.get() );
      this._removeClass( currentElements, classKey );

      // We don't use _addClass() here, because that uses this.options.classes
      // for generating the string of classes. We want to use the value passed in from
      // _setOption(), this is the new value of the classes option which was passed to
      // _setOption(). We pass this value directly to _classes().
      elements.addClass( this._classes( {
        element: elements,
        keys: classKey,
        classes: value,
        add: true
      } ) );
    }
  },

  _setOptionDisabled: function( value ) {
    this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

    // If the widget is becoming disabled, then nothing is interactive
    if ( value ) {
      this._removeClass( this.hoverable, null, "ui-state-hover" );
      this._removeClass( this.focusable, null, "ui-state-focus" );
    }
  },

  enable: function() {
    return this._setOptions( { disabled: false } );
  },

  disable: function() {
    return this._setOptions( { disabled: true } );
  },

  _classes: function( options ) {
    var full = [];
    var that = this;

    options = $.extend( {
      element: this.element,
      classes: this.options.classes || {}
    }, options );

    function processClassString( classes, checkOption ) {
      var current, i;
      for ( i = 0; i < classes.length; i++ ) {
        current = that.classesElementLookup[ classes[ i ] ] || $();
        if ( options.add ) {
          current = $( $.unique( current.get().concat( options.element.get() ) ) );
        } else {
          current = $( current.not( options.element ).get() );
        }
        that.classesElementLookup[ classes[ i ] ] = current;
        full.push( classes[ i ] );
        if ( checkOption && options.classes[ classes[ i ] ] ) {
          full.push( options.classes[ classes[ i ] ] );
        }
      }
    }

    this._on( options.element, {
      "remove": "_untrackClassesElement"
    } );

    if ( options.keys ) {
      processClassString( options.keys.match( /\S+/g ) || [], true );
    }
    if ( options.extra ) {
      processClassString( options.extra.match( /\S+/g ) || [] );
    }

    return full.join( " " );
  },

  _untrackClassesElement: function( event ) {
    var that = this;
    $.each( that.classesElementLookup, function( key, value ) {
      if ( $.inArray( event.target, value ) !== -1 ) {
        that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
      }
    } );
  },

  _removeClass: function( element, keys, extra ) {
    return this._toggleClass( element, keys, extra, false );
  },

  _addClass: function( element, keys, extra ) {
    return this._toggleClass( element, keys, extra, true );
  },

  _toggleClass: function( element, keys, extra, add ) {
    add = ( typeof add === "boolean" ) ? add : extra;
    var shift = ( typeof element === "string" || element === null ),
      options = {
        extra: shift ? keys : extra,
        keys: shift ? element : keys,
        element: shift ? this.element : element,
        add: add
      };
    options.element.toggleClass( this._classes( options ), add );
    return this;
  },

  _on: function( suppressDisabledCheck, element, handlers ) {
    var delegateElement;
    var instance = this;

    // No suppressDisabledCheck flag, shuffle arguments
    if ( typeof suppressDisabledCheck !== "boolean" ) {
      handlers = element;
      element = suppressDisabledCheck;
      suppressDisabledCheck = false;
    }

    // No element argument, shuffle and use this.element
    if ( !handlers ) {
      handlers = element;
      element = this.element;
      delegateElement = this.widget();
    } else {
      element = delegateElement = $( element );
      this.bindings = this.bindings.add( element );
    }

    $.each( handlers, function( event, handler ) {
      function handlerProxy() {

        // Allow widgets to customize the disabled handling
        // - disabled as an array instead of boolean
        // - disabled class as method for disabling individual parts
        if ( !suppressDisabledCheck &&
            ( instance.options.disabled === true ||
            $( this ).hasClass( "ui-state-disabled" ) ) ) {
          return;
        }
        return ( typeof handler === "string" ? instance[ handler ] : handler )
          .apply( instance, arguments );
      }

      // Copy the guid so direct unbinding works
      if ( typeof handler !== "string" ) {
        handlerProxy.guid = handler.guid =
          handler.guid || handlerProxy.guid || $.guid++;
      }

      var match = event.match( /^([\w:-]*)\s*(.*)$/ );
      var eventName = match[ 1 ] + instance.eventNamespace;
      var selector = match[ 2 ];

      if ( selector ) {
        delegateElement.on( eventName, selector, handlerProxy );
      } else {
        element.on( eventName, handlerProxy );
      }
    } );
  },

  _off: function( element, eventName ) {
    eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
      this.eventNamespace;
    element.off( eventName ).off( eventName );

    // Clear the stack to avoid memory leaks (#10056)
    this.bindings = $( this.bindings.not( element ).get() );
    this.focusable = $( this.focusable.not( element ).get() );
    this.hoverable = $( this.hoverable.not( element ).get() );
  },

  _delay: function( handler, delay ) {
    function handlerProxy() {
      return ( typeof handler === "string" ? instance[ handler ] : handler )
        .apply( instance, arguments );
    }
    var instance = this;
    return setTimeout( handlerProxy, delay || 0 );
  },

  _hoverable: function( element ) {
    this.hoverable = this.hoverable.add( element );
    this._on( element, {
      mouseenter: function( event ) {
        this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
      },
      mouseleave: function( event ) {
        this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
      }
    } );
  },

  _focusable: function( element ) {
    this.focusable = this.focusable.add( element );
    this._on( element, {
      focusin: function( event ) {
        this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
      },
      focusout: function( event ) {
        this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
      }
    } );
  },

  _trigger: function( type, event, data ) {
    var prop, orig;
    var callback = this.options[ type ];

    data = data || {};
    event = $.Event( event );
    event.type = ( type === this.widgetEventPrefix ?
      type :
      this.widgetEventPrefix + type ).toLowerCase();

    // The original event may come from any element
    // so we need to reset the target on the new event
    event.target = this.element[ 0 ];

    // Copy original event properties over to the new event
    orig = event.originalEvent;
    if ( orig ) {
      for ( prop in orig ) {
        if ( !( prop in event ) ) {
          event[ prop ] = orig[ prop ];
        }
      }
    }

    this.element.trigger( event, data );
    return !( $.isFunction( callback ) &&
      callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
      event.isDefaultPrevented() );
  }
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
  $.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
    if ( typeof options === "string" ) {
      options = { effect: options };
    }

    var hasOptions;
    var effectName = !options ?
      method :
      options === true || typeof options === "number" ?
        defaultEffect :
        options.effect || defaultEffect;

    options = options || {};
    if ( typeof options === "number" ) {
      options = { duration: options };
    }

    hasOptions = !$.isEmptyObject( options );
    options.complete = callback;

    if ( options.delay ) {
      element.delay( options.delay );
    }

    if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
      element[ method ]( options );
    } else if ( effectName !== method && element[ effectName ] ) {
      element[ effectName ]( options.duration, options.easing, callback );
    } else {
      element.queue( function( next ) {
        $( this )[ method ]();
        if ( callback ) {
          callback.call( element[ 0 ] );
        }
        next();
      } );
    }
  };
} );

var widget = $.widget;


/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */

//>>label: Position
//>>group: Core
//>>description: Positions elements relative to other elements.
//>>docs: http://api.jqueryui.com/position/
//>>demos: http://jqueryui.com/position/


( function() {
var cachedScrollbarWidth,
  max = Math.max,
  abs = Math.abs,
  rhorizontal = /left|center|right/,
  rvertical = /top|center|bottom/,
  roffset = /[\+\-]\d+(\.[\d]+)?%?/,
  rposition = /^\w+/,
  rpercent = /%$/,
  _position = $.fn.position;

function getOffsets( offsets, width, height ) {
  return [
    parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
    parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
  ];
}

function parseCss( element, property ) {
  return parseInt( $.css( element, property ), 10 ) || 0;
}

function getDimensions( elem ) {
  var raw = elem[ 0 ];
  if ( raw.nodeType === 9 ) {
    return {
      width: elem.width(),
      height: elem.height(),
      offset: { top: 0, left: 0 }
    };
  }
  if ( $.isWindow( raw ) ) {
    return {
      width: elem.width(),
      height: elem.height(),
      offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
    };
  }
  if ( raw.preventDefault ) {
    return {
      width: 0,
      height: 0,
      offset: { top: raw.pageY, left: raw.pageX }
    };
  }
  return {
    width: elem.outerWidth(),
    height: elem.outerHeight(),
    offset: elem.offset()
  };
}

$.position = {
  scrollbarWidth: function() {
    if ( cachedScrollbarWidth !== undefined ) {
      return cachedScrollbarWidth;
    }
    var w1, w2,
      div = $( "<div " +
        "style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" +
        "<div style='height:100px;width:auto;'></div></div>" ),
      innerDiv = div.children()[ 0 ];

    $( "body" ).append( div );
    w1 = innerDiv.offsetWidth;
    div.css( "overflow", "scroll" );

    w2 = innerDiv.offsetWidth;

    if ( w1 === w2 ) {
      w2 = div[ 0 ].clientWidth;
    }

    div.remove();

    return ( cachedScrollbarWidth = w1 - w2 );
  },
  getScrollInfo: function( within ) {
    var overflowX = within.isWindow || within.isDocument ? "" :
        within.element.css( "overflow-x" ),
      overflowY = within.isWindow || within.isDocument ? "" :
        within.element.css( "overflow-y" ),
      hasOverflowX = overflowX === "scroll" ||
        ( overflowX === "auto" && within.width < within.element[ 0 ].scrollWidth ),
      hasOverflowY = overflowY === "scroll" ||
        ( overflowY === "auto" && within.height < within.element[ 0 ].scrollHeight );
    return {
      width: hasOverflowY ? $.position.scrollbarWidth() : 0,
      height: hasOverflowX ? $.position.scrollbarWidth() : 0
    };
  },
  getWithinInfo: function( element ) {
    var withinElement = $( element || window ),
      isWindow = $.isWindow( withinElement[ 0 ] ),
      isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9,
      hasOffset = !isWindow && !isDocument;
    return {
      element: withinElement,
      isWindow: isWindow,
      isDocument: isDocument,
      offset: hasOffset ? $( element ).offset() : { left: 0, top: 0 },
      scrollLeft: withinElement.scrollLeft(),
      scrollTop: withinElement.scrollTop(),
      width: withinElement.outerWidth(),
      height: withinElement.outerHeight()
    };
  }
};

$.fn.position = function( options ) {
  if ( !options || !options.of ) {
    return _position.apply( this, arguments );
  }

  // Make a copy, we don't want to modify arguments
  options = $.extend( {}, options );

  var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
    target = $( options.of ),
    within = $.position.getWithinInfo( options.within ),
    scrollInfo = $.position.getScrollInfo( within ),
    collision = ( options.collision || "flip" ).split( " " ),
    offsets = {};

  dimensions = getDimensions( target );
  if ( target[ 0 ].preventDefault ) {

    // Force left top to allow flipping
    options.at = "left top";
  }
  targetWidth = dimensions.width;
  targetHeight = dimensions.height;
  targetOffset = dimensions.offset;

  // Clone to reuse original targetOffset later
  basePosition = $.extend( {}, targetOffset );

  // Force my and at to have valid horizontal and vertical positions
  // if a value is missing or invalid, it will be converted to center
  $.each( [ "my", "at" ], function() {
    var pos = ( options[ this ] || "" ).split( " " ),
      horizontalOffset,
      verticalOffset;

    if ( pos.length === 1 ) {
      pos = rhorizontal.test( pos[ 0 ] ) ?
        pos.concat( [ "center" ] ) :
        rvertical.test( pos[ 0 ] ) ?
          [ "center" ].concat( pos ) :
          [ "center", "center" ];
    }
    pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
    pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

    // Calculate offsets
    horizontalOffset = roffset.exec( pos[ 0 ] );
    verticalOffset = roffset.exec( pos[ 1 ] );
    offsets[ this ] = [
      horizontalOffset ? horizontalOffset[ 0 ] : 0,
      verticalOffset ? verticalOffset[ 0 ] : 0
    ];

    // Reduce to just the positions without the offsets
    options[ this ] = [
      rposition.exec( pos[ 0 ] )[ 0 ],
      rposition.exec( pos[ 1 ] )[ 0 ]
    ];
  } );

  // Normalize collision option
  if ( collision.length === 1 ) {
    collision[ 1 ] = collision[ 0 ];
  }

  if ( options.at[ 0 ] === "right" ) {
    basePosition.left += targetWidth;
  } else if ( options.at[ 0 ] === "center" ) {
    basePosition.left += targetWidth / 2;
  }

  if ( options.at[ 1 ] === "bottom" ) {
    basePosition.top += targetHeight;
  } else if ( options.at[ 1 ] === "center" ) {
    basePosition.top += targetHeight / 2;
  }

  atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
  basePosition.left += atOffset[ 0 ];
  basePosition.top += atOffset[ 1 ];

  return this.each( function() {
    var collisionPosition, using,
      elem = $( this ),
      elemWidth = elem.outerWidth(),
      elemHeight = elem.outerHeight(),
      marginLeft = parseCss( this, "marginLeft" ),
      marginTop = parseCss( this, "marginTop" ),
      collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) +
        scrollInfo.width,
      collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) +
        scrollInfo.height,
      position = $.extend( {}, basePosition ),
      myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

    if ( options.my[ 0 ] === "right" ) {
      position.left -= elemWidth;
    } else if ( options.my[ 0 ] === "center" ) {
      position.left -= elemWidth / 2;
    }

    if ( options.my[ 1 ] === "bottom" ) {
      position.top -= elemHeight;
    } else if ( options.my[ 1 ] === "center" ) {
      position.top -= elemHeight / 2;
    }

    position.left += myOffset[ 0 ];
    position.top += myOffset[ 1 ];

    collisionPosition = {
      marginLeft: marginLeft,
      marginTop: marginTop
    };

    $.each( [ "left", "top" ], function( i, dir ) {
      if ( $.ui.position[ collision[ i ] ] ) {
        $.ui.position[ collision[ i ] ][ dir ]( position, {
          targetWidth: targetWidth,
          targetHeight: targetHeight,
          elemWidth: elemWidth,
          elemHeight: elemHeight,
          collisionPosition: collisionPosition,
          collisionWidth: collisionWidth,
          collisionHeight: collisionHeight,
          offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
          my: options.my,
          at: options.at,
          within: within,
          elem: elem
        } );
      }
    } );

    if ( options.using ) {

      // Adds feedback as second argument to using callback, if present
      using = function( props ) {
        var left = targetOffset.left - position.left,
          right = left + targetWidth - elemWidth,
          top = targetOffset.top - position.top,
          bottom = top + targetHeight - elemHeight,
          feedback = {
            target: {
              element: target,
              left: targetOffset.left,
              top: targetOffset.top,
              width: targetWidth,
              height: targetHeight
            },
            element: {
              element: elem,
              left: position.left,
              top: position.top,
              width: elemWidth,
              height: elemHeight
            },
            horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
            vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
          };
        if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
          feedback.horizontal = "center";
        }
        if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
          feedback.vertical = "middle";
        }
        if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
          feedback.important = "horizontal";
        } else {
          feedback.important = "vertical";
        }
        options.using.call( this, props, feedback );
      };
    }

    elem.offset( $.extend( position, { using: using } ) );
  } );
};

$.ui.position = {
  fit: {
    left: function( position, data ) {
      var within = data.within,
        withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
        outerWidth = within.width,
        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
        overLeft = withinOffset - collisionPosLeft,
        overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
        newOverRight;

      // Element is wider than within
      if ( data.collisionWidth > outerWidth ) {

        // Element is initially over the left side of within
        if ( overLeft > 0 && overRight <= 0 ) {
          newOverRight = position.left + overLeft + data.collisionWidth - outerWidth -
            withinOffset;
          position.left += overLeft - newOverRight;

        // Element is initially over right side of within
        } else if ( overRight > 0 && overLeft <= 0 ) {
          position.left = withinOffset;

        // Element is initially over both left and right sides of within
        } else {
          if ( overLeft > overRight ) {
            position.left = withinOffset + outerWidth - data.collisionWidth;
          } else {
            position.left = withinOffset;
          }
        }

      // Too far left -> align with left edge
      } else if ( overLeft > 0 ) {
        position.left += overLeft;

      // Too far right -> align with right edge
      } else if ( overRight > 0 ) {
        position.left -= overRight;

      // Adjust based on position and margin
      } else {
        position.left = max( position.left - collisionPosLeft, position.left );
      }
    },
    top: function( position, data ) {
      var within = data.within,
        withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
        outerHeight = data.within.height,
        collisionPosTop = position.top - data.collisionPosition.marginTop,
        overTop = withinOffset - collisionPosTop,
        overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
        newOverBottom;

      // Element is taller than within
      if ( data.collisionHeight > outerHeight ) {

        // Element is initially over the top of within
        if ( overTop > 0 && overBottom <= 0 ) {
          newOverBottom = position.top + overTop + data.collisionHeight - outerHeight -
            withinOffset;
          position.top += overTop - newOverBottom;

        // Element is initially over bottom of within
        } else if ( overBottom > 0 && overTop <= 0 ) {
          position.top = withinOffset;

        // Element is initially over both top and bottom of within
        } else {
          if ( overTop > overBottom ) {
            position.top = withinOffset + outerHeight - data.collisionHeight;
          } else {
            position.top = withinOffset;
          }
        }

      // Too far up -> align with top
      } else if ( overTop > 0 ) {
        position.top += overTop;

      // Too far down -> align with bottom edge
      } else if ( overBottom > 0 ) {
        position.top -= overBottom;

      // Adjust based on position and margin
      } else {
        position.top = max( position.top - collisionPosTop, position.top );
      }
    }
  },
  flip: {
    left: function( position, data ) {
      var within = data.within,
        withinOffset = within.offset.left + within.scrollLeft,
        outerWidth = within.width,
        offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
        overLeft = collisionPosLeft - offsetLeft,
        overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
        myOffset = data.my[ 0 ] === "left" ?
          -data.elemWidth :
          data.my[ 0 ] === "right" ?
            data.elemWidth :
            0,
        atOffset = data.at[ 0 ] === "left" ?
          data.targetWidth :
          data.at[ 0 ] === "right" ?
            -data.targetWidth :
            0,
        offset = -2 * data.offset[ 0 ],
        newOverRight,
        newOverLeft;

      if ( overLeft < 0 ) {
        newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth -
          outerWidth - withinOffset;
        if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
          position.left += myOffset + atOffset + offset;
        }
      } else if ( overRight > 0 ) {
        newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset +
          atOffset + offset - offsetLeft;
        if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
          position.left += myOffset + atOffset + offset;
        }
      }
    },
    top: function( position, data ) {
      var within = data.within,
        withinOffset = within.offset.top + within.scrollTop,
        outerHeight = within.height,
        offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
        collisionPosTop = position.top - data.collisionPosition.marginTop,
        overTop = collisionPosTop - offsetTop,
        overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
        top = data.my[ 1 ] === "top",
        myOffset = top ?
          -data.elemHeight :
          data.my[ 1 ] === "bottom" ?
            data.elemHeight :
            0,
        atOffset = data.at[ 1 ] === "top" ?
          data.targetHeight :
          data.at[ 1 ] === "bottom" ?
            -data.targetHeight :
            0,
        offset = -2 * data.offset[ 1 ],
        newOverTop,
        newOverBottom;
      if ( overTop < 0 ) {
        newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight -
          outerHeight - withinOffset;
        if ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) {
          position.top += myOffset + atOffset + offset;
        }
      } else if ( overBottom > 0 ) {
        newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset +
          offset - offsetTop;
        if ( newOverTop > 0 || abs( newOverTop ) < overBottom ) {
          position.top += myOffset + atOffset + offset;
        }
      }
    }
  },
  flipfit: {
    left: function() {
      $.ui.position.flip.left.apply( this, arguments );
      $.ui.position.fit.left.apply( this, arguments );
    },
    top: function() {
      $.ui.position.flip.top.apply( this, arguments );
      $.ui.position.fit.top.apply( this, arguments );
    }
  }
};

} )();

var position = $.ui.position;


/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/


var keycode = $.ui.keyCode = {
  BACKSPACE: 8,
  COMMA: 188,
  DELETE: 46,
  DOWN: 40,
  END: 35,
  ENTER: 13,
  ESCAPE: 27,
  HOME: 36,
  LEFT: 37,
  PAGE_DOWN: 34,
  PAGE_UP: 33,
  PERIOD: 190,
  RIGHT: 39,
  SPACE: 32,
  TAB: 9,
  UP: 38
};


/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's
//>>docs: http://api.jqueryui.com/uniqueId/



var uniqueId = $.fn.extend( {
  uniqueId: ( function() {
    var uuid = 0;

    return function() {
      return this.each( function() {
        if ( !this.id ) {
          this.id = "ui-id-" + ( ++uuid );
        }
      } );
    };
  } )(),

  removeUniqueId: function() {
    return this.each( function() {
      if ( /^ui-id-\d+$/.test( this.id ) ) {
        $( this ).removeAttr( "id" );
      }
    } );
  }
} );



var safeActiveElement = $.ui.safeActiveElement = function( document ) {
  var activeElement;

  // Support: IE 9 only
  // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
  try {
    activeElement = document.activeElement;
  } catch ( error ) {
    activeElement = document.body;
  }

  // Support: IE 9 - 11 only
  // IE may return null instead of an element
  // Interestingly, this only seems to occur when NOT in an iframe
  if ( !activeElement ) {
    activeElement = document.body;
  }

  // Support: IE 11 only
  // IE11 returns a seemingly empty object in some cases when accessing
  // document.activeElement from an <iframe>
  if ( !activeElement.nodeName ) {
    activeElement = document.body;
  }

  return activeElement;
};


/*!
 * jQuery UI Menu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Menu
//>>group: Widgets
//>>description: Creates nestable menus.
//>>docs: http://api.jqueryui.com/menu/
//>>demos: http://jqueryui.com/menu/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/menu.css
//>>css.theme: ../../themes/base/theme.css



var widgetsMenu = $.widget( "ui.menu", {
  version: "1.12.1",
  defaultElement: "<ul>",
  delay: 300,
  options: {
    icons: {
      submenu: "ui-icon-caret-1-e"
    },
    items: "> *",
    menus: "ul",
    position: {
      my: "left top",
      at: "right top"
    },
    role: "menu",

    // Callbacks
    blur: null,
    focus: null,
    select: null
  },

  _create: function() {
    this.activeMenu = this.element;

    // Flag used to prevent firing of the click handler
    // as the event bubbles up through nested menus
    this.mouseHandled = false;
    this.element
      .uniqueId()
      .attr( {
        role: this.options.role,
        tabIndex: 0
      } );

    this._addClass( "ui-menu", "ui-widget ui-widget-content" );
    this._on( {

      // Prevent focus from sticking to links inside menu after clicking
      // them (focus should always stay on UL during navigation).
      "mousedown .ui-menu-item": function( event ) {
        event.preventDefault();
      },
      "click .ui-menu-item": function( event ) {
        var target = $( event.target );
        var active = $( $.ui.safeActiveElement( this.document[ 0 ] ) );
        if ( !this.mouseHandled && target.not( ".ui-state-disabled" ).length ) {
          this.select( event );

          // Only set the mouseHandled flag if the event will bubble, see #9469.
          if ( !event.isPropagationStopped() ) {
            this.mouseHandled = true;
          }

          // Open submenu on click
          if ( target.has( ".ui-menu" ).length ) {
            this.expand( event );
          } else if ( !this.element.is( ":focus" ) &&
              active.closest( ".ui-menu" ).length ) {

            // Redirect focus to the menu
            this.element.trigger( "focus", [ true ] );

            // If the active item is on the top level, let it stay active.
            // Otherwise, blur the active item since it is no longer visible.
            if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
              clearTimeout( this.timer );
            }
          }
        }
      },
      "mouseenter .ui-menu-item": function( event ) {

        // Ignore mouse events while typeahead is active, see #10458.
        // Prevents focusing the wrong item when typeahead causes a scroll while the mouse
        // is over an item in the menu
        if ( this.previousFilter ) {
          return;
        }

        var actualTarget = $( event.target ).closest( ".ui-menu-item" ),
          target = $( event.currentTarget );

        // Ignore bubbled events on parent items, see #11641
        if ( actualTarget[ 0 ] !== target[ 0 ] ) {
          return;
        }

        // Remove ui-state-active class from siblings of the newly focused menu item
        // to avoid a jump caused by adjacent elements both having a class with a border
        this._removeClass( target.siblings().children( ".ui-state-active" ),
          null, "ui-state-active" );
        this.focus( event, target );
      },
      mouseleave: "collapseAll",
      "mouseleave .ui-menu": "collapseAll",
      focus: function( event, keepActiveItem ) {

        // If there's already an active item, keep it active
        // If not, activate the first item
        var item = this.active || this.element.find( this.options.items ).eq( 0 );

        if ( !keepActiveItem ) {
          this.focus( event, item );
        }
      },
      blur: function( event ) {
        this._delay( function() {
          var notContained = !$.contains(
            this.element[ 0 ],
            $.ui.safeActiveElement( this.document[ 0 ] )
          );
          if ( notContained ) {
            this.collapseAll( event );
          }
        } );
      },
      keydown: "_keydown"
    } );

    this.refresh();

    // Clicks outside of a menu collapse any open menus
    this._on( this.document, {
      click: function( event ) {
        if ( this._closeOnDocumentClick( event ) ) {
          this.collapseAll( event );
        }

        // Reset the mouseHandled flag
        this.mouseHandled = false;
      }
    } );
  },

  _destroy: function() {
    var items = this.element.find( ".ui-menu-item" )
        .removeAttr( "role aria-disabled" ),
      submenus = items.children( ".ui-menu-item-wrapper" )
        .removeUniqueId()
        .removeAttr( "tabIndex role aria-haspopup" );

    // Destroy (sub)menus
    this.element
      .removeAttr( "aria-activedescendant" )
      .find( ".ui-menu" ).addBack()
        .removeAttr( "role aria-labelledby aria-expanded aria-hidden aria-disabled " +
          "tabIndex" )
        .removeUniqueId()
        .show();

    submenus.children().each( function() {
      var elem = $( this );
      if ( elem.data( "ui-menu-submenu-caret" ) ) {
        elem.remove();
      }
    } );
  },

  _keydown: function( event ) {
    var match, prev, character, skip,
      preventDefault = true;

    switch ( event.keyCode ) {
    case $.ui.keyCode.PAGE_UP:
      this.previousPage( event );
      break;
    case $.ui.keyCode.PAGE_DOWN:
      this.nextPage( event );
      break;
    case $.ui.keyCode.HOME:
      this._move( "first", "first", event );
      break;
    case $.ui.keyCode.END:
      this._move( "last", "last", event );
      break;
    case $.ui.keyCode.UP:
      this.previous( event );
      break;
    case $.ui.keyCode.DOWN:
      this.next( event );
      break;
    case $.ui.keyCode.LEFT:
      this.collapse( event );
      break;
    case $.ui.keyCode.RIGHT:
      if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
        this.expand( event );
      }
      break;
    case $.ui.keyCode.ENTER:
    case $.ui.keyCode.SPACE:
      this._activate( event );
      break;
    case $.ui.keyCode.ESCAPE:
      this.collapse( event );
      break;
    default:
      preventDefault = false;
      prev = this.previousFilter || "";
      skip = false;

      // Support number pad values
      character = event.keyCode >= 96 && event.keyCode <= 105 ?
        ( event.keyCode - 96 ).toString() : String.fromCharCode( event.keyCode );

      clearTimeout( this.filterTimer );

      if ( character === prev ) {
        skip = true;
      } else {
        character = prev + character;
      }

      match = this._filterMenuItems( character );
      match = skip && match.index( this.active.next() ) !== -1 ?
        this.active.nextAll( ".ui-menu-item" ) :
        match;

      // If no matches on the current filter, reset to the last character pressed
      // to move down the menu to the first item that starts with that character
      if ( !match.length ) {
        character = String.fromCharCode( event.keyCode );
        match = this._filterMenuItems( character );
      }

      if ( match.length ) {
        this.focus( event, match );
        this.previousFilter = character;
        this.filterTimer = this._delay( function() {
          delete this.previousFilter;
        }, 1000 );
      } else {
        delete this.previousFilter;
      }
    }

    if ( preventDefault ) {
      event.preventDefault();
    }
  },

  _activate: function( event ) {
    if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
      if ( this.active.children( "[aria-haspopup='true']" ).length ) {
        this.expand( event );
      } else {
        this.select( event );
      }
    }
  },

  refresh: function() {
    var menus, items, newSubmenus, newItems, newWrappers,
      that = this,
      icon = this.options.icons.submenu,
      submenus = this.element.find( this.options.menus );

    this._toggleClass( "ui-menu-icons", null, !!this.element.find( ".ui-icon" ).length );

    // Initialize nested menus
    newSubmenus = submenus.filter( ":not(.ui-menu)" )
      .hide()
      .attr( {
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      } )
      .each( function() {
        var menu = $( this ),
          item = menu.prev(),
          submenuCaret = $( "<span>" ).data( "ui-menu-submenu-caret", true );

        that._addClass( submenuCaret, "ui-menu-icon", "ui-icon " + icon );
        item
          .attr( "aria-haspopup", "true" )
          .prepend( submenuCaret );
        menu.attr( "aria-labelledby", item.attr( "id" ) );
      } );

    this._addClass( newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front" );

    menus = submenus.add( this.element );
    items = menus.find( this.options.items );

    // Initialize menu-items containing spaces and/or dashes only as dividers
    items.not( ".ui-menu-item" ).each( function() {
      var item = $( this );
      if ( that._isDivider( item ) ) {
        that._addClass( item, "ui-menu-divider", "ui-widget-content" );
      }
    } );

    // Don't refresh list items that are already adapted
    newItems = items.not( ".ui-menu-item, .ui-menu-divider" );
    newWrappers = newItems.children()
      .not( ".ui-menu" )
        .uniqueId()
        .attr( {
          tabIndex: -1,
          role: this._itemRole()
        } );
    this._addClass( newItems, "ui-menu-item" )
      ._addClass( newWrappers, "ui-menu-item-wrapper" );

    // Add aria-disabled attribute to any disabled menu item
    items.filter( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

    // If the active item has been removed, blur the menu
    if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
      this.blur();
    }
  },

  _itemRole: function() {
    return {
      menu: "menuitem",
      listbox: "option"
    }[ this.options.role ];
  },

  _setOption: function( key, value ) {
    if ( key === "icons" ) {
      var icons = this.element.find( ".ui-menu-icon" );
      this._removeClass( icons, null, this.options.icons.submenu )
        ._addClass( icons, null, value.submenu );
    }
    this._super( key, value );
  },

  _setOptionDisabled: function( value ) {
    this._super( value );

    this.element.attr( "aria-disabled", String( value ) );
    this._toggleClass( null, "ui-state-disabled", !!value );
  },

  focus: function( event, item ) {
    var nested, focused, activeParent;
    this.blur( event, event && event.type === "focus" );

    this._scrollIntoView( item );

    this.active = item.first();

    focused = this.active.children( ".ui-menu-item-wrapper" );
    this._addClass( focused, null, "ui-state-active" );

    // Only update aria-activedescendant if there's a role
    // otherwise we assume focus is managed elsewhere
    if ( this.options.role ) {
      this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
    }

    // Highlight active parent menu item, if any
    activeParent = this.active
      .parent()
        .closest( ".ui-menu-item" )
          .children( ".ui-menu-item-wrapper" );
    this._addClass( activeParent, null, "ui-state-active" );

    if ( event && event.type === "keydown" ) {
      this._close();
    } else {
      this.timer = this._delay( function() {
        this._close();
      }, this.delay );
    }

    nested = item.children( ".ui-menu" );
    if ( nested.length && event && ( /^mouse/.test( event.type ) ) ) {
      this._startOpening( nested );
    }
    this.activeMenu = item.parent();

    this._trigger( "focus", event, { item: item } );
  },

  _scrollIntoView: function( item ) {
    var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
    if ( this._hasScroll() ) {
      borderTop = parseFloat( $.css( this.activeMenu[ 0 ], "borderTopWidth" ) ) || 0;
      paddingTop = parseFloat( $.css( this.activeMenu[ 0 ], "paddingTop" ) ) || 0;
      offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
      scroll = this.activeMenu.scrollTop();
      elementHeight = this.activeMenu.height();
      itemHeight = item.outerHeight();

      if ( offset < 0 ) {
        this.activeMenu.scrollTop( scroll + offset );
      } else if ( offset + itemHeight > elementHeight ) {
        this.activeMenu.scrollTop( scroll + offset - elementHeight + itemHeight );
      }
    }
  },

  blur: function( event, fromFocus ) {
    if ( !fromFocus ) {
      clearTimeout( this.timer );
    }

    if ( !this.active ) {
      return;
    }

    this._removeClass( this.active.children( ".ui-menu-item-wrapper" ),
      null, "ui-state-active" );

    this._trigger( "blur", event, { item: this.active } );
    this.active = null;
  },

  _startOpening: function( submenu ) {
    clearTimeout( this.timer );

    // Don't open if already open fixes a Firefox bug that caused a .5 pixel
    // shift in the submenu position when mousing over the caret icon
    if ( submenu.attr( "aria-hidden" ) !== "true" ) {
      return;
    }

    this.timer = this._delay( function() {
      this._close();
      this._open( submenu );
    }, this.delay );
  },

  _open: function( submenu ) {
    var position = $.extend( {
      of: this.active
    }, this.options.position );

    clearTimeout( this.timer );
    this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
      .hide()
      .attr( "aria-hidden", "true" );

    submenu
      .show()
      .removeAttr( "aria-hidden" )
      .attr( "aria-expanded", "true" )
      .position( position );
  },

  collapseAll: function( event, all ) {
    clearTimeout( this.timer );
    this.timer = this._delay( function() {

      // If we were passed an event, look for the submenu that contains the event
      var currentMenu = all ? this.element :
        $( event && event.target ).closest( this.element.find( ".ui-menu" ) );

      // If we found no valid submenu ancestor, use the main menu to close all
      // sub menus anyway
      if ( !currentMenu.length ) {
        currentMenu = this.element;
      }

      this._close( currentMenu );

      this.blur( event );

      // Work around active item staying active after menu is blurred
      this._removeClass( currentMenu.find( ".ui-state-active" ), null, "ui-state-active" );

      this.activeMenu = currentMenu;
    }, this.delay );
  },

  // With no arguments, closes the currently active menu - if nothing is active
  // it closes all menus.  If passed an argument, it will search for menus BELOW
  _close: function( startMenu ) {
    if ( !startMenu ) {
      startMenu = this.active ? this.active.parent() : this.element;
    }

    startMenu.find( ".ui-menu" )
      .hide()
      .attr( "aria-hidden", "true" )
      .attr( "aria-expanded", "false" );
  },

  _closeOnDocumentClick: function( event ) {
    return !$( event.target ).closest( ".ui-menu" ).length;
  },

  _isDivider: function( item ) {

    // Match hyphen, em dash, en dash
    return !/[^\-\u2014\u2013\s]/.test( item.text() );
  },

  collapse: function( event ) {
    var newItem = this.active &&
      this.active.parent().closest( ".ui-menu-item", this.element );
    if ( newItem && newItem.length ) {
      this._close();
      this.focus( event, newItem );
    }
  },

  expand: function( event ) {
    var newItem = this.active &&
      this.active
        .children( ".ui-menu " )
          .find( this.options.items )
            .first();

    if ( newItem && newItem.length ) {
      this._open( newItem.parent() );

      // Delay so Firefox will not hide activedescendant change in expanding submenu from AT
      this._delay( function() {
        this.focus( event, newItem );
      } );
    }
  },

  next: function( event ) {
    this._move( "next", "first", event );
  },

  previous: function( event ) {
    this._move( "prev", "last", event );
  },

  isFirstItem: function() {
    return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
  },

  isLastItem: function() {
    return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
  },

  _move: function( direction, filter, event ) {
    var next;
    if ( this.active ) {
      if ( direction === "first" || direction === "last" ) {
        next = this.active
          [ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
          .eq( -1 );
      } else {
        next = this.active
          [ direction + "All" ]( ".ui-menu-item" )
          .eq( 0 );
      }
    }
    if ( !next || !next.length || !this.active ) {
      next = this.activeMenu.find( this.options.items )[ filter ]();
    }

    this.focus( event, next );
  },

  nextPage: function( event ) {
    var item, base, height;

    if ( !this.active ) {
      this.next( event );
      return;
    }
    if ( this.isLastItem() ) {
      return;
    }
    if ( this._hasScroll() ) {
      base = this.active.offset().top;
      height = this.element.height();
      this.active.nextAll( ".ui-menu-item" ).each( function() {
        item = $( this );
        return item.offset().top - base - height < 0;
      } );

      this.focus( event, item );
    } else {
      this.focus( event, this.activeMenu.find( this.options.items )
        [ !this.active ? "first" : "last" ]() );
    }
  },

  previousPage: function( event ) {
    var item, base, height;
    if ( !this.active ) {
      this.next( event );
      return;
    }
    if ( this.isFirstItem() ) {
      return;
    }
    if ( this._hasScroll() ) {
      base = this.active.offset().top;
      height = this.element.height();
      this.active.prevAll( ".ui-menu-item" ).each( function() {
        item = $( this );
        return item.offset().top - base + height > 0;
      } );

      this.focus( event, item );
    } else {
      this.focus( event, this.activeMenu.find( this.options.items ).first() );
    }
  },

  _hasScroll: function() {
    return this.element.outerHeight() < this.element.prop( "scrollHeight" );
  },

  select: function( event ) {

    // TODO: It should never be possible to not have an active item at this
    // point, but the tests don't trigger mouseenter before click.
    this.active = this.active || $( event.target ).closest( ".ui-menu-item" );
    var ui = { item: this.active };
    if ( !this.active.has( ".ui-menu" ).length ) {
      this.collapseAll( event, true );
    }
    this._trigger( "select", event, ui );
  },

  _filterMenuItems: function( character ) {
    var escapedCharacter = character.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" ),
      regex = new RegExp( "^" + escapedCharacter, "i" );

    return this.activeMenu
      .find( this.options.items )

        // Only match on items, not dividers or other content (#10571)
        .filter( ".ui-menu-item" )
          .filter( function() {
            return regex.test(
              $.trim( $( this ).children( ".ui-menu-item-wrapper" ).text() ) );
          } );
  }
} );


/*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Autocomplete
//>>group: Widgets
//>>description: Lists suggested words as the user is typing.
//>>docs: http://api.jqueryui.com/autocomplete/
//>>demos: http://jqueryui.com/autocomplete/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/autocomplete.css
//>>css.theme: ../../themes/base/theme.css



$.widget( "ui.autocomplete", {
  version: "1.12.1",
  defaultElement: "<input>",
  options: {
    appendTo: null,
    autoFocus: false,
    delay: 300,
    minLength: 1,
    position: {
      my: "left top",
      at: "left bottom",
      collision: "none"
    },
    source: null,

    // Callbacks
    change: null,
    close: null,
    focus: null,
    open: null,
    response: null,
    search: null,
    select: null
  },

  requestIndex: 0,
  pending: 0,

  _create: function() {

    // Some browsers only repeat keydown events, not keypress events,
    // so we use the suppressKeyPress flag to determine if we've already
    // handled the keydown event. #7269
    // Unfortunately the code for & in keypress is the same as the up arrow,
    // so we use the suppressKeyPressRepeat flag to avoid handling keypress
    // events when we know the keydown event was used to modify the
    // search term. #7799
    var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
      nodeName = this.element[ 0 ].nodeName.toLowerCase(),
      isTextarea = nodeName === "textarea",
      isInput = nodeName === "input";

    // Textareas are always multi-line
    // Inputs are always single-line, even if inside a contentEditable element
    // IE also treats inputs as contentEditable
    // All other element types are determined by whether or not they're contentEditable
    this.isMultiLine = isTextarea || !isInput && this._isContentEditable( this.element );

    this.valueMethod = this.element[ isTextarea || isInput ? "val" : "text" ];
    this.isNewMenu = true;

    this._addClass( "ui-autocomplete-input" );
    this.element.attr( "autocomplete", "off" );

    this._on( this.element, {
      keydown: function( event ) {
        if ( this.element.prop( "readOnly" ) ) {
          suppressKeyPress = true;
          suppressInput = true;
          suppressKeyPressRepeat = true;
          return;
        }

        suppressKeyPress = false;
        suppressInput = false;
        suppressKeyPressRepeat = false;
        var keyCode = $.ui.keyCode;
        switch ( event.keyCode ) {
        case keyCode.PAGE_UP:
          suppressKeyPress = true;
          this._move( "previousPage", event );
          break;
        case keyCode.PAGE_DOWN:
          suppressKeyPress = true;
          this._move( "nextPage", event );
          break;
        case keyCode.UP:
          suppressKeyPress = true;
          this._keyEvent( "previous", event );
          break;
        case keyCode.DOWN:
          suppressKeyPress = true;
          this._keyEvent( "next", event );
          break;
        case keyCode.ENTER:

          // when menu is open and has focus
          if ( this.menu.active ) {

            // #6055 - Opera still allows the keypress to occur
            // which causes forms to submit
            suppressKeyPress = true;
            event.preventDefault();
            this.menu.select( event );
          }
          break;
        case keyCode.TAB:
          if ( this.menu.active ) {
            this.menu.select( event );
          }
          break;
        case keyCode.ESCAPE:
          if ( this.menu.element.is( ":visible" ) ) {
            if ( !this.isMultiLine ) {
              this._value( this.term );
            }
            this.close( event );

            // Different browsers have different default behavior for escape
            // Single press can mean undo or clear
            // Double press in IE means clear the whole form
            event.preventDefault();
          }
          break;
        default:
          suppressKeyPressRepeat = true;

          // search timeout should be triggered before the input value is changed
          this._searchTimeout( event );
          break;
        }
      },
      keypress: function( event ) {
        if ( suppressKeyPress ) {
          suppressKeyPress = false;
          if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
            event.preventDefault();
          }
          return;
        }
        if ( suppressKeyPressRepeat ) {
          return;
        }

        // Replicate some key handlers to allow them to repeat in Firefox and Opera
        var keyCode = $.ui.keyCode;
        switch ( event.keyCode ) {
        case keyCode.PAGE_UP:
          this._move( "previousPage", event );
          break;
        case keyCode.PAGE_DOWN:
          this._move( "nextPage", event );
          break;
        case keyCode.UP:
          this._keyEvent( "previous", event );
          break;
        case keyCode.DOWN:
          this._keyEvent( "next", event );
          break;
        }
      },
      input: function( event ) {
        if ( suppressInput ) {
          suppressInput = false;
          event.preventDefault();
          return;
        }
        this._searchTimeout( event );
      },
      focus: function() {
        this.selectedItem = null;
        this.previous = this._value();
      },
      blur: function( event ) {
        if ( this.cancelBlur ) {
          delete this.cancelBlur;
          return;
        }

        clearTimeout( this.searching );
        this.close( event );
        this._change( event );
      }
    } );

    this._initSource();
    this.menu = $( "<ul>" )
      .appendTo( this._appendTo() )
      .menu( {

        // disable ARIA support, the live region takes care of that
        role: null
      } )
      .hide()
      .menu( "instance" );

    this._addClass( this.menu.element, "ui-autocomplete", "ui-front" );
    this._on( this.menu.element, {
      mousedown: function( event ) {

        // prevent moving focus out of the text field
        event.preventDefault();

        // IE doesn't prevent moving focus even with event.preventDefault()
        // so we set a flag to know when we should ignore the blur event
        this.cancelBlur = true;
        this._delay( function() {
          delete this.cancelBlur;

          // Support: IE 8 only
          // Right clicking a menu item or selecting text from the menu items will
          // result in focus moving out of the input. However, we've already received
          // and ignored the blur event because of the cancelBlur flag set above. So
          // we restore focus to ensure that the menu closes properly based on the user's
          // next actions.
          if ( this.element[ 0 ] !== $.ui.safeActiveElement( this.document[ 0 ] ) ) {
            this.element.trigger( "focus" );
          }
        } );
      },
      menufocus: function( event, ui ) {
        var label, item;

        // support: Firefox
        // Prevent accidental activation of menu items in Firefox (#7024 #9118)
        if ( this.isNewMenu ) {
          this.isNewMenu = false;
          if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
            this.menu.blur();

            this.document.one( "mousemove", function() {
              $( event.target ).trigger( event.originalEvent );
            } );

            return;
          }
        }

        item = ui.item.data( "ui-autocomplete-item" );
        if ( false !== this._trigger( "focus", event, { item: item } ) ) {

          // use value to match what will end up in the input, if it was a key event
          if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
            this._value( item.value );
          }
        }

        // Announce the value in the liveRegion
        label = ui.item.attr( "aria-label" ) || item.value;
        if ( label && $.trim( label ).length ) {
          this.liveRegion.children().hide();
          $( "<div>" ).text( label ).appendTo( this.liveRegion );
        }
      },
      menuselect: function( event, ui ) {
        var item = ui.item.data( "ui-autocomplete-item" ),
          previous = this.previous;

        // Only trigger when focus was lost (click on menu)
        if ( this.element[ 0 ] !== $.ui.safeActiveElement( this.document[ 0 ] ) ) {
          this.element.trigger( "focus" );
          this.previous = previous;

          // #6109 - IE triggers two focus events and the second
          // is asynchronous, so we need to reset the previous
          // term synchronously and asynchronously :-(
          this._delay( function() {
            this.previous = previous;
            this.selectedItem = item;
          } );
        }

        if ( false !== this._trigger( "select", event, { item: item } ) ) {
          this._value( item.value );
        }

        // reset the term after the select event
        // this allows custom select handling to work properly
        this.term = this._value();

        this.close( event );
        this.selectedItem = item;
      }
    } );

    this.liveRegion = $( "<div>", {
      role: "status",
      "aria-live": "assertive",
      "aria-relevant": "additions"
    } )
      .appendTo( this.document[ 0 ].body );

    this._addClass( this.liveRegion, null, "ui-helper-hidden-accessible" );

    // Turning off autocomplete prevents the browser from remembering the
    // value when navigating through history, so we re-enable autocomplete
    // if the page is unloaded before the widget is destroyed. #7790
    this._on( this.window, {
      beforeunload: function() {
        this.element.removeAttr( "autocomplete" );
      }
    } );
  },

  _destroy: function() {
    clearTimeout( this.searching );
    this.element.removeAttr( "autocomplete" );
    this.menu.element.remove();
    this.liveRegion.remove();
  },

  _setOption: function( key, value ) {
    this._super( key, value );
    if ( key === "source" ) {
      this._initSource();
    }
    if ( key === "appendTo" ) {
      this.menu.element.appendTo( this._appendTo() );
    }
    if ( key === "disabled" && value && this.xhr ) {
      this.xhr.abort();
    }
  },

  _isEventTargetInWidget: function( event ) {
    var menuElement = this.menu.element[ 0 ];

    return event.target === this.element[ 0 ] ||
      event.target === menuElement ||
      $.contains( menuElement, event.target );
  },

  _closeOnClickOutside: function( event ) {
    if ( !this._isEventTargetInWidget( event ) ) {
      this.close();
    }
  },

  _appendTo: function() {
    var element = this.options.appendTo;

    if ( element ) {
      element = element.jquery || element.nodeType ?
        $( element ) :
        this.document.find( element ).eq( 0 );
    }

    if ( !element || !element[ 0 ] ) {
      element = this.element.closest( ".ui-front, dialog" );
    }

    if ( !element.length ) {
      element = this.document[ 0 ].body;
    }

    return element;
  },

  _initSource: function() {
    var array, url,
      that = this;
    if ( $.isArray( this.options.source ) ) {
      array = this.options.source;
      this.source = function( request, response ) {
        response( $.ui.autocomplete.filter( array, request.term ) );
      };
    } else if ( typeof this.options.source === "string" ) {
      url = this.options.source;
      this.source = function( request, response ) {
        if ( that.xhr ) {
          that.xhr.abort();
        }
        that.xhr = $.ajax( {
          url: url,
          data: request,
          dataType: "json",
          success: function( data ) {
            response( data );
          },
          error: function() {
            response( [] );
          }
        } );
      };
    } else {
      this.source = this.options.source;
    }
  },

  _searchTimeout: function( event ) {
    clearTimeout( this.searching );
    this.searching = this._delay( function() {

      // Search if the value has changed, or if the user retypes the same value (see #7434)
      var equalValues = this.term === this._value(),
        menuVisible = this.menu.element.is( ":visible" ),
        modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;

      if ( !equalValues || ( equalValues && !menuVisible && !modifierKey ) ) {
        this.selectedItem = null;
        this.search( null, event );
      }
    }, this.options.delay );
  },

  search: function( value, event ) {
    value = value != null ? value : this._value();

    // Always save the actual value, not the one passed as an argument
    this.term = this._value();

    if ( value.length < this.options.minLength ) {
      return this.close( event );
    }

    if ( this._trigger( "search", event ) === false ) {
      return;
    }

    return this._search( value );
  },

  _search: function( value ) {
    this.pending++;
    this._addClass( "ui-autocomplete-loading" );
    this.cancelSearch = false;

    this.source( { term: value }, this._response() );
  },

  _response: function() {
    var index = ++this.requestIndex;

    return $.proxy( function( content ) {
      if ( index === this.requestIndex ) {
        this.__response( content );
      }

      this.pending--;
      if ( !this.pending ) {
        this._removeClass( "ui-autocomplete-loading" );
      }
    }, this );
  },

  __response: function( content ) {
    if ( content ) {
      content = this._normalize( content );
    }
    this._trigger( "response", null, { content: content } );
    if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
      this._suggest( content );
      this._trigger( "open" );
    } else {

      // use ._close() instead of .close() so we don't cancel future searches
      this._close();
    }
  },

  close: function( event ) {
    this.cancelSearch = true;
    this._close( event );
  },

  _close: function( event ) {

    // Remove the handler that closes the menu on outside clicks
    this._off( this.document, "mousedown" );

    if ( this.menu.element.is( ":visible" ) ) {
      this.menu.element.hide();
      this.menu.blur();
      this.isNewMenu = true;
      this._trigger( "close", event );
    }
  },

  _change: function( event ) {
    if ( this.previous !== this._value() ) {
      this._trigger( "change", event, { item: this.selectedItem } );
    }
  },

  _normalize: function( items ) {

    // assume all items have the right format when the first item is complete
    if ( items.length && items[ 0 ].label && items[ 0 ].value ) {
      return items;
    }
    return $.map( items, function( item ) {
      if ( typeof item === "string" ) {
        return {
          label: item,
          value: item
        };
      }
      return $.extend( {}, item, {
        label: item.label || item.value,
        value: item.value || item.label
      } );
    } );
  },

  _suggest: function( items ) {
    var ul = this.menu.element.empty();
    this._renderMenu( ul, items );
    this.isNewMenu = true;
    this.menu.refresh();

    // Size and position menu
    ul.show();
    this._resizeMenu();
    ul.position( $.extend( {
      of: this.element
    }, this.options.position ) );

    if ( this.options.autoFocus ) {
      this.menu.next();
    }

    // Listen for interactions outside of the widget (#6642)
    this._on( this.document, {
      mousedown: "_closeOnClickOutside"
    } );
  },

  _resizeMenu: function() {
    var ul = this.menu.element;
    ul.outerWidth( Math.max(

      // Firefox wraps long text (possibly a rounding bug)
      // so we add 1px to avoid the wrapping (#7513)
      ul.width( "" ).outerWidth() + 1,
      this.element.outerWidth()
    ) );
  },

  _renderMenu: function( ul, items ) {
    var that = this;
    $.each( items, function( index, item ) {
      that._renderItemData( ul, item );
    } );
  },

  _renderItemData: function( ul, item ) {
    return this._renderItem( ul, item ).data( "ui-autocomplete-item", item );
  },

  _renderItem: function( ul, item ) {
    return $( "<li>" )
      .append( $( "<div>" ).text( item.label ) )
      .appendTo( ul );
  },

  _move: function( direction, event ) {
    if ( !this.menu.element.is( ":visible" ) ) {
      this.search( null, event );
      return;
    }
    if ( this.menu.isFirstItem() && /^previous/.test( direction ) ||
        this.menu.isLastItem() && /^next/.test( direction ) ) {

      if ( !this.isMultiLine ) {
        this._value( this.term );
      }

      this.menu.blur();
      return;
    }
    this.menu[ direction ]( event );
  },

  widget: function() {
    return this.menu.element;
  },

  _value: function() {
    return this.valueMethod.apply( this.element, arguments );
  },

  _keyEvent: function( keyEvent, event ) {
    if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
      this._move( keyEvent, event );

      // Prevents moving cursor to beginning/end of the text field in some browsers
      event.preventDefault();
    }
  },

  // Support: Chrome <=50
  // We should be able to just use this.element.prop( "isContentEditable" )
  // but hidden elements always report false in Chrome.
  // https://code.google.com/p/chromium/issues/detail?id=313082
  _isContentEditable: function( element ) {
    if ( !element.length ) {
      return false;
    }

    var editable = element.prop( "contentEditable" );

    if ( editable === "inherit" ) {
      return this._isContentEditable( element.parent() );
    }

    return editable === "true";
  }
} );

$.extend( $.ui.autocomplete, {
  escapeRegex: function( value ) {
    return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
  },
  filter: function( array, term ) {
    var matcher = new RegExp( $.ui.autocomplete.escapeRegex( term ), "i" );
    return $.grep( array, function( value ) {
      return matcher.test( value.label || value.value || value );
    } );
  }
} );

// Live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
$.widget( "ui.autocomplete", $.ui.autocomplete, {
  options: {
    messages: {
      noResults: "No search results.",
      results: function( amount ) {
        return amount + ( amount > 1 ? " results are" : " result is" ) +
          " available, use up and down arrow keys to navigate.";
      }
    }
  },

  __response: function( content ) {
    var message;
    this._superApply( arguments );
    if ( this.options.disabled || this.cancelSearch ) {
      return;
    }
    if ( content && content.length ) {
      message = this.options.messages.results( content.length );
    } else {
      message = this.options.messages.noResults;
    }
    this.liveRegion.children().hide();
    $( "<div>" ).text( message ).appendTo( this.liveRegion );
  }
} );

var widgetsAutocomplete = $.ui.autocomplete;




}));
/*!
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery throttle / debounce: Sometimes, less is more!
//
// *Version: 1.1, Last updated: 3/7/2010*
//
// Project Home - http://benalman.com/projects/jquery-throttle-debounce-plugin/
// GitHub       - http://github.com/cowboy/jquery-throttle-debounce/
// Source       - http://github.com/cowboy/jquery-throttle-debounce/raw/master/jquery.ba-throttle-debounce.js
// (Minified)   - http://github.com/cowboy/jquery-throttle-debounce/raw/master/jquery.ba-throttle-debounce.min.js (0.7kb)
//
// About: License
//
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
//
// About: Examples
//
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
//
// Throttle - http://benalman.com/code/projects/jquery-throttle-debounce/examples/throttle/
// Debounce - http://benalman.com/code/projects/jquery-throttle-debounce/examples/debounce/
//
// About: Support and Testing
//
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
//
// jQuery Versions - none, 1.3.2, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome 4-5, Opera 9.6-10.1.
// Unit Tests      - http://benalman.com/code/projects/jquery-throttle-debounce/unit/
//
// About: Release History
//
// 1.1 - (3/7/2010) Fixed a bug in <jQuery.throttle> where trailing callbacks
//       executed later than they should. Reworked a fair amount of internal
//       logic as well.
// 1.0 - (3/6/2010) Initial release as a stand-alone project. Migrated over
//       from jquery-misc repo v0.4 to jquery-throttle repo v1.0, added the
//       no_trailing throttle parameter and debounce functionality.
//
// Topic: Note for non-jQuery users
//
// jQuery isn't actually required for this plugin, because nothing internal
// uses any jQuery methods or properties. jQuery is just used as a namespace
// under which these methods can exist.
//
// Since jQuery isn't actually required for this plugin, if jQuery doesn't exist
// when this plugin is loaded, the method described below will be created in
// the `Cowboy` namespace. Usage will be exactly the same, but instead of
// $.method() or jQuery.method(), you'll need to use Cowboy.method().

(function(window,undefined){
  '$:nomunge'; // Used by YUI compressor.

  // Since jQuery really isn't required for this plugin, use `jQuery` as the
  // namespace only if it already exists, otherwise use the `Cowboy` namespace,
  // creating it if necessary.
  var $ = window.jQuery || window.Cowboy || ( window.Cowboy = {} ),

    // Internal method reference.
    jq_throttle;

  // Method: jQuery.throttle
  //
  // Throttle execution of a function. Especially useful for rate limiting
  // execution of handlers on events like resize and scroll. If you want to
  // rate-limit execution of a function to a single time, see the
  // <jQuery.debounce> method.
  //
  // In this visualization, | is a throttled-function call and X is the actual
  // callback execution:
  //
  // > Throttled with `no_trailing` specified as false or unspecified:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // > X    X    X    X    X    X        X    X    X    X    X    X
  // >
  // > Throttled with `no_trailing` specified as true:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // > X    X    X    X    X             X    X    X    X    X
  //
  // Usage:
  //
  // > var throttled = jQuery.throttle( delay, [ no_trailing, ] callback );
  // >
  // > jQuery('selector').bind( 'someevent', throttled );
  // > jQuery('selector').unbind( 'someevent', throttled );
  //
  // This also works in jQuery 1.4+:
  //
  // > jQuery('selector').bind( 'someevent', jQuery.throttle( delay, [ no_trailing, ] callback ) );
  // > jQuery('selector').unbind( 'someevent', callback );
  //
  // Arguments:
  //
  //  delay - (Number) A zero-or-greater delay in milliseconds. For event
  //    callbacks, values around 100 or 250 (or even higher) are most useful.
  //  no_trailing - (Boolean) Optional, defaults to false. If no_trailing is
  //    true, callback will only execute every `delay` milliseconds while the
  //    throttled-function is being called. If no_trailing is false or
  //    unspecified, callback will be executed one final time after the last
  //    throttled-function call. (After the throttled-function has not been
  //    called for `delay` milliseconds, the internal counter is reset)
  //  callback - (Function) A function to be executed after delay milliseconds.
  //    The `this` context and all arguments are passed through, as-is, to
  //    `callback` when the throttled-function is executed.
  //
  // Returns:
  //
  //  (Function) A new, throttled, function.

  $.throttle = jq_throttle = function( delay, no_trailing, callback, debounce_mode ) {
    // After wrapper has stopped being called, this timeout ensures that
    // `callback` is executed at the proper times in `throttle` and `end`
    // debounce modes.
    var timeout_id,

      // Keep track of the last time `callback` was executed.
      last_exec = 0;

    // `no_trailing` defaults to falsy.
    if ( typeof no_trailing !== 'boolean' ) {
      debounce_mode = callback;
      callback = no_trailing;
      no_trailing = undefined;
    }

    // The `wrapper` function encapsulates all of the throttling / debouncing
    // functionality and when executed will limit the rate at which `callback`
    // is executed.
    function wrapper() {
      var that = this,
        elapsed = +new Date() - last_exec,
        args = arguments;

      // Execute `callback` and update the `last_exec` timestamp.
      function exec() {
        last_exec = +new Date();
        callback.apply( that, args );
      };

      // If `debounce_mode` is true (at_begin) this is used to clear the flag
      // to allow future `callback` executions.
      function clear() {
        timeout_id = undefined;
      };

      if ( debounce_mode && !timeout_id ) {
        // Since `wrapper` is being called for the first time and
        // `debounce_mode` is true (at_begin), execute `callback`.
        exec();
      }

      // Clear any existing timeout.
      timeout_id && clearTimeout( timeout_id );

      if ( debounce_mode === undefined && elapsed > delay ) {
        // In throttle mode, if `delay` time has been exceeded, execute
        // `callback`.
        exec();

      } else if ( no_trailing !== true ) {
        // In trailing throttle mode, since `delay` time has not been
        // exceeded, schedule `callback` to execute `delay` ms after most
        // recent execution.
        //
        // If `debounce_mode` is true (at_begin), schedule `clear` to execute
        // after `delay` ms.
        //
        // If `debounce_mode` is false (at end), schedule `callback` to
        // execute after `delay` ms.
        timeout_id = setTimeout( debounce_mode ? clear : exec, debounce_mode === undefined ? delay - elapsed : delay );
      }
    };

    // Set the guid of `wrapper` function to the same of original callback, so
    // it can be removed in jQuery 1.4+ .unbind or .die by using the original
    // callback as a reference.
    if ( $.guid ) {
      wrapper.guid = callback.guid = callback.guid || $.guid++;
    }

    // Return the wrapper function.
    return wrapper;
  };

  // Method: jQuery.debounce
  //
  // Debounce execution of a function. Debouncing, unlike throttling,
  // guarantees that a function is only executed a single time, either at the
  // very beginning of a series of calls, or at the very end. If you want to
  // simply rate-limit execution of a function, see the <jQuery.throttle>
  // method.
  //
  // In this visualization, | is a debounced-function call and X is the actual
  // callback execution:
  //
  // > Debounced with `at_begin` specified as false or unspecified:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // >                          X                                 X
  // >
  // > Debounced with `at_begin` specified as true:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // > X                                 X
  //
  // Usage:
  //
  // > var debounced = jQuery.debounce( delay, [ at_begin, ] callback );
  // >
  // > jQuery('selector').bind( 'someevent', debounced );
  // > jQuery('selector').unbind( 'someevent', debounced );
  //
  // This also works in jQuery 1.4+:
  //
  // > jQuery('selector').bind( 'someevent', jQuery.debounce( delay, [ at_begin, ] callback ) );
  // > jQuery('selector').unbind( 'someevent', callback );
  //
  // Arguments:
  //
  //  delay - (Number) A zero-or-greater delay in milliseconds. For event
  //    callbacks, values around 100 or 250 (or even higher) are most useful.
  //  at_begin - (Boolean) Optional, defaults to false. If at_begin is false or
  //    unspecified, callback will only be executed `delay` milliseconds after
  //    the last debounced-function call. If at_begin is true, callback will be
  //    executed only at the first debounced-function call. (After the
  //    throttled-function has not been called for `delay` milliseconds, the
  //    internal counter is reset)
  //  callback - (Function) A function to be executed after delay milliseconds.
  //    The `this` context and all arguments are passed through, as-is, to
  //    `callback` when the debounced-function is executed.
  //
  // Returns:
  //
  //  (Function) A new, debounced, function.

  $.debounce = function( delay, at_begin, callback ) {
    return callback === undefined
      ? jq_throttle( delay, at_begin, false )
      : jq_throttle( delay, callback, at_begin !== false );
  };

})(this);
/*! version : 4.17.47
 =========================================================
 bootstrap-datetimejs
 https://github.com/Eonasdan/bootstrap-datetimepicker
 Copyright (c) 2015 Jonathan Peterson
 =========================================================
 */
/*
 The MIT License (MIT)

 Copyright (c) 2015 Jonathan Peterson

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
/*global define:false */
/*global exports:false */
/*global require:false */
/*global jQuery:false */
/*global moment:false */
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD is used - Register as an anonymous module.
        define(['jquery', 'moment'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'), require('moment'));
    } else {
        // Neither AMD nor CommonJS used. Use global variables.
        if (typeof jQuery === 'undefined') {
            throw 'bootstrap-datetimepicker requires jQuery to be loaded first';
        }
        if (typeof moment === 'undefined') {
            throw 'bootstrap-datetimepicker requires Moment.js to be loaded first';
        }
        factory(jQuery, moment);
    }
}(function ($, moment) {
    'use strict';
    if (!moment) {
        throw new Error('bootstrap-datetimepicker requires Moment.js to be loaded first');
    }

    var dateTimePicker = function (element, options) {
        var picker = {},
            date,
            viewDate,
            unset = true,
            input,
            component = false,
            widget = false,
            use24Hours,
            minViewModeNumber = 0,
            actualFormat,
            parseFormats,
            currentViewMode,
            datePickerModes = [
                {
                    clsName: 'days',
                    navFnc: 'M',
                    navStep: 1
                },
                {
                    clsName: 'months',
                    navFnc: 'y',
                    navStep: 1
                },
                {
                    clsName: 'years',
                    navFnc: 'y',
                    navStep: 10
                },
                {
                    clsName: 'decades',
                    navFnc: 'y',
                    navStep: 100
                }
            ],
            viewModes = ['days', 'months', 'years', 'decades'],
            verticalModes = ['top', 'bottom', 'auto'],
            horizontalModes = ['left', 'right', 'auto'],
            toolbarPlacements = ['default', 'top', 'bottom'],
            keyMap = {
                'up': 38,
                38: 'up',
                'down': 40,
                40: 'down',
                'left': 37,
                37: 'left',
                'right': 39,
                39: 'right',
                'tab': 9,
                9: 'tab',
                'escape': 27,
                27: 'escape',
                'enter': 13,
                13: 'enter',
                'pageUp': 33,
                33: 'pageUp',
                'pageDown': 34,
                34: 'pageDown',
                'shift': 16,
                16: 'shift',
                'control': 17,
                17: 'control',
                'space': 32,
                32: 'space',
                't': 84,
                84: 't',
                'delete': 46,
                46: 'delete'
            },
            keyState = {},

            /********************************************************************************
             *
             * Private functions
             *
             ********************************************************************************/

            hasTimeZone = function () {
                return moment.tz !== undefined && options.timeZone !== undefined && options.timeZone !== null && options.timeZone !== '';
            },

            getMoment = function (d) {
                var returnMoment;

                if (d === undefined || d === null) {
                    returnMoment = moment(); //TODO should this use format? and locale?
                } else if (moment.isDate(d) || moment.isMoment(d)) {
                    // If the date that is passed in is already a Date() or moment() object,
                    // pass it directly to moment.
                    returnMoment = moment(d);
                } else if (hasTimeZone()) { // There is a string to parse and a default time zone
                    // parse with the tz function which takes a default time zone if it is not in the format string
                    returnMoment = moment.tz(d, parseFormats, options.useStrict, options.timeZone);
                } else {
                    returnMoment = moment(d, parseFormats, options.useStrict);
                }

                if (hasTimeZone()) {
                    returnMoment.tz(options.timeZone);
                }

                return returnMoment;
            },

            isEnabled = function (granularity) {
                if (typeof granularity !== 'string' || granularity.length > 1) {
                    throw new TypeError('isEnabled expects a single character string parameter');
                }
                switch (granularity) {
                    case 'y':
                        return actualFormat.indexOf('Y') !== -1;
                    case 'M':
                        return actualFormat.indexOf('M') !== -1;
                    case 'd':
                        return actualFormat.toLowerCase().indexOf('d') !== -1;
                    case 'h':
                    case 'H':
                        return actualFormat.toLowerCase().indexOf('h') !== -1;
                    case 'm':
                        return actualFormat.indexOf('m') !== -1;
                    case 's':
                        return actualFormat.indexOf('s') !== -1;
                    default:
                        return false;
                }
            },

            hasTime = function () {
                return (isEnabled('h') || isEnabled('m') || isEnabled('s'));
            },

            hasDate = function () {
                return (isEnabled('y') || isEnabled('M') || isEnabled('d'));
            },

            getDatePickerTemplate = function () {
                var headTemplate = $('<thead>')
                        .append($('<tr>')
                            .append($('<th>').addClass('prev').attr('data-action', 'previous')
                                .append($('<span>').addClass(options.icons.previous))
                                )
                            .append($('<th>').addClass('picker-switch').attr('data-action', 'pickerSwitch').attr('colspan', (options.calendarWeeks ? '6' : '5')))
                            .append($('<th>').addClass('next').attr('data-action', 'next')
                                .append($('<span>').addClass(options.icons.next))
                                )
                            ),
                    contTemplate = $('<tbody>')
                        .append($('<tr>')
                            .append($('<td>').attr('colspan', (options.calendarWeeks ? '8' : '7')))
                            );

                return [
                    $('<div>').addClass('datepicker-days')
                        .append($('<table>').addClass('table-condensed')
                            .append(headTemplate)
                            .append($('<tbody>'))
                            ),
                    $('<div>').addClass('datepicker-months')
                        .append($('<table>').addClass('table-condensed')
                            .append(headTemplate.clone())
                            .append(contTemplate.clone())
                            ),
                    $('<div>').addClass('datepicker-years')
                        .append($('<table>').addClass('table-condensed')
                            .append(headTemplate.clone())
                            .append(contTemplate.clone())
                            ),
                    $('<div>').addClass('datepicker-decades')
                        .append($('<table>').addClass('table-condensed')
                            .append(headTemplate.clone())
                            .append(contTemplate.clone())
                            )
                ];
            },

            getTimePickerMainTemplate = function () {
                var topRow = $('<tr>'),
                    middleRow = $('<tr>'),
                    bottomRow = $('<tr>');

                if (isEnabled('h')) {
                    topRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.incrementHour }).addClass('btn').attr('data-action', 'incrementHours').append($('<span>').addClass(options.icons.up))));
                    middleRow.append($('<td>')
                        .append($('<span>').addClass('timepicker-hour').attr({ 'data-time-component': 'hours', 'title': options.tooltips.pickHour }).attr('data-action', 'showHours')));
                    bottomRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.decrementHour }).addClass('btn').attr('data-action', 'decrementHours').append($('<span>').addClass(options.icons.down))));
                }
                if (isEnabled('m')) {
                    if (isEnabled('h')) {
                        topRow.append($('<td>').addClass('separator'));
                        middleRow.append($('<td>').addClass('separator').html(':'));
                        bottomRow.append($('<td>').addClass('separator'));
                    }
                    topRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.incrementMinute }).addClass('btn').attr('data-action', 'incrementMinutes')
                            .append($('<span>').addClass(options.icons.up))));
                    middleRow.append($('<td>')
                        .append($('<span>').addClass('timepicker-minute').attr({ 'data-time-component': 'minutes', 'title': options.tooltips.pickMinute }).attr('data-action', 'showMinutes')));
                    bottomRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.decrementMinute }).addClass('btn').attr('data-action', 'decrementMinutes')
                            .append($('<span>').addClass(options.icons.down))));
                }
                if (isEnabled('s')) {
                    if (isEnabled('m')) {
                        topRow.append($('<td>').addClass('separator'));
                        middleRow.append($('<td>').addClass('separator').html(':'));
                        bottomRow.append($('<td>').addClass('separator'));
                    }
                    topRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.incrementSecond }).addClass('btn').attr('data-action', 'incrementSeconds')
                            .append($('<span>').addClass(options.icons.up))));
                    middleRow.append($('<td>')
                        .append($('<span>').addClass('timepicker-second').attr({ 'data-time-component': 'seconds', 'title': options.tooltips.pickSecond }).attr('data-action', 'showSeconds')));
                    bottomRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.decrementSecond }).addClass('btn').attr('data-action', 'decrementSeconds')
                            .append($('<span>').addClass(options.icons.down))));
                }

                if (!use24Hours) {
                    topRow.append($('<td>').addClass('separator'));
                    middleRow.append($('<td>')
                        .append($('<button>').addClass('btn btn-primary').attr({ 'data-action': 'togglePeriod', tabindex: '-1', 'title': options.tooltips.togglePeriod })));
                    bottomRow.append($('<td>').addClass('separator'));
                }

                return $('<div>').addClass('timepicker-picker')
                    .append($('<table>').addClass('table-condensed')
                        .append([topRow, middleRow, bottomRow]));
            },

            getTimePickerTemplate = function () {
                var hoursView = $('<div>').addClass('timepicker-hours')
                        .append($('<table>').addClass('table-condensed')),
                    minutesView = $('<div>').addClass('timepicker-minutes')
                        .append($('<table>').addClass('table-condensed')),
                    secondsView = $('<div>').addClass('timepicker-seconds')
                        .append($('<table>').addClass('table-condensed')),
                    ret = [getTimePickerMainTemplate()];

                if (isEnabled('h')) {
                    ret.push(hoursView);
                }
                if (isEnabled('m')) {
                    ret.push(minutesView);
                }
                if (isEnabled('s')) {
                    ret.push(secondsView);
                }

                return ret;
            },

            getToolbar = function () {
                var row = [];
                if (options.showTodayButton) {
                    row.push($('<td>').append($('<a>').attr({ 'data-action': 'today', 'title': options.tooltips.today }).append($('<span>').addClass(options.icons.today))));
                }
                if (!options.sideBySide && hasDate() && hasTime()) {
                    row.push($('<td>').append($('<a>').attr({ 'data-action': 'togglePicker', 'title': options.tooltips.selectTime }).append($('<span>').addClass(options.icons.time))));
                }
                if (options.showClear) {
                    row.push($('<td>').append($('<a>').attr({ 'data-action': 'clear', 'title': options.tooltips.clear }).append($('<span>').addClass(options.icons.clear))));
                }
                if (options.showClose) {
                    row.push($('<td>').append($('<a>').attr({ 'data-action': 'close', 'title': options.tooltips.close }).append($('<span>').addClass(options.icons.close))));
                }
                return $('<table>').addClass('table-condensed').append($('<tbody>').append($('<tr>').append(row)));
            },

            getTemplate = function () {
                var template = $('<div>').addClass('bootstrap-datetimepicker-widget dropdown-menu'),
                    dateView = $('<div>').addClass('datepicker').append(getDatePickerTemplate()),
                    timeView = $('<div>').addClass('timepicker').append(getTimePickerTemplate()),
                    content = $('<ul>').addClass('list-unstyled'),
                    toolbar = $('<li>').addClass('picker-switch' + (options.collapse ? ' accordion-toggle' : '')).append(getToolbar());

                if (options.inline) {
                    template.removeClass('dropdown-menu');
                }

                if (use24Hours) {
                    template.addClass('usetwentyfour');
                }

                if (isEnabled('s') && !use24Hours) {
                    template.addClass('wider');
                }

                if (options.sideBySide && hasDate() && hasTime()) {
                    template.addClass('timepicker-sbs');
                    if (options.toolbarPlacement === 'top') {
                        template.append(toolbar);
                    }
                    template.append(
                        $('<div>').addClass('row')
                            .append(dateView.addClass('col-md-6'))
                            .append(timeView.addClass('col-md-6'))
                    );
                    if (options.toolbarPlacement === 'bottom') {
                        template.append(toolbar);
                    }
                    return template;
                }

                if (options.toolbarPlacement === 'top') {
                    content.append(toolbar);
                }
                if (hasDate()) {
                    content.append($('<li>').addClass((options.collapse && hasTime() ? 'collapse in' : '')).append(dateView));
                }
                if (options.toolbarPlacement === 'default') {
                    content.append(toolbar);
                }
                if (hasTime()) {
                    content.append($('<li>').addClass((options.collapse && hasDate() ? 'collapse' : '')).append(timeView));
                }
                if (options.toolbarPlacement === 'bottom') {
                    content.append(toolbar);
                }
                return template.append(content);
            },

            dataToOptions = function () {
                var eData,
                    dataOptions = {};

                if (element.is('input') || options.inline) {
                    eData = element.data();
                } else {
                    eData = element.find('input').data();
                }

                if (eData.dateOptions && eData.dateOptions instanceof Object) {
                    dataOptions = $.extend(true, dataOptions, eData.dateOptions);
                }

                $.each(options, function (key) {
                    var attributeName = 'date' + key.charAt(0).toUpperCase() + key.slice(1);
                    if (eData[attributeName] !== undefined) {
                        dataOptions[key] = eData[attributeName];
                    }
                });
                return dataOptions;
            },

            place = function () {
                var position = (component || element).position(),
                    offset = (component || element).offset(),
                    vertical = options.widgetPositioning.vertical,
                    horizontal = options.widgetPositioning.horizontal,
                    parent;

                if (options.widgetParent) {
                    parent = options.widgetParent.append(widget);
                } else if (element.is('input')) {
                    parent = element.after(widget).parent();
                } else if (options.inline) {
                    parent = element.append(widget);
                    return;
                } else {
                    parent = element;
                    element.children().first().after(widget);
                }

                // Top and bottom logic
                if (vertical === 'auto') {
                    if (offset.top + widget.height() * 1.5 >= $(window).height() + $(window).scrollTop() &&
                        widget.height() + element.outerHeight() < offset.top) {
                        vertical = 'top';
                    } else {
                        vertical = 'bottom';
                    }
                }

                // Left and right logic
                if (horizontal === 'auto') {
                    if (parent.width() < offset.left + widget.outerWidth() / 2 &&
                        offset.left + widget.outerWidth() > $(window).width()) {
                        horizontal = 'right';
                    } else {
                        horizontal = 'left';
                    }
                }

                if (vertical === 'top') {
                    widget.addClass('top').removeClass('bottom');
                } else {
                    widget.addClass('bottom').removeClass('top');
                }

                if (horizontal === 'right') {
                    widget.addClass('pull-right');
                } else {
                    widget.removeClass('pull-right');
                }

                // find the first parent element that has a non-static css positioning
                if (parent.css('position') === 'static') {
                    parent = parent.parents().filter(function () {
                        return $(this).css('position') !== 'static';
                    }).first();
                }

                if (parent.length === 0) {
                    throw new Error('datetimepicker component should be placed within a non-static positioned container');
                }

                widget.css({
                    top: vertical === 'top' ? 'auto' : position.top + element.outerHeight(),
                    bottom: vertical === 'top' ? parent.outerHeight() - (parent === element ? 0 : position.top) : 'auto',
                    left: horizontal === 'left' ? (parent === element ? 0 : position.left) : 'auto',
                    right: horizontal === 'left' ? 'auto' : parent.outerWidth() - element.outerWidth() - (parent === element ? 0 : position.left)
                });
            },

            notifyEvent = function (e) {
                if (e.type === 'dp.change' && ((e.date && e.date.isSame(e.oldDate)) || (!e.date && !e.oldDate))) {
                    return;
                }
                element.trigger(e);
            },

            viewUpdate = function (e) {
                if (e === 'y') {
                    e = 'YYYY';
                }
                notifyEvent({
                    type: 'dp.update',
                    change: e,
                    viewDate: viewDate.clone()
                });
            },

            showMode = function (dir) {
                if (!widget) {
                    return;
                }
                if (dir) {
                    currentViewMode = Math.max(minViewModeNumber, Math.min(3, currentViewMode + dir));
                }
                widget.find('.datepicker > div').hide().filter('.datepicker-' + datePickerModes[currentViewMode].clsName).show();
            },

            fillDow = function () {
                var row = $('<tr>'),
                    currentDate = viewDate.clone().startOf('w').startOf('d');

                if (options.calendarWeeks === true) {
                    row.append($('<th>').addClass('cw').text('#'));
                }

                while (currentDate.isBefore(viewDate.clone().endOf('w'))) {
                    row.append($('<th>').addClass('dow').text(currentDate.format('dd')));
                    currentDate.add(1, 'd');
                }
                widget.find('.datepicker-days thead').append(row);
            },

            isInDisabledDates = function (testDate) {
                return options.disabledDates[testDate.format('YYYY-MM-DD')] === true;
            },

            isInEnabledDates = function (testDate) {
                return options.enabledDates[testDate.format('YYYY-MM-DD')] === true;
            },

            isInDisabledHours = function (testDate) {
                return options.disabledHours[testDate.format('H')] === true;
            },

            isInEnabledHours = function (testDate) {
                return options.enabledHours[testDate.format('H')] === true;
            },

            isValid = function (targetMoment, granularity) {
                if (!targetMoment.isValid()) {
                    return false;
                }
                if (options.disabledDates && granularity === 'd' && isInDisabledDates(targetMoment)) {
                    return false;
                }
                if (options.enabledDates && granularity === 'd' && !isInEnabledDates(targetMoment)) {
                    return false;
                }
                if (options.minDate && targetMoment.isBefore(options.minDate, granularity)) {
                    return false;
                }
                if (options.maxDate && targetMoment.isAfter(options.maxDate, granularity)) {
                    return false;
                }
                if (options.daysOfWeekDisabled && granularity === 'd' && options.daysOfWeekDisabled.indexOf(targetMoment.day()) !== -1) {
                    return false;
                }
                if (options.disabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && isInDisabledHours(targetMoment)) {
                    return false;
                }
                if (options.enabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && !isInEnabledHours(targetMoment)) {
                    return false;
                }
                if (options.disabledTimeIntervals && (granularity === 'h' || granularity === 'm' || granularity === 's')) {
                    var found = false;
                    $.each(options.disabledTimeIntervals, function () {
                        if (targetMoment.isBetween(this[0], this[1])) {
                            found = true;
                            return false;
                        }
                    });
                    if (found) {
                        return false;
                    }
                }
                return true;
            },

            fillMonths = function () {
                var spans = [],
                    monthsShort = viewDate.clone().startOf('y').startOf('d');
                while (monthsShort.isSame(viewDate, 'y')) {
                    spans.push($('<span>').attr('data-action', 'selectMonth').addClass('month').text(monthsShort.format('MMM')));
                    monthsShort.add(1, 'M');
                }
                widget.find('.datepicker-months td').empty().append(spans);
            },

            updateMonths = function () {
                var monthsView = widget.find('.datepicker-months'),
                    monthsViewHeader = monthsView.find('th'),
                    months = monthsView.find('tbody').find('span');

                monthsViewHeader.eq(0).find('span').attr('title', options.tooltips.prevYear);
                monthsViewHeader.eq(1).attr('title', options.tooltips.selectYear);
                monthsViewHeader.eq(2).find('span').attr('title', options.tooltips.nextYear);

                monthsView.find('.disabled').removeClass('disabled');

                if (!isValid(viewDate.clone().subtract(1, 'y'), 'y')) {
                    monthsViewHeader.eq(0).addClass('disabled');
                }

                monthsViewHeader.eq(1).text(viewDate.year());

                if (!isValid(viewDate.clone().add(1, 'y'), 'y')) {
                    monthsViewHeader.eq(2).addClass('disabled');
                }

                months.removeClass('active');
                if (date.isSame(viewDate, 'y') && !unset) {
                    months.eq(date.month()).addClass('active');
                }

                months.each(function (index) {
                    if (!isValid(viewDate.clone().month(index), 'M')) {
                        $(this).addClass('disabled');
                    }
                });
            },

            updateYears = function () {
                var yearsView = widget.find('.datepicker-years'),
                    yearsViewHeader = yearsView.find('th'),
                    startYear = viewDate.clone().subtract(5, 'y'),
                    endYear = viewDate.clone().add(6, 'y'),
                    html = '';

                yearsViewHeader.eq(0).find('span').attr('title', options.tooltips.prevDecade);
                yearsViewHeader.eq(1).attr('title', options.tooltips.selectDecade);
                yearsViewHeader.eq(2).find('span').attr('title', options.tooltips.nextDecade);

                yearsView.find('.disabled').removeClass('disabled');

                if (options.minDate && options.minDate.isAfter(startYear, 'y')) {
                    yearsViewHeader.eq(0).addClass('disabled');
                }

                yearsViewHeader.eq(1).text(startYear.year() + '-' + endYear.year());

                if (options.maxDate && options.maxDate.isBefore(endYear, 'y')) {
                    yearsViewHeader.eq(2).addClass('disabled');
                }

                while (!startYear.isAfter(endYear, 'y')) {
                    html += '<span data-action="selectYear" class="year' + (startYear.isSame(date, 'y') && !unset ? ' active' : '') + (!isValid(startYear, 'y') ? ' disabled' : '') + '">' + startYear.year() + '</span>';
                    startYear.add(1, 'y');
                }

                yearsView.find('td').html(html);
            },

            updateDecades = function () {
                var decadesView = widget.find('.datepicker-decades'),
                    decadesViewHeader = decadesView.find('th'),
                    startDecade = moment({ y: viewDate.year() - (viewDate.year() % 100) - 1 }),
                    endDecade = startDecade.clone().add(100, 'y'),
                    startedAt = startDecade.clone(),
                    minDateDecade = false,
                    maxDateDecade = false,
                    endDecadeYear,
                    html = '';

                decadesViewHeader.eq(0).find('span').attr('title', options.tooltips.prevCentury);
                decadesViewHeader.eq(2).find('span').attr('title', options.tooltips.nextCentury);

                decadesView.find('.disabled').removeClass('disabled');

                if (startDecade.isSame(moment({ y: 1900 })) || (options.minDate && options.minDate.isAfter(startDecade, 'y'))) {
                    decadesViewHeader.eq(0).addClass('disabled');
                }

                decadesViewHeader.eq(1).text(startDecade.year() + '-' + endDecade.year());

                if (startDecade.isSame(moment({ y: 2000 })) || (options.maxDate && options.maxDate.isBefore(endDecade, 'y'))) {
                    decadesViewHeader.eq(2).addClass('disabled');
                }

                while (!startDecade.isAfter(endDecade, 'y')) {
                    endDecadeYear = startDecade.year() + 12;
                    minDateDecade = options.minDate && options.minDate.isAfter(startDecade, 'y') && options.minDate.year() <= endDecadeYear;
                    maxDateDecade = options.maxDate && options.maxDate.isAfter(startDecade, 'y') && options.maxDate.year() <= endDecadeYear;
                    html += '<span data-action="selectDecade" class="decade' + (date.isAfter(startDecade) && date.year() <= endDecadeYear ? ' active' : '') +
                        (!isValid(startDecade, 'y') && !minDateDecade && !maxDateDecade ? ' disabled' : '') + '" data-selection="' + (startDecade.year() + 6) + '">' + (startDecade.year() + 1) + ' - ' + (startDecade.year() + 12) + '</span>';
                    startDecade.add(12, 'y');
                }
                html += '<span></span><span></span><span></span>'; //push the dangling block over, at least this way it's even

                decadesView.find('td').html(html);
                decadesViewHeader.eq(1).text((startedAt.year() + 1) + '-' + (startDecade.year()));
            },

            fillDate = function () {
                var daysView = widget.find('.datepicker-days'),
                    daysViewHeader = daysView.find('th'),
                    currentDate,
                    html = [],
                    row,
                    clsNames = [],
                    i;

                if (!hasDate()) {
                    return;
                }

                daysViewHeader.eq(0).find('span').attr('title', options.tooltips.prevMonth);
                daysViewHeader.eq(1).attr('title', options.tooltips.selectMonth);
                daysViewHeader.eq(2).find('span').attr('title', options.tooltips.nextMonth);

                daysView.find('.disabled').removeClass('disabled');
                daysViewHeader.eq(1).text(viewDate.format(options.dayViewHeaderFormat));

                if (!isValid(viewDate.clone().subtract(1, 'M'), 'M')) {
                    daysViewHeader.eq(0).addClass('disabled');
                }
                if (!isValid(viewDate.clone().add(1, 'M'), 'M')) {
                    daysViewHeader.eq(2).addClass('disabled');
                }

                currentDate = viewDate.clone().startOf('M').startOf('w').startOf('d');

                for (i = 0; i < 42; i++) { //always display 42 days (should show 6 weeks)
                    if (currentDate.weekday() === 0) {
                        row = $('<tr>');
                        if (options.calendarWeeks) {
                            row.append('<td class="cw">' + currentDate.week() + '</td>');
                        }
                        html.push(row);
                    }
                    clsNames = ['day'];
                    if (currentDate.isBefore(viewDate, 'M')) {
                        clsNames.push('old');
                    }
                    if (currentDate.isAfter(viewDate, 'M')) {
                        clsNames.push('new');
                    }
                    if (currentDate.isSame(date, 'd') && !unset) {
                        clsNames.push('active');
                    }
                    if (!isValid(currentDate, 'd')) {
                        clsNames.push('disabled');
                    }
                    if (currentDate.isSame(getMoment(), 'd')) {
                        clsNames.push('today');
                    }
                    if (currentDate.day() === 0 || currentDate.day() === 6) {
                        clsNames.push('weekend');
                    }
                    notifyEvent({
                        type: 'dp.classify',
                        date: currentDate,
                        classNames: clsNames
                    });
                    row.append('<td data-action="selectDay" data-day="' + currentDate.format('L') + '" class="' + clsNames.join(' ') + '">' + currentDate.date() + '</td>');
                    currentDate.add(1, 'd');
                }

                daysView.find('tbody').empty().append(html);

                updateMonths();

                updateYears();

                updateDecades();
            },

            fillHours = function () {
                var table = widget.find('.timepicker-hours table'),
                    currentHour = viewDate.clone().startOf('d'),
                    html = [],
                    row = $('<tr>');

                if (viewDate.hour() > 11 && !use24Hours) {
                    currentHour.hour(12);
                }
                while (currentHour.isSame(viewDate, 'd') && (use24Hours || (viewDate.hour() < 12 && currentHour.hour() < 12) || viewDate.hour() > 11)) {
                    if (currentHour.hour() % 4 === 0) {
                        row = $('<tr>');
                        html.push(row);
                    }
                    row.append('<td data-action="selectHour" class="hour' + (!isValid(currentHour, 'h') ? ' disabled' : '') + '">' + currentHour.format(use24Hours ? 'HH' : 'hh') + '</td>');
                    currentHour.add(1, 'h');
                }
                table.empty().append(html);
            },

            fillMinutes = function () {
                var table = widget.find('.timepicker-minutes table'),
                    currentMinute = viewDate.clone().startOf('h'),
                    html = [],
                    row = $('<tr>'),
                    step = options.stepping === 1 ? 5 : options.stepping;

                while (viewDate.isSame(currentMinute, 'h')) {
                    if (currentMinute.minute() % (step * 4) === 0) {
                        row = $('<tr>');
                        html.push(row);
                    }
                    row.append('<td data-action="selectMinute" class="minute' + (!isValid(currentMinute, 'm') ? ' disabled' : '') + '">' + currentMinute.format('mm') + '</td>');
                    currentMinute.add(step, 'm');
                }
                table.empty().append(html);
            },

            fillSeconds = function () {
                var table = widget.find('.timepicker-seconds table'),
                    currentSecond = viewDate.clone().startOf('m'),
                    html = [],
                    row = $('<tr>');

                while (viewDate.isSame(currentSecond, 'm')) {
                    if (currentSecond.second() % 20 === 0) {
                        row = $('<tr>');
                        html.push(row);
                    }
                    row.append('<td data-action="selectSecond" class="second' + (!isValid(currentSecond, 's') ? ' disabled' : '') + '">' + currentSecond.format('ss') + '</td>');
                    currentSecond.add(5, 's');
                }

                table.empty().append(html);
            },

            fillTime = function () {
                var toggle, newDate, timeComponents = widget.find('.timepicker span[data-time-component]');

                if (!use24Hours) {
                    toggle = widget.find('.timepicker [data-action=togglePeriod]');
                    newDate = date.clone().add((date.hours() >= 12) ? -12 : 12, 'h');

                    toggle.text(date.format('A'));

                    if (isValid(newDate, 'h')) {
                        toggle.removeClass('disabled');
                    } else {
                        toggle.addClass('disabled');
                    }
                }
                timeComponents.filter('[data-time-component=hours]').text(date.format(use24Hours ? 'HH' : 'hh'));
                timeComponents.filter('[data-time-component=minutes]').text(date.format('mm'));
                timeComponents.filter('[data-time-component=seconds]').text(date.format('ss'));

                fillHours();
                fillMinutes();
                fillSeconds();
            },

            update = function () {
                if (!widget) {
                    return;
                }
                fillDate();
                fillTime();
            },

            setValue = function (targetMoment) {
                var oldDate = unset ? null : date;

                // case of calling setValue(null or false)
                if (!targetMoment) {
                    unset = true;
                    input.val('');
                    element.data('date', '');
                    notifyEvent({
                        type: 'dp.change',
                        date: false,
                        oldDate: oldDate
                    });
                    update();
                    return;
                }

                targetMoment = targetMoment.clone().locale(options.locale);

                if (hasTimeZone()) {
                    targetMoment.tz(options.timeZone);
                }

                if (options.stepping !== 1) {
                    targetMoment.minutes((Math.round(targetMoment.minutes() / options.stepping) * options.stepping)).seconds(0);

                    while (options.minDate && targetMoment.isBefore(options.minDate)) {
                        targetMoment.add(options.stepping, 'minutes');
                    }
                }

                if (isValid(targetMoment)) {
                    date = targetMoment;
                    viewDate = date.clone();
                    input.val(date.format(actualFormat));
                    element.data('date', date.format(actualFormat));
                    unset = false;
                    update();
                    notifyEvent({
                        type: 'dp.change',
                        date: date.clone(),
                        oldDate: oldDate
                    });
                } else {
                    if (!options.keepInvalid) {
                        input.val(unset ? '' : date.format(actualFormat));
                    } else {
                        notifyEvent({
                            type: 'dp.change',
                            date: targetMoment,
                            oldDate: oldDate
                        });
                    }
                    notifyEvent({
                        type: 'dp.error',
                        date: targetMoment,
                        oldDate: oldDate
                    });
                }
            },

            /**
             * Hides the widget. Possibly will emit dp.hide
             */
            hide = function () {
                var transitioning = false;
                if (!widget) {
                    return picker;
                }
                // Ignore event if in the middle of a picker transition
                widget.find('.collapse').each(function () {
                    var collapseData = $(this).data('collapse');
                    if (collapseData && collapseData.transitioning) {
                        transitioning = true;
                        return false;
                    }
                    return true;
                });
                if (transitioning) {
                    return picker;
                }
                if (component && component.hasClass('btn')) {
                    component.toggleClass('active');
                }
                widget.hide();

                $(window).off('resize', place);
                widget.off('click', '[data-action]');
                widget.off('mousedown', false);

                widget.remove();
                widget = false;

                notifyEvent({
                    type: 'dp.hide',
                    date: date.clone()
                });

                input.blur();

                viewDate = date.clone();

                return picker;
            },

            clear = function () {
                setValue(null);
            },

            parseInputDate = function (inputDate) {
                if (options.parseInputDate === undefined) {
                    if (!moment.isMoment(inputDate) || inputDate instanceof Date) {
                        inputDate = getMoment(inputDate);
                    }
                } else {
                    inputDate = options.parseInputDate(inputDate);
                }
                //inputDate.locale(options.locale);
                return inputDate;
            },

            /********************************************************************************
             *
             * Widget UI interaction functions
             *
             ********************************************************************************/
            actions = {
                next: function () {
                    var navFnc = datePickerModes[currentViewMode].navFnc;
                    viewDate.add(datePickerModes[currentViewMode].navStep, navFnc);
                    fillDate();
                    viewUpdate(navFnc);
                },

                previous: function () {
                    var navFnc = datePickerModes[currentViewMode].navFnc;
                    viewDate.subtract(datePickerModes[currentViewMode].navStep, navFnc);
                    fillDate();
                    viewUpdate(navFnc);
                },

                pickerSwitch: function () {
                    showMode(1);
                },

                selectMonth: function (e) {
                    var month = $(e.target).closest('tbody').find('span').index($(e.target));
                    viewDate.month(month);
                    if (currentViewMode === minViewModeNumber) {
                        setValue(date.clone().year(viewDate.year()).month(viewDate.month()));
                        if (!options.inline) {
                            hide();
                        }
                    } else {
                        showMode(-1);
                        fillDate();
                    }
                    viewUpdate('M');
                },

                selectYear: function (e) {
                    var year = parseInt($(e.target).text(), 10) || 0;
                    viewDate.year(year);
                    if (currentViewMode === minViewModeNumber) {
                        setValue(date.clone().year(viewDate.year()));
                        if (!options.inline) {
                            hide();
                        }
                    } else {
                        showMode(-1);
                        fillDate();
                    }
                    viewUpdate('YYYY');
                },

                selectDecade: function (e) {
                    var year = parseInt($(e.target).data('selection'), 10) || 0;
                    viewDate.year(year);
                    if (currentViewMode === minViewModeNumber) {
                        setValue(date.clone().year(viewDate.year()));
                        if (!options.inline) {
                            hide();
                        }
                    } else {
                        showMode(-1);
                        fillDate();
                    }
                    viewUpdate('YYYY');
                },

                selectDay: function (e) {
                    var day = viewDate.clone();
                    if ($(e.target).is('.old')) {
                        day.subtract(1, 'M');
                    }
                    if ($(e.target).is('.new')) {
                        day.add(1, 'M');
                    }
                    setValue(day.date(parseInt($(e.target).text(), 10)));
                    if (!hasTime() && !options.keepOpen && !options.inline) {
                        hide();
                    }
                },

                incrementHours: function () {
                    var newDate = date.clone().add(1, 'h');
                    if (isValid(newDate, 'h')) {
                        setValue(newDate);
                    }
                },

                incrementMinutes: function () {
                    var newDate = date.clone().add(options.stepping, 'm');
                    if (isValid(newDate, 'm')) {
                        setValue(newDate);
                    }
                },

                incrementSeconds: function () {
                    var newDate = date.clone().add(1, 's');
                    if (isValid(newDate, 's')) {
                        setValue(newDate);
                    }
                },

                decrementHours: function () {
                    var newDate = date.clone().subtract(1, 'h');
                    if (isValid(newDate, 'h')) {
                        setValue(newDate);
                    }
                },

                decrementMinutes: function () {
                    var newDate = date.clone().subtract(options.stepping, 'm');
                    if (isValid(newDate, 'm')) {
                        setValue(newDate);
                    }
                },

                decrementSeconds: function () {
                    var newDate = date.clone().subtract(1, 's');
                    if (isValid(newDate, 's')) {
                        setValue(newDate);
                    }
                },

                togglePeriod: function () {
                    setValue(date.clone().add((date.hours() >= 12) ? -12 : 12, 'h'));
                },

                togglePicker: function (e) {
                    var $this = $(e.target),
                        $parent = $this.closest('ul'),
                        expanded = $parent.find('.in'),
                        closed = $parent.find('.collapse:not(.in)'),
                        collapseData;

                    if (expanded && expanded.length) {
                        collapseData = expanded.data('collapse');
                        if (collapseData && collapseData.transitioning) {
                            return;
                        }
                        if (expanded.collapse) { // if collapse plugin is available through bootstrap.js then use it
                            expanded.collapse('hide');
                            closed.collapse('show');
                        } else { // otherwise just toggle in class on the two views
                            expanded.removeClass('in');
                            closed.addClass('in');
                        }
                        if ($this.is('span')) {
                            $this.toggleClass(options.icons.time + ' ' + options.icons.date);
                        } else {
                            $this.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
                        }

                        // NOTE: uncomment if toggled state will be restored in show()
                        //if (component) {
                        //    component.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
                        //}
                    }
                },

                showPicker: function () {
                    widget.find('.timepicker > div:not(.timepicker-picker)').hide();
                    widget.find('.timepicker .timepicker-picker').show();
                },

                showHours: function () {
                    widget.find('.timepicker .timepicker-picker').hide();
                    widget.find('.timepicker .timepicker-hours').show();
                },

                showMinutes: function () {
                    widget.find('.timepicker .timepicker-picker').hide();
                    widget.find('.timepicker .timepicker-minutes').show();
                },

                showSeconds: function () {
                    widget.find('.timepicker .timepicker-picker').hide();
                    widget.find('.timepicker .timepicker-seconds').show();
                },

                selectHour: function (e) {
                    var hour = parseInt($(e.target).text(), 10);

                    if (!use24Hours) {
                        if (date.hours() >= 12) {
                            if (hour !== 12) {
                                hour += 12;
                            }
                        } else {
                            if (hour === 12) {
                                hour = 0;
                            }
                        }
                    }
                    setValue(date.clone().hours(hour));
                    actions.showPicker.call(picker);
                },

                selectMinute: function (e) {
                    setValue(date.clone().minutes(parseInt($(e.target).text(), 10)));
                    actions.showPicker.call(picker);
                },

                selectSecond: function (e) {
                    setValue(date.clone().seconds(parseInt($(e.target).text(), 10)));
                    actions.showPicker.call(picker);
                },

                clear: clear,

                today: function () {
                    var todaysDate = getMoment();
                    if (isValid(todaysDate, 'd')) {
                        setValue(todaysDate);
                    }
                },

                close: hide
            },

            doAction = function (e) {
                if ($(e.currentTarget).is('.disabled')) {
                    return false;
                }
                actions[$(e.currentTarget).data('action')].apply(picker, arguments);
                return false;
            },

            /**
             * Shows the widget. Possibly will emit dp.show and dp.change
             */
            show = function () {
                var currentMoment,
                    useCurrentGranularity = {
                        'year': function (m) {
                            return m.month(0).date(1).hours(0).seconds(0).minutes(0);
                        },
                        'month': function (m) {
                            return m.date(1).hours(0).seconds(0).minutes(0);
                        },
                        'day': function (m) {
                            return m.hours(0).seconds(0).minutes(0);
                        },
                        'hour': function (m) {
                            return m.seconds(0).minutes(0);
                        },
                        'minute': function (m) {
                            return m.seconds(0);
                        }
                    };

                if (input.prop('disabled') || (!options.ignoreReadonly && input.prop('readonly')) || widget) {
                    return picker;
                }
                if (input.val() !== undefined && input.val().trim().length !== 0) {
                    setValue(parseInputDate(input.val().trim()));
                } else if (unset && options.useCurrent && (options.inline || (input.is('input') && input.val().trim().length === 0))) {
                    currentMoment = getMoment();
                    if (typeof options.useCurrent === 'string') {
                        currentMoment = useCurrentGranularity[options.useCurrent](currentMoment);
                    }
                    setValue(currentMoment);
                }
                widget = getTemplate();

                fillDow();
                fillMonths();

                widget.find('.timepicker-hours').hide();
                widget.find('.timepicker-minutes').hide();
                widget.find('.timepicker-seconds').hide();

                update();
                showMode();

                $(window).on('resize', place);
                widget.on('click', '[data-action]', doAction); // this handles clicks on the widget
                widget.on('mousedown', false);

                if (component && component.hasClass('btn')) {
                    component.toggleClass('active');
                }
                place();
                widget.show();
                if (options.focusOnShow && !input.is(':focus')) {
                    input.focus();
                }

                notifyEvent({
                    type: 'dp.show'
                });
                return picker;
            },

            /**
             * Shows or hides the widget
             */
            toggle = function () {
                return (widget ? hide() : show());
            },

            keydown = function (e) {
                var handler = null,
                    index,
                    index2,
                    pressedKeys = [],
                    pressedModifiers = {},
                    currentKey = e.which,
                    keyBindKeys,
                    allModifiersPressed,
                    pressed = 'p';

                keyState[currentKey] = pressed;

                for (index in keyState) {
                    if (keyState.hasOwnProperty(index) && keyState[index] === pressed) {
                        pressedKeys.push(index);
                        if (parseInt(index, 10) !== currentKey) {
                            pressedModifiers[index] = true;
                        }
                    }
                }

                for (index in options.keyBinds) {
                    if (options.keyBinds.hasOwnProperty(index) && typeof (options.keyBinds[index]) === 'function') {
                        keyBindKeys = index.split(' ');
                        if (keyBindKeys.length === pressedKeys.length && keyMap[currentKey] === keyBindKeys[keyBindKeys.length - 1]) {
                            allModifiersPressed = true;
                            for (index2 = keyBindKeys.length - 2; index2 >= 0; index2--) {
                                if (!(keyMap[keyBindKeys[index2]] in pressedModifiers)) {
                                    allModifiersPressed = false;
                                    break;
                                }
                            }
                            if (allModifiersPressed) {
                                handler = options.keyBinds[index];
                                break;
                            }
                        }
                    }
                }

                if (handler) {
                    handler.call(picker, widget);
                    e.stopPropagation();
                    e.preventDefault();
                }
            },

            keyup = function (e) {
                keyState[e.which] = 'r';
                e.stopPropagation();
                e.preventDefault();
            },

            change = function (e) {
                var val = $(e.target).val().trim(),
                    parsedDate = val ? parseInputDate(val) : null;
                setValue(parsedDate);
                e.stopImmediatePropagation();
                return false;
            },

            attachDatePickerElementEvents = function () {
                input.on({
                    'change': change,
                    'blur': options.debug ? '' : hide,
                    'keydown': keydown,
                    'keyup': keyup,
                    'focus': options.allowInputToggle ? show : ''
                });

                if (element.is('input')) {
                    input.on({
                        'focus': show
                    });
                } else if (component) {
                    component.on('click', toggle);
                    component.on('mousedown', false);
                }
            },

            detachDatePickerElementEvents = function () {
                input.off({
                    'change': change,
                    'blur': blur,
                    'keydown': keydown,
                    'keyup': keyup,
                    'focus': options.allowInputToggle ? hide : ''
                });

                if (element.is('input')) {
                    input.off({
                        'focus': show
                    });
                } else if (component) {
                    component.off('click', toggle);
                    component.off('mousedown', false);
                }
            },

            indexGivenDates = function (givenDatesArray) {
                // Store given enabledDates and disabledDates as keys.
                // This way we can check their existence in O(1) time instead of looping through whole array.
                // (for example: options.enabledDates['2014-02-27'] === true)
                var givenDatesIndexed = {};
                $.each(givenDatesArray, function () {
                    var dDate = parseInputDate(this);
                    if (dDate.isValid()) {
                        givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
                    }
                });
                return (Object.keys(givenDatesIndexed).length) ? givenDatesIndexed : false;
            },

            indexGivenHours = function (givenHoursArray) {
                // Store given enabledHours and disabledHours as keys.
                // This way we can check their existence in O(1) time instead of looping through whole array.
                // (for example: options.enabledHours['2014-02-27'] === true)
                var givenHoursIndexed = {};
                $.each(givenHoursArray, function () {
                    givenHoursIndexed[this] = true;
                });
                return (Object.keys(givenHoursIndexed).length) ? givenHoursIndexed : false;
            },

            initFormatting = function () {
                var format = options.format || 'L LT';

                actualFormat = format.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput) {
                    var newinput = date.localeData().longDateFormat(formatInput) || formatInput;
                    return newinput.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput2) { //temp fix for #740
                        return date.localeData().longDateFormat(formatInput2) || formatInput2;
                    });
                });


                parseFormats = options.extraFormats ? options.extraFormats.slice() : [];
                if (parseFormats.indexOf(format) < 0 && parseFormats.indexOf(actualFormat) < 0) {
                    parseFormats.push(actualFormat);
                }

                use24Hours = (actualFormat.toLowerCase().indexOf('a') < 1 && actualFormat.replace(/\[.*?\]/g, '').indexOf('h') < 1);

                if (isEnabled('y')) {
                    minViewModeNumber = 2;
                }
                if (isEnabled('M')) {
                    minViewModeNumber = 1;
                }
                if (isEnabled('d')) {
                    minViewModeNumber = 0;
                }

                currentViewMode = Math.max(minViewModeNumber, currentViewMode);

                if (!unset) {
                    setValue(date);
                }
            };

        /********************************************************************************
         *
         * Public API functions
         * =====================
         *
         * Important: Do not expose direct references to private objects or the options
         * object to the outer world. Always return a clone when returning values or make
         * a clone when setting a private variable.
         *
         ********************************************************************************/
        picker.destroy = function () {
            ///<summary>Destroys the widget and removes all attached event listeners</summary>
            hide();
            detachDatePickerElementEvents();
            element.removeData('DateTimePicker');
            element.removeData('date');
        };

        picker.toggle = toggle;

        picker.show = show;

        picker.hide = hide;

        picker.disable = function () {
            ///<summary>Disables the input element, the component is attached to, by adding a disabled="true" attribute to it.
            ///If the widget was visible before that call it is hidden. Possibly emits dp.hide</summary>
            hide();
            if (component && component.hasClass('btn')) {
                component.addClass('disabled');
            }
            input.prop('disabled', true);
            return picker;
        };

        picker.enable = function () {
            ///<summary>Enables the input element, the component is attached to, by removing disabled attribute from it.</summary>
            if (component && component.hasClass('btn')) {
                component.removeClass('disabled');
            }
            input.prop('disabled', false);
            return picker;
        };

        picker.ignoreReadonly = function (ignoreReadonly) {
            if (arguments.length === 0) {
                return options.ignoreReadonly;
            }
            if (typeof ignoreReadonly !== 'boolean') {
                throw new TypeError('ignoreReadonly () expects a boolean parameter');
            }
            options.ignoreReadonly = ignoreReadonly;
            return picker;
        };

        picker.options = function (newOptions) {
            if (arguments.length === 0) {
                return $.extend(true, {}, options);
            }

            if (!(newOptions instanceof Object)) {
                throw new TypeError('options() options parameter should be an object');
            }
            $.extend(true, options, newOptions);
            $.each(options, function (key, value) {
                if (picker[key] !== undefined) {
                    picker[key](value);
                } else {
                    throw new TypeError('option ' + key + ' is not recognized!');
                }
            });
            return picker;
        };

        picker.date = function (newDate) {
            ///<signature helpKeyword="$.fn.datetimepicker.date">
            ///<summary>Returns the component's model current date, a moment object or null if not set.</summary>
            ///<returns type="Moment">date.clone()</returns>
            ///</signature>
            ///<signature>
            ///<summary>Sets the components model current moment to it. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.</summary>
            ///<param name="newDate" locid="$.fn.datetimepicker.date_p:newDate">Takes string, Date, moment, null parameter.</param>
            ///</signature>
            if (arguments.length === 0) {
                if (unset) {
                    return null;
                }
                return date.clone();
            }

            if (newDate !== null && typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                throw new TypeError('date() parameter must be one of [null, string, moment or Date]');
            }

            setValue(newDate === null ? null : parseInputDate(newDate));
            return picker;
        };

        picker.format = function (newFormat) {
            ///<summary>test su</summary>
            ///<param name="newFormat">info about para</param>
            ///<returns type="string|boolean">returns foo</returns>
            if (arguments.length === 0) {
                return options.format;
            }

            if ((typeof newFormat !== 'string') && ((typeof newFormat !== 'boolean') || (newFormat !== false))) {
                throw new TypeError('format() expects a string or boolean:false parameter ' + newFormat);
            }

            options.format = newFormat;
            if (actualFormat) {
                initFormatting(); // reinit formatting
            }
            return picker;
        };

        picker.timeZone = function (newZone) {
            if (arguments.length === 0) {
                return options.timeZone;
            }

            if (typeof newZone !== 'string') {
                throw new TypeError('newZone() expects a string parameter');
            }

            options.timeZone = newZone;

            return picker;
        };

        picker.dayViewHeaderFormat = function (newFormat) {
            if (arguments.length === 0) {
                return options.dayViewHeaderFormat;
            }

            if (typeof newFormat !== 'string') {
                throw new TypeError('dayViewHeaderFormat() expects a string parameter');
            }

            options.dayViewHeaderFormat = newFormat;
            return picker;
        };

        picker.extraFormats = function (formats) {
            if (arguments.length === 0) {
                return options.extraFormats;
            }

            if (formats !== false && !(formats instanceof Array)) {
                throw new TypeError('extraFormats() expects an array or false parameter');
            }

            options.extraFormats = formats;
            if (parseFormats) {
                initFormatting(); // reinit formatting
            }
            return picker;
        };

        picker.disabledDates = function (dates) {
            ///<signature helpKeyword="$.fn.datetimepicker.disabledDates">
            ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
            ///<returns type="array">options.disabledDates</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.disabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.disabledDates ? $.extend({}, options.disabledDates) : options.disabledDates);
            }

            if (!dates) {
                options.disabledDates = false;
                update();
                return picker;
            }
            if (!(dates instanceof Array)) {
                throw new TypeError('disabledDates() expects an array parameter');
            }
            options.disabledDates = indexGivenDates(dates);
            options.enabledDates = false;
            update();
            return picker;
        };

        picker.enabledDates = function (dates) {
            ///<signature helpKeyword="$.fn.datetimepicker.enabledDates">
            ///<summary>Returns an array with the currently set enabled dates on the component.</summary>
            ///<returns type="array">options.enabledDates</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.enabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.enabledDates ? $.extend({}, options.enabledDates) : options.enabledDates);
            }

            if (!dates) {
                options.enabledDates = false;
                update();
                return picker;
            }
            if (!(dates instanceof Array)) {
                throw new TypeError('enabledDates() expects an array parameter');
            }
            options.enabledDates = indexGivenDates(dates);
            options.disabledDates = false;
            update();
            return picker;
        };

        picker.daysOfWeekDisabled = function (daysOfWeekDisabled) {
            if (arguments.length === 0) {
                return options.daysOfWeekDisabled.splice(0);
            }

            if ((typeof daysOfWeekDisabled === 'boolean') && !daysOfWeekDisabled) {
                options.daysOfWeekDisabled = false;
                update();
                return picker;
            }

            if (!(daysOfWeekDisabled instanceof Array)) {
                throw new TypeError('daysOfWeekDisabled() expects an array parameter');
            }
            options.daysOfWeekDisabled = daysOfWeekDisabled.reduce(function (previousValue, currentValue) {
                currentValue = parseInt(currentValue, 10);
                if (currentValue > 6 || currentValue < 0 || isNaN(currentValue)) {
                    return previousValue;
                }
                if (previousValue.indexOf(currentValue) === -1) {
                    previousValue.push(currentValue);
                }
                return previousValue;
            }, []).sort();
            if (options.useCurrent && !options.keepInvalid) {
                var tries = 0;
                while (!isValid(date, 'd')) {
                    date.add(1, 'd');
                    if (tries === 31) {
                        throw 'Tried 31 times to find a valid date';
                    }
                    tries++;
                }
                setValue(date);
            }
            update();
            return picker;
        };

        picker.maxDate = function (maxDate) {
            if (arguments.length === 0) {
                return options.maxDate ? options.maxDate.clone() : options.maxDate;
            }

            if ((typeof maxDate === 'boolean') && maxDate === false) {
                options.maxDate = false;
                update();
                return picker;
            }

            if (typeof maxDate === 'string') {
                if (maxDate === 'now' || maxDate === 'moment') {
                    maxDate = getMoment();
                }
            }

            var parsedDate = parseInputDate(maxDate);

            if (!parsedDate.isValid()) {
                throw new TypeError('maxDate() Could not parse date parameter: ' + maxDate);
            }
            if (options.minDate && parsedDate.isBefore(options.minDate)) {
                throw new TypeError('maxDate() date parameter is before options.minDate: ' + parsedDate.format(actualFormat));
            }
            options.maxDate = parsedDate;
            if (options.useCurrent && !options.keepInvalid && date.isAfter(maxDate)) {
                setValue(options.maxDate);
            }
            if (viewDate.isAfter(parsedDate)) {
                viewDate = parsedDate.clone().subtract(options.stepping, 'm');
            }
            update();
            return picker;
        };

        picker.minDate = function (minDate) {
            if (arguments.length === 0) {
                return options.minDate ? options.minDate.clone() : options.minDate;
            }

            if ((typeof minDate === 'boolean') && minDate === false) {
                options.minDate = false;
                update();
                return picker;
            }

            if (typeof minDate === 'string') {
                if (minDate === 'now' || minDate === 'moment') {
                    minDate = getMoment();
                }
            }

            var parsedDate = parseInputDate(minDate);

            if (!parsedDate.isValid()) {
                throw new TypeError('minDate() Could not parse date parameter: ' + minDate);
            }
            if (options.maxDate && parsedDate.isAfter(options.maxDate)) {
                throw new TypeError('minDate() date parameter is after options.maxDate: ' + parsedDate.format(actualFormat));
            }
            options.minDate = parsedDate;
            if (options.useCurrent && !options.keepInvalid && date.isBefore(minDate)) {
                setValue(options.minDate);
            }
            if (viewDate.isBefore(parsedDate)) {
                viewDate = parsedDate.clone().add(options.stepping, 'm');
            }
            update();
            return picker;
        };

        picker.defaultDate = function (defaultDate) {
            ///<signature helpKeyword="$.fn.datetimepicker.defaultDate">
            ///<summary>Returns a moment with the options.defaultDate option configuration or false if not set</summary>
            ///<returns type="Moment">date.clone()</returns>
            ///</signature>
            ///<signature>
            ///<summary>Will set the picker's inital date. If a boolean:false value is passed the options.defaultDate parameter is cleared.</summary>
            ///<param name="defaultDate" locid="$.fn.datetimepicker.defaultDate_p:defaultDate">Takes a string, Date, moment, boolean:false</param>
            ///</signature>
            if (arguments.length === 0) {
                return options.defaultDate ? options.defaultDate.clone() : options.defaultDate;
            }
            if (!defaultDate) {
                options.defaultDate = false;
                return picker;
            }

            if (typeof defaultDate === 'string') {
                if (defaultDate === 'now' || defaultDate === 'moment') {
                    defaultDate = getMoment();
                } else {
                    defaultDate = getMoment(defaultDate);
                }
            }

            var parsedDate = parseInputDate(defaultDate);
            if (!parsedDate.isValid()) {
                throw new TypeError('defaultDate() Could not parse date parameter: ' + defaultDate);
            }
            if (!isValid(parsedDate)) {
                throw new TypeError('defaultDate() date passed is invalid according to component setup validations');
            }

            options.defaultDate = parsedDate;

            if ((options.defaultDate && options.inline) || input.val().trim() === '') {
                setValue(options.defaultDate);
            }
            return picker;
        };

        picker.locale = function (locale) {
            if (arguments.length === 0) {
                return options.locale;
            }

            if (!moment.localeData(locale)) {
                throw new TypeError('locale() locale ' + locale + ' is not loaded from moment locales!');
            }

            options.locale = locale;
            date.locale(options.locale);
            viewDate.locale(options.locale);

            if (actualFormat) {
                initFormatting(); // reinit formatting
            }
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.stepping = function (stepping) {
            if (arguments.length === 0) {
                return options.stepping;
            }

            stepping = parseInt(stepping, 10);
            if (isNaN(stepping) || stepping < 1) {
                stepping = 1;
            }
            options.stepping = stepping;
            return picker;
        };

        picker.useCurrent = function (useCurrent) {
            var useCurrentOptions = ['year', 'month', 'day', 'hour', 'minute'];
            if (arguments.length === 0) {
                return options.useCurrent;
            }

            if ((typeof useCurrent !== 'boolean') && (typeof useCurrent !== 'string')) {
                throw new TypeError('useCurrent() expects a boolean or string parameter');
            }
            if (typeof useCurrent === 'string' && useCurrentOptions.indexOf(useCurrent.toLowerCase()) === -1) {
                throw new TypeError('useCurrent() expects a string parameter of ' + useCurrentOptions.join(', '));
            }
            options.useCurrent = useCurrent;
            return picker;
        };

        picker.collapse = function (collapse) {
            if (arguments.length === 0) {
                return options.collapse;
            }

            if (typeof collapse !== 'boolean') {
                throw new TypeError('collapse() expects a boolean parameter');
            }
            if (options.collapse === collapse) {
                return picker;
            }
            options.collapse = collapse;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.icons = function (icons) {
            if (arguments.length === 0) {
                return $.extend({}, options.icons);
            }

            if (!(icons instanceof Object)) {
                throw new TypeError('icons() expects parameter to be an Object');
            }
            $.extend(options.icons, icons);
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.tooltips = function (tooltips) {
            if (arguments.length === 0) {
                return $.extend({}, options.tooltips);
            }

            if (!(tooltips instanceof Object)) {
                throw new TypeError('tooltips() expects parameter to be an Object');
            }
            $.extend(options.tooltips, tooltips);
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.useStrict = function (useStrict) {
            if (arguments.length === 0) {
                return options.useStrict;
            }

            if (typeof useStrict !== 'boolean') {
                throw new TypeError('useStrict() expects a boolean parameter');
            }
            options.useStrict = useStrict;
            return picker;
        };

        picker.sideBySide = function (sideBySide) {
            if (arguments.length === 0) {
                return options.sideBySide;
            }

            if (typeof sideBySide !== 'boolean') {
                throw new TypeError('sideBySide() expects a boolean parameter');
            }
            options.sideBySide = sideBySide;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.viewMode = function (viewMode) {
            if (arguments.length === 0) {
                return options.viewMode;
            }

            if (typeof viewMode !== 'string') {
                throw new TypeError('viewMode() expects a string parameter');
            }

            if (viewModes.indexOf(viewMode) === -1) {
                throw new TypeError('viewMode() parameter must be one of (' + viewModes.join(', ') + ') value');
            }

            options.viewMode = viewMode;
            currentViewMode = Math.max(viewModes.indexOf(viewMode), minViewModeNumber);

            showMode();
            return picker;
        };

        picker.toolbarPlacement = function (toolbarPlacement) {
            if (arguments.length === 0) {
                return options.toolbarPlacement;
            }

            if (typeof toolbarPlacement !== 'string') {
                throw new TypeError('toolbarPlacement() expects a string parameter');
            }
            if (toolbarPlacements.indexOf(toolbarPlacement) === -1) {
                throw new TypeError('toolbarPlacement() parameter must be one of (' + toolbarPlacements.join(', ') + ') value');
            }
            options.toolbarPlacement = toolbarPlacement;

            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.widgetPositioning = function (widgetPositioning) {
            if (arguments.length === 0) {
                return $.extend({}, options.widgetPositioning);
            }

            if (({}).toString.call(widgetPositioning) !== '[object Object]') {
                throw new TypeError('widgetPositioning() expects an object variable');
            }
            if (widgetPositioning.horizontal) {
                if (typeof widgetPositioning.horizontal !== 'string') {
                    throw new TypeError('widgetPositioning() horizontal variable must be a string');
                }
                widgetPositioning.horizontal = widgetPositioning.horizontal.toLowerCase();
                if (horizontalModes.indexOf(widgetPositioning.horizontal) === -1) {
                    throw new TypeError('widgetPositioning() expects horizontal parameter to be one of (' + horizontalModes.join(', ') + ')');
                }
                options.widgetPositioning.horizontal = widgetPositioning.horizontal;
            }
            if (widgetPositioning.vertical) {
                if (typeof widgetPositioning.vertical !== 'string') {
                    throw new TypeError('widgetPositioning() vertical variable must be a string');
                }
                widgetPositioning.vertical = widgetPositioning.vertical.toLowerCase();
                if (verticalModes.indexOf(widgetPositioning.vertical) === -1) {
                    throw new TypeError('widgetPositioning() expects vertical parameter to be one of (' + verticalModes.join(', ') + ')');
                }
                options.widgetPositioning.vertical = widgetPositioning.vertical;
            }
            update();
            return picker;
        };

        picker.calendarWeeks = function (calendarWeeks) {
            if (arguments.length === 0) {
                return options.calendarWeeks;
            }

            if (typeof calendarWeeks !== 'boolean') {
                throw new TypeError('calendarWeeks() expects parameter to be a boolean value');
            }

            options.calendarWeeks = calendarWeeks;
            update();
            return picker;
        };

        picker.showTodayButton = function (showTodayButton) {
            if (arguments.length === 0) {
                return options.showTodayButton;
            }

            if (typeof showTodayButton !== 'boolean') {
                throw new TypeError('showTodayButton() expects a boolean parameter');
            }

            options.showTodayButton = showTodayButton;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.showClear = function (showClear) {
            if (arguments.length === 0) {
                return options.showClear;
            }

            if (typeof showClear !== 'boolean') {
                throw new TypeError('showClear() expects a boolean parameter');
            }

            options.showClear = showClear;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.widgetParent = function (widgetParent) {
            if (arguments.length === 0) {
                return options.widgetParent;
            }

            if (typeof widgetParent === 'string') {
                widgetParent = $(widgetParent);
            }

            if (widgetParent !== null && (typeof widgetParent !== 'string' && !(widgetParent instanceof $))) {
                throw new TypeError('widgetParent() expects a string or a jQuery object parameter');
            }

            options.widgetParent = widgetParent;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.keepOpen = function (keepOpen) {
            if (arguments.length === 0) {
                return options.keepOpen;
            }

            if (typeof keepOpen !== 'boolean') {
                throw new TypeError('keepOpen() expects a boolean parameter');
            }

            options.keepOpen = keepOpen;
            return picker;
        };

        picker.focusOnShow = function (focusOnShow) {
            if (arguments.length === 0) {
                return options.focusOnShow;
            }

            if (typeof focusOnShow !== 'boolean') {
                throw new TypeError('focusOnShow() expects a boolean parameter');
            }

            options.focusOnShow = focusOnShow;
            return picker;
        };

        picker.inline = function (inline) {
            if (arguments.length === 0) {
                return options.inline;
            }

            if (typeof inline !== 'boolean') {
                throw new TypeError('inline() expects a boolean parameter');
            }

            options.inline = inline;
            return picker;
        };

        picker.clear = function () {
            clear();
            return picker;
        };

        picker.keyBinds = function (keyBinds) {
            if (arguments.length === 0) {
                return options.keyBinds;
            }

            options.keyBinds = keyBinds;
            return picker;
        };

        picker.getMoment = function (d) {
            return getMoment(d);
        };

        picker.debug = function (debug) {
            if (typeof debug !== 'boolean') {
                throw new TypeError('debug() expects a boolean parameter');
            }

            options.debug = debug;
            return picker;
        };

        picker.allowInputToggle = function (allowInputToggle) {
            if (arguments.length === 0) {
                return options.allowInputToggle;
            }

            if (typeof allowInputToggle !== 'boolean') {
                throw new TypeError('allowInputToggle() expects a boolean parameter');
            }

            options.allowInputToggle = allowInputToggle;
            return picker;
        };

        picker.showClose = function (showClose) {
            if (arguments.length === 0) {
                return options.showClose;
            }

            if (typeof showClose !== 'boolean') {
                throw new TypeError('showClose() expects a boolean parameter');
            }

            options.showClose = showClose;
            return picker;
        };

        picker.keepInvalid = function (keepInvalid) {
            if (arguments.length === 0) {
                return options.keepInvalid;
            }

            if (typeof keepInvalid !== 'boolean') {
                throw new TypeError('keepInvalid() expects a boolean parameter');
            }
            options.keepInvalid = keepInvalid;
            return picker;
        };

        picker.datepickerInput = function (datepickerInput) {
            if (arguments.length === 0) {
                return options.datepickerInput;
            }

            if (typeof datepickerInput !== 'string') {
                throw new TypeError('datepickerInput() expects a string parameter');
            }

            options.datepickerInput = datepickerInput;
            return picker;
        };

        picker.parseInputDate = function (parseInputDate) {
            if (arguments.length === 0) {
                return options.parseInputDate;
            }

            if (typeof parseInputDate !== 'function') {
                throw new TypeError('parseInputDate() sholud be as function');
            }

            options.parseInputDate = parseInputDate;

            return picker;
        };

        picker.disabledTimeIntervals = function (disabledTimeIntervals) {
            ///<signature helpKeyword="$.fn.datetimepicker.disabledTimeIntervals">
            ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
            ///<returns type="array">options.disabledTimeIntervals</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.disabledTimeIntervals_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.disabledTimeIntervals ? $.extend({}, options.disabledTimeIntervals) : options.disabledTimeIntervals);
            }

            if (!disabledTimeIntervals) {
                options.disabledTimeIntervals = false;
                update();
                return picker;
            }
            if (!(disabledTimeIntervals instanceof Array)) {
                throw new TypeError('disabledTimeIntervals() expects an array parameter');
            }
            options.disabledTimeIntervals = disabledTimeIntervals;
            update();
            return picker;
        };

        picker.disabledHours = function (hours) {
            ///<signature helpKeyword="$.fn.datetimepicker.disabledHours">
            ///<summary>Returns an array with the currently set disabled hours on the component.</summary>
            ///<returns type="array">options.disabledHours</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledHours if such exist.</summary>
            ///<param name="hours" locid="$.fn.datetimepicker.disabledHours_p:hours">Takes an [ int ] of values and disallows the user to select only from those hours.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.disabledHours ? $.extend({}, options.disabledHours) : options.disabledHours);
            }

            if (!hours) {
                options.disabledHours = false;
                update();
                return picker;
            }
            if (!(hours instanceof Array)) {
                throw new TypeError('disabledHours() expects an array parameter');
            }
            options.disabledHours = indexGivenHours(hours);
            options.enabledHours = false;
            if (options.useCurrent && !options.keepInvalid) {
                var tries = 0;
                while (!isValid(date, 'h')) {
                    date.add(1, 'h');
                    if (tries === 24) {
                        throw 'Tried 24 times to find a valid date';
                    }
                    tries++;
                }
                setValue(date);
            }
            update();
            return picker;
        };

        picker.enabledHours = function (hours) {
            ///<signature helpKeyword="$.fn.datetimepicker.enabledHours">
            ///<summary>Returns an array with the currently set enabled hours on the component.</summary>
            ///<returns type="array">options.enabledHours</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledHours if such exist.</summary>
            ///<param name="hours" locid="$.fn.datetimepicker.enabledHours_p:hours">Takes an [ int ] of values and allows the user to select only from those hours.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.enabledHours ? $.extend({}, options.enabledHours) : options.enabledHours);
            }

            if (!hours) {
                options.enabledHours = false;
                update();
                return picker;
            }
            if (!(hours instanceof Array)) {
                throw new TypeError('enabledHours() expects an array parameter');
            }
            options.enabledHours = indexGivenHours(hours);
            options.disabledHours = false;
            if (options.useCurrent && !options.keepInvalid) {
                var tries = 0;
                while (!isValid(date, 'h')) {
                    date.add(1, 'h');
                    if (tries === 24) {
                        throw 'Tried 24 times to find a valid date';
                    }
                    tries++;
                }
                setValue(date);
            }
            update();
            return picker;
        };
        /**
         * Returns the component's model current viewDate, a moment object or null if not set. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.
         * @param {Takes string, viewDate, moment, null parameter.} newDate
         * @returns {viewDate.clone()}
         */
        picker.viewDate = function (newDate) {
            if (arguments.length === 0) {
                return viewDate.clone();
            }

            if (!newDate) {
                viewDate = date.clone();
                return picker;
            }

            if (typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                throw new TypeError('viewDate() parameter must be one of [string, moment or Date]');
            }

            viewDate = parseInputDate(newDate);
            viewUpdate();
            return picker;
        };

        // initializing element and component attributes
        if (element.is('input')) {
            input = element;
        } else {
            input = element.find(options.datepickerInput);
            if (input.length === 0) {
                input = element.find('input');
            } else if (!input.is('input')) {
                throw new Error('CSS class "' + options.datepickerInput + '" cannot be applied to non input element');
            }
        }

        if (element.hasClass('input-group')) {
            // in case there is more then one 'input-group-addon' Issue #48
            if (element.find('.datepickerbutton').length === 0) {
                component = element.find('.input-group-addon');
            } else {
                component = element.find('.datepickerbutton');
            }
        }

        if (!options.inline && !input.is('input')) {
            throw new Error('Could not initialize DateTimePicker without an input element');
        }

        // Set defaults for date here now instead of in var declaration
        date = getMoment();
        viewDate = date.clone();

        $.extend(true, options, dataToOptions());

        picker.options(options);

        initFormatting();

        attachDatePickerElementEvents();

        if (input.prop('disabled')) {
            picker.disable();
        }
        if (input.is('input') && input.val().trim().length !== 0) {
            setValue(parseInputDate(input.val().trim()));
        }
        else if (options.defaultDate && input.attr('placeholder') === undefined) {
            setValue(options.defaultDate);
        }
        if (options.inline) {
            show();
        }
        return picker;
    };

    /********************************************************************************
     *
     * jQuery plugin constructor and defaults object
     *
     ********************************************************************************/

    /**
    * See (http://jquery.com/).
    * @name jQuery
    * @class
    * See the jQuery Library  (http://jquery.com/) for full details.  This just
    * documents the function and classes that are added to jQuery by this plug-in.
    */
    /**
     * See (http://jquery.com/)
     * @name fn
     * @class
     * See the jQuery Library  (http://jquery.com/) for full details.  This just
     * documents the function and classes that are added to jQuery by this plug-in.
     * @memberOf jQuery
     */
    /**
     * Show comments
     * @class datetimepicker
     * @memberOf jQuery.fn
     */
    $.fn.datetimepicker = function (options) {
        options = options || {};

        var args = Array.prototype.slice.call(arguments, 1),
            isInstance = true,
            thisMethods = ['destroy', 'hide', 'show', 'toggle'],
            returnValue;

        if (typeof options === 'object') {
            return this.each(function () {
                var $this = $(this),
                    _options;
                if (!$this.data('DateTimePicker')) {
                    // create a private copy of the defaults object
                    _options = $.extend(true, {}, $.fn.datetimepicker.defaults, options);
                    $this.data('DateTimePicker', dateTimePicker($this, _options));
                }
            });
        } else if (typeof options === 'string') {
            this.each(function () {
                var $this = $(this),
                    instance = $this.data('DateTimePicker');
                if (!instance) {
                    throw new Error('bootstrap-datetimepicker("' + options + '") method was called on an element that is not using DateTimePicker');
                }

                returnValue = instance[options].apply(instance, args);
                isInstance = returnValue === instance;
            });

            if (isInstance || $.inArray(options, thisMethods) > -1) {
                return this;
            }

            return returnValue;
        }

        throw new TypeError('Invalid arguments for DateTimePicker: ' + options);
    };

    $.fn.datetimepicker.defaults = {
        timeZone: '',
        format: false,
        dayViewHeaderFormat: 'MMMM YYYY',
        extraFormats: false,
        stepping: 1,
        minDate: false,
        maxDate: false,
        useCurrent: true,
        collapse: true,
        locale: moment.locale(),
        defaultDate: false,
        disabledDates: false,
        enabledDates: false,
        icons: {
            time: 'glyphicon glyphicon-time',
            date: 'glyphicon glyphicon-calendar',
            up: 'glyphicon glyphicon-chevron-up',
            down: 'glyphicon glyphicon-chevron-down',
            previous: 'glyphicon glyphicon-chevron-left',
            next: 'glyphicon glyphicon-chevron-right',
            today: 'glyphicon glyphicon-screenshot',
            clear: 'glyphicon glyphicon-trash',
            close: 'glyphicon glyphicon-remove'
        },
        tooltips: {
            today: 'Go to today',
            clear: 'Clear selection',
            close: 'Close the picker',
            selectMonth: 'Select Month',
            prevMonth: 'Previous Month',
            nextMonth: 'Next Month',
            selectYear: 'Select Year',
            prevYear: 'Previous Year',
            nextYear: 'Next Year',
            selectDecade: 'Select Decade',
            prevDecade: 'Previous Decade',
            nextDecade: 'Next Decade',
            prevCentury: 'Previous Century',
            nextCentury: 'Next Century',
            pickHour: 'Pick Hour',
            incrementHour: 'Increment Hour',
            decrementHour: 'Decrement Hour',
            pickMinute: 'Pick Minute',
            incrementMinute: 'Increment Minute',
            decrementMinute: 'Decrement Minute',
            pickSecond: 'Pick Second',
            incrementSecond: 'Increment Second',
            decrementSecond: 'Decrement Second',
            togglePeriod: 'Toggle Period',
            selectTime: 'Select Time'
        },
        useStrict: false,
        sideBySide: false,
        daysOfWeekDisabled: false,
        calendarWeeks: false,
        viewMode: 'days',
        toolbarPlacement: 'default',
        showTodayButton: false,
        showClear: false,
        showClose: false,
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'auto'
        },
        widgetParent: null,
        ignoreReadonly: false,
        keepOpen: false,
        focusOnShow: true,
        inline: false,
        keepInvalid: false,
        datepickerInput: '.datepickerinput',
        keyBinds: {
            up: function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(7, 'd'));
                } else {
                    this.date(d.clone().add(this.stepping(), 'm'));
                }
            },
            down: function (widget) {
                if (!widget) {
                    this.show();
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(7, 'd'));
                } else {
                    this.date(d.clone().subtract(this.stepping(), 'm'));
                }
            },
            'control up': function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'y'));
                } else {
                    this.date(d.clone().add(1, 'h'));
                }
            },
            'control down': function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'y'));
                } else {
                    this.date(d.clone().subtract(1, 'h'));
                }
            },
            left: function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'd'));
                }
            },
            right: function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'd'));
                }
            },
            pageUp: function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'M'));
                }
            },
            pageDown: function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'M'));
                }
            },
            enter: function () {
                this.hide();
            },
            escape: function () {
                this.hide();
            },
            //tab: function (widget) { //this break the flow of the form. disabling for now
            //    var toggle = widget.find('.picker-switch a[data-action="togglePicker"]');
            //    if(toggle.length > 0) toggle.click();
            //},
            'control space': function (widget) {
                if (!widget) {
                    return;
                }
                if (widget.find('.timepicker').is(':visible')) {
                    widget.find('.btn[data-action="togglePeriod"]').click();
                }
            },
            t: function () {
                this.date(this.getMoment());
            },
            'delete': function () {
                this.clear();
            }
        },
        debug: false,
        allowInputToggle: false,
        disabledTimeIntervals: false,
        disabledHours: false,
        enabledHours: false,
        viewDate: false
    };

    return $.fn.datetimepicker;
}));

/* global Modernizr:true */
;(function( w ){
    "use strict";

    var utils = {};

    utils.classes = {
        hiddenVisually: "u-hidden-visually",
        modifier: "--",
        isActive: "is-active",
        isClosed: "is-closed",
        isOpen: "is-open",
        isClicked: "is-clicked",
        isAnimating: "is-animating",
        isVisible: "is-visible",
        hidden: "u-hidden"
    };

    utils.keyCodes = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };

    /**
     * a11yclick
     * Slightly modified from: http://www.karlgroves.com/2014/11/24/ridiculously-easy-trick-for-keyboard-accessibility/
     */
    utils.a11yclick = function(event) {
        var code = event.charCode || event.keyCode,
            type = event.type;

        if (type === 'click') {
            return true;
        } else if (type === 'keydown') {
            if (code === utils.keyCodes.SPACE || code === utils.keyCodes.ENTER) {
                return true;
            }
        } else {
            return false;
        }
    };
    utils.a11yclickBind = function(el, callback,name) {
        el.on("click." + name + " keydown." + name,function(event){
            if ( w.utils.a11yclick(event)) {
                event.preventDefault(event);
                if( callback && typeof callback === 'function' ) { callback.call(); }
                el.trigger('clicked.'+name);
            }
        });
    };

    utils.doc = w.document;
    utils.supportTransition = Modernizr.csstransitions;
    utils.supportAnimations = Modernizr.cssanimations;
    utils.transEndEventNames = {
        'WebkitTransition'  : 'webkitTransitionEnd',
        'MozTransition'     : 'transitionend',
        'OTransition'       : 'oTransitionEnd',
        'msTransition'      : 'MSTransitionEnd',
        'transition'        : 'transitionend'
    };
    utils.animEndEventNames = {
        'WebkitAnimation' : 'webkitAnimationEnd',
        'OAnimation' : 'oAnimationEnd',
        'msAnimation' : 'MSAnimationEnd',
        'animation' : 'animationend'
    };
    utils.transEndEventName = utils.transEndEventNames[Modernizr.prefixed('transition')];
    utils.animEndEventName = utils.animEndEventNames[Modernizr.prefixed('animation')];

    utils.onEndTransition = function( el, callback ) {
        var onEndCallbackFn = function( ev ) {
            if( utils.supportTransition ) {
                if( ev.target != this ) return;
                this.removeEventListener( utils.transEndEventName, onEndCallbackFn );
            }
            if( callback && typeof callback === 'function' ) { callback.call(); }
        };
        if( utils.supportTransition ) {
            el.addEventListener( utils.transEndEventName, onEndCallbackFn );
        }
        else {
            onEndCallbackFn();
        }
    };

    utils.onEndAnimation = function( el, callback ) {
        var onEndCallbackFn = function( ev ) {
            if( utils.supportAnimations ) {
                if( ev.target != this ) return;
                this.removeEventListener( utils.animEndEventName, onEndCallbackFn );
            }
            if( callback && typeof callback === 'function' ) { callback.call(); }
        };
        if( utils.supportAnimations ) {
            el.addEventListener( utils.animEndEventName, onEndCallbackFn );
        }
        else {
            onEndCallbackFn();
        }
    };

    utils.createModifierClass = function( cl, modifier ){
        return cl + utils.classes.modifier + modifier
    };

    utils.cssModifiers = function( modifiers, cssClasses, baseClass ){
        var arr = modifiers.split(",");
        for(var i=0, l = arr.length; i < l; i++){
            cssClasses.push( utils.createModifierClass(baseClass,arr[i]) );
        }
    };

    utils.getMetaOptions = function( el, name, metadata ){
        var dataAttr = 'data-' + name;
        var dataOptionsAttr = dataAttr + '-options';
        var attr = el.getAttribute( dataAttr ) || el.getAttribute( dataOptionsAttr );
        try {
            return attr && JSON.parse( attr ) || {};
        } catch ( error ) {
            // log error, do not initialize
            if ( console ) {
                console.error( 'Error parsing ' + dataAttr + ' on ' + el.className + ': ' + error );
            }
            return;
        }
    };
    // polyfill raf if needed
    var raf = (function(callback){
        return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
    })();
    utils.raf = function(callback){
        raf(callback);
    };

    // expose global utils
    w.utils = utils;

})(this);


/*
 * TrapTabKey
 * Based on https://github.com/gdkraus/accessible-modal-dialog/blob/master/modal-window.js
 * Copyright (c) 2016 Vasileios Mitsaras.
 * Licensed under MIT
 */

(function( w, $ ){
    "use strict";

    var name = "trab-tab",
        componentName = name + "-component";

    w.componentNamespace = w.componentNamespace || {};

    var TrapTabKey = w.componentNamespace.TrapTabKey = function( element,options ){
        if( !element ){
            throw new Error( "Element required to initialize object" );
        }
        // assign element for method events
        this.element = element;
        this.$element = $( element );
        // Options
        options = options || {};
        this.options = $.extend( {}, this.defaults, options );
    };


    TrapTabKey.prototype.init = function(){

        if ( this.$element.data( componentName ) ) {
            return;
        }

        this.$element.data( componentName, this );
    };

    TrapTabKey.prototype.bindTrap = function(){
        var self = this;

        this.$element
            .on( 'keydown.' + name, function( e ){
                self._trapTabKey(self.$element, e );
            } );
    };

    TrapTabKey.prototype.unbindTrap = function(){
        this.$element
            .off( 'keydown.' + name);
    };

    TrapTabKey.prototype.giveFocus = function(){
        var self = this,
            opts = self.options;

        // get list of all children elements in given object
        var o = self.$element.find('*');

        // set the focus to the first keyboard focusable item
        o.filter(opts.focusableElementsString).filter(':visible').first().focus();

    };


    TrapTabKey.prototype._trapTabKey = function(obj, evt){
        var self = this,
            opts = self.options;

        // if tab or shift-tab pressed
        if (evt.which == 9) {

            // get list of all children elements in given object
            var o = obj.find('*');

            // get list of focusable items
            var focusableItems;
            focusableItems = o.filter(opts.focusableElementsString).filter(':visible')

            // get currently focused item
            var focusedItem;
            focusedItem = jQuery(':focus');

            // get the number of focusable items
            var numberOfFocusableItems;
            numberOfFocusableItems = focusableItems.length

            // get the index of the currently focused item
            var focusedItemIndex;
            focusedItemIndex = focusableItems.index(focusedItem);

            if (evt.shiftKey) {
                //back tab
                // if focused on first item and user preses back-tab, go to the last focusable item
                if (focusedItemIndex == 0) {
                    focusableItems.get(numberOfFocusableItems - 1).focus();
                    evt.preventDefault();
                }

            } else {
                //forward tab
                // if focused on the last item and user preses tab, go to the first focusable item
                if (focusedItemIndex == numberOfFocusableItems - 1) {
                    focusableItems.get(0).focus();
                    evt.preventDefault();
                }
            }
        }

    };

    TrapTabKey.prototype.defaults = {
        focusableElementsString : "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"
    };

    TrapTabKey.defaults = TrapTabKey.prototype.defaults;

})(this, jQuery);

(function( w, $ ){
    "use strict";
    var name = "button",
        componentName = name + "-component",
        utils = w.utils,
        cl = {
            iconOnly: "icon-only",
            withIcon: "icon",
            toggleState: "toggle-state",
            showHide: "visible-on-active"
        };

    w.componentNamespace = w.componentNamespace || {};

    var Button = w.componentNamespace.Button = function( element, options ){
        if( !element ){
            throw new Error( "Element required to initialize object" );
        }
        // assign element for method events
        this.element = element;
        this.$element = $( element );
        // Options
        this.options = options = options || {};
        this.metadata = utils.getMetaOptions( this.element, name );
        this.options = $.extend( {}, this.defaults, this.metadata, options );
    };

    Button.prototype.init = function(){

        if ( this.$element.data( componentName ) ) {
            return;
        }

        this.$element.data( componentName, this );
        this.hasTitle = !!this.$element.attr( "title" );
        this.$element.trigger( "beforecreate." + name );
        this.isPressed = false;
        this._create();

    };

    Button.prototype._create = function(){
        var options = this.options,
            buttonClasses = [options.baseClass],
            buttonTextClasses = [options.baseClass + '__text'];

        if ( options.label === null ) {
            options.label = this.$element.html();
        }

        this.$buttonText = $( '<span></span>' ).html( options.label ).appendTo(this.$element.empty());

        if ( options.icon ) {

            this.$buttonIcon = $( "<span class='"+ options.iconFamily +' ' + utils.createModifierClass(options.iconFamily, options.icon)+"'></span>" ).prependTo(this.$element);
            buttonClasses.push( utils.createModifierClass(options.baseClass,cl.withIcon) );

            if ( options.iconActive ) {
                options.toggle = true;
                this.$buttonIconActive = $( "<span class='"+ options.iconFamily  + ' ' + utils.createModifierClass(options.iconFamily, options.iconActive)+ ' ' +utils.createModifierClass(options.iconFamily, cl.showHide)+ "'></span>" ).insertAfter(this.$buttonIcon);
                buttonClasses.push( utils.createModifierClass(options.baseClass,cl.toggleState) );
            }
            if ( options.hideText ) {
                buttonTextClasses.push(utils.classes.hiddenVisually );
                buttonClasses.push( utils.createModifierClass(options.baseClass,cl.iconOnly) );
            }
        }

        if ( options.modifiers ) {
            utils.cssModifiers(options.modifiers,buttonClasses,options.baseClass);
        }

        this.$buttonText.addClass( buttonTextClasses.join( " " ) );

        if ( options.textActive ) {
            options.toggle = true;
            buttonTextClasses.push( utils.createModifierClass(options.baseClass+'__text',cl.showHide) );
            buttonClasses.push( utils.createModifierClass(options.baseClass,cl.toggleState) );

            this.$buttonTextActive = $( '<span></span>' )
                .addClass( buttonTextClasses.join( " " ) )
                .html( options.textActive )
                .insertAfter(this.$buttonText);
            this.$element.attr('aria-live','polite');
        }

        this.$element.addClass( buttonClasses.join( " " ) );

        if ( options.role) {
            this.$element.attr( "role", options.role );
        }
        if ( options.controls ) {
            this.controls(options.controls);
        }
        if ( options.pressed ) {
            this._isPressed(options.pressed);
        }
        if ( options.expanded ) {
            this.isPressed = true;
            this._isExpanded(options.expanded);
        }
        if ( !this.hasTitle && options.hideText && !options.hideTitle ) {
            this.$element.attr('title',this.$element.text());
        }
        if ( options.ripple && w.componentNamespace.Ripple ) {
            new w.componentNamespace.Ripple( this.element ).init();
        }
        this.$element.trigger( "create." + name );
    };

    Button.prototype._isPressed = function(state){
        this.isPressed = state;
        this.$element.attr( "aria-pressed", state )[ state ? "addClass" : "removeClass" ](utils.classes.isActive);
    };

    Button.prototype._isExpanded = function(state){
        this._isPressed(state);
        this.$element.attr( "aria-expanded", state );
    };

    Button.prototype.controls = function(el){
        this.$element.attr( "aria-controls", el );
    };

    Button.prototype.defaults = {
        baseClass:"c-button",
        role: "button",
        label: null,
        modifiers: null,
        controls: null,
        textActive: null,
        hideText: false,
        hideTitle: false,
        icon: null,
        iconActive: null,
        iconFamily: "o-icon",
        iconPosition: null,
        pressed: false,
        expanded: false,
        ripple: false
    };

    Button.defaults = Button.prototype.defaults;

})(this, jQuery);

(function( w, $ ){
    "use strict";

    var pluginName = "jsButton",
        initSelector = ".js-button";

    $.fn[ pluginName ] = function(){
        return this.each( function(){
            new w.componentNamespace.Button( this ).init();
        });
    };

    // auto-init on enhance (which is called on domready)
    $( document ).bind( "enhance", function( e ){
        $( $( e.target ).is( initSelector ) && e.target ).add( initSelector, e.target ).filter( initSelector )[ pluginName ]();
    });
})(this, jQuery);

;(function( w, $ ){
    "use strict";

    var name = "offcanvas",
        componentName = name + "-component",
        utils = w.utils,
        doc = w.document;

    w.componentNamespace = w.componentNamespace || {};

    var Offcanvas = w.componentNamespace.Offcanvas = function( element,options ){
        if( !element ){
            throw new Error( "Element required to initialize object" );
        }
        // assign element for method events
        this.element = element;
        this.$element = $( element );
        // Options
        this.options = options = options || {};
        this.metadata = utils.getMetaOptions( this.element, name );
        this.options = $.extend( {}, this.defaults, this.metadata, options );
        this.isOpen = false;
        this.onOpen = this.options.onOpen;
        this.onClose = this.options.onClose;
        this.onInit = this.options.onInit;
    };

    Offcanvas.prototype.init = function(){
        if ( this.$element.data( componentName ) ) {
            return;
        }
        this.$element.data( componentName, this );
        this.$element.trigger( "beforecreate." + name );
        this._addAttributes();
        this._createModal();
        this._trapTabKey();
        this._closeButton();
        if( this.onInit && typeof this.onInit === 'function' ) {
            this.onInit.call(this.element);
        }
        this.$element.trigger( "create." + name );
    };

    Offcanvas.prototype._addAttributes = function(){
        var options = this.options,
            panelClasses = [options.baseClass,utils.classes.isClosed],
            panelAttr = {
                tabindex: "-1",
                "aria-hidden": !this.isOpen
            };

        if ( options.role) {
            panelAttr.role = options.role;
        }
        if(!w.utils.supportTransition){
            panelClasses.push( utils.createModifierClass(options.baseClass, options.supportNoTransitionsClass));
        }
        utils.cssModifiers(options.modifiers,panelClasses,options.baseClass );
        this.$element.attr(panelAttr).addClass( panelClasses.join( " " ) );

        // Content-wrap
        this.$content = $('.' + options.contentClass);
        this._contentOpenClasses = [];
        utils.cssModifiers(options.modifiers,this._contentOpenClasses,options.contentClass );

        // Modal
        this._modalOpenClasses = [options.modalClass,utils.classes.isClosed ];
        utils.cssModifiers(options.modifiers,this._modalOpenClasses,options.modalClass );

        // body
        this._bodyOpenClasses = [options.bodyModifierClass+"--visible"];
        utils.cssModifiers(options.modifiers,this._bodyOpenClasses,options.bodyModifierClass);

        if (options.modifiers.toLowerCase().indexOf("reveal") >= 0) {
            this.transitionElement =  this.$content[0];
        } else {
            this.transitionElement = this.element ;
        }
    };

    Offcanvas.prototype._createModal= function() {
        var self = this,
            target = self.$element.parent();
        if (this.options.modal) {
            this.$modal = $( "<div></div>" )
                .on( "mousedown."+name, function() {
                    self.close();
                })
                .appendTo( target );
            this.$modal.addClass( this._modalOpenClasses.join( " " ) );
        }
    };

    Offcanvas.prototype._trapTabKey = function() {
        this.trapTabKey = new w.componentNamespace.TrapTabKey(this.element);
        this.trapTabKey.init();
    };

    Offcanvas.prototype._trapTabEscKey = function() {
        var self = this;
        // close on ESC
        $( doc ).on( "keyup." + name, function(ev){
            var keyCode = ev.keyCode || ev.which;
            if( keyCode === utils.keyCodes.ESCAPE && self.isOpen ) {
                if ($("input").is(":focus")) {
                    return;
                }
                self.close();
            }
        } );
    };

    Offcanvas.prototype._closeButton = function() {
        var self = this,
            options = self.options;
        function closeOffcanvas(){
            self.close();
        }
        this.$closeBtn = this.$element.find('.'+options.closeButtonClass);
        if( this.$closeBtn.length ){
            this.closeBtn = new w.componentNamespace.Button(this.$closeBtn[0]);
            this.closeBtn.init();
            this.closeBtn.controls(this.$element.attr('id'));
            utils.a11yclickBind(this.$closeBtn,closeOffcanvas,name);
        }
    };

    Offcanvas.prototype.open = function(){
        var self = this,
            options = self.options;
        if (!this.isOpen) {
            if (options.resize) {
                this.resize();
            }
            if( !this.$trigger ){
                this.$trigger = this.$element.data( componentName + "-trigger" );
            }
            if( doc.activeElement ){
                this.lastFocus = doc.activeElement;
            }
            this.isOpen = true;
            $('body').addClass(this._bodyOpenClasses.join(" "));

            this._addClasses(this.$element,this.isOpen,true);
            this._addClasses(this.$content,this.isOpen,true);
            if (options.modal) {
                this._addClasses(this.$modal,this.isOpen,true);
            }

            this.$element.attr( "aria-hidden", "false" ).addClass(utils.createModifierClass(options.baseClass,'opening'));
            this.$content.addClass( this._contentOpenClasses.join( " " ));

            // Transition End Callback
            utils.onEndTransition ( this.transitionElement, function() {
                self.trapTabKey.giveFocus();
                self.trapTabKey.bindTrap();
                self._addClasses(self.$element,self.isOpen,false);
                self._addClasses(self.$content,self.isOpen,false);
                if (options.modal) {
                    self._addClasses(self.$modal,self.isOpen,false);
                }
                self.$element.removeClass(utils.createModifierClass(options.baseClass,'opening'));
            } );
            if( this.$trigger ){
                this.$trigger.button._isExpanded(true);
            }
            // callback on open
            //options.onOpen( this );
            if( this.onOpen && typeof this.onOpen === 'function' ) {
                this.onOpen.call(this.$element);
            }
            this.$element.trigger( "open." + name );
            // close on ESC
            this._trapTabEscKey();
        }
    };

    Offcanvas.prototype.close = function(){
        var self = this;

        if( !this.isOpen ){
            return;
        }
        this.isOpen = false;

        this._addClasses(this.$element,this.isOpen,true);
        this._addClasses(this.$content,this.isOpen,true);

        if (this.options.modal) {
            this._addClasses(this.$modal,this.isOpen,true);
        }
        this.$element.attr( "aria-hidden", "true" );

        this.trapTabKey.unbindTrap();

        if( self.$trigger ){
            self.$trigger.button._isExpanded(false);
        }
        utils.onEndTransition ( this.transitionElement, function() {

            self._addClasses(self.$element,self.isOpen,false);
            self._addClasses(self.$content,self.isOpen,false);

            if (self.options.modal) {
                self._addClasses(self.$modal,self.isOpen,false);
            }

            self.$content.removeClass( self._contentOpenClasses.join( " " ) );

            $('body').removeClass(self._bodyOpenClasses.join(" "));

            if( self.lastFocus ){
                self.lastFocus.focus();
            }
        } );
        // callback onClose
        //options.onClose( this );
        if( this.onClose && typeof this.onClose === 'function' ) {
            this.onClose.call(this.element);
        }
        this.$element.trigger( "close." + name );
        $( doc ).off( "keyup." + name);
        $(window).off('.'+name);
    };

    Offcanvas.prototype._addClasses = function(el,isOpen,beforeTransition){
        if (isOpen) {
            if (beforeTransition) {
                el
                    .removeClass(utils.classes.isClosed)
                    .addClass(utils.classes.isAnimating)
                    .addClass(utils.classes.isOpen);
            } else {
                el.removeClass(utils.classes.isAnimating);
            }
        } else {
            if (beforeTransition) {
                el
                    .removeClass( utils.classes.isOpen  )
                    .addClass( utils.classes.isAnimating );
            } else {
                el
                    .addClass( utils.classes.isClosed )
                    .removeClass( utils.classes.isAnimating );
            }
        }
    };

    Offcanvas.prototype.toggle = function(){
        this[ this.isOpen ? "close" : "open" ]();
    };

    Offcanvas.prototype.resize = function(){
        var self = this,ticking;
        function update() {
            ticking = false;
        }
        function requestTick() {
            if(!ticking) {
                utils.raf(update);
            }
            ticking = true;
        }
        function onResize() {
            requestTick();
            self.$element.trigger( "resizing." + name );
            self.close();
        }
        $(window).on('resize.' + name + ' orientationchange.' + name, onResize);
    };

    Offcanvas.prototype._initTrigger = function() {
        var self = this,
            options = self.options,
            offcanvasID = this.$element.attr('id'),
            att = "data-offcanvas-trigger",
            $triggerButton;

        if (!options.target) {
            $triggerButton = $( "["+ att +"='" + offcanvasID + "']" );
        } else {
            $triggerButton = $(options.target);
        }
        new w.componentNamespace.OffcanvasTrigger( $triggerButton[0], { "offcanvas": offcanvasID } ).init();
    };

    Offcanvas.prototype.setButton = function(trigger){
        this.$element.data( componentName + "-trigger", trigger );
    };

    Offcanvas.prototype.defaults = {
        role: "dialog",
        modifiers: "left,overlay",
        baseClass: "c-offcanvas",
        modalClass: "c-offcanvas-bg",
        contentClass: "c-offcanvas-content-wrap",
        closeButtonClass: "js-offcanvas-close",
        bodyModifierClass: "has-offcanvas",
        supportNoTransitionsClass: "support-no-transitions",
        resize: true,
        target: null,
        modal: true,
        onOpen: null,
        onClose: null,
        onInit: null
    };

    Offcanvas.defaults = Offcanvas.prototype.defaults;

})(this, jQuery);

(function( w, $ ){
    "use strict";

    var pluginName = "offcanvas",
        initSelector = ".js-" + pluginName;

    $.fn[ pluginName ] = function(){
        return this.each( function(){
            new w.componentNamespace.Offcanvas( this ).init();
        });
    };

    // auto-init on enhance (which is called on domready)
    $( w.document ).on( "enhance", function(e){
        $( $( e.target ).is( initSelector ) && e.target ).add( initSelector, e.target ).filter( initSelector )[ pluginName ]();
    });

})(this, jQuery);

(function( w, $ ){
    "use strict";

    var name = "offcanvas-trigger",
        componentName = name + "-component",
        utils = w.utils;

    w.componentNamespace = w.componentNamespace || {};

    var OffcanvasTrigger = w.componentNamespace.OffcanvasTrigger = function( element,options ){
        if( !element ){
            throw new Error( "Element required to initialize object" );
        }
        // assign element for method events
        this.element = element;
        this.$element = $( element );
        // Options
        this.options = options = options || {};
        this.options = $.extend( {}, this.defaults, options );
    };

    OffcanvasTrigger.prototype.init = function(){

        if ( this.$element.data( componentName ) ) {
            return;
        }
        this.$element.data( componentName, this );
        this._create();
    };

    OffcanvasTrigger.prototype._create = function(){
        this.options.offcanvas = this.options.offcanvas || this.$element.attr( "data-offcanvas-trigger" );
        this.$offcanvas = $( "#" + this.options.offcanvas );
        this.offcanvas = this.$offcanvas.data( "offcanvas-component" );
        if (!this.offcanvas) {
            throw new Error( "Offcanvas Element not found" );
        }
        this.button = new w.componentNamespace.Button(this.element);
        this.button.init();
        this.button.controls(this.options.offcanvas);
        this.button._isExpanded(false);
        this._bindbehavior();
    };

    OffcanvasTrigger.prototype._bindbehavior = function(){
        var self = this;
        this.offcanvas.setButton(self);
        function toggleOffcanvas(){
            self.offcanvas.toggle();
        }
        utils.a11yclickBind(this.$element,toggleOffcanvas,name);
    };

    OffcanvasTrigger.prototype.defaults = {
        offcanvas: null
    };

})(this, jQuery);


(function( w, $ ){
    "use strict";

    var pluginName = "offcanvas-trigger",
        initSelector = ".js-" + pluginName;

    $.fn[ pluginName ] = function(){
        return this.each( function(){
            new w.componentNamespace.OffcanvasTrigger( this ).init();
        });
    };

    // auto-init on enhance (which is called on domready)
    $( w.document ).on( "enhance", function(e){
        $( $( e.target ).is( initSelector ) && e.target ).add( initSelector, e.target ).filter( initSelector )[ pluginName ]();
    });

})(this, jQuery);

/*!
 * @preserve
 *
 * Readmore.js jQuery plugin
 * Author: @jed_foster
 * Project home: http://jedfoster.github.io/Readmore.js
 * Licensed under the MIT license
 *
 * Debounce function from http://davidwalsh.name/javascript-debounce-function
 */

/* global jQuery */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
  'use strict';

  var readmore = 'readmore',
      defaults = {
        speed: 100,
        collapsedHeight: 200,
        heightMargin: 16,
        moreLink: '<a href="#">Read More</a>',
        lessLink: '<a href="#">Close</a>',
        embedCSS: true,
        blockCSS: 'display: block; width: 100%;',
        startOpen: false,

        // callbacks
        beforeToggle: function(){},
        afterToggle: function(){}
      },
      cssEmbedded = {},
      uniqueIdCounter = 0;

  function debounce(func, wait, immediate) {
    var timeout;

    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (! immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);

      if (callNow) {
        func.apply(context, args);
      }
    };
  }

  function uniqueId(prefix) {
    var id = ++uniqueIdCounter;

    return String(prefix == null ? 'rmjs-' : prefix) + id;
  }

  function setBoxHeights(element) {
    var el = element.clone().css({
          height: 'auto',
          width: element.width(),
          maxHeight: 'none',
          overflow: 'hidden'
        }).insertAfter(element),
        expandedHeight = el.outerHeight(),
        cssMaxHeight = parseInt(el.css({maxHeight: ''}).css('max-height').replace(/[^-\d\.]/g, ''), 10),
        defaultHeight = element.data('defaultHeight');

    el.remove();

    var collapsedHeight = cssMaxHeight || element.data('collapsedHeight') || defaultHeight;

    // Store our measurements.
    element.data({
      expandedHeight: expandedHeight,
      maxHeight: cssMaxHeight,
      collapsedHeight: collapsedHeight
    })
    // and disable any `max-height` property set in CSS
    .css({
      maxHeight: 'none'
    });
  }

  var resizeBoxes = debounce(function() {
    $('[data-readmore]').each(function() {
      var current = $(this),
          isExpanded = (current.attr('aria-expanded') === 'true');

      setBoxHeights(current);

      current.css({
        height: current.data( (isExpanded ? 'expandedHeight' : 'collapsedHeight') )
      });
    });
  }, 100);

  function embedCSS(options) {
    if (! cssEmbedded[options.selector]) {
      var styles = ' ';

      if (options.embedCSS && options.blockCSS !== '') {
        styles += options.selector + ' + [data-readmore-toggle], ' +
          options.selector + '[data-readmore]{' +
            options.blockCSS +
          '}';
      }

      // Include the transition CSS even if embedCSS is false
      styles += options.selector + '[data-readmore]{' +
        'transition: height ' + options.speed + 'ms;' +
        'overflow: hidden;' +
      '}';

      (function(d, u) {
        var css = d.createElement('style');
        css.type = 'text/css';

        if (css.styleSheet) {
          css.styleSheet.cssText = u;
        }
        else {
          css.appendChild(d.createTextNode(u));
        }

        d.getElementsByTagName('head')[0].appendChild(css);
      }(document, styles));

      cssEmbedded[options.selector] = true;
    }
  }

  function Readmore(element, options) {
    this.element = element;

    this.options = $.extend({}, defaults, options);

    embedCSS(this.options);

    this._defaults = defaults;
    this._name = readmore;

    this.init();

    // IE8 chokes on `window.addEventListener`, so need to test for support.
    if (window.addEventListener) {
      // Need to resize boxes when the page has fully loaded.
      window.addEventListener('load', resizeBoxes);
      window.addEventListener('resize', resizeBoxes);
    }
    else {
      window.attachEvent('load', resizeBoxes);
      window.attachEvent('resize', resizeBoxes);
    }
  }


  Readmore.prototype = {
    init: function() {
      var current = $(this.element);

      current.data({
        defaultHeight: this.options.collapsedHeight,
        heightMargin: this.options.heightMargin
      });

      setBoxHeights(current);

      var collapsedHeight = current.data('collapsedHeight'),
          heightMargin = current.data('heightMargin');

      if (current.outerHeight(true) <= collapsedHeight + heightMargin) {
        // The block is shorter than the limit, so there's no need to truncate it.
        return true;
      }
      else {
        var id = current.attr('id') || uniqueId(),
            useLink = this.options.startOpen ? this.options.lessLink : this.options.moreLink;

        current.attr({
          'data-readmore': '',
          'aria-expanded': this.options.startOpen,
          'id': id
        });

        current.after($(useLink)
          .on('click', (function(_this) {
            return function(event) {
              _this.toggle(this, current[0], event);
            };
          })(this))
          .attr({
            'data-readmore-toggle': '',
            'aria-controls': id
          }));

        if (! this.options.startOpen) {
          current.css({
            height: collapsedHeight
          });
        }
      }
    },

    toggle: function(trigger, element, event) {
      if (event) {
        event.preventDefault();
      }

      if (! trigger) {
        trigger = $('[aria-controls="' + _this.element.id + '"]')[0];
      }

      if (! element) {
        element = _this.element;
      }

      var $element = $(element),
          newHeight = '',
          newLink = '',
          expanded = false,
          collapsedHeight = $element.data('collapsedHeight');

      if ($element.height() <= collapsedHeight) {
        newHeight = $element.data('expandedHeight') + 'px';
        newLink = 'lessLink';
        expanded = true;
      }
      else {
        newHeight = collapsedHeight;
        newLink = 'moreLink';
      }

      // Fire beforeToggle callback
      // Since we determined the new "expanded" state above we're now out of sync
      // with our true current state, so we need to flip the value of `expanded`
      this.options.beforeToggle(trigger, $element, ! expanded);

      $element.css({'height': newHeight});

      // Fire afterToggle callback
      $element.on('transitionend', (function(_this) {
        return function() {
          _this.options.afterToggle(trigger, $element, expanded);

          $(this).attr({
            'aria-expanded': expanded
          }).off('transitionend');
        }
      })(this));

      $(trigger).replaceWith($(this.options[newLink])
        .on('click', (function(_this) {
            return function(event) {
              _this.toggle(this, element, event);
            };
          })(this))
        .attr({
          'data-readmore-toggle': '',
          'aria-controls': $element.attr('id')
        }));
    },

    destroy: function() {
      $(this.element).each(function() {
        var current = $(this);

        current.attr({
          'data-readmore': null,
          'aria-expanded': null
        })
          .css({
            maxHeight: '',
            height: ''
          })
          .next('[data-readmore-toggle]')
          .remove();

        current.removeData();
      });
    }
  };


  $.fn.readmore = function(options) {
    var args = arguments,
        selector = this.selector;

    options = options || {};

    if (typeof options === 'object') {
      return this.each(function() {
        if ($.data(this, 'plugin_' + readmore)) {
          var instance = $.data(this, 'plugin_' + readmore);
          instance.destroy.apply(instance);
        }

        options.selector = selector;

        $.data(this, 'plugin_' + readmore, new Readmore(this, options));
      });
    }
    else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
      return this.each(function () {
        var instance = $.data(this, 'plugin_' + readmore);
        if (instance instanceof Readmore && typeof instance[options] === 'function') {
          instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
      });
    }
  };

}));


/*! tether 1.4.0 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tether = factory();
  }
}(this, function(require, exports, module) {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();

  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }

  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }

  return rect;
}

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(el.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }

  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = getActualBoundingClientRect(el);

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getActualBoundingClientRect: getActualBoundingClientRect,
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var doc = this.target.ownerDocument;
      var win = doc.defaultView;

      var scrollbarSize = undefined;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          if (window.matchMedia) {
            // HubSpot/tether#207
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }

          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        if (this.options.bodyElement) {
          this.options.bodyElement.appendChild(this.element);
        } else {
          var offsetParentIsBody = true;
          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }

            currentNode = currentNode.parentNode;
          }

          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      // Account any parent Frames scroll offset
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));
/*! @preserve This js file is bundled through automated tasks, view the repo for the real source */
(function ($) {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Util = (function ($$$1) {


    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */

    var transition = false;

    var MAX_UID = 1000000;

    var TransitionEndEvent = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    };

    // shoutout AngusCroll (https://goo.gl/pxwQGp)
    function toType(obj) {
      return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }

    function isElement(obj) {
      return (obj[0] || obj).nodeType
    }

    function getSpecialTransitionEndEvent() {
      return {
        bindType: transition.end,
        delegateType: transition.end,
        handle: function handle(event) {
          if ($$$1(event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments) // eslint-disable-line prefer-rest-params
          }
          return undefined
        }
      }
    }

    function transitionEndTest() {
      if (window.QUnit) {
        return false
      }

      var el = document.createElement('bootstrap');

      for (var name in TransitionEndEvent) {
        if (el.style[name] !== undefined) {
          return {
            end: TransitionEndEvent[name]
          }
        }
      }

      return false
    }

    function transitionEndEmulator(duration) {
      var this$1 = this;

      var called = false;

      $$$1(this).one(Util.TRANSITION_END, function () {
        called = true;
      });

      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(this$1);
        }
      }, duration);

      return this
    }

    function setTransitionEndSupport() {
      transition = transitionEndTest();

      $$$1.fn.emulateTransitionEnd = transitionEndEmulator;

      if (Util.supportsTransitionEnd()) {
        $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
      }
    }


    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */

    var Util = {

      TRANSITION_END: 'bsTransitionEnd',

      getUID: function getUID(prefix) {
        do {
          // eslint-disable-next-line no-bitwise
          prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix))
        return prefix
      },

      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute('data-target');

        if (!selector) {
          selector = element.getAttribute('href') || '';
          selector = /^#[a-z]/i.test(selector) ? selector : null;
        }

        return selector
      },

      reflow: function reflow(element) {
        return element.offsetHeight
      },

      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $$$1(element).trigger(transition.end);
      },

      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(transition)
      },

      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
          if (configTypes.hasOwnProperty(property)) {
            var expectedTypes = configTypes[property];
            var value         = config[property];
            var valueType     = value && isElement(value) ?
                                  'element' : toType(value);

            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new Error(
                (componentName.toUpperCase()) + ": " +
                "Option \"" + property + "\" provided type \"" + valueType + "\" " +
                "but expected type \"" + expectedTypes + "\".")
            }
          }
        }
      }
    };

    setTransitionEndSupport();

    return Util

  })(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Collapse = (function ($$$1) {


    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                = 'collapse';
    var VERSION             = '4.0.0-alpha.6';
    var DATA_KEY            = 'bs.collapse';
    var EVENT_KEY           = "." + DATA_KEY;
    var DATA_API_KEY        = '.data-api';
    var JQUERY_NO_CONFLICT  = $$$1.fn[NAME];
    var TRANSITION_DURATION = 600;

    var Default = {
      toggle : true,
      parent : ''
    };

    var DefaultType = {
      toggle : 'boolean',
      parent : 'string'
    };

    var Event = {
      SHOW           : ("show" + EVENT_KEY),
      SHOWN          : ("shown" + EVENT_KEY),
      HIDE           : ("hide" + EVENT_KEY),
      HIDDEN         : ("hidden" + EVENT_KEY),
      CLICK_DATA_API : ("click" + EVENT_KEY + DATA_API_KEY)
    };

    var ClassName = {
      SHOW       : 'show',
      COLLAPSE   : 'collapse',
      COLLAPSING : 'collapsing',
      COLLAPSED  : 'collapsed'
    };

    var Dimension = {
      WIDTH  : 'width',
      HEIGHT : 'height'
    };

    var Selector = {
      ACTIVES     : '.card > .show, .card > .collapsing',
      DATA_TOGGLE : '[data-toggle="collapse"]'
    };


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Collapse = function Collapse(element, config) {
      this._isTransitioning = false;
      this._element       = element;
      this._config        = this._getConfig(config);
      this._triggerArray  = $$$1.makeArray($$$1(
        "[data-toggle=\"collapse\"][href=\"#" + (element.id) + "\"]," +
        "[data-toggle=\"collapse\"][data-target=\"#" + (element.id) + "\"]"
      ));

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    };

    var staticAccessors = { VERSION: { configurable: true },Default: { configurable: true } };


    // getters

    staticAccessors.VERSION.get = function () {
      return VERSION
    };

    staticAccessors.Default.get = function () {
      return Default
    };


    // public

    Collapse.prototype.toggle = function toggle () {
      if ($$$1(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    Collapse.prototype.show = function show () {
        var this$1 = this;

      if (this._isTransitioning) {
        throw new Error('Collapse is transitioning')
      }

      if ($$$1(this._element).hasClass(ClassName.SHOW)) {
        return
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = $$$1.makeArray($$$1(this._parent).find(Selector.ACTIVES));
        if (!actives.length) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $$$1(actives).data(DATA_KEY);
        if (activesData && activesData._isTransitioning) {
          return
        }
      }

      var startEvent = $$$1.Event(Event.SHOW);
      $$$1(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return
      }

      if (actives) {
        Collapse._jQueryInterface.call($$$1(actives), 'hide');
        if (!activesData) {
          $$$1(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      $$$1(this._element)
        .removeClass(ClassName.COLLAPSE)
        .addClass(ClassName.COLLAPSING);

      this._element.style[dimension] = 0;
      this._element.setAttribute('aria-expanded', true);

      if (this._triggerArray.length) {
        $$$1(this._triggerArray)
          .removeClass(ClassName.COLLAPSED)
          .attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function () {
        $$$1(this$1._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .addClass(ClassName.SHOW);

        this$1._element.style[dimension] = '';

        this$1.setTransitioning(false);

        $$$1(this$1._element).trigger(Event.SHOWN);
      };

      if (!Util.supportsTransitionEnd()) {
        complete();
        return
      }

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize         = "scroll" + capitalizedDimension;

      $$$1(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION);

      this._element.style[dimension] = (this._element[scrollSize]) + "px";
    };

    Collapse.prototype.hide = function hide () {
        var this$1 = this;

      if (this._isTransitioning) {
        throw new Error('Collapse is transitioning')
      }

      if (!$$$1(this._element).hasClass(ClassName.SHOW)) {
        return
      }

      var startEvent = $$$1.Event(Event.HIDE);
      $$$1(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return
      }

      var dimension     = this._getDimension();
      var offsetDimension = dimension === Dimension.WIDTH ?
        'offsetWidth' : 'offsetHeight';

      this._element.style[dimension] = (this._element[offsetDimension]) + "px";

      Util.reflow(this._element);

      $$$1(this._element)
        .addClass(ClassName.COLLAPSING)
        .removeClass(ClassName.COLLAPSE)
        .removeClass(ClassName.SHOW);

      this._element.setAttribute('aria-expanded', false);

      if (this._triggerArray.length) {
        $$$1(this._triggerArray)
          .addClass(ClassName.COLLAPSED)
          .attr('aria-expanded', false);
      }

      this.setTransitioning(true);

      var complete = function () {
        this$1.setTransitioning(false);
        $$$1(this$1._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';

      if (!Util.supportsTransitionEnd()) {
        complete();
        return
      }

      $$$1(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION);
    };

    Collapse.prototype.setTransitioning = function setTransitioning (isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    Collapse.prototype.dispose = function dispose () {
      $$$1.removeData(this._element, DATA_KEY);

      this._config        = null;
      this._parent        = null;
      this._element       = null;
      this._triggerArray  = null;
      this._isTransitioning = null;
    };


    // private

    Collapse.prototype._getConfig = function _getConfig (config) {
      config = $$$1.extend({}, Default, config);
      config.toggle = Boolean(config.toggle); // coerce string values
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config
    };

    Collapse.prototype._getDimension = function _getDimension () {
      var hasWidth = $$$1(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT
    };

    Collapse.prototype._getParent = function _getParent () {
        var this$1 = this;

      var parent = $$$1(this._config.parent)[0];
      var selector =
        "[data-toggle=\"collapse\"][data-parent=\"" + (this._config.parent) + "\"]";

      $$$1(parent).find(selector).each(function (i, element) {
        this$1._addAriaAndCollapsedClass(
          Collapse._getTargetFromElement(element),
          [element]
        );
      });

      return parent
    };

    Collapse.prototype._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass (element, triggerArray) {
      if (element) {
        var isOpen = $$$1(element).hasClass(ClassName.SHOW);
        element.setAttribute('aria-expanded', isOpen);

        if (triggerArray.length) {
          $$$1(triggerArray)
            .toggleClass(ClassName.COLLAPSED, !isOpen)
            .attr('aria-expanded', isOpen);
        }
      }
    };


    // static

    Collapse._getTargetFromElement = function _getTargetFromElement (element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? $$$1(selector)[0] : null
    };

    Collapse._jQueryInterface = function _jQueryInterface (config) {
      return this.each(function () {
        var $this = $$$1(this);
        var data    = $this.data(DATA_KEY);
        var _config = $$$1.extend(
          {},
          Default,
          $this.data(),
          typeof config === 'object' && config
        );

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(("No method named \"" + config + "\""))
          }
          data[config]();
        }
      })
    };

    Object.defineProperties( Collapse, staticAccessors );


    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();

      var target = Collapse._getTargetFromElement(this);
      var data   = $$$1(target).data(DATA_KEY);
      var config = data ? 'toggle' : $$$1(this).data();

      Collapse._jQueryInterface.call($$$1(target), config);
    });


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME]             = Collapse._jQueryInterface;
    $$$1.fn[NAME].Constructor = Collapse;
    $$$1.fn[NAME].noConflict  = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Collapse._jQueryInterface
    };

    return Collapse

  })(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Alert = (function ($$$1) {


    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                = 'alert';
    var VERSION             = '4.0.0-alpha.6';
    var DATA_KEY            = 'bs.alert';
    var EVENT_KEY           = "." + DATA_KEY;
    var DATA_API_KEY        = '.data-api';
    var JQUERY_NO_CONFLICT  = $$$1.fn[NAME];
    var TRANSITION_DURATION = 150;

    var Selector = {
      DISMISS : '[data-dismiss="alert"]'
    };

    var Event = {
      CLOSE          : ("close" + EVENT_KEY),
      CLOSED         : ("closed" + EVENT_KEY),
      CLICK_DATA_API : ("click" + EVENT_KEY + DATA_API_KEY)
    };

    var ClassName = {
      ALERT : 'alert',
      FADE  : 'fade',
      SHOW  : 'show'
    };


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Alert = function Alert(element) {
      this._element = element;
    };

    var staticAccessors = { VERSION: { configurable: true } };


    // getters

    staticAccessors.VERSION.get = function () {
      return VERSION
    };


    // public

    Alert.prototype.close = function close (element) {
      element = element || this._element;

      var rootElement = this._getRootElement(element);
      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return
      }

      this._removeElement(rootElement);
    };

    Alert.prototype.dispose = function dispose () {
      $$$1.removeData(this._element, DATA_KEY);
      this._element = null;
    };


    // private

    Alert.prototype._getRootElement = function _getRootElement (element) {
      var selector = Util.getSelectorFromElement(element);
      var parent   = false;

      if (selector) {
        parent = $$$1(selector)[0];
      }

      if (!parent) {
        parent = $$$1(element).closest(("." + (ClassName.ALERT)))[0];
      }

      return parent
    };

    Alert.prototype._triggerCloseEvent = function _triggerCloseEvent (element) {
      var closeEvent = $$$1.Event(Event.CLOSE);

      $$$1(element).trigger(closeEvent);
      return closeEvent
    };

    Alert.prototype._removeElement = function _removeElement (element) {
        var this$1 = this;

      $$$1(element).removeClass(ClassName.SHOW);

      if (!Util.supportsTransitionEnd() ||
          !$$$1(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);
        return
      }

      $$$1(element)
        .one(Util.TRANSITION_END, function (event) { return this$1._destroyElement(element, event); })
        .emulateTransitionEnd(TRANSITION_DURATION);
    };

    Alert.prototype._destroyElement = function _destroyElement (element) {
      $$$1(element)
        .detach()
        .trigger(Event.CLOSED)
        .remove();
    };


    // static

    Alert._jQueryInterface = function _jQueryInterface (config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data     = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      })
    };

    Alert._handleDismiss = function _handleDismiss (alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      }
    };

    Object.defineProperties( Alert, staticAccessors );


    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $$$1(document).on(
      Event.CLICK_DATA_API,
      Selector.DISMISS,
      Alert._handleDismiss(new Alert())
    );


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME]             = Alert._jQueryInterface;
    $$$1.fn[NAME].Constructor = Alert;
    $$$1.fn[NAME].noConflict  = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Alert._jQueryInterface
    };

    return Alert

  })(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Modal = (function ($$$1) {


    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                         = 'modal';
    var VERSION                      = '4.0.0-alpha.6';
    var DATA_KEY                     = 'bs.modal';
    var EVENT_KEY                    = "." + DATA_KEY;
    var DATA_API_KEY                 = '.data-api';
    var JQUERY_NO_CONFLICT           = $$$1.fn[NAME];
    var TRANSITION_DURATION          = 300;
    var BACKDROP_TRANSITION_DURATION = 150;
    var ESCAPE_KEYCODE               = 27; // KeyboardEvent.which value for Escape (Esc) key

    var Default = {
      backdrop : true,
      keyboard : true,
      focus    : true,
      show     : true
    };

    var DefaultType = {
      backdrop : '(boolean|string)',
      keyboard : 'boolean',
      focus    : 'boolean',
      show     : 'boolean'
    };

    var Event = {
      HIDE              : ("hide" + EVENT_KEY),
      HIDDEN            : ("hidden" + EVENT_KEY),
      SHOW              : ("show" + EVENT_KEY),
      SHOWN             : ("shown" + EVENT_KEY),
      FOCUSIN           : ("focusin" + EVENT_KEY),
      RESIZE            : ("resize" + EVENT_KEY),
      CLICK_DISMISS     : ("click.dismiss" + EVENT_KEY),
      KEYDOWN_DISMISS   : ("keydown.dismiss" + EVENT_KEY),
      MOUSEUP_DISMISS   : ("mouseup.dismiss" + EVENT_KEY),
      MOUSEDOWN_DISMISS : ("mousedown.dismiss" + EVENT_KEY),
      CLICK_DATA_API    : ("click" + EVENT_KEY + DATA_API_KEY)
    };

    var ClassName = {
      SCROLLBAR_MEASURER : 'modal-scrollbar-measure',
      BACKDROP           : 'modal-backdrop',
      OPEN               : 'modal-open',
      FADE               : 'fade',
      SHOW               : 'show'
    };

    var Selector = {
      DIALOG             : '.modal-dialog',
      DATA_TOGGLE        : '[data-toggle="modal"]',
      DATA_DISMISS       : '[data-dismiss="modal"]',
      FIXED_CONTENT      : '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'
    };


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Modal = function Modal(element, config) {
      this._config            = this._getConfig(config);
      this._element           = element;
      this._dialog            = $$$1(element).find(Selector.DIALOG)[0];
      this._backdrop          = null;
      this._isShown           = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning   = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth    = 0;
    };

    var staticAccessors = { VERSION: { configurable: true },Default: { configurable: true } };


    // getters

    staticAccessors.VERSION.get = function () {
      return VERSION
    };

    staticAccessors.Default.get = function () {
      return Default
    };


    // public

    Modal.prototype.toggle = function toggle (relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget)
    };

    Modal.prototype.show = function show (relatedTarget) {
        var this$1 = this;

      if (this._isTransitioning) {
        throw new Error('Modal is transitioning')
      }

      if (Util.supportsTransitionEnd() &&
        $$$1(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }
      var showEvent = $$$1.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });

      $$$1(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return
      }

      this._isShown = true;

      this._checkScrollbar();
      this._setScrollbar();

      $$$1(document.body).addClass(ClassName.OPEN);

      this._setEscapeEvent();
      this._setResizeEvent();

      $$$1(this._element).on(
        Event.CLICK_DISMISS,
        Selector.DATA_DISMISS,
        function (event) { return this$1.hide(event); }
      );

      $$$1(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $$$1(this$1._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($$$1(event.target).is(this$1._element)) {
            this$1._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () { return this$1._showElement(relatedTarget); });
    };

    Modal.prototype.hide = function hide (event) {
        var this$1 = this;

      if (event) {
        event.preventDefault();
      }

      if (this._isTransitioning) {
        throw new Error('Modal is transitioning')
      }

      var transition = Util.supportsTransitionEnd() &&
        $$$1(this._element).hasClass(ClassName.FADE);
      if (transition) {
        this._isTransitioning = true;
      }

      var hideEvent = $$$1.Event(Event.HIDE);
      $$$1(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return
      }

      this._isShown = false;

      this._setEscapeEvent();
      this._setResizeEvent();

      $$$1(document).off(Event.FOCUSIN);

      $$$1(this._element).removeClass(ClassName.SHOW);

      $$$1(this._element).off(Event.CLICK_DISMISS);
      $$$1(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {
        $$$1(this._element)
          .one(Util.TRANSITION_END, function (event) { return this$1._hideModal(event); })
          .emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideModal();
      }
    };

    Modal.prototype.dispose = function dispose () {
      $$$1.removeData(this._element, DATA_KEY);

      $$$1(window, document, this._element, this._backdrop).off(EVENT_KEY);

      this._config            = null;
      this._element           = null;
      this._dialog            = null;
      this._backdrop          = null;
      this._isShown           = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._originalBodyPadding = null;
      this._scrollbarWidth    = null;
    };


    // private

    Modal.prototype._getConfig = function _getConfig (config) {
      config = $$$1.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config
    };

    Modal.prototype._showElement = function _showElement (relatedTarget) {
        var this$1 = this;

      var transition = Util.supportsTransitionEnd() &&
        $$$1(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode ||
         this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // don't move modals dom position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.scrollTop = 0;

      if (transition) {
        Util.reflow(this._element);
      }

      $$$1(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $$$1.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function () {
        if (this$1._config.focus) {
          this$1._element.focus();
        }
        this$1._isTransitioning = false;
        $$$1(this$1._element).trigger(shownEvent);
      };

      if (transition) {
        $$$1(this._dialog)
          .one(Util.TRANSITION_END, transitionComplete)
          .emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    };

    Modal.prototype._enforceFocus = function _enforceFocus () {
        var this$1 = this;

      $$$1(document)
        .off(Event.FOCUSIN) // guard against infinite focus loop
        .on(Event.FOCUSIN, function (event) {
          if (document !== event.target &&
              this$1._element !== event.target &&
              !$$$1(this$1._element).has(event.target).length) {
            this$1._element.focus();
          }
        });
    };

    Modal.prototype._setEscapeEvent = function _setEscapeEvent () {
        var this$1 = this;

      if (this._isShown && this._config.keyboard) {
        $$$1(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            this$1.hide();
          }
        });

      } else if (!this._isShown) {
        $$$1(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    Modal.prototype._setResizeEvent = function _setResizeEvent () {
        var this$1 = this;

      if (this._isShown) {
        $$$1(window).on(Event.RESIZE, function (event) { return this$1._handleUpdate(event); });
      } else {
        $$$1(window).off(Event.RESIZE);
      }
    };

    Modal.prototype._hideModal = function _hideModal () {
        var this$1 = this;

      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', 'true');
      this._isTransitioning = false;
      this._showBackdrop(function () {
        $$$1(document.body).removeClass(ClassName.OPEN);
        this$1._resetAdjustments();
        this$1._resetScrollbar();
        $$$1(this$1._element).trigger(Event.HIDDEN);
      });
    };

    Modal.prototype._removeBackdrop = function _removeBackdrop () {
      if (this._backdrop) {
        $$$1(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    Modal.prototype._showBackdrop = function _showBackdrop (callback) {
        var this$1 = this;

      var animate = $$$1(this._element).hasClass(ClassName.FADE) ?
        ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        var doAnimate = Util.supportsTransitionEnd() && animate;

        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          $$$1(this._backdrop).addClass(animate);
        }

        $$$1(this._backdrop).appendTo(document.body);

        $$$1(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (this$1._ignoreBackdropClick) {
            this$1._ignoreBackdropClick = false;
            return
          }
          if (event.target !== event.currentTarget) {
            return
          }
          if (this$1._config.backdrop === 'static') {
            this$1._element.focus();
          } else {
            this$1.hide();
          }
        });

        if (doAnimate) {
          Util.reflow(this._backdrop);
        }

        $$$1(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return
        }

        if (!doAnimate) {
          callback();
          return
        }

        $$$1(this._backdrop)
          .one(Util.TRANSITION_END, callback)
          .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);

      } else if (!this._isShown && this._backdrop) {
        $$$1(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function () {
          this$1._removeBackdrop();
          if (callback) {
            callback();
          }
        };

        if (Util.supportsTransitionEnd() &&
           $$$1(this._element).hasClass(ClassName.FADE)) {
          $$$1(this._backdrop)
            .one(Util.TRANSITION_END, callbackRemove)
            .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }

      } else if (callback) {
        callback();
      }
    };


    // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------

    Modal.prototype._handleUpdate = function _handleUpdate () {
      this._adjustDialog();
    };

    Modal.prototype._adjustDialog = function _adjustDialog () {
      var isModalOverflowing =
        this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = (this._scrollbarWidth) + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = (this._scrollbarWidth) + "px";
      }
    };

    Modal.prototype._resetAdjustments = function _resetAdjustments () {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    Modal.prototype._checkScrollbar = function _checkScrollbar () {
      this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    Modal.prototype._setScrollbar = function _setScrollbar () {
      var bodyPadding = parseInt(
        $$$1(Selector.FIXED_CONTENT).css('padding-right') || 0,
        10
      );

      this._originalBodyPadding = document.body.style.paddingRight || '';

      if (this._isBodyOverflowing) {
        document.body.style.paddingRight =
          (bodyPadding + this._scrollbarWidth) + "px";
      }
    };

    Modal.prototype._resetScrollbar = function _resetScrollbar () {
      document.body.style.paddingRight = this._originalBodyPadding;
    };

    Modal.prototype._getScrollbarWidth = function _getScrollbarWidth () { // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth
    };


    // static

    Modal._jQueryInterface = function _jQueryInterface (config, relatedTarget) {
      return this.each(function () {
        var data    = $$$1(this).data(DATA_KEY);
        var _config = $$$1.extend(
          {},
          Modal.Default,
          $$$1(this).data(),
          typeof config === 'object' && config
        );

        if (!data) {
          data = new Modal(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(("No method named \"" + config + "\""))
          }
          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      })
    };

    Object.defineProperties( Modal, staticAccessors );


    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      var this$1 = this;

      var target;
      var selector = Util.getSelectorFromElement(this);

      if (selector) {
        target = $$$1(selector)[0];
      }

      var config = $$$1(target).data(DATA_KEY) ?
        'toggle' : $$$1.extend({}, $$$1(target).data(), $$$1(this).data());

      if (this.tagName === 'A' || this.tagName === 'AREA') {
        event.preventDefault();
      }

      var $target = $$$1(target).one(Event.SHOW, function (showEvent) {
        if (showEvent.isDefaultPrevented()) {
          // only register focus restorer if modal will actually get shown
          return
        }

        $target.one(Event.HIDDEN, function () {
          if ($$$1(this$1).is(':visible')) {
            this$1.focus();
          }
        });
      });

      Modal._jQueryInterface.call($$$1(target), config, this);
    });


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME]             = Modal._jQueryInterface;
    $$$1.fn[NAME].Constructor = Modal;
    $$$1.fn[NAME].noConflict  = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Modal._jQueryInterface
    };

    return Modal

  })(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Dropdown = (function ($$$1) {


    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                     = 'dropdown';
    var VERSION                  = '4.0.0-alpha.6';
    var DATA_KEY                 = 'bs.dropdown';
    var EVENT_KEY                = "." + DATA_KEY;
    var DATA_API_KEY             = '.data-api';
    var JQUERY_NO_CONFLICT       = $$$1.fn[NAME];
    var ESCAPE_KEYCODE           = 27; // KeyboardEvent.which value for Escape (Esc) key
    var ARROW_UP_KEYCODE         = 38; // KeyboardEvent.which value for up arrow key
    var ARROW_DOWN_KEYCODE       = 40; // KeyboardEvent.which value for down arrow key
    var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

    var Event = {
      HIDE             : ("hide" + EVENT_KEY),
      HIDDEN           : ("hidden" + EVENT_KEY),
      SHOW             : ("show" + EVENT_KEY),
      SHOWN            : ("shown" + EVENT_KEY),
      CLICK            : ("click" + EVENT_KEY),
      CLICK_DATA_API   : ("click" + EVENT_KEY + DATA_API_KEY),
      FOCUSIN_DATA_API : ("focusin" + EVENT_KEY + DATA_API_KEY),
      KEYDOWN_DATA_API : ("keydown" + EVENT_KEY + DATA_API_KEY)
    };

    var ClassName = {
      BACKDROP : 'dropdown-backdrop',
      DISABLED : 'disabled',
      SHOW     : 'show'
    };

    var Selector = {
      BACKDROP      : '.dropdown-backdrop',
      DATA_TOGGLE   : '[data-toggle="dropdown"]',
      FORM_CHILD    : '.dropdown form',
      ROLE_MENU     : '[role="menu"]',
      ROLE_LISTBOX  : '[role="listbox"]',
      NAVBAR_NAV    : '.navbar-nav',
      VISIBLE_ITEMS : '[role="menu"] li:not(.disabled) a, '
                    + '[role="listbox"] li:not(.disabled) a'
    };


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Dropdown = function Dropdown(element) {
      this._element = element;

      this._addEventListeners();
    };

    var staticAccessors = { VERSION: { configurable: true } };


    // getters

    staticAccessors.VERSION.get = function () {
      return VERSION
    };


    // public

    Dropdown.prototype.toggle = function toggle () {
      if (this.disabled || $$$1(this).hasClass(ClassName.DISABLED)) {
        return false
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = $$$1(parent).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return false
      }

      if ('ontouchstart' in document.documentElement &&
         !$$$1(parent).closest(Selector.NAVBAR_NAV).length) {

        // if mobile we use a backdrop because click events don't delegate
        var dropdown   = document.createElement('div');
        dropdown.className = ClassName.BACKDROP;
        $$$1(dropdown).insertBefore(this);
        $$$1(dropdown).on('click', Dropdown._clearMenus);
      }

      var relatedTarget = {
        relatedTarget : this
      };
      var showEvent   = $$$1.Event(Event.SHOW, relatedTarget);

      $$$1(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return false
      }

      this.focus();
      this.setAttribute('aria-expanded', true);

      $$$1(parent).toggleClass(ClassName.SHOW);
      $$$1(parent).trigger($$$1.Event(Event.SHOWN, relatedTarget));

      return false
    };

    Dropdown.prototype.dispose = function dispose () {
      $$$1.removeData(this._element, DATA_KEY);
      $$$1(this._element).off(EVENT_KEY);
      this._element = null;
    };


    // private

    Dropdown.prototype._addEventListeners = function _addEventListeners () {
      $$$1(this._element).on(Event.CLICK, this.toggle);
    };


    // static

    Dropdown._jQueryInterface = function _jQueryInterface (config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        if (!data) {
          data = new Dropdown(this);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(("No method named \"" + config + "\""))
          }
          data[config].call(this);
        }
      })
    };

    Dropdown._clearMenus = function _clearMenus (event) {
      if (event && event.which === RIGHT_MOUSE_BUTTON_WHICH) {
        return
      }

      var backdrop = $$$1(Selector.BACKDROP)[0];
      if (backdrop) {
        backdrop.parentNode.removeChild(backdrop);
      }

      var toggles = $$$1.makeArray($$$1(Selector.DATA_TOGGLE));

      for (var i = 0; i < toggles.length; i++) {
        var parent      = Dropdown._getParentFromElement(toggles[i]);
        var relatedTarget = {
          relatedTarget : toggles[i]
        };

        if (!$$$1(parent).hasClass(ClassName.SHOW)) {
          continue
        }

        if (event && (event.type === 'click' &&
            /input|textarea/i.test(event.target.tagName) || event.type === 'focusin')
            && $$$1.contains(parent, event.target)) {
          continue
        }

        var hideEvent = $$$1.Event(Event.HIDE, relatedTarget);
        $$$1(parent).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          continue
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        $$$1(parent)
          .removeClass(ClassName.SHOW)
          .trigger($$$1.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement (element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = $$$1(selector)[0];
      }

      return parent || element.parentNode
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler (event) {
      if (!/(38|40|27|32)/.test(event.which) ||
         /input|textarea/i.test(event.target.tagName)) {
        return
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $$$1(this).hasClass(ClassName.DISABLED)) {
        return
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = $$$1(parent).hasClass(ClassName.SHOW);

      if (!isActive && event.which !== ESCAPE_KEYCODE ||
           isActive && event.which === ESCAPE_KEYCODE) {

        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $$$1(parent).find(Selector.DATA_TOGGLE)[0];
          $$$1(toggle).trigger('focus');
        }

        $$$1(this).trigger('click');
        return
      }

      var items = $$$1(parent).find(Selector.VISIBLE_ITEMS).get();

      if (!items.length) {
        return
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) { // up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) { // down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    Object.defineProperties( Dropdown, staticAccessors );


    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $$$1(document)
      .on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE,  Dropdown._dataApiKeydownHandler)
      .on(Event.KEYDOWN_DATA_API, Selector.ROLE_MENU,    Dropdown._dataApiKeydownHandler)
      .on(Event.KEYDOWN_DATA_API, Selector.ROLE_LISTBOX, Dropdown._dataApiKeydownHandler)
      .on(((Event.CLICK_DATA_API) + " " + (Event.FOCUSIN_DATA_API)), Dropdown._clearMenus)
      .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle)
      .on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
        e.stopPropagation();
      });


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME]             = Dropdown._jQueryInterface;
    $$$1.fn[NAME].Constructor = Dropdown;
    $$$1.fn[NAME].noConflict  = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Dropdown._jQueryInterface
    };

    return Dropdown

  })(jQuery);

  /*!
   * Validator v0.11.9 for Bootstrap 3, by @1000hz
   * Copyright 2017 Cina Saffary
   * Licensed under http://opensource.org/licenses/MIT
   *
   * https://github.com/1000hz/bootstrap-validator
   */

  +function(a){"use strict";function b(b){return b.is('[type="checkbox"]')?b.prop("checked"):b.is('[type="radio"]')?!!a('[name="'+b.attr("name")+'"]:checked').length:b.is("select[multiple]")?(b.val()||[]).length:b.val()}function c(b){return this.each(function(){var c=a(this),e=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b),f=c.data("bs.validator");(f||"destroy"!=b)&&(f||c.data("bs.validator",f=new d(this,e)),"string"==typeof b&&f[b]());})}var d=function(c,e){this.options=e,this.validators=a.extend({},d.VALIDATORS,e.custom),this.$element=a(c),this.$btn=a('button[type="submit"], input[type="submit"]').filter('[form="'+this.$element.attr("id")+'"]').add(this.$element.find('input[type="submit"], button[type="submit"]')),this.update(),this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator",a.proxy(this.onInput,this)),this.$element.on("submit.bs.validator",a.proxy(this.onSubmit,this)),this.$element.on("reset.bs.validator",a.proxy(this.reset,this)),this.$element.find("[data-match]").each(function(){var c=a(this),d=c.attr("data-match");a(d).on("input.bs.validator",function(){b(c)&&c.trigger("input.bs.validator");});}),this.$inputs.filter(function(){return b(a(this))&&!a(this).closest(".has-error").length}).trigger("focusout"),this.$element.attr("novalidate",!0);};d.VERSION="0.11.9",d.INPUT_SELECTOR=':input:not([type="hidden"], [type="submit"], [type="reset"], button)',d.FOCUS_OFFSET=20,d.DEFAULTS={delay:500,html:!1,disable:!0,focus:!0,custom:{},errors:{match:"Does not match",minlength:"Not long enough"},feedback:{success:"glyphicon-ok",error:"glyphicon-remove"}},d.VALIDATORS={"native":function(a){var b=a[0];return b.checkValidity?!b.checkValidity()&&!b.validity.valid&&(b.validationMessage||"error!"):void 0},match:function(b){var c=b.attr("data-match");return b.val()!==a(c).val()&&d.DEFAULTS.errors.match},minlength:function(a){var b=a.attr("data-minlength");return a.val().length<b&&d.DEFAULTS.errors.minlength}},d.prototype.update=function(){var b=this;return this.$inputs=this.$element.find(d.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function(){b.clearErrors(a(this));})),this.toggleSubmit(),this},d.prototype.onInput=function(b){var c=this,d=a(b.target),e="focusout"!==b.type;this.$inputs.is(d)&&this.validateInput(d,e).done(function(){c.toggleSubmit();});},d.prototype.validateInput=function(c,d){var e=(b(c),c.data("bs.validator.errors"));c.is('[type="radio"]')&&(c=this.$element.find('input[name="'+c.attr("name")+'"]'));var f=a.Event("validate.bs.validator",{relatedTarget:c[0]});if(this.$element.trigger(f),!f.isDefaultPrevented()){var g=this;return this.runValidators(c).done(function(b){c.data("bs.validator.errors",b),b.length?d?g.defer(c,g.showErrors):g.showErrors(c):g.clearErrors(c),e&&b.toString()===e.toString()||(f=b.length?a.Event("invalid.bs.validator",{relatedTarget:c[0],detail:b}):a.Event("valid.bs.validator",{relatedTarget:c[0],detail:e}),g.$element.trigger(f)),g.toggleSubmit(),g.$element.trigger(a.Event("validated.bs.validator",{relatedTarget:c[0]}));})}},d.prototype.runValidators=function(c){function d(a){return c.attr("data-"+a+"-error")}function e(){var a=c[0].validity;return a.typeMismatch?c.attr("data-type-error"):a.patternMismatch?c.attr("data-pattern-error"):a.stepMismatch?c.attr("data-step-error"):a.rangeOverflow?c.attr("data-max-error"):a.rangeUnderflow?c.attr("data-min-error"):a.valueMissing?c.attr("data-required-error"):null}function f(){return c.attr("data-error")}function g(a){return d(a)||e()||f()}var h=[],i=a.Deferred();return c.data("bs.validator.deferred")&&c.data("bs.validator.deferred").reject(),c.data("bs.validator.deferred",i),a.each(this.validators,a.proxy(function(a,d){var e=null;!b(c)&&!c.attr("required")||void 0===c.attr("data-"+a)&&"native"!=a||!(e=d.call(this,c))||(e=g(a)||e,!~h.indexOf(e)&&h.push(e));},this)),!h.length&&b(c)&&c.attr("data-remote")?this.defer(c,function(){var d={};d[c.attr("name")]=b(c),a.get(c.attr("data-remote"),d).fail(function(a,b,c){h.push(g("remote")||c);}).always(function(){i.resolve(h);});}):i.resolve(h),i.promise()},d.prototype.validate=function(){var b=this;return a.when(this.$inputs.map(function(){return b.validateInput(a(this),!1)})).then(function(){b.toggleSubmit(),b.focusError();}),this},d.prototype.focusError=function(){if(this.options.focus){var b=this.$element.find(".has-error:first :input");0!==b.length&&(a("html, body").animate({scrollTop:b.offset().top-d.FOCUS_OFFSET},250),b.focus());}},d.prototype.showErrors=function(b){var c=this.options.html?"html":"text",d=b.data("bs.validator.errors"),e=b.closest(".form-group"),f=e.find(".help-block.with-errors"),g=e.find(".form-control-feedback");d.length&&(d=a("<ul/>").addClass("list-unstyled").append(a.map(d,function(b){return a("<li/>")[c](b)})),void 0===f.data("bs.validator.originalContent")&&f.data("bs.validator.originalContent",f.html()),f.empty().append(d),e.addClass("has-error has-danger"),e.hasClass("has-feedback")&&g.removeClass(this.options.feedback.success)&&g.addClass(this.options.feedback.error)&&e.removeClass("has-success"));},d.prototype.clearErrors=function(a){var c=a.closest(".form-group"),d=c.find(".help-block.with-errors"),e=c.find(".form-control-feedback");d.html(d.data("bs.validator.originalContent")),c.removeClass("has-error has-danger has-success"),c.hasClass("has-feedback")&&e.removeClass(this.options.feedback.error)&&e.removeClass(this.options.feedback.success)&&b(a)&&e.addClass(this.options.feedback.success)&&c.addClass("has-success");},d.prototype.hasErrors=function(){function b(){return!!(a(this).data("bs.validator.errors")||[]).length}return!!this.$inputs.filter(b).length},d.prototype.isIncomplete=function(){function c(){var c=b(a(this));return!("string"==typeof c?a.trim(c):c)}return!!this.$inputs.filter("[required]").filter(c).length},d.prototype.onSubmit=function(a){this.validate(),(this.isIncomplete()||this.hasErrors())&&a.preventDefault();},d.prototype.toggleSubmit=function(){this.options.disable&&this.$btn.toggleClass("disabled",this.isIncomplete()||this.hasErrors());},d.prototype.defer=function(b,c){return c=a.proxy(c,this,b),this.options.delay?(window.clearTimeout(b.data("bs.validator.timeout")),void b.data("bs.validator.timeout",window.setTimeout(c,this.options.delay))):c()},d.prototype.reset=function(){return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success),this.$inputs.removeData(["bs.validator.errors","bs.validator.deferred"]).each(function(){var b=a(this),c=b.data("bs.validator.timeout");window.clearTimeout(c)&&b.removeData("bs.validator.timeout");}),this.$element.find(".help-block.with-errors").each(function(){var b=a(this),c=b.data("bs.validator.originalContent");b.removeData("bs.validator.originalContent").html(c);}),this.$btn.removeClass("disabled"),this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"),this},d.prototype.destroy=function(){return this.reset(),this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"),this.$inputs.off(".bs.validator"),this.options=null,this.validators=null,this.$element=null,this.$btn=null,this.$inputs=null,this};var e=a.fn.validator;a.fn.validator=c,a.fn.validator.Constructor=d,a.fn.validator.noConflict=function(){return a.fn.validator=e,this},a(window).on("load",function(){a('form[data-toggle="validator"]').each(function(){var b=a(this);c.call(b,b.data());});});}(jQuery);

  // import tether from 'tether';
  // import "moment/moment";
  // import "moment-timezone/builds/moment-timezone-with-data-2012-2022";
  // import 'js-offcanvas/dist/_js/js-offcanvas';
  // import "eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker";
  // import "readmore-js/readmore";

  /*!
   * IE10 viewport hack for Surface/desktop Windows 8 bug
   * Copyright 2014-2017 The Bootstrap Authors
   * Copyright 2014-2017 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   */
  // See the Getting Started docs for more information:
  // https://getbootstrap.com/getting-started/#support-ie10-width
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    );
    document.head.appendChild(msViewportStyle);
  }

  /*!
 * taxi2airport v0.0.1 (https://taxi2airport.com)
 * by kuus <kunderikuus@gmail.com> (http://kunderikuus.net/)
 * Copyright (C) kunderi kuus, Inc - All Rights Reserved 2016-2017 (Last change on: 3-11-2017)
 */
  // const $ = window.jQuery;

  /**
   * Update copyright year to current year.
   */
  var copyYear = document.getElementById('copy-year');
  if (copyYear) {
    copyYear.innerHTML = new Date().getFullYear();
  }

  var _datetimepickerIcons = {
    next: 'icon icon-arrow_forward',
    previous: 'icon icon-arrow_back',
    up: 'icon icon-arrow_upward',
    down: 'icon icon-arrow_downward',
    date: 'icon icon-date_range',
    time: 'icon icon-schedule'
  };

  /**
   * Set moment locale globally
   */
  if (window.language) {
    moment.locale(window.language);
  }

  /**
   * Get datetimepicker options
   * @see http://eonasdan.github.io/bootstrap-datetimepicker
   * @param  {String}  id
   * @param  {String} dateOrTime
   * @return {Object}
   */
  function _getDatetimePickerOpts (id, dateOrTime) {
    var options = {
      debug: true,
      // keepInvalid: true,
      // keepOpen: true,
      ignoreReadonly: true,
      widgetParent: $('#group_' + id),
      toolbarPlacement: 'top',
      icons: _datetimepickerIcons
    };
    if (window.language) {
      options.locale = window.language;
    }

    if (dateOrTime === 'date') {
      options.dayViewHeaderFormat = 'MMMM YYYY';
      // const today = new Date();
      // let yesterday = new Date(today);
      // let yesterday.setDate(today.getDate() - 1);
      // options.minDate = window.mindate || yesterday; // @@hack datepicker yesterday
      options.minDate = window.mindate || new Date();
      if (window.maxdate) {
        options.maxDate = window.maxdate;
      }
      options.format = 'L';
    } else {
      options.format = 'LT'; // @see http://stackoverflow.com/a/31300407/1938970
      options.stepping = 10; // numberof minutes step in timepicker
      options.keepOpen = true;
    }

    // stretch both pickers to full width on small screen
    if (window.innerWidth < 600) {
      var $parentRow = $('#group_' + id).parents('.row').first();
      $parentRow.css('position', 'relative');
      options.widgetParent = $parentRow;
    }

    return options;
  }

  /**
   * Bootstrap datetimepicker (date)
   */
  function initDatePickers () {
    var $dateOutbound = $('#date_outbound');
    var $dateReturn = $('#date_return');
    $dateOutbound
      .datetimepicker(_getDatetimePickerOpts('date_outbound', 'date'))
      .prev().click(function () {
        $dateOutbound.focus();
      });
    $dateReturn
      .datetimepicker(_getDatetimePickerOpts('date_return', 'date'))
      .prev().click(function () {
        $dateReturn.focus();
      });
  }

  /**
   * Bootstrap datetimepicker (time)
   */
  function initTimePickers () {
    var $timeOutbound = $('#time_outbound');
    var $timeReturn = $('#time_return');

    $timeOutbound
      .datetimepicker(_getDatetimePickerOpts('time_outbound', 'time'))
      .prev().click(function () {
        $timeOutbound.focus();
      });
    $timeReturn
      .datetimepicker(_getDatetimePickerOpts('time_return', 'time'))
      .prev().click(function () {
        $timeReturn.focus();
      });
  }

  /**
   * Reinit datetimepickers, for responsiveness
   * (for now we only need to reinit the time pickers)
   */
  function reinitDatetimepickers() {
    // const $dateOutbound = $('#date_outbound');
    // const $dateReturn = $('#date_return');
    var $timeOutbound = $('#time_outbound');
    var $timeReturn = $('#time_return');

    $timeOutbound.data('DateTimePicker').destroy();
    $timeReturn.data('DateTimePicker').destroy();

    initTimePickers();
  }

  /**
   * TrustPilot widget
   * grabbed from http://jsfiddle.net/pilch/GmttU/
   *
   * See trustpilot iframe widget options
   * @link(http://trustpilot.github.io/developers/#trustbox, here)
   */
  function trustPilotWidget() {
    var $widgets = $('.trustpilot-widget');
    if (!$widgets.length) {
      return;
    }
    var a = document.location.protocol === 'https:' ? 'https://ssl.trustpilot.com' : 'http://s.trustpilot.com',
      b = document.createElement('script');
    b.type = 'text/javascript';
    b.async = true;
    b.src = a + '/tpelements/tp_elements_all.js';
    var c = document.getElementsByTagName('script')[0];
    c.parentNode.insertBefore(b, c);
  }

  /**
   * Mobile off canvas menu
   *
   * @see https://www.npmjs.com/package/js-offcanvas
   */
  function mobileMenu () {
    $(document).trigger('enhance');
  }

  /**
   * Form validation
   * @link(http://1000hz.github.io/bootstrap-validator/)
   */
  function formValidation () {
    $('.form-validate').validator({
      feedback: {
        // success: 'icon icon-check',
        // error: 'icon icon-warning' // icon icon-cross
      }
    });
  }

  /**
   * Initialize readmore areas,
   * using readmore.js jQuery plugin
   *
   * @link(http://jedfoster.com/Readmore.js/)
   */
  function initReadmore() {
    var $readmoreAreas = $('.readmore');

    $readmoreAreas.readmore({
      speed: 180,
      moreLink: '<div class="readmore-toggle"><a href="#">Read more</a> <i class="icon icon-arrow_drop_down"></i></div>',
      lessLink: '<div class="readmore-toggle"><a href="#">Close</a> <i class="icon icon-arrow_drop_up"></i></div>',
      afterToggle: function (trigger, element, expanded) {
        // console.log('ciao');
        $(element).toggleClass('expanded', expanded);
        // return expanded;
      }
    });
  }

  var dragEnd;
  /**
   * Init carousels
   * @uses dragend
   * @see https://github.com/Stereobit/dragend
   */
  function reinitCarousels () {
    var carousel = document.querySelector('.carousel');
    if (!carousel) {
      return;
    }
    var winWidth = window.innerWidth;
    var itemsInPage = 1;

    if (winWidth < 992) {
      if (winWidth > 768) {
        itemsInPage = 3;
      }
      else if (winWidth > 575) {
        itemsInPage = 2;
      }

      if (dragEnd) {
        dragEnd.destroy();
      }
      dragEnd = new Dragend(carousel, {
        itemsInPage: itemsInPage,
        scribe: '50px',
      });
    } else {
      if (dragEnd) {
        dragEnd.destroy();
      }
    }
  }

  /**
   * Init UI
   */
  function initUI () {
    mobileMenu();
    initDatePickers();
    // initTimePickers();
    trustPilotWidget();
    formValidation();
    initReadmore();
    reinitCarousels();

    // $(window).resize($.debounce(250, reinitDatetimepickers));
    $(window).resize($.debounce(250, reinitCarousels));
  }

  // init UI on ready
  $(document).ready(initUI);

  window.t2a = window.t2a || {};

  window.t2a['initTimePickers'] = initTimePickers;
  window.t2a['reinitDatetimepickers'] = reinitDatetimepickers;

}(jQuery));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy90YXhpMmFpcnBvcnQvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy90YXhpMmFpcnBvcnQvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvY29sbGFwc2UuanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvdGF4aTJhaXJwb3J0L25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2FsZXJ0LmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL3RheGkyYWlycG9ydC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL3NyYy9tb2RhbC5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy90YXhpMmFpcnBvcnQvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvZHJvcGRvd24uanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvdGF4aTJhaXJwb3J0L25vZGVfbW9kdWxlcy9ib290c3RyYXAtdmFsaWRhdG9yL2Rpc3QvdmFsaWRhdG9yLm1pbi5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy90YXhpMmFpcnBvcnQvc3JjL2FwcC9zY3JpcHRzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1hbHBoYS42KTogdXRpbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVXRpbCA9ICgoJCkgPT4ge1xuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBQcml2YXRlIFRyYW5zaXRpb25FbmQgSGVscGVyc1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgbGV0IHRyYW5zaXRpb24gPSBmYWxzZVxuXG4gIGNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwXG5cbiAgY29uc3QgVHJhbnNpdGlvbkVuZEV2ZW50ID0ge1xuICAgIFdlYmtpdFRyYW5zaXRpb24gOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgTW96VHJhbnNpdGlvbiAgICA6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICBPVHJhbnNpdGlvbiAgICAgIDogJ29UcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kJyxcbiAgICB0cmFuc2l0aW9uICAgICAgIDogJ3RyYW5zaXRpb25lbmQnXG4gIH1cblxuICAvLyBzaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG4gIGZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2EtekEtWl0rKS8pWzFdLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gKG9ialswXSB8fCBvYmopLm5vZGVUeXBlXG4gIH1cblxuICBmdW5jdGlvbiBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KCkge1xuICAgIHJldHVybiB7XG4gICAgICBiaW5kVHlwZTogdHJhbnNpdGlvbi5lbmQsXG4gICAgICBkZWxlZ2F0ZVR5cGU6IHRyYW5zaXRpb24uZW5kLFxuICAgICAgaGFuZGxlKGV2ZW50KSB7XG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcykpIHtcbiAgICAgICAgICByZXR1cm4gZXZlbnQuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kVGVzdCgpIHtcbiAgICBpZiAod2luZG93LlFVbml0KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Jvb3RzdHJhcCcpXG5cbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gVHJhbnNpdGlvbkVuZEV2ZW50KSB7XG4gICAgICBpZiAoZWwuc3R5bGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVuZDogVHJhbnNpdGlvbkVuZEV2ZW50W25hbWVdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25FbmRFbXVsYXRvcihkdXJhdGlvbikge1xuICAgIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gICAgJCh0aGlzKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgICAgY2FsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcylcbiAgICAgIH1cbiAgICB9LCBkdXJhdGlvbilcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkVuZFRlc3QoKVxuXG4gICAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmRFbXVsYXRvclxuXG4gICAgaWYgKFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkpIHtcbiAgICAgICQuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFB1YmxpYyBVdGlsIEFwaVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBVdGlsID0ge1xuXG4gICAgVFJBTlNJVElPTl9FTkQ6ICdic1RyYW5zaXRpb25FbmQnLFxuXG4gICAgZ2V0VUlEKHByZWZpeCkge1xuICAgICAgZG8ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpIC8vIFwifn5cIiBhY3RzIGxpa2UgYSBmYXN0ZXIgTWF0aC5mbG9vcigpIGhlcmVcbiAgICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG4gICAgICByZXR1cm4gcHJlZml4XG4gICAgfSxcblxuICAgIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JylcblxuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJydcbiAgICAgICAgc2VsZWN0b3IgPSAvXiNbYS16XS9pLnRlc3Qoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxlY3RvclxuICAgIH0sXG5cbiAgICByZWZsb3coZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgfSxcblxuICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcih0cmFuc2l0aW9uLmVuZClcbiAgICB9LFxuXG4gICAgc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odHJhbnNpdGlvbilcbiAgICB9LFxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpIHtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gY29uZmlnVHlwZXMpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1R5cGVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICAgICAgICBjb25zdCB2YWx1ZSAgICAgICAgID0gY29uZmlnW3Byb3BlcnR5XVxuICAgICAgICAgIGNvbnN0IHZhbHVlVHlwZSAgICAgPSB2YWx1ZSAmJiBpc0VsZW1lbnQodmFsdWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgJHtjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCl9OiBgICtcbiAgICAgICAgICAgICAgYE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGAgK1xuICAgICAgICAgICAgICBgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpXG5cbiAgcmV0dXJuIFV0aWxcblxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsXG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjAtYWxwaGEuNik6IGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBDb2xsYXBzZSA9ICgoJCkgPT4ge1xuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnY29sbGFwc2UnXG4gIGNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC4wLjAtYWxwaGEuNidcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5jb2xsYXBzZSdcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuICBjb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OID0gNjAwXG5cbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICB0b2dnbGUgOiB0cnVlLFxuICAgIHBhcmVudCA6ICcnXG4gIH1cblxuICBjb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgICB0b2dnbGUgOiAnYm9vbGVhbicsXG4gICAgcGFyZW50IDogJ3N0cmluZydcbiAgfVxuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIFNIT1cgICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICAgIFNIT1dOICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBISURFICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RBVEFfQVBJIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIFNIT1cgICAgICAgOiAnc2hvdycsXG4gICAgQ09MTEFQU0UgICA6ICdjb2xsYXBzZScsXG4gICAgQ09MTEFQU0lORyA6ICdjb2xsYXBzaW5nJyxcbiAgICBDT0xMQVBTRUQgIDogJ2NvbGxhcHNlZCdcbiAgfVxuXG4gIGNvbnN0IERpbWVuc2lvbiA9IHtcbiAgICBXSURUSCAgOiAnd2lkdGgnLFxuICAgIEhFSUdIVCA6ICdoZWlnaHQnXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBBQ1RJVkVTICAgICA6ICcuY2FyZCA+IC5zaG93LCAuY2FyZCA+IC5jb2xsYXBzaW5nJyxcbiAgICBEQVRBX1RPR0dMRSA6ICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSdcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBDb2xsYXBzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgPSBlbGVtZW50XG4gICAgICB0aGlzLl9jb25maWcgICAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgICAgdGhpcy5fdHJpZ2dlckFycmF5ICAgID0gJC5tYWtlQXJyYXkoJChcbiAgICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJHtlbGVtZW50LmlkfVwiXSxgICtcbiAgICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIyR7ZWxlbWVudC5pZH1cIl1gXG4gICAgICApKVxuXG4gICAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50ID8gdGhpcy5fZ2V0UGFyZW50KCkgOiBudWxsXG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fZWxlbWVudCwgdGhpcy5fdHJpZ2dlckFycmF5KVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0XG4gICAgfVxuXG5cbiAgICAvLyBwdWJsaWNcblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbGxhcHNlIGlzIHRyYW5zaXRpb25pbmcnKVxuICAgICAgfVxuXG4gICAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBhY3RpdmVzXG4gICAgICBsZXQgYWN0aXZlc0RhdGFcblxuICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICBhY3RpdmVzID0gJC5tYWtlQXJyYXkoJCh0aGlzLl9wYXJlbnQpLmZpbmQoU2VsZWN0b3IuQUNUSVZFUykpXG4gICAgICAgIGlmICghYWN0aXZlcy5sZW5ndGgpIHtcbiAgICAgICAgICBhY3RpdmVzID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICAgIGFjdGl2ZXNEYXRhID0gJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1cpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlcykge1xuICAgICAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChhY3RpdmVzKSwgJ2hpZGUnKVxuICAgICAgICBpZiAoIWFjdGl2ZXNEYXRhKSB7XG4gICAgICAgICAgJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZLCBudWxsKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICQodGhpcy5fdHJpZ2dlckFycmF5KVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKVxuICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuICAgICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5TSE9XTilcbiAgICAgIH1cblxuICAgICAgaWYgKCFVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpKSB7XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICAgIGNvbnN0IHNjcm9sbFNpemUgICAgICAgICAgID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YFxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChUUkFOU0lUSU9OX0RVUkFUSU9OKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YFxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ29sbGFwc2UgaXMgdHJhbnNpdGlvbmluZycpXG4gICAgICB9XG5cbiAgICAgIGlmICghJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBkaW1lbnNpb24gICAgICAgPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuICAgICAgY29uc3Qgb2Zmc2V0RGltZW5zaW9uID0gZGltZW5zaW9uID09PSBEaW1lbnNpb24uV0lEVEggP1xuICAgICAgICAnb2Zmc2V0V2lkdGgnIDogJ29mZnNldEhlaWdodCdcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtvZmZzZXREaW1lbnNpb25dfXB4YFxuXG4gICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuXG4gICAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgICAkKHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRClcbiAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgICAgIC50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgICAgaWYgKCFVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpKSB7XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgfVxuXG4gICAgc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGlzVHJhbnNpdGlvbmluZ1xuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX3BhcmVudCAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheSAgICA9IG51bGxcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgY29uZmlnKVxuICAgICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gY29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgICByZXR1cm4gY29uZmlnXG4gICAgfVxuXG4gICAgX2dldERpbWVuc2lvbigpIHtcbiAgICAgIGNvbnN0IGhhc1dpZHRoID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhEaW1lbnNpb24uV0lEVEgpXG4gICAgICByZXR1cm4gaGFzV2lkdGggPyBEaW1lbnNpb24uV0lEVEggOiBEaW1lbnNpb24uSEVJR0hUXG4gICAgfVxuXG4gICAgX2dldFBhcmVudCgpIHtcbiAgICAgIGNvbnN0IHBhcmVudCAgID0gJCh0aGlzLl9jb25maWcucGFyZW50KVswXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPVxuICAgICAgICBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS1wYXJlbnQ9XCIke3RoaXMuX2NvbmZpZy5wYXJlbnR9XCJdYFxuXG4gICAgICAkKHBhcmVudCkuZmluZChzZWxlY3RvcikuZWFjaCgoaSwgZWxlbWVudCkgPT4ge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoXG4gICAgICAgICAgQ29sbGFwc2UuX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpLFxuICAgICAgICAgIFtlbGVtZW50XVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gcGFyZW50XG4gICAgfVxuXG4gICAgX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhlbGVtZW50LCB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGlzT3BlbiA9ICQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuXG4gICAgICAgIGlmICh0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgJCh0cmlnZ2VyQXJyYXkpXG4gICAgICAgICAgICAudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBzdGF0aWNcblxuICAgIHN0YXRpYyBfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICAgIHJldHVybiBzZWxlY3RvciA/ICQoc2VsZWN0b3IpWzBdIDogbnVsbFxuICAgIH1cblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICAgIGxldCBkYXRhICAgICAgPSAkdGhpcy5kYXRhKERBVEFfS0VZKVxuICAgICAgICBjb25zdCBfY29uZmlnID0gJC5leHRlbmQoXG4gICAgICAgICAge30sXG4gICAgICAgICAgRGVmYXVsdCxcbiAgICAgICAgICAkdGhpcy5kYXRhKCksXG4gICAgICAgICAgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG4gICAgICAgIClcblxuICAgICAgICBpZiAoIWRhdGEgJiYgX2NvbmZpZy50b2dnbGUgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBDb2xsYXBzZSh0aGlzLCBfY29uZmlnKVxuICAgICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IHRhcmdldCA9IENvbGxhcHNlLl9nZXRUYXJnZXRGcm9tRWxlbWVudCh0aGlzKVxuICAgIGNvbnN0IGRhdGEgICA9ICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZKVxuICAgIGNvbnN0IGNvbmZpZyA9IGRhdGEgPyAndG9nZ2xlJyA6ICQodGhpcykuZGF0YSgpXG5cbiAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0YXJnZXQpLCBjb25maWcpXG4gIH0pXG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSAgICAgICAgICAgICA9IENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENvbGxhcHNlXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gQ29sbGFwc2VcblxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzZVxuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wLWFscGhhLjYpOiBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgQWxlcnQgPSAoKCQpID0+IHtcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2FsZXJ0J1xuICBjb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuMC4wLWFscGhhLjYnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuYWxlcnQnXG4gIGNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cbiAgY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MFxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIERJU01JU1MgOiAnW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJ1xuICB9XG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgQ0xPU0UgICAgICAgICAgOiBgY2xvc2Uke0VWRU5UX0tFWX1gLFxuICAgIENMT1NFRCAgICAgICAgIDogYGNsb3NlZCR7RVZFTlRfS0VZfWAsXG4gICAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgQUxFUlQgOiAnYWxlcnQnLFxuICAgIEZBREUgIDogJ2ZhZGUnLFxuICAgIFNIT1cgIDogJ3Nob3cnXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY2xhc3MgQWxlcnQge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG5cblxuICAgIC8vIGdldHRlcnNcblxuICAgIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OXG4gICAgfVxuXG5cbiAgICAvLyBwdWJsaWNcblxuICAgIGNsb3NlKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuX2VsZW1lbnRcblxuICAgICAgY29uc3Qgcm9vdEVsZW1lbnQgPSB0aGlzLl9nZXRSb290RWxlbWVudChlbGVtZW50KVxuICAgICAgY29uc3QgY3VzdG9tRXZlbnQgPSB0aGlzLl90cmlnZ2VyQ2xvc2VFdmVudChyb290RWxlbWVudClcblxuICAgICAgaWYgKGN1c3RvbUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZW1vdmVFbGVtZW50KHJvb3RFbGVtZW50KVxuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIH1cblxuXG4gICAgLy8gcHJpdmF0ZVxuXG4gICAgX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgICBsZXQgcGFyZW50ICAgICA9IGZhbHNlXG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBwYXJlbnQgPSAkKHNlbGVjdG9yKVswXVxuICAgICAgfVxuXG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICBwYXJlbnQgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoYC4ke0NsYXNzTmFtZS5BTEVSVH1gKVswXVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyZW50XG4gICAgfVxuXG4gICAgX3RyaWdnZXJDbG9zZUV2ZW50KGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGNsb3NlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkNMT1NFKVxuXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoY2xvc2VFdmVudClcbiAgICAgIHJldHVybiBjbG9zZUV2ZW50XG4gICAgfVxuXG4gICAgX3JlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgaWYgKCFVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHx8XG4gICAgICAgICAgISQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAkKGVsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKGV2ZW50KSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50LCBldmVudCkpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChUUkFOU0lUSU9OX0RVUkFUSU9OKVxuICAgIH1cblxuICAgIF9kZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gICAgICAkKGVsZW1lbnQpXG4gICAgICAgIC5kZXRhY2goKVxuICAgICAgICAudHJpZ2dlcihFdmVudC5DTE9TRUQpXG4gICAgICAgIC5yZW1vdmUoKVxuICAgIH1cblxuXG4gICAgLy8gc3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCAkZWxlbWVudCA9ICQodGhpcylcbiAgICAgICAgbGV0IGRhdGEgICAgICAgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgQWxlcnQodGhpcylcbiAgICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBfaGFuZGxlRGlzbWlzcyhhbGVydEluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuXG4gICAgICAgIGFsZXJ0SW5zdGFuY2UuY2xvc2UodGhpcylcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJChkb2N1bWVudCkub24oXG4gICAgRXZlbnQuQ0xJQ0tfREFUQV9BUEksXG4gICAgU2VsZWN0b3IuRElTTUlTUyxcbiAgICBBbGVydC5faGFuZGxlRGlzbWlzcyhuZXcgQWxlcnQoKSlcbiAgKVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gICAgICAgICAgICAgPSBBbGVydC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBBbGVydFxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gQWxlcnQuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIEFsZXJ0XG5cbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1hbHBoYS42KTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE1vZGFsID0gKCgkKSA9PiB7XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgICAgICAgICA9ICdtb2RhbCdcbiAgY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICAgICAgICA9ICc0LjAuMC1hbHBoYS42J1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgICAgICAgICAgID0gJ2JzLm1vZGFsJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgREFUQV9BUElfS0VZICAgICAgICAgICAgICAgICA9ICcuZGF0YS1hcGknXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgICAgICAgICAgPSAkLmZuW05BTUVdXG4gIGNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT04gICAgICAgICAgPSAzMDBcbiAgY29uc3QgQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MFxuICBjb25zdCBFU0NBUEVfS0VZQ09ERSAgICAgICAgICAgICAgID0gMjcgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuXG4gIGNvbnN0IERlZmF1bHQgPSB7XG4gICAgYmFja2Ryb3AgOiB0cnVlLFxuICAgIGtleWJvYXJkIDogdHJ1ZSxcbiAgICBmb2N1cyAgICA6IHRydWUsXG4gICAgc2hvdyAgICAgOiB0cnVlXG4gIH1cblxuICBjb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgICBiYWNrZHJvcCA6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICBrZXlib2FyZCA6ICdib29sZWFuJyxcbiAgICBmb2N1cyAgICA6ICdib29sZWFuJyxcbiAgICBzaG93ICAgICA6ICdib29sZWFuJ1xuICB9XG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSElERSAgICAgICAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gICAgSElEREVOICAgICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XICAgICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XTiAgICAgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gICAgRk9DVVNJTiAgICAgICAgICAgOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gICAgUkVTSVpFICAgICAgICAgICAgOiBgcmVzaXplJHtFVkVOVF9LRVl9YCxcbiAgICBDTElDS19ESVNNSVNTICAgICA6IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgICBLRVlET1dOX0RJU01JU1MgICA6IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICAgIE1PVVNFVVBfRElTTUlTUyAgIDogYG1vdXNldXAuZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gICAgTU9VU0VET1dOX0RJU01JU1MgOiBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RBVEFfQVBJICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIFNDUk9MTEJBUl9NRUFTVVJFUiA6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXG4gICAgQkFDS0RST1AgICAgICAgICAgIDogJ21vZGFsLWJhY2tkcm9wJyxcbiAgICBPUEVOICAgICAgICAgICAgICAgOiAnbW9kYWwtb3BlbicsXG4gICAgRkFERSAgICAgICAgICAgICAgIDogJ2ZhZGUnLFxuICAgIFNIT1cgICAgICAgICAgICAgICA6ICdzaG93J1xuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgRElBTE9HICAgICAgICAgICAgIDogJy5tb2RhbC1kaWFsb2cnLFxuICAgIERBVEFfVE9HR0xFICAgICAgICA6ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXG4gICAgREFUQV9ESVNNSVNTICAgICAgIDogJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsXG4gICAgRklYRURfQ09OVEVOVCAgICAgIDogJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY2xhc3MgTW9kYWwge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9jb25maWcgICAgICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgICAgPSBlbGVtZW50XG4gICAgICB0aGlzLl9kaWFsb2cgICAgICAgICAgICAgID0gJChlbGVtZW50KS5maW5kKFNlbGVjdG9yLkRJQUxPRylbMF1cbiAgICAgIHRoaXMuX2JhY2tkcm9wICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9pc1Nob3duICAgICAgICAgICAgID0gZmFsc2VcbiAgICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICAgPSBmYWxzZVxuICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgICAgID0gZmFsc2VcbiAgICAgIHRoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcgPSAwXG4gICAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCAgICAgID0gMFxuICAgIH1cblxuXG4gICAgLy8gZ2V0dGVyc1xuXG4gICAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgICAgcmV0dXJuIFZFUlNJT05cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICAgIH1cblxuICAgIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZGFsIGlzIHRyYW5zaXRpb25pbmcnKVxuICAgICAgfVxuXG4gICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJlxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgICB9XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSlcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuXG4gICAgICB0aGlzLl9jaGVja1Njcm9sbGJhcigpXG4gICAgICB0aGlzLl9zZXRTY3JvbGxiYXIoKVxuXG4gICAgICAkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKENsYXNzTmFtZS5PUEVOKVxuXG4gICAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oXG4gICAgICAgIEV2ZW50LkNMSUNLX0RJU01JU1MsXG4gICAgICAgIFNlbGVjdG9yLkRBVEFfRElTTUlTUyxcbiAgICAgICAgKGV2ZW50KSA9PiB0aGlzLmhpZGUoZXZlbnQpXG4gICAgICApXG5cbiAgICAgICQodGhpcy5fZGlhbG9nKS5vbihFdmVudC5NT1VTRURPV05fRElTTUlTUywgKCkgPT4ge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShFdmVudC5NT1VTRVVQX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5fc2hvd0JhY2tkcm9wKCgpID0+IHRoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpKVxuICAgIH1cblxuICAgIGhpZGUoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNb2RhbCBpcyB0cmFuc2l0aW9uaW5nJylcbiAgICAgIH1cblxuICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgJiZcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG5cbiAgICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkZPQ1VTSU4pXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LkNMSUNLX0RJU01JU1MpXG4gICAgICAkKHRoaXMuX2RpYWxvZykub2ZmKEV2ZW50Lk1PVVNFRE9XTl9ESVNNSVNTKVxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoZXZlbnQpID0+IHRoaXMuX2hpZGVNb2RhbChldmVudCkpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oaWRlTW9kYWwoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICAgICQod2luZG93LCBkb2N1bWVudCwgdGhpcy5fZWxlbWVudCwgdGhpcy5fYmFja2Ryb3ApLm9mZihFVkVOVF9LRVkpXG5cbiAgICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fZGlhbG9nICAgICAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2JhY2tkcm9wICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9pc1Nob3duICAgICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgICA9IG51bGxcbiAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBudWxsXG4gICAgICB0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gbnVsbFxuICAgICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggICAgICA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgY29uZmlnKVxuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICAgIHJldHVybiBjb25maWdcbiAgICB9XG5cbiAgICBfc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgJiZcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcblxuICAgICAgaWYgKCF0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgLy8gZG9uJ3QgbW92ZSBtb2RhbHMgZG9tIHBvc2l0aW9uXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMFxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VuZm9yY2VGb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgICAgfVxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICAkKHRoaXMuX2RpYWxvZylcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIHRyYW5zaXRpb25Db21wbGV0ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2VuZm9yY2VGb2N1cygpIHtcbiAgICAgICQoZG9jdW1lbnQpXG4gICAgICAgIC5vZmYoRXZlbnQuRk9DVVNJTikgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgICAgIC5vbihFdmVudC5GT0NVU0lOLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICAgICAgISQodGhpcy5fZWxlbWVudCkuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgdGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuS0VZRE9XTl9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudC5LRVlET1dOX0RJU01JU1MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgJCh3aW5kb3cpLm9uKEV2ZW50LlJFU0laRSwgKGV2ZW50KSA9PiB0aGlzLl9oYW5kbGVVcGRhdGUoZXZlbnQpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh3aW5kb3cpLm9mZihFdmVudC5SRVNJWkUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2hpZGVNb2RhbCgpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgICB0aGlzLl9yZXNldFNjcm9sbGJhcigpXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5ISURERU4pXG4gICAgICB9KVxuICAgIH1cblxuICAgIF9yZW1vdmVCYWNrZHJvcCgpIHtcbiAgICAgIGlmICh0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmUoKVxuICAgICAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfc2hvd0JhY2tkcm9wKGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBhbmltYXRlID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkgP1xuICAgICAgICBDbGFzc05hbWUuRkFERSA6ICcnXG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICBjb25zdCBkb0FuaW1hdGUgPSBVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmIGFuaW1hdGVcblxuICAgICAgICB0aGlzLl9iYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTmFtZSA9IENsYXNzTmFtZS5CQUNLRFJPUFxuXG4gICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkuYWRkQ2xhc3MoYW5pbWF0ZSlcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpXG5cbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5DTElDS19ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGRvQW5pbWF0ZSkge1xuICAgICAgICAgIFV0aWwucmVmbG93KHRoaXMuX2JhY2tkcm9wKVxuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkb0FuaW1hdGUpIHtcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKVxuICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2spXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pXG5cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgICAgY29uc3QgY2FsbGJhY2tSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVtb3ZlQmFja2Ryb3AoKVxuICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmXG4gICAgICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2tSZW1vdmUpXG4gICAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFja1JlbW92ZSgpXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gdGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgICAvLyB0b2RvIChmYXQpOiB0aGVzZSBzaG91bGQgcHJvYmFibHkgYmUgcmVmYWN0b3JlZCBvdXQgb2YgbW9kYWwuanNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBfaGFuZGxlVXBkYXRlKCkge1xuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgICB9XG5cbiAgICBfYWRqdXN0RGlhbG9nKCkge1xuICAgICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID1cbiAgICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICAgIGlmICghdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJ1xuICAgIH1cblxuICAgIF9jaGVja1Njcm9sbGJhcigpIHtcbiAgICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IHRoaXMuX2dldFNjcm9sbGJhcldpZHRoKClcbiAgICB9XG5cbiAgICBfc2V0U2Nyb2xsYmFyKCkge1xuICAgICAgY29uc3QgYm9keVBhZGRpbmcgPSBwYXJzZUludChcbiAgICAgICAgJChTZWxlY3Rvci5GSVhFRF9DT05URU5UKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSB8fCAwLFxuICAgICAgICAxMFxuICAgICAgKVxuXG4gICAgICB0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgfHwgJydcblxuICAgICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID1cbiAgICAgICAgICBgJHtib2R5UGFkZGluZyArIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgICAgfVxuICAgIH1cblxuICAgIF9yZXNldFNjcm9sbGJhcigpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZ1xuICAgIH1cblxuICAgIF9nZXRTY3JvbGxiYXJXaWR0aCgpIHsgLy8gdGh4IGQud2Fsc2hcbiAgICAgIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gQ2xhc3NOYW1lLlNDUk9MTEJBUl9NRUFTVVJFUlxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpXG4gICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aFxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpXG4gICAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbiAgICB9XG5cblxuICAgIC8vIHN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgICAgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgY29uc3QgX2NvbmZpZyA9ICQuZXh0ZW5kKFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIE1vZGFsLkRlZmF1bHQsXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKCksXG4gICAgICAgICAgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG4gICAgICAgIClcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IE1vZGFsKHRoaXMsIF9jb25maWcpXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpXG4gICAgICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5zaG93KSB7XG4gICAgICAgICAgZGF0YS5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IHRhcmdldFxuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRhcmdldCA9ICQoc2VsZWN0b3IpWzBdXG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0gJCh0YXJnZXQpLmRhdGEoREFUQV9LRVkpID9cbiAgICAgICd0b2dnbGUnIDogJC5leHRlbmQoe30sICQodGFyZ2V0KS5kYXRhKCksICQodGhpcykuZGF0YSgpKVxuXG4gICAgaWYgKHRoaXMudGFnTmFtZSA9PT0gJ0EnIHx8IHRoaXMudGFnTmFtZSA9PT0gJ0FSRUEnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgY29uc3QgJHRhcmdldCA9ICQodGFyZ2V0KS5vbmUoRXZlbnQuU0hPVywgKHNob3dFdmVudCkgPT4ge1xuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAkdGFyZ2V0Lm9uZShFdmVudC5ISURERU4sICgpID0+IHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgTW9kYWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGFyZ2V0KSwgY29uZmlnLCB0aGlzKVxuICB9KVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gICAgICAgICAgICAgPSBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBNb2RhbFxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gTW9kYWwuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIE1vZGFsXG5cbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1hbHBoYS42KTogZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IERyb3Bkb3duID0gKCgkKSA9PiB7XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgICAgID0gJ2Ryb3Bkb3duJ1xuICBjb25zdCBWRVJTSU9OICAgICAgICAgICAgICAgICAgPSAnNC4wLjAtYWxwaGEuNidcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgICAgID0gJ2JzLmRyb3Bkb3duJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgICAgICAgPSAnLmRhdGEtYXBpJ1xuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgICAgPSAkLmZuW05BTUVdXG4gIGNvbnN0IEVTQ0FQRV9LRVlDT0RFICAgICAgICAgICA9IDI3IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIEVzY2FwZSAoRXNjKSBrZXlcbiAgY29uc3QgQVJST1dfVVBfS0VZQ09ERSAgICAgICAgID0gMzggLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdXAgYXJyb3cga2V5XG4gIGNvbnN0IEFSUk9XX0RPV05fS0VZQ09ERSAgICAgICA9IDQwIC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGRvd24gYXJyb3cga2V5XG4gIGNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCA9IDMgLy8gTW91c2VFdmVudC53aGljaCB2YWx1ZSBmb3IgdGhlIHJpZ2h0IGJ1dHRvbiAoYXNzdW1pbmcgYSByaWdodC1oYW5kZWQgbW91c2UpXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSElERSAgICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gICAgICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gICAgU0hPVyAgICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XTiAgICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBDTElDSyAgICAgICAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgICBDTElDS19EQVRBX0FQSSAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgICBGT0NVU0lOX0RBVEFfQVBJIDogYGZvY3VzaW4ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICAgIEtFWURPV05fREFUQV9BUEkgOiBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbiAgfVxuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBCQUNLRFJPUCA6ICdkcm9wZG93bi1iYWNrZHJvcCcsXG4gICAgRElTQUJMRUQgOiAnZGlzYWJsZWQnLFxuICAgIFNIT1cgICAgIDogJ3Nob3cnXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBCQUNLRFJPUCAgICAgIDogJy5kcm9wZG93bi1iYWNrZHJvcCcsXG4gICAgREFUQV9UT0dHTEUgICA6ICdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsXG4gICAgRk9STV9DSElMRCAgICA6ICcuZHJvcGRvd24gZm9ybScsXG4gICAgUk9MRV9NRU5VICAgICA6ICdbcm9sZT1cIm1lbnVcIl0nLFxuICAgIFJPTEVfTElTVEJPWCAgOiAnW3JvbGU9XCJsaXN0Ym94XCJdJyxcbiAgICBOQVZCQVJfTkFWICAgIDogJy5uYXZiYXItbmF2JyxcbiAgICBWSVNJQkxFX0lURU1TIDogJ1tyb2xlPVwibWVudVwiXSBsaTpub3QoLmRpc2FibGVkKSBhLCAnXG4gICAgICAgICAgICAgICAgICArICdbcm9sZT1cImxpc3Rib3hcIl0gbGk6bm90KC5kaXNhYmxlZCkgYSdcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBEcm9wZG93biB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcmVudCAgID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMpXG4gICAgICBjb25zdCBpc0FjdGl2ZSA9ICQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgRHJvcGRvd24uX2NsZWFyTWVudXMoKVxuXG4gICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgICEkKHBhcmVudCkuY2xvc2VzdChTZWxlY3Rvci5OQVZCQVJfTkFWKS5sZW5ndGgpIHtcblxuICAgICAgICAvLyBpZiBtb2JpbGUgd2UgdXNlIGEgYmFja2Ryb3AgYmVjYXVzZSBjbGljayBldmVudHMgZG9uJ3QgZGVsZWdhdGVcbiAgICAgICAgY29uc3QgZHJvcGRvd24gICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZHJvcGRvd24uY2xhc3NOYW1lID0gQ2xhc3NOYW1lLkJBQ0tEUk9QXG4gICAgICAgICQoZHJvcGRvd24pLmluc2VydEJlZm9yZSh0aGlzKVxuICAgICAgICAkKGRyb3Bkb3duKS5vbignY2xpY2snLCBEcm9wZG93bi5fY2xlYXJNZW51cylcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldCA6IHRoaXNcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNob3dFdmVudCAgICAgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICAgICQocGFyZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICAgICQocGFyZW50KS50b2dnbGVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgICQocGFyZW50KS50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuU0hPV04sIHJlbGF0ZWRUYXJnZXQpKVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuQ0xJQ0ssIHRoaXMudG9nZ2xlKVxuICAgIH1cblxuXG4gICAgLy8gc3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IERyb3Bkb3duKHRoaXMpXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddLmNhbGwodGhpcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgX2NsZWFyTWVudXMoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC53aGljaCA9PT0gUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBiYWNrZHJvcCA9ICQoU2VsZWN0b3IuQkFDS0RST1ApWzBdXG4gICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgYmFja2Ryb3AucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiYWNrZHJvcClcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9nZ2xlcyA9ICQubWFrZUFycmF5KCQoU2VsZWN0b3IuREFUQV9UT0dHTEUpKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZ2dsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcGFyZW50ICAgICAgICA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0b2dnbGVzW2ldKVxuICAgICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQgOiB0b2dnbGVzW2ldXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50ICYmIChldmVudC50eXBlID09PSAnY2xpY2snICYmXG4gICAgICAgICAgICAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSB8fCBldmVudC50eXBlID09PSAnZm9jdXNpbicpXG4gICAgICAgICAgICAmJiAkLmNvbnRhaW5zKHBhcmVudCwgZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG5cbiAgICAgICAgJChwYXJlbnQpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuSElEREVOLCByZWxhdGVkVGFyZ2V0KSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgX2dldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGxldCBwYXJlbnRcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBwYXJlbnQgPSAkKHNlbGVjdG9yKVswXVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIH1cblxuICAgIHN0YXRpYyBfZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICBpZiAoIS8oMzh8NDB8Mjd8MzIpLy50ZXN0KGV2ZW50LndoaWNoKSB8fFxuICAgICAgICAgL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICQodGhpcykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyZW50ICAgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcylcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICBpZiAoIWlzQWN0aXZlICYmIGV2ZW50LndoaWNoICE9PSBFU0NBUEVfS0VZQ09ERSB8fFxuICAgICAgICAgICBpc0FjdGl2ZSAmJiBldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcblxuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgY29uc3QgdG9nZ2xlID0gJChwYXJlbnQpLmZpbmQoU2VsZWN0b3IuREFUQV9UT0dHTEUpWzBdXG4gICAgICAgICAgJCh0b2dnbGUpLnRyaWdnZXIoJ2ZvY3VzJylcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcykudHJpZ2dlcignY2xpY2snKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbXMgPSAkKHBhcmVudCkuZmluZChTZWxlY3Rvci5WSVNJQkxFX0lURU1TKS5nZXQoKVxuXG4gICAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihldmVudC50YXJnZXQpXG5cbiAgICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfVVBfS0VZQ09ERSAmJiBpbmRleCA+IDApIHsgLy8gdXBcbiAgICAgICAgaW5kZXgtLVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX0RPV05fS0VZQ09ERSAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHsgLy8gZG93blxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgaW5kZXggPSAwXG4gICAgICB9XG5cbiAgICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpXG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQoZG9jdW1lbnQpXG4gICAgLm9uKEV2ZW50LktFWURPV05fREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCAgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcilcbiAgICAub24oRXZlbnQuS0VZRE9XTl9EQVRBX0FQSSwgU2VsZWN0b3IuUk9MRV9NRU5VLCAgICBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuICAgIC5vbihFdmVudC5LRVlET1dOX0RBVEFfQVBJLCBTZWxlY3Rvci5ST0xFX0xJU1RCT1gsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gICAgLm9uKGAke0V2ZW50LkNMSUNLX0RBVEFfQVBJfSAke0V2ZW50LkZPQ1VTSU5fREFUQV9BUEl9YCwgRHJvcGRvd24uX2NsZWFyTWVudXMpXG4gICAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgRHJvcGRvd24ucHJvdG90eXBlLnRvZ2dsZSlcbiAgICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkZPUk1fQ0hJTEQsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfSlcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdICAgICAgICAgICAgID0gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gRHJvcGRvd25cbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBEcm9wZG93blxuXG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvKiFcbiAqIFZhbGlkYXRvciB2MC4xMS45IGZvciBCb290c3RyYXAgMywgYnkgQDEwMDBoelxuICogQ29weXJpZ2h0IDIwMTcgQ2luYSBTYWZmYXJ5XG4gKiBMaWNlbnNlZCB1bmRlciBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tLzEwMDBoei9ib290c3RyYXAtdmFsaWRhdG9yXG4gKi9cblxuK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIGIuaXMoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKT9iLnByb3AoXCJjaGVja2VkXCIpOmIuaXMoJ1t0eXBlPVwicmFkaW9cIl0nKT8hIWEoJ1tuYW1lPVwiJytiLmF0dHIoXCJuYW1lXCIpKydcIl06Y2hlY2tlZCcpLmxlbmd0aDpiLmlzKFwic2VsZWN0W211bHRpcGxlXVwiKT8oYi52YWwoKXx8W10pLmxlbmd0aDpiLnZhbCgpfWZ1bmN0aW9uIGMoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcyksZT1hLmV4dGVuZCh7fSxkLkRFRkFVTFRTLGMuZGF0YSgpLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxmPWMuZGF0YShcImJzLnZhbGlkYXRvclwiKTsoZnx8XCJkZXN0cm95XCIhPWIpJiYoZnx8Yy5kYXRhKFwiYnMudmFsaWRhdG9yXCIsZj1uZXcgZCh0aGlzLGUpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZltiXSgpKX0pfXZhciBkPWZ1bmN0aW9uKGMsZSl7dGhpcy5vcHRpb25zPWUsdGhpcy52YWxpZGF0b3JzPWEuZXh0ZW5kKHt9LGQuVkFMSURBVE9SUyxlLmN1c3RvbSksdGhpcy4kZWxlbWVudD1hKGMpLHRoaXMuJGJ0bj1hKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmZpbHRlcignW2Zvcm09XCInK3RoaXMuJGVsZW1lbnQuYXR0cihcImlkXCIpKydcIl0nKS5hZGQodGhpcy4kZWxlbWVudC5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpKSx0aGlzLnVwZGF0ZSgpLHRoaXMuJGVsZW1lbnQub24oXCJpbnB1dC5icy52YWxpZGF0b3IgY2hhbmdlLmJzLnZhbGlkYXRvciBmb2N1c291dC5icy52YWxpZGF0b3JcIixhLnByb3h5KHRoaXMub25JbnB1dCx0aGlzKSksdGhpcy4kZWxlbWVudC5vbihcInN1Ym1pdC5icy52YWxpZGF0b3JcIixhLnByb3h5KHRoaXMub25TdWJtaXQsdGhpcykpLHRoaXMuJGVsZW1lbnQub24oXCJyZXNldC5icy52YWxpZGF0b3JcIixhLnByb3h5KHRoaXMucmVzZXQsdGhpcykpLHRoaXMuJGVsZW1lbnQuZmluZChcIltkYXRhLW1hdGNoXVwiKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxkPWMuYXR0cihcImRhdGEtbWF0Y2hcIik7YShkKS5vbihcImlucHV0LmJzLnZhbGlkYXRvclwiLGZ1bmN0aW9uKCl7YihjKSYmYy50cmlnZ2VyKFwiaW5wdXQuYnMudmFsaWRhdG9yXCIpfSl9KSx0aGlzLiRpbnB1dHMuZmlsdGVyKGZ1bmN0aW9uKCl7cmV0dXJuIGIoYSh0aGlzKSkmJiFhKHRoaXMpLmNsb3Nlc3QoXCIuaGFzLWVycm9yXCIpLmxlbmd0aH0pLnRyaWdnZXIoXCJmb2N1c291dFwiKSx0aGlzLiRlbGVtZW50LmF0dHIoXCJub3ZhbGlkYXRlXCIsITApfTtkLlZFUlNJT049XCIwLjExLjlcIixkLklOUFVUX1NFTEVDVE9SPSc6aW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdLCBbdHlwZT1cInN1Ym1pdFwiXSwgW3R5cGU9XCJyZXNldFwiXSwgYnV0dG9uKScsZC5GT0NVU19PRkZTRVQ9MjAsZC5ERUZBVUxUUz17ZGVsYXk6NTAwLGh0bWw6ITEsZGlzYWJsZTohMCxmb2N1czohMCxjdXN0b206e30sZXJyb3JzOnttYXRjaDpcIkRvZXMgbm90IG1hdGNoXCIsbWlubGVuZ3RoOlwiTm90IGxvbmcgZW5vdWdoXCJ9LGZlZWRiYWNrOntzdWNjZXNzOlwiZ2x5cGhpY29uLW9rXCIsZXJyb3I6XCJnbHlwaGljb24tcmVtb3ZlXCJ9fSxkLlZBTElEQVRPUlM9e1wibmF0aXZlXCI6ZnVuY3Rpb24oYSl7dmFyIGI9YVswXTtyZXR1cm4gYi5jaGVja1ZhbGlkaXR5PyFiLmNoZWNrVmFsaWRpdHkoKSYmIWIudmFsaWRpdHkudmFsaWQmJihiLnZhbGlkYXRpb25NZXNzYWdlfHxcImVycm9yIVwiKTp2b2lkIDB9LG1hdGNoOmZ1bmN0aW9uKGIpe3ZhciBjPWIuYXR0cihcImRhdGEtbWF0Y2hcIik7cmV0dXJuIGIudmFsKCkhPT1hKGMpLnZhbCgpJiZkLkRFRkFVTFRTLmVycm9ycy5tYXRjaH0sbWlubGVuZ3RoOmZ1bmN0aW9uKGEpe3ZhciBiPWEuYXR0cihcImRhdGEtbWlubGVuZ3RoXCIpO3JldHVybiBhLnZhbCgpLmxlbmd0aDxiJiZkLkRFRkFVTFRTLmVycm9ycy5taW5sZW5ndGh9fSxkLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oKXt2YXIgYj10aGlzO3JldHVybiB0aGlzLiRpbnB1dHM9dGhpcy4kZWxlbWVudC5maW5kKGQuSU5QVVRfU0VMRUNUT1IpLmFkZCh0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLXZhbGlkYXRlPVwidHJ1ZVwiXScpKS5ub3QodGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS12YWxpZGF0ZT1cImZhbHNlXCJdJykuZWFjaChmdW5jdGlvbigpe2IuY2xlYXJFcnJvcnMoYSh0aGlzKSl9KSksdGhpcy50b2dnbGVTdWJtaXQoKSx0aGlzfSxkLnByb3RvdHlwZS5vbklucHV0PWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMsZD1hKGIudGFyZ2V0KSxlPVwiZm9jdXNvdXRcIiE9PWIudHlwZTt0aGlzLiRpbnB1dHMuaXMoZCkmJnRoaXMudmFsaWRhdGVJbnB1dChkLGUpLmRvbmUoZnVuY3Rpb24oKXtjLnRvZ2dsZVN1Ym1pdCgpfSl9LGQucHJvdG90eXBlLnZhbGlkYXRlSW5wdXQ9ZnVuY3Rpb24oYyxkKXt2YXIgZT0oYihjKSxjLmRhdGEoXCJicy52YWxpZGF0b3IuZXJyb3JzXCIpKTtjLmlzKCdbdHlwZT1cInJhZGlvXCJdJykmJihjPXRoaXMuJGVsZW1lbnQuZmluZCgnaW5wdXRbbmFtZT1cIicrYy5hdHRyKFwibmFtZVwiKSsnXCJdJykpO3ZhciBmPWEuRXZlbnQoXCJ2YWxpZGF0ZS5icy52YWxpZGF0b3JcIix7cmVsYXRlZFRhcmdldDpjWzBdfSk7aWYodGhpcy4kZWxlbWVudC50cmlnZ2VyKGYpLCFmLmlzRGVmYXVsdFByZXZlbnRlZCgpKXt2YXIgZz10aGlzO3JldHVybiB0aGlzLnJ1blZhbGlkYXRvcnMoYykuZG9uZShmdW5jdGlvbihiKXtjLmRhdGEoXCJicy52YWxpZGF0b3IuZXJyb3JzXCIsYiksYi5sZW5ndGg/ZD9nLmRlZmVyKGMsZy5zaG93RXJyb3JzKTpnLnNob3dFcnJvcnMoYyk6Zy5jbGVhckVycm9ycyhjKSxlJiZiLnRvU3RyaW5nKCk9PT1lLnRvU3RyaW5nKCl8fChmPWIubGVuZ3RoP2EuRXZlbnQoXCJpbnZhbGlkLmJzLnZhbGlkYXRvclwiLHtyZWxhdGVkVGFyZ2V0OmNbMF0sZGV0YWlsOmJ9KTphLkV2ZW50KFwidmFsaWQuYnMudmFsaWRhdG9yXCIse3JlbGF0ZWRUYXJnZXQ6Y1swXSxkZXRhaWw6ZX0pLGcuJGVsZW1lbnQudHJpZ2dlcihmKSksZy50b2dnbGVTdWJtaXQoKSxnLiRlbGVtZW50LnRyaWdnZXIoYS5FdmVudChcInZhbGlkYXRlZC5icy52YWxpZGF0b3JcIix7cmVsYXRlZFRhcmdldDpjWzBdfSkpfSl9fSxkLnByb3RvdHlwZS5ydW5WYWxpZGF0b3JzPWZ1bmN0aW9uKGMpe2Z1bmN0aW9uIGQoYSl7cmV0dXJuIGMuYXR0cihcImRhdGEtXCIrYStcIi1lcnJvclwiKX1mdW5jdGlvbiBlKCl7dmFyIGE9Y1swXS52YWxpZGl0eTtyZXR1cm4gYS50eXBlTWlzbWF0Y2g/Yy5hdHRyKFwiZGF0YS10eXBlLWVycm9yXCIpOmEucGF0dGVybk1pc21hdGNoP2MuYXR0cihcImRhdGEtcGF0dGVybi1lcnJvclwiKTphLnN0ZXBNaXNtYXRjaD9jLmF0dHIoXCJkYXRhLXN0ZXAtZXJyb3JcIik6YS5yYW5nZU92ZXJmbG93P2MuYXR0cihcImRhdGEtbWF4LWVycm9yXCIpOmEucmFuZ2VVbmRlcmZsb3c/Yy5hdHRyKFwiZGF0YS1taW4tZXJyb3JcIik6YS52YWx1ZU1pc3Npbmc/Yy5hdHRyKFwiZGF0YS1yZXF1aXJlZC1lcnJvclwiKTpudWxsfWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5hdHRyKFwiZGF0YS1lcnJvclwiKX1mdW5jdGlvbiBnKGEpe3JldHVybiBkKGEpfHxlKCl8fGYoKX12YXIgaD1bXSxpPWEuRGVmZXJyZWQoKTtyZXR1cm4gYy5kYXRhKFwiYnMudmFsaWRhdG9yLmRlZmVycmVkXCIpJiZjLmRhdGEoXCJicy52YWxpZGF0b3IuZGVmZXJyZWRcIikucmVqZWN0KCksYy5kYXRhKFwiYnMudmFsaWRhdG9yLmRlZmVycmVkXCIsaSksYS5lYWNoKHRoaXMudmFsaWRhdG9ycyxhLnByb3h5KGZ1bmN0aW9uKGEsZCl7dmFyIGU9bnVsbDshYihjKSYmIWMuYXR0cihcInJlcXVpcmVkXCIpfHx2b2lkIDA9PT1jLmF0dHIoXCJkYXRhLVwiK2EpJiZcIm5hdGl2ZVwiIT1hfHwhKGU9ZC5jYWxsKHRoaXMsYykpfHwoZT1nKGEpfHxlLCF+aC5pbmRleE9mKGUpJiZoLnB1c2goZSkpfSx0aGlzKSksIWgubGVuZ3RoJiZiKGMpJiZjLmF0dHIoXCJkYXRhLXJlbW90ZVwiKT90aGlzLmRlZmVyKGMsZnVuY3Rpb24oKXt2YXIgZD17fTtkW2MuYXR0cihcIm5hbWVcIildPWIoYyksYS5nZXQoYy5hdHRyKFwiZGF0YS1yZW1vdGVcIiksZCkuZmFpbChmdW5jdGlvbihhLGIsYyl7aC5wdXNoKGcoXCJyZW1vdGVcIil8fGMpfSkuYWx3YXlzKGZ1bmN0aW9uKCl7aS5yZXNvbHZlKGgpfSl9KTppLnJlc29sdmUoaCksaS5wcm9taXNlKCl9LGQucHJvdG90eXBlLnZhbGlkYXRlPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcztyZXR1cm4gYS53aGVuKHRoaXMuJGlucHV0cy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gYi52YWxpZGF0ZUlucHV0KGEodGhpcyksITEpfSkpLnRoZW4oZnVuY3Rpb24oKXtiLnRvZ2dsZVN1Ym1pdCgpLGIuZm9jdXNFcnJvcigpfSksdGhpc30sZC5wcm90b3R5cGUuZm9jdXNFcnJvcj1mdW5jdGlvbigpe2lmKHRoaXMub3B0aW9ucy5mb2N1cyl7dmFyIGI9dGhpcy4kZWxlbWVudC5maW5kKFwiLmhhcy1lcnJvcjpmaXJzdCA6aW5wdXRcIik7MCE9PWIubGVuZ3RoJiYoYShcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOmIub2Zmc2V0KCkudG9wLWQuRk9DVVNfT0ZGU0VUfSwyNTApLGIuZm9jdXMoKSl9fSxkLnByb3RvdHlwZS5zaG93RXJyb3JzPWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMub3B0aW9ucy5odG1sP1wiaHRtbFwiOlwidGV4dFwiLGQ9Yi5kYXRhKFwiYnMudmFsaWRhdG9yLmVycm9yc1wiKSxlPWIuY2xvc2VzdChcIi5mb3JtLWdyb3VwXCIpLGY9ZS5maW5kKFwiLmhlbHAtYmxvY2sud2l0aC1lcnJvcnNcIiksZz1lLmZpbmQoXCIuZm9ybS1jb250cm9sLWZlZWRiYWNrXCIpO2QubGVuZ3RoJiYoZD1hKFwiPHVsLz5cIikuYWRkQ2xhc3MoXCJsaXN0LXVuc3R5bGVkXCIpLmFwcGVuZChhLm1hcChkLGZ1bmN0aW9uKGIpe3JldHVybiBhKFwiPGxpLz5cIilbY10oYil9KSksdm9pZCAwPT09Zi5kYXRhKFwiYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudFwiKSYmZi5kYXRhKFwiYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudFwiLGYuaHRtbCgpKSxmLmVtcHR5KCkuYXBwZW5kKGQpLGUuYWRkQ2xhc3MoXCJoYXMtZXJyb3IgaGFzLWRhbmdlclwiKSxlLmhhc0NsYXNzKFwiaGFzLWZlZWRiYWNrXCIpJiZnLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKSYmZy5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suZXJyb3IpJiZlLnJlbW92ZUNsYXNzKFwiaGFzLXN1Y2Nlc3NcIikpfSxkLnByb3RvdHlwZS5jbGVhckVycm9ycz1mdW5jdGlvbihhKXt2YXIgYz1hLmNsb3Nlc3QoXCIuZm9ybS1ncm91cFwiKSxkPWMuZmluZChcIi5oZWxwLWJsb2NrLndpdGgtZXJyb3JzXCIpLGU9Yy5maW5kKFwiLmZvcm0tY29udHJvbC1mZWVkYmFja1wiKTtkLmh0bWwoZC5kYXRhKFwiYnMudmFsaWRhdG9yLm9yaWdpbmFsQ29udGVudFwiKSksYy5yZW1vdmVDbGFzcyhcImhhcy1lcnJvciBoYXMtZGFuZ2VyIGhhcy1zdWNjZXNzXCIpLGMuaGFzQ2xhc3MoXCJoYXMtZmVlZGJhY2tcIikmJmUucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLmVycm9yKSYmZS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suc3VjY2VzcykmJmIoYSkmJmUuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLnN1Y2Nlc3MpJiZjLmFkZENsYXNzKFwiaGFzLXN1Y2Nlc3NcIil9LGQucHJvdG90eXBlLmhhc0Vycm9ycz1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXtyZXR1cm4hIShhKHRoaXMpLmRhdGEoXCJicy52YWxpZGF0b3IuZXJyb3JzXCIpfHxbXSkubGVuZ3RofXJldHVybiEhdGhpcy4kaW5wdXRzLmZpbHRlcihiKS5sZW5ndGh9LGQucHJvdG90eXBlLmlzSW5jb21wbGV0ZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGMoKXt2YXIgYz1iKGEodGhpcykpO3JldHVybiEoXCJzdHJpbmdcIj09dHlwZW9mIGM/YS50cmltKGMpOmMpfXJldHVybiEhdGhpcy4kaW5wdXRzLmZpbHRlcihcIltyZXF1aXJlZF1cIikuZmlsdGVyKGMpLmxlbmd0aH0sZC5wcm90b3R5cGUub25TdWJtaXQ9ZnVuY3Rpb24oYSl7dGhpcy52YWxpZGF0ZSgpLCh0aGlzLmlzSW5jb21wbGV0ZSgpfHx0aGlzLmhhc0Vycm9ycygpKSYmYS5wcmV2ZW50RGVmYXVsdCgpfSxkLnByb3RvdHlwZS50b2dnbGVTdWJtaXQ9ZnVuY3Rpb24oKXt0aGlzLm9wdGlvbnMuZGlzYWJsZSYmdGhpcy4kYnRuLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIix0aGlzLmlzSW5jb21wbGV0ZSgpfHx0aGlzLmhhc0Vycm9ycygpKX0sZC5wcm90b3R5cGUuZGVmZXI9ZnVuY3Rpb24oYixjKXtyZXR1cm4gYz1hLnByb3h5KGMsdGhpcyxiKSx0aGlzLm9wdGlvbnMuZGVsYXk/KHdpbmRvdy5jbGVhclRpbWVvdXQoYi5kYXRhKFwiYnMudmFsaWRhdG9yLnRpbWVvdXRcIikpLHZvaWQgYi5kYXRhKFwiYnMudmFsaWRhdG9yLnRpbWVvdXRcIix3aW5kb3cuc2V0VGltZW91dChjLHRoaXMub3B0aW9ucy5kZWxheSkpKTpjKCl9LGQucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGVsZW1lbnQuZmluZChcIi5mb3JtLWNvbnRyb2wtZmVlZGJhY2tcIikucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLmVycm9yKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suc3VjY2VzcyksdGhpcy4kaW5wdXRzLnJlbW92ZURhdGEoW1wiYnMudmFsaWRhdG9yLmVycm9yc1wiLFwiYnMudmFsaWRhdG9yLmRlZmVycmVkXCJdKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxjPWIuZGF0YShcImJzLnZhbGlkYXRvci50aW1lb3V0XCIpO3dpbmRvdy5jbGVhclRpbWVvdXQoYykmJmIucmVtb3ZlRGF0YShcImJzLnZhbGlkYXRvci50aW1lb3V0XCIpfSksdGhpcy4kZWxlbWVudC5maW5kKFwiLmhlbHAtYmxvY2sud2l0aC1lcnJvcnNcIikuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksYz1iLmRhdGEoXCJicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50XCIpO2IucmVtb3ZlRGF0YShcImJzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnRcIikuaHRtbChjKX0pLHRoaXMuJGJ0bi5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpLHRoaXMuJGVsZW1lbnQuZmluZChcIi5oYXMtZXJyb3IsIC5oYXMtZGFuZ2VyLCAuaGFzLXN1Y2Nlc3NcIikucmVtb3ZlQ2xhc3MoXCJoYXMtZXJyb3IgaGFzLWRhbmdlciBoYXMtc3VjY2Vzc1wiKSx0aGlzfSxkLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVzZXQoKSx0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoXCJub3ZhbGlkYXRlXCIpLnJlbW92ZURhdGEoXCJicy52YWxpZGF0b3JcIikub2ZmKFwiLmJzLnZhbGlkYXRvclwiKSx0aGlzLiRpbnB1dHMub2ZmKFwiLmJzLnZhbGlkYXRvclwiKSx0aGlzLm9wdGlvbnM9bnVsbCx0aGlzLnZhbGlkYXRvcnM9bnVsbCx0aGlzLiRlbGVtZW50PW51bGwsdGhpcy4kYnRuPW51bGwsdGhpcy4kaW5wdXRzPW51bGwsdGhpc307dmFyIGU9YS5mbi52YWxpZGF0b3I7YS5mbi52YWxpZGF0b3I9YyxhLmZuLnZhbGlkYXRvci5Db25zdHJ1Y3Rvcj1kLGEuZm4udmFsaWRhdG9yLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi52YWxpZGF0b3I9ZSx0aGlzfSxhKHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXthKCdmb3JtW2RhdGEtdG9nZ2xlPVwidmFsaWRhdG9yXCJdJykuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyk7Yy5jYWxsKGIsYi5kYXRhKCkpfSl9KX0oalF1ZXJ5KTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gaW1wb3J0IHRldGhlciBmcm9tICd0ZXRoZXInO1xuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL2NvbGxhcHNlJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy9hbGVydCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvbW9kYWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL2Ryb3Bkb3duJztcbmltcG9ydCBcImJvb3RzdHJhcC12YWxpZGF0b3IvZGlzdC92YWxpZGF0b3IubWluXCI7XG4vLyBpbXBvcnQgXCJtb21lbnQvbW9tZW50XCI7XG4vLyBpbXBvcnQgXCJtb21lbnQtdGltZXpvbmUvYnVpbGRzL21vbWVudC10aW1lem9uZS13aXRoLWRhdGEtMjAxMi0yMDIyXCI7XG4vLyBpbXBvcnQgJ2pzLW9mZmNhbnZhcy9kaXN0L19qcy9qcy1vZmZjYW52YXMnO1xuLy8gaW1wb3J0IFwiZW9uYXNkYW4tYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyL3NyYy9qcy9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXJcIjtcbi8vIGltcG9ydCBcInJlYWRtb3JlLWpzL3JlYWRtb3JlXCI7XG5cbi8qIVxuICogSUUxMCB2aWV3cG9ydCBoYWNrIGZvciBTdXJmYWNlL2Rlc2t0b3AgV2luZG93cyA4IGJ1Z1xuICogQ29weXJpZ2h0IDIwMTQtMjAxNyBUaGUgQm9vdHN0cmFwIEF1dGhvcnNcbiAqIENvcHlyaWdodCAyMDE0LTIwMTcgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuLy8gU2VlIHRoZSBHZXR0aW5nIFN0YXJ0ZWQgZG9jcyBmb3IgbW9yZSBpbmZvcm1hdGlvbjpcbi8vIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9nZXR0aW5nLXN0YXJ0ZWQvI3N1cHBvcnQtaWUxMC13aWR0aFxuaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlXFwvMTBcXC4wLykpIHtcbiAgdmFyIG1zVmlld3BvcnRTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgbXNWaWV3cG9ydFN0eWxlLmFwcGVuZENoaWxkKFxuICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgJ0AtbXMtdmlld3BvcnR7d2lkdGg6YXV0byFpbXBvcnRhbnR9J1xuICAgIClcbiAgKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1zVmlld3BvcnRTdHlsZSlcbn1cblxuLyohIEBsaWNlbnNlIGNyZWRpdHMgKi9cbi8vIGNvbnN0ICQgPSB3aW5kb3cualF1ZXJ5O1xuXG4vKipcbiAqIFVwZGF0ZSBjb3B5cmlnaHQgeWVhciB0byBjdXJyZW50IHllYXIuXG4gKi9cbmNvbnN0IGNvcHlZZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHkteWVhcicpO1xuaWYgKGNvcHlZZWFyKSB7XG4gIGNvcHlZZWFyLmlubmVySFRNTCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbn1cblxuY29uc3QgX2RhdGV0aW1lcGlja2VySWNvbnMgPSB7XG4gIG5leHQ6ICdpY29uIGljb24tYXJyb3dfZm9yd2FyZCcsXG4gIHByZXZpb3VzOiAnaWNvbiBpY29uLWFycm93X2JhY2snLFxuICB1cDogJ2ljb24gaWNvbi1hcnJvd191cHdhcmQnLFxuICBkb3duOiAnaWNvbiBpY29uLWFycm93X2Rvd253YXJkJyxcbiAgZGF0ZTogJ2ljb24gaWNvbi1kYXRlX3JhbmdlJyxcbiAgdGltZTogJ2ljb24gaWNvbi1zY2hlZHVsZSdcbn07XG5cbi8qKlxuICogU2V0IG1vbWVudCBsb2NhbGUgZ2xvYmFsbHlcbiAqL1xuaWYgKHdpbmRvdy5sYW5ndWFnZSkge1xuICBtb21lbnQubG9jYWxlKHdpbmRvdy5sYW5ndWFnZSk7XG59XG5cbi8qKlxuICogR2V0IGRhdGV0aW1lcGlja2VyIG9wdGlvbnNcbiAqIEBzZWUgaHR0cDovL2VvbmFzZGFuLmdpdGh1Yi5pby9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXJcbiAqIEBwYXJhbSAge1N0cmluZ30gIGlkXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRhdGVPclRpbWVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gX2dldERhdGV0aW1lUGlja2VyT3B0cyAoaWQsIGRhdGVPclRpbWUpIHtcbiAgbGV0IG9wdGlvbnMgPSB7XG4gICAgZGVidWc6IHRydWUsXG4gICAgLy8ga2VlcEludmFsaWQ6IHRydWUsXG4gICAgLy8ga2VlcE9wZW46IHRydWUsXG4gICAgaWdub3JlUmVhZG9ubHk6IHRydWUsXG4gICAgd2lkZ2V0UGFyZW50OiAkKCcjZ3JvdXBfJyArIGlkKSxcbiAgICB0b29sYmFyUGxhY2VtZW50OiAndG9wJyxcbiAgICBpY29uczogX2RhdGV0aW1lcGlja2VySWNvbnNcbiAgfTtcbiAgaWYgKHdpbmRvdy5sYW5ndWFnZSkge1xuICAgIG9wdGlvbnMubG9jYWxlID0gd2luZG93Lmxhbmd1YWdlO1xuICB9XG5cbiAgaWYgKGRhdGVPclRpbWUgPT09ICdkYXRlJykge1xuICAgIG9wdGlvbnMuZGF5Vmlld0hlYWRlckZvcm1hdCA9ICdNTU1NIFlZWVknO1xuICAgIC8vIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAvLyBsZXQgeWVzdGVyZGF5ID0gbmV3IERhdGUodG9kYXkpO1xuICAgIC8vIGxldCB5ZXN0ZXJkYXkuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgLSAxKTtcbiAgICAvLyBvcHRpb25zLm1pbkRhdGUgPSB3aW5kb3cubWluZGF0ZSB8fCB5ZXN0ZXJkYXk7IC8vIEBAaGFjayBkYXRlcGlja2VyIHllc3RlcmRheVxuICAgIG9wdGlvbnMubWluRGF0ZSA9IHdpbmRvdy5taW5kYXRlIHx8IG5ldyBEYXRlKCk7XG4gICAgaWYgKHdpbmRvdy5tYXhkYXRlKSB7XG4gICAgICBvcHRpb25zLm1heERhdGUgPSB3aW5kb3cubWF4ZGF0ZTtcbiAgICB9XG4gICAgb3B0aW9ucy5mb3JtYXQgPSAnTCc7XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucy5mb3JtYXQgPSAnTFQnOyAvLyBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMxMzAwNDA3LzE5Mzg5NzBcbiAgICBvcHRpb25zLnN0ZXBwaW5nID0gMTA7IC8vIG51bWJlcm9mIG1pbnV0ZXMgc3RlcCBpbiB0aW1lcGlja2VyXG4gICAgb3B0aW9ucy5rZWVwT3BlbiA9IHRydWU7XG4gIH1cblxuICAvLyBzdHJldGNoIGJvdGggcGlja2VycyB0byBmdWxsIHdpZHRoIG9uIHNtYWxsIHNjcmVlblxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA2MDApIHtcbiAgICBjb25zdCAkcGFyZW50Um93ID0gJCgnI2dyb3VwXycgKyBpZCkucGFyZW50cygnLnJvdycpLmZpcnN0KCk7XG4gICAgJHBhcmVudFJvdy5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgb3B0aW9ucy53aWRnZXRQYXJlbnQgPSAkcGFyZW50Um93O1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbi8qKlxuICogQm9vdHN0cmFwIGRhdGV0aW1lcGlja2VyIChkYXRlKVxuICovXG5mdW5jdGlvbiBpbml0RGF0ZVBpY2tlcnMgKCkge1xuICBjb25zdCAkZGF0ZU91dGJvdW5kID0gJCgnI2RhdGVfb3V0Ym91bmQnKTtcbiAgY29uc3QgJGRhdGVSZXR1cm4gPSAkKCcjZGF0ZV9yZXR1cm4nKTtcbiAgJGRhdGVPdXRib3VuZFxuICAgIC5kYXRldGltZXBpY2tlcihfZ2V0RGF0ZXRpbWVQaWNrZXJPcHRzKCdkYXRlX291dGJvdW5kJywgJ2RhdGUnKSlcbiAgICAucHJldigpLmNsaWNrKCgpID0+IHtcbiAgICAgICRkYXRlT3V0Ym91bmQuZm9jdXMoKTtcbiAgICB9KTtcbiAgJGRhdGVSZXR1cm5cbiAgICAuZGF0ZXRpbWVwaWNrZXIoX2dldERhdGV0aW1lUGlja2VyT3B0cygnZGF0ZV9yZXR1cm4nLCAnZGF0ZScpKVxuICAgIC5wcmV2KCkuY2xpY2soKCkgPT4ge1xuICAgICAgJGRhdGVSZXR1cm4uZm9jdXMoKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBCb290c3RyYXAgZGF0ZXRpbWVwaWNrZXIgKHRpbWUpXG4gKi9cbmZ1bmN0aW9uIGluaXRUaW1lUGlja2VycyAoKSB7XG4gIGNvbnN0ICR0aW1lT3V0Ym91bmQgPSAkKCcjdGltZV9vdXRib3VuZCcpO1xuICBjb25zdCAkdGltZVJldHVybiA9ICQoJyN0aW1lX3JldHVybicpO1xuXG4gICR0aW1lT3V0Ym91bmRcbiAgICAuZGF0ZXRpbWVwaWNrZXIoX2dldERhdGV0aW1lUGlja2VyT3B0cygndGltZV9vdXRib3VuZCcsICd0aW1lJykpXG4gICAgLnByZXYoKS5jbGljaygoKSA9PiB7XG4gICAgICAkdGltZU91dGJvdW5kLmZvY3VzKCk7XG4gICAgfSk7XG4gICR0aW1lUmV0dXJuXG4gICAgLmRhdGV0aW1lcGlja2VyKF9nZXREYXRldGltZVBpY2tlck9wdHMoJ3RpbWVfcmV0dXJuJywgJ3RpbWUnKSlcbiAgICAucHJldigpLmNsaWNrKCgpID0+IHtcbiAgICAgICR0aW1lUmV0dXJuLmZvY3VzKCk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogUmVpbml0IGRhdGV0aW1lcGlja2VycywgZm9yIHJlc3BvbnNpdmVuZXNzXG4gKiAoZm9yIG5vdyB3ZSBvbmx5IG5lZWQgdG8gcmVpbml0IHRoZSB0aW1lIHBpY2tlcnMpXG4gKi9cbmZ1bmN0aW9uIHJlaW5pdERhdGV0aW1lcGlja2VycygpIHtcbiAgLy8gY29uc3QgJGRhdGVPdXRib3VuZCA9ICQoJyNkYXRlX291dGJvdW5kJyk7XG4gIC8vIGNvbnN0ICRkYXRlUmV0dXJuID0gJCgnI2RhdGVfcmV0dXJuJyk7XG4gIGNvbnN0ICR0aW1lT3V0Ym91bmQgPSAkKCcjdGltZV9vdXRib3VuZCcpO1xuICBjb25zdCAkdGltZVJldHVybiA9ICQoJyN0aW1lX3JldHVybicpO1xuXG4gICR0aW1lT3V0Ym91bmQuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKS5kZXN0cm95KCk7XG4gICR0aW1lUmV0dXJuLmRhdGEoJ0RhdGVUaW1lUGlja2VyJykuZGVzdHJveSgpO1xuXG4gIGluaXRUaW1lUGlja2VycygpO1xufVxuXG4vKipcbiAqIFRydXN0UGlsb3Qgd2lkZ2V0XG4gKiBncmFiYmVkIGZyb20gaHR0cDovL2pzZmlkZGxlLm5ldC9waWxjaC9HbXR0VS9cbiAqXG4gKiBTZWUgdHJ1c3RwaWxvdCBpZnJhbWUgd2lkZ2V0IG9wdGlvbnNcbiAqIEBsaW5rKGh0dHA6Ly90cnVzdHBpbG90LmdpdGh1Yi5pby9kZXZlbG9wZXJzLyN0cnVzdGJveCwgaGVyZSlcbiAqL1xuZnVuY3Rpb24gdHJ1c3RQaWxvdFdpZGdldCgpIHtcbiAgdmFyICR3aWRnZXRzID0gJCgnLnRydXN0cGlsb3Qtd2lkZ2V0Jyk7XG4gIGlmICghJHdpZGdldHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBhID0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonID8gJ2h0dHBzOi8vc3NsLnRydXN0cGlsb3QuY29tJyA6ICdodHRwOi8vcy50cnVzdHBpbG90LmNvbScsXG4gICAgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBiLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgYi5hc3luYyA9IHRydWU7XG4gIGIuc3JjID0gYSArICcvdHBlbGVtZW50cy90cF9lbGVtZW50c19hbGwuanMnO1xuICB2YXIgYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgYy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShiLCBjKTtcbn1cblxuLyoqXG4gKiBNb2JpbGUgb2ZmIGNhbnZhcyBtZW51XG4gKlxuICogQHNlZSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9qcy1vZmZjYW52YXNcbiAqL1xuZnVuY3Rpb24gbW9iaWxlTWVudSAoKSB7XG4gICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2VuaGFuY2UnKTtcbn1cblxuLyoqXG4gKiBGb3JtIHZhbGlkYXRpb25cbiAqIEBsaW5rKGh0dHA6Ly8xMDAwaHouZ2l0aHViLmlvL2Jvb3RzdHJhcC12YWxpZGF0b3IvKVxuICovXG5mdW5jdGlvbiBmb3JtVmFsaWRhdGlvbiAoKSB7XG4gICQoJy5mb3JtLXZhbGlkYXRlJykudmFsaWRhdG9yKHtcbiAgICBmZWVkYmFjazoge1xuICAgICAgLy8gc3VjY2VzczogJ2ljb24gaWNvbi1jaGVjaycsXG4gICAgICAvLyBlcnJvcjogJ2ljb24gaWNvbi13YXJuaW5nJyAvLyBpY29uIGljb24tY3Jvc3NcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgcmVhZG1vcmUgYXJlYXMsXG4gKiB1c2luZyByZWFkbW9yZS5qcyBqUXVlcnkgcGx1Z2luXG4gKlxuICogQGxpbmsoaHR0cDovL2plZGZvc3Rlci5jb20vUmVhZG1vcmUuanMvKVxuICovXG5mdW5jdGlvbiBpbml0UmVhZG1vcmUoKSB7XG4gIHZhciAkcmVhZG1vcmVBcmVhcyA9ICQoJy5yZWFkbW9yZScpO1xuXG4gICRyZWFkbW9yZUFyZWFzLnJlYWRtb3JlKHtcbiAgICBzcGVlZDogMTgwLFxuICAgIG1vcmVMaW5rOiAnPGRpdiBjbGFzcz1cInJlYWRtb3JlLXRvZ2dsZVwiPjxhIGhyZWY9XCIjXCI+UmVhZCBtb3JlPC9hPiA8aSBjbGFzcz1cImljb24gaWNvbi1hcnJvd19kcm9wX2Rvd25cIj48L2k+PC9kaXY+JyxcbiAgICBsZXNzTGluazogJzxkaXYgY2xhc3M9XCJyZWFkbW9yZS10b2dnbGVcIj48YSBocmVmPVwiI1wiPkNsb3NlPC9hPiA8aSBjbGFzcz1cImljb24gaWNvbi1hcnJvd19kcm9wX3VwXCI+PC9pPjwvZGl2PicsXG4gICAgYWZ0ZXJUb2dnbGU6IGZ1bmN0aW9uICh0cmlnZ2VyLCBlbGVtZW50LCBleHBhbmRlZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2NpYW8nKTtcbiAgICAgICQoZWxlbWVudCkudG9nZ2xlQ2xhc3MoJ2V4cGFuZGVkJywgZXhwYW5kZWQpO1xuICAgICAgLy8gcmV0dXJuIGV4cGFuZGVkO1xuICAgIH1cbiAgfSk7XG59XG5cbmxldCBkcmFnRW5kO1xuLyoqXG4gKiBJbml0IGNhcm91c2Vsc1xuICogQHVzZXMgZHJhZ2VuZFxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vU3RlcmVvYml0L2RyYWdlbmRcbiAqL1xuZnVuY3Rpb24gcmVpbml0Q2Fyb3VzZWxzICgpIHtcbiAgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwnKTtcbiAgaWYgKCFjYXJvdXNlbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB3aW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBsZXQgaXRlbXNJblBhZ2UgPSAxO1xuXG4gIGlmICh3aW5XaWR0aCA8IDk5Mikge1xuICAgIGlmICh3aW5XaWR0aCA+IDc2OCkge1xuICAgICAgaXRlbXNJblBhZ2UgPSAzO1xuICAgIH1cbiAgICBlbHNlIGlmICh3aW5XaWR0aCA+IDU3NSkge1xuICAgICAgaXRlbXNJblBhZ2UgPSAyO1xuICAgIH1cblxuICAgIGlmIChkcmFnRW5kKSB7XG4gICAgICBkcmFnRW5kLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgZHJhZ0VuZCA9IG5ldyBEcmFnZW5kKGNhcm91c2VsLCB7XG4gICAgICBpdGVtc0luUGFnZTogaXRlbXNJblBhZ2UsXG4gICAgICBzY3JpYmU6ICc1MHB4JyxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZHJhZ0VuZCkge1xuICAgICAgZHJhZ0VuZC5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSW5pdCBVSVxuICovXG5mdW5jdGlvbiBpbml0VUkgKCkge1xuICBtb2JpbGVNZW51KCk7XG4gIGluaXREYXRlUGlja2VycygpO1xuICAvLyBpbml0VGltZVBpY2tlcnMoKTtcbiAgdHJ1c3RQaWxvdFdpZGdldCgpO1xuICBmb3JtVmFsaWRhdGlvbigpO1xuICBpbml0UmVhZG1vcmUoKTtcbiAgcmVpbml0Q2Fyb3VzZWxzKCk7XG5cbiAgLy8gJCh3aW5kb3cpLnJlc2l6ZSgkLmRlYm91bmNlKDI1MCwgcmVpbml0RGF0ZXRpbWVwaWNrZXJzKSk7XG4gICQod2luZG93KS5yZXNpemUoJC5kZWJvdW5jZSgyNTAsIHJlaW5pdENhcm91c2VscykpO1xufVxuXG4vLyBpbml0IFVJIG9uIHJlYWR5XG4kKGRvY3VtZW50KS5yZWFkeShpbml0VUkpO1xuXG53aW5kb3cudDJhID0gd2luZG93LnQyYSB8fCB7fTtcblxud2luZG93LnQyYVsnaW5pdFRpbWVQaWNrZXJzJ10gPSBpbml0VGltZVBpY2tlcnM7XG53aW5kb3cudDJhWydyZWluaXREYXRldGltZXBpY2tlcnMnXSA9IHJlaW5pdERhdGV0aW1lcGlja2VycztcbiJdLCJuYW1lcyI6WyJjb25zdCIsIiQiLCJsZXQiLCJ0aGlzIl0sIm1hcHBpbmdzIjoiOzs7O0VBQUE7Ozs7Ozs7QUFPQUEsTUFBTSxJQUFJLEdBQUcsV0FBRUMsSUFBQyxFQUFFOzs7Ozs7Ozs7SUFTaEJDLElBQUksVUFBVSxHQUFHLE1BQUs7O0lBRXRCRixJQUFNLE9BQU8sR0FBRyxRQUFPOztJQUV2QkEsSUFBTSxrQkFBa0IsR0FBRztNQUN6QixnQkFBZ0IsR0FBRyxxQkFBcUI7TUFDeEMsYUFBYSxNQUFNLGVBQWU7TUFDbEMsV0FBVyxRQUFRLCtCQUErQjtNQUNsRCxVQUFVLFNBQVMsZUFBZTtNQUNuQzs7O0lBR0QsU0FBUyxNQUFN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QUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsOERBQThELENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLHNFQUFzRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGNBQWMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMscUJBQXFCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLHNCQUFzQixFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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