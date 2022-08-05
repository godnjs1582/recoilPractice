import React from 'react';
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./recoil/todo";

function TodoItem({data}) {
    const setTodo =useSetRecoilState(todoListState)
    console.log(data)
    const toggleTodo =()=>{
        setTodo(todos => 
            todos.map(todo=>
                todo.id===data.id? { ...data,completed:!data.completed}:todo
            )
        )
    }
    //Update
    const removeTodo =()=>{
        setTodo(todos=>todos.filter(item=>item.id!==data.id))
    }
    //delete
  return (
    <>  
                <Text>{data.id}</Text>   
                <Text>{data.text}</Text>
                {data.completed?<Text>완료</Text>:<Text>미완성</Text>}
                <button onClick={removeTodo}>삭제</button>
                <button onClick={toggleTodo}>완료</button>
    </>
    
  )
}

const Text=styled.p`
    fontsize:14px;
    fontweight:600;

`



export default TodoItem