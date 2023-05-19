import { combineReducer } from "redux";

const initialState = {
    invoices: [{
        isOpen: false,
        currency: '$',
        currentDate: '',
        invoiceNumber: 0,
        dateOfIssue: '',
        billTo: '',
        billToEmail: '',
        billToAddress: '',
        billFrom: '',
        billFromEmail: '',
        billFromAddress: '',
        notes: '',
        total: '0.00',
        subTotal: '0.00',
        taxRate: '',
        taxAmmount: '0.00',
        discountRate: '',
        discountAmmount: '0.00',
        items: [
            {
                id: 0,
                name: '',
                description: '',
                price: '1.00',
                quantity: 1
            }
        ]
    }]
}


export const invoiceReducer = (state=initialState, action) => {
 switch(action.type){
    case 'ADD_INVOICE' : state.invoices.push(action.payload);return state;
    case 'EDIT_INVOICE' : state.invoices.map(ivc => ivc.invoiceNumber===action.payload.invoiceNumber ? action.payload : ivc); return state;
    case 'DELETE_INVOICE' : state.invoices.filter(ivc => ivc !== action.payload); return state;
    default: return state;
 }
}
