// Define the globalServiceConfig object
const globalServiceConfig = {
  get: function() {
    // Return the configuration object
    return {
      secretKey: 'your_secret_key_here'
    };
  }
};

// Define the database object
const database = {
  save: function(data) {
    // Save the data to the database
    console.log('Saving data to the database:', data);
  }
};

// Define the order object
const order = {
  status: {
    validate: true
  },
  dispatch: function(secretKey, callback) {
    // Dispatch the order using the secret key
    console.log('Dispatching order with secret key:', secretKey);
    // Simulate a successful dispatch
    callback(null, { message: 'Order dispatched successfully' });
  }
};

// Define the processLegacyOrder function
function processLegacyOrder(order) {
  const config = globalServiceConfig.get();

  if (order.status.validate) {
    return order.dispatch(config.secretKey, (err, res) => {
      database.save(res);
    });
  }
}

// Call the processLegacyOrder function
processLegacyOrder(order);