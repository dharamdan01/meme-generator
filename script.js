const generateBtn = document.querySelector('.generate-btn');
const memeImage = document.querySelector('.meme-image');
const memeTitle = document.querySelector('.meme-title');
const authorOutput = document.querySelector('.author');



function getMeme()
{
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res) => res.json())
    .then((data) => {
        const {url, title, author} = data;
        memeTitle.innerText = title;
        memeImage.src = url;
        authorOutput.innerText = `Meme by: ${author}`;
    })
}

getMeme();

generateBtn.addEventListener('click', () => {
    getMeme();
})


// using asyc function
// async function fetchData()
// {
//     try
//     {
//         const link = 'https://meme-api.com/gimme/wholesomememes';
//         const data = await (await fetch(link)).json();
//         // const response = await data.json();
//          const {url, title, author} = data;
//         memeTitle.innerText = title;
//         memeImage.src = url;
//         authorOutput.innerText = `Meme by: ${author}`
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }

// fetchData();

// generateBtn.addEventListener('click', () => {
//     fetchData();
// })