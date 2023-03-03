import React from 'react'
import disable from '../../../assets/images/new icons/disable.svg'
import enable from '../../../assets/images/new icons/enable.svg'
import styled from 'styled-components'
import { BaseUrl } from '../../../Env'



const 	PendingActions = ({id, setManageEstate, manageEstate}) => {


  const approveEstate = async (id) => {
    const response = await fetch (`${BaseUrl}api/v1/admin/estate/${id}/approve`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,

      },
    })
    const data = await response.json();
    console.log(data)
}
  const disapproveEstate = async (id) => {
    const response = await fetch (`${BaseUrl}api/v1/admin/estate/${id}/disapprove`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,

      },
    })
    const data = await response.json();
    console.log(data)
}
  
  const approveEstateHandler = () => {
    approveEstate(id)
    setManageEstate(!manageEstate)
    // dispatch(approvePendingEstate(id));
    // setModalActive(true)
  }
  const disapproveEstateHandler = () => {
    disapproveEstate(id)
    setManageEstate(!manageEstate)
    // dispatch((userActions.togglePendingModal))
    // setModalActive(true)
  }



  return (
    <IconWrapper>	
        <div onClick={approveEstateHandler}><img src={enable} alt="Approve Estate" /></div>
        <div onClick={disapproveEstateHandler}><img src={disable} alt="Decline Estate" /></div>
    </IconWrapper>
  )
}


const IconWrapper = styled.div`
display: flex;
align-items: center;
gap: 10px;

img{
    height: 17px;
    cursor: pointer;
}
`
export default 	PendingActions