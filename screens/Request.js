import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, Button } from 'react-native';
import firebase from "firebase"
import db from "../config"



export default class RequestScreen {
    constructor() {
        this.state = {

        }
    }

    render() {
        return(
            <View>
                Hello, This is the Request Screen!
            </View>
        )
    }
}