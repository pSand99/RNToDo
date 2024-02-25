import React, {Component} from "react";
import {SafeAreaView, Text, TextInput, View, Button, StyleSheet} from "react-native";
import TodoList from "../../components/TodoList";
import {getTodos, addTodo, updateTodo, deleteTodo} from "../../data/todos"; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop:30,
    },
    tittle:{
        fontWeight: 'bold',
        fontSize: 20
    },
    addRow:{
      flexDirection:'row',
      width:'80%'
    },
    text:{
        width: "80%",
        borderBottomWidth: 1,
        padding:5
    }
  });

class MainScreen extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
        todos : [],
        newTodo: null
      };
    };
    
    componentDidMount = () => {
        this.setState ({ todos: getTodos() });
    };

    handleAdd = () => {
      const { todos, newTodo } = this.state;
      const newList = addTodo(todos, { text: newTodo });
      this.setState({ todos: newList, newTodo: null });
    };

    handleUpdate = todo => {
      const { todos } = this.state;
      const newList = updateTodo(todos, todo);
      this.setState({ todos: newList });
    };

    handleDelete = todo => {
      const { todos } = this.state;
      const newList = deleteTodo(todos, todo);
      this.setState({ todos: newList });
    };

    render () {
        const { todos,newTodo }= this.state;
        return (
            <SafeAreaView style={styles.container}>
                <Text  selectable style={styles.tittle}> 
                    ToDo List App
                </Text>
                <View style={styles.addRow}>
                  <TextInput 
                    placeholder="Nuevo TODO" 
                    value={newTodo}
                    onChangeText={ todo => this.setState( {newTodo: todo })}
                    style={styles.text}
                    autoCapitalize="words"
                    clearButtonMode="always"
                    returnKeyType="done"
                    />
                  <Button title="Añadir" onPress={this.handleAdd}/>
                 </View> 
                <TodoList todos={todos} onUpdate={this.handleUpdate} onDelete={this.handleDelete}/>
                
          </SafeAreaView>
        );
    }
}

export default MainScreen;





















