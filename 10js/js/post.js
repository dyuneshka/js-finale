document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        document.getElementById('article').innerHTML = '<p>Article not found.</p>';
        return;
    }

    const [postResponse, commentsResponse] = await Promise.all([
        fetch(`https://gorest.co.in/public-api/posts/${postId}`),
        fetch(`https://gorest.co.in/public-api/comments?post_id=${postId}`)
    ]);

    const postData = await postResponse.json();
    const commentsData = await commentsResponse.json();

    if (postData.data) {
        document.getElementById('article').innerHTML = `
            <h1>${postData.data.title}</h1>
            <p>${postData.data.body}</p>
        `;
    } else {
        document.getElementById('article').innerHTML = '<p>Article not found.</p>';
    }

    const commentsContainer = document.getElementById('comments');
    if (commentsData.data.length > 0) {
        commentsContainer.innerHTML = commentsData.data.map(comment => `
            <div>
                <strong>${comment.name}</strong>
                <p>${comment.body}</p>
            </div>
        `).join('');
    } else {
        commentsContainer.innerHTML = '<p>No comments available.</p>';
    }
});