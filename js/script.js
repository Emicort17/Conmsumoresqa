function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function cargarUsuario() {
    let number = getRandomInt(12) + 1;
    console.log("usuario " + number)
    fetch(`https://reqres.in/api/users/${number}`, {
        method: 'GET',
        headers: {
            'x-api-key': 'reqres-free-v1',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            let user = data.data;
            let userDiv = document.getElementById('user');
            userDiv.innerHTML = `
        <div class="col-md-6 offset-md-3">
          <div class="card shadow-sm">
            <div class="card-body text-center">
              <img src="${user.avatar}" class="rounded-circle mb-3" width="120" height="120" alt="Avatar">
              <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
              <p class="card-text">${user.email}</p>
              <button class="btn btn-primary mt-2" onclick="cargarUsuario()">Ver otro usuario</button>
            </div>
          </div>
        </div>
      `;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('user').innerHTML = `<div class="alert alert-danger">Hubo un error al cargar el usuario.</div>`;
        });
}

window.onload = cargarUsuario;
