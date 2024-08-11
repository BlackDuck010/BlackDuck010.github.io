document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('upload-form');
    const openModalButton = document.getElementById('open-modal-button');
    const applyColorsButton = document.getElementById('apply-colors-button');
    const modal = document.getElementById('color-modal');
    const fileInput = document.getElementById('excelFile');
    const fileNameSpan = document.getElementById('file-name');
    const uploadButton = document.getElementById('upload-button');
    const contentArea = document.querySelector('.content-area');
    const placeholder = document.getElementById('placeholder');
    const svg = contentArea.querySelector('svg');

    // Set initial text content for file name and hide upload button
    fileNameSpan.textContent = 'No file selected';
    uploadButton.classList.add('d-none'); // Hide using Bootstrap class

    // Default colors
    let colors = ["#c4f33c", "#FF8C00", "#66e866", "#de61dc", "#FFC0CB"];
    let leafColor = "#FFFFFF"; // Blue for leaf nodes
    let lastData = null; // Store the last loaded data to redraw when colors change

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    lastData = data[0]; // Store the last data
                    placeholder.style.display = 'none'; // Hide placeholder
                    svg.innerHTML = ''; // Clear previous SVG content
                    drawIndentedTree(lastData, colors, leafColor); // Draw the tree
                } else {
                    console.log('No data or empty data received:', data);
                }
            })
            .catch(error => console.error('Error:', error));
    });

    fileInput.addEventListener('change', function() {
        const fileName = this.files.length > 0 ? this.files[0].name : 'No file selected';
        fileNameSpan.textContent = fileName;
        if (this.files.length > 0) {
            uploadButton.classList.remove('d-none'); // Show the upload button
        } else {
            uploadButton.classList.add('d-none'); // Hide the upload button
        }
    });

    openModalButton.addEventListener('click', function() {
        $('#color-modal').modal('show'); // Use Bootstrap's jQuery modal method
    });

    applyColorsButton.addEventListener('click', function() {
        // Update colors from color pickers
        colors = [
            document.getElementById('color-0').value,
            document.getElementById('color-1').value,
            document.getElementById('color-2').value,
            document.getElementById('color-3').value,
            document.getElementById('color-4').value
        ];
        leafColor = document.getElementById('leaf-color').value;
        if (lastData) {
            svg.innerHTML = ''; // Clear previous SVG content
            drawIndentedTree(lastData, colors, leafColor); // Redraw tree with new colors
        }
        $('#color-modal').modal('hide'); // Close the modal using Bootstrap method
    });
});
