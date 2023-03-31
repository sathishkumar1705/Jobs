import { Avatar, Box, TextField } from "@mui/material"
import { useState } from "react"

const Verification = () => {

    const [emailPhonenumber, setEmailphonenumber] = useState("")
    const onChangeUseremailphonenumber = (event: any) => {
        setEmailphonenumber(event.target.value)
    }

    
    return (
        <Box 
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
            <TextField id="outlined-error" name="emailPhonenumber" label="Email or phonenumber" variant="outlined" value={emailPhonenumber} onChange={onChangeUseremailphonenumber} />
        </Box>
    )
}
export default Verification