
export const getGifs = async ( category ) => { 
    const apiKey = 'jRr1kMeSf2Sm9RzsEGpZXii1AZ3PAT01';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=${ limit }`;

    const resp = await fetch( url );
    const { data = [] } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    //console.log( gifs );
    return gifs;
};