'use client'
import React from 'react';
import { Input, Button } from '@mui/material';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../editor/Editor').then(m => m.Editor), { ssr: false });



interface WriteFormProps {
    title?: string;
}

const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
    return (
        
        <div className='bg-white min-h-screen h-auto w-full relative'>
            
            <Input 
            sx={{
                '::before': { display: 'none' },
                '::after': { display: 'none' }
              }}
                className='textWrite p-9 min-w-[650px] text-[36px] font-[500]' 
                placeholder='Заголовок' 
                
            />
            
            <div className='left-0 absolute pt-0 p-9 top-[95px] w-[100%]'>
                <Editor />
            </div>

        </div>
    );
}

export default WriteForm;
