import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function PostBox({post}) {
    
    let i_ans = [];
    let s_ans = [];
    
    for (let ans of post.answers){
        if (ans.type === "i_answer"){
            i_ans.push(ans);
        } else {
            s_ans.push(ans);
        }
    }
    
    return(
        <Paper elevation={3} style={{ padding: '16px', margin: '16px' }}>
            <Typography variant="h6" gutterBottom>
                {post.detail.subject}
            </Typography>

            <Typography variant="body1" paragraph>
                <strong>Question:</strong> {post.detail.content}
            </Typography>

            <Typography variant="body1" paragraph>
                <strong>Instructor Answer:</strong>
            </Typography>

            <ul>
                {i_ans.length !== 0 && i_ans.map((ans, index) => (
                    <li key={index}>{ans.content}</li>
                ))}
            </ul>


            <Typography variant="body1" paragraph>
                <strong>Student Answer:</strong>
            </Typography>

            <ul>
                {s_ans.length !== 0 && s_ans.map((ans, index) => (
                    <li key={index}>{ans.content}</li>
                ))}
            </ul>
        </Paper>
    )
}