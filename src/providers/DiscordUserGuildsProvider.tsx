import React, {createContext, useContext, useState} from "react";

interface Guild {
    id: string;
    name: string;
    icon?: string;
    owner: boolean;
    permissions: number;
    permissions_new: string;
    features: string[];
}

interface DiscordUserGuildsContext {
    guilds: Guild[];
    setGuilds: React.Dispatch<React.SetStateAction<Guild[]>>;
}

const DiscordUserGuildsContext = createContext<DiscordUserGuildsContext | undefined>(undefined);

export function DiscordUserGuildsProvider({children}: { children: React.ReactNode }) {
    const [guilds, setGuilds] = useState<Guild[]>([]);
    return (
        <DiscordUserGuildsContext.Provider value={{guilds, setGuilds}}>
            {children}
        </DiscordUserGuildsContext.Provider>
    )
}

export function useDiscordUserGuilds() {
    const context = useContext(DiscordUserGuildsContext);
    if (!context) {
        throw new Error('useDiscordUserGuilds must be used within a DiscordUserGuildsProvider')
    }
    return context
}