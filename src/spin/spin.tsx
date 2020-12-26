import * as React from 'react';
import classnames from 'classnames';

export interface SpinProps {
  className?: string;
  style?: React.CSSProperties;
  spinning?: boolean;
}

export interface SpinState {}

class Spin extends React.Component<SpinProps, SpinState> {
  static defaultProps = {
    spinning: true,
  };

  renderRoller() {
    return (
      <div className="eh-spin-roller">
        <div />
      </div>
    );
  }

  render() {
    const { className, children, style, spinning } = this.props;

    return (
      <div
        style={style}
        className={classnames('eh-spin', className, {
          'is-spinning': spinning,
        })}
      >
        {this.renderRoller()}
        <div className="eh-spin-mask">{children}</div>
      </div>
    );
  }
}

export default Spin;
