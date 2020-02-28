const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mia/Documents/projects-me/react-components-template/.docz/.cache/dev-404-page.js"))),
  "component---components-test-index-mdx": hot(preferDefault(require("/Users/mia/Documents/projects-me/react-components-template/components/test/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/mia/Documents/projects-me/react-components-template/.docz/src/pages/404.js")))
}

