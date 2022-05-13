import singup from '../pages/SginupPage';
import SignupFactory from '../factories/SignupFactory';
import SginUpPage from '../pages/SginupPage';

describe('signup', function() {

    // beforeEach(function() {
    //     cy.fixture('deliver').then((d)=> {
    //         this.deliver = d
    //     })
    // });

    it('User shold be deliver', function() {

        var deliver = SignupFactory.deliver()

        singup.go()
        singup.fillform(deliver)
        singup.submit()
       
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        singup.modalContantShouldBe(expectedMessage) 
    });

    it('incorret cpf', function() {

        var deliver = SignupFactory.deliver()

        deliver.cpf = '0241330149e'

        singup.go()
        singup.fillform(deliver)
        singup.submit()

        singup.alerMessageShouldBe('Oops! CPF inválido')

    });

    it('incorret email', function() {

        var deliver = SignupFactory.deliver()
        
        deliver.email = 'ddd.dd.dd'
        singup.go()
        singup.fillform(deliver)
        singup.submit()

        singup.alerMessageShouldBe('Oops! Email com formato inválido.')

    });

    context('Requeried fields', function() {
        
        const messages = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'delivered_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}
        ]

        before(function() {
            singup.go()
            singup.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is requiried`, function(){
                sginupPage.alerMessageShouldBe(msg.output)
            });
        })
    });
});