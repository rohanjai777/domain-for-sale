import React, { Component } from "react";

class Email extends Component {
  render() {
    return (
      <div style={{ width: "50vw", padding: "10px" }} className="border">
        <div className="text-center">
          <h3>Make an offer for magicpin.co.in</h3>
          <p>
            <u>You are making a legal offer to purchase this domain.</u>
          </p>
        </div>
        <div>
          <form>
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">₹</span>
              <input type="number" class="form-control" min="700000" />
            </div>
            <div className="mb-3">
              <label for="message" className="form-label">
                Message
              </label>
              <input type="text" className="form-control" id="message" />
            </div>
            <div style={{ textAlign: "right" }}>
              <button type="submit" className="btn btn-primary btn-lg">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Email;
