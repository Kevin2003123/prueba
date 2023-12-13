import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getContactById, updateContact } from "../../redux/actions/contact";

const UpdateContact = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
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

  useEffect(() => {
    if (id) {
      dispatch(getContactById(id));
    }
  }, [id, dispatch]);
  
  useEffect(() => {
    // Solo actualiza el formData si el ID del contacto ha cambiado
    if (contact.id && contact.id.toString() === id) {
      setFormData(contact);
    }
  }, [contact, id]);

 const handleSubmit = (e) =>{
    e.preventDefault();
    const {id, name, lastName, phone, address} = formData
    dispatch(updateContact(id, name, lastName, phone, address));
 }

  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto">
      <h1 className="text-center">Update Contact</h1>
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

export default UpdateContact;
