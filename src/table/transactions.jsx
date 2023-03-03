import React from 'react';
// import { Space } from 'antd';
import './transactions.css'

export const transactions = [
  {
    id: 1,
    client: 'Abdulfatahi Ishaq',
    email: 'abfatahi.iaf@gmail.com',
    amount: 5000,
    description: 'Fund Wallet',
    date: new Date(),
    status: 'Completed',
  },
  {
    id: 1,
    client: 'Abdulfatahi Ishaq',
    email: 'abfatahi.iaf@gmail.com',
    amount: 5000,
    description: 'Fund Wallet',
    date: new Date(),
    status: 'Completed',
  },

  {
    id: 1,
    client: 'Abdulfatahi Ishaq',
    email: 'abfatahi.iaf@gmail.com',
    amount: 5000,
    description: 'Fund Wallet',
    date: new Date(),
    status: 'Completed',
  },

  {
    id: 1,
    client: 'Abdulfatahi Ishaq',
    email: 'abfatahi.iaf@gmail.com',
    amount: 5000,
    description: 'Fund Wallet',
    date: new Date(),
    status: 'Completed',
  },

  {
    id: 1,
    client: 'Abdulfatahi Ishaq',
    email: 'abfatahi.iaf@gmail.com',
    amount: 5000,
    description: 'Fund Wallet',
    date: new Date(),
    status: 'Completed',
  },
];

export const columns = [
  {
    className: 'transactionColumn',
    title: 'No',
    render: (text, record, index) => index + 1,
  },
  {
    title: 'Name',
    dataIndex: 'amount',
    key: 'amount',
    render: (text) => text && text.toLocaleString(),
  },
  {
    title: 'Phone Number',
    dataIndex: 'by',
    key: 'by',
  },
  {
    title: 'Email',
    dataIndex: 'type',
    key: 'type',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Gender',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Estate',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => text && new Date(text).toLocaleDateString(),
  },
  {
    title: 'Address',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => text && new Date(text).toLocaleDateString(),
  },
  {
    title: 'Local Government',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => text && new Date(text).toLocaleDateString(),
  },
  {
    title: 'Edit',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => text && new Date(text).toLocaleDateString(),
  },
];
