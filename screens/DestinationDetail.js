import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';
import {COLORS, FONTS, icons, images, SIZES} from '../constants/';

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.white};
`;
const Box = styled.View`
  flex: ${props => props.flex};
  background: ${props => props.color};
`
const Row = styled.View`
  flex-direction: row;
`;

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


const DestinationDetail = () =>{
  return (
    <Container>
      
      {/* Header */}
      <Box flex={2} color={'#fab1a0'}>
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

            <View style={{ 
              marginHorizontal: SIZES.radius,
              justifyContent: 'space-around'
              }}
            > 
              <Text style={{...FONTS.h3}}>Ski Villa</Text>
              <Text style={{color: COLORS.gray, ...FONTS.body3}}>France</Text>
              
              
              {/* Module */}
              <StarReview 
                rate={1.5}
              />
            </View>
          </Row>
        </View>
      </Box>

      {/* Body */}
      <Box  flex={1.5} color={'#ff7675'}>
        
      </Box>

      {/* Footer */}
      <Box  flex={0.5} color={'#fab1a0'}>

      </Box>
    </Container>
  )
}

export default DestinationDetail;