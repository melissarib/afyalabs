function convertToCurrency(value){
    return Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(value)

}

const Produto = {
    id: 1, 
    name: "Iphone 12",
    price: 8000,
    discount: 5,
    description: {
        features: "touch screen"
    },
    getDiscount: function(){
        return ((this.price * this.discount) / 100)
    },
    getFinalPrice: function(){
        return convertToCurrency((this.price - this.getDiscount()))
    }
}

//não é uma boa pratica, mas uma ação permitida
Produto.price = 10000

//sintaxe mais antiga do ES6 - export default Produto
module.exports = Produto