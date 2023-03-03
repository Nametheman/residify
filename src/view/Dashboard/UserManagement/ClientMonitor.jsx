import React from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';
import { ReactComponent as Close } from '../../../assets/images/icons/cancel.svg';
import usmAvatar from '../../../assets/images/avatar.svg';
import Button from '../../../Reuseable/Button'
import { useState } from 'react';
import { fundClients } from '../../../redux/sagas/dashboard/fundings';
import { useDispatch, useSelector } from 'react-redux';
import { clearState } from '../../../redux/reducers/dashboard/funding';

export const ClientMonitor = (props) => {
  const dispatch = useDispatch()
  const details = JSON.parse(sessionStorage.getItem('selectedPatient'));
  const [amounts, setAmounts] = useState({
    amount: ''
  })

  const {loading, success} = useSelector((state) => state?.wallets)
  console.log(success);
  console.log(details)


  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    setAmounts({
      [name]: value,
    });
  };

  const sending = () => {
    dispatch(fundClients(amounts))
    console.log(amounts);
    setAmounts({
     amount: ''
    })
    console.log(amounts);
    setTimeout(()=>{
      // dispatch(clearState())
      window.location.reload(1)
    },2000) 
   
  }


  return (
    <Modal
      visible={props.show}
      width={565}
      footer={null}
      closable={false}
      centered={true}
    >
      <CloseButton onClick={props.handleClose} />
      <Container>
      <div className='header_info'>
        <img src={usmAvatar} alt='' />
        <div className='group'>
          <h2>{details && details.name}</h2>
          <h4 style={{ textTransform: 'capitalize', marginTop: '10px' }}>
            {details?.email || 'Client'}
          </h4>
        </div>
      </div>
      <div className='content'>
        {/* <div className='group'>
          <h4>Phone Number</h4>
          <h5>{selectedUser.phoneNumber}</h5>
        </div> */}
        {/* <div className='group'>
          <h4>Email</h4>
          <h5>{selectedUser.email}</h5>
        </div> */}
        <div className='group'>
          <h4>Sign Up Date</h4>
          <h5>
            {details &&
              new Date(details?.createdAt).toLocaleDateString()}
          </h5>
        </div>
        <div className='group'>
          <h4>Activity Status</h4>
          {details?.access === 'granted' ? (
            <h5 className='active'>Active</h5>
          ) : (
            <h5 className='inactive'>Inactive</h5>
          )}
        </div>
        <div className='group'>
          <h4>Active Services:</h4>
        </div>
        {/* <div className='services-group'>
          {details?.allowedServices.map((item, index) => {
            return (
              <div key={index} className='tag'>
                {item}
              </div>
            );
          })}
        </div> */}
        <div className='group' style={{marginTop:'20px',color:'lightgrey'}}>
        <h6>In order to fund wallet Enter amount below  :</h6>
        </div>
        <div className='group' style={{display:'flex',justifyContent:'center'}}>
          <input type='text' style={{width:'100%',height:'40px',borderWidth:'2px',
          borderRadius:'5px',outline:'none',borderStyle:'solid', borderColor:'#bdbdbd',paddingLeft:'70px'}}
          name='amount' 
          onChange={(e)=> handleChange(e)}/>
        </div>
        {success && (
          <p className='msg text-success'>
            wallet funded successfully!
          </p>
        )}
        <div className='group' >
        <Button loading={loading} full primary text='send Fund' style={{width:'50%'}} onClick={() => sending()}/>
        </div>
      </div>
    </Container>
    </Modal>
  );
};

const Container = styled.div`
  padding: 3rem 2rem;

  .services-group {
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .content {
    .subscription {
      text-transform: capitalize;
      text-align: left;
      letter-spacing: 0.004em;
      color: ${(props) =>
        props.subscription === 'Premium'
          ? '#0052cc !important'
          : props.subscription === 'Standard'
          ? '#455AFE !important'
          : props.subscription === 'Unlimited'
          ? '#19B729 !important'
          : ''};
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

    .pending {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      padding: 5px 14px;
      background: rgba(255, 173, 51, 0.1);
      border-radius: 5px;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.004em;
      color: #ffad33;
    }

    .rejected {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      padding: 5px 14px;
      background: rgba(255, 130, 130, 0.1);
      border-radius: 5px;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.004em;
      color: #ff8282;
    }

    .group {
      display: flex;
      font-style: normal;
      font-weight: bold;
      letter-spacing: 0.0015em;
      font-size: 1rem;
      margin: 0.75em 0 0.75rem;

      .rating-group {
        display: flex;
        flex: 1;
        gap: 0.5em;
        img {
          width: 14px;
          height: 14px;
        }
      }

      .info-group {
        display: flex;
        align-items: center;
        flex: 1;
        img {
          width: 40px;
          height: 40px;
          margin-right: 1em;
          border-radius: 50%;
        }
      }

      .active {
        color: #455afe;
      }
      .inactive {
        color: #ff8282;
      }
      h4 {
        font-size: 1rem;
        flex: 0.5;
        margin: 0;
        padding: 0;
        color: #999999;
        margin-right: 2rem;
        text-transform: capitalize;
      }
      h5 {
        flex: 1;
        margin: 0;
        padding: 0;
        color: #000;
        font-size: 1rem;
      }
    }
  }
  .header_info {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 900;

    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
    }

    .group {
      margin-left: 2rem;
      h2 {
        margin: 0;
        padding: 0;
        font-size: 25px;
        line-height: 29px;
        color: #000;
      }

      h4 {
        margin: 0;
        padding: 0;
        font-size: 20px;
        color: #0052cc;
      }
    }
  }
`;

const CloseButton = styled(Close)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;

// const PatientReview = styled.div`
//   display: flex;
//   gap: 2em;
//   align-items: flex-start;
//   width: 100%;
//   margin: 1em 0;
//   img {
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//   }

//   .group {
//     border-bottom: 1px solid #666;
//     padding-bottom: 1rem;
//     display: flex;
//     flex-direction: column;
//     row-gap: 0.5em;
//     .rating-group {
//       display: flex;
//       gap: 0.5em;
//       img {
//         width: 14px;
//         height: 14px;
//       }
//     }
//     h5 {
//       font-weight: bold;
//       font-size: 14px;
//       line-height: 16px;
//       letter-spacing: 0.001em;
//       color: #000;
//       margin: 0;
//       padding: 0;
//     }
//     p {
//       margin: 0;
//       padding: 0;
//       font-size: 12px;
//       line-height: 14px;
//       letter-spacing: 0.004em;
//       color: #000;
//     }
//   }
// `;




   
