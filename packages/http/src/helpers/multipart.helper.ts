const createFormDataImpl = (object: object, form: FormData, namespace?: string): FormData => {
  for (const key in object) {
    if (!object.hasOwnProperty(key) || object[key] === undefined) {
      continue;
    }
    const value = object[key];
    const formKey = namespace ? `${namespace}[${key}]` : key;
    if (Array.isArray(value)) {
      value.forEach((element, index) => {
        const arrayKey = `${formKey}[${index}]`;
        if (typeof element === 'object') {
          createFormDataImpl(element, form, arrayKey);
        } else {
          form.append(arrayKey, element);
        }
      });
    } else if (value instanceof Date) {
      form.append(formKey, value.toISOString());
    } else if (typeof value === 'object' && !(value instanceof File)) {
      createFormDataImpl(value, form, formKey);
    } else {
      form.append(formKey, value);
    }
  }
  return form;
};

export const createFormData = (body: object) => isFormData(body) ? body : createFormDataImpl(body, new FormData());

export const isFormData = (object: any): object is FormData => object instanceof FormData;

export const processMultipartBody = (body: string, boundary: string) => {
  body.split(boundary);
  throw new Error('Multipart response parsing is not implemented yet.');
};

export const getBoundaryFromContentTypeHeader = (header: string[]) => {
  const boundary = header.find(element => element.startsWith('boundary='))?.replace('boundary=', '');
  if (!boundary) {
    throw new Error('Could not find multipart boundary in Content-Type header.');
  }
  return boundary;
};
