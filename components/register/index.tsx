"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import registerValidationSchema from "./registerValidationSchema";
import { AiOutlineLock } from "react-icons/ai";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const today = new Date();
  const eighteenYearsAgo = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .split("T")[0];
  const { handleSubmit, touched, errors, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      router.push("/dashboard");
    },
  });

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex flex-col items-center w-3/4 lg:w-1/2 p-8 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gray-500 rounded-full">
          <AiOutlineLock className="w-8 h-8 text-white" />
        </div>
        <h2 className="mb-2 text-lg font-bold text-gray-700">Sign up</h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                autoComplete="given-name"
                className="w-full px-3 py-2 mb-1 border rounded-md outline-none text-base text-gray-600 placeholder-gray-400"
                placeholder="First Name"
                {...getFieldProps("firstName")}
              />
              {touched.firstName && errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                autoComplete="family-name"
                className="w-full px-3 py-2 mb-1 border rounded-md outline-none text-base text-gray-600 placeholder-gray-400"
                placeholder="Last Name"
                {...getFieldProps("lastName")}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="w-full px-3 py-2 mb-1 border rounded-md outline-none text-base text-gray-600 placeholder-gray-400"
                placeholder="Email address"
                {...getFieldProps("email")}
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="dateOfBirth" className="sr-only">
                Date of Birth
              </label>
              <input
                id="dateOfBirth"
                type="date"
                className="w-full px-3 py-2 mb-1 border rounded-md outline-none text-base text-gray-600 placeholder-gray-400"
                placeholder="Date of Birth"
                max={eighteenYearsAgo}
                {...getFieldProps("dateOfBirth")}
              />
              {touched.dateOfBirth && errors.dateOfBirth && (
                <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className="w-full px-3 py-2 mb-1 border rounded-md outline-none text-base text-gray-600 placeholder-gray-400"
                placeholder="Password"
                {...getFieldProps("password")}
              />
              {touched.password && errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                autoComplete="current-password"
                className="w-full px-3 py-2 mb-1 border rounded-md outline-none text-base text-gray-600 placeholder-gray-400"
                placeholder="Confirm Password"
                {...getFieldProps("confirmPassword")}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 mt-4 text-sm font-semibold text-white bg-gray-800 rounded-lg"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm">
          <Link href="/" className="text-blue-500 hover:text-blue-600">
            Already have an account? Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
