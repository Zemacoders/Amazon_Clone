import Routers from "./routers/Routers";
import { useDispatch, useSelector } from 'react-redux';

function App() {

  // Test a redux store is work
  const store = useSelector((state) => state.cart);
  console.log(store);
  
  return (
    <>
      <h1 className="text-center text-4xl text-red-500">Amazon Clone</h1>
    </>
  );
  return <Routers/>
}
export default App;
