import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import AllProducts from "./components/AllProducts/AllProducts";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import AuthProvider from "./context/AuthProvider";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import MyOrders from "./components/DashboardComponents/MyOrders/MyOrders";
import CustomerReivew from "./components/DashboardComponents/CustomerReview/CustomerReivew";
import ManageOrders from "./components/DashboardComponents/ManageOrders/ManageOrders";
import ManageProducts from "./components/DashboardComponents/ManageProducts/ManageProducts";
import AddProducts from "./components/DashboardComponents/AddProducts/AddProducts";
import MakeAdmin from "./components/DashboardComponents/MakeAdmin/MakeAdmin";
import HomeDashboard from "./components/DashboardComponents/DashboardHome/HomeDashboard";
import NotFound from "./components/NotFound/NotFound";
import Payment from "./components/DashboardComponents/Payment/Payment";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/placeOrder/:id"
            element={
              <PrivateRoute>
                <PlaceOrder />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path={`/dashboard`} element={<HomeDashboard />} />
            <Route exact path={`/dashboard/myOrder`} element={<MyOrders />} />
            <Route exact path={`/dashboard/payment/:productId`} element={<Payment />} />
            <Route
              exact
              path={`/dashboard/customerReview`}
              element={<CustomerReivew />}
            />

            <Route
              exact
              path={`/dashboard/manageOrders`}
              element={<ManageOrders />}
            />
            <Route
              exact
              path={`/dashboard/addProducts`}
              element={<AddProducts />}
            />
            <Route
              exact
              path={`/dashboard/manageProducts`}
              element={<ManageProducts />}
            />
            <Route
              exact
              path={`/dashboard/makeAdmin`}
              element={<MakeAdmin />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
