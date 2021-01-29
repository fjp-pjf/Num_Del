import React, { Component } from 'react';
import './NumberItem.css';

class NumberItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.props.remove(this.props.value);
    }
    render(){
        return(
            <div className="NumberItem">
                <li>
                    <h3>{this.props.value} <button 
                    onClick={this.handleClick}>-</button></h3>
                </li>
            </div>
        );
    }
}

export default NumberItem;