import {Box,IconButton,useTheme} from '@mui/material'
import {useContext} from 'react'
import { ColorModeContext,tokens } from '../../theme'
// import InputBase from '@mui/material'
import { InputBase } from '@mui/material';

import  LightModeOutlinedIcon  from '@mui/icons-material/LightModeOutlined'
import  DarkModeOutlinedIcon  from '@mui/icons-material/DarkModeOutlined'
import  NotificationModeOutlinedIcon  from '@mui/icons-material/NotificationsOutlined'
import  SettingsOutlinedIcon  from '@mui/icons-material/SettingsOutlined'
import  PersonOutlinedIcon  from '@mui/icons-material/PersonOutlined'
import  SearchIcon  from '@mui/icons-material/Search'


function Topbar() {
  const theme=useTheme();
  const colors =tokens(theme.palette.mode);
  const colorMode=useContext(ColorModeContext);
  return (
    <Box display='flex' justifyContent='space-between' padding={2}>
      {/* Search Bar */}
      <Box 
      display={'flex'} 
      justifyContent={'space-between'}
      borderRadius={'3px'}
      backgroundColor={colors.primary[400]}
      >
        
        <InputBase sx={{ml:2,flex:1}} placeholder='Search'/>
        <IconButton>
          <SearchIcon />
        </IconButton>
        
      </Box>
      {/* Icons */}
      <Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode==='dark'?
            <DarkModeOutlinedIcon/>:
            <LightModeOutlinedIcon/>
          }
          {/* <LightModeOutlinedIcon/> */}

        </IconButton>
        <IconButton>
          <NotificationModeOutlinedIcon/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon/>
        </IconButton>

      </Box>
      
    </Box>
  )
}

export default Topbar;