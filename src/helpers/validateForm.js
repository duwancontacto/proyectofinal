export const validateAllComplete = (form) => {
  let findEmptyField = Object.keys(form).find(
    (field) => form[field].trim() === ""
  );

  return findEmptyField;
};
