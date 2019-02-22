export const getData = (api) => {
    return fetch(api).then(
        res =>  res.json()
    );
}