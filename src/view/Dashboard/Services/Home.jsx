import React, { Fragment } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ServiceCard } from '../../../components/Overview/ServiceCard';
import { Button } from '../../../Reuseable';
import { servicesSelector } from '../../../redux/reducers/dashboard/services';
import { getServices } from '../../../redux/sagas/dashboard/services';
import { useDispatch, useSelector } from 'react-redux';
import {AddNewServiceModal, EditServiceModal} from './Modals'
import Skeleton from 'react-loading-skeleton';

import {
  toggleAddNewModal,toggleEditServiceModal
} from '../../../redux/reducers/dashboard/services';

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);


  const { loading, services, addNewModal,  editServiceModal } = useSelector((state) => state.services);
  console.log(loading)
  const serve = services?.data
  console.log(serve);

  // const { loading, addNewModal , services} = useSelector((state) => state.services);
  // console.log(addNewModal)

  return (
    <Fragment>
      <AddNewServiceModal show={addNewModal}
        handleClose={() => dispatch(toggleAddNewModal())}/>

     {/* <EditServiceModal show={editServiceModal}
        handleClose={() => dispatch(toggleEditServiceModal())} />   */}
      <TitleGroup>
        <h1>Services</h1>
        <div className='btn_wrap'>
        <Button
            onClick={() => dispatch(toggleAddNewModal())}
            full
            text='Add New Service'
            primary
          />
        </div>
      </TitleGroup>
      <p>
        This is the summary/category of Services Rendered to Users/Clients.
      </p>
      <br />
      <Container>
        {loading && (
          <>
            <Skeleton width={'100%'} height={40} />
            <br />
            <Skeleton width={'100%'} height={40} />
            <br />
            <Skeleton width={'100%'} height={40} />
            <br />
            <Skeleton width={'100%'} height={40} />
            <br />
            <Skeleton width={'100%'} height={40} />
          </>
        )}
        {!loading &&
          serve?.length > 0 &&
          serve.map((item) => {
            return <ServiceCard key={item.id} itemId={item.id} {...item}/>;
          })}
      </Container>
      {/* {
        addNewModal &&
        <AddNewServiceModal />
      } */}
    </Fragment>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 0.5rem;

  p.error-msg {
    text-align: left !important;
    margin: 0 !important;
    padding: 0 !important;
    // margin-top: 0.5em;
    font-size: ${rem('13px')};
    letter-spacing: ${rem('0.13px')};
    color: #ff5e5e;
    opacity: 1;
  }

  p.success {
    text-align: left !important;
    margin: 0px;
    padding: 0;
    // margin-top: 0.5em;
    font-size: ${rem('13px')};
    font-weight: bold;
    letter-spacing: ${rem('0.13px')};
    color: green;
    opacity: 1;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  .btn_wrap {
    width: 150px;
  }
`;
