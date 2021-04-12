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

## Props
