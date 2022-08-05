import { atom, selector } from "recoil";
import { getProductList } from "./service";

export const productListState =selector({
    key:"productList",
    get:async ()=>{
        const {data} = await getProductList();
        return data;
    }
})

export const todoListState =atom({
    key : "todoListState",
    default: [],
});

export const todoListFilterState =atom({
    key: "todoLostFilterState",
    default:"Show All"
})
// 어떤 값을 filter하는지 정하는 state

export const filteredTodoListState=selector({
    key :"filteredTodoListState",
    get :({get})=>{
        const filter =get(todoListFilterState);
        const list =get(todoListState);
        switch(filter){
            case "Show Completed":
                return list.filter((item)=>item.completed);
            case "Show UnCompleted":
                return list.filter((item)=>!item.completed);
            default:
                return list;
        }
    }
})
// 필터 된 todoList를 반환해주는 selector

export const todoListStatsState =selector({
    key:"todoListStatsState",
    get: ({get})=>{
        const todoList =get(filteredTodoListState);
        const totalNum =todoList.length;
        const totalCompletedNum=todoList.filter((item)=>item.completed).length;
        const totalUnCompletedNum=totalNum-totalCompletedNum;
        const percentCompleted=totalNum===0?0:totalCompletedNum/totalNum;
        return {
            totalNum,
            totalCompletedNum,
            totalUnCompletedNum,
            percentCompleted,
        }
    }
})
//todoList의 상태들을 계산해주는 selector









// atom 사용 전에 반드시 먼저 import하기
// atom에 고유한 key를 주고 비어있는 배열의 값을 default로 설정함