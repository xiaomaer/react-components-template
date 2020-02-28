const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'react-components-template',
    description: 'react组件库脚手架',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root:
          '/Users/mia/Documents/projects-me/react-components-template/.docz',
        base: '/',
        source: './',
        src: 'components',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: 'doc-build',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'react-components-template',
        description: 'react组件库脚手架',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/mia/Documents/projects-me/react-components-template',
          templates:
            '/Users/mia/Documents/projects-me/react-components-template/node_modules/docz-core/dist/templates',
          docz:
            '/Users/mia/Documents/projects-me/react-components-template/.docz',
          cache:
            '/Users/mia/Documents/projects-me/react-components-template/.docz/.cache',
          app:
            '/Users/mia/Documents/projects-me/react-components-template/.docz/app',
          appPackageJson:
            '/Users/mia/Documents/projects-me/react-components-template/package.json',
          gatsbyConfig:
            '/Users/mia/Documents/projects-me/react-components-template/gatsby-config.js',
          gatsbyBrowser:
            '/Users/mia/Documents/projects-me/react-components-template/gatsby-browser.js',
          gatsbyNode:
            '/Users/mia/Documents/projects-me/react-components-template/gatsby-node.js',
          gatsbySSR:
            '/Users/mia/Documents/projects-me/react-components-template/gatsby-ssr.js',
          importsJs:
            '/Users/mia/Documents/projects-me/react-components-template/.docz/app/imports.js',
          rootJs:
            '/Users/mia/Documents/projects-me/react-components-template/.docz/app/root.jsx',
          indexJs:
            '/Users/mia/Documents/projects-me/react-components-template/.docz/app/index.jsx',
          indexHtml:
            '/Users/mia/Documents/projects-me/react-components-template/.docz/app/index.html',
          db:
            '/Users/mia/Documents/projects-me/react-components-template/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
