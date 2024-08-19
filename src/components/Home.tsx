import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import AuthModal from "./AuthModal";
import CreatePost from "./UI/CreatePost";
import Post from "./UI/Post";

const Home: React.FC = () => {
  const { username } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div
      className={`min-h-screen bg-[#131319] flex justify-center p-16 text-white relative`}
    >
      <div className="w-full max-w-[700px] relative z-10">
        <h1 className="text-[28px] font-[500] mb-[4px] leading-[33.89px]">
          Hello {username}
        </h1>
        <p className="mb-12 text-[16px] text-[#7F8084]">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>

        {/* Create Post Section */}
        <CreatePost onClick={toggleModal} />
        {/* Posts */}
        <Post onClick={toggleModal} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="absolute inset-0 bg-[#00000088] backdrop-filter backdrop-blur-md"></div>
          <AuthModal
            isOpen={true}
            onClose={toggleModal}
            initialType={"login"}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
