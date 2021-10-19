<script>
export default{
  name: 'ServeDev',
  data() {
    return {}
  },
  methods: {
    async showAlert() {
      let confirm = await this.$swal('confirm', {
        title: 'Deseja realmente continuar?',
        buttonCancel: {
          text: 'Cancelar'
        },
        buttonOk: {
          valueReturn: "1"//Default true
        }
      });
      console.log('Value return swal:', confirm);
      if (confirm !== "1") return;
      this.$swal('loading', {
        loading: {
          text: 'Salvando...'
        }
      });
      setTimeout(() => {
        this.$swal('success', {
          title: 'Registro salvo com sucesso!',
          subtitle: 'O registro foi salvo com o código: 498'
        });
      }, 3000);
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
        @click="showAlert"
      >
        Salvar
      </v-btn>
    </v-main>
  </v-app>
</template>
