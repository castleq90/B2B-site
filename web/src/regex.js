export const REGEXP = {
  emailRegExp:
  /[a-zA-Z0-9.-_+!]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}(?:.[a-zA-Z0-9]{2,3})?/,
  passwordRegExp:/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,100}$/,
};

export const validate = (value, regExp) => {
  const reg = new RegExp(regExp);
  return reg.test(value);
};