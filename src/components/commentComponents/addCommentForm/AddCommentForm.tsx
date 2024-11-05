'use client'
import React from "react";
import { Input, Button } from "@mui/material";
import './addCommentForm.scss'


interface AddCommentFormProps {
  
}

export const AddCommentForm: React.FC<AddCommentFormProps> = () => {
    const [clicked, setClicked] = React.useState(false);
    const [value, setValue] = React.useState('')
   return (
    <div className="relative">
        <Input className="root w-[680px]" sx={{
        '::before': { display: 'none' },
        '::after': { display: 'none' },
      }} minRows={clicked ? 5 : 1} onFocus={() => setClicked(true)} onChange={(e) => setValue(e.currentTarget.value)} fullWidth multiline placeholder="Написать комментарий..."/>
        {clicked && <div className="flex justify-end">
            <Button className="absolute bottom-3 right-3 " variant="contained" color="primary" >
                Опубликовать
            </Button>
            </div>}
    </div>
   )
};
