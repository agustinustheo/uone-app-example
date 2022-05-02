export async function queryAccountWhitelist(
  api,
  accountId
) {
  return (await api.query.unetConf.accountWhitelist(accountId)).toHuman();
}

export async function queryAuctionCloseDelay(
  api
) {
  return (await api.query.unetConf.auctionCloseDelay()).toHuman();
}

export async function queryCategories(
  api,
  categoryId
) {
  return (await api.query.unetConf.categories(categoryId)).toHuman();
}

export async function queryIsWhiteListActivated(
  api
) {
  return (await api.query.unetConf.isWhiteListActivated()).toHuman();
}

export async function queryMaxCommissionRewardRate(
  api
) {
  return (await api.query.unetConf.maxCommissionRewardRate()).toHuman();
}

export async function queryMinCommissionAgentDeposit(
  api
) {
  return (await api.query.unetConf.minCommissionAgentDeposit()).toHuman();
}

export async function queryMinOrderDeposit(
  api
) {
  return (await api.query.unetAuction.minOrderDeposit()).toHuman();
}

export async function queryNextId(
  api
) {
  return (await api.query.unetAuction.nextId()).toHuman();
}

export async function queryPlatformFeeRate(
  api
) {
  return (await api.query.unetAuction.platformFeeRate()).toHuman();
}

export async function queryRoyaltiesRate(
  api
) {
  return (await api.query.unetAuction.royaltiesRate()).toHuman();
}