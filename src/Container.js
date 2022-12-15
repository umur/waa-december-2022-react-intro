import './App.css';
import WaaAppBar from './components/WaaAppBar';
import Box from '@mui/material/Box';
import ViewPort from './components/ViewPort';

function Container() {
  return (
    <Box sx={{ display: 'flex' }}>
      <WaaAppBar />
      <ViewPort />
    </Box>
  );
}

export default Container;
