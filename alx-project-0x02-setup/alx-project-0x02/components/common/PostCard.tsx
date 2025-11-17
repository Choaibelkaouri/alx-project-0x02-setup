import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <article className="bg-white rounded-lg shadow p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base font-semibold text-gray-900">{title}</h2>
        <span className="text-xs text-gray-500">User #{userId}</span>
      </div>
      <p className="text-sm text-gray-700">{content}</p>
    </article>
  );
};

export default PostCard;
