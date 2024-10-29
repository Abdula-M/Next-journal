import React from 'react';
import { Typography, IconButton, MenuItem, Menu } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import styles from './Comment.module.scss';

interface CommentPostProps {
  user?: {
    fullname: string;
  };
  text?: string;
}

export const Comment: React.FC<CommentPostProps> = ({ user, text }) => {
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
          src="https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/"
          alt="Avatar"
        />
        <b className='text-[16px]'>Master Oogway</b>
        <span className='text-[12px] opacity-[0.8] ml-[10px]'>5 часов</span>
      </div>
      <Typography className='mb-[10px]'>
        Суперджет это ад адский, два раза летала и оба раза прощалась с жизнью. Трясёт хуже, чем в
        копейке по разьебанной дороге
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
