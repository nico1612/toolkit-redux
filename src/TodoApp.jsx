import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp =()=>{

    const [ todoId, setTodoId] = useState(1);
    //const {data:todos=[],isLoading} =useGetTodosQuery()
    const { data: todo, isLoading } = useGetTodoQuery( todoId );
    
    const nextTodo=()=>{
        setTodoId(todoId+1)
    }

    const prevTodo=()=>{
        if(todoId===1){
            return 
        }
        setTodoId(todoId-1)
    }
    return(
        <>
            <h1>Todos - RTK Querys</h1>
            <hr/>

            <h4>IsLoading:{(isLoading)?'true':'false'}</h4>
            
            <pre>{ JSON.stringify( todo ) }</pre>

            <button onClick={prevTodo}>
                prev todo
            </button>

            <button onClick={nextTodo}>
                next Todo
            </button>

            {/*<ul> {todos.map(todo=>(
                <li key={todo.id}>
                    <strong>{todo.completed?'Done: ':'Pending: '}</strong>
                    {todo.title}</li>
            ))} </ul>*/}

        </>
    )
}