import { useRef } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

const GoodInput: React.FC<{
  name: string;
}> = (props) => {
  const form = useFormContext();
  const inputValue = useWatch({
    name: props.name,
    control: form.control,
  });
  console.log(inputValue);
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;
  return (
    <label
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <input type='text' {...form.register(props.name)} />
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

export default GoodInput;
