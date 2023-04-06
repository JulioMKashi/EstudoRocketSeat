import { GithubUser } from "./GithubUser.js"
export class Favorites{
     constructor(root){
        this.root = document.querySelector(root)

        this.load()
    }
    
    load(){
        this.userEntries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save(){
        localStorage.setItem('@github-favorites', JSON.stringify(this.userEntries))
    }
    
    async add(username) {
        try{
            const userExists = this.userEntries.find(entry => entry.login === username)
            
            if(userExists) {
                throw new Error('Usuário já cadastrado')
            }
            const user = await GithubUser.search(username)

            if(user.login === undefined) {
                throw new Error('Usuário não encontrado')
            }

            this.userEntries = [user, ...this.userEntries]
            this.update()
            this.save()
        }
        catch(error) {
            alert(error.message)
        }
    }

    delete(user) {
        const filteredEntries = this.userEntries 
        .filter(entry => entry.login !== user.login)

        this.userEntries = filteredEntries 
        this.update()
        this.save()
    }
    
}

export class FavoritesView extends Favorites{
    constructor (root) {
        super(root)
        
        this.tbody = this.root.querySelector('table tbody')
        this.update()
        this.onAdd()
    }

    onAdd(){
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const{ value } = this.root.querySelector('.search input')
            console.log(value)
            this.add(value)
        }
    }

    update() {
        this.removeAllTr()

        this.userEntries.forEach(user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `http://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem do usuário ${user.name}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('followers').textContent = user.followers 

            row.querySelector('remove').onclick = () => {
                const isOk = confirm('Tem Certeza que deseja deletar essa linha?')
                if(isOk) {
                    this.delete(user)
                }
            }
            this.tbody.append(row)
        })
    }

    createRow(){
        const tr = document.createElement('tr')
            tr.innerHTML = `
            <tr>
                <td class="user">
                    <img src="https://github.com/maykbrito.png" alt="">
                    <a href="https://github.com/maykbrito" target="_blank">
                        <p>Mayk Brito</p>
                        <span>maykbrito</span>
                    </a>
                </td>
                <td class="repositories">
                    76
                </td>
                <td class="followers">
                    9589
                </td>
                <td>
                    <button class="remove">Remove</button>
                </td>
            </tr>
        `

        return tr 
    }

    removeAllTr(){
        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        });
    }
}

