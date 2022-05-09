import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/Login"
import SignUp from "../screens/SignUp"
import Feed from "../screens/Feed"
import Post from "../screens/Post"

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="feed" element={<Feed />} />
                    <Route path="feed/post/:id" element={<Post />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;