export default class CurrencyExchange {
  static getConversion() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    
      .then(response => onRecieve_API_Response(response))      
      .catch(function(error) {
        return error;
      });

      function onRecieve_API_Response(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      }
  }
}

