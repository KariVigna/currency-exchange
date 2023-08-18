export default class CurrencyExchange {
  static getCurrency(usdAmount, targetCode) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${targetCode}/${usdAmount}`)
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

