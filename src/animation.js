export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            when: "beforeChildren",
            staggerChildren: .25
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: .5
        }
    }
}

export const titleAnimation = {
    hidden: {
        y: 200
    },
    show: {
        y: 0,
        transition: {
            duration: .5,
            ease: "easeOut"
        }
    }
}

export const fade = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeOut",
            duration: .75
        }
    }
}

export const photoAnimation = {
    hidden: {
        opacity: 0,
        scale: 1.5
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: .75,
            ease: "easeOut"
        }
    }
}

export const lineAnim = {
    hidden: {
        width: "0%"
    },
    show: {
        width: "100%",
        transition: {
            duration: 1
        }
    }
}

export const slider = {
    hidden: {
        x: "-130%",
        skew: "45deg"
    },
    show: {
        x: "100%",
        skew: "0deg",
        transition: {
            duration: .70,
            ease: "easeOut"
        }
    }
}

export const sliderContainer = {
    hidden: {
        opacity: 1
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeOut",
            staggerChildren: .15
        }
    }
}

export const scrollReveal = {
    hidden: {
        opacity: 0,
        scale: 1.2,
        transition: {
            duration: .5
        }
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: .5
        }
    }
}