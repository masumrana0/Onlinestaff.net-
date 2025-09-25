import { SpinnerIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";

interface PrimaryButtonProps {
  type?: "button" | "submit" | "reset"; // Default to "button" if not specified
  className?: string;
  onClick?: () => void;
  text: string;
  isLoading?: boolean;
}

const PrimaryButton = ({
  type = "button",
  className = "",
  onClick,
  text,
  isLoading,
}: PrimaryButtonProps) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={`w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200 ${className}`}
    >
      {isLoading? <SpinnerIcon size={50}/>: text}
    </Button>
  );
};

export default PrimaryButton;
