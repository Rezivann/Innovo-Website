
import React, { useMemo } from "react";
import {
  ImageSourcePropType,
  type ImageStyle,
  type StyleProp,
  StyleSheet,
  Text,
  View,
  type ViewProps,
} from "react-native";
import type { AnimatedProps } from "react-native-reanimated";
import Animated from "react-native-reanimated";

import image1 from '../images/Slideshow/Image1.png';
import image2 from '../images/Slideshow/Image2.png';
import image3 from '../images/Slideshow/Image3.png';
import image4 from '../images/Slideshow/Image4.png';
import image5 from '../images/Slideshow/Image5.png';
import image6 from '../images/Slideshow/Image6.png';
import image7 from '../images/Slideshow/Image7.png';
import image8 from '../images/Slideshow/Image8.png';
import image9 from '../images/Slideshow/Image9.png';
import image10 from '../images/Slideshow/Image10.png';
import image11 from '../images/Slideshow/Image11.png';
import image12 from '../images/Slideshow/Image12.png';



interface Props extends AnimatedProps<ViewProps> {
  style?: StyleProp<ImageStyle>;
  index?: number;
  rounded?: boolean;
  source?: ImageSourcePropType;
  colorFill?: boolean;
}

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12]

export const SlideItem: React.FC<Props> = (props) => {
  const {
    style,
    index = 0,
    rounded = false,
    testID,
    colorFill = false,
    ...animatedViewProps
  } = props;

  const source = useMemo(
    () => props.source || images[index % images.length],
    [index, props.source]
  );

  return (
    <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
      {!colorFill && (
        <Animated.Image
          style={[style, styles.container, rounded && { borderRadius: 15 }]}
          source={source}
          resizeMode="cover"
        />
      )}
      {colorFill && <View style={[styles.colorFill, rounded && { borderRadius: 15 }]} />}
      
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  overlayTextContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
    minWidth: 40,
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  colorFill: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "gray",
  },
});