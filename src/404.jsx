import { Box, Button, Center, Container, Link, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const NotFound = () => {
    return (
        <>
            <Center h='100vh' color='white'>
                <VStack>
                    <Text fontSize={ 20 }
                        fontWeight={ 'semibold' }
                        color={ useColorModeValue('black', 'white') }
                    >404 Page Not Found</Text>
                    <Link href='/'><Button colorScheme='teal'>Go to Homepage</Button></Link>
                </VStack>
            </Center >
        </>
    )
}

export default NotFound