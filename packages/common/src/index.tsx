import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";


export const App = () => {
  const [count, setCount] = useState(0);


  
    
  const Details = [
      { image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ikea.com%2Fus%2Fen%2Fimages%2Fproducts%2Fekedalen-chair-brown__0728288_PE736165_S4.JPG&imgrefurl=https%3A%2F%2Fwww.ikea.com%2Fus%2Fen%2Fcatalog%2Fproducts%2F40341115%2F&docid=WNi3hSFyfZ6ysM&tbnid=84nI3_wZhbpD9M%3A&vet=10ahUKEwiNgeHTmLjkAhUGHbkGHQCwCnUQMwhRKAEwAQ..i&w=500&h=500&bih=692&biw=1517&q=chair%20image&ved=0ahUKEwiNgeHTmLjkAhUGHbkGHQCwCnUQMwhRKAEwAQ&iact=mrc&uact=8'},
      {image
        : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ikea.com%2Fus%2Fen%2Fimages%2Fproducts%2Fmartin-chair-black__0729761_PE737128_S4.JPG&imgrefurl=https%3A%2F%2Fwww.ikea.com%2Fus%2Fen%2Fcatalog%2Fproducts%2FS09219527%2F&docid=JWhIk6MK4gwt_M&tbnid=_ZNxcs9y6HOq4M%3A&vet=10ahUKEwiNgeHTmLjkAhUGHbkGHQCwCnUQMwhPKAAwAA..i&w=500&h=500&bih=692&biw=1517&q=chair%20image&ved=0ahUKEwiNgeHTmLjkAhUGHbkGHQCwCnUQMwhPKAAwAA&iact=mrc&uact=8'},
      {image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.jysk.com%2Fgetimage%2Fwd2.large%2F31051&imgrefurl=https%3A%2F%2Fjysk.co.uk%2Fdining-room%2Fdining-chairs%2Fdining-chair-silkeborg-grey-oak&docid=QF1IyFaZHAVDCM&tbnid=_k0LyZhDvunSLM%3A&vet=10ahUKEwiNgeHTmLjkAhUGHbkGHQCwCnUQMwhTKAIwAg..i&w=561&h=1024&bih=692&biw=1517&q=chair%20image&ved=0ahUKEwiNgeHTmLjkAhUGHbkGHQCwCnUQMwhTKAIwAg&iact=mrc&uact=8'}
    ];

  return (
    
    <View style={styles.container}>
      <View>
        <Modal isVisible={true}>
          <View style={{ flex: 1 }}>
            <Text>I am the modal content!</Text>
          </View>
        </Modal>
      </View>
      <View style={styles.header}>
        <Image source={require('./goBots_logo.png')} style={styles.headerIcons} />
      </View>
      <View style={styles.topContainer}>
      <Text style={styles.titulo}>
        Cadeira Flextronic (#55443)
      </Text>
        <View style={styles.productContainer}>
        <Image source={require('./chair.jpeg')} style={styles.productImages} />  
            <Text>
              Kit com quatro cadeiras Flextronic pretas {"\n\n"} R$450 {"\n\n"} 5 produtos no estoque</Text>
          </View>
          <View style={styles.descContainer}>
        </View>
        <View style={styles.iconsContainer}>
          <Image source={require('./search.png')} style={styles.descIcons} />
          <Image source={require('./price.png')} style={styles.descIcons} />
          <Image source={require('./estoque.png')} style={styles.descIcons} />
        </View>
      </View>
    </View>
    
  );
};




interface Props {
  excercise: string;
  repsAndWeight: string;
  sets: string[];
}
const styles = StyleSheet.create({
  sourceImage: {
    width: "33%",
    height: "50%"
  },
  titulo: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 22,
    margin: 5
  },
  header: {
    flex: 3,
    width: '100%',
    height: 50,
    minHeight: 50,
    maxHeight: 50,
    backgroundColor: '#000000'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%', 
    height: '100%' // or 'stretch'
  },
  productImages: {
    width: "33%",
    height: "50%",    
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 50
  },
  headerIcons: {
    flex: 2,
    maxWidth: 80,
    maxHeight: 35,
    width: 80,
    height: 35,    
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginTop: 5
  },
  descIcons: {
    flex: 2,
    maxWidth: 20,
    maxHeight: 20,
    alignSelf: 'flex-end',
    width: 20,
    height: 20,
    margin: 5,    
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end'
  },
  textIcons: {
    flex: 2,
    maxWidth: 20,
    maxHeight: 20,
    width: 20,
    height: 20,    
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start'
  },
  container: {
    flex: 1,
    position:'absolute',
    alignSelf: "center",
    width: "100%",
    maxWidth: 400,
    height: Dimensions.get("window").height,
    maxHeight: 400
  },
  descContainer: {
    flex: 1,
    width: "50%",
    height: "50%",
    alignItems: "flex-start",
    justifyContent: 'flex-start'
  },
  productContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    height: Dimensions.get("window").height
  },
  topContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: 'column',
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3
  },
  iconsContainer: {
    flex: 2,
    width: '100%',
    height: 20,
    maxHeight: 20,
    alignSelf: "flex-start",
    alignItems: "flex-start",
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse'
  },
  cardContainer: {
    flex: 1,
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  card: {
    minWidth: 400,
    borderRadius: 3,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: "column",
    padding: 10
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  topRowText: {
    fontSize: 16
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14
  },
  circle: {
    borderRadius: 100,
    backgroundColor: "#8FB299",
    padding: 15
  },
  whiteText: {
    color: "#fff"
  },
  circleText: {
    fontSize: 16
  },
  grayText: {
    color: "gray"
  },
  fadedBackground: {
    backgroundColor: "#B2A1A1"
  }
});


const WorkoutCard: React.FC<Props> = ({
  excercise,
  repsAndWeight,
  sets
}) => (<View style={styles.card}>
  <View style={styles.topRow}>
    <Text style={styles.topRowText}>{excercise}</Text>
    <Text style={styles.topRowText}>{repsAndWeight}</Text>
  </View>
  <View style={styles.bottomRow}>
    {sets.map((set, index) => {
      if (set === "x") {
        return (<View style={[styles.circle, styles.fadedBackground]} key={set + index}>
          <Text style={[styles.grayText, styles.circleText]}>X</Text>
        </View>);
      }
      if (set === "") {
        return (<View style={[styles.circle, styles.fadedBackground]} key={set + index} />);
      }
      return (<View style={styles.circle} key={set + index}>
        <Text style={[styles.whiteText, styles.circleText]}>{set}</Text>
      </View>);
    })}
  </View>
</View>);