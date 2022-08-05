import React, { useState } from 'react';
import { todoListState } from "./recoil/todo";
import { useSetRecoilState } from "recoil"; 


function TodoItemCreator() {
    let id=0;
    const setTodo =useSetRecoilState(todoListState);
    const [text, setText]=useState("");
    const onChange = e =>{
        setText(e.target.value)
    }
    const addTodo =()=>{
        if(!text){
            alert("정확한 값을 입력해주세요!")
            return
        }
        setTodo((oldTodoList)=>[...oldTodoList,{id:oldTodoList.length+1,text,completed:false}])
        setText("")
    }
    //Create
    const onKeyDown = e =>{
        if(e.key==="Enter"){
            addTodo()
        }
    }
  return (
    <input value={text} onChange={onChange} onKeyDown={onKeyDown} placeholder="할 일을 입력해주세요" autoFocus>
    </input>
  )
}

export default TodoItemCreator