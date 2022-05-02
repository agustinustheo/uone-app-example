export async function queryOffers(
  api,
  accountId,
  orderId
) {
  return (await api.query.unetOrder.offers(accountId, orderId)).toHuman();
}

export async function queryOrders(
  api,
  accountId,
  orderId
) {
  return (await api.query.unetOrder.orders(accountId, orderId)).toHuman();
}