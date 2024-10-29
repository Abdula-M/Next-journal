import Image from "next/image"; 
import Link from 'next/link';
import {Paper, Typography} from "@mui/material";
import PostActions from "../postActions/PostActions";


import './post.scss'

interface PostProps {
  size?: object; 
}

const Post: React.FC<PostProps> = () => {
    return (
          <Paper className={`p-5 pb-3 mb-[20px]`} elevation={1}>
            <Typography className="font-[500] text-[28px]" variant="h4">
              <Link href={"/news/1"}>
                Кот прилег отдохнуть в английском парке
              </Link>
            </Typography>
            <Typography className="mt-[12px] mb-[15px] text-[16px] ">
              Пока дни не могли соотнести размеры животного с размером кота.
            </Typography>
            <Image className="mx-auto rounded-[10px] " src={"https://avatars.mds.yandex.net/i?id=79b64aa65eb03240e892185373f8564a2dbcf5ad-8185766-images-thumbs&n=13"}
            alt="cat" width={700} height={320}/>
            <PostActions/>
          </Paper>
    )
}

export default Post

