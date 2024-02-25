import React, {Fragment} from 'react';
import { Text, TouchableOpacity, TouchableHighlight ,View , StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    listItem:{
        borderWidth: 1,
        margin: 5,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    bullet:{
        padding: 5,
        fontWeight: 'bold'
    },
    text:{
        flex: 1,
        padding: 5,
        fontWeight: 'bold'
    },
    textdone:{
        color:'#aaa',
        textDecorationLine: "line-through",
        fontWeight:'normal'
    },
    delete: {
        width: 44,
        height: 44,
        alignItems: "center",
        justifyContent: "center"
      },
    deleteText:{
        color: "#ff0000",
        fontSize: 18
    }
})

const TodoList = ({ todos , onUpdate, onDelete}) => {
        return (
            <Fragment>
                {todos.map (todo => 
                    (                   
                        < TouchableOpacity style={styles.listItem} key={todo.text} 
                           onPress={() =>onUpdate({ ...todo, done: !todo.done})}>
                            <Text style={styles.bullet}>-</Text>
                            <Text style={[styles.text, todo.done && styles.textdone]}>
                                {todo.text}
                            </Text>
                            <TouchableOpacity style={styles.delete} onPress={() => onDelete(todo)}>
                                <Text style={styles.deleteText}>X</Text>
                            </TouchableOpacity>
                            
                        </TouchableOpacity>
                ))}
            </Fragment>
        );
    }

export default TodoList;


















