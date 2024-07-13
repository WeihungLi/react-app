import React, { useState } from 'react'

interface Props{
    todo:{content:string,id:number,isCompleted:boolean,isEdited:boolean};
    editTodo:(newContent:string,id:number)=>void;
}
const Editform:React.FC<Props> = ({todo,editTodo}) => {
    
    const [content,setContent] = useState(todo.content);
    const handleSubmit = (e)=>{
        e.preventDefault();
        editTodo(content,todo.id);
    }
    return (
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="輸入待辦事項" value = {content} onChange={(e)=>{setContent(e.target.value)}}/>
                <button type="submit">完成</button>
            </form>
    );
}

export default Editform
