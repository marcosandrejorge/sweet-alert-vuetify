## Install


```js
npm install sweet-alert-vuetify --save

```

## Use

```js
import SweetAlertVuetify from 'sweet-alert-vuetify';
components: { SweetAlertVuetify }
```

```html
<sweet-alert-vuetify
  v-model="showConfirm"
  @clickButtonOk="save()"
  @clickButtonCancel="cancel()"
  alertDefault="confirm"
  :config="{
    title: 'Deseja realmente continuar?',
    buttonCancel: {
      text: 'Cancelar'
    }
  }"
/>
```

### OR

```js
import SweetAlertVuetify from 'sweet-alert-vuetify';
Vue.use(SweetAlertVuetify, vuetify);

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
          text: false,
          color: "#687CEA",
          class: "white--text",
          depressed: true,
          width: "30%",
          maxWidth: "400px",
          rounded: true,
        },
      },
      buttonOk: {
        text: "Sim, continuar",
        style: {
          text: false,
          color: "#687CEA",
          class: "white--text",
          depressed: true,
          width: "40%",
          maxWidth: "400px",
          rounded: true,
        },
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

## Thanks to:
- https://github.com/sweetalert2/sweetalert2
- https://github.com/yariksav/vuetify-confirm
