<template>
  <v-main>
        <v-card flat>
          <v-toolbar flat color="#7CAEF9" class="white--text mb-8">

            <!-- TITLE -->
            <v-toolbar-title>Kanban Board</v-toolbar-title>

            <!-- SEARCH INPUT -->
            <!-- <v-text-field class="mt-7 ml-8" label="Search" flat prepend-inner-icon="mdi-magnify" solo></v-text-field> -->

            <v-spacer></v-spacer>

            <!-- CURRENTLY NON-FUNCTIONING ICON -->
            <v-btn icon class='mr-2' text>
              <v-icon color="#EEEEEE">mdi-email-outline</v-icon>
            </v-btn>

            <!-- CURRENTLY NON-FUNCTIONING ICON -->
            <v-btn icon class='mr-2' text>
              <v-icon color="#EEEEEE">mdi-bell-outline</v-icon>
            </v-btn>

            <!-- BOARDS MENU - SERVER ICON -->
            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="#EEEEEE" dark v-bind="attrs" v-on="on" icon text>
                    <v-icon>mdi-server</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <router-link to="/" style="text-decoration: none;"> 
                    <v-list-item>
                      <v-list-item-title>Boards</v-list-item-title>
                    </v-list-item>
                  </router-link>
                    <div class="text-center">
                      <v-dialog v-model="dialog" width="300">
                        <template v-slot:activator="{ on, attrs }">
                          <v-list-item>
                            <v-list-item-title v-bind="attrs" v-on="on">New Board</v-list-item-title>
                          </v-list-item>
                        </template>

                        <v-card>
                          <v-card-title class="headline grey lighten-2">
                            Add a new board...
                          </v-card-title>
                            <v-text-field v-model="boardName" class="pa-4 mb-n12" label="Board's name" outlined></v-text-field>
                          <v-card-text>
                              
                          </v-card-text>

                          <v-divider></v-divider>

                          <v-card-actions>
                            <v-btn color="error" text @click="dialog = false">
                              Cancel
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" text @click="dialog = false, storeBoardName()">
                              Submit
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </div>
                </v-list>
              </v-menu>
            </div>

            <!-- CURRENTLY NON FUNCTIONING ICON -->
            <v-btn icon class='mr-2' text>
              <v-icon color="#EEEEEE">mdi-account-outline</v-icon>
            </v-btn>

          </v-toolbar>
        </v-card>

  </v-main>
</template>

<script>
  export default {
    name: 'Topbar',

    data () {
      return {
        items: [
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me 2' },
        ],
        dialog: false,
        boardName: '',
      }
    },
    methods:{
      storeBoardName(){
          this.$store.dispatch('storeBoardName', this.boardName)
      }
  }
  }
</script>
