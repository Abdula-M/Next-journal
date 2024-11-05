'use client'
import React from 'react';
import { CommentPost } from '../commentPost/CommentPost';
import { Typography, Paper, Tabs, Tab, Divider } from '@mui/material';
import { AddCommentForm } from '../addCommentForm/AddCommentForm';
import data from '../../../../data.js';

export const PostComments: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState(0)
    const comments = data.comments[activeTab === 0 ? "popular" : "new"]
   return (
        <div>
            <Paper elevation={0} className="mt-[40px] p-[30px]">
                <div className='mx-auto w-1/2 min-w-[680px]'>
                <Typography variant="h6" className="mb-[20px]">
                    42 комментария
                </Typography>
                <Tabs onChange={(_, newValue) => setActiveTab(newValue)} className="mt-[20px]" value={activeTab} indicatorColor="primary" textColor="primary">
                    <Tab label="Популярные" />
                    <Tab label="По порядку" />
                </Tabs>
                <Divider />
                <AddCommentForm/>
                <div className="mb-[20px]">
                    {comments.map(item => <CommentPost key={item.id} user={item.user} text={item.text} createdAt={item.createdAt} />)}
                </div>  
                </div>
            </Paper>
        </div>
   )

};
