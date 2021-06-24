import Header from './header';
import Footer from './footer';
import Container from './container';
import 'react-bootstrap'
function Layout() {
    return (
        <div><Header />
            <Container />
            <Footer /></div>
    );
}

export default Layout;
