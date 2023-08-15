import { Box, Button, Container, Divider, Flex, HStack, Heading, Link, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue('white', 'gray.800')
    return (
        <>
            <Box bgColor={ bg } opacity={ .95 } position={ 'sticky' } top={ 0 } zIndex={ 100 } backdropBlur={ '10px' } >
                <Container maxW={ '8xl' } paddingY={ '2' }>
                    <Flex justify={ 'space-between' }>
                        <NavLink to={ '/' }><Heading as={ 'h1' }>GigihPlay</Heading></NavLink>
                        <HStack as={ 'nav' } >
                            <Button onClick={ toggleColorMode }>
                                { colorMode === 'light' ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon> }
                            </Button>
                        </HStack>
                    </Flex>
                </Container>
                <Divider></Divider>
            </Box >
        </>
    )
}

export default Navbar