// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---components-test-index-mdx": () => import("./../../components/test/index.mdx" /* webpackChunkName: "component---components-test-index-mdx" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

