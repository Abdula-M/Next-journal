import {Paper, Button, Avatar} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import MenuIcon from '@mui/icons-material/Menu';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Image from "next/image";
import Logo from '@/components/header/Logo';
import Link from 'next/link';
import './header.scss'

export default function Header() {
    return (
          <div className="fixed w-full z-10">
            <Paper className="flex justify-between items-center p-4 pl-0  bg-[#fff4e2] mb-[10px]">
              <div className="flex items-center">
                  <Button className="ml-6 mr-6" style={{ color: 'black', minWidth: 50, width: 50}}>
                    <MenuIcon className="w-[33px] h-[33px]" style={{ color: 'black'}} />
                  </Button>
                  <Link href="/">
                    <Logo />
                  </Link>
                  <div className="ml-5 relative">
                    <SearchIcon className="search" />
                    <input className="inputSize " type="text" placeholder="Поиск" />  
                  </div>    
                  <Link href="/write">
                    <Button>
                      <CreateIcon style={{ color: 'black' }}/>
                      <span className="ml-2 text-black">Создать</span>
                    </Button> 
                  </Link>       
              </div>
              <div>
                <Button>
                <NotificationsNoneOutlinedIcon style={{ color: 'black' }}/>
                </Button>
                <Button>
                <SmsOutlinedIcon style={{ color: 'black' }}/>
                </Button>
                <Button>
                  <Link href="/profile/1">
                    <Avatar className="mr-2" alt="Remy Sharp" src="https://avatars.mds.yandex.net/i?id=47a6edb5c18576ba8d38ffe898988ff95126bbb9-10766747-images-thumbs&n=13" />
                  </Link>
                <KeyboardArrowDownOutlinedIcon  style={{ color: 'black' }}/>
                </Button>
              </div>
            </Paper>
          </div>
    );
  }

  

