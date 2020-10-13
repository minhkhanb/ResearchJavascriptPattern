// Make sure Object.create is available in the browser (for our prototypal inheritance)
// Courtesy of Papa Crockford
// Note this is not entirely equal to native Object.create, but compatible with our use-case
if (typeof Object.create !== "function") {
  Object.create = function (o) {
    function F() {} // optionally move this outside the declaration and into a closure if you need more speed

    F.prototype = o;
    return new F();
  };
}

(function ($) {
  // Start a plugin
  $.fn.speaker = function (options) {
    // Don't act on absent elements -via Paul Irish's advice
    if (this.length) {
      return this.each(function () {
        // Create a new Speaker object via the prototypal Object.create
        var mySpeaker = Object.create(Speaker);

        // Run the initialization function of the speaker
        mySpeaker.init(options, this); // `this` reference to the element

        // Save the instance of the speaker object in the element's data store
        $.data(this, "speaker", mySpeaker);
      });
    }
  };
})(jQuery);

$.plugin = function (name, object) {
  $.fn[name] = function (options) {
    // optionally, you could test if options was a string
    // and use it to call a method name on the plugin instance.
    return this.each(function () {
      if (!$.data(this, name)) {
        $.data(this, name, Object.create(object).init(options, this));
      }
    });
  };
};

// With the Speaker object, we could essentially do this:
$.plugin("speaker", Speaker);

// At this point we could do the following
$("#myDiv").speaker({ name: "Alex" });
