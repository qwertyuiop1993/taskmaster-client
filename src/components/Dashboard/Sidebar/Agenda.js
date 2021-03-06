import React, { Component } from "react";
import { Menu, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as actions from "actions";

class Agenda extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired, // id reference to the Project Id for fetching todos
  }

  handleClick = () => {
    this.props.setCurrentProject({ _id: "Agenda", name: "Agenda", color: "teal", image: "background6" });
    // action creator that gets todos that have a duedate
    this.props.fetchTodosByDueDate();
  }

  render() {
    return (
      <Menu.Item
        name={this.props.name}
        active={this.props.currentProject._id === this.props._id}
        onClick={this.handleClick}
      >
        <div className="project-contents">
        {this.props.name}
        <Label circular style={{ marginRight: "12px" }}>
          {this.props.numOfTodos}
        </Label>
        </div>
      </Menu.Item>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    numOfTodos: state.projectCounts[ownProps._id]
  }
};
export default connect(mapStateToProps, actions) (Agenda);
