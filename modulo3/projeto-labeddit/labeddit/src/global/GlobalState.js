import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";
import { useNavigate } from "react-router-dom";


const GlobalState = (props) => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
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
        if (token !== null && posts) {
            posts.forEach((post) => {
                axios
                .get(`${BASE_URL}/posts/${post.id}/comments`, headers)
                .then((res) => {
                    setComments(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
            })
        }
    }, [posts])

    const states = {posts, comments}
    const setters = {setPosts, setComments}
    const values = {token, headers}
    return (
        <GlobalStateContext.Provider value={{states, setters, values}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;