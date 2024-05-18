// CustomSelect.tsx
import React from "react";
import Select, {
  OptionProps,
  SingleValueProps,
  StylesConfig,
  CSSObjectWithLabel,
  ActionMeta,
} from "react-select";

export interface OptionType {
  label: string;
  value: string;
  avatar: string;
}

interface CustomSelectProps {
  options: OptionType[];
  menuPlacement?: "auto" | "bottom" | "top";
  className?: string;
  id?: string;
  name?: string;
  value?: any;
  onChange?: (
    selectedOption: OptionType | null,
    actionMeta: ActionMeta<OptionType>
  ) => void;
}

const customStyles: StylesConfig<OptionType, false> = {
  option: (
    provided: CSSObjectWithLabel,
    state: OptionProps<OptionType, false>
  ) => ({
    ...provided,
    padding: 10,
    display: "flex",
    alignItems: "center",
    color: 'black',
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

const SelectWithImage: React.FC<CustomSelectProps> = ({
  options,
  menuPlacement = "auto",
  className,
  id,
  name,
  value,
  onChange,
}) => {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <Select
      id={id}
      name={name}
      menuPlacement={menuPlacement}
      options={options}
      styles={customStyles}
      formatOptionLabel={formatOptionLabel}
      className={className}
      value={selectedOption}
      onChange={onChange}
    />
  );
};

export default SelectWithImage;
