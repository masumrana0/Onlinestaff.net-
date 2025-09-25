import { Eye, EyeClosed } from "lucide-react";

interface PasswordToggleProps {
  showPassword: boolean;
  togglePassword: () => void;
}

const PasswordToggle = ({
  showPassword,
  togglePassword,
}: PasswordToggleProps) => {
  return (
    <button
      type="button"
      onClick={togglePassword}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
    >
      {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
    </button>
  );
};

export default PasswordToggle;
