import * as yup from "yup";

export const checkoutSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone is required"),
  address: yup.string().required("Address is required"),
  zipCode: yup.string().required("ZIP Code is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),

  eMoneyNumber: yup.string().when("$paymentMethod", {
    is: "e-money",
    then: (schema) => schema.required("e-Money Number is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  eMoneyPin: yup.string().when("$paymentMethod", {
    is: "e-money",
    then: (schema) => schema.required("e-Money PIN is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
});
