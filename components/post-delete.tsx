'use client'

import { deletePost } from "@/app/actions/posts";

interface PostDeleteProps {
    id: string,
}

export default function PostDelete({ id }: PostDeleteProps) {
    const deleteAction = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        deletePost(id);
    };

    return (<form onSubmit={deleteAction}>
        <button type="submit" className="text-sm bg-gray-700 p-2 rounded-md text-red-500">Delete</button>
    </form>)
}