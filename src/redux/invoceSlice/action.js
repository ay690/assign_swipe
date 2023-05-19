export const addInvoice = (invoice) => {
    return{
        type: "ADD_INVOICE",
        payload: invoice,
    }
}

export const editInvoice = (invoice) => {
    return{
        type: "EDIT_INVOICE",
        payload: invoice,
    }
}

export const deleteInvoive = (invoice) => {
    return {
        type: "DELETE_INVOICE",
        payload: invoice,
    }
}