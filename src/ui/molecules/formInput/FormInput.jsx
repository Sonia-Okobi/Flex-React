import React from 'react';
import './index.scss';

export default function FormInput({ label, type, id, placeholder }) {
  return (
    <label>
      <span>{label}</span>

      {type === 'file' ? (
        <div className='file'>
          <div className="file-upload">
            <h4>Choose file</h4>
            <h5>
              Choose <span>file-pdf</span>
            </h5>
          </div>

          <input type="file" className="input-file" />
        </div>
      ) : (
        <input type={type} id={id} placeholder={placeholder} />
      )}
    </label>
  );
}
