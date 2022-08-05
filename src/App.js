import React from "react";
import TodoList from "./TodoList";
import TodoItemCreator from "./TodoItemCreator";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import Product from "./Product";
import Edit from "./Editor";

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    // recoil 상태를 사용하는 컴포넌트는 부모 트리 어딘가에 나타나는 recoilroot가 필요함
    // 루트 컴포넌트가 recoilRoot를 넣기에 가장 좋은 장소임
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Edit/>
        {/* <Product/>
        <TodoItemCreator/>
        <TodoList/>  */}
      </React.Suspense> 
    </RecoilRoot>
  );
}

export default App;
