//<!--The IIE,2024.MAST5112/d/p/w MODULE MANUAL/GUIDE. 2012-->
//fitness tracker app 
//navigation version
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { dishDetails } from './type/task.Object';
import { Alert } from 'react-native';
import React from 'react';
export default function App() {

  const [dish, setDish] = useState<dishDetails[]>([]); // Array containg the list of dish's 
  const [dishName, setDishName] = useState<string>('');// holding disname
  const [description, setDescription] = useState<string>('');// holding dish description
  const [courseType, setType] = useState<string>('');// holding dish type 
  const [price, setPrice] = useState<string>(''); // holding dish price


  const CourseType = ['Appetisers', 'Main Course', 'Salad', 'Sides', 'Dessert']; // dish types
  const handleSubmit = () => {//  submit the new details the user will input
    if (dishName && description && courseType && price && parseInt(price) > 0) {
      const newWorkout: dishDetails = {
        dish_Name: dishName,
        description: description,
        course_Type: courseType,
        Price: parseInt(price)

      };
      // add the details
      setDish([...dish, newWorkout]);
      setDishName('');
      setDescription('');
      setType('None');
      setPrice('');
    } else if (parseInt(price) <= 0) {
      Alert.alert("Incorrect input", "Price need to be greater than 0", [
        { text: "OK" }, // make sure that the user input number greater than 0
      ]);
    }

    else {
      Alert.alert("Incomplete form",
        "Please fill all the fields", [
        { text: "OK" } // make sure that the user full fill all the spaces 
      ]);


    }
  }
  const totalDishes = dish.length
  return (
    // display for the user input
    <SafeAreaView style={styles.itemContainer}>
      <View style={styles.headingContainer}>
        <Image source={require('./_images/mast.png')} style={styles.img}></Image>
        <Text style={styles.heading}> Dine with Cristofel</Text>
      </View>
      <View style={styles.summaryContainer}>
        <View >
          <Text style={styles.summaryText}>Total Dishes: {totalDishes} </Text>
        </View>
      </View>
      <View style={styles.cont}>
        <Text style={styles.heading}>Menu</Text>
      </View>
      <FlatList
        style={styles.lifeStyle}
        data={dish}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.OtherDetail}>{item.course_Type} </Text>
            <Text style={styles.dishName}>Dish Name: {item.dish_Name}</Text>
            <Text style={styles.OtherDetails}>Description: {item.description} min </Text>
            <Text style={styles.OtherDetails}>Price: {item.Price} </Text>
          </View>
        )}
      //ends here
      ></FlatList>
      <View style={styles.userInputView} >
        <Text style={styles.heading}>Add menu items</Text>
        <Picker
          selectedValue={courseType}
          onValueChange={(itemValeu) => setType(itemValeu)}
          style={styles.input}>
          {CourseType.map((courseType) => (
            <Picker.Item label={courseType} value={courseType} key={courseType} />
          ))}
        </Picker>
        <TextInput style={styles.input}
          placeholder='Dish name'
          value={dishName}
          onChangeText={setDishName}>
        </TextInput>

        <TextInput style={styles.input}
          placeholder='Descreiption'
          value={description}
          onChangeText={setDescription}>
        </TextInput>
        <TextInput
          style={styles.input}
          placeholder='Price'
          value={price}
          onChangeText={setPrice}>
        </TextInput>


        <TouchableHighlight onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}> Save</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
// style more harder than css
const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  container: {
    flex: 1,
    backgroundColor: '#ffd5a9',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 20,
  },
  lifeStyle: {
    maxHeight: 800,
  },
  itemContainer: {
    flex: 2,
    padding: 25,
    marginVertical: 8,
    backgroundColor: '#a49791',
  },
  dishName: {
    fontSize: 30,
    fontWeight: "semibold",
    textAlign: "left",
  },
  OtherDetail: {
    fontSize: 35,
    textAlign: "left",
    fontWeight: "bold",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#b54c29",
  },
  OtherDetails: {
    fontSize: 25,
    textAlign: "left",
  },
  seprator: {
    height: 20,
  },
  userInputView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 380,
    marginVertical: 5,
    backgroundColor: '#ded9d7',
    padding: 10,
    marginTop: 120,
    marginBottom: 40,
    borderRadius: 50,
  },
  img: {
    height: 40,
    width: 40,
    justifyContent: 'flex-start',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginVertical: -15,
    borderRadius: 45,
    color: 'black',
    marginTop: 30,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#f88901',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 40,
    marginVertical: 10,
    alignItems: 'center',
    marginTop: 30,
  },

  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },

  summaryContainer: {
    backgroundColor: '#ffd5a9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 35,
    marginVertical: 10,
    width: '100%',
  },


  summaryText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  cont: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#b54c29",
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 65,
    height: 65,
    marginRight: 500,
    marginTop: 10,
  },
});
// ends here

