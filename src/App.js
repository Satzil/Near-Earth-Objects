
import Universe from './Components/Universe';
import Header from './Components/Header';
import Content from './Components/Content';
import { useContext } from 'react';
import AuthContext from './AuthContext/AuthContext';





function App() {
  const ctx = useContext(AuthContext);
  return (
    <div className=' bg-black min-h-screen overflow-hidden'>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
