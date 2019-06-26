import React, { Component } from 'react'

export default class TextArea extends Component {
    render() {
        return (
            <div className="form-group text-left">
                <label className="mb-3" htmlFor={this.props.name}>{this.props.name}*</label>
                <textarea
                    name={this.props.name}
                    id={this.props.id}
                    required={this.props.required}
                    className={this.props.className}
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
                <span className='error'>{this.props.error}</span>
            </div>
        )
    }
}
