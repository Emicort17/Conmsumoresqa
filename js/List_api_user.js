const api = 'https://reqres.in/api/users?page=1';

async function LoadUsers() {
    try {
        const response = await fetch(api, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "x-api-key": "reqres-free-v1"
            }
        });

        const users = await response.json();
        console.log(users)

        const table = document.getElementById('table');
        table.innerHTML = "";

        users.data.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.first_name}</td>
                <td>${user.email}</td>
                <td><img src="${user.avatar}" alt="Avatar" width="50" style="border-radius:50%;"></td>
            `;
            table.appendChild(row);
        });

    } catch (error) {
        console.error("Error al cargar a los usuarios ", error);
    }
}

window.addEventListener("DOMContentLoaded", LoadUsers);
