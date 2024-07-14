import { Input } from "@material-tailwind/react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  defaultValue?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  register,
  required,
  defaultValue
}) => (
  <div className="form-control">
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    <Input
      placeholder={`Enter Product ${label}`}
      type={type}
      {...register}
      className="w-full px-3 py-2 border rounded"
      required={required}
      label={label}
       defaultValue={defaultValue}
    />
  </div>
);
