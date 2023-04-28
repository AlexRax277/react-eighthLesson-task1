const fetchData = async (url, setter) => {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(response.statusText);
        };
        const data = await response.json();
        setter(data);
    } catch(e) {
        console.error(e);
    };
};

export default fetchData;