import VideoCard from './components/video-card'
import { Wrap, WrapItem } from '@chakra-ui/react'
import Navbar from './components/navbar'
import { config } from "../configs/index.js";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
    const [videos, setVideos] = useState([])
    const getAllVideos = async () => {
        try {
            const res = await axios.get(`${config.api_host_url}/videos/all`)
            console.log(res.data)
            setVideos(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllVideos()
    }, [])


    return (
        <>

            <Navbar></Navbar>
            <Wrap spacing={ '20px' } justify={ 'center' }>
                { videos.map((video) => {
                    return (
                        <WrapItem key={ video._id }>
                            <VideoCard
                                videoTitle={ video.title }
                                thumImg={ video.thumbnailImg }
                                videoUrl={ video.videoUrl }
                                views={ video.views }
                                videoId={ video._id }
                            ></VideoCard>
                        </WrapItem>
                    )
                }) }
            </Wrap >
        </>
    )
}

export default Home