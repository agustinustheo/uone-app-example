import { extrinsicCallback } from "./index";

export async function bidBritishAuction(
  api,
  pair,
  price,
  auctionOwner,
  auctionId,
  commissionAgent, 
  commissionData,
  successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetOrder.bidBritishAuction(price, auctionOwner, auctionId, commissionAgent, commissionData).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
} 

export async function bidDutchAuction(
  api,
  pair,
  price,
  auctionOwner,
  auctionId,
  commissionAgent, 
  commissionData,
  successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetOrder.bidDutchAuction(price, auctionOwner, auctionId, commissionAgent, commissionData).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
} 

export async function redeemBritishAuction(
  api,
  pair,
  auctionOwner,
  auctionId,
  successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetOrder.redeemBritishAuction(auctionOwner, auctionId).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
} 

export async function redeemDutchAuction(
  api,
  pair,
  auctionOwner,
  auctionId,
  successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetOrder.redeemDutchAuction(auctionOwner, auctionId).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
} 

export async function removeBritishAuction(
  api,
  pair,
  auctionId,
  successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetNft.removeBritishAuction(auctionId).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
}

export async function removeDutchAuction(
  api,
  pair,
  auctionId,
  successCallback = () => {},
) {
  return new Promise((resolve, reject) => {
    var unsub = api.tx.unetNft.removeDutchAuction(auctionId).signAndSend(pair, { nonce: -1 }, ({ events, status }) => {
      extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub });
    });
  });
}
