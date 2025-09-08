"use client";

import { useMutation } from "convex/react";
import React, { useState, useEffect, useRef } from "react";
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
    const isUserCreated = useRef(false);
    const isMobile = useIsMobile(); // Use the hook to detect mobile screens

    useEffect(() => {
        if (user && !isUserCreated.current) {
            CreateNewUser();
            isUserCreated.current = true;
        }
    }, [user]);

    const CreateNewUser = async () => {
        try {
            const reslut = await newUserMutation({
                name: user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress,
                picture: user?.imageUrl,
            });
            console.log(reslut);
            setUserDetails(reslut);
        } catch (error) {
            console.error("Error creating new user:", error);
        }
    };

    return (
        <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
            <SidebarProvider>
                <AppSidebar />

                <div className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">

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