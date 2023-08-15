import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './components/navbar';
import { Container, Flex } from '@chakra-ui/react';
import VideoPlayer from './components/video-player';
import CommentSection from './components/comment-section';
import ProductList from './components/product-list';
import { config } from "../configs/index.js";
import axios from 'axios';


const VideoDetail = () => {
    const { videoId } = useParams()
    const [videoData, setVideoData] = useState([])
    const [products, setProducts] = useState([])
    const [comments, setComments] = useState([])
    const [loadingProduct, setLoadingProduct] = useState(true)

    const getVideo = async () => {
        try {
            const res = await axios.get(`${config.api_host_url}/videos/${videoId}`)
            console.log(res.data)
            setVideoData(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const getProduct = async () => {
        try {
            const res = await axios.get(`${config.api_host_url}/products/${videoId}`)
            console.log(res.data)
            setProducts(res.data)
            setLoadingProduct(false)
        } catch (err) {
            console.log(err)
        }
    }

    const getComment = async () => {
        try {
            const res = await axios.get(`${config.api_host_url}/comments/${videoId}`)
            console.log(res.data)
            setComments(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const playVideo = async () => {
        try {
            const res = await axios.put(`${config.api_host_url}/play/${videoId}`)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getVideo()
        getProduct()
        getComment()
        playVideo()
    })
    return (
        <>
            <Navbar></Navbar>
            <Container maxW={ '8xl' } paddingY={ '2' } >
                <Flex>
                    <ProductList isLoading={ loadingProduct } products={ products }></ProductList>
                    {/* { console.log(videoData._id) } */ }
                    <VideoPlayer
                        id={ videoData._id }
                        title={ videoData.title }
                        views={ videoData.views }
                        likes={ videoData.likes }
                        desc={ videoData.desc }
                        videoUrl={ videoData.videoUrl }
                    ></VideoPlayer>
                    <CommentSection comments={ comments }></CommentSection>
                </Flex>

            </Container >

        </>
    )
}

export default VideoDetail