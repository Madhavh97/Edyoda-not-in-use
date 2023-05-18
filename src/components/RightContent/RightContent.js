import React, { useState } from "react";
import Razorpay from "../../assets/razorpay.svg";
import Limited from "../../assets/limited.svg";

const RightContent = () => {
  const [selection, setSelection] = useState(12);

  const onHandleSelectionChange = (value) => {
    setSelection(value);
  };

  return (
    <div className="right-content">
      <div className="panel">
        <div className="steps-container">
          <div>
            <span className="steps">1</span>
            <div>Sign Up</div>
          </div>
          <div>
            <span className="steps">2</span>
            <div>Subscribe</div>
          </div>
        </div>
        <h3>Select your subcription plan</h3>
        <div>
          <div
            className="price-card"
            style={{ border: "2px solid #BEBEBE", background: "#E7E7E7" }}
          >
            <label class="checbox-container">
              <div>
                <div className="offer-expired-label">Offer expired</div>
                <b>12 Months Subscription</b>
                <input disabled={true} type="radio" name="radio" />
                <span className="checkmark"></span>
              </div>
              <div>
                <div>
                  Total <b>&#8377;99</b>
                </div>
                <div>&#8377;8 / mo</div>
              </div>
            </label>
          </div>
          <div
            className="price-card"
            onClick={() => onHandleSelectionChange(12)}
            style={
              selection === 12
                ? { border: "2px solid #47BA68", background: "#D7EDDD" }
                : {}
            }
          >
            <label className="checbox-container">
              <div>
                <div className="recommended-label">Recommended</div>
                <b>12 Months Subscription</b>
                <input type="radio" checked={selection === 12} name="radio" />
                <span className="checkmark"></span>
              </div>
              <div>
                <div>
                  Total <b>&#8377;179</b>
                </div>
                <div>&#8377;15 / mo</div>
              </div>
            </label>
          </div>
          <div
            className="price-card"
            onClick={() => onHandleSelectionChange(6)}
            style={
              selection === 6
                ? { border: "2px solid #47BA68", background: "#D7EDDD" }
                : {}
            }
          >
            <label className="checbox-container">
              <div>
                <b>6 Months Subscription</b>
                <input checked={selection === 6} type="radio" name="radio" />
                <span className="checkmark"></span>
              </div>
              <div>
                <div>
                  Total <b>&#8377;149</b>
                </div>
                <div>&#8377;25 / mo</div>
              </div>
            </label>
          </div>
          <div
            className="price-card"
            onClick={() => onHandleSelectionChange(3)}
            style={
              selection === 3
                ? { border: "2px solid #47BA68", background: "#D7EDDD" }
                : {}
            }
          >
            <label className="checbox-container">
              <div>
                <b>3 Months Subscription</b>
                <input checked={selection === 3} type="radio" name="radio" />
                <span className="checkmark"></span>
              </div>
              <div>
                <div>
                  Total <b>&#8377;99</b>
                </div>
                <div>&#8377;33 / mo</div>
              </div>
            </label>
          </div>
        </div>
        <hr style={{ margin: "1.5rem 0 0.5rem 0" }}></hr>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.2rem 1rem",
          }}
        >
          <span>Subscription Fee</span>
          <span>
            <b>&#8377;18,500</b>
          </span>
        </div>
        <div
          className="price-card limited-time-offer"
          style={{ marginTop: "1rem" }}
        >
          <div>
            <div>
              <b>Limited time offer</b>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.5rem 1rem",
              }}
            >
              <img
                style={{
                  marginRight: "0.5rem",
                  marginLeft: "-1rem",
                  height: "1.3rem",
                }}
                src={Limited}
              />

              <span>Offer valid till 25th March 2023</span>
            </div>
          </div>
          <b style={{ color: "black" }}>-&#8377;18,401</b>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "1rem",
            paddingTop: "0.1rem",
            paddingRight: "1rem",
          }}
        >
          <span>
            <b>Total</b> (Incl. of 18% GST)
          </span>
          <span>
            <b>&#8377;149</b>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <button className="form-buttons">CANCEL</button>
          <button className="form-buttons">PROCEED TO PAY</button>
        </div>
        <img style={{ marginTop: "2rem" }} src={Razorpay} />
      </div>
    </div>
  );
};

export default RightContent;
