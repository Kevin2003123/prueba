import { GET_CONTACTS, INSERT_CONTACT, UPDATE_CONTACTS, DELETE_CONTACT, GET_CONTACT_BY_ID } from "../actions/action-type"
const initialState = {
    contacts: [],
    contact: {},
    update: {},
    delete: {},
    insert: {}
};

const contact = (state = initialState, { type, payload }) => {


    switch (type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: payload
            };

        case UPDATE_CONTACTS:
            return{
                ...state,
                update: payload
            }

        case INSERT_CONTACT:
            return{
                ...state,
                insert: payload
            }

        case DELETE_CONTACT:
                return{
                    ...state,
                    delete: payload
                }
        case GET_CONTACT_BY_ID:
            return{
                ...state,
                contact: payload
            }        

        default:
            return state;
    }
}

export default contact;