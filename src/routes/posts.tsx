import { useContext, useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import SearchInput from '../components/SearchInput';
import { AppContext } from '../contexts/appContext';
import { Post } from '../interfaces';

type PostsProps = {
    message?: string;
};

const Posts = ({ message }: PostsProps) => {
    console.log(`${message} Posts Page`);
    const posts = useContext(AppContext);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

    useEffect(() => {
        posts.length > 0 && setFilteredPosts(posts);
    }, [posts]);

    const filterPosts = (e: string) => {
        const tempPosts: Post[] = [];
        posts.forEach((post) => {
            const nameToLowerCase = post.user?.name.toLowerCase();
            const usernameToLowerCase = post.user?.username.toLowerCase();
            const searchQueryToLowerCase = e.toLowerCase();
            if (
                nameToLowerCase?.includes(searchQueryToLowerCase) ||
                usernameToLowerCase?.includes(searchQueryToLowerCase)
            ) {
                tempPosts.push(post);
            }
        });
        setFilteredPosts(tempPosts);
    };

    return (
        <div className="p-5">
            <div className="row my-5">
                <SearchInput
                    placehodler="User's Name or Username"
                    message={message}
                    onChangeCallback={filterPosts}
                />
            </div>
            <div className="d-flex justify-content-between flex-wrap">
                {filteredPosts.map(({ id, ...rest }) => (
                    <PostCard key={id} post={{ id, ...rest }} hasLink message={message} />
                ))}
            </div>
        </div>
    );
};

export default Posts;
