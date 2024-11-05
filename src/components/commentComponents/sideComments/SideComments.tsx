'use client'
import React from 'react';
import ArrowRightIcon from '@mui/icons-material/NavigateNextOutlined';
import clsx from 'clsx';
import data from '../../../../data';
import './sideComments.scss';

const comments = data.comments.popular;

interface CommentItemProps {
  user: {
    fullname: string;
  };
  text: string;
  post: {
    title: string;
  };
}

const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <div>
      <div className='flex mt-[20px]'>
        <img className='mr-[10px]' width={25} height={25} src="https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/" />
        <a href="#">
          <b>{user.fullname}</b>
        </a>
      </div>
      <p className='mt-[10px]'>{text}</p>
      <a href="#">
        <span>{post.title}</span>
      </a>
    </div>
  );
};

export const SideComments = () => {
  const [visible, setVisible] = React.useState(true)

  const toggleVisible = () => {
    setVisible(!visible)
  }
  return (
    <div className={clsx("sideComments", !visible && "rotated")}>
      <h3 onClick={toggleVisible} className='text-[20px] cursor-pointer'>
        <b>Комментарии </b> <ArrowRightIcon />
      </h3>
      {visible && comments.map((obj, i) => (
        <CommentItem key={i} {...obj} />
      ))}
    </div>
  );
};
