import React, { useState } from "react";

class CreateProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
      title: '',
      description: '',
      url: '',
      to: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, this.refreshMoneyButton);
  }

  refreshMoneyButton() {
    window.databutton.build({
      data: [
        "0x6d02",
        "stopplastic.app",
        this.state.image,
        this.state.title,
        this.state.description,
        this.state.url,
        this.state.to
      ],
      button: { $el: "#button" }
    });
  }

  render() {
    return (
      <div className="SectionComponent hero section is-block is-relative is-primary is-medium">
        <div className="container">
          <header className="WhyStopPlastic__header is-centered">
            <h1 className="title is-spaced has-text-weight-bold is-3">Create a Project</h1>
          </header>
          <div className="Auth">
            <form>
              <div className="field">
                <div className="control">
                  <input className="input is-medium" type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-medium" type="text" name="image" placeholder="Image" value={this.state.image} onChange={this.handleChange} />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <textarea className="textarea is-medium" type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-medium" type="text" name="url" placeholder="URL" value={this.state.url} onChange={this.handleChange} />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-medium" type="text" name="to" placeholder="To receive donations: paymail, user ID, address" value={this.state.to} onChange={this.handleChange} />
                </div>
              </div>
              <div id='button'></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProject;