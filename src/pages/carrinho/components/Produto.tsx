import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import Cardamom from "../../../../assets/Cardamom.png";
import Elyse from "../../../../assets/elyse.png";
import Florata from "../../../../assets/florata.png";
import Egeo from "../../../../assets/egeo.png";

import Deleite from "../../../../assets/deleite.png";
import Buballo from "../../../../assets/buballo.png";
import Liz from "../../../../assets/liz.png";
import Biscoito from "../../../../assets/biscoito.png";

import Shampoo from "../../../../assets/shampoo.png";
import Condicionador from "../../../../assets/condicionador.png";
import Creme from "../../../../assets/creme.png";
import Combo from "../../../../assets/combo.png";

import {CgSearch} from 'react-icons/cg';

export default function Produto() {
    return <>
     <View style={estilos.carrinho}>
        <Text style={estilos.titulocarrinho}>Produtos disponíveis</Text>
        <Text style={estilos.categoria}>Perfumes:</Text>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={Cardamom} />
          <View>
            <Text style={estilos.nomeProduto}>The Blend Cardamom</Text>
            <Text style={estilos.preco}>R$ 289,89</Text>
            <Text style={estilos.descricao}>
              The Blend Cardamom foi atrás do equilíbrio perfeito do calor e o
              frescor.
            </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={Elyse} />
          <View>
            <Text style={estilos.nomeProduto}>Elysée Succès Eau de Parfum</Text>
            <Text style={estilos.preco}>R$ 219,89</Text>
            <Text style={estilos.descricao}>
              Te incentiva a ser fiel a si mesma, sendo forte e original para
              conquistar o seu lugar de sucesso.
            </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={Florata} />
          <View>
            <Text style={estilos.nomeProduto}>
              Floratta Blue Desodorante Colônia
            </Text>
            <Text style={estilos.preco}>R$ 129,90</Text>
            <Text style={estilos.descricao}>
              Uma fragrância essencialmente feminina, o Floratta Blue
              Desodorante Colônia inspira felicidade, amor e positividade.
            </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={Egeo} />
          <View>
            <Text style={estilos.nomeProduto}>
              Egeo Red Desodorante Colônia
            </Text>
            <Text style={estilos.preco}>R$ 129,90</Text>
            <Text style={estilos.descricao}>
              Traz o cheiro licoroso do Rum, com o doce das frutas e o colorido
              das flores.
            </Text>
          </View>
        </View>

        <Text style={estilos.categoria}>Hidratantes:</Text>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={Deleite} />
          <View>
            <Text style={estilos.nomeProduto}>
              Loção Hidratante Desodorante Corporal Cuide-Se Bem Deleite 400m
            </Text>
            <Text style={estilos.preco}>R$ 62,90</Text>
            <Text style={estilos.descricao}>
              Uma fragrância doce e envolvente.
            </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={Buballo} />
          <View>
            <Text style={estilos.nomeProduto}>
              Loção Hidratante Desodorante Corporal Cuide-se Bem Bubbaloo Uva
              400ml
            </Text>
            <Text style={estilos.preco}>R$ 62,90</Text>
            <Text style={estilos.descricao}>
              Delicioso hidratante corporal que deixa sua pele macia, sedosa e
              perfumada com cheirinho inconfundível de Bubbaloo Uva.
            </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={Liz} />
          <View>
            <Text style={estilos.nomeProduto}>
              Creme Desodorante Hidratante Corporal Liz 250g
            </Text>
            <Text style={estilos.preco}>R$ 59,90</Text>
            <Text style={estilos.descricao}>
              Um cuidado adicional que traz a mesma fragrância da colônia, para
              envolver seu corpo da maneira que ele merece!
            </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={Biscoito} />
          <View>
            <Text style={estilos.nomeProduto}>
              Loção Hidratante Desodorante Corporal Cuide-se Bem Biscoito ou
              Bolacha 400ml
            </Text>
            <Text style={estilos.preco}>R$ 62,90</Text>
            <Text style={estilos.descricao}>
              Com cheirinho de baunilha e chocolate, deixa a pele macia e
              perfumada com uma fragrância gourmand doce e divertida.
            </Text>
          </View>
        </View>

        <Text style={estilos.categoria}>Produtos para o cabelo:</Text>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={Shampoo} />
          <View>
            <Text style={estilos.nomeProduto}>
              Shampoo Match Tônico do Crescimento, 250ml
            </Text>
            <Text style={estilos.preco}>R$ 29,90</Text>
            <Text style={estilos.descricao}>
              Muitos fatores podem impedir o crescimento dos cabelos, inclusive
              a quebra excessiva devido à fragilidade dos fios.
            </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={Condicionador} />
          <View>
            <Text style={estilos.nomeProduto}>
              Condicionador Match Science Crescimento 250ml
            </Text>
            <Text style={estilos.preco}>R$ 47,90</Text>
            <Text style={estilos.descricao}>
              Condicionador Match Science Crescimento entrega cabelos
              hidratados, macios, fortes, desembaraçados com facilidade e com
              redução significativa da quebra e da queda.
            </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={Creme} />
          <View>
            <Text style={estilos.nomeProduto}>
              Creme de Pentear Match Esquadrão do Brilho 150ml
            </Text>
            <Text style={estilos.preco}>R$ 34,90</Text>
            <Text style={estilos.descricao}>
              O creme de pentear da Match Brilho possui o efeito capa de chuva e
              também garante a proteção térmica dos fios para que você possa
              usar secador e chapinha sem perder o brilho nas madeixas!
            </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={Combo} />
          <View>
            <Text style={estilos.nomeProduto}>
              
              Combo Match Cronograma Capilar: Máscara Crescimento 250g + Máscara
              Nutrição 250g + Máscara Reconstrução 250g
            </Text>
            <Text style={estilos.preco}>R$ 153,50</Text>
            <Text style={estilos.descricao}>
              O Combo Match Cronograma Capilar apresenta os cuidados necessários
              para um cabelo saudável e bonito: uma Máscara Crescimento, uma
              Máscara Nutrição e uma Máscara Reconstrução para um cronograma
              capilar potente e eficaz nos cuidados com seus fios
            </Text>
          </View>
        </View>
      </View>
    </>
}

const estilos = StyleSheet.create({
titulo: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 26,
    width: "100%",
    textAlign: "center",
    color: "white",
    position: "absolute",
    padding: 16,
  },
  titulocarrinho: {
    left: 3,
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontserratBold",
  },

  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  imagemFazenda: {
    width: 82,
    height: 52,
  },

  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  descricao: {
    maxWidth: 250,
    left: 10,
    color: "#535252",
    fontStyle: "italic",
  },

  preco: {
    left: 10,
    fontSize: 26,
    lineHeight: 42,
    color: "#2a9f85",
  },

  imagemProduto: {

    width: 92,
    height: 110,
    borderRadius: 5,
  },

  nomeProduto: {
    maxWidth: 250,
    left: 10,
    fontSize: 18,
    lineHeight: 26,
  },

  divProduto: {
    backgroundColor: "#FBEBFD",
    maxWidth: 370,
    flexDirection: "row",
    marginTop: 20,
    borderRadius: 15
  },

  categoria: {
    borderRadius: 10,
    fontSize: 20,
    lineHeight: 42,
    color: "#464646",
  },
});
