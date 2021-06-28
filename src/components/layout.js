import React from 'react';
import Header from './header';
import Footer from './footer';
import Container from './container';

const userData = [
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

class Layout extends React.Component {

    handleAddRow() {
        let a = userData;
        a.push({
            sno: '5',
            name: 'skumar',
            city: 'madurai'
        });
        this.setState({
            a: a
        })
    }
    render() {
        return (
            <div><Header />
                <button onClick={() => this.handleAddRow()}>Add</button>
                <Container value={userData} />
                <Footer /></div >
        );
    }
}

export default Layout;
