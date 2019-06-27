import React, { Component } from 'react'

export default class TextArea extends Component {
    render() {
        return (
            <div className="form-group text-left">
                <textarea
                    name={this.props.name}
                    id={this.props.id}
                    required={this.props.required}
                    className={this.props.className}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                />
                <span className='error'>{this.props.error}</span>
            </div>
        )
    }
}
