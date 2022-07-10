import React from 'react';
import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
// import { About } from './components/About';

import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Adminuser, AdminUser } from './components/Admin';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/auth';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequiredAuth';

const LazyAbout = React.lazy(()=> import('./components/About') )

function App() {
  return (
    <>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='about' element={<About />} /> */}
        <Route path='about' element={<React.Suspense fallback='loading.....'>
          <LazyAbout />
          </React.Suspense>} />
        <Route path='order-summary' element={<OrderSummary />} />

        <Route path='products' element={<Products />}>
          {/* index will display what we want to display for the parent Products for nested route */}
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>

        {/* <Route path='users' element={<Users/>}/>
        <Route path='users/:userId' element={<UserDetails/>}/> */}
        {/* user id can be anything not just a number */}
        {/* <Route path='users/admin' element={<Adminuser/>}/> */}
        {/* even though we have similar route react router is smart enough to match the specific route first */}
        {/* above code can be nested */}
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Adminuser />} />
        </Route>

        <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path='login' element={<Login/>}/>

        <Route path='*' element={<NoMatch />} />
        {/* if no other router match then this is executed */}
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
