<template>
  <div id="app">
    <router-view />
    <Header @changeName='nameIsChanging' :myName='myName'/>
    <input type="text" v-model='message'>
    <p>{{message}}</p>
    <img :src="image" alt="">
    <h1>My Todos</h1>
    <input type="text" name="" id="" v-model='inputText'><button @click='addTodo'>Add todo</button>

    <p v-for='(todo, i) in todos' :key='i'>{{todo}}<button @click='remove(i)'>delete</button></p>
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    data() {
      return {
        message: "hello world",
        image: "http://thumbs.ifood.tv/files/image/86/b0/551141-duck-allergy-symptoms.jpg",
        todos: [],
        inputText: '',
        myName: "Mason"
      }
    },
    methods: {
      addTodo() {
        this.todos.push(this.inputText);
        this.inputText = ''
      },
      remove(index) {
        this.todos.splice(index, 1)
      },
      nameIsChanging (data) {
        console.log(data)
        this.myName = data
      }
    },
    components: {
      Header: Header
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 200px;
}
p, div {
  box-sizing: border-box;
}
</style>
