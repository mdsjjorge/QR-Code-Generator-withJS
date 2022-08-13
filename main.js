const QRCodeGenerate = () => {
    let QRContent = document.querySelector('textarea').value;
    let googleAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=';
    let fullURL = googleAPI + QRContent;
    console.log(fullURL);
    console.log(QRContent);
    document.querySelector('#QRImg').src = fullURL;
}
