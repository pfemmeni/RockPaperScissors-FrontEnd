const fetchRoute  = "http://18.117.253.20:8080"

export const getNewTokenFromServer = (setToken) => {
    fetch(`${fetchRoute}/auth/token`)
        .then(res => res.text())
        .then(setToken)
}

export const storeNameInServer = (token, name) => {
    fetch(`${fetchRoute}/user/name`,
        {
            method: "POST",
            headers: {
                Accept: "*/*",
                "token": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
            })
        })
}

export const startGame = (token, setGame) => {
    fetch(`${fetchRoute}/games/start`,
        {
            method: "GET",
            headers: {
                Accept: "*/*",
                "token": token
            }
        })
        .then(res => res.json())
        .then(json => setGame(json))
        .catch(error => console.error(error))
}


export const getGameStatusFromServer = (token, setGame, onError) => {
    fetch(`${fetchRoute}/games/status`,
        {
            method: "GET",
            headers: {
                Accept: "*/*",
                "token": token
            }
        })
        .then(res => res.json())
        .then(json => setGame(json))
        .catch(error => {
                console.error(error)
                if (onError) {
                    onError(error)
                }
            }
        )
}

export const getJoinableGamesFromServer = (token, setGameList) => {
    fetch(`${fetchRoute}/games/`,
        {
            method: "GET",
            headers: {
                Accept: "*/*",
                "token": token
            }
        })
        .then(res => res.json())
        .then(json => setGameList(json))
        .catch(error => console.error(error))

}
export const joinGameOnServer = (token, gameId, setGame) =>{

    fetch(`${fetchRoute}/games/join/${gameId}`, {
        method: "GET",
        headers: {
            Accept: "*/*",
            "token": token
        }
    })
        .then(res => res.json())
        .then(json => setGame(json))
        .catch(error => console.error(error))


}

export const sendChosenMoveToServer = (move, token, setGame) => {
    fetch(`${fetchRoute}/games/move/${move}`, {
        method: "GET",
        headers: {
            Accept: "*/*",
            "token": token
        }
    })
        .then(res => res.json())
        .then(json => setGame(json))
        .catch(error => console.error(error))

}
