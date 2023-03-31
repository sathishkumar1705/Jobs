import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import React from "react";

const PostJobs = () => {
    const [expericence, setExpericence] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setExpericence(event.target.value as string);
  }
    return (
        <Box 
        sx={{
            width: '90vw',
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'center',
            // alignItems: 'center',
            padding:'30px'
          }}
        >
                <TextField fullWidth sx = {{m:1}} label="Company Name" id="fullWidth" />
                <TextField fullWidth sx = {{m:1}} className = "fields" label="Job ID" id="fullWidth" />
                <TextField fullWidth sx = {{m:1}} className = "fields" label="Job title" id="fullWidth" />
                <TextField fullWidth multiline rows={4} sx = {{m:1}} className = "fields" label="Description" id="fullWidth" />
                <TextField fullWidth sx = {{m:1}} className = "fields" label="Required skills" id="fullWidth" />
                <TextField fullWidth sx = {{m:1}} className = "fields" label="Location" id="fullWidth" />
                <FormControl sx={{m:1, width: '10vw',}}>
                    <InputLabel id="demo-simple-select-label">Expericence</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={expericence}
                        label="Expericence"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>0</MenuItem>
                        <MenuItem value={20}>1</MenuItem>
                        <MenuItem value={30}>2</MenuItem>
                    </Select>
                    <Typography variant="body2" component="p">
                        years
                    </Typography>
                </FormControl>
        </Box>
    )
}
export default PostJobs