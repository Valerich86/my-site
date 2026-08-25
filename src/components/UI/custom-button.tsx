"use client";

import { PiSpinnerGapThin } from "react-icons/pi";

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  options?: string;
  text: string;
  buttonType?: "button" | "submit" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
}

export default function CustomButton({
  onClick,
  text,
  buttonType = "button",
  isLoading = false,
  disabled = false,
}: Props) {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`${
        !isLoading && !disabled
          ? "active:scale-98 hover:bg-violet-500 bg-accent cursor-pointer animate-glow"
          : "bg-gray-600"} px-5 py-3 rounded-full text-secondary transition duration-200 
          outline-none w-fit border border-violet-400`}
    >
      {!isLoading ? (
        text
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <PiSpinnerGapThin className="text-center animate-spin" size={30} />
        </div>
      )}
    </button>
  );
}
