import { useCallback, useEffect, useState } from "react";
import { getDetail, getList } from "../../api/user";
import { Item } from "../../components/item";
import { Items } from "../../components/items";
import { PageWrapper } from "../../components/PageWrapper/intex";
import { User, UserDetail } from "../../types/user";

const ListPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<UserDetail | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDetail, setLoadingDetail] = useState<boolean>(false);
  const [drawserOpen, setDrawserOpen] = useState(false);

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

  const fetchUser = useCallback(async (name: string) => {
    setLoadingDetail(true);
    try {
      const { data } = await getDetail(name);
      setUser(data);
    } catch (error) {
      return error;
    } finally {
      setLoadingDetail(false);
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

  const handleViewProfile = (name: string) => {
    setDrawserOpen(true);
    fetchUser(name);
  };

  return (
    <>
      <PageWrapper
        renderContent={() => (
          <Items
            list={users}
            loading={loading}
            topFive={topFive}
            onViewProfile={handleViewProfile}
          />
        )}
      />
      <Item
        open={drawserOpen}
        loading={loadingDetail}
        onClose={() => setDrawserOpen(false)}
        user={user}
      />
    </>
  );
};

export default ListPage;
