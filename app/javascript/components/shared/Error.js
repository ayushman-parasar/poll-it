import React from "react";

class Error extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props &&
          this.props.errors.map((error) => {
            return <li className="text-danger">{error}</li>;
          })}
      </ul>
    );
  }
}

export default Error;
