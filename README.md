### Install


```js
npm install sweet-alert-vuetify --save

import SweetAlertVuetify from 'sweet-alert-vuetify';
Vue.use(SweetAlertVuetify);

or

import SweetAlertVuetify from 'sweet-alert-vuetify';
components: { SweetAlertVuetify }

```

### Use

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

## Props
