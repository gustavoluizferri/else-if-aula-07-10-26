let pontos = 1000
let tempoDeCasa = 3

if(pontos>0 && pontos<=99){
    console.log("liga bronze")
} else if (pontos>99 && pontos<=499){
    console.log("liga prata")
} else if (pontos>499 && pontos<=999){
    console.log("liga ouro")
} else if (pontos>999 && tempoDeCasa>1){
    console.log("liga diamante")
} else{
    console.log("numero invalido")
}

