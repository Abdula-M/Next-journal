import Link from 'next/link';
import { Paper, Avatar, Typography, Button, Tabs, Tab } from '@mui/material';
import Post  from '../../../components/post/Post';
import { MainLayout } from '../../../layouts/MainLayout';
import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon,
} from '@mui/icons-material';


export default function Profile() {
  return (
    <MainLayout hideComments>
      <Paper className="pl-[20px] pr-[20px] pt-[20px] mb-[30px] w-full" elevation={0}>
        <div className="flex justify-between">
          <div>
            <Avatar
              style={{ width: 120, height: 120, borderRadius: 6 }}
              src="https://avatars.mds.yandex.net/i?id=47a6edb5c18576ba8d38ffe898988ff95126bbb9-10766747-images-thumbs&n=13"
            />
            <Typography style={{ fontWeight: 'bold' }} className="mt-[10px]" variant="h4">
              Amon Bower
            </Typography>
          </div>
          <div>
            <Link href="/profile/1/settings">
              <Button
                style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                variant="contained">
                <SettingsIcon />
              </Button>
            </Link>
            <Button style={{ height: 42 }} variant="contained" color="primary">
              <MessageIcon className="mr-[10px]" />
              Написать
            </Button>
          </div>
        </div>
        <div className="flex mb-[10px] mt-[10px]">
          <Typography style={{ fontWeight: 'bold', color: '#35AB66' }} className="mr-[15px]">
            +208
          </Typography>
          <Typography>2 подписчика</Typography>
        </div>
        <Typography>На проекте с 15 сен 2016</Typography>

        <Tabs className="mt-[20px]" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Статьи" />
          <Tab label="Комментарии" />
          <Tab label="Закладки" />
        </Tabs>
      </Paper>
      <div className="flex justify-between align-center">
        <div className="mr-[20px]">
          <Post />
        </div>
        <Paper style={{ width: 300, minHeight: 100, height: 'fit-content' }} className="p-[20px] mb-[20px]" elevation={0}>
            <b>Подписчики</b>
            <div className="flex flex-wrap gap-4 mt-[15px]">
              <Avatar
                className="mr-[10px]"
                src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
              />
              <Avatar
                className="mr-[10px]"
                src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
              />
            </div>
        </Paper>
      </div>
    </MainLayout>
  );
}
