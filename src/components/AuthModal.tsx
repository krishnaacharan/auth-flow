import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useAuth } from "../context/AuthContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType: "login" | "register";
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialType,
}) => {
  const [type, setType] = useState(initialType);
  const { login, isLoggedIn } = useAuth();

  useEffect(() => {
    setType(initialType);
  }, [initialType]);

  if (!isOpen) return null;

  const handleTypeChange = (newType: "login" | "register") => {
    setType(newType);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative bg-transparent-800 text-white rounded-lg shadow-lg w-[463px]">
        {isLoggedIn ? (
          <button
            onClick={onClose}
            className="absolute top-4 z-100 right-4 p-2 rounded-full bg-[#1C1C1E] hover:bg-[#35373B] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#C5C7CA]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <div className="flex justify-center mb-12">
            <img src="/logoImg.png" alt="Login Icon" className="h-10" />
          </div>
        )}
        {type === "login" ? (
          <LoginForm
            onSuccess={(userName: string) => {
              login(userName);
              onClose();
            }}
            onSwitchToRegister={() => handleTypeChange("register")}
          />
        ) : (
          <RegisterForm
            onSuccess={(userName: string) => {
              login(userName);
              onClose();
            }}
            onSwitchToLogin={() => handleTypeChange("login")}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
