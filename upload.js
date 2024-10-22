document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual submission

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    // Simulate file upload by saving it in local storage
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            const fileData = {
                name: file.name,
                content: reader.result,
                type: file.type
            };
            // Store file data in local storage
            let uploadedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
            uploadedFiles.push(fileData);
            localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));

            document.getElementById('result').textContent = `Uploaded: ${file.name}`;
            fileInput.value = ''; // Clear the file input
        };
        reader.readAsDataURL(file); // Read file as Data URL
    }
});
