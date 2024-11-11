function showLoading(parent: HTMLElement): void {
    const loadingDiv = document.createElement("div");
    loadingDiv.className = "loader";
    parent.appendChild(loadingDiv);
}

function hideLoading(parent: HTMLElement): void {
    const loadingDiv = document.querySelector(".loader");
    if (loadingDiv) parent.removeChild(loadingDiv);
}


export {showLoading, hideLoading}