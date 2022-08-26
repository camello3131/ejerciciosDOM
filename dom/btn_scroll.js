const d = document;
const w = window;

export function scrollTopBtn (btn) {
    const $btn = d.querySelector(btn);

    w.addEventListener("scroll", (e)=> {
        let topScroll = d.documentElement.scrollTop
        
        if (topScroll > 600) {
            $btn.classList.remove ("hidden")
        } else {
            $btn.classList.add("hidden")
        }
    })

    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }
    })
}