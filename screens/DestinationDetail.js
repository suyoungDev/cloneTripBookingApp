import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components';
import {COLORS, FONTS, icons, images, SIZES} from '../constants/';

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.white};
`;
const Box = styled.View`
  flex: ${props => props.flex};
`
const Row = styled.View`
  flex-direction: row;
`;


// 별점 모듈 구현
const StarReview = ({rate}) => {
  let starComponents = [];
  let fullStar = Math.floor(rate);
  let noStar = Math.floor(5 - rate);
  let halfStar = 5 - fullStar - noStar;

  // Full Star
  for(let i = 0; i < fullStar; i++){
    starComponents.push(
      <Image 
        key={`full-${i}`}
        source={icons.starFull}
        resizeMode='cover'
        style={{
          width: 20,
          height: 20
        }}
      />
    )
  }

  // Half Star
  for(let i = 0; i < halfStar; i++){
    starComponents.push(
      <Image
        key={`half-${i}`}
        source={icons.starHalf}
        resizeMode='cover'
        style={{
          width: 20,
          height: 20,
        }}
      />
    )
  }

  // No star
  for(let i = 0; i < noStar; i++){
    starComponents.push(
      <Image
        key={`empty-${i}`}
        source={icons.starEmpty}
        resizeMode='cover'
        style={{
          width: 20,
          height: 20,
        }}
      />
    )
  }

  return(
    <View style={{flexDirection: 'row', alignItems:'center'}}>
      {starComponents}
      <Text style={{marginLeft: SIZES.base, color: COLORS.gray}}>{rate}</Text>
    </View>
  )
}


// 아이콘 모듈
const IconLabel = ({icon, label}) => {
  return(
    <View style={{alignItems: 'center'}}>
      <Image 
        source={icon}
        resizeMode='cover'
        style={{width:50, height:50}}
      />
      <Text style={{
        marginTop:SIZES.base, 
        color: COLORS.gray, 
        ...FONTS.body3}}>{label}</Text>
    </View>
  )
}


const DestinationDetail = () =>{
  return (
    <Container>
      
      {/* Header */}
      <Box flex={2}>
        <Image 
          source={images.skiVillaBanner}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '80%'        
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '5%',
            right: '5%',
            borderRadius: 15,
            padding: SIZES.padding,
            backgroundColor: COLORS.white,
            elevation: 3,
          }}
        >
          <Row>
            <View style={{elevation: 3}}>
              <Image 
                source={images.skiVilla}
                resizeMode='cover'
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 15
                }}
              />
            </View>

            {/* Reivew */}
            <View style={{ 
              marginHorizontal: SIZES.radius,
              justifyContent: 'space-around'
              }}
            > 
              <Text style={{...FONTS.h3}}>Ski Villa</Text>
              <Text style={{color: COLORS.gray, ...FONTS.body3}}>France</Text>
              
              {/* Rivew Module */}
              <StarReview 
                rate={4.5}
              />
            </View>
          </Row>
          
          {/* Review Description */}
          <View style={{marginTop: SIZES.radius}}>
              <Text style={{color: COLORS.gray, ...FONTS.body3}}>
                Ski villa offers simple rooms with mountain views in front Ski resort.
              </Text>
          </View>
        </View>


        {/* Header Button */}
        {/* Back and Menu Button */}
        <View
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            right: 20,
            flexDirection: 'row'
          }}
        >
          <View
            style={{flex: 1}}
          >
            <TouchableOpacity
              onPress={()=>{}}
            >
              <Image 
                source={icons.back}
                resizeMode='cover'
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 1, alignItems: 'flex-end'}}
          >
            <TouchableOpacity
              onPress={()=>{}}
            >
              <Image 
                source={icons.menu}
                resizeMode='cover'
                style={{
                  width: 30,
                  height: 30
                }}
              />
            </TouchableOpacity>
          </View>
          
        </View>
      </Box>
      {/* End of Header */}
      {/* Body */}
      <Box  flex={1.5}>
        {/* Icons */}
        <View style={{
          flexDirection: 'row', 
          marginTop: SIZES.base, 
          paddingHorizontal: SIZES.padding*2, 
          justifyContent: 'space-between'
          }}
        >
          <IconLabel 
            icon={icons.villa}
            label='Villa'
          />
          <IconLabel 
            icon={icons.parking}
            label='Parking'
          />
          <IconLabel 
            icon={icons.wind}
            label='4 C'
          />
        </View>

        {/* About */}
        <View style={{marginTop: SIZES.padding, paddingHorizontal: SIZES.padding}}>
          <Text style={{...FONTS.h2}}>About</Text>
          <Text style={{marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3}}>
            Located at the alps with an altitude of 1,702 meters. The ski are fun to enjoy!
          </Text>
        </View>
      </Box>
      {/* End of Body */}

      {/* Footer */}
      <Box flex={0.5} style={{paddingHorizontal: SIZES.padding}}>
          <LinearGradient
            style={{height: 70, width: '100%', borderRadius:15}}
            colors={['#edf0fc', '#d6dfff']}
            start={{x:0, y:0}}
            end={{x:1, y:0}}
          >
            <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
              <View style={{flex:1, marginHorizontal: SIZES.padding, justifyContent:'center'}}>
                <Text style={{...FONTS.h1}}>$1000</Text>
              </View>
              <TouchableOpacity
                style={{width: 130, height: '80%', marginHorizontal: SIZES.radius}}
                onPress={()=>{}}
              >
                <LinearGradient
                  style={{
                    flex:1, 
                    alignItems:'center',
                    justifyContent: 'center', 
                    borderRadius: 10}}
                  colors={['#46aeff', '#5884ff']}
                  start={{x:0, y:0}}
                  end={{x:1, y:0}}
                >
                  <Text style={{...FONTS.h3, color: COLORS.white}}>BOOKING</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </LinearGradient>
      </Box>
    </Container>
  )
}

export default DestinationDetail;