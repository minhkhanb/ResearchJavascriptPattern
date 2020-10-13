require.config({
  baseUrl: "js",
  deps: ["main"],

  paths: {
    // Libraries
    jquery: "jquery",
    // bootstrap: "bootstrap.min",
    colorlib: "jquery.color",
    use: "use",
  },
  use: {
    colorlib: {
      deps: ["jquery"],
    },
  },
});
