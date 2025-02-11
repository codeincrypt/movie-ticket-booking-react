import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Card,
  Col,
  Empty,
  Pagination,
  Popconfirm,
  Row,
  Table,
  Tag,
} from "antd";

import { getUsersList } from "../../../services/userService";
import { Link } from "react-router-dom";

const CustomerList = () => {
  const [datalist, setDatalist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(1);
  const [totalData, setTotalData] = useState(0);

  const breadcrumbItems = [
    { title: <Link to="/dashboard">Dashboard</Link> },
    { title: "Customers" },
  ];

  const fetchUsersList = async (page, limit) => {
    const response = await getUsersList(page, limit);
    if (response.statusCode === 1) {
      setDatalist(response.data);
      setCurrentPage(response.page);
      setLimit(response.pageSize);
      setTotalData(response.total);
    }
  };

  useEffect(() => {
    fetchUsersList(currentPage, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: "Customer ID",
      width: "10%",
      dataIndex: "name"
    },
    {
      title: "Name",
      width: "10%",
      dataIndex: "name",
    },
    {
      title: "Email",
      width: "20%",
      dataIndex: "email",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      width: "15%",
    },
    {
      title: "Address",
      dataIndex: "address",
      width: "15%",
    },
    {
      title: "Action",
      align: "center",
      width: "15%",
      render: (_, record) => (
        <>
          <Tag className="th-br-4 th-pointer th-grey">Edit</Tag>

          <Popconfirm
            title="Are you sure to remove this clicker id?"
            okText="Yes"
            cancelText="No"
          >
            <Tag className="th-br-4 th-pointer" color="error">
              Delete
            </Tag>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <React.Fragment>
      <Row>
        <Col md={24}>
          <Breadcrumb items={breadcrumbItems} />
        </Col>
      </Row>

      <Col span={24} className="mt-3">
        <Card title="All Customer List" bordered={false}>
          {datalist?.length > 0 ? (
            <>
              <Table
                columns={columns}
                dataSource={datalist}
                rowKey="orderid"
                pagination={false}
              />
              <Pagination
                current={currentPage}
                total={totalData}
                pageSize={limit}
                className="pt-4 pb-2"
                align="end"
                showSizeChanger={false}
              />
            </>
          ) : (
            <Empty description="No users found" />
          )}
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default CustomerList;
