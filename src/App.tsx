import React, { useState } from "react";
import AuthModal from "./components/AuthModal";
import Home from "./components/Home";
import { AuthProvider, useAuth } from "./context/AuthContext";

const App: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const [modalType, setModalType] = useState<"login" | "register" | null>(
    "login"
  );

  const handleLogin = () => {
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-[#131319] flex justify-center items-center">
      {!isLoggedIn ? null : <Home />}
      {modalType && (
        <AuthModal
          isOpen={modalType !== null}
          onClose={handleLogin}
          initialType={modalType}
        />
      )}
    </div>
  );
};

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
