import { successCallback } from "./index";

export async function createClass(
  api,
  pair,
  metadata,
  name,
  description, 
  royaltyRate,
  property,
  categoryIds,
  callback = () => {},
) {
  var unsub = await api.tx.unetNft.createClass(metadata, name, description, royaltyRate, property, [categoryIds]).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
    successCallback(api, { events, status, callback, unsub });
  });
}

export async function proxyMint(
    api,
    pair,
    to,
    classId,
    metadata, 
    quantity,
    chargeRoyalty,
    callback = () => {},
) {
  var unsub = await api.tx.unetNft.proxyMint(to, classId, metadata, quantity, chargeRoyalty).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
    successCallback(api, { events, status, callback, unsub });
  });
}

export async function burn(
    api,
    pair,
    classId,
    tokenId,
    quantity,
    callback = () => {},
) {
  var unsub = await api.tx.unetNft.burn(classId, tokenId, quantity).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
    successCallback(api, { events, status, callback, unsub });
  });
}

export async function destroyClass(
    api,
    pair,
    classId,
    dest,
    callback = () => {},
) {
  var unsub = await api.tx.unetNft.destroyClass(classId, dest).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
    successCallback(api, { events, status, callback, unsub });
  });
}

export async function transfer(
    api,
    pair,
    to,
    items,
    callback = () => {},
) {
  var unsub = await api.tx.unetNft.transfer(to, items).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
    successCallback(api, { events, status, callback, unsub });
  });
}