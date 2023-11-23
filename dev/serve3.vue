<script>
export default{
  name: 'ServeDev',
  data() {
    return {
      showConfirm: false,
      showAlert: false,
      loading: false,
      alertDefault: "",
      config: {
        title: "",
        loading: {
          text: "Aguarde..."
        },
      },
    }
  },
  methods: {
    finish($event) {
      console.log('Event change =>', $event);
      this.config = {
        title: "",
        loading: {
          text: "Aguarde..."
        },
      };
    },
    save() {
      this.config = {
        title: {
          text: "Registro salvo com sucesso"
        }
      };
      this.alertDefault = "success";
      this.loading = true;
      this.showAlert = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
    cancel() {
      this.config = {
        title: {
          text:  "Ocorreu um erro ao tentar salvar o registro. Ocorreu um erro ao tentar salvar o registro. Ocorreu um erro ao tentar salvar o registro."
        }
      };
      this.alertDefault = "error";
      this.config.buttonOk = {
        style: {
          width: "50%",
          color: "error",
        }
      }
      this.loading = true;
      this.showAlert = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    }
  }
};
</script>

<template>
  <v-app id="app">
    <v-main>
      <v-btn
        color="primary"
        dark
        @click="showConfirm = true"
      >
        Salvar
      </v-btn>
      <sweet-alert-vuetify
        v-model="showConfirm"
        @clickButtonOk="save"
        @clickButtonCancel="cancel"
        alertDefault="confirm"
        :config="{
          title: {
            text: 'Deseja realmente continuar?'
          },
          buttonCancel: {
            text: 'Cancelar'
          },
        }"
      />
      <sweet-alert-vuetify
        v-model="showAlert"
        @change="finish"
        :alertDefault="alertDefault"
        :loading="loading"
        :config="config"
      />
    </v-main>
  </v-app>
</template>
