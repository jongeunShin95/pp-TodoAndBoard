import React, { FormEvent, useState } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

type TodoInputProps = {
    onInput: (text: string) => void;
}

function TodoInput({ onInput }: TodoInputProps) {
    const classes = useStyles();
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
        <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
            <TextField
                id="standard-basic"
                label="할 일을 입력하세요."
                value={value}
                onChange={onChange}
                style={{ marginTop: '-5px' }}
            />
            <Button type="submit" variant="outlined">등록</Button>
        </form>
    )
}

export default TodoInput;