import { Box, Button, Divider, Flex, FormControl, FormLabel, Heading, Input, Skeleton, Stack, StackDivider, Text, Textarea, VStack, useColorModeValue } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { config } from '../../../configs';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CommentSection = () => {
    const { videoId } = useParams()
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)

    const [form, setForm] = useState({
        username: "",
        comment: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            console.log(form)
            const res = await axios.post(
                `${config.api_host_url}/comments/${videoId}`,
                form
            );
            console.log(res)
            window.location.reload();
        } catch (err) {
            console.log(err)
        }

    }

    const getComment = useCallback(
        async () => {
            try {
                const res = await axios.get(`${config.api_host_url}/comments/${videoId}`)
                console.log(res.data)
                setComments(res.data)
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        },
        [],
    )

    useEffect(() => {
        getComment()

    }, [getComment])

    return (
        <Flex direction={ 'column' } >
            <Box>
                <Box as='nav'
                    width='16rem'
                    flexShrink={ 0 }
                    position='sticky'
                    paddingTop={ 10 }
                    paddingBottom={ 10 }
                    paddingRight={ 4 }
                    top='6rem'
                    right={ 0 }
                    alignSelf='start'
                    height='calc(100vh-8rem)'
                    maxHeight='100vh'
                    overflowY='auto'
                    visibility='initial'
                    overscrollBehavior='contain'
                >
                    { loading === true ?
                        <>
                            <Stack>
                                <Skeleton height='24px' mt={ 4 } />
                                <Skeleton height='16px' />
                                <Skeleton height='14px' />
                                <Skeleton height='16px' mt={ 1 } />
                                <Skeleton height='70px' />
                                <Skeleton height='16px' />
                                <Skeleton height='16px' mt={ 3 } />
                                <Skeleton height='18px' mt={ 1 } />
                                <Skeleton height='16px' />
                                <Skeleton height='18px' mt={ 2 } />
                                <Skeleton height='16px' />
                                <Skeleton height='18px' mt={ 2 } />
                                <Skeleton height='16px' />
                                <Skeleton height='18px' mt={ 2 } />
                                <Skeleton height='16px' />
                                <Skeleton height='18px' mt={ 2 } />
                                <Skeleton height='16px' />
                            </Stack>
                        </>
                        :
                        <>
                            <Heading as='h3' fontSize={ '20px' }>Komentar</Heading>
                            <Box
                                // bg={ 'red.200' }
                                marginBottom={ 4 }
                            >
                                <FormControl onChange={ handleChange } >
                                    <FormLabel fontWeight={ 'semibold' } marginTop={ 2 } marginBottom={ 1 }>Nama</FormLabel>
                                    <Input name='username' value={ form.username } onChange={ handleChange } placeholder='Masukkan nama' size='sm' />
                                    <FormLabel fontWeight={ 'semibold' } marginTop={ 2 } marginBottom={ 1 }>Nama</FormLabel>
                                    <Textarea
                                        name='comment'
                                        placeholder='Tulis komentar Anda di sini'
                                        size='md'
                                        resize={ 'none' }
                                        marginBottom={ 2 }
                                        value={ form.comment }
                                        onChange={ handleChange }
                                    />
                                    <Button type='submit' onClick={ handleSubmit } colorScheme='teal' variant='solid' size='sm'>
                                        Kirim
                                    </Button>
                                </FormControl>
                            </Box>
                            <Divider borderColor={ useColorModeValue('gray.200', 'gray.600') } />
                        </>
                    }

                    <Box marginTop={ 4 }>
                        <VStack
                            spacing={ 2 }
                            alignItems={ 'start' }
                            divider={ <StackDivider borderColor={ useColorModeValue('gray.200', 'gray.600') } /> }
                        >
                            { comments.map(comment => {
                                return (
                                    <VStack key={ comment._id }
                                        spacing={ 1 }
                                        align={ 'flex-start' }
                                    >

                                        <>
                                            <Text fontWeight='semibold' fontSize={ 16 }>{ comment.username }</Text>
                                            <Text fontSize={ 14 } alignItems={ 'start' }>{ comment.comment }</Text>
                                        </>

                                    </VStack>
                                )
                            }) }

                        </VStack>
                        <VStack
                            spacing={ 2 }
                            alignItems={ 'start' }
                            divider={ <StackDivider borderColor={ useColorModeValue('gray.200', 'gray.600') } /> }
                        >
                            { comments.map(comment => {
                                return (
                                    <VStack key={ comment._id }
                                        spacing={ 1 }
                                        align={ 'flex-start' }
                                    >
                                        <Text fontWeight='semibold' fontSize={ 16 }>{ comment.username }</Text>
                                        <Text fontSize={ 14 } alignItems={ 'start' }>{ comment.comment }</Text>
                                    </VStack>
                                )
                            }) }

                        </VStack>
                    </Box>
                </Box>

            </Box>

        </Flex >
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            videoId: PropTypes.string.isRequired,
        })
    )
}

export default CommentSection