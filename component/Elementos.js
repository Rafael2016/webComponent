class Elementos extends HTMLElement{

    constructor(){
        super()
        this.build()
    }
   

    build =()=>{

        const shadow      = this.attachShadow({mode:'open'})
        shadow.innerHTML  = '<h1>Web Component - Javascript/HTML' 

        shadow.appendChild(this.styles())

        const ul =  this.createULtBreadcrumb()
        const li =  this.createLIBreadcrumb()
        console.log(li)
        
        li.forEach(element =>ul.appendChild(element));

        shadow.appendChild(ul)
    }

    createULtBreadcrumb=()=>{

        const breadcrumb = document.createElement('ul')
        breadcrumb.classList.add('breadcrumb-navigatio')
        return breadcrumb
    }

    createLIBreadcrumb=()=>{

        const menus  = ['Home','Contato','Case Sucesso']

        let createLI =  (menu)=>{
            
            let liElement           = document.createElement('li')
            liElement.textContent   = menu
            
            return liElement
        }

        return Array.from(menus,createLI) 
    }

    styles=()=>{

        const style = document.createElement('style')
        style.textContent = `
            .breadcrumb-navigation {
                padding: 10px 18px;
                background-color: rgb(238, 238, 238);
            }
    
            .breadcrumb-navigation>li {
                display: inline;
            }
    
            .breadcrumb-navigation>li>a {
                color: #026ece;
                text-decoration: none;
            }
    
            .breadcrumb-navigation>li>a:hover {
                color: #6fc302;
                text-decoration: underline;
            }
    
            .breadcrumb-navigation li+li:before {
                padding: 4px;
                content: "/";
            }
        `
        
        return style
    }
}

 customElements.define('elemento-div', Elementos)