import { Button } from "@material-tailwind/react";

interface CustomButtonProps {
  text: string;
  bgColor?: string;
  textColor: string;
}

const CustomButton2 = ({ text , bgColor, textColor }: CustomButtonProps) => {
  return (
    <Button
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      placeholder=""
      variant={!bgColor ? "outlined" : undefined}
      style={bgColor
        ? { backgroundColor: bgColor, color: textColor }
        : { color: textColor }}
      className="font-normal text-lg py-2 px-4 rounded-lg normal-case" >
      {text}
    </Button>
  );
};

export default CustomButton2;