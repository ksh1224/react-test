import React, { useEffect, useState } from 'react';
import '../styles/Item.css';


interface Props extends TodoItem {
  onCheck?: (id: string, checked: boolean) => void
  onClick?: () => void;
  isCheck?: boolean;
}


export function Item({id, content, isComplete, onCheck, onClick, isCheck}: Props) {

  return (
    <div className="Item" onClick={onClick}>
      <div className={`contents ${isComplete ? 'complete' : ''}`}>
        {content}
      </div>
        <input id="keep_login_checkbox" type="checkbox" name="chk_info" defaultChecked={isCheck} />
    </div>
  );
}
