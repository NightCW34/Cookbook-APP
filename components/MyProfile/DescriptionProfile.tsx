
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function DescriptionProfile() {
    return (
        <View style={styles.container}>
            <Text style={styles.textProfile}>Mi perfil</Text>
            <Entypo name="dots-three-horizontal" style={styles.points} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    textProfile: {
        fontSize: 20,
        marginTop: 150,
    },

    points: {
        color: "black",
        fontSize: 20,
    }
});