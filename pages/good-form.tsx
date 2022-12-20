import { useRef } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import GoodInput from '../components/GoodInput';

export default function GoodForm() {
  const form = useForm({
    defaultValues: {
      info: [...Array(2000)].map(() => ({
        first_name: '',
        last_name: '',
      })),
    },
  });
  const onSubmit = (data: any) => console.log(data);

  const { fields } = useFieldArray({
    name: 'info',
    control: form.control,
  });

  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;

  return (
    <FormProvider {...form}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <span>parent rerender count: {renderCounter.current}</span>
        {fields.map((e, i) => {
          return (
            <div
              style={{
                display: 'flex',
              }}
              key={e.id}
            >
              <GoodInput name={`info.${i}.first_name`} />
              <GoodInput name={`info.${i}.last_name`} />
            </div>
          );
        })}
        <input className='block' type='submit' />
      </form>
    </FormProvider>
  );
}
