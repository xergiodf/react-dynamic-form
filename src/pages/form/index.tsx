import { GetStaticProps } from 'next';
import { Button } from '@/ui';
import { Form } from '@/ui/typings/common';
import getForm from '@/services/form';

type FormProps = {
  form: Form;
};

const FormPage = ({ form }: FormProps): JSX.Element => {
  return <Button onClick={() => console.log(form)}>Click me</Button>;
};

export const getStaticProps: GetStaticProps = async () => {
  const form = await getForm();
  if (!form) return { notFound: true };
  return { props: { form } };
};

export default FormPage;
