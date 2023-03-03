import React from 'react'
import styled from 'styled-components'
import xCircle from '../../../assets/images/new icons/x-circle.svg'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../../../redux/sagas/dashboard/users';
import { userActions } from '../../../redux/reducers/dashboard/users';

const Modals = () => {
  const houseTypes = [
    {value: 'Apartments or flats'},
    {value: 'Penthouse'},
    {value: 'Penthouse'},
    {value: 'Bungalow'},
    {value: 'Bungalow'},
    {value: 'Detached'},
    {value: 'Detached'},
    {value: 'Semi-detached house'},
    {value: 'Semi-detached house'},
    {value: 'Terraced'},
  ]
  const categories = [
    {value: 'Service Charge'},
    {value: 'Service Charge'},
    {value: 'Electricity'},
    {value: 'Electricity'},
    {value: 'Water'},
    {value: 'Water'},
    {value: 'Waste Management'},
    {value: 'Waste Management'},
    {value: 'Waste Management'},
    {value: 'Waste Management'},
    {value: 'Semi-detached house'},
    {value: 'Terraced'},
  ]

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  
  const closeModalHandler = () => {
    dispatch(userActions.toggleConfigModal())
  }

  const {isCategories} = useSelector((state) => state.users)

  return (
    <Wrapper>
      <div className='modalCard'>
      	<div className='content'>
          <div  className='btnWrapper'>
            <div className='buttons'>
              <a href="#" style={!isCategories ? {borderBottom: '1px solid #002DCC', color: '#002DCC'} : {border: 'none', color: '#888686'}  } onClick={() => {dispatch(userActions.falsifyIsConfiguration())}}>House types</a>
              <a href="#" style={isCategories ?{borderBottom: '1px solid #002DCC', color: '#002DCC'} : {border: 'none', color: '#888686'} } onClick={() => {dispatch(userActions.swithcIsConfiguration())}}>Categories</a>
            </div>
            <div className='closeBtn'><img src={xCircle} alt="close" onClick={closeModalHandler} /></div>
          </div>
          {!isCategories ? <div className='inputsWrapper'>
            {houseTypes.map((house, index) => {
              return <div className='inputs'><input key={index} type="checkbox" value={house.value} />
              <label>{house.value}</label></div>
            } )}
          </div> : <div className='inputsWrapper'>
            {categories.map((category, index) => {
              return <div className='inputs'><input key={index} type="checkbox" value={category.value} />
              <label>{category.value}</label></div>
            } )}
          </div> }
          <div className='actionBtn'>
            <button>Discard Changes</button>
            <button className='saveBtn'>Save</button>
          </div>  	  
        </div>
      </div>
      </Wrapper>
  )
}

export default Modals

export const Wrapper = styled.main`
background: #00000054;
height:100vh;
width: 100%;
position: absolute;
z-index: 9999;
display: flex;
align-items: center;
justify-content: center;

  .modalCard{
    background: white;
    width: 35rem;
    border-radius: 20px;
    padding-bottom: 40px;

    .actionBtn{
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 10px;
      
      button{
        border: 1px solid #D9D9D9;
        background: none;
        padding: 13px 0;
        width: 240px;
        font-family: 'DM Sans', sans-serif;
        font-size: 13px;
        font-weight: 500;
        color: #9197B3;
        border-radius: 5px;
      }

      .saveBtn{
        background: #002DCC;
        color: #fff;
      }
    }
    .content{
      display: flex;
      flex-direction: column;
      gap: 10px;

      .btnWrapper{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #E0E0E0;

        .buttons{
        display: flex;
        padding: 60px 0 0 0;
        width: 100%;

        a{
          text-decoration: none;
          color: #002DCC;
          border-bottom: 2px solid #002DCC;
          padding: 0 20px 1px;
        }
        }

        .closeBtn{
          margin: 30px 30px 0 0;

          img{
            height: 30px;
            cursor: pointer;
          }
         
        }
      }

      .inputsWrapper{
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .inputs{
          margin: 12px 40px;

          label{
            font-size: 14px;
            font-family: 'Mulish', sans-serif;
            font-weight: 600;
          }
          input{
            margin-right:10px;
            border-radius: none;
            background: #D9D9D9;
            transform: scale(1.4);
          }
        }
      }
    }
  }
`