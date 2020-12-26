import * as React from 'react';
import classnames from 'classnames';

export interface SpinProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface SpinState {}

class Spin extends React.Component<SpinProps, SpinState> {
  renderRoller() {
    return (
      <div className="eh-spin-roller">
        <div />
      </div>
    );
  }

  render() {
    const { className, children, style } = this.props;

    return (
      <div style={style} className={classnames('eh-spin', className)}>
        {this.renderRoller()}
        <div className="eh-spin-mask">{children}</div>
      </div>
    );
  }
}

export default Spin;
