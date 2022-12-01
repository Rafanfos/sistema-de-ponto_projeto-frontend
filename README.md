# Sistema de registro de ponto

## Introdução

Afim de resolver problemas referentes ao registro de ponto que enfrentávamos no curso, 6 pessoas uniram-se com o propósito de densenvlover uma aplicação que unificasse o sistema de ponto com features adcionais, utilizando react,typescript juntamente com algumas libs e uma fake API de JSON-Server-Auth.

## Funcionamento 

Por ser uma plataforma com fins empresariais, o registro é feito pelo próprio back-end. Para fins de teste sugerimos utilizar as contas abaixo:

**Instrutor:**
- login: teste_instrutor@mail.com;
- senha: 1234;

 **Aluno:**
- login: teste_aluno@mail.com;
- senha: 1234;

### 1 Login

Insira os dados de login de teste sugeridos acima para acessar as dashboards de intrutor ou aluno.

### 2 Dashboard instrutor

Inicialmente são exibidas as informações com relação ao módulo e turma do instrutor além data do dia. Na barra lateral temos um menu de navegação no qual o primeiro ícone acessa a página principal da dashboard, o segundo o registro de pontos e o terceiro as configurações de conta. No final temos um botão que realiza logout. Além disso temos:

#### 2.1 Checkin e checkout

Os botões são liberados conforme o horário, caso o horário do checkout o checkin será desabilitado. Caso algum dos registros sejam feitos o mesmo também será desabilitado. Para bater no ponto batsa clicar no botão que esteja habilitado e uma mensagem confirmará a batida de ponto.

#### 2.2 Alunos

Aqui são listados os alunos do instrutor, sendo que podem ser adcionados novos ao clicar no botão "+".

##### 2.2.1 Adicionar alunos

Ao clicar no botão de "+" abrirá uma janela com um formulário para ascrentar as informações do aluno. Ao concluir a adição caso o aluno tenha registrod e ponto, o último será exibido na tabela abaixo.

##### 2.2.2 Deletar alunos

Na tabela de alunos há uma lixeira a frente, na linha do último regstro do aluno, ao clicar um pop-up será exibido para confirmar a remoção do mesmo, após concluir será exibida uma mensagem de confirmação.

### 3 Registro de pontos

Temos duas informações nessa página, uma tabela com os registros do instrutor e outra com todos registro dos seus alunos. Ambas possuem um calendário para filtrar o dia ou período o qual o usuário deseja visualizar os registros, porém no caso do aluno, o instrutor define qual aluno quer acessar as informações por meio de uma caixa de seleção ou digitando o nome do aluno no input.

### 4 Configurações

Nessa página o usuário pode alterar suas configurações de nome de exibição, email e foto, as alterações podem ser feitas em conjunto ou de forma singular. Ao modificar algum dos campos o botão é habilitado, ao cliar no botão uma mensagem confirmará as alterações. A atualização do nome pode ser verificada voltando para página principal, o email pode ser testado ao tentar logar novamente, a foto é atualizada na própria barra lateral.

### 5 Logout

Ao clicar no último ícone (portinha com seta) o usuário será deslogado e voltará para  página de login.

### 6 Dashboard aluno

Ao logar com os dados do aluno teste, o usuário é transferido para a dashboard do aluno, percebe-se que a barra lateral é semelhante somente com a ausência do ícone de registro de pontos. Além das informações:

#### 6.1 Checkin e checkout

Inicialmente com a função de bater ponto é semelhante a do instrutor, porém o horário de checkout é um pouco diferente e ao bater o ponto um formulário é exibido para preencher a atividade que a aluno está executando além da existência de algum impedimento, ao confirmar no botão azula janela é fechada e uma mensagem com confirmação d eponto batido é exibida.

#### 6.2 Nota de presença

É exibida uma porcentagem de presença com base no período de tempo entre o primeiro e último registro, e quantidade de presenças existentes nesse período, sendo que eixstem alguns critérios para presença e falta. Caso o aluno não bata o ponto ou atrase tanto em checkin quanto checkout receberá uma falta, para todos os outros receberá uma presença;

#### 6.3 Tabela de resgistros

Uma tabela mostra o resgistro de todos os dias em que o alunor realizou checkin e checkout com os respetivos horários e status(atrasado ou conforme).

** Com relação as funções da página de configurações e logout, o funcionamento se dá da mesma forma que para o instrutor. **








