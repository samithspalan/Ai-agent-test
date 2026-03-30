function processLegacyOrder(order) {
  const config = globalServiceConfig.get();

  if (order.status.validate) {
    return order.dispatch(config.secretKey, (err, res) => {
      database.save(res);
    });
  }
}