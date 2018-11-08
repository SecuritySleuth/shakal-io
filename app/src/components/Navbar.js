import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

import { connect } from 'react-redux';
import sessionActions from '../actions/sessionActions';

class Navbar extends Component {
    state = {
        activeItem: false
    }

    handleMenuClick = (e) => {
        this.setState ({
            activeItem: !this.state.activeItem
        });
    }

    render = () => (
    <Menu
        color='blue'>
        <Menu.Item
            icon='user circle'
            name='Shakal'
            onClick={this.handleMenuClick}
            active={this.state.activeItem}
        />

        <Menu.Item
            icon='users'
            name='Online Users'
            onClick={this.props.toggleList}
        />
    </Menu>)
}

const mapDispatchToProps = dispatch => ({
    toggleList: _ => dispatch(sessionActions.TOGGLE_LIST())
});
    
export default connect(null, mapDispatchToProps)(Navbar);
    