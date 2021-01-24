<template>
  <v-main>
    <v-row>
      <v-col cols="12" sm="9">

        <v-card flat class="mr-4 mb-n4 mt-n4">
          <!-- BOARD TITLE / NAME -->
          <v-card-title>{{boards[currentBoardId].name}}

            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon text outlined class="ml-4 pa-n4" v-bind="attrs" v-on="on" rounded><v-icon>mdi-chevron-down</v-icon></v-btn>
                </template>
                <v-list>

                    <!-- ADD NEW COLUMN -->
                    <div class="text-center">
                      <v-dialog v-model="dialog" width="300">
                        
                        <template v-slot:activator="{ on, attrs }">
                          <v-list-item>
                            <v-list-item-title v-bind="attrs" v-on="on">Add Column</v-list-item-title>
                          </v-list-item>
                        </template>

                        <!-- DIALOG TO ADD NEW COLUMN -->
                        <v-card>
                          <v-card-title class="headline grey lighten-2">
                            Add a column
                          </v-card-title>
                            
                          <v-text-field v-model="columnName" class="pa-4 mb-n8" label="Column's name" outlined></v-text-field>

                          <v-divider></v-divider>

                          <v-card-actions>
                            <v-btn color="error" text @click="dialog = false">
                              Cancel
                            </v-btn>

                            <v-spacer></v-spacer>

                            <v-btn color="primary" text @click="dialog = false, addNewColumn()">
                              Submit
                            </v-btn>
                          </v-card-actions>
                        </v-card>

                      </v-dialog>
                    </div>

                </v-list>
              </v-menu>
            </div>


          </v-card-title>
        </v-card>
      </v-col>

      <!-- ASSIGNED USERS (IMAGES) & ASSIGNMENT BUTTON -->
      <v-col cols="12" sm="3">
        <v-card flat class="mr-4 mb-n4 mt-n2">
          <v-card-actions>
            <v-spacer></v-spacer>
              <v-avatar class="ml-7" color="primary white--text" size="33">SS</v-avatar>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row class="mr-2 ml-1">
      <v-col><Column/></v-col>
    </v-row>
  </v-main>
</template>

<script>

import Column from '../components/Column'


export default {
  name: 'Board',
  components: {
    Column
  },
  data: () => ({
    columnName: '',
    dialog: false,
  }),
  computed:{
    boards(){
      return this.$store.state.boards
    },
    currentBoardId(){
      return this.$store.state.currentBoardId
    },
    users(){
      return this.$store.state.users
    }
  },
  methods:{
    addNewColumn(){
      let column = {
        name: this.columnName,
        tasks:[]
      }
      this.$store.dispatch('addNewColumn', column)
    }
  }
}
</script>
