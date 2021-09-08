import React, { useEffect, useState } from 'react';
import { Empty, Input, List } from './components';
import './styles/Todo.css';
import { uuid } from './utils';


function Todo() {
  const [itemList, setItemList]= useState<TodoItem[]>([]);
  const [checkedIdList, setCheckedIdList] = useState<string[]>([]);

  function updateItem(content: string) {
    
  }

  function deleteItem() {

  }

  function onCheck(id: string, checked: boolean) {
    
  }

  function onComplete(id: string) {

  }

  return (
    <div className="Todo">
     <div className="title">TODO LIST</div>
     <Input onChange={(value) => console.log(value)} onEnter={(value) => updateItem(value)}/>
     <div className="buttonWrap"><div className="button" onClick={deleteItem}>삭제</div></div>
     {itemList.length === 0 ? <Empty /> : <List items={itemList} checkedIdList={checkedIdList} onCheck={onCheck} onComplete={onComplete} />}
    </div>
  );
}

export default Todo;
