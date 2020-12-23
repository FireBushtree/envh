import React from 'react';
import classnames from 'classnames';

export interface NavBarProps {
  left?: React.ReactNode | string;
  right?: React.ReactNode | string;
  onLeftClick?: () => any;
  onRightClick?: () => any;
}

const NavBar: React.FC<NavBarProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { left, right, onLeftClick, onRightClick, children, className, ...rest } = props;

  return (
    <div {...rest} className={classnames(className, 'eh-nav-bar')}>
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
