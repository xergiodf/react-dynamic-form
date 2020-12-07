import { useState } from 'react';
import { GetStaticProps } from 'next';
import { Box, Padding } from '@/ui';
import { FormResponse } from '@/custom/typings/common';
import { getForm } from '@/custom/services/form';
import Pagination from '@/custom/components/pagination';
import FormStep from '@/custom/components/form-step';

const FormPage = ({ form }: FormResponse): JSX.Element => {
  const [step, setStep] = useState(1);
  const currentSection = form.sections[step - 1];
  return (
    <Padding size={120}>
      <Box border={1} borderTopRadius={10} boxShadow="card">
        {step <= form.sections.length ? (
          <FormStep
            title={currentSection.title}
            subtitle={currentSection.subtitle}
            questions={currentSection.questions}
          />
        ) : (
          'Results'
        )}
      </Box>
      <Box borderLeft={1} borderBottom={1} borderRight={1} borderBottomRadius={10} boxShadow="card">
        <Pagination
          step={step}
          length={form.sections.length}
          onBack={() => setStep((prevStep) => prevStep - 1)}
          onNext={() => setStep((prevStep) => prevStep + 1)}
        />
      </Box>
    </Padding>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const form = getForm();
  if (!form) return { notFound: true };
  return {
    props: {
      form: {
        ...form,
        sections: form.sections
          // sort questions
          .map((section) => ({ ...section, questions: section.questions.sort((a, b) => a.order - b.order) }))
          // sort sections
          .sort((a, b) => a.order - b.order),
      },
    },
  };
};

export default FormPage;
