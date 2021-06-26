import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useState } from "react"
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const data = [
  {
    id: 1,
    text: "Learn React",
    completed: false,
  },
  {
    id: 2,
    text: "Learn React Native",
    completed: false,
  },
]

const TodoApp = () => {
  const [todos, setTodos] = useState(data);
  const addTodo = (todo) => {
    const newTodos = todos.concat(todo)
    setTodos(newTodos)
  }
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  const completedTodo = (id) => {
    setTodos( todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
   }
  return (
    <SafeAreaView>
      <View>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} completedTodo={completedTodo} />
      </View>
    </SafeAreaView>
  )
}

export default TodoApp
