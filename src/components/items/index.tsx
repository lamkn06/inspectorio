import { Avatar, List, Skeleton, Tabs } from "antd";

import { User } from "../../types/user";

interface Props {
  loading: boolean;
  list: User[];
  topFive: User[];

  onViewProfile(name: string): void;
}

export const Items = (props: Props) => {
  const items = [
    {
      label: "Top 5 users",
      key: "item-1",
      children: (
        <List
          itemLayout="horizontal"
          dataSource={props.topFive}
          renderItem={(item) => (
            <List.Item
              actions={[
                <a
                  onClick={() => {
                    props.onViewProfile(item.login);
                  }}
                  key={`a-${item.login}`}
                >
                  View Profile
                </a>,
              ]}
            >
              <Skeleton avatar title={false} loading={props.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar_url} />}
                  title={
                    <a
                      onClick={() => {
                        props.onViewProfile(item.login);
                      }}
                    >
                      {item.login}
                    </a>
                  }
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </Skeleton>
            </List.Item>
          )}
        />
      ),
    },
    {
      label: "All users",
      key: "item-2",
      children: (
        <List
          itemLayout="horizontal"
          dataSource={props.list}
          renderItem={(item) => (
            <List.Item
              actions={[
                <a
                  onClick={() => {
                    props.onViewProfile(item.login);
                  }}
                  key={`a-${item.login}`}
                >
                  View Profile
                </a>,
              ]}
            >
              <Skeleton avatar title={false} loading={props.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar_url} />}
                  title={
                    <a
                      onClick={() => {
                        props.onViewProfile(item.login);
                      }}
                    >
                      {item.login}
                    </a>
                  }
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </Skeleton>
            </List.Item>
          )}
        />
      ),
    },
  ];

  return <Tabs items={items} />;
};
