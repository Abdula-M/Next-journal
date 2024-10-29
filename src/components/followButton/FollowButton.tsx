'use client'

import React from 'react'
import {Button} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const FollowButton: React.FC = () => {
    const [followed, setFollowed] = React.useState(false)
    return (
        <Button onClick={() => setFollowed(!followed)} variant="outlined" className="w-[23px] h-[33px]" style={{ color: 'black', minWidth: 40, width: 40}}>
           {followed ? <AddOutlinedIcon/> : <CheckOutlinedIcon  style={{ color: '#2ea83a' }}/>}
        </Button>
    )
}

export default FollowButton