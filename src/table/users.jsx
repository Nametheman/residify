import React from 'react';
import styled from 'styled-components';
import { ReactComponent as More } from '../assets/images/icons/dot.svg';
import { Space, Dropdown, Menu } from 'antd';
import { ClientMonitor } from '../view/Dashboard/UserManagement/ClientMonitor';
import { useDispatch } from 'react-redux';

// const viewing = (data) => {
//   sessionStorage.setItem('selectedPatient', JSON.stringify(data));
//   console.log(data)
// }




const menu = (data) => (

  <Menu>
    <Menu.Item
      onClick={() => {
        sessionStorage.setItem('selectedPatient', JSON.stringify(data));
        
        console.log(data)
      }}
    >
      View
    </Menu.Item>
  </Menu>
);

export const columns = [
  {
    title: 'S/n',
    render: (item, record, index) => <b>{index + 1}</b>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Space>{text}</Space>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Status',
    dataIndex: 'access',
    key: 'access',
    render: (text) => (
      <Space
        style={{
          width: '90px',
          fontSize: 13,
          padding: '0.5em 1em',
          margin: '0.5em',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          textTransform: 'capitalize',
          borderRadius: '5px',
          color:
            text === 'granted' ? '#19B729' : text === 'denied' ? '#FF8282' : '',
          background:
            text === 'granted'
              ? 'rgba(25, 183, 41, 0.1)'
              : text === 'denied'
              ? 'rgba(255, 130, 130, 0.1)'
              : '',
        }}
      >
        {text === 'granted' ? 'Active' : 'Inactive'}
      </Space>
    ),
  },
  {},
  {
    title: 'Joined On',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => (
      <Space>{text ? new Date(text).toLocaleDateString() : '--------'}</Space>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (item, record) => (
      <Space>
        <Dropdown overlay={menu(record)}>
          <MoreButton />
        </Dropdown>
      </Space>
    ),
  },
];

export const MoreButton = styled(More)`
  cursor: pointer;
  width: 1.5em;
  height: 1.5em;

  :hover {
    transform: scale(1.2);
  }
`;

export const patientData = {
  fullname: 'Ooklie Chris',
  dateOfBirth: '19/09/2010',
  sex: 'Male',
  height: '6.10m',
  weight: '160kg',
  maritalStatus: 'Single',
  genotype: 'AA',
  bloodGroup: 'AB+',
  allergies:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nulla adipiscing placerat auctor eu quisque.',
  preExistingConditions:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nulla adipiscing placerat auctor eu quisque.',
};

export const consultationData = {
  date: '25/01/2022',
  patientName: 'Ooklie Chris',
  doctorName: 'Dr John Doe',
  diagnosis:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nulla adipiscing placerat auctor eu quisque.',
  comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nulla adipiscing placerat auctor eu quisque.',
  prescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nulla adipiscing placerat auctor eu quisque.',
};
