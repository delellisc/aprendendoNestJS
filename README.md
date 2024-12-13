# Aprendendo NestJS
Na matéria de Sistemas Corporativos, desenvolveremos nossos projetos a partir do framework NestJS. Dessa forma, esse repositório se torna relevante ao documentar os ensinamentos adquiridos durante as aulas da disciplina.

## Sumário
* Teoria sobre sistemas corporativos
    1. Sistemas Informacionais Gerenciais (SIG)
    2. Sistemas de Apoio à Decisão (SAD)
    3. Sistemas ERP
    4. Sistemas ERP (parte 2)
* Introdução sobre NestJS
    1. ...
    2. ...

## Teoria sobre sistemas corporativos

### 1. Sistemas Informacionais Gerenciais (SIG)
### 2. Sistemas de Apoio à Decisão (SAD)
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

### Como instalar o MySQL Workbench no Ubuntu:
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