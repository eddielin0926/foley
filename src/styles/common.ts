import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    flex: 1,
  },
  row:{
    flexDirection:'row',
    marginBottom: 10
  },
  line:{
    padding: 5,
    borderBottomWidth:3,
    borderBottomColor:'black',
    marginBottom:10
  }
});
