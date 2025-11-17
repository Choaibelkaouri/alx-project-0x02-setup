import React from "react";
import { UserProps } from "@interfaces/index";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-1">{name}</h2>
      <p className="text-sm text-gray-700 mb-1">{email}</p>
      <p className="text-xs text-gray-500">{address}</p>
    </div>
  );
};

export default UserCard;
