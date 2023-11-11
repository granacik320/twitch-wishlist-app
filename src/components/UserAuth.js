import React from "react"
import {useSignOut} from 'react-auth-kit'
import IsAuth from "../IsAuth";
import {Avatar, Button, Group, Menu, Text, UnstyledButton} from "@mantine/core";
import {IconChevronDown, IconLogout} from "@tabler/icons-react";

const UserAuth = () => {
    const signOut = useSignOut()


    return (
        <Group>
            <IsAuth otherwise={
                <Button component="a" variant="gradient" gradient={{ from: 'blue', to: 'violet', deg: 58 }} href={`https://id.twitch.tv/oauth2/authorize?client_id=nvl3gdiuxo474oae0pphqwt2fc86il&&redirect_uri=http://localhost:3000/auth/&response_type=token&scope=${encodeURIComponent("user:read:email")}`}>Połącz z twitchem</Button>
            }>
                <Menu withArrow>
                    <Menu.Target>
                        <UnstyledButton>
                            <Group>
                                <Avatar></Avatar>
                                <Text>{localStorage.getItem("preferred_username") ? localStorage.getItem("preferred_username") : localStorage.getItem("login")}</Text>
                                <IconChevronDown/>
                            </Group>
                        </UnstyledButton>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Label>Zarządzanie</Menu.Label>
                        <Menu.Item leftSection={<IconLogout/>} onClick={() => signOut()}>Wyloguj</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </IsAuth>
        </Group>
    )
}
export default UserAuth;