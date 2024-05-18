"use client";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { OptionType } from "../common/SelectWithImage";
import MultiSelectWithImage from "../common/MultiSelectWithImage";

const options: OptionType[] = [
  {
    value: "svelte",
    label: "Svelte",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
  {
    value: "vue",
    label: "Vue",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
  {
    value: "react",
    label: "React",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
];

const validationSchema = yup.object({
  projectName: yup.string().required("Required"),
  description: yup.string().required("Required"),
  members: yup.array().of(yup.string().required()).required("Required"),
});

const CreateProject = () => {
  const formik = useFormik({
    initialValues: {
      projectName: "",
      members: "",
      description: "",
      deadline:"",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2 items-center gap-4">
        <div className="form-control col-span-2">
          <label htmlFor="projectName">Project Name</label>
          <input
            id="projectName"
            name="projectName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.projectName}
            data-theme="cupcake"
          ></input>
          {formik.touched.projectName && formik.errors.projectName ? (
            <div className="form-error">{formik.errors.projectName}</div>
          ) : null}
        </div>
        <div className="form-control col-span-2">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            data-theme="cupcake"
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="form-error">{formik.errors.description}</div>
          ) : null}
        </div>
        <div className="form-control col-span-2 sm:col-span-1">
          <label htmlFor="members">Members</label>
          <MultiSelectWithImage
            id="members"
            name="members"
            options={options}
            menuPlacement="auto"
            onChange={(selectedOptions) => {
              const values = selectedOptions
                ? selectedOptions.map((option) => option.value)
                : [];
              formik.setFieldValue("members", values);
            }}
          />
          {formik.touched.members && formik.errors.members ? (
            <div className="form-error">{formik.errors.members}</div>
          ) : null}
        </div>

        <div className="form-control col-span-2 sm:col-span-1 sm:w-1/2">
        <label htmlFor="deadline">Deadline</label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          min={today}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.deadline}
          data-theme="cupcake"
        />
        {formik.touched.deadline && formik.errors.deadline ? (
          <div className="form-error">{formik.errors.deadline}</div>
        ) : null}
      </div>

        <button type="submit" className="btn w-1/4 col-span-2">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateProject;
