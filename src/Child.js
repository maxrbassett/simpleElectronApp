import React from 'react';

export default class Child extends React.Component {
    render() {
        return (
            <div className="text-right">
                <h1>Hello v1.0.4 World!</h1>
                <p className="ml-4">{"Welcome to your " + this.props.type + "appliation."}</p>
            </div>
        )
    }
}