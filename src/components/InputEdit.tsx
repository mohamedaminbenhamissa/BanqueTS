/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  defaultValue?:string;
  register: UseFormRegister<any>;
  rules?: { [key: string]: any };
  errors: FieldErrors<FieldValues>;
}

const Input: React.FC<InputProps> = ({
  name,
  rules,
  placeholder,
  defaultValue,
  type,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <div className="mb-4 ml-4">
      <TextField
        {...props}
        {...register(name, rules)}
        type={type}
        variant="outlined"
        InputProps={{
          style: {
            color: "black",
            textAlign: "center",
            marginBottom: "1/2",
          },
        }}
        placeholder={placeholder}
        defaultValue={defaultValue}
        sx={{
          width: "280px",
          color: "black-900",
          height: "40px",
          marginBottom: "8px",
          borderRadius: "20px",
          backgroundColor: "#F9F9F9",
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "transparent",
            },
        }}
      />
    </div>
  );
};

export default Input;
