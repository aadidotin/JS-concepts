onMessage = () => {
    let i = 0
    for (i = 0; i < 10000000; i++) {}
    postMessage(i);
}