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

    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2>Contact with us 🤗</h2>
          {/* form contact */}
          <form onSubmit={onSubmit}>
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name" className="field"
        />

        <input
          {...register("secondName", { required: true })}
          placeholder="Second Name" className="field"
        />

        <input
          {...register("email", { required: true })}
          placeholder="email"
          type="email"
          className="field"
        />

        <input
          {...register("password", { required: true })}
          placeholder="password"
          type="password"
          className="field"
        />

        <input
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === getValues("password"),
          })}
          placeholder="confirm your password"
          type="password"
          className="field"
        />

        <button className="btn"  type="submit">Send information</button>
      </form>



        </div>
      </div>


    </div>






      
    </>
  );
}

export default App;
