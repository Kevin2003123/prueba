import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import {insertContact} from "../../redux/actions/contact";

const InsertContact = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

 const handleSubmit = (e) =>{
    e.preventDefault();
    const {name, lastName, phone, address} = formData
    dispatch(insertContact( name, lastName, phone, address));

    if(name && lastName && phone && address){
        navigate("/")
    }
 }

  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto">
      <h1 className="text-center">Create Contact</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          LastName
        </label>
        <input
          className="form-control"
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          className="form-control"
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          className="form-control"
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary ">
        Update Contact
      </button>
    </form>
  );
};

export default InsertContact;
