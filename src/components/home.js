import React from 'react';
import { Button } from 'react-bootstrap';
import serializeForm from 'form-serialize'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this);
        this.username = React.createRef();
        this.password = React.createRef();
    }

    submit(event) {
        event.preventDefault();
        const data = {
            username: this.username.current.value,
            password: this.username.current.value,
        }
        // console.log(data)
        console.log(this.props)
        this.props.history.push('/about')
        // let formData = serializeForm(event.target, { hash: true });
        // console.log(formData)
    }

    render() {
        return (
            <div style={{ width: '35%' }} >
                <form onSubmit={this.submit}>
                    <div >
                        <label className="col-md-6">User Name</label>
                        <input className="col-md-6" type="text" className="form-control" ref={this.username} />
                    </div>
                    <div>
                        <label className="col-md-6">Password</label>
                        <input className="col-md-6" type="password" className="form-control" ref={this.password} />
                    </div>
                    <div className="mt-3">
                        <Button type="submit" variant="primary" >Submit</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Home