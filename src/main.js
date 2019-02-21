import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import 'tabulator-tables/dist/css/tabulator.min.css'
import App from './App.vue'

import Tabulator from 'tabulator-tables';
Tabulator.prototype.extendModule("sort", "sorters", {
    ip:function(a, b){
        var ip2numeric = function(dot) {
            var rex = /[a-zA-Z]/;
            var d;
            if ( rex.test(dot) === true ) {
                return 0xFFFFFFFF;
            }
            dot = dot.split(/[-/]/)[0]
            d = dot.split('.');
            return ((((((+d[0])*256)+(+d[1]))*256)+(+d[2]))*256)+(+d[3]);
        };
        a = ip2numeric(a);
        b = ip2numeric(b);
        return a - b;
    },
});

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
})
