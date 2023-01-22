import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./employee.css";

function AddEmployeeForm() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Form className="form1">
          <h2>Add Employee</h2>
          <Form.Field>
            <input fluid label="Name" placeholder="Name" />
          </Form.Field>
          <Form.Field>
            <input fluid label="Designation" placeholder="Designation" />
          </Form.Field>

          <Form.Field>
            <input fluid label="Location" placeholder="Location" />
          </Form.Field>

          <Form.Field>
            <input fluid label="Salary" placeholder="Salary" />
          </Form.Field>

          <Button type="submit">Submit</Button>
        </Form>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </div>
      <Footer />
    </div>
  );
}

export default AddEmployeeForm;
