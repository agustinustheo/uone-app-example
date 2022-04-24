export function successCallback(api, { events, status, callback, unsub }) {
  console.log(status.isFinalized)
  if (status.isFinalized) {
    // find/filter for success events
    const successEventList = events.filter(({ event }) => api.events.system.ExtrinsicSuccess.is(event));
    if (successEventList.length > 0) {
      if (callback) callback(); // If callback not undefined
    }
    const failedEventList = events.filter(({ event }) => api.events.system.ExtrinsicFailed.is(event));
    if (failedEventList.length > 0) {
      alert('Extrinsic failed')
    }
    unsub();
  }
}