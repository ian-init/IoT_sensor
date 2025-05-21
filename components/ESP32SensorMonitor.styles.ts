import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0000cc',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign:'center',
  },
  statusText: {
    fontSize: 16,
    color: '#4d4dff',
    marginTop: 10,
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
    textAlign:'center',
  },
  input: {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100,
  },
  loadingContainer: {
    margin: 20,
    alignItems: 'center',
  },
  loadingText: {
    margin: 20,
    fontSize: 16,
  },

  dataContainer: {
    marginTop: 50,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
  },
  dataItem: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    marginHorizontal: 5,
  },
  dataLabel: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
  },
  dataText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',  
  },
  
  alertsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  
  alertItem: {
    backgroundColor: '#fff0f0',
    borderWidth: 1,
    borderColor: '#ffcccc',
    padding: 10,
    margin: 5,
  },
  
  alertText: {
    color: '#cc0000',
    fontWeight: 'bold',
  },
  
  alertIndicatorContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  
  redCircle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#cc0000',
    marginRight: 10,
  },
  greenCircle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'green',
    marginRight: 10,
  },
});