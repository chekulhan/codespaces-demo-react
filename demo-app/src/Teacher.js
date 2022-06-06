import React, {Component} from 'react';

class Teacher extends React.Component {
    render() {
      return (
        <div className="teacher">
        <h1>I am Mr or Mrs {this.props.name}</h1>
        </div>
      );
    }
  }

export default Teacher;