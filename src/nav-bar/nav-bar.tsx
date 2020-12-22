import * as React from 'react';

export interface NavBarProps {}

export interface NavBarState {
  name: string;
}

class NavBar extends React.Component<NavBarProps, NavBarState> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    const { name } = this.state;

    return (
      <div className="eh-nav-bar">
        123
        {name}
      </div>
    );
  }
}

export default NavBar;
