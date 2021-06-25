import React from 'react';
import { Table } from 'react-bootstrap';
class Container extends React.Component {
    handleRemoveRow = (sno) => {
        console.log("id", sno)
        let rows = [this.props.value]
        rows.splice(sno, 1)

        this.setState({
            rows: rows
        })
    };
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
                {this.props.value.map((data, index) =>
                    <tbody key={index} >
                        <tr>
                            <td>{data.sno}</td>
                            <td>{data.name}</td>
                            <td>{data.city}</td>
                            <td><button onClick={() => this.handleRemoveRow(data.sno)}>Delete</button></td>
                        </tr>
                    </tbody>
                )}
            </Table>
        );
    }

}

export default Container