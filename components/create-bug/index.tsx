"use client";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import SelectWithImage, { OptionType } from "../common/SelectWithImage";

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
  assignee: yup.string().required("Required"),
  priority: yup.string().required("Required"),
  bugName: yup.string().required("Required"),
  description: yup.string().required("Required"),
});

const CreateBug = () => {
  const formik = useFormik({
    initialValues: {
      bugName: "",
      assignee: "",
      priority: "",
      classification: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });



  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2 items-center gap-4">
        <div className="form-control col-span-2">
          <label htmlFor="bugName">Bug Name</label>
          <input
            id="bugName"
            name="bugName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bugName}
            data-theme="cupcake"
          ></input>
          {formik.touched.bugName && formik.errors.bugName ? (
            <div className="form-error">{formik.errors.bugName}</div>
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
        <div className="form-control col-span-1">
          <label htmlFor="assignee">Assignee</label>
          <SelectWithImage
            id="assignee"
            name="assignee"
            options={options}
            menuPlacement="auto"
            onChange={(option) => {
              formik.setFieldValue("assignee", option!.value);
              console.log(option?.value);
            }}
          />
          {formik.touched.assignee && formik.errors.assignee ? (
            <div className="form-error">{formik.errors.assignee}</div>
          ) : null}
        </div>
        <div className="form-control col-span-1">
          <label htmlFor="priority">Priority</label>
          <SelectWithImage
            id="priority"
            name="priority"
            options={options}
            menuPlacement="auto"
            onChange={(option) =>
              formik.setFieldValue("priority", option!.value)
            }
          />
          {formik.touched.priority && formik.errors.priority ? (
            <div className="form-error">{formik.errors.priority}</div>
          ) : null}
        </div>
        <div className="form-control col-span-1">
          <label htmlFor="assignee">Classification</label>
          <SelectWithImage
            id="classification"
            name="classification"
            options={options}
            menuPlacement="auto"
            onChange={(option) =>
              formik.setFieldValue("classification", option!.value)
            }
          />
        </div>

        <button type="submit" className="btn w-1/4 col-span-2">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateBug;
