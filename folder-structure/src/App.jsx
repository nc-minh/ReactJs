import './App.css'
import TodoFeature from './features/Todo'
import AlbumFeature from './features/Album'
import CounterFeature from "./features/Counter";
import styled from "styled-components";

// using styled components
const Title = styled.h1`
  text-align: center;
  font-weight: bold;

  color: ${(props) => props.color || "green"};
`;

function App() {
  return (
    <div className="App">
      <Title color="goldenrod">Hellooooooooooooo</Title>
      <h1>helop</h1>
      <TodoFeature />
      <AlbumFeature />
      <CounterFeature />
    </div>
  );
}

export default App
