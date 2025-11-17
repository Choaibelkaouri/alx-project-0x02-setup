import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { GetServerSideProps } from 'next';
import { UserProps } from '@/interfaces';

interface ApiUser {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
}

interface UsersPageProps {
  users: ApiUser[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Users Page</h1>
        <p className="text-sm text-gray-700 mb-4">
          يتم جلب المستخدمين من JSONPlaceholder API وعرضهم باستخدام مكوّن UserCard.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {users.slice(0, 10).map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<UsersPageProps> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: ApiUser[] = await res.json();

  return {
    props: {
      users
    }
  };
};
