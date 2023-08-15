import { Box, Wrap, WrapItem } from '@chakra-ui/react'
import ProductCard from '../product-card'
import PropTypes from "prop-types";

const ProductList = ({ isLoading, products }) => {
    return (
        <>
            <Box as='nav'
                // display='none'
                position='sticky'
                overscrollBehavior='contain'
                padding={ 2 }
                top='60px'
                width='280px'
                height='calc(100vh-8.125rem)'
                maxHeight='100vh'
                overflowY='auto'
            >
                <Wrap spacing={ '20px' } justify={ 'center' }>
                    { products.map((product) => {
                        return (

                            <WrapItem key={ product._id }>
                                <ProductCard
                                    isLoading={ isLoading }
                                    videoId={ product.videoId }
                                    productTitle={ product.productTitle }
                                    productPrice={ product.productPrice }
                                    productImg={ product.productImg }
                                    productUrl={ product.productUrl }
                                    desc={ product.desc }
                                />
                            </WrapItem>
                        )
                    }) }
                </Wrap>
            </Box >
        </>
    )
}

ProductList.propTypes = {
    isLoading: PropTypes.bool,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            videoId: PropTypes.string.isRequired,
            productTitle: PropTypes.string.isRequired,
            productPrice: PropTypes.number.isRequired,
            productImg: PropTypes.string.isRequired,
            productUrl: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
        })
    )
}

export default ProductList