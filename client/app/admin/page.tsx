"use client";
import React from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar";
import AdminProtected from "../hooks/adminProtected";
import DashboardHero from "../components/Admin/DashboardHero";

type Props = {};

const page = (props: Props) => {
  return (
    <div 
    // className="border text-black h-[100vh] flex items-center justify-center text-4xl"
    >
      <AdminProtected>
        <Heading
          title="Academia - Admin"
          description="Academia is a platform for students to learn and get help from teachers"
          keywords="Programming,MERN,Redux,Machine Learning"
        />
        <div className="flex min-h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%] text-black flex items-center justify-center text-4xl">
            Basic Dashboard 
          </div>
        </div>a
      </AdminProtected>
    </div>
  );
};

export default page;
