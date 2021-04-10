import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        primary: colors.blue.darken1, // #E53935
        secondary: colors.blue.lighten4, // #FFCDD2
        accent: colors.orange.base // #3F51B5
    }
})

const opts = {}

export default new Vuetify(opts)