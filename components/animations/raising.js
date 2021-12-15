const menuItems = {
    hidden: {
        y: 20,
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
    },
    exit: {
        y: 20,
        opacity: 0,
    },
}

module.exports = menuItems