export function extrinsicCallback(api, { events, status, successCallback, resolve, reject, unsub }) {
  if (status.isFinalized) {
    // find/filter for success events
    const successEventList = events.filter(({ event }) => api.events.system.ExtrinsicSuccess.is(event));
    if (successEventList.length > 0) {
      if (successCallback) successCallback(); // If callback not undefined
      unsub.then(_unsub => {
          _unsub();
          resolve(successEventList);
        });
    }
    
    // find/filter for failed events
    const failedEventList = events.filter(({ event }) => api.events.system.ExtrinsicFailed.is(event));
    if (failedEventList.length > 0) {
      alert('Extrinsic failed')
    }
    unsub.then(_unsub => {
        _unsub();
        reject(failedEventList);
      });
  }
}