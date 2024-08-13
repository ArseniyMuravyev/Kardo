import { InputHTMLAttributes, useState } from "react";
import { Input } from "../input/Input";
import view from "/icons/view.svg"

interface IPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean
  error?: boolean
}

export const Password: React.FC<IPasswordProps> = ({ disabled, error, ...props }) => {
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false)
  const togglePasswordShow = () => {
    setIsPasswordShow((prev) => !prev)
  }
 
  return (
    <Input
      {...props}
      type={isPasswordShow ? 'text' : 'password'}
      disabled={disabled}
      error={error}
      icon={view}
      onChangeButton={togglePasswordShow}
    />
  );
}
