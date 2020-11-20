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
  margin-top: ${SIZES.base}px;
  padding-left: ${SIZES.padding}px;
  padding-right: ${SIZES.padding}px;
`;
const Contents = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Row = styled.View`
  flex-direction: row;
  margin-top: ${SIZES.padding}px;
  padding-left: ${SIZES.base}px;
  padding-right: ${SIZES.base}px;
`;
const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const IconWrapper = styled.View`
  width: 60px;
  height: 60px;
`;
const Label = styled.Text`
  margin-top: ${SIZES.base}px;
  color: ${COLORS.gray};
`;


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

const Home = () =>{
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
        </Row>
      </Contents>

     {/* Destination */}
     <Contents></Contents>
    </Container>
  )
}

export default Home;