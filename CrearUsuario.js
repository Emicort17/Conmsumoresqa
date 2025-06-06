
    const form = document.getElementById('userForm');
    const responseBox = document.getElementById('responseBox');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const job = document.getElementById('job').value;

      const data = { name, job };

      try {
        const res = await fetch('https://reqres.in/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "x-api-key": "reqres-free-v1"
          },
          body: JSON.stringify(data)
        });

        const result = await res.json();

        responseBox.innerHTML = `
          <div class="alert alert-success">
            <strong>Usuario creado:</strong><br>
            name: ${result.name}<br>
            job: ${result.job}<br>
          </div>
        `;
      } catch (error) {
        responseBox.innerHTML = `
          <div class="alert alert-danger">Error al enviar los datos.</div>
        `;
        console.error('Error:', error);
      }
    });
  