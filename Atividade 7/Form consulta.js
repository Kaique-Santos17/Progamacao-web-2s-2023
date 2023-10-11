<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Formulário de Marcação de Consulta</title>
</head>
<body>
    <h1>Formulário de Marcação de Consulta</h1>
    <form id="consultaForm" onsubmit="return validarFormulario()">
        <!-- Dados Pessoais -->
        <h2>Dados Pessoais</h2>
        <label for="nomeCompleto">Nome Completo:</label>
        <input type="text" id="nomeCompleto" required>
        
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" required>

        <label for="dataNascimento">Data de Nascimento:</label>
        <input type="date" id="dataNascimento" required>

        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" required>

        <label for="uf">UF:</label>
        <input type="text" id="uf" required>

        <label for="cep">CEP:</label>
        <input type="text" id="cep" required>

        <label for="email">E-mail:</label>
        <input type="email" id="email" required>

        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" required>

        <!-- Dados da Consulta -->
        <h2>Dados da Consulta</h2>
        <label for="especialidade">Especialidade Médica:</label>
        <select id="especialidade" required>
            <option value="">Selecione uma especialidade</option>
            <option value="Cardiologia">Cardiologia</option>
            <option value="Dermatologia">Dermatologia</option>
            <!-- Adicione outras especialidades aqui -->
        </select>

        <label for="dataHora">Data e Hora da Consulta:</label>
        <input type="datetime-local" id="dataHora" required>

        <label for="alergias">Medicamentos Alergicos:</label>
        <input type="text" id="alergias">

        <label for="informacoesAdicionais">Informações Adicionais:</label>
        <textarea id="informacoesAdicionais" rows="4"></textarea>

        <input type="submit" value="Marcar Consulta">
    </form>

    <div id="erroMensagem" style="color: red;"></div>

    <script>
        function validarFormulario() {
            var formulario = document.getElementById("consultaForm");
            var camposVazios = [];
            
            for (var i = 0; i < formulario.elements.length; i++) {
                var campo = formulario.elements[i];
                if (campo.required && campo.value === "") {
                    camposVazios.push(campo.labels[0].textContent);
                }
            }
            
            if (camposVazios.length > 0) {
                document.getElementById("erroMensagem").textContent = "Por favor, preencha os seguintes campos: " + camposVazios.join(", ");
                return false;
            } else {
                document.getElementById("erroMensagem").textContent = "";
                return true;
            }
        }
    </script>
</body>
</html>