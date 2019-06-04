import Vue from 'vue';
import api from './api.export';

// 将API封装成Vue插件
Plugin.install = function(Vue, options) {
    Vue.api = api;
    window.api = api;
    Object.defineProperties(Vue.prototype, {
        api: {
            get() {
                return api;
            }
        },
        $api: {
            get() {
                return api;
            }
        }
    });
};

Vue.use(Plugin);

export default Plugin;
