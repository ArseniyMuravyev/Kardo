import { Button, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "./store/store";
import { increment } from "./features/user/slice";

function App() {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(increment());
  const counter = useSelector((state) => state.counter);
  return (
    <Container>
      <Typography variant="h1" color="primary.main">
        {counter}
      </Typography>
      <Button onClick={handleClick} color="primary">
        increment
      </Button>
    </Container>
  );
}

export default App;
