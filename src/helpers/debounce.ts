const debounce = (func = (e: any) => {}, timeout = 300) => {
    let timer: ReturnType<typeof setTimeout> = setTimeout(() => '', timeout);
    return (e: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(e);
        }, timeout);
    };
};

export default debounce;
