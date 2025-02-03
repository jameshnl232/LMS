import Header from "@/components/Header";
import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import React from "react";

const TeacherProfilePage = () => {
  return (
    <>
      <Header title="Profile" subtitle="View your profile" />
      <div className="flex justify-center items-center w-full h-full">
        <UserProfile
          path="/teacher/profile"
          routing="path"
          appearance={{
            baseTheme: dark,
            elements: {
              navbar: {
                "& > div:nth-child(1)": {
                  background: "none",
                },
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default TeacherProfilePage;
