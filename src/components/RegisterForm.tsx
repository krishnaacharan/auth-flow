import React, { useState } from "react";

interface RegisterFormProps {
  onSuccess: (username: string) => void;
  onSwitchToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  onSuccess,
  onSwitchToLogin,
}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(username);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[463px] h-[506px] p-[2px] bg-gradient-to-br from-[#969696] to-[#343434] rounded-[8px] shadow-lg"
    >
      <div className="w-full h-full bg-[#27292D] rounded-[8px] p-8">
        <h2 className="text-[14px] font-[500] mb-2 text-center tracking-[0.03em] text-[#6B6C70] leading-[16.94px]">
          SIGN UP
        </h2>
        <h3 className="text-[18px] font-[600] mb-12 text-center text-white leading-[21.78px]">
          Create an account to continue
        </h3>
        <div className="mb-2">
          <label className="block text-[14px] text-[#C5C7CA] mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 text-[16px] text-[#ffffff] rounded-md border border-[#35373B] bg-[#27292D] focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-[14px] text-[#C5C7CA] mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Choose a preferred username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 text-[16px] text-[#ffffff] rounded-md border border-[#35373B] bg-[#27292D] focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <label className="text-[14px] text-[#C5C7CA]">Password</label>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle input type
              placeholder="Choose a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 text-[16px] text-[#C5C7CA] rounded-md border border-[#35373B] bg-[#27292D] focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
              onClick={togglePasswordVisibility} // Add onClick event to toggle visibility
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {showPassword ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.174.529-.39 1.043-.648 1.536M15.536 15.536A5.987 5.987 0 0112 17c-3.313 0-6-2.687-6-6 0-.53.053-1.045.158-1.536"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full h-[44px] bg-[#4A96FF] rounded-md text-[16px] font-[500] text-white hover:bg-[#4A96FFbb] transition-colors"
        >
          Continue
        </button>
        <p className="mt-3 text-[14px] font-[500] text-[#7F8084] leading-[16.94px]">
          Already have an account?{" "}
          <span
            className="text-[#C5C7CA] hover:text-[#4A96FF] cursor-pointer"
            onClick={onSwitchToLogin}
          >
            Log in →
          </span>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
