window.onload = function() {
    const uploadedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
    const fileList = document.getElementById('fileList');

    if (uploadedFiles.length === 0) {
        fileList.innerHTML = '<p>No files uploaded yet.</p>';
    } else {
        uploadedFiles.forEach(file => {
            const link = document.createElement('a');
            link.href = file.content; // Use the data URL for display
            link.download = file.name; // Suggest the file name for download
            link.textContent = file.name;
            fileList.appendChild(link);
            fileList.appendChild(document.createElement('br'));
        });
    }
};
