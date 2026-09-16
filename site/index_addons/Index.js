
//=======================================================================================
//      Codigo de Scroll para uma classe
//=======================================================================================

    function scrool(classe, fase) {

            console.log("Foi."); 

                //Pega a posição do que eu quero
            const position = document.querySelector(`.${classe}`);

                //outra verificação de existencia e se é um True
            if (position) {
                //manda scrollar até ...
                position.scrollIntoView({
                    behavior: 'smooth',
                    //fase = center, end, start e etc...
                    block: fase
                });
            }
    }
    