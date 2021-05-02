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
  await this.$swal('confirm', {
    title: 'Deseja realmente continuar?',
    buttonCancel: {
      text: 'Cancelar'
    }
  }
});
```

### CONFIG
```js 
//vue.config.js
module.exports = {
  transpileDependencies: ["vuetify"],
  transpileDependencies: ["plugin-tigre-sweet-alert-vuetify"],
};
```

## Props

## Thanks to:
- https://github.com/sweetalert2/sweetalert2
- https://github.com/yariksav/vuetify-confirm
