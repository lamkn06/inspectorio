import { useCallback, useEffect, useState } from "react";
import { getList } from "../../api/user";
import { Items } from "../../components/items";
import { PageWrapper } from "../../components/PageWrapper/intex";
import { User } from "../../types/user";

const ListPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await getList();
      setUsers(data);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  }, []);

  const topFive: User[] = [
    {
      login: "GrahamCampbell",
      avatar_url: "https://avatars.githubusercontent.com/u/2829600?v=4",
    },
    {
      login: "fabpot",
      avatar_url: "https://avatars.githubusercontent.com/u/47313?v=4",
    },
    {
      login: "weierophinney",
      avatar_url: "https://avatars.githubusercontent.com/u/25943?v=4",
    },
    {
      login: "rkh",
      avatar_url: "https://avatars.githubusercontent.com/u/30442?v=4",
    },
    {
      login: "josh",
      avatar_url: "https://avatars.githubusercontent.com/u/137?v=4",
    },
  ];

  return (
    <PageWrapper
      renderContent={() => (
        <Items list={users} loading={loading} topFive={topFive} />
      )}
    />
  );
};

export default ListPage;
