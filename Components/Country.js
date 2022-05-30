import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Country({ country }) {
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Country :{country.name.common}</Text>
            <Image
                style={{ height: 200, width: 200 }}
                source={{
                    uri: country.flags.png
                }}
            ></Image>
        </View>
    )
}

