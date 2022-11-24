import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/header/header';
import Inco_Expense from './components/in_expense/inco_expense';
import Transaction from './components/Transactions/transaction';
import Transactions_History from './components/Record/transaction_record';
import{GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <div className="App">
     <GlobalProvider>
      <Header/>
      <Inco_Expense/>
      <Transactions_History />
      <Transaction/>
     </GlobalProvider>
    </div>
  );
}

export default App;
