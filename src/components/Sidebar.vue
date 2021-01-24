<template>
  <v-main>
    <v-card height="100vh" width="108">
      <v-navigation-drawer permanent>
        
<!--         <v-list>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon class="mt-7 mb-10">{{ item.icon }}</v-icon>
              <v-list-item-action-text class="mt-8 ml-1">{{item.title}}</v-list-item-action-text>
            </v-list-item-icon>
          </v-list-item>
        </v-list> -->

        <v-list>
          <router-link to="/" style="text-decoration: none;"> 
          <v-list-item link>
            <v-list-item-icon>
              <v-icon class="mt-7 mb-10">mdi-server</v-icon>
              <v-list-item-action-text class="mt-8 ml-1">Boards</v-list-item-action-text>
            </v-list-item-icon>
          </v-list-item>
          </router-link>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block text>
              Logout
            </v-btn>
          </div>
        </template>

      </v-navigation-drawer>
    </v-card>
  </v-main>
</template>

<script>
  export default {
    name: 'Sidebar',

    data () {
      return {
/*         items: [
          { title: 'Manage', icon: 'mdi-account-multiple' },
          { title: 'Boards', icon: 'mdi-server' },
          { title: 'Schedule', icon: 'mdi-calendar-text-outline'},
          { title: 'Reports', icon: 'mdi-poll' },
        ], */
      }
    },
  }
</script>
