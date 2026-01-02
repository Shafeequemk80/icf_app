import * as Form from "@radix-ui/react-form";

type Props = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  rightSlot?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FormInput({name,label,type = "text",placeholder,error,rightSlot,onChange,}: Props) {
  return (
    <Form.Field name={name} className="space-y-2 mb-5">
      <Form.Label className="block text-sm font-medium text-gray-700">
        {label}
      </Form.Label>

      <div className="relative">
        <Form.Control asChild>
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className={`w-full px-4 py-2 border rounded-lg
              focus:outline-none focus:ring-2
              ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
          />
        </Form.Control>

        {rightSlot && (
          <div className="absolute  right-3 top-1/2 -translate-y-1/2">
            {rightSlot}
          </div>
        )}
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </Form.Field>
  );
}
