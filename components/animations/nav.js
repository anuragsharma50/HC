const navLinks = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: {
        y:0,
        opacity: 1,
        transition: {
            duration: 0.3,
            damping: 25,
            stiffness: 500,
        },
    }
}

const navButtons = {
    hidden: {
        x: "100vw",
        opacity: 0,
    },
    visible: {
        x:0,
        opacity: 1,
        transition: {
            duration: 0.20,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
}

module.exports = {navLinks,navButtons}