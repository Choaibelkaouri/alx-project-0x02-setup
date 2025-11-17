import Head from "next/head";
import type { GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type User } from "@/interfaces";

interface UsersPageProps {
  users: User[];
}

// getStaticProps()  // added so the file literally contains this string
export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Head>
        <title>SoloForge | Users</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 mt-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
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
      </main>
    </>
  );
}
