'use client'

import {Paper, Typography, Divider, Tab, Tabs} from '@mui/material';
import {MainLayout} from "../../../layouts/MainLayout";
import FullPost from '@/components/fullPost/FullPost';
import {Comment} from '../../../components/comment/Comment';
import React from 'react';
  
  export default function News() {
    return (
        <MainLayout>
          <FullPost/>
          <Paper elevation={0} className="mt-[40px] p-[30px]">
            <Typography variant="h6" className="mb-[20px]">
              42 комментария
            </Typography>
            <Tabs className="mt-[20px]" value={0} indicatorColor="primary" textColor="primary">
              <Tab label="Популярные" />
              <Tab label="По порядку" />
            </Tabs>
            <Divider />
            <div className="mb-[20px]">
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </div>
          </Paper>

        </MainLayout>
    );
  }
  