document.addEventListener('DOMContentLoaded', function () {
    // Initial content
    changeContent('Home');

    // Sample chart
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Sample Data',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [65, 59, 80, 81, 56],
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});

function changeContent(section) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<h1>${section}</h1>`;

    // You can add additional logic here to load dynamic content based on the selected section.
}
