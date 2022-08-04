export const fetchData = (stateComponent: any) => {
    fetch(`https://swapi.dev/api/`)
        .then(response => response.json())
        .then(data => {
            stateComponent.value = data;
            console.log(data);
        });
}