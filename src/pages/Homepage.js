import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {config} from "../config";
import CourseCard from "../components/CourseCard"
import Typography from '@mui/material/Typography';

function HomePage() {
    const [courses, setCourses] = useState(null);
    let courseList=[];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${config.apiUrl}/users`);
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // console.log(courses);

    return(
        <div>
            <Typography variant="h5" gutterBottom>
                Your Course List:
            </Typography>
                {courses !== null && courses.map(course => <CourseCard course={course}/>)}

        </div>


    )
}

export default HomePage;