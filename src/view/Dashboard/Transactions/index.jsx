import React,{useState} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { DashboardLayout } from '../../../layout';
// import { getTransactions } from '../../../redux/sagas/dashboard/transactions';
import Home from './Home';

const Index = () => {

  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(getTransactions());
  // }, [dispatch]);



  // const { loading, transactions } = useSelector((state) => state?.transactions);

  // const [user, setUser] = useState(transactions?.data)
  return (
    <DashboardLayout
      children={
        <Container>
          <Home />
        </Container>
      }
    />
  );
};

export default Index;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden !important;
  h1 {
    font-size: 25px;
    line-height: 29px;
    color: #000;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 0.5rem;

  .group {
    display: flex;
    column-gap: 1rem;
    align-items: center;
  }
`;
