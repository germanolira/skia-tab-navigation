// home.js

// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { View, Text } from "react-native";

// export function Home() {
//   return (
//     <View>
//       <Text>Hello World</Text>
//     </View>
//   );
// }

// Skia with tab navigation

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Canvas, Text, useFont, Fill } from "@shopify/react-native-skia";

export function Home() {
  const fontSize = 32;
  const font = useFont(require("./roboto.ttf"), fontSize);
  if (font === null) {
    return null;
  }

  return (
    <>
      <Canvas style={{ flex: 1 }}>
        <Fill color="white" />
        <Text x={0} y={fontSize} text="Hello World" font={font} />
      </Canvas>
      <StatusBar style="auto" />
    </>
  );
}
