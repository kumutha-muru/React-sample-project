import React from 'react';
import { Table } from 'react-bootstrap';
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        const { value } = this.props;
        this.setState({
            users: value
        })

    }

    removeRow = index => {
        const { users } = this.state;
        users.splice(index, 1)
        this.setState({
            users
        })
    };

    componentWillReceiveProps = nextProps => {
        if (this.props.users != nextProps.users) {
            this.setState({
                users: nextProps.users
            })
        }
    }
    render() {
        const { users } = this.state;
        return (
            <Table striped bordered hover className="w-50">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                {users.length > 0 && users.map((data, index) =>
                    <tbody key={index} >
                        <tr>
                            <td>{data.sno}</td>
                            <td>{data.name}</td>
                            <td>{data.city}</td>
                            <td><button onClick={() => this.removeRow(index)}>Delete</button></td>
                        </tr>
                    </tbody>
                )}
            </Table>
        );
    }

}

export default Container