import React from 'react';
import "./index.scss";

export default function FormTextArea({label, name, id, placeholder}) {
  return (
    <label>
      <span>{label}</span>
     <textarea name={name} id={id} placeholder={placeholder}></textarea>
    </label>
  );
}
