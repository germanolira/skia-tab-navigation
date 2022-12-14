import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./home";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Skia without tab navigation

// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { Canvas, Text, useFont, Fill } from "@shopify/react-native-skia";

// export default function App() {
//   const fontSize = 32;
//   const font = useFont(require("./roboto.ttf"), fontSize);
//   if (font === null) {
//     return null;
//   }

//   return (
//     <>
//       <Canvas style={{ flex: 1 }}>
//         <Fill color="white" />
//         <Text x={0} y={fontSize} text="Hello World" font={font} />
//       </Canvas>
//       <StatusBar style="auto" />
//     </>
//   );
// }
