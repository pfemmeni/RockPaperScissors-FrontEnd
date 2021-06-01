export const getNewTokenFromServer = (setTokenId) => {
    fetch("http://10.0.2.2:8080/auth/token")
        .then(res => res.text())
        .then(setTokenId)
}

export const startGame = (tokenId, setGame) => {
    fetch("http://10.0.2.2:8080/games/start",
        {
            method: "GET",
            headers: {
                Accept: "*/*",
                "token": tokenId
            }
        })
        .then(res => res.json())
        .then(json => setGame(json))
        .catch(error => console.error(error))
}

export const storeNameInServer = (tokenId, name) => {
    fetch("http://10.0.2.2:8080/user/name",
        {
            method: "POST",
            headers: {
                Accept: "*/*",
                "token": tokenId,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
            })
        })
}

export const getGameStatus = (tokenId, setGame) => {
    fetch("http://10.0.2.2:8080/games/status",
        {
            method: "GET",
            headers: {
                Accept: "*/*",
                "token": tokenId
            }
        })
        .then(res => res.json())
        .then(json => setGame(json))
        .catch(error => console.error(error))
}
