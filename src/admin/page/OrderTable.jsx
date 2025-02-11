import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import orderData from './../../../config/orders.json';

const OrderTable = () => {
  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderid',
      key: 'orderid',
    },
    {
      title: 'Seller Name',
      dataIndex: 'seller_name',
      key: 'seller_name',
    },
    {
      title: 'Customer Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Delivery Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Products',
      dataIndex: 'product_count',
      key: 'product_count',
    },
    {
      title: 'Order Status',
      dataIndex: 'order_status',
      key: 'order_status',
    },
    {
      title: 'Order Date',
      dataIndex: 'order_date',
      key: 'order_date',
    },
    {
      title: 'Delivery Date',
      dataIndex: 'delivery_date',
      key: 'delivery_date',
    }
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(orderData);
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="orderid"
      pagination={false}
    />
  );
};

export default OrderTable;
