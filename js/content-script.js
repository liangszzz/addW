class Panel {

    createPanel() {
        const panelDiv = document.createElement("div");
        panelDiv.innerHTML = `
            <div>
            <p>A</p>
            <button class="btn close">close</button>
            </div>`
        console.log("context panel")
        panelDiv.classList.add("translate_panel")
        panelDiv.querySelector(".close").onclick = () => {
            this.panel.classList.remove("show")
        }
        document.body.appendChild(panelDiv);
        this.panel = panelDiv;
    }

    showPanel(json, x, y) {
        console.log('showPanel', json, x, y)
        this.panel.classList.add("show")
        this.panel.style.left = x + "px";
        this.panel.style.top = y + "px";
    }
}

let panel = new Panel();
panel.createPanel()

chrome.runtime.onMessage.addListener((request, sender, callBack) => {
    panel.showPanel(request, document.documentElement.clientWidth / 2, document.documentElement.clientHeight / 2)
    return true;
})