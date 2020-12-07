import React from 'react';
import { Padding, Text, Title } from '@/ui';
import { Question } from '../typings/common';
import FormQuestion from './form-question';

const FormStep = ({ title, subtitle, questions }) => (
  <Padding size={24}>
    <Title size={24} as="h1">
      <Padding bottom={24}>{title}</Padding>
    </Title>
    {subtitle && (
      <Text>
        <Padding bottom={20}>{subtitle}</Padding>
      </Text>
    )}
    {React.Children.toArray(questions.map((question: Question) => <FormQuestion question={question} />))}
  </Padding>
);

export default FormStep;
