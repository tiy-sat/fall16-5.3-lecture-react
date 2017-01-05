describe("", function(){
  // Declare all modules/files needed for test
  var jsdom = require("jsdom");

  // Create a "beforeEach" to before each of the it blocks
  //   THIS WILL DEFINE OUR VARS
  beforeEach(function(){
    // Creating empty fixture of our HTML
    //   Only place *what is needed* for JS to pass
    document = jsdom.jsdom(`<body></body>`);
    window = document.defaultView;
  });

  describe("", function(){
    it("", function(){
    });
  )};
});
