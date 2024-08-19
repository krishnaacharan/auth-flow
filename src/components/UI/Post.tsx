import React, { MouseEventHandler } from "react";
import { PostData } from "../../data/posts";

const Posts: React.FC<{ onClick: MouseEventHandler<HTMLDivElement> }> = ({ onClick }) => {

	const postContent = (
		<div className="flex items bg-[#191920] p-3 rounded-lg mb-4">
			<div className="flex-shrink-0 flex justify-center items-center h-[48px] w-[48px] bg-[#27292D] rounded-full">
				<span role="img" aria-label="waving hand" className="text-xl">
					👋
				</span>
			</div>
			<p className="text-[16px] text-[#7F8084] ml-3 flex-1">
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
				sint. Velit officia consequat duis enim velit mollit. Exercitation
				veniam consequat sunt nostrud amet.
			</p>
		</div>
	);

	const postFooter = (comments: string) => (
		<button className="flex items-center text-[#C5C7CA] mt-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-[20px] w-[20px] mr-1"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			</svg>
			<span className="text-sm text-[#7F8084]">{comments}</span>
		</button>
	);

	return <>
		{PostData.map((post) => {
			return <div
				className="bg-[#27292D] p-4 pt-6 rounded-lg shadow-lg mb-6 border border-[#35373B]"
				onClick={onClick}
			>
				<div className="flex justify-between items-center mb-4">
					<div className="flex items-center">
						<img
							src={post.profileImage}
							alt="Theresa Webb"
							className="h-[44px] w-[44px] rounded-full object-cover"
						/>
						<div className="ml-4">
							<h2 className="text-[16px] font-semibold text-[#C5C7CA]">
								{post.userName}
							</h2>
							<p className="text-xs text-[#7F8084]">{post.dueTime} ago{post.isEdited ? ' • Edited' : ''}</p>
						</div>
					</div>
					<button className="text-gray-400 hover:text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<circle cx="5" cy="12" r="1" />
							<circle cx="12" cy="12" r="1" />
							<circle cx="19" cy="12" r="1" />
						</svg>
					</button>
				</div>
				{postContent}
				{postFooter(`${post.comments} comments`)}
			</div>
		})}
	</>
}

export default Posts;