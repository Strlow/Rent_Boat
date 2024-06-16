document.body.onclick = (event)=> {
    const elem = event.target;
    //console.log(elem);
    if (elem.classList.contains('btn btn-outline-success')) {
        console.log(elem);
        navigator.clipboard.writeText('Успешно скопировано');

    }
 




}
