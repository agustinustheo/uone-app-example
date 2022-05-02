import { extrinsicCallback } from "./index";

export async function removeOffer(
  api,
  pair,
  offerId,
  successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetNft.removeOffer(offerId).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
}

export async function removeOrder(
  api,
  pair,
  orderId,
  successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetNft.removeOrder(orderId).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
}

export async function submitOffer(
  api,
  pair,
  currencyId,
  price,
  deadline, 
  items,
  commissionRate,
  successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetOrder.submitOffer(currencyId, price, deadline, items, commissionRate).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
}

export async function submitOrder(
  api,
  pair,
  currencyId,
  deposit,
  price, 
  deadline, 
  items,
  commissionRate,
  successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetOrder.submitOrder(currencyId, deposit, price, deadline, items, commissionRate).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
}

export async function takeOffer(
  api,
  pair,
  offerId,
  offerOwner,
  commissionAgent, 
  commissionData,
  successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetOrder.takeOffer(offerId, offerOwner, commissionAgent, commissionData).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
}

export async function takeOrder(
  api,
  pair,
  orderId,
  orderOwner,
  commissionAgent, 
  commissionData,
  successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetOrder.takeOrder(orderId, orderOwner, commissionAgent, commissionData).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
}