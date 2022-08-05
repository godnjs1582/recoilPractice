import React, { useState } from 'react'
import { useRecoilState } from "recoil";
import { todoListFilterState } from "./recoil/todo";

function TodoListFilters() {
    const [filter,setFilter] =useRecoilState(todoListFilterState);
    const updateFilter=({target:{value}})=>{
        setFilter(value);
    }
  return (
    <>
        <select value={filter} onChange={updateFilter}>
            <option value="Show All">All</option>
            <option value="Show Completed">Completed</option>
            <option value="Show Uncompleted">UpCompleted</option>
        </select>
    </>
  )
}

export default TodoListFilters