import { FormResponse } from '@/ui/typings/common';
import MockData from './data.json';

async function getForm(): Promise<FormResponse> {
  // @ts-ignore
  return MockData.form;
}

export default getForm;
