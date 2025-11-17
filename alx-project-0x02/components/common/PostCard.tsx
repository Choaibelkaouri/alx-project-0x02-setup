import React from "react";
import { PostProps } from "@interfaces/index";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <article className="bg-white rounded-lg shadow p-4">
      <p className="text-xs text-gray-500 mb-1">User ID: {userId}</p>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-700">{content}</p>
    </article>
  );
};

export default PostCard;
