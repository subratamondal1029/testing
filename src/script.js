const button = document.querySelector('button')
button.addEventListener('click', (e) =>{
    shareScreenshotOnSocialMedia('linkedin')
})

function shareScreenshotOnSocialMedia(platform) {
    html2canvas(document.getElementById('capture'))
    .then(function(canvas) {
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const file = new File([blob], 'screenshot.png', { type: 'image/png' });

            if (navigator.share) {
                navigator.share({
                    title: 'resu',
                    text: 'Check out this screenshot!',
                    files: [file] // Add the file to the share data
                })
                .then(() => console.log('Screenshot shared successfully.'))
                .catch((error) => console.error('Error sharing screenshot:', error));
            }else{
                alert('your browser does not support share feature You can download it and share')
                const a = document.createElement('a')
            a.href = url
            a.download = "screenshort.png"
            a.click()
            }

            
        }, 'image/png');
    });
}