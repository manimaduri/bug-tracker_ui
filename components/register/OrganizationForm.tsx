"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { organizationRegisterValidationSchema } from "./registerValidationSchema";

export default function OrganizationForm() {
  const router = useRouter();
  
  const { handleSubmit, touched, errors, getFieldProps } = useFormik({
    initialValues: {
        companyName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: organizationRegisterValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      router.push("/dashboard");
    },
  });

  return (
        <form className="w-full" onSubmit={handleSubmit} data-theme="light">
          <div className="flex flex-col gap-3 rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="companyName" className="sr-only">
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                autoComplete="given-name"
                className="w-full px-3 py-2 mb-1 border rounded-md outline-none text-base text-gray-600 placeholder-gray-400"
                placeholder="Company Name"
                {...getFieldProps("companyName")}
              />
              {touched.companyName && errors.companyName && (
                <p className="text-red-500 text-sm">{errors.companyName}</p>
              )}
            </div>
            <div>
              <label htmlFor="mobileNumber" className="sr-only">
                Mobile Number
              </label>
              <input
                id="mobileNumber"
                type="text"
                autoComplete="family-name"
                className="w-full px-3 py-2 mb-1 border rounded-md outline-none text-base text-gray-600 placeholder-gray-400"
                placeholder="Mobile Number"
                {...getFieldProps("mobileNumber")}
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
              Sign up as Organization
            </button>
          </div>
        </form>
        
  );
}
