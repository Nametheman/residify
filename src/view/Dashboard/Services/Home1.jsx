import React, { Fragment, useState, useEffect } from 'react';
import { Header as Heading, TableWrapper } from '../Overview/Home';
import { ReactComponent as More } from '../../../assets/images/icons/dot.svg';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { getServices } from '../../../redux/sagas/dashboard/services';
import EstateCard from './EstateCard';
import EstateIcon from '../../../assets/images/new icons/estate icon.svg'
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);


  const { loading, services  } = useSelector((state) => state.services);
  console.log(services)


  return (
    <>
   
    <Fragment>
  
        {loading ? (
          <Skeleton width='120px' height='35px' />
        ) : (
           <h1 style={{fontFamily: `Mulish`}}>Residents</h1>
        )}

   {loading ? (
          <Skeleton width='100%' height='900px' />
        ) : (
          <TableWrapper> 
             <CardWrapper>
              {services.map((estate, index) => {
                return <EstateCard key = {estate.id} icon = {EstateIcon} name={estate.name}  residents ={estate.residents} dependants = {estate.dependant} id = {estate.id}  /> 
              })} 
              </CardWrapper>
          </TableWrapper>
      
        )}
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

export const CardWrapper = styled.div`
max-width: 960px;
display: grid;
grid-template-columns: repeat(4, 1fr);

  a{
    text-decoration: none;
    color: black;
  }
`
