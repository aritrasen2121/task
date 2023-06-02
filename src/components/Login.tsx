import React, { useState } from "react";
import rectangle from "../assets/rectangle.png";
import petals from "../assets/petals.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { useFormik } from "formik";
import { formSchema } from "../schemas/form-validation";


const Login: React.FC = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const onSubmit = (values:Object, actions) => {
    console.log("submitted", values, actions);
    actions.resetForm();
  };
  const {
    values,
    handleBlur,
    isSubmitting,
    handleChange,
    handleSubmit,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit,
  });

  return (
    <div className="px-5 py-6 flex md:flex-row flex-col w-full h-screen">
      <div className="relative w-full md:w-1/2 text-white">
        <img className="h-full w-full" src={rectangle} alt="img" />
        <p className="absolute top-3 left-5 font-light text-3xl">e x o</p>
        <div className="absolute left-5 md:bottom-52 sm:bottom-48 bottom-14">
          <p className="absolut md:text-4xl sm:text-4xl text-2xl font-semibold">
            100% Uptime
          </p>
          <p className="absolut md:mt-2 sm:mt-2 md:text-3xl sm:text-3xl text-xl">
            Zero Infrastructure Management
          </p>
          <div className="flex gap-1">
            <div className="h-1 w-3 bg-white md:mt-6 sm:mt-4 mt-2 rounded-md"></div>
            <div className="h-1 w-1 bg-white md:mt-6 sm:mt-4 mt-2 rounded-md"></div>
            <div className="h-1 w-1 bg-white md:mt-6 sm:mt-4 mt-2 rounded-md"></div>
          </div>
        </div>
        <div className="absolute w-full pr-10 flex justify-between bottom-5 left-5">
          <div>
            <LanguageIcon />
            asthia.com
          </div>
          <div className="flex gap-1">
            <LinkedInIcon />
            <FacebookOutlinedIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center py-10 px-8 sm:px-32 md:px-48 md:w-1/2 ">
        <div className="flex justify-center">
          <img className="h-16 w-20" src={petals} alt="" />
        </div>
        <div className="text-center my-5">
          <div className="flex text-3xl font-semibold justify-center">
            <p>Welcome </p>
            <p className="text-teal-500 ml-1">Back!</p>
          </div>
          <p className="text-sm">Glad To See You Again</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full border-slate-300 p-2 px-4 border-2 rounded-lg outline-none bg-white mb-4"
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && <p>{errors.email}</p>}
          <div className=" border-slate-300 p-2 px-4 border-2 rounded-lg flex">
            <input
              className="w-full outline-none"
              type={visibility ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            <button
              disabled={isSubmitting}
              onClick={() => setVisibility(!visibility)}
            >
              {visibility ? (
                <VisibilityOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </button>
          </div>
          <div className="text-right mt-2 text-sm text-blue-700">
            <a href="">Forgot Password</a>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-lg mt-8 shadow-xl">
            Log In
          </button>
        </form>
        <div className="text-center mt-28 text-sm text-blue-700">
          <a href="">Don't have an account?Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
