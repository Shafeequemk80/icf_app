

import * as Form from "@radix-ui/react-form";


type SubmitButtonProps = {
  label?: string;
  disabled?: boolean;
};

function SubmitButton({ label = "Submit", disabled = false }: SubmitButtonProps) {
  return (
    <Form.Submit asChild>
      <button
        type="submit"
        disabled={disabled}
        className={`w-full py-4 rounded-lg mt-5 text-white text-xl  bg-[#297C8D] font-semibold
                   hover:bg-[#7F8034] transition-colors
                   disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {label}
      </button>
    </Form.Submit>
  );
}

export default SubmitButton; 
