import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import InvoiceForm from "./components/InvoiceForm";
import store from "./redux/store";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import All_Invoices from "./components/All_Invoices";

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Provider store={store}>
          <Container>
            <Routes>
              <Route path="/" element={<All_Invoices />} />
              <Route path="/create-invoice" element={<InvoiceForm />} />
              <Route path="/edit-invoice/:id" element={<InvoiceForm />} />
            </Routes>
          </Container>
        </Provider>
      </div>
    );
  }
}

export default App;
