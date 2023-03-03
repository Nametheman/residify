import React from 'react';
import { Dropdown, Menu } from 'antd';
import styled from 'styled-components';
import { ReactComponent as Notification } from '../../assets/images/icons/new_notification.svg';
import { ReactComponent as ChevronDown } from '../../assets/images/icons/chevron-down.svg';
import avatar from '../../assets/images/avatar.svg';
import logout from '../../assets/images/icons/logout.svg';
import { useHistory } from 'react-router-dom';
import { clearState } from '../../redux/reducers/auth/login';
import { useDispatch } from 'react-redux';
import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/images/icons/search.svg'

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const signout = () => {
    sessionStorage.clear();
    dispatch(clearState());
    history.push('/login');
  };
  const menu = (
    <Menu>
      <Menu.Item onClick={signout}>
        <img className='logout' src={logout} alt='Icon' />
        <span
          style={{ marginLeft: '1rem', color: '#0052cc', fontSize: '1rem' }}
        >
          Log out
        </span>
      </Menu.Item>
    </Menu>
  );
  return (
    <Container>
      <LogoSearch>
       <Logo src={logo} />
      <Searchbar>
        <SearchIcon src={searchIcon}/>
        <Input placeholder='Search Estate, Resident etc'/>
      </Searchbar>
      </LogoSearch>
   
      <NavMenu>
        <NotificationIcon />
        <Avatar src={avatar} alt='Avatar' />
        <UserProfile>
          <p>Hawkins Maru</p>
          <span>Admin Manager</span>
        </UserProfile>
        {/* <Dropdown overlay={menu}>
          <ArrowDown />
        </Dropdown> */}
      </NavMenu>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: fixed;
  height: 50px;
  width: 100vw;
  background: #5074F1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  z-index: 999;

  h4 {
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #0052cc;
  }
`;

const LogoSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`

const Logo = styled.img`
  width: 80px;
  height: 70%;
  object-fit: contain;
`;
const Searchbar = styled.div`
display: flex;
align-items: center;
height: 1.9em;
width: 38em;
border-radius: 6px;
background: white;
`
const SearchIcon = styled.img`
height: 12px;
width: 1.25em;
cursor: pointer;
margin-left: 5px;
`
const Input = styled.input`
margin-bottom: 4px;
width: 36em;
height: 70%;
border: none;
outline: none;
font-size: 14px;
letter-spacing: 1px;
color: #3d3d3d;
margin-left: 10px;

  ::placeholder {
    font-size: 10px;
    font-family: 'Mulish', sans-serif;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const UserProfile = styled.div`
  margin-right: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.001em;
    color: #fff;
    margin-bottom: 0.4em;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 0.7rem;
    line-height: 8px;
    text-align: center;
    letter-spacing: 0.015em;
    color: #fff;
  }
`;

const NotificationIcon = styled(Notification)`
  margin-right: 1.2rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    transition: 0.2s all ease-in-out;
  }
`;

const Avatar = styled.img`
  margin-right: 0.5rem;
  width: 35px;
  height: 35px;
`;

const ArrowDown = styled(ChevronDown)`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  :hover {
    transform: scale(1.1);
    transition: 0.2s all ease-in-out;
  }
`;
