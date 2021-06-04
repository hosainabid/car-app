
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={require("../../assets/images/ModelX.jpeg")}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>
                    Starting At <Text style={styles.subtitleCTA}>$69,000</Text>
                </Text>
            </View>

            <StyledButton
                type="primary"
                content={"Custom Order"}
                onPress={() => {
                    console.warn("Custom Order was pressed");
                }}
            />

            <StyledButton
                type="secondary"
                content={"Existing Inventory"}
                onPress={() => {
                    console.warn("Existing Inventory was pressed");
                }}
            />
        </View>
    );
};

export default CarItem;