import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import Produto from "./components/Produto";
import Topo from "./components/Topo";
import produto from './mocks/Produto';



export default function Carrinho() {
  return (
    <>
      
        <Topo titulo={produto.topo.titulo}/>
        <Produto descricao={produto.produtos.descricao}
                 descricao2={produto.produtos.descricao2}
                 descricao3={produto.produtos.descricao3}
        />
    </>
  );
}

