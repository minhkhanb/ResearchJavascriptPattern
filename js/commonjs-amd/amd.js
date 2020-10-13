define(["myModule", "myOtherModule"], function (myModule, myOtherModule) {
  console.log(myModule.hello());
});

define([], function () {
  return {
    hello: function () {
      console.log("hello");
    },
    goodbye: function () {
      console.log("goodbye");
    },
  };
});
