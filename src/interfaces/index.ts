export interface User {
    id: number;
    name: string;
    username: string;
}

export interface Comment {
    id: number;
    name: string;
    body: string;
    postId: number;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    user?: User;
    comments?: Comment[];
}
