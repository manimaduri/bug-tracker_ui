// MultiSelectWithImage.tsx
import React from "react";
import Select, {
  OptionProps,
  MultiValueProps,
  StylesConfig,
  CSSObjectWithLabel,
  ActionMeta,
  MultiValue,
} from "react-select";

export interface OptionType {
  label: string;
  value: string;
  avatar: string;
}

interface MultiSelectProps {
  options: OptionType[];
  menuPlacement?: "auto" | "bottom" | "top";
  className?: string;
  id?: string;
  name?: string;
  value?: MultiValue<OptionType>; // Use MultiValue for value
  onChange?: (
    selectedOptions: MultiValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => void;
}

const customStyles: StylesConfig<OptionType, true> = {
  option: (
    provided: CSSObjectWithLabel,
    state: OptionProps<OptionType, true>
  ) => ({
    ...provided,
    padding: 10,
    display: "flex",
    alignItems: "center",
    color: 'black',
  }),
  multiValue: (
    provided: CSSObjectWithLabel,
    state: MultiValueProps<OptionType, true>
  ) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
  }),
  multiValueLabel: (
    provided: CSSObjectWithLabel,
    state: MultiValueProps<OptionType, true>
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

const MultiSelectWithImage: React.FC<MultiSelectProps> = ({
  options,
  menuPlacement = "auto",
  className,
  id,
  name,
  value,
  onChange,
}) => {
  return (
    <Select
      id={id}
      name={name}
      menuPlacement={menuPlacement}
      options={options}
      styles={customStyles}
      formatOptionLabel={formatOptionLabel}
      className={className}
      value={value}
      onChange={onChange}
      isMulti={true} // Enable multi-select
    />
  );
};

export default MultiSelectWithImage;
