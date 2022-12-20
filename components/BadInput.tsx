import React, { useRef } from 'react';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';

const BadInput: React.FC<{
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  name: string;
}> = (props) => {
  props.watch(props.name);
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;
  return (
    <label
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <input type='text' {...props.register(props.name)} />
      <span
        style={{
          minHeight: '10px',
        }}
      >
        render count:{renderCounter.current}
      </span>
    </label>
  );
};

export default BadInput;
