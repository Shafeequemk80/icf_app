
import { Button as RadixButton } from "@radix-ui/themes";
import { Bookmark } from "lucide-react";

type ButtonProps = {
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
};

function Button({ label = "Bookmark", disabled = false, onClick }: ButtonProps) {
  return (
    <RadixButton
      disabled={disabled}
      variant="solid"
      size="3"
      onClick={onClick}
    >
      <Bookmark size={16} />
      {label}
    </RadixButton>
  );
}

export default Button;
