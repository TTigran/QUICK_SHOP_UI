import React, {Component} from 'react';
import Filtr from "../filtr/filtr";
import './add_declaration.css';
import SubmissionForm from "../SubmissionForm";


class AddDeclaration extends Filtr {
  objectFiltr = new Filtr();
  date = new Date();


  render() {
    return (
        <div>
<SubmissionForm/>
        </div>
    );
  }
}

export default AddDeclaration;
