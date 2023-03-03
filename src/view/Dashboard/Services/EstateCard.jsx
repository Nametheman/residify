import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const EstateCard = ({name, residents, dependants, icon, id,setClick}) => {
  return (
        <Link to={`/residentInfo?${id}`}>
        <Card>
          <img src={icon} alt="estare" />
          <Info>
            <h3>{name}</h3>
            <p><span>•</span> Residents: {residents}</p>  
            <p><span>•</span> Dependants: {dependants}</p> 
          </Info>
        </Card>
        </Link>

  )
}

export default EstateCard


export const Card = styled.div`
height: 150px;
width: 200px;
border: 1px solid #e6e2e2;
border-radius: 10px;
margin:15px;
padding: 20px;

img{
  height: 35px;
}
`
export const Info = styled.div`
  margin-top: 30px;
  font-family: 'DM Sans', sans-serif;

  h3{
    font-size: 14px;
    font-weight: 700 !important;
  }
  p{
    font-size: 9px;
    margin-bottom: 0;
    font-weight: 500;

    span{
      margin: 0;
      padding: 0;
      display: inline;
      font-weight: bold;
    }
  }
`

