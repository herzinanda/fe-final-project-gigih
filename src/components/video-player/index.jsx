import { AspectRatio, Box, Heading } from '@chakra-ui/react'

const VideoPlayer = ({ id, title, views, likes, desc, videoUrl }) => {
    return (
        <Box flex='auto'
            top={ 0 }
            maxHeight='100vh'
            height='90vh'
            overflow='hidden'
            justifyContent='center'
            alignItems='center'
            p={ 4 }
            maxWidth={ '872px' }
        >
            <AspectRatio
                maxW='full'
                maxH='full'
                marginTop='12'
            >
                <iframe
                    title='naruto'
                    src={ videoUrl }
                    allowFullScreen
                    style={ { borderRadius: '20px' } }

                />
            </AspectRatio>
            <Box>
                <Heading as='h1' fontSize={ 20 } mt='4'>{ title }</Heading>
            </Box>
        </Box>
    )
}

// VideoPlayer.propTypes = {
//     video: PropTypes.objectOf(
//         PropTypes.shape({
//             _id: PropTypes.string.isRequired,
//             title: PropTypes.string.isRequired,
//             views: PropTypes.number.isRequired,
//             likes: PropTypes.number.isRequired,
//             desc: PropTypes.string.isRequired,
//             videoUrl: PropTypes.string.isRequired,
//         })
//     )
// }

export default VideoPlayer