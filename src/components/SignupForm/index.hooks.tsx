import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup
    .string()
    .min(3, "Il nome deve avere almeno 3 caratteri.")
    .max(50, "Il nome non può avere più di 50 caratteri.")
    .required("Il nome è obbligatorio."),
  email: yup.string().email().required("L'email è obbligatoria."),
  password: yup
    .string()
    .min(8, "La password deve avere almeno 8 caratteri.")
    .required(),
  privacyAccepted: yup
    .bool()
    .oneOf([true], "Per favore, accetta la privacy.")
    .required(),
  birthDate: yup.date().required(),
});

type SignupFormData = {
  name: string;
  email: string;
  password: string;
  privacyAccepted: boolean;
  birthDate: Date;
};

export const useSignupForm = () => {
  const formData = useForm<SignupFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      privacyAccepted: false,
      birthDate: new Date(),
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitted, errors },
  } = formData;
  const submitDisabled = isSubmitted && !isValid;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        console.log("SUCCESSO!", data);
      }),
    [handleSubmit],
  );

  console.log({ errors });

  return {
    formData,
    triggerSubmit,
    submitDisabled,
  };
};
