import { extrinsicCallback } from "./index";

export async function setChainId(
  api,
  pair,
  chainId,
  successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetNft.setChainId(chainId).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
}