module.exports =
{
    "plugins": [
      [
        "babel-plugin-root-import",
        {
          "rootPathSuffix": "./",
          "rootPathPrefix": "@"
        }
      ]
    ],
    'sourceType': 'unambiguous',
    ignore: [/[\/\\]core-js/, /@babel[\/\\]runtime/]
  }
