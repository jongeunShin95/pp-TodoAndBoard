import React, { FormEvent, useState } from 'react';

type TodoInputProps = {
    onInput: (text: string) => void;
}

function TodoInput({ onInput }: TodoInputProps) {
    const [value, setValue] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        onInput(value);
        setValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요."
                value={value}
                onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>
    )
}

export default TodoInput;