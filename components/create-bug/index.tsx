"use client";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Select, {
  OptionProps,
  SingleValueProps,
  StylesConfig,
  CSSObjectWithLabel,
} from "react-select";

interface OptionType {
  label: string;
  value: string;
  avatar: string;
}

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

const customStyles: StylesConfig<OptionType, false> = {
  option: (
    provided: CSSObjectWithLabel,
    state: OptionProps<OptionType, false>
  ) => ({
    ...provided,
    padding: 10,
    display: "flex",
    alignItems: "center",
  }),
  singleValue: (
    provided: CSSObjectWithLabel,
    state: SingleValueProps<OptionType>
  ) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
  }),
};

const formatOptionLabel = ({ label, avatar }: OptionType) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src={avatar}
      alt={label}
      style={{ marginRight: 10, width: 20, height: 20, borderRadius: "50%" }}
    />
    {label}
  </div>
);

const validationSchema = yup.object({
  assignee: yup.string().required("Required"),
  status: yup.string().required("Required"),
  priority: yup.string().required("Required"),
  classification: yup.string().required("Required"),
  description: yup.string().required("Required"),
});

const CreateBug = () => {
  const formik = useFormik({
    initialValues: {
      assignee: "",
      status: "",
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
            data-theme="cupcake"
          ></input>
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
          <Select
            id="assignee"
            name="assignee"
            options={options}
            styles={customStyles}
            formatOptionLabel={formatOptionLabel}
            menuPlacement="auto"
            onChange={(option) =>
              formik.setFieldValue("assignee", option!.value)
            }
          />
          {formik.touched.assignee && formik.errors.assignee ? (
            <div className="form-error">{formik.errors.assignee}</div>
          ) : null}
        </div>
        <div className="form-control col-span-1">
          <label htmlFor="priority">Priority</label>
          <Select
            id="priority"
            name="priority"
            options={options}
            styles={customStyles}
            formatOptionLabel={formatOptionLabel}
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
          <Select
            id="classification"
            name="classification"
            options={options}
            styles={customStyles}
            formatOptionLabel={formatOptionLabel}
            menuPlacement="auto"
            onChange={(option) =>
              formik.setFieldValue("classification", option!.value)
            }
          />
          {formik.touched.classification && formik.errors.classification ? (
            <div className="form-error">{formik.errors.classification}</div>
          ) : null}
        </div>


        <button type="submit" className="btn w-1/4 col-span-2">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateBug;
