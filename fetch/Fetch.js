const getNewTokenFromServer = (setToken) => {
    fetch("http://10.0.2.2:8080/auth/token")
        .then((response) => response.text())
        .then(setToken)
        .catch((error) => console.error(error));
};
