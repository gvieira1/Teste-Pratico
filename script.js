//cria mascara de cpf e telefne
document.addEventListener('DOMContentLoaded', function () {
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');

    cpfInput.addEventListener('input', function () {
        this.value = formatCPF(this.value);
    });

    telefoneInput.addEventListener('input', function () {
        this.value = formatTelefone(this.value);
    });

    function formatCPF(value) {
        value = value.replace(/\D/g, ''); 
        value = value.replace(/^(\d{3})(\d)/, '$1.$2'); 
        value = value.replace(/^(\d{3}\.\d{3})(\d)/, '$1.$2'); 
        value = value.replace(/\.(\d{3})(\d)/, '.$1-$2'); 
        return value;
    }

    function formatTelefone(value) {
        value = value.replace(/\D/g, ''); 
        value = value.replace(/^(\d{2})(\d)/, '($1) $2'); 
        value = value.replace(/(\d{5})(\d)/, '$1-$2'); 
        return value;
    }
});

//gera modal
document.addEventListener('DOMContentLoaded', () => {
    const linksTelefone = document.querySelectorAll('.aparecer');
  
    linksTelefone.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const telefone = link.getAttribute('data-telefone');
        document.getElementById('modalTelefoneBody').textContent = telefone;
        const modal = new bootstrap.Modal(document.getElementById('telefoneModal'));
        modal.show();
      });
    });
  });
  
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const valor1 = document.getElementById('cpf').value;
    const valor2 = document.getElementById('telefone').value;

    function validarCampo(valor, maxLength) {
        return valor.length === maxLength;
    }

    const maxLength1 = 14;  
    const maxLength2 = 15;

    if (
        !validarCampo(valor1, maxLength1) ||
        !validarCampo(valor2, maxLength2) 
    ) {
        alert('Por favor, insira o CPF e o Telefone corretamente!');
        return;
    }

    alert('Sua mensagem foi enviada! Obrigado por entrar em contato!');
});



function calcularRegraDeTres(event) {
    
    event.preventDefault();
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const valor3 = parseFloat(document.getElementById('valor3').value);

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        alert('Por favor, insira todos os valores corretamente.');
        return;
    }

    //regra de três: (valor1 / valor2) = (valor3 / resultado)
    const resultado = (valor3 * valor2) / valor1;
    document.getElementById('resultado').value = resultado.toFixed(2);
}

//gera modal 
document.addEventListener('DOMContentLoaded', () => {
    const casaModal = document.querySelectorAll('.casa');
  
    casaModal.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const modal = new bootstrap.Modal(document.getElementById('casaModal'));
        modal.show();
      });
    });
  });

  //exporta imagem com html2canvas
  document.getElementById('capture').addEventListener('click', function() {
    html2canvas(document.getElementById('conteudo'), {
        onclone: function(clonedDoc) {
            const images = clonedDoc.querySelectorAll('img');
            images.forEach(img => {
                img.crossOrigin = 'Anonymous'; 
            });
        }
    }).then(function(canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'screenshot.png';
        link.click();
    }).catch(function(error) {
        console.error('Erro ao capturar a tela:', error);
    });
});