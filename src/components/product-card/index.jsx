import { Card, CardBody, Center, Image, Stack, Text } from '@chakra-ui/react'

const ProductCard = ({ isLoading, videoId, productTitle, productPrice, productImg, productUrl, desc }) => {
    return (
        <Card maxW='sm'>
            { isLoading === true ? "Loading..." :
                <CardBody role='group' _hover={ { textDecoration: 'none' } }>
                    <Center
                        w={ 'full' }
                        position={ 'relative' }
                        role='group'
                    >
                        <Image
                            src={ productImg }
                            alt={ productTitle }
                            borderRadius='lg'
                            zIndex={ 1 }
                        />
                    </Center>
                    <Stack mt='6' spacing='1' >
                        <Text fontSize={ 16 } fontWeight='medium'>{ productTitle }</Text>
                        <Text fontSize={ 14 } fontWeight='semibold' noOfLines={ 2 }>
                            { `Rp ${productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}` }
                        </Text>
                    </Stack>
                </CardBody>
            }

        </Card >
    )
}

export default ProductCard