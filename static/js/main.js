var modal = document.getElementById('myModal');
var modalContent = document.getElementById('modalContent');

var span = document.getElementsByClassName("close")[0];
var modalImg = document.getElementById('modalImg');

span.onclick = function() {
    modal.style.display = "none";
};

modalImg.onclick = function() {
    modal.style.display = "none";
};
function showMyModal(src, type) {
    modal.style.display = "block";
    var windowWidth = window.innerWidth;
    if (type === 'high') {
        if (windowWidth > 650) {
            modalContent.style.maxWidth = '40%';
        } else {
            modalContent.style.maxWidth = '80%';
        }
    } else {
        if (windowWidth > 650) {
            modalContent.style.maxWidth = '70%';
        } else {
            modalContent.style.maxWidth = '90%';
        }
    }
    modalImg.src = src;
}