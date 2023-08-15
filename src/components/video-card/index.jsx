import React from 'react'
import { Box, Card, CardBody, Heading, Stack, Text, Divider, CardFooter, ButtonGroup, Button, Image, Wrap, WrapItem, Icon, IconButton, Center, Link, textDecoration } from '@chakra-ui/react'
import { HiPlay } from 'react-icons/hi'

const VideoCard = ({ videoTitle, thumImg, videoUrl, views, videoId }) => {
    return (
        <Card maxW='sm'>
            <Link href={ `/video/${videoId}` } textDecoration={ 'none' }>
                <CardBody role='group' _hover={ { textDecoration: 'none' } }>
                    <Center
                        w={ 'full' }
                        position={ 'relative' }
                        role='group'
                    >
                        <Image
                            src={ thumImg }
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            zIndex={ 1 }
                            _groupHover={ { filter: 'brightness(60%)', transition: '0.3s' } }
                        />
                        <Icon
                            w={ 12 }
                            h={ 12 }
                            as={ HiPlay }
                            position={ 'absolute' }
                            top={ '85%' }
                            left={ '50%' }
                            transform={ 'translate(-50%, -50%)' }
                            color={ 'teal.300' }
                            zIndex={ 0 }
                            _groupHover={ { color: 'teal.300', transition: '0.5s ease', top: '50%', zIndex: 1 } }
                        />
                    </Center>
                    <Stack mt='6' spacing='1' >
                        <Heading size='sm'>Pemilik Video</Heading>
                        <Text fontSize={ 18 } fontWeight='semibold' noOfLines={ 2 }>
                            { videoTitle }
                        </Text>
                    </Stack>
                </CardBody>
            </Link>
        </Card >
    )
}

export default VideoCard