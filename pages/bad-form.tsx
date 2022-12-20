import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import BadInput from '../components/BadInput';

export default function BadForm() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      info: [...Array(1000)].map(() => ({
        first_name: '',
        last_name: '',
      })),
    },
  });
  const onSubmit = (data: any) => console.log(data);
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <span>parent rerender: {renderCounter.current}</span>
      {[...Array(1000)].map((e, i) => {
        return (
          <div
            key={i}
            style={{
              display: 'flex',
            }}
          >
            <BadInput
              name={`info.${i}.first_name`}
              register={register}
              watch={watch}
            />
            <BadInput
              name={`info.${i}.last_name`}
              register={register}
              watch={watch}
            />
          </div>
        );
      })}
      <input className='block' type='submit' />
    </form>
  );
}
