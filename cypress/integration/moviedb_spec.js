describe('Prueba de pagina inicial', () => {

    beforeEach("Before each test", () => {
           cy.visit("https://www.themoviedb.org/")
    })


    it('Carga la pagina', () => {
        cy.get('.logo').should('be.visible')
    })

    it('Buscar por una pelicula', () => {
        cy.get('#inner_search_v4').type('Ajiaco')
        cy.get("[value='Search']").click()
        cy.get("[class='search_results movie ']").find('p').contains('There are no movies that matched your query')
    })
})

describe('Cargar TV Shows', () => {

    it('Carga la pagina', () => {
        cy.get('.logo').should('be.visible')
    })

    it('Buscar TV Shows', () => {
        cy.get("ul[data-role='menu']>li[role='menuitem']>a[href='/tv']").click()
        cy.get("ul[data-role='popup']>li[role='menuitem']>a[href='/tv']").click()
        cy.get("div[class ='title']").find('h2').contains('Popular TV Shows')
    })
})

describe('Cargar People', () => {

    it('Ir a la pagina principal', () => {
        cy.visit("https://www.themoviedb.org/")
    })

    it('Carga la pagina', () => {
        cy.get('.logo').should('be.visible')
    })

    it('Buscar People', () => {
        cy.get("ul[data-role='menu']>li[role='menuitem']>a[href='/person']").click()
        cy.get("ul[data-role='popup']>li[role='menuitem']>a[href='/person']").click()
        cy.get("span[class ='title']").contains('Popular People')
    })
})

describe('Buscar Actor/Actriz', () => {

    it('Ir a la pagina principal', () => {
        cy.visit("https://www.themoviedb.org/")
    })

    it('Carga la pagina', () => {
        cy.get('.logo').should('be.visible')
    })

    it('Buscar People', () => {
        cy.get('#inner_search_v4').type('Kelly Reilly')
        cy.get("[value='Search']").click()
        cy.get("div[class ='search_results person '] * div[class='item profile list_item']")
            .should('not.have.length', 0)
    })
})

describe('Buscar Recent Discussions', () => {

    it('Ir a la pagina principal', () => {
        cy.visit("https://www.themoviedb.org/")
    })

    it('Carga la pagina', () => {
        cy.get('.logo').should('be.visible')
    })

    it('Buscar More', () => {
        cy.get("ul[data-role='menu']>li[role='menuitem']>a[href='#']").click()
        cy.get("ul[data-role='popup']>li[role='menuitem']>a[href='/discuss']").click()
        cy.get("a[href='/discuss/movies']").click()
        cy.get("tbody tr ").should('have.length', 11)
    })
})