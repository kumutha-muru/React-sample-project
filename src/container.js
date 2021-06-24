import React from 'react';
import { Table } from 'react-bootstrap';
// const userData = [
//     {
//         sno: '1',
//         name: 'karthi',
//         city: 'madurai'
//     },
//     {
//         sno: '2',
//         name: 'kavitha',
//         city: 'madurai'
//     }
// ];
class Container extends React.Component {
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
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>karthi</td>
                        <td>madurai</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>kavitha</td>
                        <td>madurai</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default Container