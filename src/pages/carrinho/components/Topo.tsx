import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import topo from "../../../../assets/topo.png";
const width = Dimensions.get("screen").width;

type Props = {
  titulo: string;
};

export default function Topo({titulo}: Props) {
    return <>
    <Image source={topo} style={estilos.topo} />
    <Text style={estilos.titulocarrinho}>{titulo}</Text>
</>
}

const estilos = StyleSheet.create({
    topo: {
      width: "100%",
      height: (578 / 768) * width,
    },

    titulocarrinho: {
      left: 3,
      fontSize: 26,
      lineHeight: 42,
      color: "#464646",
    },
  
    
});  