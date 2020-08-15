import React from "react";
import Error from "./../shared/Error";
// import { withRouter } from "react-router-dom";
class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poll: "",
      message: "",
      // total_count: this.props
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
        {this.state.message ? <Error errors={[this.state.message]} /> : null}
        <div className="d-flex justify-content-center p-5 flex-column ">
          {/* <h3>Poll App</h3> */}
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body bg-primary text-white">
              <h5 className="card-title">
                {this.props.poll && this.props.poll.title}
                <p className="small pt-3">
                  Total Votes: {this.props && this.props.total_count}
                </p>
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              {this.props.options &&
                this.props.options.map((option, index) => {
                  return (
                    <li key={index} className="list-group-item">
                      <p className="text-primary">{option.title}</p>
                      <span>
                        Votes: <strong>{option.count}</strong>
                      </span>
                      <button
                        className="btn-success btn-sm ml-5"
                        style={{ width: "3rem" }}
                        onClick={() =>
                          this.handleClick(option.id, this.props.poll.id)
                        }
                      >
                        Vote
                      </button>
                    </li>
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
