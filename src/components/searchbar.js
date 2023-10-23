import * as React from 'react';
import { View } from 'react-native';
import { Searchbar,Button } from 'react-native-paper';

const SearchbarComponent = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    <Button         
      style={{ alignSelf: 'flex-end', width: 300, height: 30 ,maginTop:20}}
      onPress={() => navigation.navigate('Scroll View')} // Pass the name of the screen as a string
    >
      Go to Scroll View →
    </Button>
    </View>
    
  );
};

export default SearchbarComponent;