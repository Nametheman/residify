import React from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';
import { ReactComponent as Close } from '../../../assets/images/icons/cancel.svg';
import { useDispatch, useSelector } from 'react-redux';
import  TextArea  from '../../../Reuseable/TextArea';
import InputField from '../../../Reuseable/InputField';
import Button from '../../../Reuseable/Button'
import {
  servicesSelector,
  toggleAddNewModal,
  toggleEditServiceModal,
} from '../../../redux/reducers/dashboard/services';
import { removeEmpty } from '../../../utils/constants';
import { editService } from '../../../redux/sagas/dashboard/servicesRoute/editService';
import { editServicesSelector } from '../../../redux/reducers/servicesReducer/editService';
import { addServicesSelector } from '../../../redux/reducers/servicesReducer/addService';
import { addService } from '../../../redux/sagas/dashboard/servicesRoute/addService';

export const AddNewServiceModal = (props) => {
  const dispatch = useDispatch();
  console.log(addServicesSelector)

  const { loading, success, error, errors } = useSelector((state) => state.server);
//   const { addNewModal } = useSelector(servicesSelector);
//   console.log(addNewModal)
  const [data, setData] = React.useState({
    name: '',
    description: '',
    documentationUrl: '',
    howTo: '',
    subService: [],
    summary: '',
    category: '',
  });
  const [submit, setSubmit] = React.useState(false);
  const {
    name,
    description,
    subService,
    documentationUrl,
    howTo,
    summary,
    category,
  } = data;

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (
      name &&
      description &&
      documentationUrl &&
      howTo &&
      subService &&
      summary &&
      category
    ) {
      dispatch(addService(data));
    }
  };
  
  return (
    
    <Modal
      visible={props.show}
      width={565}
      footer={null}
      closable={false}
      centered={true}
    >
      <CloseButton onClick={() => dispatch(toggleAddNewModal())} />
    
        <Container onSubmit={handleSubmit}>
        <h2>Create New Service</h2>
        <div className='group'>
          <div className='input_group'>
            <p>Name</p>
            <InputField
              fieldname='name'
              onTextChange={handleChange}
              placeholder='Service Name'
            />
            {submit && !name && (
              <p className='msg text-danger'>Service name cannot be blank</p>
            )}
          </div>
          <div className='input_group'>
            <p>Category</p>
            <InputField
              fieldname='category'
              onTextChange={handleChange}
              placeholder='Category'
            />
            {submit && !category && (
              <p className='msg text-danger'>
                Service category cannot be blank
              </p>
            )}
          </div>
        </div>
        <div className='input_group'>
          <p>Summary</p>
          <TextArea
            fieldname='summary'
            onTextChange={handleChange}
            placeholder='Summary'
          />
          {submit && !summary && (
            <p className='msg text-danger'>Service summary cannot be blank</p>
          )}
        </div>
        <div className='input_group'>
          <p>Description</p>
          <TextArea
            fieldname='description'
            onTextChange={handleChange}
            placeholder='Description'
          />
          {submit && !summary && (
            <p className='msg text-danger'>Service summary cannot be blank</p>
          )}
        </div>
        <div className='input_group'>
          <p>How To Use</p>
          <TextArea
            fieldname='howTo'
            onTextChange={handleChange}
            placeholder='How To Use'
          />
          {submit && !howTo && (
            <p className='msg text-danger'>Service howTo cannot be blank</p>
          )}
        </div>
        <div className='input_group'>
          <p>Subservices (*seperate each value with comma)</p>
          <TextArea
            onTextChange={(e) => {
              console.log(e.target.value.split(/[ ,]+/));
              setData({ ...data, subService: e.target.value.split(/[ ,]+/) });
            }}
            fieldname='subService'
            placeholder='Subservices'
          />
          {submit && !subService && (
            <p className='msg text-danger'>
              Service subservices cannot be blank
            </p>
          )}
        </div>
        <div className='group'>
          <div className='input_group'>
            <p>Documentation</p>
            <InputField
              fieldname='documentationUrl'
              onTextChange={handleChange}
              placeholder='Documentation'
            />
            {submit && !documentationUrl && (
              <p className='msg text-danger'>
                Service documentationUrl cannot be blank
              </p>
            )}
          </div>
          <div className='input_group'>
            <p>Pricing</p>
            <InputField placeholder='Pricing' />
          </div>
        </div>
        {success && (
          <p className='msg text-success'>
            Service added successfully!
          </p>
        )}
        {error && <p className='msg text-danger'>{errors}</p>}
        <br />
        <Button loading={loading} full primary text='Create' />
      </Container>
    
    </Modal>
  );
};

export const EditServiceModal = (props) => {
  const dispatch = useDispatch();
  // const service = ''
  const {modalInfo} = props
  console.log(modalInfo?.id)
  // const service = JSON.parse(sessionStorage.getItem('selectedServices'))
  // const { editServiceModal } = useSelector(servicesSelector);
  const serve = (localStorage.getItem("id"));
  console.log(serve);
  const service = ''
  const { loading, success, error, errors } = useSelector((state) => state.editing);
  
  const [data, setData] = React.useState({
    id: serve ,
    name: '',
    description: '',
    documentationUrl: '',
    howTo: '',
    summary: '',
    category: '',
  });
  const [empty, setEmpty] = React.useState(false);
  const { name, description, documentationUrl, howTo, summary, category } =
    data;

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name ||
      description ||
      documentationUrl ||
      howTo ||
      summary ||
      category
    ) {
      setEmpty(false);
      // removeEmpty(data);
      dispatch(editService(data));
    } else {
      setEmpty(true);
    }
  };
  return (
    <Modal
      visible={props.show}
      width={565}
      footer={null}
      closable={false}
      centered={true}
    >
      <CloseButton onClick={() => dispatch(toggleEditServiceModal())} />
      <Container onSubmit={handleSubmit}>
        <h2>Edit {service?.name} Service</h2>
        <div className='group'>
          <div className='input_group'>
            <p>Name</p>
            <InputField
              fieldname='name'
              onTextChange={handleChange}
              value={data?.name}
              placeholder={service?.name}
            />
          </div>
          <div className='input_group'>
            <p>Category</p>
            <InputField
              fieldname='category'
              onTextChange={handleChange}
              value={data?.category}
              placeholder={service?.category}
            />
          </div>
        </div>
        <div className='input_group'>
          <p>Summary</p>
          <TextArea
            fieldname='summary'
            onTextChange={handleChange}
            value={data?.summary}
            placeholder={service?.summary}
          />
        </div>
        <div className='input_group'>
          <p>Description</p>
          <TextArea
            fieldname='description'
            onTextChange={handleChange}
            value={data?.description}
            placeholder={service?.description}
          />
        </div>
        <div className='input_group'>
          <p>How To Use</p>
          <TextArea
            fieldname='howTo'
            onTextChange={handleChange}
            value={data?.howTo}
            placeholder={service?.description}
          />
        </div>
        <div className='input_group'>
          <p>Subservices (*seperate each value with comma)</p>
          <div className='row_group'>
            {service?.subService?.map((subService, index) => {
              return (
                <div key={index} className='tag'>
                  {subService}
                </div>
              );
            })}
          </div>
        </div>
        <div className='group'>
          <div className='input_group'>
            <p>Documentation Link</p>
            <InputField
              fieldname='documentationUrl'
              onTextChange={handleChange}
              value={data?.documentationUrl}
              placeholder={service?.documentationUrl}
            />
          </div>
          <div className='input_group'>
            <p>Pricing</p>
            <InputField placeholder='Pricing' />
          </div>
        </div>
        <br />
        {success && (
          <p className='msg text-success'>
            Service details updated successfully!
          </p>
        )}
        {error && <p className='msg text-danger'>{errors}</p>}
        {empty && <p className='msg text-danger'>You have made no changes</p>}
        <Button loading={loading} full secondary text='Save Changes' />
      </Container>
    </Modal>
  );
};

export const Container = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .group {
    display: flex;
    gap: 1rem;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 17px;
    line-height: 29px;
    opacity: 0.7;
    color: #000;
  }

  .msg {
    font-size: 0.9em;
  }

  .tag {
    max-width: 120px;
    text-align: center;
    padding: 5px 14px;
    background: #0000000a;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    line-height: 14px;
    letter-spacing: 0.004em;
    color: #000;
  }

  .input_group {
    width: 100%;
    p {
      margin: 0 0 0.5rem;
      padding: 0;
      font-weight: bold;
      font-size: 14px;
      line-height: 29px;
      opacity: 0.7;
      color: #999;
    }

    .row_group {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5em;
    }
  }
`;

export const CloseButton = styled(Close)`
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