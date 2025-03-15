import React from 'react';
import { LikeOutlined, StarOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, List, Space } from 'antd';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const SearchList = ({datalist, handleSubmit}) => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 5,
    }}
    dataSource={datalist}
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text={"Popularity : " + (item.popularity ? item.popularity : "N/A")} key="list-vertical-star-o" />,
          <IconText icon={UserOutlined} text={"Adult : " + (item.adult === true ? "Yes" : "No")} key="" />,
          <IconText icon={LikeOutlined} text={"Vote : " + (item.vote_count ? item.vote_count : "N/A")} key="list-vertical-message" />,
        ]}
        extra={
          <Button type="primary" onClick={() => handleSubmit(item)}>Add to List</Button>
        }
      >
        <List.Item.Meta
          avatar={<Avatar style={{width: "100px", height: "auto", borderRadius: "10px"}} src={`https://image.tmdb.org/t/p/w440_and_h660_face/${item.poster_path}`} />}
          title={item.title}
          description={item.overview}
        />
        {item.content}
      </List.Item>
    )}
  />
);
export default SearchList;