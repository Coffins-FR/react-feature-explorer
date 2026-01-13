export type DynamicForm = {
  formId: string;
  title: string;
  description: string;
  submit: DynamicFormSubmit;
};

export type DynamicFormValidation = {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  message?: string;
  rules?: DynamicFormValidation[];
};

export type DynamicFormField = {
  id: string;
  label: string;
  type: DynamicFormFieldType;
  placeholder?: string;
  required: boolean;
  options?: string[];
  validation?: DynamicFormValidation;
  dependsOn?: {
    fieldId: string;
    value: string | number | boolean;
  };
};

export type DynamicFormSubmit = {
  label: string;
  endpoint: string;
  method: DynamicFormMethod;
};

export enum DynamicFormFieldType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
  NUMBER = "number",
  SELECT = "select",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  TEXTAREA = "textarea",
  DATE = "date",
  TEL = "tel",
  URL = "url",
  FILE = "file",
  CHECKBOX_GROUP = "checkbox-group",
  RADIO_GROUP = "radio-group",
}

export enum DynamicFormMethod {
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
}
