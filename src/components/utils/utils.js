export const calcTotalPrice = (items) => items.reduce((acc, game) => {
    return acc = acc + game.price
}, 0)