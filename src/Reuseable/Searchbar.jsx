import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import searchIcon from '../assets/images/icons/search.svg'

// const Searchbar = ({ onTextChange, users, value, setUser, setValue }) => (
//   <SearchBar>
//     <form action=''>
//       <FaSearch className='icon' />
//       <input
//         type='text'
//         value={value}
//         placeholder='Search for keyword'
//         onChange={e => {
//           const currValue = e.target.value;
//           setValue(currValue);
//           const filteredData = users.filter(entry =>
//           entry?.createdAt.includes(currValue)
//           );
//           console.log(filteredData)
//           setUser(filteredData);
//         }}
//       />
//     </form>
//   </SearchBar>
// );

const Searchbar = ({ onTextChange, full, placeholder }) => (
  <SearchBar full={full ? full : undefined}>
    <form action=''>
      <img src={searchIcon} alt="search" />
      <input
        type='text'
        placeholder={placeholder}
        onChange={onTextChange}
      />
    </form>
  </SearchBar>
);

const SearchBar = styled.div`
  position: relative;
  height: 50px;

    form {
    position: absolute;
    right: 20px;
    width:300px;
    border: 0.1px solid #969494; 
    border-radius: 10px;
    display: flex;
    height: 2.2rem;
    align-items: center;
      
      img{
        margin-left: 10px;
      }
      
      input {
      background: #fff;
      border: none;
      outline: none;
      margin: 4px 0 7px 4px;
      height: 80%;
      font-style: normal;
      font-weight: 500;
      font-size: 0.9em;
      letter-spacing: 0.018em;
      color: #000000;
      max-width: 365px;
      width: 260px;

          ::placeholder {
            font-size: 10px;
          }
    }
  }
`;

export default Searchbar;
