import React from "react";
import Select from "react-select";

const customStyles = {
    control: (base, state) => ({
        ...base,
        width: "100%",
        minHeight: "48px",
        padding: "0 7px",
        paddingRight: "0px",
        borderRadius: "5px",
        border: "1px solid #DCDCE1",
        background: "rgba(var(--White), 1)",
        boxShadow: "2px 2px 4px 0px rgba(220, 220, 225, 0.42)",
        fontSize: "14px",
        fontWeight: "400",
        color: "rgba(var(--Eerie-Black), 1)",
        // Focus styles
        borderColor: state.isFocused ? "rgba(var(--Persian-Blue), 1)" : "#DCDCE1",
        "&:hover": {
            borderColor: "rgba(var(--Persian-Blue), 1)",
        },
    }),
    option: (base, state) => ({
        ...base,
        fontSize: "14px",
        padding: "10px 15px",
        cursor: "pointer",
        fontWeight: 400,
        backgroundColor: state.isSelected
            ? "rgba(var(--Persian-Blue), 0.8)"
            : state.isFocused
                ? "rgba(var(--Persian-Blue), 0.2)"
                : "rgba(var(--White), 1)",
        color: state.isSelected
            ? "rgba(var(--White), 1)"
            : "rgba(var(--Eerie-Black), 1)",
        "&:active": {
            backgroundColor: "rgba(var(--Persian-Blue), 1)",
            color: "rgba(var(--White), 1)",
        },
    }),
    placeholder: (base) => ({
        ...base,
        color: "rgba(var(--Blue-Gray), 1)",
        fontSize: "14px",
    }),
    singleValue: (base) => ({
        ...base,
        color: "rgba(var(--Eerie-Black), 1)",
        fontSize: "14px",
    }),
    multiValue: (base) => ({
        ...base,
        backgroundColor: "rgba(220, 220, 225, 0.42)",
        borderRadius: "3px",
    }),
    multiValueLabel: (base) => ({
        ...base,
        color: "rgba(var(--Eerie-Black), 1)",
        fontSize: "14px",
    }),
    multiValueRemove: (base) => ({
        ...base,
        color: "#555",
        ":hover": {
            backgroundColor: "rgba(var(--Persian-Blue), 0.1)",
            color: "rgba(var(--Persian-Blue), 1)",
        },
    }),
};

function ClientReactSelect({ options, isMulti, isClearable, placeholder, onChange, value, id, required }) {
  return (
    <Select
      id={id}
      options={options}
      isMulti={isMulti}
      styles={customStyles}
      placeholder={placeholder}
      isClearable={isClearable}
      onChange={onChange}
      value={value}
      required={required}
    />
  );
}

export default ClientReactSelect;
