import React, { useState } from 'react'
import CreateForm from './CreateForm.tsx'
import ToDoComponent from './ToDoComponent.tsx'


const TodoWrapper = () => {
    const [todos,setTodos] = useState([{"content":"寫程式","id":Math.random(),"isCompleted":false,"isEdited":false}]);
    const addTodo = (content:string)=>{
        setTodos([...todos,{content:content, id:Math.random(),isCompleted:false,"isEdited":false}])
    }

    const editTodo = (newContent:string,id:number)=>{
        setTodos(todos.map((todo)=>{
            return todo.id===id ?{...todo,content: newContent,isEdited: false} :todo
        }))
    }
    const deleteTodo = (id:number)=>{
        setTodos(todos.filter((todo)=>{
            return todo.id!==id
        }))
    }
    const toggleCompleted = (id:number)=>{
        setTodos(todos.map((todo)=>{
            return todo.id===id ?{...todo,isCompleted: !todo.isCompleted} :todo
        }))
    }
    const toggleEdited = (id:number)=>{
        setTodos(todos.map((todo)=>{
            return todo.id===id ?{...todo,isEdited: !todo.isEdited} :todo
        }))
    }
    // const editTodo = (id:number)=>{
    //     setTodos(todos.filter((todo)=>{
    //         return todo.id!==id
    //     }))
    // }
  return (
    <div className="wrapper">
        <h1>待辦事項</h1>
        <CreateForm addTodo = {addTodo}/>
        {
            todos.map((todo)=>{
                return <ToDoComponent todo = {todo} key = {todo.id} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} toggleEdited={toggleEdited} editTodo={editTodo}/>
            })
        }
    </div>
  )
}

export default TodoWrapper
