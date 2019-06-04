// var glob = require('glob');
// var path = require('path');

// const pages = {};
// let entries;

// try {
//   entries = glob('src/pages/*/*.html', {sync: true});

// } catch (error) {
//   entries = [];
//   throw error
// }

// //格式化生成入口
// entries.forEach(file => {
//   const fileSplit = file.split('/');
//   const baseName = path.basename(file, path.extname(file));

//   const pageHtml = file;
//   const entryJS = fileSplit.slice(0,3).join('/') + '/' + baseName + '.js';

//   pages[baseName] = {
//     entry: entryJS,
//     template: pageHtml,
//     filename: `${baseName}.html`
//   }
// });

const pages = {
    index: {
        entry: 'src/pages/index/index.js',
        template: 'src/pages/index/index.html',
        filename: 'index.html'
    },
    admin: {
        entry: 'src/pages/admin/admin.js',
        template: 'src/pages/admin/admin.html',
        filename: 'admin.html'
    }
};

//匹配入口的url
const devServer = {
    historyApiFallback: {
        rewrites: [
            // { from: /./, to: '/index.html'},
            { from: /^\/admin/, to: '/admin.html' },
            { from: /login/, to: '/admin.html' }
        ]
    }
};

const chainWebpack = config => {
    config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
};

module.exports = {
    pages,
    devServer,
    chainWebpack,
    configureWebpack: {
        externals: {
            'highlight.js': 'hljs'
        }
    }
};
