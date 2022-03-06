const Card = {
    rotate(event) {
        const card = document.querySelector('.sides-wrapper')

        card.style.transform += 'rotateY(180deg)'

        event.preventDefault()
    }
}