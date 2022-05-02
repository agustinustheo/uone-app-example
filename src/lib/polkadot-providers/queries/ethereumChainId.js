export async function queryChainId(
  api
) {
  return (await api.query.ethereumChainId.chainId()).toHuman();
}