import React from 'react';
import ArrowRightIcon from '@mui/icons-material/NavigateNextOutlined';

import './sideComments.scss';

const items = [
  {
    user: {
      fullname: 'Вася Пупкин',
    },
    text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    post: {
      title: 'Какая у вас дома ванна?',
    },
  },
  {
    user: {
      fullname: 'Вася Пупкин',
    },
    text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    post: {
      title: 'Какая у вас дома ванна?',
    },
  },
  {
    user: {
      fullname: 'Вася Пупкин',
    },
    text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    post: {
      title: 'Какая у вас дома ванна?',
    },
  },
];

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
  return (
    <div className="sideComments">
      <h3 className='text-[20px]'>
        <b>Комментарии </b> <ArrowRightIcon />
      </h3>
      {items.map((obj) => (
        <CommentItem {...obj} />
      ))}
    </div>
  );
};
