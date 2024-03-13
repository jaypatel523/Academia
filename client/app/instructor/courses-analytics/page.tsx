'use client'
import React from 'react'
import InstructorSidebar from "../../components/Admin/sidebar/InstructorSidebar";
import Heading from '../../utils/Heading';
import CourseAnalytics from "../../components/Admin/Analytics/CourseAnalytics";
import DashboardHeader from '../../components/Admin/DashboardHeader';

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Heading
         title="Academia - Admin"
         description="Academia is a platform for students to learn and get help from teachers"
         keywords="Prograaming,MERN,Redux,Machine Learning"
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <InstructorSidebar />
            </div>
          <div className="w-[85%] h-[100vh] text-black flex items-center justify-center text-4xl">
            Course analytics 
          </div>
        </div>
    </div>
  )
}

export default page