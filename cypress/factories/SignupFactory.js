var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data =  {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp:'81993044063',
            adress:{
                postalcode:'50721040',
                adress:'Rua Desembargador Virgílio de Sá Pereira',
                addressNumber:'544',
                addressDetails:'apt. 104',
                district:'Cordeiro',
                cityUf:'Recife/PE'
            },
            delivery_method: 'Moto',
            cnh: 'Untitled Diagram.jpg',
        } 

        return data

    }
}