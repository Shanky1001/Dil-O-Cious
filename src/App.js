
import { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './Components/AboutPage';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Menu from './Components/Menu';
import NavBar from './Components/NavBar';

import { Alert, Button, Dialog, DialogActions, DialogTitle, Snackbar } from '@mui/material';
import Login from './Components/Login';
import SignIn from './Components/SignIn';
import Product from './Components/Product';

import { clearCart, removeFromCart } from './redux/Slices/CartSlice';
import { useDispatch } from 'react-redux';

const user = createContext();
function App() {

  // Dialog Box state 
  const [open, setOpen] = useState({ open: false, html: "", type: "", value: null });
  // Snackbar State
  const [openSnack, setOpenSnack] = useState({ open: false, html: "", severity: "success", time: "800" });
  // State for login
  const [logged, setLogged] = useState(false);
  const [userName, setUserName] = useState("");
  // state for counting total Value
  const [total, setTotal] = useState(0);
  // State for Modal
  const [openModal, setOpenModal] = useState({ val: [], open: false })

  // const [state, dispatch] = useReducer(cartReducer, {
  //   products: sweet,
  //   cart: []
  // });

  // const [productState, productDispatch] = useReducer(productReducer, {
  //   search: "",
  //   sortPrice: false,
  //   sortName: false
  // })

  const dispatch = useDispatch();

  const confirm = () => {
    if (open.type === 'trash') {
      dispatch(removeFromCart(open.value))
      setOpen({ ...open, open: false });
      setOpenSnack({ open: true, html: `${open.value.strMeal} removed from cart !` })
    }
    if (open.type === 'empty') {
      dispatch(clearCart())
      setOpen({ ...open, open: false });
      setOpenSnack({ open: true, html: ` Your cart is emptied !!` })
    }
  }

  return (
    <>
      <user.Provider value={{ open, setOpen, openSnack, setOpenSnack, logged, setLogged, userName, setUserName, total, setTotal, openModal, setOpenModal }} >
        <div id='body' style={{ backgroundColor: "var(--bg)" }}>
          <Router >
            <NavBar />
            <Routes>
              <Route path='/' exact element={<Main />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/login' element={<Login />} />
              <Route path='/create' element={<SignIn />} />
              <Route path='product/:ID' element={<Product />} />
              <Route path='menu/product/:ID' element={<Product />} />
            </Routes>
            <Footer />
          </Router>


          {/* Dialog component from MUI */}
          <Dialog open={open.open} onClose={() => { setOpen({ ...open, open: false }) }}>
            <DialogTitle > {open.html} </DialogTitle>
            <DialogActions>
              <Button autoFocus onClick={() => { setOpen({ ...open, open: false }) }} >
                Cancel
              </Button>
              <Button onClick={confirm}>Ok</Button>
            </DialogActions>
          </Dialog>

          {/* Snackbar Component from MUI */}
          <Snackbar open={openSnack.open} autoHideDuration={Number(openSnack.time)} onClose={() => { setOpenSnack({ ...open, open: false }) }} anchorOrigin={{ vertical: "top", horizontal: 'center' }} >
            <Alert onClose={() => { setOpenSnack({ ...openSnack, open: false }) }} severity={openSnack.severity} variant='filled' sx={{ width: '100%' }}>
              {openSnack.html}
            </Alert>
          </Snackbar>

          {/* Modal for Products details */}

        </div>
      </user.Provider>
    </>
  );
}

export default App;

export const CartState = () => {
  return useContext(user)
}







