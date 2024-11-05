import React from 'react';
import { NextPage } from 'next';
import { MainLayout } from '@/layouts/MainLayout';
import WriteForm from '@/components/WriteForm/WriteForm';


const WritePage: NextPage = () => {
    return (
        <MainLayout hideComments hideLeftMenu>
            <WriteForm/>
        </MainLayout>
    )
}

export default WritePage