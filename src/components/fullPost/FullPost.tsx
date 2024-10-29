import {Paper, Typography, Button} from '@mui/material';
import PostActions from '../postActions/PostActions';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import React from 'react';

import './fullPost.scss'
  
  export default function FullPost() {
    return (
        <Paper elevation={0} className='p-[30px]'>
        <div className='paper mx-auto w-1/2 min-w-[680px]'>
            <Typography variant="h4" className='font-[700] text-[36px] mb-6'>
            Superjet, летящий из Волгограда в Москву, подал сигнал бедствия. Возможно, в полете
            произошла разгерметизация
            </Typography>
            <div>
            <Typography>
                Самолет SSJ100, летящий из Волгограда в Москву, подал сигнал бедствия. Об этом сообщает
                «Интерфакс» со ссылкой на информированный источник. По данным источника, самолет резко
                снизился над Тамбовской областью.
            </Typography>
            <Typography>
                По данным источника, самолет резко снизился над Тамбовской областью. Возможной причиной
                этого собеседник агентства назвал разгерметизацию.
            </Typography>
            <Typography>Самолет продолжает полет на высоте примерно 3000 метров.</Typography>
            <Typography>
                Источник не уточнил названия авиакомпании и номера рейса. Судя по данным Flightradar24,
                сейчас в небе находится один SSJ100, летящий в Москву из Волгограда. Это — самолет
                «Аэрофлота», выполняющий рейс SU6416. На момент написания заметки он уже пересек
                Тамбовскую область и подлетает к Москве.
            </Typography>
            </div>
            <PostActions />

            <div className="flex justify-between align-center mt-[30px] mb-[30px]">
                <div className='flex gap-4 align-center'>
                    <img width={40} height={40} className='rounded-[8px]'
                        src="https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/"
                        alt="Avatar"/>
                    <div className='mt-2'>
                        <b  className='mr-6 '>Donnie Darko</b>
                        <span className='text-[#2ea83a]'>+1685</span>
                    </div>
                </div>
                <div>
                    <Button variant="contained" className="mr-[15px]">
                        <SmsOutlinedIcon />
                    </Button>
                    <Button variant="contained">
                        <PersonAddAltOutlinedIcon />
                        <b className="ml-[10px]">Подписаться</b>
                    </Button>
                </div>
            </div>

        </div>
    </Paper>
    );
  }
  