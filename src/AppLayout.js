import React from 'react';
import {useNavigate} from 'react-router-dom';
import IfAuth from "./IsAuth";
import UserAuth from "./components/UserAuth";
import {AppShell, Button, Group, Space, Text} from "@mantine/core";

function AppLayout({ children }) {
    const navigate = useNavigate();
    return (
        <AppShell
            header={{ height: 60 }}
            padding="md"
        >
            <AppShell.Header>
                <Group justify={"space-between"} position="apart" align="center" sx={{ height: '100%' }} style={{padding: '10px 20px'}}>
                    <Group align="center">
                        <Text size={"xl"}>Wishlister</Text>
                        <Space/>
                        <Group spacing={0}>
                            <Button onClick={() => navigate('/')}>Home</Button>
                            <IfAuth>
                                <Button onClick={() => navigate('/mod')}>Moderator</Button>
                                <Button onClick={() => navigate('/streamer')}>Streamer</Button>
                            </IfAuth>
                        </Group>
                    </Group>
                    <UserAuth/>
                </Group>
            </AppShell.Header>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}

export default AppLayout;


