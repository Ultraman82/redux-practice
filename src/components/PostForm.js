import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store_id: "",
      price: "",
      name: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      name: this.state.name,
      price: this.state.price,
      store_id: this.state.store_id
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name</label>
            <br />
            <input
              type="text"
              onChange={this.onChange}
              name="name"
              value={this.state.name}
            />
          </div>
          <div>
            <label>Price</label>
            <br />
            <input
              type="text"
              onChange={this.onChange}
              name="price"
              value={this.state.price}
            />
          </div>
          <br />
          <div>
            <label>Store_id</label>
            <br />
            <textarea
              name="store_id"
              onChange={this.onChange}
              value={this.state.store_id}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
        <button onClick>Adit</button>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};
export default connect(
  null,
  { createPost }
)(PostForm);
