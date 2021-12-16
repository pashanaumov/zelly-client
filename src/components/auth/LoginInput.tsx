import React from 'react';

interface Props {
  input: any;
  placeholder: string;
  label: string;
  type: string;
}

export const LoginInput: React.FC<Props> = ({ input, placeholder, label, type }) => {
  const { value, onChange } = input;
  return (
    <div className="form-input">
      <label htmlFor="formContactName" className="login-label">
        {label}
      </label>
      <input key={label + '_input'} id="formContactName" placeholder={placeholder} className="form-control" type={type} value={value} onChange={onChange} />
    </div>
  );
};
