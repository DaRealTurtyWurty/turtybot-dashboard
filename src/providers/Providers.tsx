"use client";

import {SessionProvider, useSession} from "next-auth/react";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
    return <SessionProvider>
        {children}
    </SessionProvider>
}