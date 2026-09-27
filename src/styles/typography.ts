import { StyleSheet, TextStyle } from 'react-native';

type TypographyStyles = {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  p1: TextStyle;
  p2: TextStyle;
  p3: TextStyle;
  p1bold: TextStyle;
  location: TextStyle;
  engagements: TextStyle;
  date: TextStyle;
};

// Add more components for different text elements if needed,
// or edit current component props according to the project's design system
export const typography: TypographyStyles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 20,
  },
  p1: {
    fontWeight: 400,
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    fontStyle: 'normal',
    color: '#262626',
    lineHeight: 18,
    letterSpacing: -0.07,
  },
  p2: {
    fontWeight: 400,
  },
  p3: {
    fontWeight: 400,
  },
  p1bold: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: -0.07,
    color: '#262626',
    lineHeight: 18,
  },
  location: {
    color: '#979797',
    fontFamily: 'Poppins_400Regular',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: 0.05,
  },
  engagements: {
    color: '#000',
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 18 /* 180% */,
  },
  date: {
    color: '#979797',
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: 0.05,
  },
});
