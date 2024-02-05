import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {config} from "../config";
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button} from '@mui/material';

export default function CourseCard({course}) {

    const [post, setPost] = useState(null);
    let newest = {};

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${config.apiUrl}/courses/${course.id}/newest_post`);
                setPost(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    if (post!==null && Object.keys(post).length !== 0){
        // console.log(post);
        newest.title = post.detail.subject;
        newest.pid = post.nr;
    }


    return (
        <Card style={{ width: '100%' }}>
            <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Typography variant="h6">{course.name}</Typography>
                </div>
                <div>
                    <Typography variant="body2">
                        {Object.keys(newest).length===0 ?
                                "no recent posts" :
                                (
                                    <>
                                        Newest Post: <a href={`https://piazza.com/class/${course.id}/post/${newest.pid}`}>
                                        {newest.title}
                                    </a>
                                    </>
                                )
                        }
                    </Typography>
                </div>
                <div>
                    <Link to={`/course/${course.id}/all_posts`}>
                        <Button variant="contained" color="primary">
                            All Posts
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}