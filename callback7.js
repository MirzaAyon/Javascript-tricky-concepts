function handleClick() {
    console.log('button is clicked');
}

document.getElementById('my-btn').addEventListener('click', handleClick)

//uporer ta and nicher ta same 

document.getElementById('btn').addEventListener('click', function () {
    console.log('buttn is clicked');
})