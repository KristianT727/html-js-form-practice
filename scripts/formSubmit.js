function removeCard(e) {
    const d = e.parentNode;
    const c = d.parentNode;
    const b = c.parentNode;
    b.parentNode.removeChild(b);
    console.log("removed ", b);
}

const onSubmit = (event) => {
    event.preventDefault();
    const {inputBox} = event.target;
    const d = new Date();  
    const list = document.getElementById("todoRow");

    list.innerHTML +=
    `
    <div class="column col-4 col-sm-6">
                    <div class="card" style="width: 100%">
                        <div class="card-body">
                            <h5 class="card-title">${d.toUTCString()}</h5>
                            <p class="card-text">
                                ${inputBox.value}
                            </p>
                            <a href="#" class="btn btn-primary" onclick="removeCard(this)">Remove</a>
                        </div>
                    </div>
                </div>
    `;
}

addEventListener("submit", onSubmit);