import React from 'react'
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import Editform from './Editform';
interface Props{
    todo:{content:string,id:number,isCompleted:boolean,isEdited:boolean};
    deleteTodo: (id:number)=>void;
    toggleCompleted: (id:number)=>void;
    toggleEdited:(id:number)=>void;
    editTodo:(newContent:string,id:number)=>void;
}
const ToDoComponent:React.FC<Props> = ({todo,deleteTodo,toggleCompleted,toggleEdited,editTodo}) => {
    
  return (
    todo.isEdited ?( <Editform todo={todo} editTodo={editTodo}/>):(
        <div className= {`component ${todo.isCompleted?"completed":""}`}>
            <h3 className= "content" onClick= {()=>{toggleCompleted(todo.id)}}>{todo.content}</h3>
            <div>
                <MdEdit onClick= {()=>{toggleEdited(todo.id)}} style = {{cursor:"pointer"}}/>
                <MdDeleteOutline style = {{cursor:"pointer",marginLeft: "5px"}} onClick = {()=>{deleteTodo(todo.id)}}/>
            </div>
        </div>
    )
  )
}

export default ToDoComponent
