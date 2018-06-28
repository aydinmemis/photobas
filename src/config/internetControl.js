const internetControl = new Promise((resolve, reject) => {
    NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) {
            resolve(isConnected);
        } else {
            reject(isConnected);
        }
    });
})

export default internetControl;