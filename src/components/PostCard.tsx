import Avatar from '../assets/images/icons/avatar.png';
import { Link } from 'react-router-dom';
import { Post, Comment } from '../interfaces';

type HeaderProps = {
    render: () => JSX.Element;
};

const Header = ({ render }: HeaderProps) => {
    return (
        <div className="card-header d-flex">
            <div style={{ width: '50px' }} className="rounded-circle border border-info">
                <img src={Avatar} alt="avatar" className="w-100" />
            </div>
            <div className="d-flex flex-column ms-1">{render()}</div>
        </div>
    );
};

type BodyProps = {
    render: () => JSX.Element;
};

const Body = ({ render }: BodyProps) => {
    return (
        <div className="card-body p-0">
            <img src="https://placekitten.com/640/360" alt="post" className="w-100" />
            <div className="p-3">{render()}</div>
        </div>
    );
};

type FooterProps = {
    commentsVisible: boolean;
    comments?: Comment[];
};

const Footer = ({ comments, commentsVisible }: FooterProps) => {
    return (
        <div className="card-footer">
            {commentsVisible ? (
                comments &&
                comments?.length > 0 &&
                comments?.map((comment) => (
                    <div key={comment.id} className="d-flex align-items-center mb-2">
                        <div
                            style={{
                                minWidth: '30px',
                                minHeight: '30px',
                                maxWidth: '30px',
                                maxHeight: '30px',
                            }}
                            className="rounded-circle border border-info"
                        >
                            <img src={Avatar} alt="avatar" className="w-100" />
                        </div>
                        <div className="d-flex flex-column ms-1">
                            <span>{comment.body}</span>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-info">{`${comments?.length} Comments`}</div>
            )}
        </div>
    );
};

type PostProps = {
    post: Post;
    message?: string;
    hasLink?: boolean;
    size?: 'small' | 'big';
};

const PostCard = ({ post, message, hasLink = false, size = 'small' }: PostProps) => {
    console.log(`${message} Post Card`);
    return (
        <div className="card my-5" style={{ maxWidth: size === 'small' ? '20rem' : '30rem' }}>
            <Header
                render={() => (
                    <>
                        <span>{post.user?.name}</span>
                        <span>{post.user?.username}</span>
                    </>
                )}
            />
            <Body
                render={() => (
                    <>
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                    </>
                )}
            />
            <Footer comments={post.comments} commentsVisible={!hasLink} />
            {hasLink && <Link className="stretched-link" to={`/post/${post.id}`} />}
        </div>
    );
};

export default PostCard;
