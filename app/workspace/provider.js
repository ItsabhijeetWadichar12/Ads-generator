"use client";

import { useMutation } from "convex/react";
import React, { useState, useEffect } from "react";
import { api } from "../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "../../context/UserDetailContext";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import { useIsMobile } from "@/hooks/use-mobile"; // Import the hook

function WorkspaceProvider({ children }) {
    const newUserMutation = useMutation(api.users.CreateNewUser);
    const { user } = useUser();
    const [userDetails, setUserDetails] = useState();
    const isMobile = useIsMobile(); // Use the hook to detect mobile screens

    useEffect(() => {
        user && CreateNewUser();
    }, [user]);

    const CreateNewUser = async () => {
        const reslut = await newUserMutation({
            name: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress,
            picture: user?.imageUrl,
        });
        console.log(reslut);
        setUserDetails(reslut);
    };

    return (
        <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

                    {/* {isMobile && ( */}
                    <SidebarTrigger
                        className=" ml-3 mt-1 "
                    />
                    {/* )} */}
                    {children}
                </div>
            </SidebarProvider>
        </UserDetailContext.Provider>
    );
}

export default WorkspaceProvider;