document.querySelectorAll(".fqa-question").forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        // Collapse any other open answer
        document.querySelectorAll(".fqa-answer.open").forEach((openAnswer) => {
            if (openAnswer !== answer) {
                gsap.to(openAnswer, {
                    height: 0,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.inOut"
                });
                openAnswer.classList.remove("open");
            }
        });

        if (answer.classList.contains("open")) {
            // Collapse this answer
            gsap.to(answer, {
                height: 0,
                opacity: 0,
                duration: 0.4,
                ease: "power2.inOut"
            });
            answer.classList.remove("open");
        } else {
            // Expand this answer
            gsap.set(answer, { height: "auto" });
            let fullHeight = answer.offsetHeight;
            gsap.fromTo(
                answer,
                { height: 0, opacity: 0 },
                { height: fullHeight, opacity: 1, duration: 0.4, ease: "power2.inOut" }
            );
            answer.classList.add("open");
        }
    });
});
