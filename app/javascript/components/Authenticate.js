import React, { Component } from "react";
import { Link } from "react-router-dom";

class Authenticate extends Component {
  constructor() {
    super();
    this.state = {
      polls: "",
    };
  }
  componentDidMount() {
    fetch("/api/v1/result", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          polls: res.polls,
        })
      );
  }
  render() {
    return (
      <div>
        <div className="slice mt-5">
          <div className="container mt-5">
            <div className="row row-grid align-items-center">
              <div className="col-12 col-md-5 col-lg-6 order-md-2 text-center">
                <figure className="w-100">
                  <svg
                    width="1350px"
                    height="1140px"
                    viewBox="0 0 1350 1140"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="img-fluid mw-md-120"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="development-(1)">
                        <line
                          x1="1064.4"
                          y1="1137.6"
                          x2="1347.8"
                          y2="1137.6"
                          id="Path"
                          stroke="#CED5E5"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></line>
                        <line
                          x1="481.3"
                          y1="1127.4"
                          x2="731.3"
                          y2="1127.4"
                          id="Path"
                          stroke="#CED5E5"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></line>
                        <polygon
                          id="Path"
                          fill="#CED5E5"
                          fillRule="nonzero"
                          points="308.5 1038.3 308.5 1038.3 308.5 912.6 260.2 912.6 260.2 1038.3 127 1073 127 1091.5 284.4 1073 441.7 1091.5 441.7 1073"
                        ></polygon>
                        <path
                          d="M477.6,1003 L464.4,1046.4 C464.4,1046.4 469.9,1069.8 490.8,1069.6 C511.7,1069.4 508.4,1061.9 508.4,1061.9 L529.7,1009.1 L477.6,1003 Z"
                          id="Path"
                          fill="#FFDFD7"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M466.6,1039.5 C466.6,1039.5 463.1,1039.6 460.3,1046.7 C457.5,1053.8 446.4,1079.2 446.4,1079.2 L511.6,1119.4 L579.7,1125.6 C579.7,1125.6 591.3,1119.5 583.1,1106.9 C574.9,1094.4 533.9,1081.5 533.9,1081.5 L512.4,1055.1 C512.4,1055.1 499,1057.7 484.8,1052.7 C470.5,1047.8 466.6,1039.5 466.6,1039.5 Z"
                          id="Path"
                          fill="#FE8163"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M400.7,108.4 C400.7,108.4 363.8,251 473.2,356 C582.6,461 718,480.5 734.2,559.6 C750.4,638.7 724.2,728.7 674.6,796 C624.9,863.3 548.9,952.9 674.6,1003.1 C800.3,1053.3 920.3,1016.3 988.9,951.7 C1057.5,887.1 1069.4,802.2 1002.1,729.3 C934.8,656.3 925.6,635.2 958.6,521.8 C991.6,408.4 1007.4,353 895.3,331.9 C783.2,310.8 697,391.2 639.2,226.4 C581.4,61.6 547.1,-21.7 479.8,6 C412.6,33.7 400.7,108.4 400.7,108.4 Z"
                          id="Path"
                          fill="#F1F2F7"
                          fillRule="nonzero"
                        ></path>
                        <polygon
                          id="Path"
                          fill="#CED5E5"
                          fillRule="nonzero"
                          points="1219.1 939.3 1193.1 939.3 1199.3 719.5 1212.9 719.5"
                        ></polygon>
                        <polygon
                          id="Path"
                          fill="#A5ACBA"
                          fillRule="nonzero"
                          points="695.3 1073.8 674.6 1073.8 653.9 1073.8 546.5 1104 546.5 1114.2 674.6 1114.2 802.7 1114.2 802.7 1104"
                        ></polygon>
                        <path
                          d="M317.1,458.4 C317.1,458.4 332.6,409.1 332.8,408.2 C333.1,407.3 315.5,365.1 326.4,342 C337.2,318.8 361.6,321.2 371.2,321.5 C380.9,321.8 413.4,329.7 411.9,350.2 C410.4,370.7 402.8,410.9 395.2,421.1 C387.6,431.3 353.3,418.5 353.3,418.5 L352.8,454 L317.1,458.4 Z"
                          id="Path"
                          fill="#FFDFD7"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M505.9,1023.1 L505.6,1063 C505.6,1063 518.6,1083.8 527.6,1084 C536.5,1084.1 555.1,1088.2 559.3,1064.9 C563.4,1041.6 566.8,1024.6 566.8,1024.6 L505.9,1023.1 Z"
                          id="Path"
                          fill="#FFDFD7"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M121.8,844 C121.8,844 97.8,726.5 94.3,663.2 C90.8,599.9 97.8,533.1 140,530.4 C182.2,527.8 213,599 218.3,627.1 C223.5,655.3 241.7,781.3 121.8,844 Z"
                          id="Path"
                          fill="#52CB96"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M144,862.8 C144,862.8 126.4,862.4 127.3,879.1 C128.2,895.8 135.2,912.5 195.9,916 C256.6,919.5 389.8,910.7 415.7,903.3 C441.6,895.8 457,880.4 432,854.5 C406.9,828.6 277.7,844.4 247.4,847.5 C216.9,850.5 144,862.8 144,862.8 Z"
                          id="Path"
                          fill="#52CB96"
                          fillRule="nonzero"
                        ></path>
                        <circle
                          id="Oval"
                          fill="#283444"
                          fillRule="nonzero"
                          cx="435.6"
                          cy="1116.6"
                          r="18.5"
                        ></circle>
                        <circle
                          id="Oval"
                          fill="#283444"
                          fillRule="nonzero"
                          cx="137.3"
                          cy="1116.6"
                          r="18.5"
                        ></circle>
                        <path
                          d="M709.1,698.4 L640.1,698.4 C636.2,698.4 633,695.2 633,691.3 L633,665 L716.1,665 L716.1,691.3 C716.1,695.2 713,698.4 709.1,698.4 Z"
                          id="Path"
                          fill="#CED5E5"
                          fillRule="nonzero"
                        ></path>
                        <rect
                          id="Rectangle"
                          fill="#CED5E5"
                          fillRule="nonzero"
                          x="653.9"
                          y="698.4"
                          width="41.3"
                          height="375.4"
                        ></rect>
                        <polygon
                          id="Path"
                          fill="#CED5E5"
                          fillRule="nonzero"
                          points="889.1 665 460.1 665 460.1 650 889.1 633.3"
                        ></polygon>
                        <path
                          d="M412.2,744.1 C412.2,744.1 526.5,748.5 553.5,754.9 C580.5,761.3 595.5,775.9 594.2,803.2 C592.9,830.5 514.9,1012.2 514.9,1012.2 L468.6,1005.8 L489.7,863.4 L412.2,744.1 Z"
                          id="Path"
                          fill="#006FCE"
                          fillRule="nonzero"
                        ></path>
                        <polygon
                          id="Path"
                          fill="#00549C"
                          fillRule="nonzero"
                          points="465.6 983.2 516.2 991.1 511.8 1016.7 461.6 1009"
                        ></polygon>
                        <path
                          d="M505.6,1063 C505.6,1063 498.4,1065.8 499,1073.8 C499.6,1081.8 501.3,1116.9 501.3,1116.9 C501.3,1116.9 500,1127.6 525,1127.5 C550.1,1127.4 656.6,1126.3 656.6,1126.3 C656.6,1126.3 664.8,1113.7 652.5,1104.3 C640.2,1094.9 559.5,1063 559.5,1063 C559.5,1063 550.5,1070.9 531.5,1071.1 C512.5,1071.2 505.6,1063 505.6,1063 Z"
                          id="Path"
                          fill="#FE8163"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M332,410.9 C332,410.9 315.4,388.6 317.1,359.3 C318.8,330 320.2,310.4 334.6,305.7 C349,301 354.8,309.8 354.8,309.8 C354.8,309.8 367.7,300.1 382.3,301.3 C397,302.5 399.9,321.3 399.9,321.3 C399.9,321.3 409,313 419.8,316.2 C430.6,319.4 423.1,340.2 411.9,339.4 C411.9,339.4 391.6,337.3 368.2,341.5 L362.3,368.2 L353.8,366.7 C353.8,366.7 357.3,352 349.1,350.3 C340.9,348.5 333.6,358.2 338,369.9 C342.4,381.6 340.6,400.6 332,410.9 Z"
                          id="Path"
                          fill="#FE8163"
                          fillRule="nonzero"
                        ></path>
                        <polygon
                          id="Path"
                          fill="#575758"
                          fillRule="nonzero"
                          points="638.6 643.4 638.6 634.1 806 624.1 807.1 636.8"
                        ></polygon>
                        <polygon
                          id="Path"
                          fill="#6C7279"
                          fillRule="nonzero"
                          points="793.8 624.9 856.4 472 866.8 476.4 806.5 630"
                        ></polygon>
                        <rect
                          id="Rectangle"
                          fill="#008AFF"
                          fillRule="nonzero"
                          transform="translate(785.689805, 205.079925) rotate(45.000000) translate(-785.689805, -205.079925) "
                          x="778.639873"
                          y="180.480161"
                          width="14.0998648"
                          height="49.1995282"
                        ></rect>
                        <rect
                          id="Rectangle"
                          fill="#FFC933"
                          fillRule="nonzero"
                          transform="translate(180.344040, 159.458700) rotate(-37.589552) translate(-180.344040, -159.458700) "
                          x="173.294048"
                          y="134.858728"
                          width="14.0999842"
                          height="49.1999449"
                        ></rect>
                        <rect
                          id="Rectangle"
                          fill="#FFC933"
                          fillRule="nonzero"
                          transform="translate(62.502575, 410.827095) rotate(25.486254) translate(-62.502575, -410.827095) "
                          x="55.4524854"
                          y="386.226783"
                          width="14.1001789"
                          height="49.2006243"
                        ></rect>
                        <rect
                          id="Rectangle"
                          fill="#FFC933"
                          fillRule="nonzero"
                          transform="translate(943.956297, 220.302470) rotate(2.148641) translate(-943.956297, -220.302470) "
                          x="936.906275"
                          y="195.702394"
                          width="14.1000434"
                          height="49.2001514"
                        ></rect>
                        <circle
                          id="Oval"
                          fill="#008AFF"
                          fillRule="nonzero"
                          cx="13.4"
                          cy="248.2"
                          r="13.2"
                        ></circle>
                        <circle
                          id="Oval"
                          fill="#FFC933"
                          fillRule="nonzero"
                          cx="777.3"
                          cy="74.9"
                          r="10.3"
                        ></circle>
                        <circle
                          id="Oval"
                          fill="#008AFF"
                          fillRule="nonzero"
                          cx="639.2"
                          cy="28.2"
                          r="14.7"
                        ></circle>
                        <polygon
                          id="Path"
                          fill="#FFC933"
                          fillRule="nonzero"
                          points="1296 1136.2 1116.2 1136.2 1085.2 933.1 1327 933.1"
                        ></polygon>
                        <circle
                          id="Oval"
                          fill="#52CB96"
                          fillRule="nonzero"
                          cx="1206.1"
                          cy="623.3"
                          r="110.8"
                        ></circle>
                        <circle
                          id="Oval"
                          fill="#008AFF"
                          fillRule="nonzero"
                          cx="235.1"
                          cy="18.6"
                          r="12.6"
                        ></circle>
                        <path
                          d="M236.8,729.1 C236.8,729.1 229.3,742.3 231.3,772.6 C233.3,802.9 250.4,849.5 347.8,859.2 C445.2,868.9 507.2,868 507.2,868 L507.2,1029.3 L571.4,1029.3 C571.4,1029.3 582,972.6 584.6,954.1 C587.2,935.6 605.7,855.2 597.8,814.7 C593.999489,795.264477 583.070769,783.744043 569.623244,776.431134 C555.117831,768.542933 537.681727,765.55029 523.1,762.8 C495,757.5 385.9,739.5 385.9,739.5 L236.8,729.1 Z"
                          id="Path"
                          fill="#008AFF"
                          fillRule="nonzero"
                        ></path>
                        <line
                          x1="505.8"
                          y1="1033.5"
                          x2="505.6"
                          y2="1063"
                          id="Path"
                          stroke="#FFFFFF"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></line>
                        <polygon
                          id="Path"
                          fill="#005297"
                          fillRule="nonzero"
                          points="578.2 1033.5 498.4 1033.5 498.4 1003 583.3 1004.2"
                        ></polygon>
                        <path
                          d="M501.2,1112.9 C501.2,1112.9 498.7,1077.5 499.1,1071.3 C499.6,1065.1 505.6,1062.9 505.6,1062.9"
                          id="Path"
                          stroke="#FF562F"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M694.7,626.4 C679.6,618.5 654.4,621.9 646,623.2 C637.6,624.5 624.8,624.7 624.8,624.7 L493.7,611.9 L440.4,553.2 C398.2,562.9 415.9,595.4 415.9,595.4 L473.6,649.2 L627.1,644 C647.9,644.7 674.3,635.8 678.4,635.1 C682.6,634.3 709.8,634.3 694.7,626.4 Z"
                          id="Path"
                          fill="#FFDFD7"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M230.1,727.4 C230.1,727.4 271.4,739.3 299.6,737.1 C327.7,734.9 385.8,739.7 385.8,739.7 L385.8,566.9 L421.8,613.4 C421.8,613.4 441.1,572.1 460,557.1 C460,557.1 388.8,475 362.4,458.8 C336,442.5 314.5,454.8 309.2,469.4 C304,483.8 230.1,727.4 230.1,727.4 Z"
                          id="Path"
                          fill="#FFC933"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M374.7,553.2 L421.8,613.4 C421.8,613.4 440.6,572.7 460,557.1"
                          id="Path"
                          stroke="#FEAC00"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <line
                          x1="385.8"
                          y1="566.9"
                          x2="385.8"
                          y2="739.7"
                          id="Path"
                          stroke="#FEAC00"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></line>
                      </g>
                    </g>
                  </svg>
                </figure>
              </div>
              <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
                {this.props.current_user ? (
                  <h1 className="display-4 text-center text-md-left mb-3">
                    Welcome{" "}
                    <strong className="text-primary">
                      {this.props.current_user.name}
                    </strong>
                  </h1>
                ) : (
                  <h1 className="display-4 text-center text-md-left mb-3">
                    Create your own{" "}
                    <strong className="text-primary">
                      <a href="/polls/new">POLL</a>
                    </strong>
                  </h1>
                )}

                {/* <p className="lead text-center text-md-left text-muted">
                  Learn programming exclusively online and improve your
                  technical skills
                </p> */}
                {this.props.current_user ? (
                  <div className="text-center text-md-left mt-5">
                    <div className="row">
                      <a href="/polls/new" className="col">
                        <button className="btn-inner--text btn btn-sm p-2 btn-primary btn-block">
                          Create Poll
                        </button>
                      </a>
                      {/* <a href="/polls" className="col">
                        <button className="btn-inner--text btn btn-sm p-2 btn-success btn-block">
                          See all Polls
                        </button>
                      </a> */}
                      {/* <button
                        onClick={this.handleClick}
                        className="btn-inner--text btn btn-sm p-2 btn-warning btn-block"
                      >
                        See All Polls
                      </button> */}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-md-left mt-5">
                    <div className="row">
                      <a href="/signup" className="col">
                        <button className="btn-inner--text btn btn-sm p-2 btn-primary btn-block">
                          Sign Up
                        </button>
                      </a>
                      <a href="/login" className="col">
                        <button className="btn-inner--text btn btn-sm p-2 btn-success btn-block">
                          Login
                        </button>
                      </a>
                    </div>
                    <div className="row p-5">
                      {/* <a href="/polls" className="col"> */}
                      {/* <button
                        onClick={this.handleClick}
                        className="btn-inner--text btn btn-sm p-2 btn-warning btn-block"
                      >
                        See All Polls
                      </button> */}
                      {/* </a> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <ul className="list-group pb-5">
          {this.state.polls ? (
            this.state.polls.map((poll, index) => {
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
      </div>
    );
  }
}

export default Authenticate;
