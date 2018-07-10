require('babel-register')({
  babelrc: false,
  "presets": [
    "es2015",
    "react"
  ],
  "plugins": [
    [
      "module-resolver",
      {
        "root": [
          "./"
        ],
        "alias": {
          "admin": "./admin",
          "components": "./components",
          "pages": "./pages",
          "posts": "./posts",
          "static": "./static",
          "utils": "./utils"
        }
      }
    ]
  ]
});
require('./server');
