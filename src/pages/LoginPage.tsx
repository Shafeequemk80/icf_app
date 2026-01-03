
import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormInput } from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";
import PasswordEye from "../components/PasswordEye";


import { loginSchema, type LoginFormData } from "../utilities/validation";
import { loginUser } from "../thunks/authThunk";
import type {AppDispatch, RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

function LoginPage() {      
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const {loading ,error} = useSelector((state:RootState)=>state.auth)
  
  const [formErrors, setFormErrors] = useState<Partial<LoginFormData>>({});
  const [showPassword, setShowPassword] = useState(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormErrors({});
    const formData = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as LoginFormData;

    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setFormErrors({
        username: fieldErrors.username?.[0],
        password: fieldErrors.password?.[0],
      });
      return;
    }

    // --- Server request ---
    try {
const result = await dispatch(loginUser(formData)).unwrap();

    // success
    console.log("Login success:", result);

    navigate("/homepage", { replace: true });

    } catch {
       console.error("Login error:", error);
    }
  }

  return (
    <div className=" flex justify-start ">
      <Form.Root onSubmit={handleSubmit} className="w-full max-w-md">
        <FormInput
          name="username"
          label="username"
          placeholder="Enter username"
          error={formErrors.username}
        />

        <FormInput
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          error={formErrors.password}
          rightSlot={<PasswordEye showPassword={showPassword} setShowPassword={setShowPassword} />}
        />

        {/* Server error */}
        {error && (
          <p className="text-sm text-red-600 mb-3">{error}</p>
        )}

        <SubmitButton label={loading ? "Logging in..." : "Login"} />
      </Form.Root>
    </div>
  );
}

export default LoginPage;
