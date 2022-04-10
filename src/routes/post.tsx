import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { AppContext } from '../contexts/appContext';
import { Link } from 'react-router-dom';

type PostProps = {
    message?: string;
};

const Post = ({ message }: PostProps) => {
    console.log(`${message} Post Page`);
    const { post_id } = useParams();
    const posts = useContext(AppContext);
    const post = posts.find(({ id }) => id === Number(post_id));

    return post ? (
        <div className="p-5">
            <Link to="/posts">Go Back</Link>
            <div className="d-flex align-items-center justify-content-center">
                <PostCard post={post} size="big" message={message} />
            </div>
        </div>
    ) : (
        <div className="p-5 text-info">
            {posts.length > 0 ? 'Sorry, no post was found...' : 'Loading...'}
        </div>
    );
};

export default Post;
