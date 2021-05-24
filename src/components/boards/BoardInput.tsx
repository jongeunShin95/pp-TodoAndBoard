import React, { FormEvent, useState } from 'react';

type AddProps = {
    title: string,
    content: string
}

type BoardInputProps = {
    onInput: ({ title, content }: AddProps) => void;
}

function BoardInput({ onInput }: BoardInputProps) {
    const [inputs, setValue] = useState({
        title: '',
        content: ''
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
        onInput({ title, content });
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
            <button type="submit">등록</button>
        </form>
    );
}

export default BoardInput;