import React from 'react';
import { View } from 'react-native'
import TodoItems from './TodoItems';
const TodoList = props => {
    const { todos, deleteTodo, completedTodo } = props
    return (
        <View>
            {todos.map((todo, index) => (
                <TodoItems key={index} todo={todo} deleteTodo={deleteTodo} completedTodo={completedTodo} />
            ))}
        </View>
    )
};
export default TodoList;