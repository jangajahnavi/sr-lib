import React, { ReactElement, FC } from "react";
import IconButton from '@mui/material/IconButton';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import TextField  from '@mui/material/TextField';

const SearchBox = (props: { placeholder: string | undefined; handleChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined; handleOnClick: React.MouseEventHandler<HTMLDivElement> | undefined; onClick: React.MouseEventHandler<SVGSVGElement> | undefined; }) => {

    return (
      <div>
        <TextField
            label="Enter Product Name"
            placeholder={props.placeholder} 
        onChange={props.handleChange}
        onClick={props.handleOnClick}
            InputProps={{
             endAdornment: (
          
          <IconButton>
            <SearchIcon onClick={props.onClick}/>
          </IconButton>
         
            )
          }}
       />
      </div>
      
    );

  }

  export default SearchBox;