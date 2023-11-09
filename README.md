# SweetAlertVuetify - Vue 3.x

> This version supports **only** Vue 3 with Vuetify 3 versions. If you need Vue 2 support, please consider using this package [sweet-alert-vuetify](https://www.npmjs.com/package/sweet-alert-vuetify).

## Install


```js
npm install sweet-alert-vuetify --save
yarn add sweet-alert-vuetify --dev
```

## Use

```js
import { SweetAlertVuetify } from 'sweet-alert-vuetify';
// or
import { SweetAlertVuetify } from 'sweet-alert-vuetify/lib'; // uncompiled version

components: { SweetAlertVuetify }
```

```html
<sweet-alert-vuetify
  v-model="showConfirm"
  @clickButtonOk="save()"
  @clickButtonCancel="cancel()"
  alertDefault="confirm"
  :config="{
    title: {
      text: 'Deseja realmente continuar?'
    },
    buttonCancel: {
      text: 'Cancelar'
    }
  }"
/>
```

### OR

```js
import { createApp } from 'vue';
import SweetAlertVuetify from 'sweet-alert-vuetify';
// or
import SweetAlertVuetify from 'sweet-alert-vuetify/lib'; // uncompiled version

app.use(SweetAlertVuetify, vuetify);
app.use(vuetify);

```

### Use

```js
async showAlert() {
  let confirm = await this.$swal("confirm", {
    hideOverlay: true,
    config: {
      iconVisible: false,
      title: {
        text: "Você tem certeza que deseja continuar?",
        style: {
          style: {
            fontSize: "12px",
            color: "red"
          }
        }
      },
      buttonCancel: {
        text: "Não, voltar",
        style: {
          color: "#687CEA",
          class: "text-white",
          width: "30%",
          maxWidth: "400px",
          rounded: true,
        },
      },
      buttonOk: {
        text: "Sim, continuar",
        style: {
          color: "#687CEA",
          class: "text-white",
          variant: "flat",
          width: "40%",
          maxWidth: "400px",
          rounded: true,
        },
      },
    },
  });

  this.$swal("loading", {
    config: {
      loading: {
        text: "Salvando...",
      },
    },
  });

  this.$swal("success", {
    config: {
      title: {
        text: "Registro salvo com sucesso!",
      },
    },
  });

  this.$swal("error", {
    config: {
      title: {
        text: "Ocorreu algum problema ao salvar os dados.",
      },
    },
  });
});
```

### CONFIG
```js 
//vue.config.js
module.exports = {
  transpileDependencies: ["vuetify", "sweet-alert-vuetify"]
};
```

## Props
- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
- [Vuetify 3 Upgrade Guide](https://vuetifyjs.com/en/getting-started/upgrade-guide/)

## Thanks to:
- https://github.com/sweetalert2/sweetalert2
- https://github.com/yariksav/vuetify-confirm
