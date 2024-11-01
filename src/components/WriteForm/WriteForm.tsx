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
        
        <div className='bg-white min-h-screen h-auto w-full'>
            
            <Input 
                className='textWrite p-9 w-[100%] text-[36px] font-[500]' 
                placeholder='Заголовок' 
                defaultValue={title} 
            />
            
            <div  >
                <Editor />
            </div>

            

        </div>
    );
}

export default WriteForm;
