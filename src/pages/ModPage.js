import React from 'react'
import {Container, Grid, GridCol, Group, ScrollArea, Stack, Text} from "@mantine/core";

const ModPage = () => {
    
    return (
        <Container>
            <Grid sx={{ height: '100%'}} columns={24}>
                <Grid.Col span={19}>
                    <Stack justify="flex-start" spacing="xs" sx={{ height: '100%' }}>

                    </Stack>
                </Grid.Col>
                <Grid.Col xs={10} sm={9} md={9} lg={7} xl={5} span={5} sx={{ height: '100%' }}>
                    <Stack justify="flex-start" sx={{ height: '100%', maxHeight: '100%' }}>
                        <Text>Lista</Text>
                        <ScrollArea sx={{ '.mantine-ScrollArea-viewport > div': { display: 'block !important' } }}>
                            <Group direction="column" spacing="xs" sx={{ height: '100%' }}>
                                {/*reszta*/}
                            </Group>
                        </ScrollArea>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default ModPage