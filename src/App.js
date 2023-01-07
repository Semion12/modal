
import { makeStyles } from '@material-ui/styles';
import { Button, Typography } from '@mui/material';

import { useState } from 'react';
import './App.css';
import { ModalWindow } from './components/model';
const useStyles = makeStyles({
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
})
function App() {
  const classes = useStyles()
  const [isOpen, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!isOpen)
  }
  return (

    <div className={classes.app}>
      <Button onClick={handleClick}>открыть окно</Button>
      <ModalWindow isOpen={isOpen} handleClick={handleClick} />
    </div>
  );
}

export default App;
