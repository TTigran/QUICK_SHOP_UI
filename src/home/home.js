import React from 'react';
import './home.css';



class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (event) => {
    alert();
    event.preventDefault();
    console.log(this.state);
    this.props.login(this.state).then((data) => {
      console.log(data, "++++++")
    });
  }


  // isShow = () => {
  //   this.setState({isShow: !this.state.isShow});
  // }
  // getLanguage = (language) => {
  //   alert(language)
  //   this.setState({language: language})
  // }

  render() {
    return (
        <div className="container">
          <h1>TO DO  Home</h1>
        </div>
    );
  }
}



export default Home;
