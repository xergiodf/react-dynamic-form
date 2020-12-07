import React from 'react';
import { CheckboxRow, Padding, Field, Input, RadioButtonGroup } from '@/ui';
import { Question } from '../typings/common';

type FormQuestionProp = {
  question: Question;
};

const FormQuestions = ({ question }: FormQuestionProp): JSX.Element => (
  <Padding key={question.id} bottom={20}>
    {['text', 'number'].includes(question.type as string) && (
      <Field fieldId={String(`field-${question.id}`)} label={question.label}>
        <Input fieldId={String(`input-${question.id}`)} type={['text', 'number'][question.type]} />
      </Field>
    )}
    {question.type === 'checkbox' &&
      React.Children.toArray(
        question.options.map((opt) => (
          <CheckboxRow label={opt.value} onClick={() => console.log(`Checkbox ${opt.key} clicked`)} />
        )),
      )}
    {question.type === 'radio' && (
      <RadioButtonGroup
        name={question.apiName}
        options={question.options.map((opt) => ({ label: opt.value, value: opt.key }))}
      />
    )}
  </Padding>
);

export default FormQuestions;
