export const getNewTokenFromServer = (setToken) => {
    fetch("http://10.0.2.2:8080/auth/token")
        .then(res => res.text())
        .then(setToken)
}

export const storeNameInServer = (token, name) => {
    fetch("http://10.0.2.2:8080/user/name",
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
    fetch("http://10.0.2.2:8080/games/start",
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
    fetch("http://10.0.2.2:8080/games/status",
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
    fetch("http://10.0.2.2:8080/games/",
        {
            method: "GET",
            headers: {
                Accept: "*!/!*",
                "token": token
            }
        })
        .then(res => res.json())
        .then(json => setGameList(json))
        .catch(error => {
                console.error(error)
                if (onError) {
                    onError(error)
                }
            }
        )
}

export const sendChosenMoveToServer = (move, token, setGame) => {
    fetch(`http://10.0.2.2:8080/games/move/${move}`, {
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
