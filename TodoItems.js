import React from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native'

const TodoItems = props => {
    const { todo, deleteTodo, completedTodo} = props;
    const { id, text, completed } = todo;
    const handleClickTodo = () => {
        deleteTodo(id);
    }
    const handleCompletedTodo = () => {
        completedTodo(id);
    }
    return (
        <View>
            <Text onPress={handleCompletedTodo} style={{textDecorationLine: completed ? 'line-through' : 'none'}}>{text}</Text>
            <TouchableOpacity onPress={handleClickTodo}>
                <Text>X</Text>
            </TouchableOpacity>
        </View>
    )
};

export default TodoItems;