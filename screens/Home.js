import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';

const Container = styled.View`
  flex: 1;
  background: ${COLORS.white};
`;
const Title = styled.View`
  flex: 1;
  margin: ${SIZES.padding}px;
`;
const Contents = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Row = styled.View`
  flex-direction: row;
  margin-top: ${SIZES.base}px;
  padding-left: ${SIZES.base}px;
  padding-right: ${SIZES.base}px;
`;
const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const IconWrapper = styled.View`
  width: 50px;
  height: 50px;
`;
const Label = styled.Text`
  margin-top: ${SIZES.base / 2}px;
  color: ${COLORS.gray};
`;

// 아이콘 모듈
const OptionItem = ({icon, bgColor, label, onPress}) => {
  return(
    <Button onPress={onPress}>
      <IconWrapper>
        <LinearGradient
          style={{ flex:1, alignItems: 'center', justifyContent:'center', borderRadius: 15}}
          colors={bgColor}
          start={{x:0, y:0}}
          end={{x:0, y:1}}
        >
          <Image 
            source={icon}
            resizeMode='cover'
            style={{
              tintColor: COLORS.white,
              width: 30,
              height: 30,
            }}
          />
        </LinearGradient>
      </IconWrapper>
      <Label style={{...FONTS.body3}}>{label}</Label>
    </Button>
  )
}

const Home = ({navigation}) =>{

  // Dummy Data
  const [destinations, setDestinations] = React.useState([
    {
      id: 0,
      name: 'Ksi Villa',
      img: images.skiVilla,
    },
    {
      id: 1,
      name: 'Climbing Hills',
      img: images.climbingHills,
    },
    {
      id: 2,
      name: 'Frozen Hills',
      img: images.frozenHills,
    },
    {
      id: 3,
      name: 'beach',
      img: images.beach,
    }
  ])


  // Destination Render Module
  function renderDestinations(item, index){
    var destinationStyle = {};
    if (index == 0){
      destinationStyle={marginLeft: SIZES.padding};
    }

    return(
      <TouchableOpacity
        style={{ justifyContent:'center', marginHorizontal: SIZES.base,
            ...destinationStyle}}
        onPress={() => {navigation.navigate('DestinationDetail')}}
      >
        <Image 
          source={item.img}
          resizeMode='cover'
          style={{
            width: SIZES.width * 0.28,
            height: '82%',
            borderRadius: 15
          }}
        />

        <Text style={{marginTop: SIZES.base/2, marginBottom: SIZES.base, ...FONTS.h4 }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }


  
  return (
    <Container>
     {/* Banner  */}
      <Title>
        <Image 
          source={images.homeBanner}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 15,
          }}
        />
      </Title>

     {/* Options */}
      <Contents>
        <Row>
          <OptionItem 
            icon={icons.airplane}
            bgColor={['#46aeff', '#5884ff']}
            label="Flight"
            onPress={()=>{console.log('Flight');}}
          />
          <OptionItem 
            icon={icons.train}
            bgColor={['#fddf90', '#fcda13']}
            label='Train'
            onPress={()=>{}}
          />
           <OptionItem 
            icon={icons.bus}
            bgColor={['#e973ad', '#da5df2']}
            label='Bus'
            onPress={()=>{}}
          />
           <OptionItem 
            icon={icons.taxi}
            bgColor={['#fcaba8', '#fe6bba']}
            label='Taxi'
            onPress={()=>{}}
          />
        </Row>

        <Row>
          <OptionItem 
            icon={icons.bed}
            bgColor={['#46aeff', '#5884ff']}
            label="Bed"
            onPress={()=>{console.log('Flight');}}
          />
          <OptionItem 
            icon={icons.eat}
            bgColor={['#fddf90', '#fcda13']}
            label='Eats'
            onPress={()=>{}}
          />
           <OptionItem 
            icon={icons.compass}
            bgColor={['#e973ad', '#da5df2']}
            label='Adventure'
            onPress={()=>{}}
          />
           <OptionItem 
            icon={icons.event}
            bgColor={['#fcaba8', '#fe6bba']}
            label='Event'
            onPress={()=>{}}
          />
        </Row>
      </Contents>

     {/* Destination */}
     <View style={{flex: 1.4}}>
        <Text style={{
          marginTop: SIZES.base * 2.5,
          marginBottom: SIZES.base,
          marginHorizontal: SIZES.padding, 
          ...FONTS.h2}}
        >
            Destination
        </Text>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator ={false}
          data={destinations}
          keyExtractor={item =>item.id.toString()}
          renderItem={({item, index}) => renderDestinations(item, index)}
        />
     </View>
    </Container>
  )
}

export default Home;