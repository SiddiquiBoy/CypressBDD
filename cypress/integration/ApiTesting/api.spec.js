///<reference types='cypress'/>
describe("API testing demo",()=>{

    it('GET Call', () => {
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users/6942198',
            headers:{
                'Authorization':'Bearer 71498bd88c432c6461b4d3dd5c7c3bbcbedcb7d0356612ec926a7d064464cb22'
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200);
            cy.log(JSON.stringify(resp.body.name));
            expect(resp.body.name).to.eq('Acharyasuta Nambeesan');
        });
    });
    it('POST Call', () => {
        cy.request({
            method:'POST',
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                'Authorization':'Bearer 71498bd88c432c6461b4d3dd5c7c3bbcbedcb7d0356612ec926a7d064464cb22'
            },
            body:{
                name:'Test User',
                email:'testuser@test.com',
                gender:'MALE',
                status:'ACTIVE'
            }
        }).then((response) => {
            expect(response.body).has.property('name','Test User');
        });
    })
})