import './NotFoundScreen.css';
import { Link } from 'react-router-dom';

function NotFoundScreen() {
    return (
        <div>
            <h1>Page Not Found</h1>
        <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default NotFoundScreen;