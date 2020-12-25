import * as React from 'react';

export interface SpinProps {}

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
    const { children } = this.props;

    return (
      <div className="eh-spin">
        {this.renderRoller()}
        <div className="eh-spin-mask">{children}</div>
      </div>
    );
  }
}

export default Spin;
