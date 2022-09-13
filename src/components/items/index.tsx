import { Avatar, List, Skeleton, Tabs } from "antd";
import { Link } from "react-router-dom";
import { User } from "../../types/user";

interface Props {
  loading: boolean;
  list: User[];
  topFive: User[];
}

export const Items = (props: Props) => {
  return (
    <Tabs>
      <Tabs.TabPane tab="Top 5 users" key="item-1">
        <List
          itemLayout="horizontal"
          dataSource={props.topFive}
          renderItem={(item) => (
            <List.Item actions={[<a key="list-loadmore-more">more</a>]}>
              <Skeleton avatar title={false} loading={props.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar_url} />}
                  title={<Link to={`${item.login}`}>{item.login}</Link>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="All users" key="item-2">
        <List
          itemLayout="horizontal"
          dataSource={props.list}
          renderItem={(item) => (
            <List.Item actions={[<a key="list-loadmore-more">more</a>]}>
              <Skeleton avatar title={false} loading={props.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar_url} />}
                  title={<Link to={`${item.login}`}>{item.login}</Link>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </Tabs.TabPane>
    </Tabs>
  );
};
