import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { Button } from '../../Reuseable';
import { toggleEditServiceModal } from '../../redux/reducers/dashboard/services';
import { useDispatch, useSelector } from 'react-redux';
import { EditServiceModal } from '../../view/Dashboard/Services/Modals';
import { useState } from 'react';

export const ServiceCard = (props) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = React.useState(false);
  const { loading, services, addNewModal, editServiceModal } = useSelector((state) => state.services);
  const [modalInfo, setModalInfo] = useState([])

  
  // console.log(props.itemId);
//   const service = JSON.parse(sessionStorage.setItem('selectedServices', props?.id))
//  console.log(service)

console.log(props);

  const Clicking = (id) => {
    localStorage.setItem("id", id);
       dispatch(() => dispatch(toggleEditServiceModal()))
       console.log(props);  
       setModalInfo(props)
      //  dispatch(() => toggleEditServiceModal())
  }

  // const Deleting = (id) => {
  //   localStorage.setItem("id", id);
   
  //      dispatch(() => dispatch(deleteService(data)))
  //      console.log(props);  
  //      setModalInfo(props)
  //     //  dispatch(() => toggleEditServiceModal())
  // }

 
  return (
    <>
    <EditServiceModal show={editServiceModal}
        handleClose={() => dispatch(toggleEditServiceModal())} modalInfo={modalInfo}/>  
    <Container>
      <div className='header'>
        <div className='text'>
          <div className='title'>{props.name} SERVICE</div>
        </div>
        <FaChevronDown className='icon' onClick={() => setToggle(!toggle)} />
      </div>
      {toggle && (
        <div className='body'>
          <div className='text-group'>
            <div className='title'>Summary</div>
            <div className='value'>{props.summary}</div>
          </div>
          <div className='text-group'>
            <div className='title'>Description</div>
            <div className='value'>{props.description}</div>
          </div>
          <div className='text-group'>
            <div className='title'>How To Use</div>
            <div className='value'>{props.howTo}</div>
          </div>
          <div className='text-group'>
            <div className='title'>Features &amp; Sub-services</div>
            {/* <div className='value'>{props.features.text}</div> */}
            <div className='subservices'>
              {props &&
                props.subService.map((item, index) => {
                  return (
                    <div key={index} className='tag'>
                      {item}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className='text-group'>
            <div className='title'>Documentation</div>
            <div className='value'>
              <a href={props.documentationUrl}>{props.documentationUrl}</a>
            </div>
          </div>
          <div className='text-group'>
            <div className='title'>Pricing</div>
            {/* <div className='value'>
              <b>${props.pricing}</b> Per Request
            </div> */}
          </div>
          <div className='btn_group'>
            <Button text='Edit Service' primary  onClick={() => Clicking(props?.id)}/>
            <Button text='Delete Service' danger />
          </div>
        </div>
      )}
    </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  margin-bottom: 20px;

  .subservices {
    margin-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag {
    // width: 100px;
    padding: 5px 14px;
    background: rgba(25, 183, 41, 0.1);
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    line-height: 14px;
    letter-spacing: 0.004em;
    color: #455afe;
  }

  .btn_group {
    display: flex;
    gap: 1rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    padding: 0 20px;
    background: #f4f4f4;

    .text {
      display: flex;
      gap: 1.5rem;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.001em;

      .title {
        color: #0052cc;
        text-transform: uppercase;
      }

      .date {
        color: #000;
      }
    }

    .icon {
      cursor: pointer;
      width: 10px;
      height: 10px;
    }
  }

  .body {
    padding: 20px;
    width: 100%;

    .text-group {
      display: flex;
      flex-direction: column;
      font-style: normal;

      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.001em;
      margin-bottom: 15px;

      .title {
        font-weight: bold;
        color: #000;
        margin-bottom: 5px;
      }

      .value {
        color: grey;
      }
    }
  }
`;
