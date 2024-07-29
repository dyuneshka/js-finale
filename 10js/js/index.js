document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page') || 1;

    const response = await fetch(`https://gorest.co.in/public-api/posts?page=${page}`);
    const data = await response.json();

    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = data.data.map(article => `
        <div>
            <a href="post.html?id=${article.id}">${article.title}</a>
        </div>
    `).join('');

    const pagination = data.meta.pagination;
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = `
        ${pagination.pages > 1 ? `<a href="index.html?page=1" class="${pagination.page == 1 ? 'disabled' : ''}">First</a>` : ''}
        ${pagination.links.previous ? `<a href="index.html?page=${pagination.page - 1}">Previous</a>` : ''}
        ${pagination.links.next ? `<a href="index.html?page=${pagination.page + 1}">Next</a>` : ''}
        ${pagination.pages > 1 ? `<a href="index.html?page=${pagination.pages}" class="${pagination.page == pagination.pages ? 'disabled' : ''}">Last</a>` : ''}
    `;
});