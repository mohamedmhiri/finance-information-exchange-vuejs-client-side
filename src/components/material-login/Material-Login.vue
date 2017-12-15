<template>
  <div>
    <div class="mui-appbar">
    </div>
    <center>
      <!--[if mso]><table><tr><td class="mui-container-fixed"><![endif]-->
      <div class="mui-container">

        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td class="mui-panel">
              <table
                id="content-wrapper"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
              >
                <tbody>
                <tr>
                  <td>
                    <h2>Vous êtes le bienvenu!</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <form class="mui-form" method="POST" @submit.prevent="login({ email, password })">
                      <legend>Login</legend>
                      <div class="mui-textfield mui-textfield--float-label">
                        <input type="text" v-model="email">
                        <label>E-mail</label>
                      </div>
                      <div class="mui-textfield mui-textfield--float-label">
                        <input type="password" v-model="password">
                        <label>Mot de passe</label>
                      </div>
                      <button type="submit" class="mui-btn mui-btn--raised disabled">Login</button>
                      <button class="mui-btn mui-btn--raised disabled">
                        <router-link to="/signup">S'inscrire</router-link>
                      </button>
                    </form>
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
      </div>

    </center>
  </div>

</template>

<script>
import Vuex from 'vuex'
export default {
  name: "material-login",
  data() {
    return {
      email: "",
      password: "",
      errors: {
        data: {
          email: "",
          password: ""
        }
      }
    };
  },
  methods: {
    login() {
      if (this.$data.email !== "" && this.$data.password !== "") {
        this.$store
          .dispatch("login", {
            email: this.email,
            password: this.password
          })
          .then(() => {
            this.$router.push("/");
          });
      } else if (this.$data.email === "") {
        this.errors.data.email = "Veuillez saisir un email";
      } else if (this.$data.password === "") {
        this.errors.data.password = "Veuillez saisir le mot de passe";
      }
      console.log(this.errors.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body,
.mui-body {
  background-color: #eee;
  font-size: 15px;
}

.mui-container,
.mui-container-fixed {
  padding-top: 15px;
  padding-bottom: 15px;
}
#content-wrapper h2 {
  margin-top: 0px;
  margin-bottom: 0px;
}

#content-wrapper > tbody > tr > td {
  padding-bottom: 15px;
}

#content-wrapper .mui--divider-top {
  padding-top: 15px;
}

#last-cell {
  padding-bottom: 15px;
}
</style>
