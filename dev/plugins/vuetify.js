import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import {
  VRow,
  VDialog,
  VBtn,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VSpacer,
  VLayout,
  VProgressCircular,
  VContainer,
  VMain,
  VApp
} from "vuetify/components";

const components = {
  VRow,
  VDialog,
  VBtn,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VSpacer,
  VLayout,
  VProgressCircular,
  VContainer,
  VMain,
  VApp
}

const vuetify = createVuetify({
  components,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.blue.darken2,
          secondary: colors.grey.darken3,
          accent: colors.blue.accent1,
          error: colors.red.accent2,
          info: colors.blue.base,
          success: colors.green.base,
          warning: colors.orange.darken1,
        },
      },
      dark: {
        colors: {
          primary: colors.blue.base,
          secondary: colors.grey.darken3,
          accent: colors.pink.accent1,
          error: colors.red.accent2,
          info: colors.blue.base,
          success: colors.green.base,
          warning: colors.orange.darken1,
        },
      },
    },
  },
  defaults: {
    VBtn: {
      variant: 'flat',
    },
    VCardActions: {
      VBtn: {
        variant: 'flat',
      }
    }
  }
})

export { components }

export default vuetify