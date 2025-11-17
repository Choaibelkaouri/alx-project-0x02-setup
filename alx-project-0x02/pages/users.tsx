import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { User } from "@interfaces/index";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const data: User[] = await res.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Head>
        <title>SoloForge | Users</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 mt-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        {isLoading && <p>Loading users...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!isLoading && !error && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                email={user.email}
                address={`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
