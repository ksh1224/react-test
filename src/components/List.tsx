import React from 'react';
import '../styles/List.css';
import { Item } from './Item';

interface Props {
  items: TodoItem[];
  checkedIdList: string[];
  onCheck?: (id: string, checked: boolean) => void;
  onComplete?: (id: string) => void;
}

export function List({items, onCheck, onComplete, checkedIdList}: Props) {
  
  return (
    <div className="List">
    <div className="container">
     {items.map((item) => <Item key={item.id} {...item} isCheck={checkedIdList.includes(item.id)} onClick={() => onComplete && onComplete(item.id)} onCheck={onCheck} />)}
     </div>
    </div>
  );
}
