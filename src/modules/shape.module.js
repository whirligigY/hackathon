import {Module} from '../core/module'

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const canvas = document.createElement('canvas')
        canvas.id = 'canvasBlock'
        canvas.width = '300'
        canvas.height = '300'
        document.body.append(canvas)
        
        document.addEventListener('click', () => {
            var context = canvas.getContext("2d")
            context.fillStyle = '#ffff'
            context.fillRect(0, 0, 300, 300)
            var randomShape = Math.floor((Math.random() * 6) + 1)
            if (randomShape == 1) {
                context.beginPath()
                context.rect(60, 130, 200, 100)
                context.fillStyle = '#00FF00'
                context.fill()
                context.lineWidth = 3
                context.strokeStyle = '#000'
                context.stroke()
            } else if (randomShape == 2) {
                context.beginPath()
                context.arc(150, 150, 69, 0, 2 * Math.PI, false)
                context.fillStyle = '#FF0000'
                context.fill()
                context.lineWidth = 3
                context.strokeStyle = '#000'
                context.stroke()
            } else if (randomShape == 3) {
                context.beginPath()
                context.arc(126, 125, 70, 0, Math.PI, false)
                context.closePath()
                context.lineWidth = 3
                context.fillStyle = '#0000FF'
                context.fill()
                context.strokeStyle = '#000'
                context.stroke()
            } else if (randomShape == 4) {
                context.beginPath()
                context.arc(196, 115, 24, 1, Math.PI, false)
                context.closePath()
                context.lineWidth = 3
                context.fillStyle = 'yellow'
                context.fill()
                context.strokeStyle = '#000'
                context.stroke()
            } else if (randomShape == 5) {
                context.beginPath()
                context.arc(26, 15, 40, 0, Math.PI, false)
                context.closePath()
                context.lineWidth = 3
                context.fillStyle = 'black'
                context.fill()
                context.strokeStyle = '#000'
                context.stroke()
            } else if (randomShape == 6) {
                context.beginPath()
                context.rect(126, 125, 100, 50)
                context.closePath()
                context.lineWidth = 3
                context.fillStyle = '#0000FF'
                context.fill()
                context.strokeStyle = '#000'
                context.stroke()
            }
        })

    }
}