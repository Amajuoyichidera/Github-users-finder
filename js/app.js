let input_user = document.querySelector("#input");
const userImg = document.querySelector(".main-info-section");


const fetchUser = (user_name) => {
    fetch(`https://api.github.com/users/${user_name}`)
        .then((data) => data.json())
        .then((jsonData) => {

            if (jsonData.message == "Not found") {
                alert("User Not Found");
                return;
            } else {
                userImg.innerHTML = `
            <img src="${jsonData.avatar_url}" alt="avatar" id="profile-img">
            <span class="name" id="name">${jsonData.name}</span>
            <a href="${jsonData.html_url}" id="username">@${jsonData.login}</a>
            `;
            }

        })
        .catch((err) => {
            console.log("Catch" + err.message);
        });
}

const getUser = () => {
    let user_name = input_user.value.trim();
    if (user_name.length == 0) {
        alert("Please enter a valid github username");
    } else {
        fetchUser(user_name)
    }
    input_user.value = " ";
}