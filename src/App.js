import styled from 'styled-components';
import Calendar from './components/Calendar';

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppWrapper>
      <Calendar />
    </AppWrapper>
  );
}

export default App;
