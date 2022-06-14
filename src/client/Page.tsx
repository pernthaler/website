import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Meta, setMeta } from "../common/store";
import "./assets/styles/Font.less";
import "./assets/styles/Page.less";

class Page extends React.Component<{ children: React.ReactNode, setMeta?: (meta: Meta) => void, id?: string, meta: Meta}, unknown> {
  constructor(props) {
    super(props);
    this.props.setMeta({
      title: this.props.meta.title,
      description: this.props.meta.description,
      status: this.props.meta.status
    });
  }
  render() {
    return (
      <div id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setMeta: meta => dispatch(setMeta(meta))
  };
}

export default connect(null, mapDispatchToProps)(Page);