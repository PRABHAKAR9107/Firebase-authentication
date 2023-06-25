import React from "react";

import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import LazyLoadingList from "./LazyLoadingList";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <LazyLoadingList email={user && user.email} handleLogout={handleLogout} />
    </>
  );
};

export default Home;
