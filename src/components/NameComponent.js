import React, { Component } from 'react';

class NameComponent extends Component {

  render() {
    const { my_hobbies } = this.props;
    return (
      <div>
          <p>{my_hobbies ? my_hobbies : 'No Hobbies. So boring.'}</p>
      </div>
    );
  }
}

export default NameComponent;
