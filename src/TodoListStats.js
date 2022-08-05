import React from 'react';
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "./recoil/todo"; 

function TodoListStats() {
    const {totalNum,totalCompletedNum,totalUnCompletedNum,percentCompleted}=useRecoilValue(todoListStatsState);
    let formattedPercentCompleted =Math.round(percentCompleted*100);
  return (
    <>
        <p>전체 개수:{totalNum}</p>
        <p>전체 완료된 개수:{totalCompletedNum}</p>
        <p>제외된 개수:{totalUnCompletedNum}</p>
        <p>퍼센트를 포한한 개수:{formattedPercentCompleted}</p>
    </>
  )
}

export default TodoListStats