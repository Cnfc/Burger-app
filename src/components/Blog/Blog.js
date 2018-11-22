import React, {Component} from 'react';

// import classes from './Modal.css'


class Modal extends Component {

    render() {
        return (
            <Aux>
                <div> 
                
                    {this.props.children}
                </div>
            </Aux>
        )
    }
};

export default Modal;