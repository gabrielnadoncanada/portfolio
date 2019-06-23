import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <div>
               
                <input
                    type={this.props.type}
                    name={this.props.name}
                    className={this.props.className}
                    required={this.props.required}
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
                 <label htmlFor={this.props.name}>{this.props.name}*</label>
                <span className='error'>{this.props.error}</span>
            </div>
        )
    }
}
