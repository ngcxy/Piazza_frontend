import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {config} from "../config";
import Typography from "@mui/material/Typography";
import PostBox from "../components/PostBox";

function Posts() {
    const { cid } = useParams();
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${config.apiUrl}/courses/${cid}/all_posts`);
                setPosts(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // console.log(posts);

    return(
        <div>
            <Typography variant="h5" gutterBottom>
                All Posts:
            </Typography>
            {posts !== null && posts.length !== 0 && posts.map(post => <PostBox post={post}/>)}

        </div>
    )
}

export default Posts;