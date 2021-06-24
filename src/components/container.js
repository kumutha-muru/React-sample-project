import React from 'react';
import { Table } from 'react-bootstrap';
class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: [
                {
                    sno: '1',
                    name: 'karthi',
                    city: 'madurai'
                },
                {
                    sno: '2',
                    name: 'kavitha',
                    city: 'madurai'
                }]
        };
    }
    render() {
        return (
            <Table striped bordered hover className="w-50">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                {this.state.userData.map((data, mykey) =>
                    <tbody key={mykey} >
                        <tr>
                            <td>{data.sno}</td>
                            <td>{data.name}</td>
                            <td>{data.city}</td>
                        </tr>
                    </tbody>
                )}
            </Table>
        );
    }

}

export default Container