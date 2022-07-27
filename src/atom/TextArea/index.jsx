import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import autosize from "autosize";
import getLineHeight from "line-height";
import "./styles.scss";

export class TextCustom extends Component {
  state = {
    lineHeight: null,
  };

  constructor(props, defaultProps) {
    super(props, defaultProps);

    this.textarea = createRef();
  }
  componentDidMount() {
    const { maxRows } = this.props;
    const { current } = this.textarea;
    if (typeof maxRows === "number") {
      this.updateLineHeight();
    }

    if (typeof maxRows === "number") {
      setTimeout(() => autosize(current));
    } else {
      autosize(current);
    }
  }

  updateLineHeight = () => {
    this.setState({
      lineHeight: getLineHeight(this.textarea.current),
    });
  };

  render() {
    const { children, maxRows, ...props } = this.props;
    const { lineHeight } = this.state;
    const maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null;
    const locals = {
      ...props,
      style: maxHeight ? { maxHeight } : null,
    };

    return (
      <textarea className="custom-textarea" {...locals} ref={this.textarea}>
        {children}
      </textarea>
    );
  }
}

Text.defaultProps = {
  rows: 1,
};

Text.propTypes = {
  rows: PropTypes.number,
  maxRows: PropTypes.number,
};

