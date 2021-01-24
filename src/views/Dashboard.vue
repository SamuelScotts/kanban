<template>
  <v-main>
  
  <v-row>
    <v-col cols="12" sm="4" v-for="(board, index) in boards" :key="index">
    <router-link to="/board" style="text-decoration: none;">
        <v-card class="pa-4" color="#F3F0F0" @click="storeBoardIndex(index)">
            <v-card flat class="mt-n2" color="#F3F0F0">
            <v-card-title class="mb-n3">{{board.name}}
                <v-spacer></v-spacer>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-card-title>
            </v-card>
        </v-card>
      </router-link>
    </v-col>
  </v-row>

  </v-main>
</template>

<script>

export default {
  name: 'Dashboard',
  components: {
      //
  },
  data: () => ({
    //
  }),
  computed:{
    boards(){
        return this.$store.state.boards
    }
  },
  methods:{
      storeBoardIndex(index){
          this.$store.dispatch('storeBoardIndex', index)
      },
  }
}
</script>