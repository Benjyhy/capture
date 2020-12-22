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
        y: 300,
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