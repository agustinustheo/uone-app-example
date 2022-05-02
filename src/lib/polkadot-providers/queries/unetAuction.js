export async function queryBritishAuctionBids(
  api,
  auctionId
) {
  return (await api.query.unetAuction.britishAuctionBids(auctionId)).toHuman();
}

export async function queryBritishAuctions(
  api,
  accountId,
  auctionId
) {
  return (await api.query.unetAuction.britishAuctions(accountId, auctionId)).toHuman();
}

export async function queryDutchAuctionBids(
  api,
  auctionId
) {
  return (await api.query.unetAuction.dutchAuctionBids(auctionId)).toHuman();
}

export async function queryDutchAuctions(
  api,
  accountId,
  auctionId
) {
  return (await api.query.unetAuction.dutchAuctions(accountId, auctionId)).toHuman();
}