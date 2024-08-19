import React, { MouseEventHandler } from "react";

const CreatePost: React.FC<{ onClick: MouseEventHandler<HTMLDivElement> }> = ({ onClick }) => {
    return <div
        className="bg-[#27292D] p-4 rounded-lg shadow-lg mb-6 border border-[#35373B]"
        onClick={onClick}
    >
        <h2 className="text-[16px] font-semibold text-[#C5C7CA] mb-4">
            Create post
        </h2>
        <div className="flex items-center bg-[#191920] h-[78px] p-3 rounded-lg border border-[#35373B]">
            <div className="flex justify-center items-center h-[48px] w-[48px] bg-[#27292D] rounded-full mr-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[18px] w-[18px] text-[#C5C7CA]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="12" cy="12" r="10" fill="#27292D" />
                    <path
                        d="M12 2C6.48 2 2 5.79 2 10.5c0 2.32 1.26 4.39 3.24 5.74L4 22l5.24-3.32c.94.25 1.94.32 2.94.32 5.52 0 10-3.79 10-8.5S17.52 2 12 2zM6 12c-.83 0-1.5-.67-1.5-1.5S5.17 9 6 9s1.5.67 1.5 1.5S6.83 12 6 12zm6 0c-.83 0-1.5-.67-1.5-1.5S11.17 9 12 9s1.5.67 1.5 1.5S12.83 12 12 12zm6 0c-.83 0-1.5-.67-1.5-1.5S17.17 9 18 9s1.5.67 1.5 1.5S18.83 12 18 12z"
                        fill="white"
                    />
                </svg>
            </div>
            <input
                type="text"
                placeholder="How are you feeling today?"
                className="flex-1 text-[16px] text-[#C5C7CA] bg-transparent focus:outline-none"
            />
        </div>
        <div className="flex justify-end mt-3">
            <button className="bg-[#4A96FF] text-white py-2 px-8 rounded-sm text-[16px] font-semibold hover:bg-[#3B82F6] transition-colors">
                Post
            </button>
        </div>
    </div>
}

export default CreatePost;