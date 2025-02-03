import Header from "@/components/Header";
import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import React from "react";

const UserProfilePage = () => {
  return (
    <>
      <Header title="Profile" subtitle="View your profile" />
      <div className="flex w-full h-full items-center justify-center">

      <UserProfile
        path="/user/profile"
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

export default UserProfilePage;
