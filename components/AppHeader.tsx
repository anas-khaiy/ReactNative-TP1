import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mon Application React Native</Text>
            <Text style={styles.subtitle}>Premier composant réutilisable</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4CE14',
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
        marginTop: 4,
    },
});