<template>
    <div id="app">
        <h1>TODOリスト</h1>
        <div>
            <input v-model="newTodoName" />
            <button @click="addTodo()">追加</button>
            <ul class="forWrapper">
                <!-- keyはdoc.id todoはdocの中身(name&fag)-->
                <li v-for="(todo, key) in todos"
                    :key="key">
                    <input type="checkbox"
                           v-model="todo.isComplete"
                           @click="updateTodo(todo, key)" />
                    {{ todo.name }}
                    <button @click="removeTodo(key)">X</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// firebaseインポート
import firebase from 'firebase'

export default {
  name: 'app',
  data(){
    return{
      db: null,
      todosRef: null,
      newTodoName: "",
  // firebaseからの情報
      todos: {}
    }
  },
  created(){
    this.db = firebase.firestore()
    this.todosRef = this.db.collection('todos');
    this.todosRef.onSnapshot(querySnapshot =>{
      const firebaseObj = {}
      // 現在のオブジェクト
      querySnapshot.forEach(doc =>{
        // doc.idはfirebaseのdoqumentID
        firebaseObj[doc.id] = doc.data()
      })
      this.todos = firebaseObj
    })
  },
  methods: {
    addTodo(){
      if(this.newTodoName === ""){return}
      // firebaseへdocumentの追加
      this.todosRef.add({
        name: this.newTodoName,
        isComplete: false,
      })
    },
    updateTodo(todo, key){
      todo.isComplete = !todo.isComplete
      this.todosRef.doc(key).update(todo)
    },
    removeTodo(key){
      this.todosRef.doc(key).delete()
    }
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

ul {
    padding-left: 0;
}

li {
    list-style: none;
}</style>
