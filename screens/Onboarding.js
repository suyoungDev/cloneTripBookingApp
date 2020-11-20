import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { images, COLORS, FONTS, SIZES } from '../constants';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
  flex:1;
  background-color: ${COLORS.white};
`;
const ImageView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const ClickButton = styled.TouchableOpacity`
  margin-top: ${SIZES.padding * 2}px;
  width: 70%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const Onboarding = ({navigation}) =>{
  return (
    <Container>
      <ImageView>
        <Image
          source={images.onboardingImage}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%'
          }} />
      </ImageView>

      <ImageView>
        <View style={{alignItems: 'center', marginHorizontal: SIZES.padding}}>
          <Text style={{...FONTS.h2}}>Digital Ticket</Text>
          <Text style={{color: COLORS.gray, marginTop: SIZES.padding, textAlign: 'center', ...FONTS.body3}}>Easiest way to buy tickets for your travel, business trips, transportation, lodging and culication.</Text>
        </View>

      <ClickButton>
        <TouchableOpacity 
          style={{
            backgroundColor: '#46aeff', 
            height: '100%', width: '100%', 
            elevation: 3, borderRadius: 15}}
            onPress={()=>navigation.navigate('Home')}
        >
          <LinearGradient
            style={{ 
              height: '100%', width:'100%', 
              alignItems:'center', justifyContent:'center', 
              borderRadius: 15 }}
            colors={['#46aeff', '#5884ff']}
            satrt={{x:0, y:0}}
            end={{x:1, y:1}}
          >
          <Text style={{color: COLORS.white, ...FONTS.h3, letterSpacing: 2}}>Start!</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ClickButton>
      </ImageView>
    </Container>
  )
};

export default Onboarding;