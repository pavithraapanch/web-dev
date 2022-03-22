import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditionalOutput";
import TodoList from "./todo/TodoList";
import TodoItem from "./todo/TodoItem";
const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <TodoItem/>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
        </>
    )
};

export default Labs;