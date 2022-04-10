import { createContext, useState, useEffect, ReactChild, useMemo } from 'react';
import API from '../services/APIservice';
import { User, Comment, Post } from '../interfaces';

const AppContext = createContext<Post[]>([]);

type AppProviderProps = {
    children: ReactChild | ReactChild[];
};

const AppContextProvider = ({ children }: AppProviderProps) => {
    const [posts, setPosts] = useState<Post[]>([]);

    const postContext = useMemo(() => posts, [posts]);

    useEffect(() => {
        const getData = async () => {
            try {
                const [{ data: commentsData }, { data: users }, { data: posts }] =
                    await Promise.all([API.getComments(), API.getUsers(), API.getPosts()]);
                const extendedPosts: Post[] = [];
                posts.forEach((post: Post) => {
                    const user = users.find(({ id }: User) => id === post.userId);
                    const comments = commentsData.filter(
                        ({ postId }: Comment) => postId === post.id,
                    );
                    extendedPosts.push({ ...post, user, comments });
                });
                setPosts(extendedPosts);
            } catch (er) {
                console.log(er);
            }
        };
        getData();
    }, []);

    return <AppContext.Provider value={postContext}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
