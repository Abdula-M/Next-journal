'use client'
import React from 'react';
import { Typography, IconButton, MenuItem, Menu } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';


interface CommentPostProps {
  user: {
    fullname: string;
    avatarUrl: string
  };
  createdAt: string;
  text: string;
}

export const CommentPost: React.FC<CommentPostProps> = ({ user, text, createdAt}) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [isMenuVisible, setIsMenuVisible] = React.useState(true);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement | null);
    setIsMenuVisible(true);
  };

  const handleClose = () => {
    setIsMenuVisible(false);
    setTimeout(() => setAnchorEl(null), 0);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (anchorEl) {
        handleClose();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [anchorEl]);

  return (
    <div className='mx-auto mt-[20px]'>
      <div className="flex align-center mb-[10px]">
        <img width={30} height={30} className='rounded-[30px] border-[1px] border-solid border-rgb(0, 0, 0, 0.05) mr-[10px]'
          src={user.avatarUrl}
          alt="Avatar"
        />
        <b className='text-[16px]'>{user.fullname}</b>
        <span className='text-[12px] opacity-[0.8] ml-[10px]'>{createdAt}</span>
      </div>
      <Typography className='mb-[10px]'>
        {text}
      </Typography>
      <span className="text-[14px] mr-2 cursor-pointer hover:text-[#346eb8]">Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreHorizOutlinedIcon />
      </IconButton>
      {isMenuVisible && <Menu
        anchorEl={anchorEl}
        elevation={2}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableScrollLock={true}
        keepMounted>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>}
    </div>
  );
};
