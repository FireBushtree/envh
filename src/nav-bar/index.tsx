import * as React from 'react';
import './index.less';
import classNames from 'classnames';

export type NavBarProps = {
  left?: string | React.ReactNode;
  right?: string | React.ReactNode;
  onLeftClick?: () => any;
  onRightClick?: () => any;
} & React.HTMLAttributes<HTMLDivElement>;

const NavBar: React.FC<NavBarProps> = (props) => {
  const { left, right, onLeftClick, onRightClick, children, className, ...rest } = props;

  return (
    <div {...rest} className={classNames(className, ['eh-nav-bar'])}>
      <div className="eh-nav-bar-action" onClick={onLeftClick}>
        {left}
      </div>
      <div className="eh-nav-bar-content">{children}</div>
      <div className="eh-nav-bar-action" onClick={onRightClick}>
        {right}
      </div>
    </div>
  );
};

NavBar.defaultProps = {
  left: <img className="eh-nav-bar-back" src={require('./images/arrow-left.png')} alt="left" />,
};

export default NavBar;
