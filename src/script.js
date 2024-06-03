const button = document.querySelector('#shareBtn')
button.addEventListener('click', shareScreenshot)

function shareScreenshot() {
    html2canvas(document.getElementById('capture'))
    .then(function(canvas) {
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const file = new File([blob], 'screenshot.png', { type: 'image/png' });

            if (navigator.share) {
                navigator.share({
                    title: 'Result',
                    text: 'Check out this Result | App Link:- https://subrataprojects.netlify.app/quiz_app !',
                    files: [file]
                })
                .catch(() => alert('Error sharing Result'));
            }else showPop(url)

        }, 'image/png');
    });
}

function showPop(url){
    document.getElementById('popUp').style.transform = 'scale(1)'
    const downloadBtn = document.getElementById('downloadResult')
        downloadBtn.href = url
        downloadBtn.download = "screenshort.png"
        
    const closeBtns = document.querySelectorAll('.popClose')
    closeBtns.forEach((btn) =>{
        btn.addEventListener('click', (e) =>{
            e.preventDefault()
            document.getElementById('popUp').style.transform = 'scale(0)'
        })
    })
}