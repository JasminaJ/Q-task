import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Posts from './routes/posts';
import Post from './routes/post';
import { AppContextProvider } from './contexts/appContext';

const App = () => {
    const message = 'Hello from';

    return (
        <AppContextProvider>
            <Routes>
                <Route path="/" element={<Home message={message} />} />
                <Route path="/posts" element={<Posts message={message} />} />
                <Route path="/post/:post_id" element={<Post message={message} />} />
            </Routes>
        </AppContextProvider>
    );
};

export default App;
