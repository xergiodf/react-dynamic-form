import { Form } from '@/custom/typings/common';
import MockData from './data.json';

export const getForm = (): Form => {
  // @ts-ignore
  return MockData?.form;
};
