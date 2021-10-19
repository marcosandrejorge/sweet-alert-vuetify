<script>
export default {
  name: "ServeDev",
  data() {
    return {};
  },
  methods: {
    async showAlert() {
      let confirm = await this.$swal("confirm", {
        hideOverlay: true,
        config: {
          iconVisible: false,
          title: {
            text: "Você tem certeza que deseja continuar Você tem certeza que deseja continuar Você tem certeza que deseja continuar?",
            style: {
              class: "text-center",
              style: {
                wordBreak: "normal",
                fontSize: "12px",
                color: "red",
              },
            },
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
      console.log("Value return swal:", confirm);
      if (!confirm) return;
      this.$swal("loading", {
        config: {
          loading: {
            text: "Salvando...",
          },
        },
      });
      setTimeout(() => {
        this.$swal("success", {
          config: {
            title: {
              text: "Registro salvo com sucesso!",
            },
          },
        });
      }, 3000);
    },
  },
};
</script>

<template>
  <v-app id="app">
    <v-main>
      <v-btn color="primary" dark @click="showAlert"> Salvar </v-btn>
    </v-main>
  </v-app>
</template>
