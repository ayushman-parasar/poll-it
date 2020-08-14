import React from "react";

// import { withRouter } from "react-router-dom";
class Poll extends React.Component {
  constructor() {
    super();
    this.state = {
      poll: "",
      message: "",
    };
  }
  handleClick = (option_id, poll_id) => {
    const payload = {
      vote: {
        option_id,
        poll_id,
      },
    };
    if (this.props.current_user) {
      fetch("/votes", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.notice == "You have already voted") {
            this.setState({
              message: data.notice,
            });
          } else {
            window.location.href = `/polls/${this.props.poll.id}`;
          }
        });
    } else {
      window.location.href = "/login";
    }
  };
  componentDidMount() {
    // fetch(`/api/v1/polls/${this.props.match.params.id}`, {
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) =>
    //     this.setState({
    //       poll: res.poll,
    //     })
    //   );
  }
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center p-5 flex-column">
          <h3>Poll App</h3>
          <div className="card p-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                {this.props.poll && this.props.poll.poll_title}
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              {this.props.options &&
                this.props.options.map((option, index) => {
                  return (
                    <>
                      <li key={index} className="list-group-item">
                        <p>{option.title}</p>
                        <span>
                          Votes: <strong>{option.count}</strong>
                        </span>
                      </li>
                      <button
                        onClick={() =>
                          this.handleClick(option.id, this.props.poll.id)
                        }
                      >
                        Vote
                      </button>
                    </>
                  );
                })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Poll;
