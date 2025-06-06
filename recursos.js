async function getRecursos() {
  try {
        const response = await fetch('https://reqres.in/api/unknown');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        return console.error('There has been a problem with your fetch operation:', error);
    }
}

getRecursos().then(recursos => {
    const recursosContainer = document.getElementById('recursos-container');
    recursos.forEach(recurso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${recurso.name}</td>
            <td style="color: ${recurso.color}">${recurso.color}</td>
            <td>${recurso.year}</td>
            <td>${recurso.pantone_value}</td>
        `;
        recursosContainer.appendChild(row);
    });
}).catch(error => {
    console.error('Error fetching recursos:', error);
});
