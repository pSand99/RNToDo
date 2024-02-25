import React, {Component} from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet } from "react-native";
import TodoList from "../../components/TodoList";
import {getTodos} from "../../data/todos"; 

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
        width: "80%",
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

    render() {
        const { todos, newTodo} = this.state;
        return (
            //SafeAreaView para "evitar" el notch
            <SafeAreaView style={styles.container}>
                <Text selectable style={styles.title}>
                    ToDo List App
                </Text>
                <TextInput 
                    placeholder="Nuevo ToDo" 
                    value={newTodo} onChangeText={todo => this.setState ({ newTodo: todo})} 
                    style={styles.text} 
                    autoCapitalize="words"
                    clearButtonMode="always"
                    returnKeyType="done"
                />
                <TodoList todos={todos}/>
            </SafeAreaView>
        );
    }
}

export default MainScreen;