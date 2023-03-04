import {ResponsiveFont} from '../../BaseModules/ResponsiveFont';

export const authStyles = {
  safeAreaContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: 50,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 10,
  },
  submitButton: {
    width: 100,
    height: 40,
    backgroundColor: '#3786ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: ResponsiveFont(12),
  },
};
