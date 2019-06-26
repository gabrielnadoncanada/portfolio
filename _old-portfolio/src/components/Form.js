import React from 'react'
import { Link } from 'react-router'


class Form extends React.Component {
  
    render() {
        return (
            <form action="#">
                <div className="form-group">
                    <input type="text" name="firstname" id="fname" value={this.state.fname} onChange={e => this.setState({ fname: e.target.value })} required />
                    <label for="firstname">Qui etes vous?</label>
                </div>
                <div className="form-group">
                    <input type="text" name="email" id="email"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                        required />
                    <label for="email">Quelle est votre email?</label>
                </div>
                <div className="form-group">
                    <input type="text" name="textarea" id="textarea"
                        value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value })}
                        required />
                    <label for="textarea">Quel est votre message?</label>
                </div>

                <Link to="/" onClick={e => this.handleFormSubmit(e)} className="btn bg-primary">Me Contacter</Link>
                <div>
                    {this.state.mailSent &&
                        <div>Thank you for contcting us.</div>
                    }
                </div>
            </form>
        )
    }
}

export default Form