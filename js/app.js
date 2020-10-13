var Speaker = {
    init: function (options, elem) {
        // Mix in the passed in options with the default options
        this.options = $.extend({}, this.options, options);

        // Save the element reference, both a jQuery
        // Reference and a normal reference
        this.elem = elem;
        this.$elem = $(elem);

        // Build the DOM initial structure
        this._build();

        // Return this so we can chain/use the bridge with less code.
        return this;
    },
    options: {
      name: 'No name'
    },
    _build: function () {
        this.$elem.html('<h1>' + this.options.name + '</h1>')
    },
    speak: function (msg) {
        // You have direct access to the associated and cached jQuery element
        this.$elem.append('<p>' + msg + '</p>')
    }
}