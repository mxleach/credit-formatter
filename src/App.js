import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSplit = () => {
    // Split by capital letters followed by a lowercase letter
    const splitNames = input.replace(/([a-z])([A-Z])/g, '$1, $2');
    setOutput(splitNames);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '30px', borderRadius: '15px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Name Splitter
        </Typography>
        <TextField
          label="Enter Names"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSplit}
          style={{ padding: '10px', borderRadius: '10px' }}
        >
          Split Names
        </Button>
        <Box mt={4}>
          <Typography variant="h6">Result:</Typography>
          <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }}>
            {output}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
