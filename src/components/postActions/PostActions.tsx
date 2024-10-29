import {IconButton} from "@mui/material";
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';



const PostActions = () => {
    return (
        <div className="flex justify-between">
            <ul className="flex mt-2">
                <li>
                    <IconButton>
                    <TextsmsOutlinedIcon/>
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                    <RepeatOutlinedIcon/>
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                    <BookmarkBorderOutlinedIcon/>
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                    <FileUploadOutlinedIcon/>
                    </IconButton>
                </li>
            </ul>

            <ul className="flex mt-2">
                <li>
                    <IconButton>
                    <KeyboardArrowDownOutlinedIcon/>
                    </IconButton>
                </li>
                <li>
                    <IconButton>
                    <KeyboardArrowUpOutlinedIcon/>
                    </IconButton>
                </li>
            </ul>
        </div>
    )
}

export default PostActions






