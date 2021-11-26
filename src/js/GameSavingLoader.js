export default class GameSavingLoader {
  static load() {
    const data = read(); // возвращается Promise!
    const value =
    data.then((response) => {
    console.log("response data данные прочитаны\n", response, json(response));
    return json(response) ;
    });
    /*.then((response2) => {
     console.log("response lfyyst", response2);
    const value = json(response2);
    console.log("response promis", value);
    
    value.then((response) => {
    console.log("response value", response);
    return value;
    });*/
    console.log("json(response) value:\n", value);
    return value;
    /*
    const value = json(data); // возвращается Promise!
    return value;
    */
  }
}
