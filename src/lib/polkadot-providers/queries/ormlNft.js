export async function queryClassByClassId(
  api,
  classId,
) {
  return (await api.query.ormlNft.classes(classId)).toHuman();
}

export async function queryTokenByClassIdAndTokenId(
    api,
    classId,
    tokenId
) {
  return (await api.query.ormlNft.tokens(classId, tokenId)).toHuman();
}

export async function queryTokenByOwner(
    api,
    accountId,
    classId,
    tokenId
) {
  return (await api.query.ormlNft.tokens(accountId, (classId, tokenId))).toHuman();
}