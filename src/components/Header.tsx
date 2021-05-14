import React from 'react';
import { Link } from 'react-router-dom';
import BoardApp from '../containers/BoardApp';
import TodoApp from '../containers/TodoApp';

function Header() {
    return (
        <div>
            <ul>
                <li><Link to="/Todo">Todo</Link></li>
                <li><Link to="/Board">Board</Link></li>
            </ul>
        </div>
    )
}

export default Header;