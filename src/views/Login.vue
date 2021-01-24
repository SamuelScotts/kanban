<template>
  <v-main>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="4">
        <v-container>
          <!-- IMAGE -->
          <v-row class="mt-1">
            <v-col>
            </v-col>
          </v-row>

          <!-- INPUT FIELDS -->
          <v-row class="mt-1">
            <v-col>
              <h2 align="center">Login</h2>
              <v-text-field v-model="email" solo class="mt-4 mb-n6" color="#7CAEF9" outlined label="Email" prepend-inner-icon="mdi-email"></v-text-field>
              <v-text-field v-model="password" solo class="mt-2" color="#7CAEF9" outlined :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" label="Password" prepend-inner-icon="mdi-lock" @click:append="show1 = !show1"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn small text class="mt-n6 mb-6">Forgot Password?</v-btn>
          </v-row>

          <!-- <v-row align="center" justify="center">
            <p>Don't have an account? <router-link to="/register">Register</router-link> here.</p>
          </v-row> -->

          <v-row align="center" justify="center">
            <v-btn color="#7CAEF9" dark class="pl-16 pr-16 mb-6" @click="login()">Login</v-btn>
          </v-row>
          
        </v-container>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>

export default {
  name: 'Login',
  components: {
      //
  },
  data: () => ({
    //
  }),
  computed:{
      //
  },
  methods:{
      //
  }
}
</script>