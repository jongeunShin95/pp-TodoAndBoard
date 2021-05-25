import React, { FormEvent, useState } from 'react';
import { Board } from '../../modules/boards';

type ModifyFProps = {
    id: number;
    title: string;
    content: string;
}

type ModifyProps = {
    board: Board;
    onModify: ({ id, title, content }: ModifyFProps) => void;
}

function BoardModify({ board, onModify }: ModifyProps) {
    const [inputs, setValue] = useState({
        title: board.title,
        content: board.content
    });
    const { title, content } = inputs;
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value, name } = e.target;
        setValue({
            ...inputs,
            [name]: value
        });
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        onModify({ id: board.id, title, content });
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                name="title"
                placeholder="제목을 입력하세요."
                value={title}
                onChange={onChange}
            />
            <br />
            <textarea
                name="content"
                placeholder="내용을 입력하세요."
                value={content}
                onChange={onChange}
            />
            <br />
            <button type="submit">수정</button>
        </form>
    );
}

export default BoardModify;