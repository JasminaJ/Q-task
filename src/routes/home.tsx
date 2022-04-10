import { Link } from 'react-router-dom';
import Qlogo from '../assets/images/q-logo.svg';

type HomeProps = {
    message?: string;
};

const Home = ({ message }: HomeProps) => {
    console.log(`${message} Home Page`);

    return (
        <div
            id="home"
            className="d-flex flex-column align-items-center justify-content-center text-white"
        >
            <img className="logo-img" src={Qlogo} alt="logo" />
            <p className="my-3">Hello Q World</p>
            <p>
                Feel free to go to{' '}
                <Link role="link" to="/posts">
                    posts
                </Link>{' '}
                :)
            </p>
        </div>
    );
};

export default Home;
