import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = props => {
    const { viewStyle, textStyle } = styles
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 120,
        backgroundColor: 'seagreen',
        justifyContent: 'center',
        paddingTop: 70,
        paddingLeft: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 30,
        fontFamily: 'Roboto',
        color: 'black',
    }
})

export default Header