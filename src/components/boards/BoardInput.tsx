import React, { FormEvent, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '70%',
      },
    },
}));

type AddProps = {
    title: string,
    content: string
}

type BoardInputProps = {
    onInput: ({ title, content }: AddProps) => void;
}

function BoardInput({ onInput }: BoardInputProps) {
    const classes = useStyles();
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
        <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
            <TextField name="title" value={title} onChange={onChange} id="standard-basic" label="제목" />
            <br />
            <TextField
                name="content"
                value={content}
                onChange={onChange}
                id="standard-multiline-static"
                label="내용"
                multiline
                rows={17}
            />
            <br />
            <Button type="submit" variant="outlined">등록</Button>
        </form>
    );
}

export default BoardInput;