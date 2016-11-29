import React, {Component} from 'react';
import WindowWidth from '../helpers/WindowWidth';
import Burger from './Burger';


class Layout extends Component {
    render() {
        const {windowWidth, children, sidebar} = this.props;
        console.log(this.props);
        const sidepanel = sidebar ? ( <aside className='sidebar'>{sidebar}</aside>):null;
        return (
            <div>
                {windowWidth>768 ? sidepanel : (<Burger sidebar='sidebar'></Burger>)}
                <div className='content'>{children }</div>
            </div>
        );
    }
}

export default WindowWidth(Layout);