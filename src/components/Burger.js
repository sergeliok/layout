import React, {Component} from 'react';

class Burger extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPanelVisible : false
        }
    }
    
    componentDidMount() {
      window.addEventListener('click', this.handleClickOutside);
    }
    componentWillUnmount() {
      window.removeEventListener('click', this.handleClickOutside);
    }
    handleClickOutside = (event) => {
      if (!this.refs.burger_panel.contains(event.target) ) {
          this.hideMenu();
        }  
    }
    hideMenu = () =>{
        if(this.state.isPanelVisible){
            console.log('avas');
            this.setState({
                ...this.state, 
                isPanelVisible: false   
            })
        }
    }
    tooggleMenu = () => {
        this.setState({ 
            ...this.state, 
            isPanelVisible: !this.state.isPanelVisible
        }); 
    }
    render() {
        console.log(this.state)
        const {isPanelVisible} = this.state;
        return (
            <div ref='burger_panel'>
                 <button className='btn-menu' onClick={this.tooggleMenu}>btn burge</button>
                 {isPanelVisible ? <div className='side_menu'>{this.props.sidebar}</div> : null}
            </div>
        );
    }
}

export default Burger;