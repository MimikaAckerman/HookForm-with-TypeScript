import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

interface FormData {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function App() {
  const { register, handleSubmit, getValues } = useForm<FormData>();

  const onSubmit = handleSubmit((values) => {
    alert("Form submit:" + JSON.stringify(values));
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />

        <input
          {...register("secondName", { required: true })}
          placeholder="Second Name"
        />

        <input
          {...register("email", { required: true })}
          placeholder="email"
          type="email"
        />

        <input
          {...register("password", { required: true })}
          placeholder="password"
          type="password"
        />

        <input
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === getValues("password"),
          })}
          placeholder="confirm your password"
          type="password"
        />

        <button type="submit">Send information</button>
      </form>
    </>
  );
}

export default App;
