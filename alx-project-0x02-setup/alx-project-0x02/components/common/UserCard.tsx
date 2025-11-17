import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
      <h2 className="text-base font-semibold mb-1">{name}</h2>
      <p className="text-sm text-blue-600 mb-2">{email}</p>
      <p className="text-xs text-gray-600">
        {address.street}, {address.suite}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
