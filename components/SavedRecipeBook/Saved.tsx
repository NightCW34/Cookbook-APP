
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SavedImages } from '../SavedRecipeBook/SavedImages';


export default function Saved() {
    return (
        <View style={styles.container}>

            <ScrollView>
                <Text style={styles.Save}>Recetas guardadas</Text>

                <View style={styles.containerDiv}>
                    <View>
                        <Text style={styles.textVideo}>Video</Text>
                    </View>

                    <Text style={styles.textRecipe}>Recipe</Text>
                </View>


                <SavedImages img1={require('../../Images/waffles.jpg')} rating={'5,0'} text1={'Como hacer una tostada'} img2={require('../../Images/mujer1.jpg')} text2={'By Roberta Anny'} />
                <SavedImages img1={require('../../Images/sushi.jpg')} rating={'4,5'} text1={'How to make sushi at home'} img2={require('../../Images/mujer2.jpg')} text2={'By Niki Samantha'} />
                <SavedImages img1={require('../../Images/cereal.jpg')} rating={'4,9'} text1={'Easy oatmeal recipe'} img2={require('../../Images/hombre.jpg')} text2={'By James Woiden'} />

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Save: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#181818",
        marginHorizontal: 30,
        marginVertical: 40,
        marginTop: 60,
    },

    containerDiv: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textVideo: {
        backgroundColor: "#e23e3e",
        color: "#ffffff",
        width: "200%",
        height: 30,
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "Poppins_400Regular",
        marginStart: 30,
        marginTop: -5,
        borderRadius: 10,
        textAlign: "center",
        textAlignVertical: "center",
    },

    textRecipe: {
        fontSize: 15,
        fontFamily: "Poppins_400Regular",
        color: "#ee8b8b",
        fontWeight: "bold",
        marginVertical: 35,
        marginEnd: 110,
        marginTop: -5,
    },
});