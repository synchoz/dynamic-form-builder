function showError(parent: HTMLElement, message: string): void {
    const errorDiv = document.createElement("div");
    errorDiv.className = "errorMsg";
    errorDiv.textContent = message;
    parent.appendChild(errorDiv);
}

function hideError(parent: HTMLElement): void {
    const errorDiv = document.querySelector(".errorMsg");
    if (errorDiv) parent.removeChild(errorDiv);
}


export {showError, hideError}