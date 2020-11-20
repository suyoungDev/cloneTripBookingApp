import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {COLORS, FONTS, icons, images, SIZES} from '../constants/';

const Container = styled.View`
  flex: 1;
  background-color: COLORS.white;
`;

const DestinationDetail = () =>{
  return (
    <View>
      <Text>Destination Detail</Text>
    </View>
  )
}

export default DestinationDetail;