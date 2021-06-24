import React from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="./assets/logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand className="justify-content-center">React Bootstrap</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}
export default Header