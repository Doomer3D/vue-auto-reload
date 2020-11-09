const path = require('path');

// генерация файла version.json с версией сборки
const AutoReloadUtils = require('./src/plugins/AutoReload/versionGenerator');
AutoReloadUtils.generateVersionFile(path.resolve(path.join(__dirname, 'public/version.json')));

module.exports = {
    lintOnSave: true,

    publicPath: '/',

    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, './src/components'),
                '@images': path.resolve(__dirname, './src/assets/images'),
                '@router': path.resolve(__dirname, './src/router'),
                '@store': path.resolve(__dirname, './src/store'),
                '@styles': path.resolve(__dirname, './src/styles'),
                '@utils': path.resolve(__dirname, './src/utils'),
                '@views': path.resolve(__dirname, './src/views'),
            },
        },
    },
};
