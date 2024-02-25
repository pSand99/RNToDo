import React, {Component} from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet, Button } from "react-native";
import TodoList from "../../components/TodoList";
import {getTodos, addTodo, updateTodo, deleteTodo} from "../../data/todos"; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
       // justifyContent: "center"
       marginTop: 30,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20
    },
    addRow:{
        flexDirection: 'row',
        width:'80%'
    },
    text: {
        flex: 1,
        borderBottomWidth: 1,
        padding: 5
    }

});

class MainScreen extends Component {
    //constructor de state
    constructor(props){
        super(props)
        
        this.state = {
            todos: [],
            newTodo: null
        };
    }

    componentDidMount = () => {
        //esto asigna el estado
        this.setState({ todos: getTodos() });
    }

    handleAdd = () => {
        const { todos, newTodo } = this.state;
        const newList = addTodo (todos, { text: newTodo });
        this.setState({ todos: newList, newTodo: null });
    };

    handleUpdate = todo =>{
        const { todos} = this.state;
        const newList = updateTodo (todos, todo);
        this.setState({ todos: newList});
    };

    //Final del video de touchable no funciona, ver apuntes eva
    // handleDelete = todo =>{
    //     const { todos } = this.state;
    //     const newList = deleteTodo (todos, todo);
    //     this.setState({ todos: newList });
    // };

    render() {
        const { todos, newTodo} = this.state;
        return (
            //SafeAreaView para "evitar" el notch
            <SafeAreaView style={styles.container}>
                <Text selectable style={styles.title}>
                    ToDo List App
                </Text>
                <View style={styles.addRow}>
                <TextInput 
                    placeholder="Nuevo ToDo" 
                    value={newTodo} onChangeText={todo => this.setState ({ newTodo: todo})} 
                    style={styles.text} 
                    autoCapitalize="words"
                    clearButtonMode="always"
                    returnKeyType="done"
                />
                <Button onPress={this.handleAdd} title="Añadir"/>
                </View>
                <TodoList todos={todos} onUpdate={this.handleUpdate} onDelete={this.handleDelete} />
            </SafeAreaView>

        );
    }
}

export default MainScreen;