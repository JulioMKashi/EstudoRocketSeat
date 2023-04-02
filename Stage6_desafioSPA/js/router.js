export class Router{
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404] 
        fetch(route)
        .then((data) => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }

    highligh(){
        document.querySelector('a href')
        //quando clicar no link colocar um estilo que deixa a cor da fonte diferente e deixe ela bold 
        //Projeto parecido do pomodoro, pensar em uma função que faça isso e onde devo passar ela
    }
}