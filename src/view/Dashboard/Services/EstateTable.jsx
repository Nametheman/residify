import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../../redux/sagas/dashboard/services';
import Table from '../../../Reuseable/Table'
import { TableWrapper } from '../Settings/Home';

const EstateTable = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch])

    const {loading} = useSelector((state) => state.services)

  return (
    <>
        {loading ? (<Skeleton width= '100%' height = '900px'/>) : (<TableWrapper>
            <Table></Table>
        </TableWrapper>)}
    </>
  )
}

export default EstateTable