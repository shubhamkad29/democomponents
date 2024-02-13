import { Autocomplete, Button, Card, CardContent, InputAdornment, MenuItem, TextField, ToggleButtonGroup, Typography } from "@mui/material";
import LoopIcon from '@mui/icons-material/Loop';
import EastIcon from '@mui/icons-material/East';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ToggleButton from '@mui/material/ToggleButton';
import SearchIcon from '@mui/icons-material/Search';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import "./SearchPaper.css";
import { useState } from "react";



const SearchPaper = () => {

    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const passenger = [{ label: '1 Passenger' }, { label: '1 Passenger' }, { label: '3 Passenger' },]

    return (<div>
        <Card className="card-background">
            <CardContent className="card-content">
                <div className="card-header">
                    <Typography className="card-header-typo">
                        Accelya
                    </Typography>
                    <Typography className="card-header-typo card-header-margin"  >
                        Search for a flight
                    </Typography>
                </div>
                <div className="trip">
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        size="small"
                        className="trip-group"
                    >
                        <ToggleButton value="left" aria-label="left aligned" className="trip-button">
                            <LoopIcon /> <Typography className="trip-typo">Round Trip</Typography>
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered" className="trip-button">
                            <EastIcon /> <Typography className="trip-typo">One Way</Typography>
                        </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned" className="trip-button">
                            <FormatListBulletedIcon /> <Typography className="trip-typo">Multicity</Typography>
                        </ToggleButton>

                    </ToggleButtonGroup>
                    <TextField
                        id="outlined-select-currency"
                        select
                        defaultValue="1 Passenger"
                        style={{ width: "20%" }}
                        className="selectfield"
                    >
                        {passenger.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className="card-header">
                    <TextField margin="normal" className="textField" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon style={{ color: "white" }} />
                            </InputAdornment>
                        ),
                    }} />
                    <SyncAltIcon style={{ margin: "27px", color: "white" }} />
                    <TextField margin="normal" className="textField" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon style={{ color: "white" }} />
                            </InputAdornment>
                        ),
                    }} />
                </div>
                <div>
                    <Button color="secondary">Secondary</Button>
                    <Button variant="contained" color="primary">Contained</Button>
                    <Typography>TEST</Typography>
                    <button>Test Html</button>

                    <Button color="secondary">Second Test</Button>
                </div>
            </CardContent>
        </Card>
    </div>)
}


export default SearchPaper;