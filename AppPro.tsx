import React from "react";

import {
    Text,
    View,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'

    return(
        <View style={style.container1}>
            <Text>hello world
            </Text>

        </View>
    )
}
const style=StyleSheet.create({
    container1:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    }
})
export default AppPro