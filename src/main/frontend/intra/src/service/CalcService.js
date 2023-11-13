const baseURL = 'http://localhost:8080';

const add = async (one, two, setData) => {
    try {
        const response = await fetch(`${baseURL}/add?one=${one}&two=${two}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data.result);
    } catch (error) {
        console.error('Une erreur est survenue lors de l\'addition', error);
        alert('Une erreur est survenue lors de l\'addition');
    }
}

const sub = async (one, two, setData) => {
    try {
        const response = await fetch(`${baseURL}/sub?one=${one}&two=${two}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data.result);
    } catch (error) {
        console.error('Une erreur est survenue lors de la soustraction', error);
        alert('Une erreur est survenue lors de la soustraction');
    }
}

const exportedObject = {
    add, 
    sub
}

export default exportedObject;
