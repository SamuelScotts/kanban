<template>
  <v-main>
    <v-row>

      <!-- DISPLAY EACH COLUMN -->
      <v-col cols="12" sm="4" v-for="(column, index) in boards[currentBoardId].columns" :key="index">
        <v-card class="pa-4" color="#F3F0F0">
          <v-card flat class="mt-n2" color="#F3F0F0">
            <v-card-title class="mb-n3">{{column.name}}
              <v-spacer></v-spacer>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-card-title>
          </v-card>
      
          <!-- DISPLAY EACH TASK -->
          <v-card class="mt-3" v-for="(task, index) in boards[currentBoardId].columns[index].tasks" :key="index">
            <v-btn text class="mt-2 mb-n4">{{task.priority}} Priority</v-btn>
            <v-card-subtitle>{{task.content}}</v-card-subtitle>
            <v-card-actions>
              <v-icon class="ml-2 mt-n2">mdi-message-reply-outline</v-icon>
              <v-icon class="ml-8 mt-n2">mdi-plus-circle-outline</v-icon>
              <v-btn icon class="ml-6 mt-n2" color="#7CAEF9" @click="storeTaskIndex(index), storeColumnIndex(index)"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
              <v-icon class="ml-6 mt-n2">mdi-share-outline</v-icon>
              <v-spacer></v-spacer>
              <v-avatar class="mr-2 mt-n2" color="primary white--text" size="34">SS</v-avatar>
            </v-card-actions>
          </v-card>

            <!-- ADD NEW TASK DIALOG -->
            <div class="text-center">
              <v-dialog v-model="dialog" width="300" :retain-focus="false">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="mt-4 mb-n2" block text v-bind="attrs" v-on="on" @click="storeColumnIndex(index)">Add task<v-icon class="ml-2">mdi-plus-circle-outline</v-icon></v-btn>
                </template>

                <!-- DIALOG'S HEADER -->
                <v-card>
                  <v-card-title class="headline grey lighten-2">
                    Add a new task
                  </v-card-title>
                    <v-select v-model="taskPriority" :items="items" class="pa-4 mb-n10" label="What priority?" outlined></v-select>
                    <v-text-field v-model="taskContent" class="pa-4 mb-n12" label="Task content..." outlined></v-text-field>
                  <v-card-text>
                      
                  </v-card-text>

                  <v-divider></v-divider>

                  <!-- DIALOG CANCEL / SUBMIT BUTTONS -->
                  <v-card-actions>
                    <v-btn color="error" text @click="dialog = false, clearModel()">
                      Cancel
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false, addTaskToColumn()">
                      Submit
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>

        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>

export default {
  name: 'Column',
  components: {
    //
  },
  data: () => ({
    items: ['Low', 'Medium', 'High'],
    taskPriority: null,
    taskContent: '',
    dialog: false,
  }),
  computed:{
    // PULL THROUGH AVAILABLE BOARDS
    boards(){
    return this.$store.state.boards
    },
    // PULL THROUGH CURRENT BOARD'S ID
    currentBoardId(){
      return this.$store.state.currentBoardId
    },
  },
  methods:{
    // STORE THE INDEX OF THE CURRENT COLUMN
    storeColumnIndex(index){
      this.$store.dispatch('storeColumnIndex', index)
    },
    // STORE THE INDEX OF THE CURRENT TASK
    storeTaskIndex(index){
      this.$store.dispatch('storeTaskIndex', index)
    },
    // ADD A TASK TO THE CURRENT COLUMN
    addTaskToColumn(){
      let task = {
        priority: this.taskPriority,
        content: this.taskContent,
      }
      this.$store.dispatch('addTaskToColumn', task)
      this.clearModel()
    },
    clearModel(){
      this.taskPriority = null,
      this.taskContent = ''
    }
  }
}
</script>