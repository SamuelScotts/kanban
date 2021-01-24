<template>
    <v-app>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" sm="12">
            <v-row>
              <Topbar v-if="isAuthenticated"/>
            </v-row>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
</template>

<script>
import Topbar from './components/Topbar'

export default {
  name: 'App',
  components: {
    Topbar,
  },
  computed:{
    isAuthenticated(){
    return this.$store.state.isAuthenticated
    }
  }
}
</script>