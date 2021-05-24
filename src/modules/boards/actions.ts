export const ADD_BOARD = 'boards/ADD_BOARD' as const;

let nextId = 1;

type AddProps = {
    title: string,
    content: string
};

export const addBoard = ({ title, content }: AddProps) => ({
    type: ADD_BOARD,
    payload: {
        id: nextId++,
        title,
        content
    }
});