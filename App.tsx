import React from "react";
import {StatusBar, ScrollView } from "react-native";
import Carrinho from "./src/pages/carrinho";

export default function App() {

  return (
    <ScrollView>
      <StatusBar />
      <Carrinho />
    </ScrollView>
  );
}