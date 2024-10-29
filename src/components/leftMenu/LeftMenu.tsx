import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import {Button} from "@mui/material";
import Link from 'next/link';
import './leftMenu.scss'

const LeftMenu: React.FC = () => {
    return (
        <div className="menu fixed w-[250px]">
            <ul className="p-5">
                <li>
                    <Link href={"/"}>
                        <Button>
                            <LocalFireDepartmentOutlinedIcon/>
                            <span className="ml-2">Лента</span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href={"/messages"}>
                        <Button>
                            <SmsOutlinedIcon/>
                            <span className="ml-2">Сообщения</span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href={"/rating"}>
                        <Button>
                            <TrendingUpOutlinedIcon/>
                            <span className="ml-2">Рейтинг</span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href={"/subscriptions"}>
                        <Button>
                            <FormatListBulletedOutlinedIcon/>
                            <span className="ml-2">Подписки</span>
                        </Button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default LeftMenu