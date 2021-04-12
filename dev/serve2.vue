<script>
export default{
  name: 'ServeDev',
  data() {
    return {
      showAlert: false,
      loading: false,
      alertDefault: "",
      config: null,
    }
  },
  methods: {
    init() {
      this.showAlert = false,
      this.loading = false,
      this.alertDefault = "",
      this.config = {
        title: "",
        loading: {
          text: "Aguarde..."
        },
        buttonOk: {}
      };
    },
    showConfirm() {
      this.alertDefault = "confirm";
      this.config.title = "Deseja realmente continuar?";
      this.config.buttonOk = {
        close: false,
        emitEventClick: "okConfirm"
      }
      this.showAlert = true;
    },
    saveItem() {
      this.loading = true;
      setTimeout(() => {
        this.alertDefault = "success";
        this.config.title = "Registro salvo com sucesso!";
        this.config.buttonOk = {
          close: true,
          emitEventClick: "finishSaveItem"
        }
        this.loading = false;
      }, 3000);
    }
  },
  mounted() {
    this.init();
  },
};
</script>

<template>
  <v-app id="app">
    <v-main>
      <v-btn
        color="primary"
        dark
        @click="showConfirm"
      >
        Salvar
      </v-btn>
      <sweet-alert-vuetify
        v-model="showAlert"
        @okConfirm="saveItem"
        @finishSaveItem="init"
        :alertDefault="alertDefault"
        :loading="loading"
        :config="config"
      />
    </v-main>
  </v-app>
</template>
