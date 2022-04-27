import { extrinsicCallback } from "./index";

export async function createClass(
  api,
  pair,
  metadata,
  name,
  description, 
  royaltyRate,
  property,
  categoryIds,
  successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetNft.createClass(metadata, name, description, royaltyRate, property, [categoryIds]).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
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
    successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetNft.proxyMint(to, classId, metadata, quantity, chargeRoyalty).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
}

export async function burn(
    api,
    pair,
    classId,
    tokenId,
    quantity,
    successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetNft.burn(classId, tokenId, quantity).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
}

export async function destroyClass(
    api,
    pair,
    classId,
    dest,
    successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetNft.destroyClass(classId, dest).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
}

export async function transfer(
    api,
    pair,
    to,
    items,
    successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetNft.transfer(to, items).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
}