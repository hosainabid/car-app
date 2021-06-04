import React from "react";
import { ImageBackground, Text, View } from "react-native";
import styles from "./styles";

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={require("../../assets/images/ModelX.jpeg")}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>model s</Text>
                <Text style={styles.subtitle}>
                    xx <Text style={styles.subtitleCTA}>xx</Text>
                </Text>
            </View>
        </View>
    );
};

export default CarItem;
