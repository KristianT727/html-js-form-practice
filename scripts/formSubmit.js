function remove(e) {
    e.parentNode.removeChild(e);
}

const onSubmit = (event) => {
    event.preventDefault();
}

addEventListener("submit", onSubmit);