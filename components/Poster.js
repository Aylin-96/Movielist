import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

const win = Dimensions.get ('window')
const w = win.width

const Poster = ({ data }) => {
    const { container, sub, cover, h1 } = styles
    const { image, name } = data
    return(
        <View style={container}>
            <View style={sub}>
                <Image style={cover}>
                    source={{ uri: image.medium }}
                </Image>
            </View>
            <Text style={h1}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: w/2.4,
        paddingVertical: 10
    },
    sub: {
        shadowColor: '#000',
        borderRadius: 10,
        shadowRadius: 8,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4
    },
    cover: {
        width: w/2.4,
        height: w*0.63,
        borderRadius: 10
    },
    h1: {
        paddingTop: 10,
        fontFamily: 'Roboto',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
    }
})

export default Poster