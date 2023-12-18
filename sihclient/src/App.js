import {RouterProvider} from 'react-router-dom';
import { LevelProvider } from './utils/context';

import router from './routes';

function App() {
  return (
      <>
      <LevelProvider>
        <RouterProvider router={router}/>
      </LevelProvider>
      </>
  );
}

export default App;
