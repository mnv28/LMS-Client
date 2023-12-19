import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourse from "./components/course/addCourse";
import Layout from "./components/Layout";
import StudentsList from "./components/students/StudentsList";

import Payments from "./components/payment/Payments";
import Certificates from "./components/certificate/Certificates";
import { FAQS } from "./components/faq/FAQS";
import Contact from "./components/contactus/Contact";
import { DetailPage } from "./components/detailPage/DetailPage";

import { createContext, useReducer } from "react";

import { initialState, reducer } from "../src/reducer/useReducer";
import Success from "./components/payment/Success";
import Failure from "./components/payment/Failure";
import Protected from "./components/Protected";
import PrivacyPolicy from "./components/Legal/PrivacyPolicy";
import TermsOfServices from "./components/Legal/TermsOfServices";
import Footer from "./components/footer/Footer";

export const UserContext = createContext();
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
            <Route exact path="/signup" element={<SignUp />} />
            <Route
              exact
              path="/faq"
              element={
                <Protected>
                  <FAQS />
                </Protected>
              }
            />
            <Route
              exact
              path="/contact"
              element={
                <Protected>
                  <Contact />
                </Protected>
              }
            />
            <Route
              exact
              path="/course/:id"
              element={
                <Protected>
                  <DetailPage />
                </Protected>
              }
            />
            <Route
              exact
              path="/home"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />

            {/* <Route exact path="/payment" element={<Payments/>}/> */}
            <Route exact path="/login" element={<SignIn />} />
            <Route
              exact
              path="/term-of-services"
              element={<TermsOfServices />}
            />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/success" element={<Success />} />
            <Route exact path="/failure" element={<Failure />} />
          </Routes>
          <Footer />
        </Router>
      </UserContext.Provider>
    </>
  );
};

export default App;

//  <Layout>
//         <Routes>
//           {/* <Route exact path="/" element={<Home/>}/>

//       <Route exact path="/signup" element={<SignUp/>}/>
//       <Route exact path="/contact" element={<Contactus/>}/> */}
//           <Route exact path="/add" element={<AddCourse />} />
//           <Route exact path="/student" element={<StudentsList/>}/>
//           <Route exact path="/courses" element={<CoursesList/>}/>
//           <Route exact path="/signin" element={ <SignIn/>}/>
//           <Route exact path="/payment" element={ <Payments/>}/>
//           <Route exact path="/certificate" element={<Certificates/>}/>
//         </Routes>
//       </Layout>
