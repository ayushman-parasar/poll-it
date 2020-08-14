import React from "react";
import PropTypes from "prop-types";
import Error from "./../shared/Error";
class CreatePoll extends React.Component {
  constructor() {
    super();
    this.state = {
      poll: {
        title: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
      },
      errors: "",
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      poll: {
        ...this.state.poll,
        [name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let optionsList = [
      this.state.poll.option1,
      this.state.poll.option2,
      this.state.poll.option3,
      this.state.poll.option4,
    ];
    const payload = {
      poll: {
        title: this.state.poll.title,
        options_attributes: optionsList.map((option) => ({ title: option })),
      },
    };
    console.log("sending fetch req", payload);
    fetch("/polls", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.notice) {
          console.log(res);
          window.location.href = `/polls/${res.poll.id}`;
        } else {
          console.log(res);
          this.setState({
            errors: res.errors,
          });
        }
      });
  };

  render() {
    return (
      <div className="container ">
        <div className="d-flex flex-column">
          <h1 className="text-center"> Create Poll </h1>

          <div className="row">
            <div className="col-md-4 col-bg-4 col-xs-12">
              <form className="form-container">
                <div className="form-group">
                  <label for="mid">Poll Title</label>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="title"
                    value={this.state.poll.title}
                    className="form-control"
                    placeholder="Enter the poll title"
                  />
                </div>
                <div className="form-group">
                  <label for="mdate">Options</label>
                  <input
                    type="text"
                    name="option1"
                    value={this.state.poll.option1}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Option title 1"
                  />
                  <input
                    type="text"
                    name="option2"
                    value={this.state.poll.option2}
                    onChange={this.handleChange}
                    className="form-control"
                    id="mdate"
                    placeholder="Option title 2"
                  />
                  <input
                    type="text"
                    className="form-control"
                    name="option3"
                    value={this.state.poll.option3}
                    onChange={this.handleChange}
                    placeholder="Option title 3"
                  />
                  <input
                    type="text"
                    className="form-control"
                    name="option4"
                    value={this.state.poll.option4}
                    onChange={this.handleChange}
                    placeholder="Option title 4"
                  />
                </div>
                {/* <div className="form-group">
                  <label for="mlot">MANUFACTURE LOT</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mlot"
                    placeholder=" LOT"
                  />
                </div> */}
                <button
                  onClick={this.handleSubmit}
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePoll;
