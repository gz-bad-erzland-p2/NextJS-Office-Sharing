'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const router = useRouter();

    const create = async(e: React.FormEvent) => {
        e.preventDefault();

        await fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                content,
            }),
        });

        setContent('');
        setTitle('');

        router.refresh();
    }

    return (
        <form onSubmit={(e) => create(e)}>
            <h3>Create a new Note</h3>
            <input
                className={"block max-w-3xl m-2 border-2"}
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className={"block max-w-3xl m-2 border-2"}
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit" className={"bg-black border-none text-white p-4 text-center inline-block cursor-pointer"}>
                Create note
            </button>
        </form>
    );
}