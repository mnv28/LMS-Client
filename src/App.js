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

import { createContext, useEffect, useReducer, useState } from "react";

import { initialState, reducer } from "../src/reducer/useReducer";
import Success from "./components/payment/Success";
import Failure from "./components/payment/Failure";
import Protected from "./components/Protected";
import PrivacyPolicy from "./components/Legal/PrivacyPolicy";
import TermsOfServices from "./components/Legal/TermsOfServices";
import Footer from "./components/footer/Footer";
import axios from "axios";
import RefundReturns from "./components/Legal/RefundReturns";
import Subjects from "./components/SubjectList/Subjects";
import TopicList from "./components/TopicList/TopicList";
import NotFoundPage from "./components/404/NotFoundPage";

export const UserContext = createContext();
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [CourseData, setCourseData] = useState(null);
  const [standardData, setStandardData] = useState(null);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/api/course/courses")
        .then(async (res) => {
          setCourseData(res.data.courses);
          console.log(res.data.courses);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      return;
    }
    try {
      axios
        .get("http://localhost:5000/api/class/classes-list")
        .then(async (res) => {
          setStandardData(res.data.classes);
          console.log(res.data.classes);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
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
                  {standardData ? (
                    <Home CourseData={CourseData} standardData={standardData} />
                  ) : null}
                  {/* <Home CourseData={CourseData} /> */}
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
                  {standardData ? (
                    <Home CourseData={CourseData} standardData={standardData} />
                  ) : null}
                  {/* <Home CourseData={CourseData} /> */}
                </Protected>
              }
            />

            <Route
              exact
              path="/standard/:subjects"
              element={
                <Protected>
                  {CourseData ? <Subjects CourseData={CourseData} /> : null}
                </Protected>
              }
            />

            <Route
              exact
              path="courseData/:standard/:subject"
              element={
                <Protected>
                  {CourseData ? <TopicList CourseData={CourseData} /> : null}
                </Protected>
              }
            />

            <Route
              exact
              path="/Topic/:topic/:subject/:id"
              element={
                <Protected>
                  {CourseData ? <DetailPage CourseData={CourseData} /> : null}
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
            <Route
              exact
              path="/privacy-policy"
              element={
                <Protected>
                  <PrivacyPolicy />
                </Protected>
              }
            />
            <Route
              exact
              path="/refund-&-return"
              element={
                <Protected>
                  <RefundReturns />
                </Protected>
              }
            />
            <Route exact path="/success" element={<Success />} />
            <Route exact path="/failure" element={<Failure />} />
            <Route exact path="*" element={<NotFoundPage />} />
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
