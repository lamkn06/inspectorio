import { Avatar, Col, Drawer, List, Row, Skeleton } from "antd";
import { UserDetail } from "../../types/user";
import "./index.scss";

interface Props {
  open: boolean;
  loading: boolean;
  user: UserDetail | undefined;

  onClose(): void;
}

export const Item = (props: Props) => {
  return (
    <Drawer
      width={340}
      placement="right"
      closable={false}
      onClose={props.onClose}
      open={props.open}
    >
      <p className="site-description-item-profile-p">Personal</p>
      <Row>
        <Col span={24}>
          <Skeleton avatar title={false} loading={props.loading} active>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={props.user?.avatar_url}
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                  />
                }
                title={props.user?.name}
                description={props.user?.location || "?"}
              />
            </List.Item>
          </Skeleton>
        </Col>
      </Row>
    </Drawer>
  );
};
