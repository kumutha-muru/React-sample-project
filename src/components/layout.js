import React from 'react';
import Header from './header';
import Footer from './footer';
import Container from './container';

class Layout extends React.Component {
    constructor(props) {
        super(props)
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
                },
                {
                    sno: '3',
                    name: 'sasi',
                    city: 'madurai'
                }, {
                    sno: '4',
                    name: 'kumar',
                    city: 'madurai'
                }]
        }
    }
    addRow() {
        let userData = this.state.userData
        userData.push({
            sno: '5',
            name: 'skumar',
            city: 'madurai'
        })
        this.setState({
            userData
        });

    }
    render() {
        return (
            <div><Header />

                <div>
                    <button onClick={() => this.addRow()}>Add</button></div>

                <Container value={this.state.userData} />
                <Footer /></div >
        );
    }
}

export default Layout;
