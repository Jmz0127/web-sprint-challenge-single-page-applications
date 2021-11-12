import * as yup from 'yup';

//form schema using Yup
const formSchema = yup.object().shape({
  name: yup.string().required('name is required').min(2, 'name must be at least 2 characters'), //SHOULD BE TEXT FIELD, required
  size: yup.string().oneOf(['small', 'medium', 'large'],'size is required'), //SHOULD BE DROPDOWN, required
  topping1: yup.boolean(),//SHOULD BE CHECKBOX, not required
  topping2: yup.boolean(),//SHOULD BE CHECKBOX, not required
  topping3: yup.boolean(),//SHOULD BE CHECKBOX, not required
  topping4: yup.boolean(),//SHOULD BE CHECKBOX, not required
  special: yup.string() //SHOULD BE TEXT FIELD, not required
})

export default formSchema;