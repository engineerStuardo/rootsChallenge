import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    width: 75,
    margin: 10,
    height: 40,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  button: {
    borderRadius: 50,
    width: 250,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 0.5,
  },
  searchText: {
    color: 'green',
  },
});
