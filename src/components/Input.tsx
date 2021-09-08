import React, { useState } from 'react';
import '../styles/Input.css';

interface Props {
  initText?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onEnter?: (value: string) => void;
}

export function Input({initText, placeholder, onChange, onEnter}:Props) {
  const [text, setText]= useState(initText);

  function enterHandler() {
    setText('')
    onEnter && text && onEnter(text)
  }

  return (
    <input placeholder={placeholder} className="Input" 
    type="text" 
    value={text} 
    onChange={({target: {value}}) => setText(value)}
    onKeyPress={({nativeEvent: {key}})=> key === 'Enter' && enterHandler() } />
  );
}
