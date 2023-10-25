import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CardSkeleton = () => {
  return (
    <View style={styles.card}>
      <View style={styles.placeholderHeader} />
      <View style={styles.placeholder} />
      <View style={styles.placeholder} />
			<View style={styles.placeholder} />
			<View style={styles.placeholder} />
    </View>
  );
};

const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Lorem ipsum dolor sit amet!</Text>
      <Text style={styles.paragraph}>
        Dolorem magnam adipisci veritatis! Amet aut vero quos perferendis! Sed molestiae, asperiores id laudantium
        consectetur inventore ullam facilis, ducimus aut et blanditiis! 
      </Text>
    </View>
  );
};

const App = () => {
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsDataLoading(false);
    }, 1000);
  }, []);

  return <View>{isDataLoading ? <CardSkeleton /> : <Card />}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 50,
		borderWidth: 1,
		borderColor: 'grey',
		borderRadius: 16,
  },
	placeholderHeader: {
    backgroundColor: '#ccc',
    height: 26,
    borderRadius: 4,
    marginTop: 14,
		marginBottom: 16,
  },
	placeholder: {
    backgroundColor: '#ccc',
    height: 16,
    borderRadius: 4,
    marginTop: 8
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000070'
  },
  paragraph: {
    fontSize: 18,
    color: '#555'
  }
});

export default App;
