
const add = async (one, two, setData) => {
    await fetch(`http://localhost:8080/add/${one}/${two}`)
        .then( async response => {
            const data = await response.json();
            console.log("data from fetch ", data, data.result)
            setData(data.result)
            return data.result
        })
        .catch(error => {
            console.error('There was an error!', error);
        });

}
const sub = async (one, two, setData) => {
    await fetch(`http://localhost:8080/sub/${one}/${two}`)
        .then( async response => {
            const data = await response.json();
            console.log("data from fetch ", data, data.result)
            setData(data.result)
            return data.result
        })
        .catch(error => {
            console.error('There was an error!', error);
        });

}

const exportedObject = {
    add, sub
}

export default exportedObject;