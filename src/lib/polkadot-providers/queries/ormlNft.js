export async function queryClassByClassId(
  api,
  classId,
) {
  return (await api.query.ormlNFT.classes(classId)).toHuman();
}

export async function queryTokenByClassIdAndTokenId(
    api,
    classId,
    tokenId
) {
  return (await api.query.ormlNFT.tokens(classId, tokenId)).toHuman();
}

export async function queryTokenByOwner(
    api,
    accountId,
    classId,
    tokenId
) {
  return (await api.query.ormlNFT.tokens(accountId, (classId, tokenId))).toHuman();
}

export async function queryNextClassId(
    api,
) {
  return (await api.query.ormlNFT.nextClassId()).toHuman();
}

export async function queryNextTokenId(
    api,
    tokenId,
) {
  return (await api.query.ormlNFT.nextTokenId(tokenId)).toHuman();
}