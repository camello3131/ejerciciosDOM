const d = document;

export default function contactFormValid() {
    const $form = d.querySelector(".contact_form")
    const $inputs = d.querySelectorAll(".contact_form [required]")
    
    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name
        $span.textContent= input.title
        input.insertAdjacentElement("afterend", $span)
        $span.classList.add("contact-form-error", "none")

        d.addEventListener("keyup", (e) => {
            if(e.target.matches(".contact_form [required]")) {
                let $input = e.target
                let pattern = $input.pattern || $input.dataset.pattern

                if (pattern && $input.value !== "") {
                    let regex = new RegExp(pattern)
                    return !regex.exec($input.value)
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
                }

                if (!pattern) {
                    return ($input.value === "")
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
                }
            }
        })

    })

    d.addEventListener("submit", (e) => {
        //
        alert("Enviando formulario")

        const $loader = d.querySelector(".contact-form-loader")
        const $response = d.querySelector(".contact-form-response")

        $loader.classList.remove("none")

        setTimeout(() => {
            $loader.classList.add("none")
            $response.classList.remove("none")
            setTimeout(() => {
                $response.classList.add("none")
            }, 3000);
            $form.reset()
        }, 3000);
    })
}