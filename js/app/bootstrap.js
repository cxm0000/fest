require.config({
    baseUrl: '../js/libs',
    paths: {
        "app": "../app",
        "react": "//fb.me/react-0.13.3",
        "parse": "//www.parsecdn.com/js/parse-1.6.5.min",
        "jquery": '//code.jquery.com/jquery-2.1.4.min',
        "bootstrap": "//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min"
    },
    shim: {
     parse: {
        exports: 'Parse',
        deps: ["jquery"]
     },
     jquery: {
        exports: 'jquery'
     }
  }
});

// Load the main app module to start the app
require(["app/main"]);
