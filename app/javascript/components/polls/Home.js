import React from "react";
import PropTypes from "prop-types";
import { Link, BrowserRouter as Router } from "react-router-dom";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      polls: "",
    };
  }

  // componentDidMount() {
  //   fetch("/api/v1/polls", {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         polls: res.polls,
  //       });
  //       // console.log(res, "all polls ");
  //     });
  // }
  render() {
    return (
      <React.Fragment>
        <h1>All Polls</h1>
        <ul className="list-group">
          {this.props.polls ? (
            this.props.polls.map((poll, index) => {
              return (
                // <div classNameName="d-flex ">

                //   <a href={`/polls/${poll.id}`}>{poll.title}</a>
                //   <span>Votes: {poll.users.length}</span>
                // </div>
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <a href={`/polls/${poll.id}`}>{poll.title}</a>
                  <span className="badge badge-primary badge-pill">
                    Votes: {poll.users.length}
                  </span>
                </li>
              );
            })
          ) : (
            <h2>No Polls Made Yet</h2>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
