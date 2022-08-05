import React from 'react'
import { useRecoilValue } from "recoil";
import { todoListState } from "./recoil/todo";
import TodoItem from "./TodoItem";
import TodoListStats from "./TodoListStats";
import TodoListFilter from "./TodoListFilters";

function TodoList() {
    const todoList =useRecoilValue(todoListState);
    console.log(todoList);
  return (
    <>
    <TodoListStats/>
    <TodoListFilter/>
    {todoList.map(item=>(
        <TodoItem key={item.id} data={item}/>
    ))}
    </>
  )
}

export default TodoList