# Aprendendo NestJS
Na matéria de Sistemas Corporativos, desenvolveremos nossos projetos a partir do framework NestJS. Dessa forma, esse repositório se torna relevante ao documentar os ensinamentos adquiridos durante as aulas da disciplina.

## Sumário
* Teoria sobre sistemas corporativos
    1. Sistemas Informacionais Gerenciais (SIG)
    2. Sistemas de Apoio à Decisão (SAD)
    3. Sistemas ERP
    4. Sistemas ERP (parte 2)
* Introdução sobre NestJS
    1. O que é o Nest?
    2. Inicializando um projeto Nest
    3. Utilizando typeORM e PG

## Teoria sobre sistemas corporativos

### 1. Sistemas Informacionais Gerenciais (SIG)
...

### 2. Sistemas de Apoio à Decisão (SAD)
...

### Atividade sobre SIG e SAD
1- Explique sobre sistema de informação gerencial?

>Resp.: Um sistema de informação gerencial (SIG) é um sistema desenvolvido para ser utilizado por empresas, diferindo-se de um sistema convencional, que é utilizado por um cliente final. Os SIGs são desenvolvidos para suprir necessidades da empresa e geralmente são utilizados no contexto de gerenciamento e tomada de decisões, fornecendo controle sobre os processos da empresa e gerando relatórios com informações relevantes.

2- Cite sobre SAD – Sistema de Apoio a Decisão

>Resp.: Um sistema de apoio à decisão (SAD), assim como comentado brevemente acima, é um tipo de sistema de informação gerencial. Ele tem como objetivo solucionar problemáticas vividas no meio corporativo. Isso é feito por meio da sintetização dos dados e geração de relatórios, que ao serem interpretados, auxiliam no processo de tomada de decisão da empresa.

3- Qual a Função dos sistemas de informação gerencial?

>Resp.: Como discutido anteriormente, os SIGs são utilizados por empresas para fornecer dados de maneira relevante, eficiente e limpa e facilitar a gestão da empresa.

4- Qual a Função dos SAD?

>Resp.: Como discutido anteriormente, em um ambiente competitivo como o mundo corporativo, sistemas que apontem quais as melhores decisões possíveis para uma determinada empresa se tornam muito relevantes. Isso é possível a partir da análise de relatórios gerados a partir do banco de dados daquela empresa.

5- Existe três tipos de informações obtidas pelo banco de dados, quais são? explique pelo menos uma!

>Resp.:
Os três tipos de informações obtidas por um banco de dados podem ser categorizadas como:
1- Informações Operacionais;
2- Informações Gerenciais;
3- Informações Executivas.
Uma informação operacional seria um dado relevante para alguma operação do sistema. Como por exemplo, na geração de um relatório "contas a receber" de um cliente, é preciso selecionar dados do cliente e dados das contas, que seriam informações operacionais.

### 3. Sistemas ERP
Sistema ERP é modular

Automatiza tarefas

Facilita e simplifica processos da empresa

### 4. Sistemas ERP (parte 2)

Servidor de aplicação

Middleware

Aplicação que fornece dados a serem consumidos

Servidor dentro de servidor

Aplicações empresariais geralmente são concebidas para interface e integração com outras aplicações empresariais

O servidor é responsável por essa integração

Características:

1. Grande - precisa de suporte multiusuarios
2. Orientado a empresas - atende às necessidades comerciais específicas; sensível às necessidades do negócio
3. Missão crítica - deve ser robusto o suficiente para sustentar o funcionamento contínuo

Conclusão - facilita a vida dos programadores e das empresas

---

### Atividade de Revisão

01- Como as informações de um banco de dados podem ser classificadas? Explique cada uma!

RESP.:
Os três tipos de informações obtidas por um banco de dados podem ser categorizadas como:
1. Informações Operacionais
2. Informações Gerenciais
3. Informações Executivas

Uma informação operacional seria um dado relevante para alguma operação do sistema. Como por exemplo, na geração de um relatório "contas a receber" de um cliente, é preciso selecionar dados do cliente e dados das contas, que seriam informações operacionais.

Uma informação gerencial seria um dado sensível para a gestão da empresa, como dados de transações e atividades do setor financeiro. Um exemplo é o número de inadimplentes com a empresa, que seria exibido na geração do relatório "contas a receber".

Uma informação executiva também seria um dado sensível para a gestão da empresa, mas apresentado como uma comparação, visando facilitar a decisão do executivo responsável pela gerência da empresa. Ainda no exemplo do relatório "contas a receber", uma informação executiva que pode estar contida nesse relatório é a comparação entre os inadimplentes e o número total de clientes da empresa.

02- Explique sobre sistema de informação?

RESP.:
Um sistema de informação é o conjunto de ferramentas, atividades e documentação responsáveis por coleta e gerência de dados.

03- Defina sistema de Informação Gerencial

RESP.:
Um sistema de informação gerencial (SIG) é um sistema desenvolvido para ser utilizado por empresas, diferindo-se de um sistema de informação convencional, que é utilizado por um cliente final. Os SIGs são desenvolvidos para suprir necessidades da empresa e geralmente são utilizados no contexto de gerenciamento e tomada de decisões, fornecendo controle sobre os processos da empresa e gerando relatórios com informações relevantes.

04- Qual a principal função dos sistemas de informação

RESP.:
Os sistemas de informação, como discutido anteriormente, tem como principal informação coletar e organizar dados relevantes. No ambiente corporativo, os sistemas de informação são utilizados para fornecer dados de maneira eficiente e limpa, facilitando a gestão da empresa

05- Explique o que é SAD

RESP.:
Um sistema de apoio à decisão (SAD), assim como comentado brevemente acima, é um tipo de sistema de informação gerencial. Ele tem como objetivo solucionar problemáticas vividas no meio corporativo. Isso é feito por meio da sintetização dos dados e geração de relatórios, que ao serem interpretados, auxiliam no processo de tomada de decisão da empresa.

06- Existe dois tipos de SAD, quais são? Explique pelo menos um

RESP.:
Os sistemas de apoio à decisão podem ser divididos em duas categorias: Baseado em Modelos e Orientado ao Objeto. Nos sistemas de apoio à decisão orientados ao objeto, também conhecidos como SAD orientado por dados, o sistema analisam a base de dados da empresa para extrair e analisar informações relevantes, apoiando a tomada de decisão da empresa a partir de relatórios que exibem esses dados. 

07- Descreva o termo “Aplicativo Corporativo”

RESP.:
O termo "Aplicativo Corporativo" é empregado quando se fala de aplicações que solucionam problemas organizacionais no ambiente corporativo.

08- Conceitue sobre servidor de Aplicação

RESP.:
Os servidor de aplicação são softwares categorizados como "middleware" que tem como função fornecer uma plataforma para que outras aplicativos corporativas sejam integrados ao ambiente da empresa, tornando possível a integração de atividades empresariais e aumento da eficiência dos processos da empresa.

09- O que é o Sistema ERP e para que serve?

RESP.:
Sistemas ERP (Enterprise Resource Planning) são SIGs responsáveis por gerenciar todos os setores de uma empresa. Um sistema ERP oferece aplicações de negócios que em conjunto, a partir da base de dados da empresa, monitoram o desempenho dos mais diversos setores da empresa, automatizam processos e auxiliam no planejamento da empresa.

10-Quais os tipos de software do modelo ERP?

RESP.:
Os sistemas ERP podem ser categorizados em três tipos de acordo com sua implementação. São eles: sistemas no local, sistemas baseados na nuvem e sistemas híbridos.

---

## Introdução sobre NestJS
Ler a documentação e comentar aqui o que eu deveria aprender na matéria.

### O que é o Nest?
...

### Inicializando um projeto Nest
...

### Utilizando typeORM e PG
...

---

## Descobrindo coisas durante a matéria de sistemas corporativos

### Adicionar um repositorio como subdiretorio de outro repositorio no GitHub
Precisei fazer isso pra upar os projetos do Nest no meu repositório geral sobre o framework.

```sh
git remote add -f projeto ./projeto02/
git merge -s ours --no-commit --allow-unrelated-histories projeto/master 
git read-tree --prefix=projeto02/ -u projeto/master
git read-tree --prefix=02projeto/ -u projeto/master
git commit -m "Merge do projeto02 como subdiretório"
git pull -s subtree Bprojeto master
```

### Como instalar o MySQL Workbench no Debian/Ubuntu:
Precisei instalar essa ferramenta antes do professor lecionar como fazer consultas SQL utilizando o Nest, uma vez que ela não estava mais disponível após o recesso. Provavelmente os computadores foram restaurados durante esse período.

Checar se o serviço MySQL já está instalado:
```sh
systemctl status mysql
```

Fazer a instalação do serviço:
```sh
sudo dpkg -i mysql-apt-config_0.8.33-1_all.deb 
sudo apt-get update
sudo apt-get install mysql-server
```

Após esse processo, verificar novamente se o serviço está instalado. Caso instalado, é possível instalar o Workbench:

```sh
sudo snap install mysql-workbench-community
```

OBS.: tentei a sequência de comandos a seguir e não funcionou, por isso optei por utilizar o ```snap``` como repositório para instalar a ferramenta:

```sh
sudo dpkg -i mysql-workbench-community_8.0.40-1ubuntu24.10_amd64.deb 
sudo apt-get update
sudo apt-get install mysql-workbench-community
sudo apt --fix-broken install
sudo apt-get install mysql-workbench-community
```

### Como mudar a senha de um usuário Postgres utilizando a ferramenta PSQL

Precisei alterar a senha do usuário padrão ```postgres``` para conectar ao PgAdmin 4 no computador do laboratório D18. De acordo com o professor seria melhor utilizar a ferramenta que estamos acostumados a realizar a instalação do Workbench.

Query em SQL para modificar a senha de um usuário Postgres utilizando a ferramenta PSQL:
```sql
ALTER USER user_name WITH PASSWORD 'new_password';
```