import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../redux/actions/contact';

const Pagination = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state)=>state.contact.contacts)
    const handlePrev = async()=>{
        if(contacts.page>1){
           await dispatch(getContacts(contacts.page-1))
        }
    }

    const handleNext = async()=>{
        if(contacts.page<contacts.total){
           await dispatch(getContacts(contacts.page+1))
        }
    }

  return (
    <nav className='mt-2' aria-label="Page navigation example ">
  <ul  className="pagination">
    <li onClick={handlePrev} role='button' className="page-item"><a className="page-link" >Previous</a></li>
    <li className="page-item"><a className="page-link" >{contacts.page || 1}</a></li>
    <li onClick={handleNext} role='button' className="page-item"><a className="page-link" >Next</a></li>
  </ul>
</nav>
  )
}

export default Pagination