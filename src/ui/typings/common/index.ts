export enum FormType {
  WorkCompensation,
  CyberInsurance,
  FarmInsurance,
}

export enum SectionType {
  Contact,
  Company,
  Employees,
  Other,
  Payment,
}

export enum QuestionType {
  text,
  textarea,
  checkbox,
  radio,
  email,
  phone,
  number,
}

export type Option = {
  key: string;
  value: string;
  options?: Array<Option>;
};

export type Question = {
  id: number;
  type: QuestionType | string;
  apiName: string;
  label?: string;
  order: number;
  placeholder?: string;
  hint?: string;
  required: boolean;
  repeatable?: boolean;
  options?: Array<Option>;
  depends?: Array<Option>;
};

export type Section = {
  id: number;
  type: SectionType | string;
  order: number;
  title?: string;
  subtitle?: string;
  questions: Array<Question>;
};

export type Form = {
  id: number;
  type: FormType | string;
  sections: Array<Section>;
};

export type FormResponse = {
  form: Form;
};
