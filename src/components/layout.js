import Header from './header';
import Footer from './footer';
import Container from './container';
import 'react-bootstrap'
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
    }]
function Layout() {
    return (
        <div><Header />
            <Container value={userData} />
            <Footer /></div>
    );
}

export default Layout;
