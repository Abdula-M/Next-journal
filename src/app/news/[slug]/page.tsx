import React from 'react';
import {MainLayout} from "../../../layouts/MainLayout";
import FullPost from '@/components/fullPost/FullPost';
import {PostComments} from '../../../components/commentComponents/postComments/PostComments';
  
  export default function News() {
    return (
        <MainLayout>
          <FullPost/>
          <PostComments/>

        </MainLayout>
    );
  }
  