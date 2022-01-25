import React from 'react';
import {
    StatusBar,
    StyleSheet,
    View,
    Modal,
    Text
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { hp, wp } from '../Utils/Scale';
import { useTheme } from 'react-native-paper';

type Props = {
    loading: boolean;
}
function Loader({ loading }: Props) {
    const { colors } = useTheme();

    return (
        <View>
            <StatusBar hidden={false} backgroundColor={colors.background} barStyle={'dark-content'} />
            <Modal
                transparent={true}
                animationType={'none'}
                visible={loading}
                onRequestClose={() => { console.log('close modal') }}>
                <View style={styles.modalBackground}>
                    <Feather name='loader' size={60} color={colors.background} />
                    <Text style={{
                        fontSize: 24,
                        color: colors.background,
                        padding: 10
                    }}>
                        Loading...
                    </Text>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        height: hp(100),
        width: wp(100),
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey'
    },
   

});

export default Loader;
