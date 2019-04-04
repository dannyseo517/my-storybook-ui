import React, { PureComponent } from 'react';

interface IProps { text: string }

class Button extends PureComponent<IProps, {}> {
    constructor (props: IProps) {
        super (props);
    }
    
    render () {
        const { text } = this.props;
        return (
            <button>{text}</button>
        );
    }
}

export default Button;