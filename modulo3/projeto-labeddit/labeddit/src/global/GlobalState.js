import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";
import { useNavigate } from "react-router-dom";


const GlobalState = (props) => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [postInfo, setPostInfo] = useState([]);

    const token = window.localStorage.getItem("token");
    const headers = { headers: {
        Authorization : token
    }
    }

    const getPosts = () => {
        axios
        .get(`${BASE_URL}/posts`, headers)
        .then((res) => {
            setPosts(res.data)
        })
        .catch((err) => {
            alert(err);
        })
    }

    useEffect(() => {
        if (token !== null) {
            getPosts();
        }
    }, [])

    useEffect(() => {
        if (token !== null) {
            getPosts();
        }
    }, [posts])
    

    const states = {posts, comments, postInfo}
    const setters = {setPosts, setComments, setPostInfo}
    const values = {token, headers}
    const requests = {getPosts}
    return (
        <GlobalStateContext.Provider value={{states, setters, values, requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;