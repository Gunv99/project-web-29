import * as bootstrap from "bootstrap";

export function setupAlert() {
    var alertList = document.querySelectorAll('.alert');
    alertList.forEach(function (alert) {
        new bootstrap.Alert(alert)
    });  
}