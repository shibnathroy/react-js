import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class App extends Component {


  constructor(props) {
   super(props);
   this.state = {  selectedOption: '' };
 }

 handleChange = (selectedOption) => {
    selectedOption = selectedOption ? selectedOption : '';
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  componentDidMount() {
      console.log('Mounted');
  }

  changeProfession(){
    this.setState({
        profession: 'Business Tycoon',
        hobbies: 'Sketching'
    })
  }



  greetMore(){
     console.log('Greeting more');
  }

  render() {

    const { selectedOption } = this.state;
  	const value = selectedOption && selectedOption.value;

    return (
      <div>
      <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#">
              About
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <div className="container">
           <h2>
              Hello
           </h2>
           <p> Welcome to Shibnaths App. </p>

           <Select
              name="form-field-name"
              value={value}
              onChange={this.handleChange}
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
              ]}
            />

        </div>
        </div>
    );
  }
}

export default App;
