import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { themeStyles, hasWebFocusableUI } from '../config';

import { Card, ListItem, Button, Icon } from 'react-native-elements'
import moment from 'moment';
import HTML from "react-native-render-html";


const ScreenMyPage = (props) => {

    const [showCards, setShowCards] = useState(true);
    const [embedURL, setEmbedURL] = useState('');
    const [contentWidth, setContentWidth] = useState(useWindowDimensions().width);

    useEffect(() => {
        // callApi()
        console.log(embedURL);
    }, [embedURL]);

    const callApi = async () => {
        await fetch(`https://dbapi.dadabhagwan.org/api/tv/curtvprogram?curtime=${moment().format('kk:mm:ss')}&curdate=${moment().format('DD/MM/YYYY kk:mm:ss')}&channel=58&daytransition=0&liveflag=0`)
            .then((response) => response.json())
            .then(async (res) => {
                // await setEmbedURL(res.result["curtvprogram"][0].YOUTUBE_EMBED_CODE)
                await setEmbedURL(res.result["curtvprogram"][0].YOUTUBE_EMBED_CODE.split('src="')[1].split('" ')[0])
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return <View style={themeStyles.screen}>
        <ScrollView contentContainerStyle={themeStyles.container}>
            {showCards ? <><TouchableOpacity onPress={async () => {
                await callApi()
                setShowCards(false)
            }}>
                <Card>
                    <Card.Title style={{ width: 400 }}>Watch in Gujarati</Card.Title>
                    <Card.Divider />
                    <Card.Image source={{ uri: 'https://satsang.dadabhagwan.org/assets/img/video.svg' }} />
                </Card>
            </TouchableOpacity>
                <TouchableOpacity onPress={async () => {
                    await callApi()
                    setShowCards(false)
                }}>
                    <Card>
                        <Card.Title style={{ width: 400 }}>Watch in Hindi</Card.Title>
                        <Card.Divider />
                        <Card.Image source={{ uri: 'https://satsang.dadabhagwan.org/assets/img/video.svg' }} />
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={async () => {
                    await callApi()
                    setShowCards(false)
                }}>
                    <Card>
                        <Card.Title style={{ width: 400 }}>Watch in English</Card.Title>
                        <Card.Divider />
                        <Card.Image source={{ uri: 'https://satsang.dadabhagwan.org/assets/img/video.svg' }} />
                    </Card>
                </TouchableOpacity>
            </> :
                <>
                    <iframe src={embedURL} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            position: 'fixed', top: 0, left: 0, bottom: 0,
                            right: 0, width: '100%', height: '100%',
                            border: 'none', margin: 0, padding: 0, overflow: 'hidden', zIndex: 999
                        }}>
                    </iframe>

                    {/* <HTML source={{ html: embedURL }} contentWidth={contentWidth} /> */}
                    {/* {embedURL && embedURL.length > 0 &&
                        <video id="video" width='100%' height="auto"
                            poster="https://satsang.dadabhagwan.org/assets/img/video.svg"
                            preload="auto" autoPlay={true} controls loop>
                            <source src={embedURL} type="video/youtube" />
                        </video>} */}
                </>
            }
        </ScrollView>
    </View>
};

export default (hasWebFocusableUI ? withFocusable()(ScreenMyPage) : ScreenMyPage);
