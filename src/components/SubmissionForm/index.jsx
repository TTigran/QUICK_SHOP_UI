import React, {Component} from 'react';
import {Row, Col, Form, Input, Divider, Button, Spin} from 'antd';
import {connect} from 'react-redux';
import {fetchProfile, postProfile, profileUpdate} from '../../redux/actions/';


class SubmissionForm extends Component {
  static  data = [];

  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      product:'',
      time:''
    }
  }

  componentDidMount() {
    this.props.getProfile().then(() => {

      if (this.props.profile.length) {
        SubmissionForm.data = this.props.profile;
        console.log(SubmissionForm.data)
        const {firstname, lastname, phone, email, _id} = this.props.profile[0];
        this.setState({
          _id,
          firstname,
          lastname,
          phone,
          email

        });
      }
    });
  }

  updateStateOnInputChange = (e) => this.setState({[e.target.name]: e.target.value});

  sendForm = () => {
    const {_id, ...relevantState} = this.state;
    this.props.saveProfile(relevantState);
  }
  updateProfile = () => {
    this.props.updateProfile(this.state);
  }

  render() {

    return (
        <div>
          <Spin size="large" spinning={this.props.fetching}>
            <Row align="middle" justify="center" style={{marginTop: '10px'}}>
              <Col offset={6} span={12}>
                <h1 style={{textAlign: 'center'}}>Submission Form</h1>
                <Form.Item>
                  <Input
                      value={this.state.firstname}
                      addonBefore="First Name"
                      type="text"
                      name="firstname"
                      onChange={this.updateStateOnInputChange}
                  /> <br/>
                  <Input
                      value={this.state.lastname}
                      addonBefore="Last Name"
                      type="text"
                      name="lastname"
                      onChange={this.updateStateOnInputChange}
                  /><br/>





                  <Input
                      value={this.state.phone}
                      addonBefore="Phone"
                      type="text"
                      name="phone"
                      onChange={this.updateStateOnInputChange}
                  /><br/>



                  <Input
                      value={this.state.email}
                      addonBefore="Email"
                      type="email"
                      style={{marginTop: '5px'}}
                      name="email"
                      onChange={this.updateStateOnInputChange}
                  /><br/>
                  <Input
                      value={this.state.product}
                      addonBefore="Product"
                      type="text"
                      style={{marginTop: '5px'}}
                      name="product"
                      onChange={this.updateStateOnInputChange}
                  /><br/>

                  <Input
                      value={this.state.time}
                      addonBefore="Time"
                      type="text"
                      style={{marginTop: '5px'}}
                      name="time"
                      onChange={this.updateStateOnInputChange}
                  /><br/>


                  <Divider style={{height: '10px', marginTop: '5px', marginBottom: '0'}}/>

                  <Col offset={11} span={3} style={{marginTop: '5px'}}>
                    <Button
                        block
                        type="primary"
                        style={{margin: 'auto'}}
                        size="large"
                        onClick={this.sendForm }
                    >
                      {"Save"}
                    </Button>

                    <Button
                        block
                        type="primary"
                        style={{margin: 'auto'}}
                        size="large"
                        onClick={this.updateProfile}
                    >
                      {"Update"}
                    </Button>
                  </Col>
                </Form.Item>
              </Col>
            </Row>
          </Spin>
        </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    profile: state.profile,
    fetching: state.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => dispatch(fetchProfile()),
    saveProfile: data => dispatch(postProfile(data)),
    updateProfile: data => dispatch(profileUpdate(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionForm);
