const API = process.env.REACT_APP_API_URL

export function getStories(start, size) {
    return fetch(API + "?shortcontent=true&start="+start+"&size="+size).then(res => res.json())
        .catch(err => {
            console.log(err)
        })
}

export function getStory(id) {
    return fetch(API + "/" + id).then(res => res.json())
        .catch(err => {
            console.log(err)
        })
}

export function saveStory(data) {
    fetch(API, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: data.title,
                author: data.author,
                content: data.content
            })
        }).then(res => console.log(res));
}