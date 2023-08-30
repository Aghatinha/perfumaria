import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import topo from "../../../assets/topo.png";
import Cardamom from "../../../assets/Cardamom.png";
import Elyse from "../../../assets/elyse.png";
import Florata from "../../../assets/florata.png";
import Egeo from "../../../assets/egeo.png";

import Deleite from "../../../assets/deleite.png";
import Buballo from "../../../assets/buballo.png";
import Liz from "../../../assets/liz.png";
import Biscoito from "../../../assets/biscoito.png";

import Shampoo from "../../../assets/shampoo.png";
import Condicionador from "../../../assets/condicionador.png";
import Creme from "../../../assets/creme.png";
import Combo from "../../../assets/combo.png";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />

      <View style={estilos.carrinho}>
        <Text style={estilos.titulocarrinho}>Produtos disponíveis</Text>
        <Text style={estilos.categoria}>Perfumes:</Text>

        <View>
          <Image style={estilos.imagemProduto} source={Cardamom} />
          <Text style={estilos.nomeProduto}>The Blend Cardamom</Text>
          <Text style={estilos.preco}>R$ 289,89</Text>
          <Text style={estilos.descricao}>
            The Blend Cardamom foi atrás do equilíbrio perfeito entre o calor e
            o frescor. Dessa obstinação, nasceu a fragrância que combina o
            coração quente da marca
          </Text>
        </View>

        <View>
          <Image style={estilos.imagemProduto} source={Elyse} />
          <Text style={estilos.nomeProduto}>Elysée Succès Eau de Parfum</Text>
          <Text style={estilos.preco}>R$ 219,89</Text>
          <Text style={estilos.descricao}>
            Elysée Succès Eau de Parfum te incentiva a ser fiel a si mesma,
            sendo forte e original para conquistar o seu lugar de sucesso.
          </Text>
        </View>

        <View>
          <Image style={estilos.imagemProduto} source={Florata} />
          <Text style={estilos.nomeProduto}>
            Floratta Blue Desodorante Colônia
          </Text>
          <Text style={estilos.preco}>R$ 129,90</Text>
          <Text style={estilos.descricao}>
            Uma fragrância essencialmente feminina, o Floratta Blue Desodorante
            Colônia inspira felicidade, amor e positividade.
          </Text>
        </View>

        <View>
          <Image style={estilos.imagemProduto} source={Egeo} />
          <Text style={estilos.nomeProduto}>Egeo Red Desodorante Colônia</Text>
          <Text style={estilos.preco}>R$ 129,90</Text>
          <Text style={estilos.descricao}>
            O Egeo Red traz o cheiro licoroso do Rum, com o doce das frutas e o
            colorido das flores. Uma combinação perfeita para uma fragrância
            feminina intensa, deliciosa e viciante!
          </Text>
        </View>

        <Text style={estilos.categoria}>Hidratantes:</Text>

        <View>
          <Image style={estilos.imagemProduto} source={Deleite} />
          <Text style={estilos.nomeProduto}>
            Loção Hidratante Desodorante Corporal Cuide-Se Bem Deleite 400m{" "}
          </Text>
          <Text style={estilos.preco}>R$ 62,90</Text>
          <Text style={estilos.descricao}>
            Uma fragrância doce e envolvente, aliada a textura cremosa do leite,
            que envolve a pele em um abraço aconchegante enquanto hidrata
            intensamente.
          </Text>
        </View>

        <View>
          <Image style={estilos.imagemProduto} source={Buballo} />
          <Text style={estilos.nomeProduto}>
            Loção Hidratante Desodorante Corporal Cuide-se Bem Bubbaloo Uva
            400ml{" "}
          </Text>
          <Text style={estilos.preco}>R$ 62,90</Text>
          <Text style={estilos.descricao}>
            Loção Hidratante Desodorante Corporal Cuide-se Bem Bubbaloo é um
            delicioso hidratante corporal que deixa sua pele macia, sedosa e
            perfumada com cheirinho inconfundível de Bubbaloo Uva.
          </Text>
        </View>

        <View>
          <Image style={estilos.imagemProduto} source={Liz} />
          <Text style={estilos.nomeProduto}>
            Creme Desodorante Hidratante Corporal Liz 250g{" "}
          </Text>
          <Text style={estilos.preco}>R$ 59,90</Text>
          <Text style={estilos.descricao}>
            O creme hidratante desodorante possui rápida absorção, sem deixar a
            pele pegajosa. Um cuidado adicional que traz a mesma fragrância da
            colônia, para envolver seu corpo da maneira que ele merece!
          </Text>
        </View>

        <View>
          <Image style={estilos.imagemProduto} source={Biscoito} />
          <Text style={estilos.nomeProduto}>
            Loção Hidratante Desodorante Corporal Cuide-se Bem Biscoito ou
            Bolacha 400ml{" "}
          </Text>
          <Text style={estilos.preco}>R$ 62,90</Text>
          <Text style={estilos.descricao}>
            Sua textura leve e cremosa traz uma hidratação potente para deixar
            sua pele super gostosa. Com cheirinho de baunilha e chocolate, deixa
            a pele macia e perfumada com uma fragrância gourmand doce e
            divertida.
          </Text>
        </View>

        <Text style={estilos.categoria}>Produtos para o cabelo:</Text>

        <View>
          <Image style={estilos.imagemProduto} source={Shampoo} />
          <Text style={estilos.nomeProduto}>
            Shampoo Match Tônico do Crescimento, 250ml{" "}
          </Text>
          <Text style={estilos.preco}>R$ 29,90</Text>
          <Text style={estilos.descricao}>
            Muitos fatores podem impedir o crescimento dos cabelos, inclusive a
            quebra excessiva devido à fragilidade dos fios. Amamos cabelos
            curtos e longos, mas sabemos que não há nada melhor do que desejar
            que os fios cresçam e ver resultados rápidos.
          </Text>
        </View>

        <View>
          <Image style={estilos.imagemProduto} source={Condicionador} />
          <Text style={estilos.nomeProduto}>
            Condicionador Match Science Crescimento 250ml{" "}
          </Text>
          <Text style={estilos.preco}>R$ 47,90</Text>
          <Text style={estilos.descricao}>
            O Condicionador Match Science Crescimento entrega cabelos
            hidratados, macios, fortes, desembaraçados com facilidade e com
            redução significativa da quebra e da queda. Sua fórmula com Baicapil
            ® e Óleo de Rícino garante crescimento saudável, nutrição intensa,
            brilho e maciez para seus fios, da raíz às pontas.
          </Text>
        </View>

        <View>
          <Image style={estilos.imagemProduto} source={Creme} />
          <Text style={estilos.nomeProduto}>
            Creme de Pentear Match Esquadrão do Brilho 150ml{" "}
          </Text>
          <Text style={estilos.preco}>R$ 34,90</Text>
          <Text style={estilos.descricao}>
            O creme de pentear da Match Brilho possui o efeito capa de chuva e
            também garante a proteção térmica dos fios para que você possa usar
            secador e chapinha sem perder o brilho nas madeixas!
          </Text>
        </View>

        <View>
          <Image style={estilos.imagemProduto} source={Combo} />
          <Text style={estilos.nomeProduto}>
            Combo Match Cronograma Capilar: Máscara Crescimento 250g + Máscara
            Nutrição 250g + Máscara Reconstrução 250g{" "}
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
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },

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
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontserratBold",
  },

  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  nomefazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: "MontserratBold",
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
    color: "#a3a3a3",
    fontStyle: "italic",
  },

  preco: {
    fontSize: 26,
    lineHeight: 42,
    color: "#2a9f85",
    marginTop: 8,
  },

  imagemProduto: {
    width: 92,
    height: 92,
    marginTop: 20,
  },

  nomeProduto: {
    fontSize: 18,
    lineHeight: 26,
  },

  divProduto: {
    flexDirection: "row",
    marginTop: 25,
  },

  categoria: {
    fontSize: 20,
    lineHeight: 42,
    color: "#464646",
  },
});
