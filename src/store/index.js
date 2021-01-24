import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    currentBoardId: null,
    currentColumnId: null,
    currentTaskId: null,
    users:[
      {
        username: 'test1',
        password: 'testing1',
        boards:[0,1]
      },
      {
        username: 'test2',
        password: 'testing2',
        boards:[1]
      },
      {
        username: 'test3',
        password: 'testing3',
        boards:[0]
      },
      {
        username: 'test4',
        password: 'testing4',
        boards:[]
      },
    ],
    boards:[
      {
        id: 0,
        name: 'Secret Project',
        columns:[
          {
            name: 'Outstanding',
            tasks: [
              {
                priority: 'High',
                content: 'This is what content looks like...'
              },
              {
                priority: 'Low',
                content: 'This is what content looks like...'
              },
            ]
          },
          {
            name: 'Ongoing',
            tasks: [
              {
                priority: 'Medium',
                content: 'This is what content looks like...'
              },
              {
                priority: 'Low',
                content: 'This is what content looks like...'
              },
            ]
          },
          {
            name: 'Complete',
            tasks: [
              {
                priority: 'High',
                content: 'This is what content looks like...'
              },
              {
                priority: 'Medium',
                content: 'This is what content looks like...'
              },
            ]
          },
        ]
      },
      {
        id: 1,
        name: 'Trip Planning',
        columns:[
          {
            name: 'Outstanding',
            tasks: [
              {
                priority: 'High',
                content: 'Trial Content.'
              },
              {
                priority: 'Low',
                content: 'Trial Content.'
              },
            ]
          },
          {
            name: 'Ongoing',
            tasks: [
              {
                priority: 'Medium',
                content: 'Trial Content.'
              },
              {
                priority: 'Low',
                content: 'Trial Content.'
              },
            ]
          },
          {
            name: 'Complete',
            tasks: [
              {
                priority: 'High',
                content: 'Trial Content.'
              },
              {
                priority: 'Medium',
                content: 'Trial Content.'
              },
            ]
          },
        ]
      }
    ],
  },
  mutations: {
    storeBoardIndex(state, id){
      state.currentBoardId = id;
    },
    storeColumnIndex(state, index){
      state.currentColumnId = index
    },
    storeTaskIndex(state, index){
      state.currentTaskId = index
    },
    storeBoardName(state, board){
      state.boards.push(board)
    },
    addTaskToColumn(state, task){
      state.boards[state.currentBoardId].columns[state.currentColumnId].tasks.push(task)
    },
    addNewColumn(state, column){
      state.boards[state.currentBoardId].columns.push(column)
    },
    deleteTask(state){
      state.boards[state.currentBoardId].columns[state.currentColumnId].tasks[state.currentTaskId].splice()
    },
  },
  actions: {
    storeBoardIndex({ commit }, index){
      commit('storeBoardIndex', index)
    },
    storeColumnIndex({ commit }, index){
      commit('storeColumnIndex', index)
    },
    storeTaskIndex({ commit, dispatch }, index){
      commit('storeTaskIndex', index)
      dispatch('deleteTask')
    },
    storeBoardName({ commit }, boardName){
      let id = this.state.boards.length + 1;
      let board = {  
        id: id,
        name: boardName,
        columns: [],
      }
      commit('storeBoardName', board)
    },
    addTaskToColumn({ commit }, task){
      commit('addTaskToColumn', task)
    },
    addNewColumn({ commit }, column){
      commit('addNewColumn', column)
    },
    deleteTask({ commit }){
      commit('deleteTask')
    }
  },
  modules: {
  }
})
