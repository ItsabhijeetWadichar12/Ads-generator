import React from "react";
import WorkspaceProvider from "./provider";


function Workspacelayout({ children }) {
    return (
        <div>
            <WorkspaceProvider>
                {children}
            </WorkspaceProvider>
        </div>
    );
}

export default Workspacelayout;
