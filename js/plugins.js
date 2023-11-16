/*------------------------------------*\
       Plugins - Table of contents
   \*------------------------------------*/
/*
 - jQuery Easing
 - Images Loaded
 - AOS
 - Chocolat
 - HC-Sticky
  */

//--------------------------------
// - jQuery Easing
//--------------------------------
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 */
/*
 * jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery.easing/master/LICENSE
 */

/* globals jQuery, define, module, require */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], function ($) {
      return factory($);
    });
  } else if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(function ($) {
  // Preserve the original jQuery "swing" easing as "jswing"
  if (typeof $.easing !== "undefined") {
    $.easing["jswing"] = $.easing["swing"];
  }

  var pow = Math.pow,
    sqrt = Math.sqrt,
    sin = Math.sin,
    cos = Math.cos,
    PI = Math.PI,
    c1 = 1.70158,
    c2 = c1 * 1.525,
    c3 = c1 + 1,
    c4 = (2 * PI) / 3,
    c5 = (2 * PI) / 4.5;

  // x is the fraction of animation progress, in the range 0..1
  function bounceOut(x) {
    var n1 = 7.5625,
      d1 = 2.75;
    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  }

  $.extend($.easing, {
    def: "easeOutQuad",
    swing: function (x) {
      return $.easing[$.easing.def](x);
    },
    easeInQuad: function (x) {
      return x * x;
    },
    easeOutQuad: function (x) {
      return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: function (x) {
      return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
    },
    easeInCubic: function (x) {
      return x * x * x;
    },
    easeOutCubic: function (x) {
      return 1 - pow(1 - x, 3);
    },
    easeInOutCubic: function (x) {
      return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
    },
    easeInQuart: function (x) {
      return x * x * x * x;
    },
    easeOutQuart: function (x) {
      return 1 - pow(1 - x, 4);
    },
    easeInOutQuart: function (x) {
      return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
    },
    easeInQuint: function (x) {
      return x * x * x * x * x;
    },
    easeOutQuint: function (x) {
      return 1 - pow(1 - x, 5);
    },
    easeInOutQuint: function (x) {
      return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
    },
    easeInSine: function (x) {
      return 1 - cos((x * PI) / 2);
    },
    easeOutSine: function (x) {
      return sin((x * PI) / 2);
    },
    easeInOutSine: function (x) {
      return -(cos(PI * x) - 1) / 2;
    },
    easeInExpo: function (x) {
      return x === 0 ? 0 : pow(2, 10 * x - 10);
    },
    easeOutExpo: function (x) {
      return x === 1 ? 1 : 1 - pow(2, -10 * x);
    },
    easeInOutExpo: function (x) {
      return x === 0
        ? 0
        : x === 1
        ? 1
        : x < 0.5
        ? pow(2, 20 * x - 10) / 2
        : (2 - pow(2, -20 * x + 10)) / 2;
    },
    easeInCirc: function (x) {
      return 1 - sqrt(1 - pow(x, 2));
    },
    easeOutCirc: function (x) {
      return sqrt(1 - pow(x - 1, 2));
    },
    easeInOutCirc: function (x) {
      return x < 0.5
        ? (1 - sqrt(1 - pow(2 * x, 2))) / 2
        : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInElastic: function (x) {
      return x === 0
        ? 0
        : x === 1
        ? 1
        : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    },
    easeOutElastic: function (x) {
      return x === 0
        ? 0
        : x === 1
        ? 1
        : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
    },
    easeInOutElastic: function (x) {
      return x === 0
        ? 0
        : x === 1
        ? 1
        : x < 0.5
        ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
        : (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1;
    },
    easeInBack: function (x) {
      return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: function (x) {
      return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    },
    easeInOutBack: function (x) {
      return x < 0.5
        ? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInBounce: function (x) {
      return 1 - bounceOut(1 - x);
    },
    easeOutBounce: bounceOut,
    easeInOutBounce: function (x) {
      return x < 0.5
        ? (1 - bounceOut(1 - 2 * x)) / 2
        : (1 + bounceOut(2 * x - 1)) / 2;
    },
  });
  return $;
});

//--------------------------------
// - Images Loaded
//--------------------------------
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function (window, factory) {
  // universal module definition
  if (typeof module == "object" && module.exports) {
    // CommonJS
    module.exports = factory(window, require("ev-emitter"));
  } else {
    // browser global
    window.imagesLoaded = factory(window, window.EvEmitter);
  }
})(
  typeof window !== "undefined" ? window : this,
  function factory(window, EvEmitter) {
    let $ = window.jQuery;
    let console = window.console;

    // -------------------------- helpers -------------------------- //

    // turn element or nodeList into an array
    function makeArray(obj) {
      // use object if already an array
      if (Array.isArray(obj)) return obj;

      let isArrayLike = typeof obj == "object" && typeof obj.length == "number";
      // convert nodeList to array
      if (isArrayLike) return [...obj];

      // array of single index
      return [obj];
    }

    // -------------------------- imagesLoaded -------------------------- //

    /**
     * @param {[Array, Element, NodeList, String]} elem
     * @param {[Object, Function]} options - if function, use as callback
     * @param {Function} onAlways - callback function
     * @returns {ImagesLoaded}
     */
    function ImagesLoaded(elem, options, onAlways) {
      // coerce ImagesLoaded() without new, to be new ImagesLoaded()
      if (!(this instanceof ImagesLoaded)) {
        return new ImagesLoaded(elem, options, onAlways);
      }
      // use elem as selector string
      let queryElem = elem;
      if (typeof elem == "string") {
        queryElem = document.querySelectorAll(elem);
      }
      // bail if bad element
      if (!queryElem) {
        console.error(`Bad element for imagesLoaded ${queryElem || elem}`);
        return;
      }

      this.elements = makeArray(queryElem);
      this.options = {};
      // shift arguments if no options set
      if (typeof options == "function") {
        onAlways = options;
      } else {
        Object.assign(this.options, options);
      }

      if (onAlways) this.on("always", onAlways);

      this.getImages();
      // add jQuery Deferred object
      if ($) this.jqDeferred = new $.Deferred();

      // HACK check async to allow time to bind listeners
      setTimeout(this.check.bind(this));
    }

    ImagesLoaded.prototype = Object.create(EvEmitter.prototype);

    ImagesLoaded.prototype.getImages = function () {
      this.images = [];

      // filter & find items if we have an item selector
      this.elements.forEach(this.addElementImages, this);
    };

    const elementNodeTypes = [1, 9, 11];

    /**
     * @param {Node} elem
     */
    ImagesLoaded.prototype.addElementImages = function (elem) {
      // filter siblings
      if (elem.nodeName === "IMG") {
        this.addImage(elem);
      }
      // get background image on element
      if (this.options.background === true) {
        this.addElementBackgroundImages(elem);
      }

      // find children
      // no non-element nodes, #143
      let { nodeType } = elem;
      if (!nodeType || !elementNodeTypes.includes(nodeType)) return;

      let childImgs = elem.querySelectorAll("img");
      // concat childElems to filterFound array
      for (let img of childImgs) {
        this.addImage(img);
      }

      // get child background images
      if (typeof this.options.background == "string") {
        let children = elem.querySelectorAll(this.options.background);
        for (let child of children) {
          this.addElementBackgroundImages(child);
        }
      }
    };

    const reURL = /url\((['"])?(.*?)\1\)/gi;

    ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
      let style = getComputedStyle(elem);
      // Firefox returns null if in a hidden iframe https://bugzil.la/548397
      if (!style) return;

      // get url inside url("...")
      let matches = reURL.exec(style.backgroundImage);
      while (matches !== null) {
        let url = matches && matches[2];
        if (url) {
          this.addBackground(url, elem);
        }
        matches = reURL.exec(style.backgroundImage);
      }
    };

    /**
     * @param {Image} img
     */
    ImagesLoaded.prototype.addImage = function (img) {
      let loadingImage = new LoadingImage(img);
      this.images.push(loadingImage);
    };

    ImagesLoaded.prototype.addBackground = function (url, elem) {
      let background = new Background(url, elem);
      this.images.push(background);
    };

    ImagesLoaded.prototype.check = function () {
      this.progressedCount = 0;
      this.hasAnyBroken = false;
      // complete if no images
      if (!this.images.length) {
        this.complete();
        return;
      }

      /* eslint-disable-next-line func-style */
      let onProgress = (image, elem, message) => {
        // HACK - Chrome triggers event before object properties have changed. #83
        setTimeout(() => {
          this.progress(image, elem, message);
        });
      };

      this.images.forEach(function (loadingImage) {
        loadingImage.once("progress", onProgress);
        loadingImage.check();
      });
    };

    ImagesLoaded.prototype.progress = function (image, elem, message) {
      this.progressedCount++;
      this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
      // progress event
      this.emitEvent("progress", [this, image, elem]);
      if (this.jqDeferred && this.jqDeferred.notify) {
        this.jqDeferred.notify(this, image);
      }
      // check if completed
      if (this.progressedCount === this.images.length) {
        this.complete();
      }

      if (this.options.debug && console) {
        console.log(`progress: ${message}`, image, elem);
      }
    };

    ImagesLoaded.prototype.complete = function () {
      let eventName = this.hasAnyBroken ? "fail" : "done";
      this.isComplete = true;
      this.emitEvent(eventName, [this]);
      this.emitEvent("always", [this]);
      if (this.jqDeferred) {
        let jqMethod = this.hasAnyBroken ? "reject" : "resolve";
        this.jqDeferred[jqMethod](this);
      }
    };

    // --------------------------  -------------------------- //

    function LoadingImage(img) {
      this.img = img;
    }

    LoadingImage.prototype = Object.create(EvEmitter.prototype);

    LoadingImage.prototype.check = function () {
      // If complete is true and browser supports natural sizes,
      // try to check for image status manually.
      let isComplete = this.getIsImageComplete();
      if (isComplete) {
        // report based on naturalWidth
        this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
        return;
      }

      // If none of the checks above matched, simulate loading on detached element.
      this.proxyImage = new Image();
      // add crossOrigin attribute. #204
      if (this.img.crossOrigin) {
        this.proxyImage.crossOrigin = this.img.crossOrigin;
      }
      this.proxyImage.addEventListener("load", this);
      this.proxyImage.addEventListener("error", this);
      // bind to image as well for Firefox. #191
      this.img.addEventListener("load", this);
      this.img.addEventListener("error", this);
      this.proxyImage.src = this.img.currentSrc || this.img.src;
    };

    LoadingImage.prototype.getIsImageComplete = function () {
      // check for non-zero, non-undefined naturalWidth
      // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
      return this.img.complete && this.img.naturalWidth;
    };

    LoadingImage.prototype.confirm = function (isLoaded, message) {
      this.isLoaded = isLoaded;
      let { parentNode } = this.img;
      // emit progress with parent <picture> or self <img>
      let elem = parentNode.nodeName === "PICTURE" ? parentNode : this.img;
      this.emitEvent("progress", [this, elem, message]);
    };

    // ----- events ----- //

    // trigger specified handler for event type
    LoadingImage.prototype.handleEvent = function (event) {
      let method = "on" + event.type;
      if (this[method]) {
        this[method](event);
      }
    };

    LoadingImage.prototype.onload = function () {
      this.confirm(true, "onload");
      this.unbindEvents();
    };

    LoadingImage.prototype.onerror = function () {
      this.confirm(false, "onerror");
      this.unbindEvents();
    };

    LoadingImage.prototype.unbindEvents = function () {
      this.proxyImage.removeEventListener("load", this);
      this.proxyImage.removeEventListener("error", this);
      this.img.removeEventListener("load", this);
      this.img.removeEventListener("error", this);
    };

    // -------------------------- Background -------------------------- //

    function Background(url, element) {
      this.url = url;
      this.element = element;
      this.img = new Image();
    }

    // inherit LoadingImage prototype
    Background.prototype = Object.create(LoadingImage.prototype);

    Background.prototype.check = function () {
      this.img.addEventListener("load", this);
      this.img.addEventListener("error", this);
      this.img.src = this.url;
      // check if image is already complete
      let isComplete = this.getIsImageComplete();
      if (isComplete) {
        this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
        this.unbindEvents();
      }
    };

    Background.prototype.unbindEvents = function () {
      this.img.removeEventListener("load", this);
      this.img.removeEventListener("error", this);
    };

    Background.prototype.confirm = function (isLoaded, message) {
      this.isLoaded = isLoaded;
      this.emitEvent("progress", [this, this.element, message]);
    };

    // -------------------------- jQuery -------------------------- //

    ImagesLoaded.makeJQueryPlugin = function (jQuery) {
      jQuery = jQuery || window.jQuery;
      if (!jQuery) return;

      // set local variable
      $ = jQuery;
      // $().imagesLoaded()
      $.fn.imagesLoaded = function (options, onAlways) {
        let instance = new ImagesLoaded(this, options, onAlways);
        return instance.jqDeferred.promise($(this));
      };
    };
    // try making plugin
    ImagesLoaded.makeJQueryPlugin();

    // --------------------------  -------------------------- //

    return ImagesLoaded;
  }
);

/* Chocolat-1.0.4 */
/* jQuery plugin for lightbox */
!(function () {
  "use strict";
  let e = void 0;
  function t(e, t) {
    return new Promise((s) => {
      const i = () => {
        t.removeEventListener("transitionend", i), s();
      };
      t.addEventListener("transitionend", i);
      const l = t.getAttribute("class"),
        n = t.getAttribute("style");
      e(),
        l === t.getAttribute("class") && n === t.getAttribute("style") && i(),
        0 === parseFloat(getComputedStyle(t).transitionDuration) && i();
    });
  }
  function s({ src: e, srcset: t, sizes: s }) {
    const i = new Image();
    return (
      (i.src = e),
      t && (i.srcset = t),
      s && (i.sizes = s),
      "decode" in i
        ? new Promise((e, t) => {
            i.decode()
              .then(() => {
                e(i);
              })
              .catch(() => {
                t(i);
              });
          })
        : new Promise((e, t) => {
            (i.onload = e(i)), (i.onerror = t(i));
          })
    );
  }
  function i(e) {
    let t, s;
    const {
        imgHeight: i,
        imgWidth: l,
        containerHeight: n,
        containerWidth: a,
        canvasWidth: o,
        canvasHeight: c,
        imageSize: h,
      } = e,
      r = i / l;
    return (
      "cover" == h
        ? r < n / a
          ? (s = (t = n) / r)
          : (t = (s = a) * r)
        : "native" == h
        ? ((t = i), (s = l))
        : (r > c / o ? (s = (t = c) / r) : (t = (s = o) * r),
          "scale-down" === h && (s >= l || t >= i) && ((s = l), (t = i))),
      { height: t, width: s }
    );
  }
  function l(e) {
    return e.requestFullscreen
      ? e.requestFullscreen()
      : e.webkitRequestFullscreen
      ? e.webkitRequestFullscreen()
      : e.msRequestFullscreen
      ? e.msRequestFullscreen()
      : Promise.reject();
  }
  function n() {
    return document.exitFullscreen
      ? document.exitFullscreen()
      : document.webkitExitFullscreen
      ? document.webkitExitFullscreen()
      : document.msExitFullscreen
      ? document.msExitFullscreen()
      : Promise.reject();
  }
  const a = {
    container: document.body,
    className: void 0,
    imageSize: "scale-down",
    fullScreen: !1,
    loop: !1,
    linkImages: !0,
    setIndex: 0,
    firstImageIndex: 0,
    lastImageIndex: !1,
    currentImageIndex: void 0,
    allowZoom: !0,
    closeOnBackgroundClick: !0,
    setTitle: function () {
      return "";
    },
    description: function () {
      return this.images[this.settings.currentImageIndex].title;
    },
    pagination: function () {
      const e = this.settings.lastImageIndex + 1;
      return this.settings.currentImageIndex + 1 + "/" + e;
    },
    afterInitialize() {},
    afterMarkup() {},
    afterImageLoad() {},
    afterClose() {},
    zoomedPaddingX: function (e, t) {
      return 0;
    },
    zoomedPaddingY: function (e, t) {
      return 0;
    },
  };
  class o {
    constructor(e, t) {
      (this.settings = t),
        (this.elems = {}),
        (this.images = []),
        (this.events = []),
        (this.state = {
          fullScreenOpen: !1,
          initialZoomState: null,
          initialized: !1,
          timer: !1,
          visible: !1,
        }),
        (this._cssClasses = [
          "chocolat-open",
          "chocolat-in-container",
          "chocolat-cover",
          "chocolat-zoomable",
          "chocolat-zoomed",
          "chocolat-zooming-in",
          "chocolat-zooming-out",
        ]),
        NodeList.prototype.isPrototypeOf(e) ||
        HTMLCollection.prototype.isPrototypeOf(e)
          ? e.forEach((e, t) => {
              this.images.push({
                title: e.getAttribute("title"),
                src: e.getAttribute("href"),
                srcset: e.getAttribute("data-srcset"),
                sizes: e.getAttribute("data-sizes"),
              }),
                this.off(e, "click.chocolat"),
                this.on(e, "click.chocolat", (e) => {
                  this.init(t), e.preventDefault();
                });
            })
          : (this.images = e),
        this.settings.container instanceof Element ||
        this.settings.container instanceof HTMLElement
          ? (this.elems.container = this.settings.container)
          : (this.elems.container = document.body),
        (this.api = {
          open: (e) => ((e = parseInt(e) || 0), this.init(e)),
          close: () => this.close(),
          next: () => this.change(1),
          prev: () => this.change(-1),
          goto: (e) => this.open(e),
          current: () => this.settings.currentImageIndex,
          position: () => this.position(this.elems.img),
          destroy: () => this.destroy(),
          set: (e, t) => ((this.settings[e] = t), t),
          get: (e) => this.settings[e],
          getElem: (e) => this.elems[e],
        });
    }
    init(e) {
      return (
        this.state.initialized ||
          (this.markup(),
          this.attachListeners(),
          (this.settings.lastImageIndex = this.images.length - 1),
          (this.state.initialized = !0)),
        this.settings.afterInitialize.call(this),
        this.load(e)
      );
    }
    load(e) {
      if (
        (this.state.visible ||
          ((this.state.visible = !0),
          setTimeout(() => {
            this.elems.overlay.classList.add("chocolat-visible"),
              this.elems.wrapper.classList.add("chocolat-visible");
          }, 0),
          this.elems.container.classList.add("chocolat-open")),
        this.settings.fullScreen && l(this.elems.wrapper),
        this.settings.currentImageIndex === e)
      )
        return Promise.resolve();
      let i,
        n,
        a = setTimeout(() => {
          this.elems.loader.classList.add("chocolat-visible");
        }, 1e3),
        o = setTimeout(() => {
          (o = void 0),
            (i = t(() => {
              this.elems.imageCanvas.classList.remove("chocolat-visible");
            }, this.elems.imageCanvas));
        }, 80);
      return s(this.images[e])
        .then((e) => ((n = e), o ? (clearTimeout(o), Promise.resolve()) : i))
        .then(() => {
          const t = e + 1;
          return (
            null != this.images[t] && s(this.images[t]),
            (this.settings.currentImageIndex = e),
            (this.elems.description.textContent =
              this.settings.description.call(this)),
            (this.elems.pagination.textContent =
              this.settings.pagination.call(this)),
            this.arrows(),
            this.position(n).then(
              () => (
                this.elems.loader.classList.remove("chocolat-visible"),
                clearTimeout(a),
                this.appear(n)
              )
            )
          );
        })
        .then(() => {
          this.elems.container.classList.toggle(
            "chocolat-zoomable",
            this.zoomable(n, this.elems.wrapper)
          ),
            this.settings.afterImageLoad.call(this);
        });
    }
    position({ naturalHeight: e, naturalWidth: s }) {
      const l = {
          imgHeight: e,
          imgWidth: s,
          containerHeight: this.elems.container.clientHeight,
          containerWidth: this.elems.container.clientWidth,
          canvasWidth: this.elems.imageCanvas.clientWidth,
          canvasHeight: this.elems.imageCanvas.clientHeight,
          imageSize: this.settings.imageSize,
        },
        { width: n, height: a } = i(l);
      return t(() => {
        Object.assign(this.elems.imageWrapper.style, {
          width: n + "px",
          height: a + "px",
        });
      }, this.elems.imageWrapper);
    }
    appear(e) {
      return (
        this.elems.imageWrapper.removeChild(this.elems.img),
        (this.elems.img = e),
        this.elems.img.setAttribute("class", "chocolat-img"),
        this.elems.imageWrapper.appendChild(this.elems.img),
        t(() => {
          this.elems.imageCanvas.classList.add("chocolat-visible");
        }, this.elems.imageCanvas)
      );
    }
    change(e) {
      if (!this.state.visible) return;
      if (!this.settings.linkImages) return;
      this.zoomOut();
      const t = this.settings.currentImageIndex + parseInt(e);
      if (t > this.settings.lastImageIndex) {
        if (this.settings.loop) return this.load(this.settings.firstImageIndex);
      } else {
        if (!(t < this.settings.firstImageIndex)) return this.load(t);
        if (this.settings.loop) return this.load(this.settings.lastImageIndex);
      }
    }
    arrows() {
      this.settings.loop
        ? (this.elems.left.classList.add("active"),
          this.elems.right.classList.add("active"))
        : this.settings.linkImages
        ? (this.elems.right.classList.toggle(
            "active",
            this.settings.currentImageIndex !== this.settings.lastImageIndex
          ),
          this.elems.left.classList.toggle(
            "active",
            this.settings.currentImageIndex !== this.settings.firstImageIndex
          ))
        : (this.elems.left.classList.remove("active"),
          this.elems.right.classList.remove("active"));
    }
    close() {
      if (this.state.fullScreenOpen) return void n();
      this.state.visible = !1;
      const e = t(() => {
          this.elems.overlay.classList.remove("chocolat-visible");
        }, this.elems.overlay),
        s = t(() => {
          this.elems.wrapper.classList.remove("chocolat-visible");
        }, this.elems.wrapper);
      return Promise.all([e, s]).then(() => {
        this.elems.container.classList.remove("chocolat-open"),
          this.settings.afterClose.call(this);
      });
    }
    destroy() {
      for (let e = this.events.length - 1; e >= 0; e--) {
        const { element: t, eventName: s } = this.events[e];
        this.off(t, s);
      }
      this.state.initialized &&
        (this.state.fullScreenOpen && n(),
        (this.settings.currentImageIndex = void 0),
        (this.state.visible = !1),
        (this.state.initialized = !1),
        this.elems.container.classList.remove(...this._cssClasses),
        this.elems.wrapper.parentNode.removeChild(this.elems.wrapper));
    }
    markup() {
      this.elems.container.classList.add(
        "chocolat-open",
        this.settings.className
      ),
        "cover" == this.settings.imageSize &&
          this.elems.container.classList.add("chocolat-cover"),
        this.elems.container !== document.body &&
          this.elems.container.classList.add("chocolat-in-container"),
        (this.elems.wrapper = document.createElement("div")),
        this.elems.wrapper.setAttribute(
          "id",
          "chocolat-content-" + this.settings.setIndex
        ),
        this.elems.wrapper.setAttribute("class", "chocolat-wrapper"),
        this.elems.container.appendChild(this.elems.wrapper),
        (this.elems.overlay = document.createElement("div")),
        this.elems.overlay.setAttribute("class", "chocolat-overlay"),
        this.elems.wrapper.appendChild(this.elems.overlay),
        (this.elems.loader = document.createElement("div")),
        this.elems.loader.setAttribute("class", "chocolat-loader"),
        this.elems.wrapper.appendChild(this.elems.loader),
        (this.elems.layout = document.createElement("div")),
        this.elems.layout.setAttribute("class", "chocolat-layout"),
        this.elems.wrapper.appendChild(this.elems.layout),
        (this.elems.top = document.createElement("div")),
        this.elems.top.setAttribute("class", "chocolat-top"),
        this.elems.layout.appendChild(this.elems.top),
        (this.elems.center = document.createElement("div")),
        this.elems.center.setAttribute("class", "chocolat-center"),
        this.elems.layout.appendChild(this.elems.center),
        (this.elems.left = document.createElement("div")),
        this.elems.left.setAttribute("class", "chocolat-left"),
        this.elems.center.appendChild(this.elems.left),
        (this.elems.imageCanvas = document.createElement("div")),
        this.elems.imageCanvas.setAttribute("class", "chocolat-image-canvas"),
        this.elems.center.appendChild(this.elems.imageCanvas),
        (this.elems.imageWrapper = document.createElement("div")),
        this.elems.imageWrapper.setAttribute("class", "chocolat-image-wrapper"),
        this.elems.imageCanvas.appendChild(this.elems.imageWrapper),
        (this.elems.img = document.createElement("img")),
        this.elems.img.setAttribute("class", "chocolat-img"),
        this.elems.imageWrapper.appendChild(this.elems.img),
        (this.elems.right = document.createElement("div")),
        this.elems.right.setAttribute("class", "chocolat-right"),
        this.elems.center.appendChild(this.elems.right),
        (this.elems.bottom = document.createElement("div")),
        this.elems.bottom.setAttribute("class", "chocolat-bottom"),
        this.elems.layout.appendChild(this.elems.bottom),
        (this.elems.close = document.createElement("span")),
        this.elems.close.setAttribute("class", "chocolat-close"),
        this.elems.top.appendChild(this.elems.close),
        (this.elems.description = document.createElement("span")),
        this.elems.description.setAttribute("class", "chocolat-description"),
        this.elems.bottom.appendChild(this.elems.description),
        (this.elems.pagination = document.createElement("span")),
        this.elems.pagination.setAttribute("class", "chocolat-pagination"),
        this.elems.bottom.appendChild(this.elems.pagination),
        (this.elems.setTitle = document.createElement("span")),
        this.elems.setTitle.setAttribute("class", "chocolat-set-title"),
        (this.elems.setTitle.textContent = this.settings.setTitle()),
        this.elems.bottom.appendChild(this.elems.setTitle),
        (this.elems.fullscreen = document.createElement("span")),
        this.elems.fullscreen.setAttribute("class", "chocolat-fullscreen"),
        this.elems.bottom.appendChild(this.elems.fullscreen),
        this.settings.afterMarkup.call(this);
    }
    attachListeners() {
      this.off(document, "keydown.chocolat"),
        this.on(document, "keydown.chocolat", (e) => {
          this.state.initialized &&
            (37 == e.keyCode
              ? this.change(-1)
              : 39 == e.keyCode
              ? this.change(1)
              : 27 == e.keyCode && this.close());
        });
      const t = this.elems.wrapper.querySelector(".chocolat-right");
      this.off(t, "click.chocolat"),
        this.on(t, "click.chocolat", () => {
          this.change(1);
        });
      const s = this.elems.wrapper.querySelector(".chocolat-left");
      this.off(s, "click.chocolat"),
        this.on(s, "click.chocolat", () => {
          this.change(-1);
        }),
        this.off(this.elems.close, "click.chocolat"),
        this.on(this.elems.close, "click.chocolat", this.close.bind(this)),
        this.off(this.elems.fullscreen, "click.chocolat"),
        this.on(this.elems.fullscreen, "click.chocolat", () => {
          this.state.fullScreenOpen ? n() : l(this.elems.wrapper);
        }),
        this.off(document, "fullscreenchange.chocolat"),
        this.on(document, "fullscreenchange.chocolat", () => {
          document.fullscreenElement ||
          document.webkitCurrentFullScreenElement ||
          document.webkitFullscreenElement
            ? (this.state.fullScreenOpen = !0)
            : (this.state.fullScreenOpen = !1);
        }),
        this.off(document, "webkitfullscreenchange.chocolat"),
        this.on(document, "webkitfullscreenchange.chocolat", () => {
          document.fullscreenElement ||
          document.webkitCurrentFullScreenElement ||
          document.webkitFullscreenElement
            ? (this.state.fullScreenOpen = !0)
            : (this.state.fullScreenOpen = !1);
        }),
        this.settings.closeOnBackgroundClick &&
          (this.off(this.elems.overlay, "click.chocolat"),
          this.on(this.elems.overlay, "click.chocolat", this.close.bind(this))),
        this.off(this.elems.wrapper, "click.chocolat"),
        this.on(this.elems.wrapper, "click.chocolat", () => {
          null !== this.state.initialZoomState &&
            this.state.visible &&
            (this.elems.container.classList.add("chocolat-zooming-out"),
            this.zoomOut().then(() => {
              this.elems.container.classList.remove("chocolat-zoomed"),
                this.elems.container.classList.remove("chocolat-zooming-out");
            }));
        }),
        this.off(this.elems.imageWrapper, "click.chocolat"),
        this.on(this.elems.imageWrapper, "click.chocolat", (e) => {
          null === this.state.initialZoomState &&
            this.elems.container.classList.contains("chocolat-zoomable") &&
            (e.stopPropagation(),
            this.elems.container.classList.add("chocolat-zooming-in"),
            this.zoomIn(e).then(() => {
              this.elems.container.classList.add("chocolat-zoomed"),
                this.elems.container.classList.remove("chocolat-zooming-in");
            }));
        }),
        this.on(this.elems.wrapper, "mousemove.chocolat", (e) => {
          if (null === this.state.initialZoomState || !this.state.visible)
            return;
          const t = this.elems.wrapper.getBoundingClientRect(),
            s = t.top + window.scrollY,
            i = t.left + window.scrollX,
            l = this.elems.wrapper.clientHeight,
            n = this.elems.wrapper.clientWidth,
            a = this.elems.img.width,
            o = this.elems.img.height,
            c = [e.pageX - n / 2 - i, e.pageY - l / 2 - s];
          let h = 0;
          if (a > n) {
            const e = this.settings.zoomedPaddingX(a, n);
            (h = c[0] / (n / 2)), (h *= (a - n) / 2 + e);
          }
          let r = 0;
          if (o > l) {
            const e = this.settings.zoomedPaddingY(o, l);
            (r = c[1] / (l / 2)), (r *= (o - l) / 2 + e);
          }
          (this.elems.img.style.marginLeft = -h + "px"),
            (this.elems.img.style.marginTop = -r + "px");
        }),
        this.on(window, "resize.chocolat", (t) => {
          this.state.initialized &&
            this.state.visible &&
            (function (t, s) {
              clearTimeout(e),
                (e = setTimeout(function () {
                  s();
                }, t));
            })(50, () => {
              const e = {
                  imgHeight: this.elems.img.naturalHeight,
                  imgWidth: this.elems.img.naturalWidth,
                  containerHeight: this.elems.wrapper.clientHeight,
                  containerWidth: this.elems.wrapper.clientWidth,
                  canvasWidth: this.elems.imageCanvas.clientWidth,
                  canvasHeight: this.elems.imageCanvas.clientHeight,
                  imageSize: this.settings.imageSize,
                },
                { width: t, height: s } = i(e);
              this.position(this.elems.img).then(() => {
                this.elems.container.classList.toggle(
                  "chocolat-zoomable",
                  this.zoomable(this.elems.img, this.elems.wrapper)
                );
              });
            });
        });
    }
    zoomable(e, t) {
      const s = t.clientWidth,
        i = t.clientHeight,
        l = !(
          !this.settings.allowZoom ||
          !(e.naturalWidth > s || e.naturalHeight > i)
        ),
        n = e.clientWidth > e.naturalWidth || e.clientHeight > e.naturalHeight;
      return l && !n;
    }
    zoomIn(e) {
      return (
        (this.state.initialZoomState = this.settings.imageSize),
        (this.settings.imageSize = "native"),
        this.position(this.elems.img)
      );
    }
    zoomOut(e) {
      return (
        (this.settings.imageSize =
          this.state.initialZoomState || this.settings.imageSize),
        (this.state.initialZoomState = null),
        (this.elems.img.style.margin = 0),
        this.position(this.elems.img)
      );
    }
    on(e, t, s) {
      const i = this.events.push({ element: e, eventName: t, cb: s });
      e.addEventListener(t.split(".")[0], this.events[i - 1].cb);
    }
    off(e, t) {
      const s = this.events.findIndex(
        (s) => s.element === e && s.eventName === t
      );
      this.events[s] &&
        (e.removeEventListener(t.split(".")[0], this.events[s].cb),
        this.events.splice(s, 1));
    }
  }
  const c = [];
  window.Chocolat = function (e, t) {
    const s = Object.assign({}, a, { images: [] }, t, { setIndex: c.length }),
      i = new o(e, s);
    return c.push(i), i;
  };
})();

// AOS

!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.AOS = t())
    : (e.AOS = t());
})(this, function () {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = (n[o] = { exports: {}, id: o, loaded: !1 });
      return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
  })([
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        f = o(c),
        s = n(8),
        d = o(s),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = {
          offset: 120,
          delay: 0,
          easing: "ease",
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: "DOMContentLoaded",
          throttleDelay: 99,
          debounceDelay: 50,
          disableMutationObserver: !1,
        },
        j = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if ((e && (k = !0), k))
            return (w = (0, y.default)(w, x)), (0, b.default)(w, x.once), w;
        },
        O = function () {
          (w = (0, h.default)()), j();
        },
        _ = function () {
          w.forEach(function (e, t) {
            e.node.removeAttribute("data-aos"),
              e.node.removeAttribute("data-aos-easing"),
              e.node.removeAttribute("data-aos-duration"),
              e.node.removeAttribute("data-aos-delay");
          });
        },
        S = function (e) {
          return (
            e === !0 ||
            ("mobile" === e && p.default.mobile()) ||
            ("phone" === e && p.default.phone()) ||
            ("tablet" === e && p.default.tablet()) ||
            ("function" == typeof e && e() === !0)
          );
        },
        z = function (e) {
          (x = i(x, e)), (w = (0, h.default)());
          var t = document.all && !window.atob;
          return S(x.disable) || t
            ? _()
            : (document
                .querySelector("body")
                .setAttribute("data-aos-easing", x.easing),
              document
                .querySelector("body")
                .setAttribute("data-aos-duration", x.duration),
              document
                .querySelector("body")
                .setAttribute("data-aos-delay", x.delay),
              "DOMContentLoaded" === x.startEvent &&
              ["complete", "interactive"].indexOf(document.readyState) > -1
                ? j(!0)
                : "load" === x.startEvent
                ? window.addEventListener(x.startEvent, function () {
                    j(!0);
                  })
                : document.addEventListener(x.startEvent, function () {
                    j(!0);
                  }),
              window.addEventListener(
                "resize",
                (0, f.default)(j, x.debounceDelay, !0)
              ),
              window.addEventListener(
                "orientationchange",
                (0, f.default)(j, x.debounceDelay, !0)
              ),
              window.addEventListener(
                "scroll",
                (0, u.default)(function () {
                  (0, b.default)(w, x.once);
                }, x.throttleDelay)
              ),
              x.disableMutationObserver || (0, d.default)("[data-aos]", O),
              w);
        };
      e.exports = { init: z, refresh: j, refreshHard: O };
    },
    function (e, t) {},
    ,
    ,
    ,
    ,
    function (e, t) {
      (function (t) {
        "use strict";
        function n(e, t, n) {
          function o(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (k = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (k = e), (h = setTimeout(s, t)), _ ? o(e) : g;
          }
          function a(e) {
            var n = e - w,
              o = e - k,
              i = t - n;
            return S ? j(i, y - o) : i;
          }
          function c(e) {
            var n = e - w,
              o = e - k;
            return void 0 === w || n >= t || n < 0 || (S && o >= y);
          }
          function s() {
            var e = O();
            return c(e) ? d(e) : void (h = setTimeout(s, a(e)));
          }
          function d(e) {
            return (h = void 0), z && b ? o(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (k = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(O());
          }
          function m() {
            var e = O(),
              n = c(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (S) return (h = setTimeout(s, t)), o(w);
            }
            return void 0 === h && (h = setTimeout(s, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            _ = !1,
            S = !1,
            z = !0;
          if ("function" != typeof e) throw new TypeError(f);
          return (
            (t = u(t) || 0),
            i(n) &&
              ((_ = !!n.leading),
              (S = "maxWait" in n),
              (y = S ? x(u(n.maxWait) || 0, t) : y),
              (z = "trailing" in n ? !!n.trailing : z)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e, t, o) {
          var r = !0,
            a = !0;
          if ("function" != typeof e) throw new TypeError(f);
          return (
            i(o) &&
              ((r = "leading" in o ? !!o.leading : r),
              (a = "trailing" in o ? !!o.trailing : a)),
            n(e, t, { leading: r, maxWait: t, trailing: a })
          );
        }
        function i(e) {
          var t = "undefined" == typeof e ? "undefined" : c(e);
          return !!e && ("object" == t || "function" == t);
        }
        function r(e) {
          return (
            !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
          );
        }
        function a(e) {
          return (
            "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) ||
            (r(e) && k.call(e) == d)
          );
        }
        function u(e) {
          if ("number" == typeof e) return e;
          if (a(e)) return s;
          if (i(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = i(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(l, "");
          var n = m.test(e);
          return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e;
        }
        var c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          f = "Expected a function",
          s = NaN,
          d = "[object Symbol]",
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y =
            "object" == ("undefined" == typeof t ? "undefined" : c(t)) &&
            t &&
            t.Object === Object &&
            t,
          g =
            "object" == ("undefined" == typeof self ? "undefined" : c(self)) &&
            self &&
            self.Object === Object &&
            self,
          h = y || g || Function("return this")(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function () {
            return h.Date.now();
          };
        e.exports = o;
      }).call(
        t,
        (function () {
          return this;
        })()
      );
    },
    function (e, t) {
      (function (t) {
        "use strict";
        function n(e, t, n) {
          function i(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (O = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (O = e), (h = setTimeout(s, t)), _ ? i(e) : g;
          }
          function u(e) {
            var n = e - w,
              o = e - O,
              i = t - n;
            return S ? x(i, y - o) : i;
          }
          function f(e) {
            var n = e - w,
              o = e - O;
            return void 0 === w || n >= t || n < 0 || (S && o >= y);
          }
          function s() {
            var e = j();
            return f(e) ? d(e) : void (h = setTimeout(s, u(e)));
          }
          function d(e) {
            return (h = void 0), z && b ? i(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (O = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(j());
          }
          function m() {
            var e = j(),
              n = f(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (S) return (h = setTimeout(s, t)), i(w);
            }
            return void 0 === h && (h = setTimeout(s, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            _ = !1,
            S = !1,
            z = !0;
          if ("function" != typeof e) throw new TypeError(c);
          return (
            (t = a(t) || 0),
            o(n) &&
              ((_ = !!n.leading),
              (S = "maxWait" in n),
              (y = S ? k(a(n.maxWait) || 0, t) : y),
              (z = "trailing" in n ? !!n.trailing : z)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e) {
          var t = "undefined" == typeof e ? "undefined" : u(e);
          return !!e && ("object" == t || "function" == t);
        }
        function i(e) {
          return (
            !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
          );
        }
        function r(e) {
          return (
            "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) ||
            (i(e) && w.call(e) == s)
          );
        }
        function a(e) {
          if ("number" == typeof e) return e;
          if (r(e)) return f;
          if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(d, "");
          var n = p.test(e);
          return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e;
        }
        var u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          c = "Expected a function",
          f = NaN,
          s = "[object Symbol]",
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v =
            "object" == ("undefined" == typeof t ? "undefined" : u(t)) &&
            t &&
            t.Object === Object &&
            t,
          y =
            "object" == ("undefined" == typeof self ? "undefined" : u(self)) &&
            self &&
            self.Object === Object &&
            self,
          g = v || y || Function("return this")(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function () {
            return g.Date.now();
          };
        e.exports = n;
      }).call(
        t,
        (function () {
          return this;
        })()
      );
    },
    function (e, t) {
      "use strict";
      function n(e, t) {
        var n = window.document,
          r =
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver,
          a = new r(o);
        (i = t),
          a.observe(n.documentElement, {
            childList: !0,
            subtree: !0,
            removedNodes: !0,
          });
      }
      function o(e) {
        e &&
          e.forEach(function (e) {
            var t = Array.prototype.slice.call(e.addedNodes),
              n = Array.prototype.slice.call(e.removedNodes),
              o = t.concat(n).filter(function (e) {
                return e.hasAttribute && e.hasAttribute("data-aos");
              }).length;
            o && i();
          });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = function () {};
      t.default = n;
    },
    function (e, t) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        r =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        f = (function () {
          function e() {
            n(this, e);
          }
          return (
            i(e, [
              {
                key: "phone",
                value: function () {
                  var e = o();
                  return !(!r.test(e) && !a.test(e.substr(0, 4)));
                },
              },
              {
                key: "mobile",
                value: function () {
                  var e = o();
                  return !(!u.test(e) && !c.test(e.substr(0, 4)));
                },
              },
              {
                key: "tablet",
                value: function () {
                  return this.mobile() && !this.phone();
                },
              },
            ]),
            e
          );
        })();
      t.default = new f();
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e, t, n) {
          var o = e.node.getAttribute("data-aos-once");
          t > e.position
            ? e.node.classList.add("aos-animate")
            : "undefined" != typeof o &&
              ("false" === o || (!n && "true" !== o)) &&
              e.node.classList.remove("aos-animate");
        },
        o = function (e, t) {
          var o = window.pageYOffset,
            i = window.innerHeight;
          e.forEach(function (e, r) {
            n(e, i + o, t);
          });
        };
      t.default = o;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(12),
        r = o(i),
        a = function (e, t) {
          return (
            e.forEach(function (e, n) {
              e.node.classList.add("aos-init"),
                (e.position = (0, r.default)(e.node, t.offset));
            }),
            e
          );
        };
      t.default = a;
    },
    function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(13),
        r = o(i),
        a = function (e, t) {
          var n = 0,
            o = 0,
            i = window.innerHeight,
            a = {
              offset: e.getAttribute("data-aos-offset"),
              anchor: e.getAttribute("data-aos-anchor"),
              anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
            };
          switch (
            (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
            a.anchor &&
              document.querySelectorAll(a.anchor) &&
              (e = document.querySelectorAll(a.anchor)[0]),
            (n = (0, r.default)(e).top),
            a.anchorPlacement)
          ) {
            case "top-bottom":
              break;
            case "center-bottom":
              n += e.offsetHeight / 2;
              break;
            case "bottom-bottom":
              n += e.offsetHeight;
              break;
            case "top-center":
              n += i / 2;
              break;
            case "bottom-center":
              n += i / 2 + e.offsetHeight;
              break;
            case "center-center":
              n += i / 2 + e.offsetHeight / 2;
              break;
            case "top-top":
              n += i;
              break;
            case "bottom-top":
              n += e.offsetHeight + i;
              break;
            case "center-top":
              n += e.offsetHeight / 2 + i;
          }
          return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
        };
      t.default = a;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        for (
          var t = 0, n = 0;
          e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

        )
          (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
            (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
            (e = e.offsetParent);
        return { top: n, left: t };
      };
      t.default = n;
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        return (
          (e = e || document.querySelectorAll("[data-aos]")),
          Array.prototype.map.call(e, function (e) {
            return { node: e };
          })
        );
      };
      t.default = n;
    },
  ]);
});

/*!
 * HC-Sticky
 * =========
 * Version: 2.2.1
 * Author: Some Web Media
 * Author URL: http://somewebmedia.com
 * Plugin URL: https://github.com/somewebmedia/hc-sticky
 * Description: Cross-browser plugin that makes any element on your page visible while you scroll
 * License: MIT
 */
!(function (t, e) {
  "use strict";
  if ("object" == typeof module && "object" == typeof module.exports) {
    if (!t.document) throw new Error("HC-Sticky requires a browser to run.");
    module.exports = e(t);
  } else
    "function" == typeof define && define.amd
      ? define("hcSticky", [], e(t))
      : e(t);
})("undefined" != typeof window ? window : this, function (U) {
  "use strict";
  var Y = {
      top: 0,
      bottom: 0,
      bottomEnd: 0,
      innerTop: 0,
      innerSticker: null,
      stickyClass: "sticky",
      stickTo: null,
      followScroll: !0,
      responsive: null,
      mobileFirst: !1,
      onStart: null,
      onStop: null,
      onBeforeResize: null,
      onResize: null,
      resizeDebounce: 100,
      disable: !1,
      queries: null,
      queryFlow: "down",
    },
    $ = function (t, e, o) {
      console.log(
        "%c! HC Sticky:%c " +
          t +
          "%c " +
          o +
          " is now deprecated and will be removed. Use%c " +
          e +
          "%c instead.",
        "color: red",
        "color: darkviolet",
        "color: black",
        "color: darkviolet",
        "color: black"
      );
    },
    Q = U.document,
    X = function (n, f) {
      var o = this;
      if (("string" == typeof n && (n = Q.querySelector(n)), !n)) return !1;
      f.queries && $("queries", "responsive", "option"),
        f.queryFlow && $("queryFlow", "mobileFirst", "option");
      var p = {},
        d = X.Helpers,
        s = n.parentNode;
      "static" === d.getStyle(s, "position") && (s.style.position = "relative");
      var u = function () {
          var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          (d.isEmptyObject(t) && !d.isEmptyObject(p)) ||
            (p = Object.assign({}, Y, p, t));
        },
        t = function () {
          return p.disable;
        },
        e = function () {
          var t,
            e = p.responsive || p.queries;
          if (e) {
            var o = U.innerWidth;
            if (((t = f), (p = Object.assign({}, Y, t || {})).mobileFirst))
              for (var i in e) i <= o && !d.isEmptyObject(e[i]) && u(e[i]);
            else {
              var n = [];
              for (var s in e) {
                var r = {};
                (r[s] = e[s]), n.push(r);
              }
              for (var l = n.length - 1; 0 <= l; l--) {
                var a = n[l],
                  c = Object.keys(a)[0];
                o <= c && !d.isEmptyObject(a[c]) && u(a[c]);
              }
            }
          }
        },
        r = {
          css: {},
          position: null,
          stick: function () {
            var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            d.hasClass(n, p.stickyClass) ||
              (!1 === l.isAttached && l.attach(),
              (r.position = "fixed"),
              (n.style.position = "fixed"),
              (n.style.left = l.offsetLeft + "px"),
              (n.style.width = l.width),
              void 0 === t.bottom
                ? (n.style.bottom = "auto")
                : (n.style.bottom = t.bottom + "px"),
              void 0 === t.top
                ? (n.style.top = "auto")
                : (n.style.top = t.top + "px"),
              n.classList
                ? n.classList.add(p.stickyClass)
                : (n.className += " " + p.stickyClass),
              p.onStart && p.onStart.call(n, Object.assign({}, p)));
          },
          release: function () {
            var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            if (
              ((t.stop = t.stop || !1),
              !0 === t.stop ||
                "fixed" === r.position ||
                null === r.position ||
                !(
                  (void 0 === t.top && void 0 === t.bottom) ||
                  (void 0 !== t.top &&
                    (parseInt(d.getStyle(n, "top")) || 0) === t.top) ||
                  (void 0 !== t.bottom &&
                    (parseInt(d.getStyle(n, "bottom")) || 0) === t.bottom)
                ))
            ) {
              !0 === t.stop
                ? !0 === l.isAttached && l.detach()
                : !1 === l.isAttached && l.attach();
              var e = t.position || r.css.position;
              (r.position = e),
                (n.style.position = e),
                (n.style.left =
                  !0 === t.stop ? r.css.left : l.positionLeft + "px"),
                (n.style.width = "absolute" !== e ? r.css.width : l.width),
                void 0 === t.bottom
                  ? (n.style.bottom = !0 === t.stop ? "" : "auto")
                  : (n.style.bottom = t.bottom + "px"),
                void 0 === t.top
                  ? (n.style.top = !0 === t.stop ? "" : "auto")
                  : (n.style.top = t.top + "px"),
                n.classList
                  ? n.classList.remove(p.stickyClass)
                  : (n.className = n.className.replace(
                      new RegExp(
                        "(^|\\b)" +
                          p.stickyClass.split(" ").join("|") +
                          "(\\b|$)",
                        "gi"
                      ),
                      " "
                    )),
                p.onStop && p.onStop.call(n, Object.assign({}, p));
            }
          },
        },
        l = {
          el: Q.createElement("div"),
          offsetLeft: null,
          positionLeft: null,
          width: null,
          isAttached: !1,
          init: function () {
            for (var t in r.css) l.el.style[t] = r.css[t];
            l.el.style["z-index"] = "-1";
            var e = d.getStyle(n);
            (l.offsetLeft = d.offset(n).left - (parseInt(e.marginLeft) || 0)),
              (l.positionLeft = d.position(n).left),
              (l.width = d.getStyle(n, "width"));
          },
          attach: function () {
            s.insertBefore(l.el, n), (l.isAttached = !0);
          },
          detach: function () {
            (l.el = s.removeChild(l.el)), (l.isAttached = !1);
          },
        },
        a = void 0,
        c = void 0,
        g = void 0,
        m = void 0,
        h = void 0,
        v = void 0,
        y = void 0,
        b = void 0,
        S = void 0,
        w = void 0,
        k = void 0,
        E = void 0,
        x = void 0,
        L = void 0,
        T = void 0,
        j = void 0,
        O = void 0,
        C = void 0,
        i = function () {
          var t, e, o, i;
          (r.css =
            ((t = n),
            (e = d.getCascadedStyle(t)),
            (o = d.getStyle(t)),
            (i = {
              height: t.offsetHeight + "px",
              left: e.left,
              right: e.right,
              top: e.top,
              bottom: e.bottom,
              position: o.position,
              display: o.display,
              verticalAlign: o.verticalAlign,
              boxSizing: o.boxSizing,
              marginLeft: e.marginLeft,
              marginRight: e.marginRight,
              marginTop: e.marginTop,
              marginBottom: e.marginBottom,
              paddingLeft: e.paddingLeft,
              paddingRight: e.paddingRight,
            }),
            e.float && (i.float = e.float || "none"),
            e.cssFloat && (i.cssFloat = e.cssFloat || "none"),
            o.MozBoxSizing && (i.MozBoxSizing = o.MozBoxSizing),
            (i.width =
              "auto" !== e.width
                ? e.width
                : "border-box" === i.boxSizing ||
                  "border-box" === i.MozBoxSizing
                ? t.offsetWidth + "px"
                : o.width),
            i)),
            l.init(),
            (a = !(
              !p.stickTo ||
              !(
                "document" === p.stickTo ||
                (p.stickTo.nodeType && 9 === p.stickTo.nodeType) ||
                ("object" == typeof p.stickTo &&
                  p.stickTo instanceof
                    ("undefined" != typeof HTMLDocument
                      ? HTMLDocument
                      : Document))
              )
            )),
            (c = p.stickTo
              ? a
                ? Q
                : "string" == typeof p.stickTo
                ? Q.querySelector(p.stickTo)
                : p.stickTo
              : s),
            (T = (C = function () {
              var t =
                  n.offsetHeight +
                  (parseInt(r.css.marginTop) || 0) +
                  (parseInt(r.css.marginBottom) || 0),
                e = (T || 0) - t;
              return -1 <= e && e <= 1 ? T : t;
            })()),
            (m = (O = function () {
              return a
                ? Math.max(
                    Q.documentElement.clientHeight,
                    Q.body.scrollHeight,
                    Q.documentElement.scrollHeight,
                    Q.body.offsetHeight,
                    Q.documentElement.offsetHeight
                  )
                : c.offsetHeight;
            })()),
            (h = a ? 0 : d.offset(c).top),
            (v = p.stickTo ? (a ? 0 : d.offset(s).top) : h),
            (y = U.innerHeight),
            (j = n.offsetTop - (parseInt(r.css.marginTop) || 0)),
            (g = p.innerSticker
              ? "string" == typeof p.innerSticker
                ? Q.querySelector(p.innerSticker)
                : p.innerSticker
              : null),
            (b =
              isNaN(p.top) && -1 < p.top.indexOf("%")
                ? (parseFloat(p.top) / 100) * y
                : p.top),
            (S =
              isNaN(p.bottom) && -1 < p.bottom.indexOf("%")
                ? (parseFloat(p.bottom) / 100) * y
                : p.bottom),
            (w = g ? g.offsetTop : p.innerTop ? p.innerTop : 0),
            (k =
              isNaN(p.bottomEnd) && -1 < p.bottomEnd.indexOf("%")
                ? (parseFloat(p.bottomEnd) / 100) * y
                : p.bottomEnd),
            (E = h - b + w + j);
        },
        z = U.pageYOffset || Q.documentElement.scrollTop,
        N = 0,
        H = void 0,
        R = function () {
          (T = C()), (m = O()), (x = h + m - b - k), (L = y < T);
          var t = U.pageYOffset || Q.documentElement.scrollTop,
            e = Math.round(d.offset(n).top),
            o = e - t,
            i = void 0;
          (H = t < z ? "up" : "down"),
            (N = t - z),
            E < (z = t)
              ? x + b + (L ? S : 0) - (p.followScroll && L ? 0 : b) <=
                t +
                  T -
                  w -
                  (y - (E - w) < T - w && p.followScroll && 0 < (i = T - y - w)
                    ? i
                    : 0)
                ? r.release({
                    position: "absolute",
                    bottom: v + s.offsetHeight - x - b,
                  })
                : L && p.followScroll
                ? "down" === H
                  ? Math.floor(o + T + S) <= y
                    ? r.stick({ bottom: S })
                    : "fixed" === r.position &&
                      r.release({
                        position: "absolute",
                        top: e - b - E - N + w,
                      })
                  : Math.ceil(o + w) < 0 && "fixed" === r.position
                  ? r.release({ position: "absolute", top: e - b - E + w - N })
                  : t + b - w <= e && r.stick({ top: b - w })
                : r.stick({ top: b - w })
              : r.release({ stop: !0 });
        },
        A = !1,
        B = !1,
        I = function () {
          A && (d.event.unbind(U, "scroll", R), (A = !1));
        },
        q = function () {
          null !== n.offsetParent && "none" !== d.getStyle(n, "display")
            ? (i(),
              m <= T
                ? I()
                : (R(), A || (d.event.bind(U, "scroll", R), (A = !0))))
            : I();
        },
        F = function () {
          (n.style.position = ""),
            (n.style.left = ""),
            (n.style.top = ""),
            (n.style.bottom = ""),
            (n.style.width = ""),
            n.classList
              ? n.classList.remove(p.stickyClass)
              : (n.className = n.className.replace(
                  new RegExp(
                    "(^|\\b)" + p.stickyClass.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                )),
            (r.css = {}),
            !(r.position = null) === l.isAttached && l.detach();
        },
        M = function () {
          F(), e(), t() ? I() : q();
        },
        D = function () {
          p.onBeforeResize && p.onBeforeResize.call(n, Object.assign({}, p)),
            M(),
            p.onResize && p.onResize.call(n, Object.assign({}, p));
        },
        P = p.resizeDebounce ? d.debounce(D, p.resizeDebounce) : D,
        W = function () {
          B && (d.event.unbind(U, "resize", P), (B = !1)), I();
        },
        V = function () {
          B || (d.event.bind(U, "resize", P), (B = !0)), e(), t() ? I() : q();
        };
      (this.options = function (t) {
        return t ? p[t] : Object.assign({}, p);
      }),
        (this.refresh = M),
        (this.update = function (t) {
          u(t), (f = Object.assign({}, f, t || {})), M();
        }),
        (this.attach = V),
        (this.detach = W),
        (this.destroy = function () {
          W(), F();
        }),
        (this.triggerMethod = function (t, e) {
          "function" == typeof o[t] && o[t](e);
        }),
        (this.reinit = function () {
          $("reinit", "refresh", "method"), M();
        }),
        u(f),
        V(),
        d.event.bind(U, "load", M);
    };
  if (void 0 !== U.jQuery) {
    var i = U.jQuery,
      n = "hcSticky";
    i.fn.extend({
      hcSticky: function (e, o) {
        return this.length
          ? "options" === e
            ? i.data(this.get(0), n).options()
            : this.each(function () {
                var t = i.data(this, n);
                t
                  ? t.triggerMethod(e, o)
                  : ((t = new X(this, e)), i.data(this, n, t));
              })
          : this;
      },
    });
  }
  return (U.hcSticky = U.hcSticky || X), X;
}),
  (function (c) {
    "use strict";
    var t = c.hcSticky,
      f = c.document;
    "function" != typeof Object.assign &&
      Object.defineProperty(Object, "assign", {
        value: function (t, e) {
          if (null == t)
            throw new TypeError("Cannot convert undefined or null to object");
          for (var o = Object(t), i = 1; i < arguments.length; i++) {
            var n = arguments[i];
            if (null != n)
              for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (o[s] = n[s]);
          }
          return o;
        },
        writable: !0,
        configurable: !0,
      }),
      Array.prototype.forEach ||
        (Array.prototype.forEach = function (t) {
          var e, o;
          if (null == this) throw new TypeError("this is null or not defined");
          var i = Object(this),
            n = i.length >>> 0;
          if ("function" != typeof t)
            throw new TypeError(t + " is not a function");
          for (1 < arguments.length && (e = arguments[1]), o = 0; o < n; ) {
            var s;
            o in i && ((s = i[o]), t.call(e, s, o, i)), o++;
          }
        });
    var e = (function () {
        var t = f.documentElement,
          e = function () {};
        function i(t) {
          var e = c.event;
          return (e.target = e.target || e.srcElement || t), e;
        }
        t.addEventListener
          ? (e = function (t, e, o) {
              t.addEventListener(e, o, !1);
            })
          : t.attachEvent &&
            (e = function (e, t, o) {
              (e[t + o] = o.handleEvent
                ? function () {
                    var t = i(e);
                    o.handleEvent.call(o, t);
                  }
                : function () {
                    var t = i(e);
                    o.call(e, t);
                  }),
                e.attachEvent("on" + t, e[t + o]);
            });
        var o = function () {};
        return (
          t.removeEventListener
            ? (o = function (t, e, o) {
                t.removeEventListener(e, o, !1);
              })
            : t.detachEvent &&
              (o = function (e, o, i) {
                e.detachEvent("on" + o, e[o + i]);
                try {
                  delete e[o + i];
                } catch (t) {
                  e[o + i] = void 0;
                }
              }),
          { bind: e, unbind: o }
        );
      })(),
      r = function (t, e) {
        return c.getComputedStyle
          ? e
            ? f.defaultView.getComputedStyle(t, null).getPropertyValue(e)
            : f.defaultView.getComputedStyle(t, null)
          : t.currentStyle
          ? e
            ? t.currentStyle[
                e.replace(/-\w/g, function (t) {
                  return t.toUpperCase().replace("-", "");
                })
              ]
            : t.currentStyle
          : void 0;
      },
      l = function (t) {
        var e = t.getBoundingClientRect(),
          o = c.pageYOffset || f.documentElement.scrollTop,
          i = c.pageXOffset || f.documentElement.scrollLeft;
        return { top: e.top + o, left: e.left + i };
      };
    t.Helpers = {
      isEmptyObject: function (t) {
        for (var e in t) return !1;
        return !0;
      },
      debounce: function (i, n, s) {
        var r = void 0;
        return function () {
          var t = this,
            e = arguments,
            o = s && !r;
          clearTimeout(r),
            (r = setTimeout(function () {
              (r = null), s || i.apply(t, e);
            }, n)),
            o && i.apply(t, e);
        };
      },
      hasClass: function (t, e) {
        return t.classList
          ? t.classList.contains(e)
          : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className);
      },
      offset: l,
      position: function (t) {
        var e = t.offsetParent,
          o = l(e),
          i = l(t),
          n = r(e),
          s = r(t);
        return (
          (o.top += parseInt(n.borderTopWidth) || 0),
          (o.left += parseInt(n.borderLeftWidth) || 0),
          {
            top: i.top - o.top - (parseInt(s.marginTop) || 0),
            left: i.left - o.left - (parseInt(s.marginLeft) || 0),
          }
        );
      },
      getStyle: r,
      getCascadedStyle: function (t) {
        var e = t.cloneNode(!0);
        (e.style.display = "none"),
          Array.prototype.slice
            .call(e.querySelectorAll('input[type="radio"]'))
            .forEach(function (t) {
              t.removeAttribute("name");
            }),
          t.parentNode.insertBefore(e, t.nextSibling);
        var o = void 0;
        e.currentStyle
          ? (o = e.currentStyle)
          : c.getComputedStyle && (o = f.defaultView.getComputedStyle(e, null));
        var i = {};
        for (var n in o)
          !isNaN(n) ||
            ("string" != typeof o[n] && "number" != typeof o[n]) ||
            (i[n] = o[n]);
        if (Object.keys(i).length < 3)
          for (var s in ((i = {}), o))
            isNaN(s) ||
              (i[
                o[s].replace(/-\w/g, function (t) {
                  return t.toUpperCase().replace("-", "");
                })
              ] = o.getPropertyValue(o[s]));
        if (
          (i.margin || "auto" !== i.marginLeft
            ? i.margin ||
              i.marginLeft !== i.marginRight ||
              i.marginLeft !== i.marginTop ||
              i.marginLeft !== i.marginBottom ||
              (i.margin = i.marginLeft)
            : (i.margin = "auto"),
          !i.margin && "0px" === i.marginLeft && "0px" === i.marginRight)
        ) {
          var r = t.offsetLeft - t.parentNode.offsetLeft,
            l = r - (parseInt(i.left) || 0) - (parseInt(i.right) || 0),
            a =
              t.parentNode.offsetWidth -
              t.offsetWidth -
              r -
              (parseInt(i.right) || 0) +
              (parseInt(i.left) || 0) -
              l;
          (0 !== a && 1 !== a) || (i.margin = "auto");
        }
        return e.parentNode.removeChild(e), (e = null), i;
      },
      event: e,
    };
  })(window);
