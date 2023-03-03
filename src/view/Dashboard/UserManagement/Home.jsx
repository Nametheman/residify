import React, { Fragment, useState, useEffect } from 'react';
import { TableWrapper } from '../Overview/Home';
import { ReactComponent as More } from '../../../assets/images/icons/dot.svg';
import { PaginationWrapper } from '../Overview/Home';
import Pagination from '../../../Reuseable/Pagination';
import  Table  from '../../../Reuseable/Table';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {userActions} from '../../../redux/reducers/dashboard/users'
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import {AiOutlinePlus} from 'react-icons/ai'
import { getUsers } from '../../../redux/sagas/dashboard/users';
import { BaseUrl } from '../../../Env';
import Modals from './Modals';
import PendingModal from './PendingModals/PendingModal';


const Home = () => {

  const [modalActive, setModalActive] = useState(false)

  const [manageEstate, setManageEstate] = useState(false)

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const {
    loading,
    users, pendingTable
  } = useSelector((state) => state.users);


console.log(pendingTable)

  console.log(users)
 const pendingEstates = users.filter(user => user.status === 'pending')
 console.log(pendingEstates)
 const approvedEstates = users.filter(user => user.status !== 'pending')

   const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage, setPostsPerPage] = useState(10);


//Get current list of estates for pagination
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = approvedEstates.slice(indexOfFirstPost, indexOfLastPost)

//Pagination function

  const pageNumbers = []

    for(let i =1; i <= Math.ceil(users.length / postsPerPage); i++ ) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
const paginationHandler = (pageNumber) => {
  setCurrentPage(pageNumber)
}
  
const columns=[ 
  {field: 'no', header: "No"},
   {field: 'name', header: 'Estate Name'},
  {field: 'address', header: 'Address'},
  {field: 'manager', header: 'Estate Manager Name'},
  {field: 'date', header: 'Date Joined'},
  {field: 'lga', header: 'Local Government'},
  {field: 'status', header: 'Status'}
]
const pendingColumns=[ 
  {field: 'no', header: "No"},
   {field: 'name', header: 'Estate Name'},
  {field: 'address', header: 'Address'},
  {field: 'manager', header: 'Estate Manager Name'},
  {field: 'date', header: 'Date Created'},
  {field: 'lga', header: 'Local Government'},
  {field: 'action', header: 'Action'}
]
 const togglePendingTable =() => {
      dispatch(userActions.switchPendingTable())
    }
const toggleApprovedTable = () => {
  dispatch(userActions.switchApprovedTable())
}
const addConfigHandle = () => {
 dispatch(userActions.toggleConfigModal())
}




  return (
    <>
    <Fragment>
        {loading ? (
          <Skeleton width='120px' height='35px' />
        ) : (
          <Heading>
           <h1 style={{fontFamily: 'Mulish', fontSize: '22px', fontWeight: 'bold', color: '#333333'}}>Estate</h1>
           { pendingTable || <Link to='#' onClick={addConfigHandle}><AiOutlinePlus style={{fontSize: '18px', marginBottom: '3px', color: '#fff'}} /> Add Configuration</Link>}
          </Heading>
        )}
    
    {/* <Modals/> */}
      <TableWrapper>
        <ButtonWrapper>
        <a href="#" onClick={toggleApprovedTable} style = { pendingTable ? {textDecoration: 'none', padding: '10px 50px', bottom: '0', fontSize: '12px', fontFamily: 'Mulish', fontWeight: 'bold', color: '#888686' } : {textDecoration: 'none', padding: '10px 50px', bottom: '0', fontSize: '12px', fontFamily: 'Mulish', fontWeight: 'bold', color: '#002DCC',  borderBottom: '1px solid'}}>Approved</a>
        <a href="#" onClick={togglePendingTable} style = { !pendingTable ? {textDecoration: 'none', padding: '10px 50px', bottom: '0', fontSize: '12px', fontFamily: 'Mulish', fontWeight: 'bold', color: '#888686' } : {textDecoration: 'none', padding: '10px 50px', bottom: '0', fontSize: '12px', fontFamily: 'Mulish', fontWeight: 'bold', color: '#002DCC',  borderBottom: '1px solid'}}>Pending</a>
        </ButtonWrapper>
        { 
        loading ? (
          <Skeleton width={'100%'} height={330} />
        ) : (
          <>
         { !pendingTable ?  <Table data={approvedEstates} columns={columns} type = 'approved' /> :
          <Table manageEstate={manageEstate} setManageEstate={setManageEstate} modalActive={modalActive} setModalActive = {setModalActive} data={pendingEstates} columns={pendingColumns} type = 'pending'  />}
               <PaginationWrapper>
            <p>Showing {indexOfFirstPost + 1} to {approvedEstates.length} of {approvedEstates.length} entries</p>
            <> <Pagination
             postsPerPage={postsPerPage} 
            totalPosts={approvedEstates.length} paginate={paginationHandler} currentPage={currentPage} setCurrentPage={setCurrentPage}/> </>
          </PaginationWrapper>
          </>
        )
        }
      </TableWrapper>
    </Fragment>
    </>
  );
};

export default Home;

const MoreButton = styled(More)`
  cursor: pointer;
  width: 1.5em;
  height: 1.5em;

  :hover {
    transform: scale(1.2);
  }
`;
export const Heading = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 15px;
a{
  text-decoration: none;
  color: #fff !important;
  background: #002DCC;
  padding: 6px 14px;
  font-size: 13px;
  font-family: 'Karla', sans-serif;
  border-radius: 5px;
}
`
export const ButtonWrapper = styled.div`
border-bottom: 1px solid #E0E0E0;
margin-bottom: 25px;
position: relative;
display: flex;
margin-left: 30px;
`