import React from 'react'
import Register from '../Forms/Register';
import "../../Styles/modal.scss";
const Modal = ({closeModal}) => {
  return (
    <div className='modal-background'>
        <div className='modal-container'>
<div className='close-modal'>
    <span onClick={()=>closeModal(false)}>close</span>
</div>
<div className='modal-body'>
Modal Rset password
</div>
        </div>
    </div>
  )
}

export default Modal