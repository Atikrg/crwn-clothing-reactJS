import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
<<<<<<< HEAD

=======
>>>>>>> 0d08e4635118c284fcf37de181b66e5cbc23379b


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
<<<<<<< HEAD
        <Route path="checkout" element={<Checkout/>} />
=======
        <Route path="checkout" element = {<Checkout/>} />
>>>>>>> 0d08e4635118c284fcf37de181b66e5cbc23379b
      </Route>
    </Routes>
  )
}

export default App;
