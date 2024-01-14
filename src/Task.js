import { List , ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './Task.css';

const Task=({taskText, onClick})=>{
    return (
        <List className="todo__list"> 
            <ListItem className='todo__item'> 
                <ListItemAvatar />
                    <ListItemText primary={taskText} />
            </ListItem>
            <DeleteIcon fontSize="large" style={{opacity:0.7}} onClick={onClick}/>
        </List> 
    )
};

export default Task;