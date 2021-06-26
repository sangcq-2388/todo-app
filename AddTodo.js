import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native'

const AddTodo = props => {
    const { addTodo } = props
    const [text, setText] = useState("")

    const handleAddTodo = () => {
        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
        }
        addTodo(todo)
        setText("")
    }
    return (
        <View>
            <TextInput placeholder="Add Todo" value={text} onChangeText={text => setText(text)}/>
            <TouchableOpacity onPress={handleAddTodo}>
                <Text>Add Todo</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddTodo;