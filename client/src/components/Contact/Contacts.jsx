import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContacts } from "../../redux/actions/contact";
import { Link } from "react-router-dom";
import Pagination from "../Page/Pagination";
const Contacts = () => {
  const contacts = useSelector((state) => state.contact.contacts.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts(1));
  }, [dispatch]);

  const handleDelete = async (id) => {
    await dispatch(deleteContact(id));
    await dispatch(getContacts(1));
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center ">
      <h1 className="text-center">Contact List</h1>
      <table className=" mx-auto table table-bordered">
        <thead className="table-light">
          <tr className=" text-center">
            <th className="px-2 ">Name</th>
            <th className="px-2">LastName</th>
            <th className="px-2">Phone</th>
            <th className="px-8">Address</th>
            <th className="px-2 ">Accion</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((x) => (
            <tr key={x.id} className=" text-center">
              <td>{x.name}</td>
              <td>{x.lastName}</td>
              <td>{x.phone}</td>
              <td>{x.address}</td>
              <td className="flex justify-between items-center">
                <Link to={`/update/${x.id}`}>
                  <i className="fa-solid fa-pen-to-square mr-1 cursor-pointer"></i>
                </Link>{" "}
                <i
                  className="fa-solid fa-trash cursor-pointer"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target={`#staticBackdrop${x.id}`}
                ></i>
              </td>

              <div
                className="modal fade"
                id={`staticBackdrop${x.id}`}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">
                        Deleting {x.name}
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      Are you sure you want to delete {x.name}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                        onClick={() => handleDelete(x.id)}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination/>
    </div>
  );
};

export default Contacts;
