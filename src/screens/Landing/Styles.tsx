import { StyleSheet } from 'react-native';

import { colors } from '../../config/colors';

import { fonts } from '../../config/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    flex: 0.6,
    backgroundColor: '#E0F0EF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    flex: 0.4,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    justifyContent: 'center',
    alignContent: 'center',
    height: 200
  },
  dot: {
    height: 25, 
    justifyContent: 'center', 
    alignContent: 'center',
    marginTop: 10
  },
  slide: {
    height: 200,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideText: {
    fontSize: 36,
    color: colors.black,
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: fonts.semiBold
  },
  slideDesc: {
    fontSize: 18,
    color: '#292929',
    textAlign: 'center',
    fontFamily: fonts.medium
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  bs: {
    flex: 1, 
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  welcomeText: {
    fontSize: 24,
    color: colors.black,
    lineHeight: 32,
    fontWeight: 'bold',
    fontFamily: fonts.bold
  },
  loginBtn: {
    backgroundColor: '#f16d22', 
    paddingVertical: 5,
    paddingHorizontal: 25,
    height: 50,
    borderRadius: 5, 
    alignItems: 'center', 
    justifyContent: 'center',
    elevation: 3,
    width: '90%',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  findBtn: {
    borderColor: '#56aaae',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    height:50,
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 5, 
    alignItems: 'center', 
    justifyContent: 'center',
    elevation: 3,
    width: '90%',
    shadowRadius: 3,
  },

  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: fonts.semiBold,
    fontWeight: 'bold',
  },

  lnTxt: {
    fontFamily: fonts.semiBold,
    fontWeight: 'bold',
    fontSize: 16
  },

  blueTxt: {
    color: '#56aaae'
  },

  langContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 10
  },
  
});

export default styles;