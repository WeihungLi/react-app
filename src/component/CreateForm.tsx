import React, { useState } from "react";
interface Props{
    addTodo: (content:string)=> void;
}



const CreateForm:React.FC<Props> = ({addTodo}) => {
    const [content,setContent] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault()
        addTodo(content)
        setContent("")
    }
    const clickEvent = ()=>{
        alert("加入成功")
    }
    return (
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="輸入待辦事項" value = {content} onChange={(e)=>{setContent(e.target.value)}}/>
            <button type="submit" onClick = {clickEvent}>加入</button>
            </form>
    );
};

export default CreateForm;
