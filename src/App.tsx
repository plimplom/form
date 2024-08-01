import {DummyForm} from "./DummyForm.tsx";
import { CssBaseline} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
      <>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
          <DummyForm/>
        </ThemeProvider>
      </>
  )
}

export default App
