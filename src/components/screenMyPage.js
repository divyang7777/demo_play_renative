import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { themeStyles, hasWebFocusableUI } from '../config';

import { Card, ListItem, Button, Icon } from 'react-native-elements'
// import Video from 'react-native-video';


const ScreenMyPage = (props) => {

    const [showCards, setShowCards] = useState(true);

    return <View style={themeStyles.screen}>
        <ScrollView contentContainerStyle={themeStyles.container}>
            {/* https://www.dadabhagwan.tv/library/pujya+deepakbhai+sange+satsang+thi+soneri+prabhat+part-1000/ */}
            {showCards ? <><TouchableOpacity onPress={() => setShowCards(false)}>
                <Card>
                    <Card.Title style={{ width: 400 }}>Watch in Gujarati</Card.Title>
                    <Card.Divider />
                    <Card.Image source={{ uri: 'https://satsang.dadabhagwan.org/assets/img/video.svg' }} />
                </Card>
            </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowCards(false)}>
                    <Card>
                        <Card.Title style={{ width: 400 }}>Watch in Hindi</Card.Title>
                        <Card.Divider />
                        <Card.Image source={{ uri: 'https://satsang.dadabhagwan.org/assets/img/video.svg' }} />
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowCards(false)}>
                    <Card>
                        <Card.Title style={{ width: 400 }}>Watch in English</Card.Title>
                        <Card.Divider />
                        <Card.Image source={{ uri: 'https://satsang.dadabhagwan.org/assets/img/video.svg' }} />
                    </Card>
                </TouchableOpacity>
            </> :
                <>
                    {/* <Video source={{ uri: 'https://youtu.be/5W4yzUeL8cE?t=385' }}   // Can be a URL or a local file.
                        ref={(ref) => {
                            console.log(ref);
                        }}                                      // Store reference
                        onBuffer={() => { console.log('inside buffer !!!'); }}                // Callback when remote video is buffering
                        onError={() => { console.log('inside Error !!!'); }}               // Callback when video cannot be loaded
                        style={styles.backgroundVideo} /> */}
                </>
            }
        </ScrollView>
    </View>
};

export default (hasWebFocusableUI ? withFocusable()(ScreenMyPage) : ScreenMyPage);
