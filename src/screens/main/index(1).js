import React, {Component} from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
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
    }
});

class MainScreen extends Component {
    //constructor de state
    constructor(props){
        super(props)
        
        this.state = {
            todos: []
        };
    }

    componentDidMount = () => {
        //esto asigna el estado
        this.setState({todos:getTodos()});
    }

    render() {
        //const {todos} = this.state;
        return (
            //SafeAreaView para "evitar" el notch
            <SafeAreaView style={styles.container}>
                <Text selectable style={styles.title}>ToDo List App</Text>
                <TodoList todos={this.state.todos}/>
            </SafeAreaView>
        );
    }
}

export default MainScreen;