// * Tabela Elemental
var elemento;
var tabelaElemental = document.getElementById('elemental');

var nomeElementoTitulo = document.getElementById('nomeElementoTitulo');
var nomeElemento = document.getElementById('nomeElemento');

var numeroAtomicoTitulo = document.getElementById('numeroAtomicoTitulo');
var numeroAtomico = document.getElementById('numeroAtomico');

var numeroMassaTitulo = document.getElementById('numeroMassaTitulo');
var numeroMassa = document.getElementById('numeroMassa');

var configEletronicaTitulo = document.getElementById('configEletronicaTitulo');
var configEletronica = document.getElementById('configEletronica');

var naturezaElementoTitulo = document.getElementById('naturezaElementoTitulo');
var naturezaElemento = document.getElementById('naturezaElemento');

var estadoFisicoTitulo = document.getElementById('estadoFisicoTitulo');
var estadoFisico = document.getElementById('estadoFisico');

var familiaTitulo = document.getElementById('familiaTitulo');
var familia = document.getElementById('familia');

// Links do Veja Mais
var vejaMais = document.getElementById('veja_mais');

// *Visibilidade da Tabela Elemental
var visivel = false;

// * Tabela Periodica
var tabelaPeriodica = document.getElementById('periodica');
var outrasDuasLinhas = document.getElementById('outras2Linhas');

tabelaPeriodica.addEventListener('click', function (e) {
    elemento = e.target.id;
    switch (elemento) {
        case 'h':
            nomeElemento.innerText = "Hidrogênio";
            numeroAtomico.innerText = "1";
            numeroMassa.innerText = "1,008";
            configEletronica.innerText = "1s[1]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Gasoso";
            familia.innerText = "1A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=33722552d114f0bbJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wYjQ0ZTA1My1kMDRiLTZhNjctMTM3My1mM2MwZDEyMTZiYTgmaW5zaWQ9NTIwOA&ptn=3&hsh=3&fclid=0b44e053-d04b-6a67-1373-f3c0d1216ba8&psq=hidrogenio+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvSGlkcm9nJUMzJUE5bmlv&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'he':
            nomeElemento.innerText = "Hélio";
            numeroAtomico.innerText = "2";
            numeroMassa.innerText = "4,0026";
            configEletronica.innerText = "1s[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Gasoso";
            familia.innerText = "8A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=6e68202dffc4ed6bJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=H%c3%a9lio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvSCVDMyVBOWxpbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'li':
            nomeElemento.innerText = "Lítio";
            numeroAtomico.innerText = "3";
            numeroMassa.innerText = "6,94";
            configEletronica.innerText = "1s[2], 2s[1]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=4cdf9637428a2e23JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxNw&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=lITIO+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvTCVDMyVBRHRpbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'be':
            nomeElemento.innerText = "Berílio";
            numeroAtomico.innerText = "4";
            numeroMassa.innerText = "9,0112";
            configEletronica.innerText = "1s[2], 2s[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "2A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=7e8bc3370bb22233JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwNg&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=berilio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQmVyJUMzJUFEbGlv&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'b':
            nomeElemento.innerText = "Boro";
            numeroAtomico.innerText = "5";
            numeroMassa.innerText = "10,811";
            configEletronica.innerText = "1s[2], 2s[2], 2p[1]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "3A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=c898f76e01030339JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwOA&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=boro+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQm9ybw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'c':
            nomeElemento.innerText = "Carbono";
            numeroAtomico.innerText = "6";
            numeroMassa.innerText = "12,011";
            configEletronica.innerText = "1s[2], 2s[2], 2p[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Gasoso";
            familia.innerText = "4A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=01da507d6c35aa18JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=carbono+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQ2FyYm9ubw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'n':
            nomeElemento.innerText = "Nitrogênio";
            numeroAtomico.innerText = "7";
            numeroMassa.innerText = "14,00674";
            configEletronica.innerText = "1s[2], 2s[2], 2p[3]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Gasoso";
            familia.innerText = "5A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=722d4722e24e5d9bJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxNQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=nitrogenio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQXpvdG8&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'o':
            nomeElemento.innerText = "Oxigênio";
            numeroAtomico.innerText = "8";
            numeroMassa.innerText = "15,999";
            configEletronica.innerText = "1s[2], 2s[2], 2p[4]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Gasoso";
            familia.innerText = "6A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=ed902cecc554d449JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTE5Mg&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=oxigenio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvT3hpZyVDMyVBOW5pbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'f':
            nomeElemento.innerText = "Flúor";
            numeroAtomico.innerText = "9";
            numeroMassa.innerText = "18,998403";
            configEletronica.innerText = "1s[2], 2s[2], 2p[5]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Gasoso";
            familia.innerText = "7A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=0748b7075822e782JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwNw&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=fluor+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvRmwlQzMlQkFvcg&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
            case 'ne':
            nomeElemento.innerText = "Neônio";
            numeroAtomico.innerText = "10";
            numeroMassa.innerText = "20,183";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Gasoso";
            familia.innerText = "8A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiFifuN0sWBAxXZrZUCHTthCscQFnoECBMQAQ&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FN%25C3%25A9on&usg=AOvVaw2E1U6FjBhipnuDdwLILQAL&opi=89978449");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'na':
            nomeElemento.innerText = "Sódio";
            numeroAtomico.innerText = "11";
            numeroMassa.innerText = "22,989769";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[1]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=c8c97a8be99fd039JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwNQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=s%c3%b3dio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvUyVDMyVCM2Rpbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'mg':
            nomeElemento.innerText = "Magnésio";
            numeroAtomico.innerText = "12";
            numeroMassa.innerText = "24,305";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "2A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=5b2a0fa7c54eb6bcJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxNg&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=magn%c3%a9sio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvTWFnbiVDMyVBOXNpbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'al':
            nomeElemento.innerText = "Alumínio";
            numeroAtomico.innerText = "13";
            numeroMassa.innerText = "27";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[1]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "3A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=43e7d08373e07916JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=aluminio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQWx1bSVDMyVBRG5pbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'si':
            nomeElemento.innerText = "Silíco";
            numeroAtomico.innerText = "14";
            numeroMassa.innerText = "28";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "4A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=506573d0da6410fbJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxNA&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=silico+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvU2lsJUMzJUFEY2lv&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'p':
            nomeElemento.innerText = "Fósforo";
            numeroAtomico.innerText = "15";
            numeroMassa.innerText = "30,97";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[3]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "5A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=85df677bc4e4d04cJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxMw&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=fosforo+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvRiVDMyVCM3Nmb3Jv&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 's':
            nomeElemento.innerText = "Enxofre";
            numeroAtomico.innerText = "16";
            numeroMassa.innerText = "32,065";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[4]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "6A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=7621938bee6fcc9bJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIyMA&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=enxofre+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvRW54b2ZyZQ&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'cl':
            nomeElemento.innerText = "Cloro";
            numeroAtomico.innerText = "17";
            numeroMassa.innerText = "35,45";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[5]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Gasoso";
            familia.innerText = "7A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=929fe8284e466e8aJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=clorowikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQ2xvcm8&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
            case 'ar':
            nomeElemento.innerText = "Argônio";
            numeroAtomico.innerText = "18";
            numeroMassa.innerText = "39,792";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Gasoso";
            familia.innerText = "8A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi40ab408WBAxWkrpUCHapXBJ0QFnoECBYQAQ&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2F%25C3%2581rgon&usg=AOvVaw2LbRsWgIP8Ws_mn-9j_o9Q&opi=89978449");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'k':
            nomeElemento.innerText = "Potássio";
            numeroAtomico.innerText = "19";
            numeroMassa.innerText = "39,0983";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[1]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=3d0d64081a329c9fJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxNQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=potassio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvUG90JUMzJUExc3Npbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ca':
            nomeElemento.innerText = "Cálcio";
            numeroAtomico.innerText = "20";
            numeroMassa.innerText = "40,078";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "2A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=13a7faf65f724fafJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxOA&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=calcio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQyVDMyVBMWxjaW8&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'sc':
            nomeElemento.innerText = "Escândio";
            numeroAtomico.innerText = "21";
            numeroMassa.innerText = "44,955912";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[1]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "3B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=c2b7cd0e62209922JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwNA&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=escandio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvRXNjw6JuZGlv&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ti':
            nomeElemento.innerText = "Titânio";
            numeroAtomico.innerText = "22";
            numeroMassa.innerText = "47,867";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "4B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=d83703156117234cJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxOQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=titanio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvVGl0JUMzJUEybmlv&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'v':
            nomeElemento.innerText = "Vanádio";
            numeroAtomico.innerText = "23";
            numeroMassa.innerText = "50,9415";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[3]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "5B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=39ac8c699375fc64JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxNQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=vanadio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvVmFuJUMzJUExZGlv&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'cr':
            nomeElemento.innerText = "Cromo";
            numeroAtomico.innerText = "24";
            numeroMassa.innerText = "51,9961";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[5]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "6B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=67c18eae530e709eJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxNw&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=cromo+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQ3JvbW8&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'mn':
            nomeElemento.innerText = "Manganês";
            numeroAtomico.innerText = "25";
            numeroMassa.innerText = "55";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[5]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "7B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=965ed6d319a5ce45JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxMA&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=manganes+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvTWFuZ2FuJUMzJUFBcw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'fe':
            nomeElemento.innerText = "Ferro";
            numeroAtomico.innerText = "26";
            numeroMassa.innerText = "55,845";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[6]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "8B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=d1c084c57a4aa18fJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwNg&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=jferro+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvRmVycm8&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'co':
            nomeElemento.innerText = "Cobalto";
            numeroAtomico.innerText = "27";
            numeroMassa.innerText = "58,93";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[7]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "8B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=2431f1264111065bJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwNQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=cobalto+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQ29iYWx0bw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ni':
            nomeElemento.innerText = "Níquel";
            numeroAtomico.innerText = "28";
            numeroMassa.innerText = "58,6934";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[8]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "8B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=03feb564f8e1d00bJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=niquel+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvTiVDMyVBRHF1ZWw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'cu':
            nomeElemento.innerText = "Cobre";
            numeroAtomico.innerText = "29";
            numeroMassa.innerText = "63,54";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[9]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=706710f1e3797051JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwOQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=cobre+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQ29icmU&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'zn':
            nomeElemento.innerText = "Zinco";
            numeroAtomico.innerText = "30";
            numeroMassa.innerText = "65,4";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "2B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=51c7529c83f4786fJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxMg&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=zinco+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvWmluY28&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ga':
            nomeElemento.innerText = "Gálio";
            numeroAtomico.innerText = "31";
            numeroMassa.innerText = "69,7";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[1]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Líquido";
            familia.innerText = "3A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=13baade3ca91b74aJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxNg&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=galio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvRyVDMyVBMWxpbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ge':
            nomeElemento.innerText = "Germânio";
            numeroAtomico.innerText = "32";
            numeroMassa.innerText = "72,64";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "4A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=f063b1695c989070JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxNQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=germanio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvR2VybSVDMyVBMm5pbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'as':
            nomeElemento.innerText = "Arsênio";
            numeroAtomico.innerText = "33";
            numeroMassa.innerText = "74,9216";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[3]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "5A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=1ee491d7d04d43a9JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIyMg&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=arsenio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQXJzJUMzJUFBbmlv&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'se':
            nomeElemento.innerText = "Selênio";
            numeroAtomico.innerText = "34";
            numeroMassa.innerText = "78";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[4]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "6A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=a30f84646b499dd1JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwNQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=selenio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvU2VsJUMzJUFBbmlv&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'br':
            nomeElemento.innerText = "Bromo";
            numeroAtomico.innerText = "35";
            numeroMassa.innerText = "79,9";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[5]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Líquido";
            familia.innerText = "7A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=e3b6fc8d8002a486JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxMw&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=bromo+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQnJvbW8&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
            case 'kr':
            nomeElemento.innerText = "criptônio";
            numeroAtomico.innerText = "36";
            numeroMassa.innerText = "83,798";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Gasoso";
            familia.innerText = "8A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiQ57-q1cWBAxWOR7gEHd8oAG4QFnoECBEQAQ&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FCr%25C3%25ADpton&usg=AOvVaw1qS0SUIoxJkxH5L_HvRrx6&opi=89978449");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'rb':
            nomeElemento.innerText = "Rubídio";
            numeroAtomico.innerText = "37";
            numeroMassa.innerText = "85,4678";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[1]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=107fc4edcf82de75JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwNA&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=rubidio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvUnViJUMzJUFEZGlv&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'sr':
            nomeElemento.innerText = "Estrôncio";
            numeroAtomico.innerText = "38";
            numeroMassa.innerText = "87,62";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "2A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=dbbb6e684ebfb188JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxMw&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=estroncio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvRXN0ciVDMyVCNG5jaW8&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'y':
            nomeElemento.innerText = "Ítrio";
            numeroAtomico.innerText = "39";
            numeroMassa.innerText = "88,90585";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[1]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "3B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=96c652ef55c8471fJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwOQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=itrio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvJUMzJThEdHJpbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'zr':
            nomeElemento.innerText = "Zircônio";
            numeroAtomico.innerText = "40";
            numeroMassa.innerText = "91,224";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "4B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=70272947ba4cd841JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxMw&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=zirconio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvWmlyYyVDMyVCNG5pbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'nb':
            nomeElemento.innerText = "Nióbio";
            numeroAtomico.innerText = "41";
            numeroMassa.innerText = "92,9";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[3]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "5A";
            vejaMais('href', "https://www.bing.com/ck/a?!&&p=50a7ed8b988bdbf2JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTE5OQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=niobio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvTmklQzMlQjNiaW8&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'mo':
            nomeElemento.innerText = "Molibdênio";
            numeroAtomico.innerText = "42";
            numeroMassa.innerText = "95,95";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[4]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "6B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=58206dbe9bbb0e6eJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxNA&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=molibdenio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvTW9saWJkJUMzJUFBbmlv&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'tc':
            nomeElemento.innerText = "Tecnécio";
            numeroAtomico.innerText = "43";
            numeroMassa.innerText = "98";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[5]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "7B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=3686c7dcf73f0209JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwNg&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=tecn%c3%a9cio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvVGVjbiVDMyVBOWNpbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ru':
            nomeElemento.innerText = "Rutênio";
            numeroAtomico.innerText = "44";
            numeroMassa.innerText = "101,07";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[1], 4d[7]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "8B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=8725c6e3daa2183eJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTQ5NA&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=rutenio+wikipideA&u=a1aHR0cHM6Ly9nbC53aWtpcGVkaWEub3JnL3dpa2kvUnV0ZW5pbyM6fjp0ZXh0PU8lMjBydXRlbmlvJTIwJUMzJUE5JTIwdW4lMjBlbGVtZW50byUyMHF1JUMzJUFEbWljbyUyMGRlJTIwbiVDMyVCQW1lcm8sZSUyMGVtcHIlQzMlQTlnYXNlJTIwY29tbyUyMGNhdGFsaXphZG9yJTIwbmFsZ3VuaGFzJTIwYWxpYXhlcyUyMGRlJTIwcGxhdGluby4&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'rh':
            nomeElemento.innerText = "Ródio";
            numeroAtomico.innerText = "45";
            numeroMassa.innerText = "102,9055";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[1], 4d[8]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "8B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=ff5fc51187fb53d7JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwMw&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=rodio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvUiVDMyVCM2Rpbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'pd':
            nomeElemento.innerText = "Paládio";
            numeroAtomico.innerText = "46";
            numeroMassa.innerText = "106,42";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[1], 4d[9]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "8B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=7ae1aea1a6fee582JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxMA&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=paladio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvUGFsJUMzJUExZGlv&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ag':
            nomeElemento.innerText = "Prata";
            numeroAtomico.innerText = "47";
            numeroMassa.innerText = "107,87";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[1], 4d[10]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=2d42fd44f0fddc4bJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIyMQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=prata+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvUHJhdGE&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'cd':
            nomeElemento.innerText = "Cádmio";
            numeroAtomico.innerText = "48";
            numeroMassa.innerText = "112,411";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "2B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=8c97c1d816f8287aJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxMg&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=cadmio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQyVDMyVBMWRtaW8&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'in':
            nomeElemento.innerText = "Índio";
            numeroAtomico.innerText = "49";
            numeroMassa.innerText = "114,8";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[1]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "3A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=4d919d0ad2705788JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTI2MA&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=Indio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvJUMzJThEbmRpb18oZWxlbWVudG9fcXUlQzMlQURtaWNvKQ&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'sn':
            nomeElemento.innerText = "Estanho";
            numeroAtomico.innerText = "50";
            numeroMassa.innerText = "118,71";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "4A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=53ed3dae02ed613eJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwNw&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=estanho+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvRXN0YW5obw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'sb':
            nomeElemento.innerText = "Antimônio";
            numeroAtomico.innerText = "51";
            numeroMassa.innerText = "121,76";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[3]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "5A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=95502e6e5ad6b3c8JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwMQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=antimonio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQW50aW0lQzMlQjRuaW8&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'te':
            nomeElemento.innerText = "Telúrio";
            numeroAtomico.innerText = "52";
            numeroMassa.innerText = "127,6";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[4]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "6A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=aba0e5c2b79f1e5cJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTQ5MA&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=telurio+wikipideA&u=a1aHR0cHM6Ly9nbC53aWtpcGVkaWEub3JnL3dpa2kvVGVsdXJpbyM6fjp0ZXh0PU8lMjB0ZWx1cmlvJTIwJUMzJUE5JTIwdW4lMjBlbGVtZW50byUyMHJlbGF0aXZhbWVudGUlMjByYXJvJTJDJTIwcGVydGVuY2UsJUMzJTg5JTIwdW4lMjBzZW1pbWV0YWwlMjAlMjhtZXRhbG9pZGUlMjklMkMlMjBmciVDMyVBMXhpbCUyMGUlMjBmYWNpbG1lbnRlJTIwcHVsdmVyaXphYmxlLg&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'i':
            nomeElemento.innerText = "Iodo";
            numeroAtomico.innerText = "53";
            numeroMassa.innerText = "126,90447";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[5]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "7A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=b5028a5ffe517dbcJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxNA&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=iodo+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvSW9kbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
            case 'xe':
            nomeElemento.innerText = "Xenônio";
            numeroAtomico.innerText = "54";
            numeroMassa.innerText = "131,29";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Gasoso";
            familia.innerText = "8A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjDlbDJ1sWBAxWPpJUCHVd9CAEQFnoECBEQAQ&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FXen%25C3%25B4nio&usg=AOvVaw0ZYdPWN4jOHP0f-yoCFYYm&opi=89978449");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'cs':
            nomeElemento.innerText = "Césio";
            numeroAtomico.innerText = "55";
            numeroMassa.innerText = "132,90545";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[1]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Líquido";
            familia.innerText = "1A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=3878b22ad616f02dJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxNQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=cesio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQyVDMyVBOXNpbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ba':
            nomeElemento.innerText = "Bário";
            numeroAtomico.innerText = "56";
            numeroMassa.innerText = "137,327";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "2A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('', "https://www.bing.com/ck/a?!&&p=74010c8a51b02d22JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwOQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=bario+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQiVDMyVBMXJpbw&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'hf':
            nomeElemento.innerText = "Háfnio";
            numeroAtomico.innerText = "72";
            numeroMassa.innerText = "178,5";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 4f[14]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "4B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=f081156637c16cc9JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxNQ&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=hafnio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvSCVDMyVBMWZuaW8&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ta':
            nomeElemento.innerText = "Tântalo";
            numeroAtomico.innerText = "73";
            numeroMassa.innerText = "180,94788";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[3], 4f[14]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "5B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=28abc50c3132be55JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIwMw&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=tantalo+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvVCVDMyVBMm50YWxv&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'w':
            nomeElemento.innerText = "Tungstênio";
            numeroAtomico.innerText = "74";
            numeroMassa.innerText = "183,84";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[4], 4f[14]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "6B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', "https://www.bing.com/ck/a?!&&p=6f023c3b0d07dd80JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMGM0MGI2ZC1lNWM0LTZiNjctM2JjYi0xODMyZTQyNjZhMzAmaW5zaWQ9NTIxMA&ptn=3&hsh=3&fclid=00c40b6d-e5c4-6b67-3bcb-1832e4266a30&psq=tungstenio+wikipideA&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvVHVuZ3N0JUMzJUFBbmlv&ntb=1");
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 're':
            nomeElemento.innerText = "Rênio";
            numeroAtomico.innerText = "75";
            numeroMassa.innerText = "186,207";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[5], 4f[14]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "7B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=677b9ad5a0e8ac82JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zY2E1ZTQ2Ny0zYzFkLTZjODEtMjcyYS1mN2Y0M2Q2ODZkYjgmaW5zaWQ9NTUxOA&ptn=3&hsh=3&fclid=3ca5e467-3c1d-6c81-272a-f7f43d686db8&psq=renio+wikipedia&u=a1aHR0cHM6Ly9nbC53aWtpcGVkaWEub3JnL3dpa2kvUmVuaW8jOn46dGV4dD1PJTIwcmVuaW8lMjAlQzMlQTklMjB1biUyMGVsZW1lbnRvJTIwcXUlQzMlQURtaWNvJTIwZGUlMjBuJUMzJUJBbWVybyxvJTIwJUMzJUJBbHRpbW8lMjBlbGVtZW50byUyMHF1ZSUyMHNlJTIwYXRvcG91JTIwbmElMjBuYXR1cmV6YS4&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'os':
            nomeElemento.innerText = "Ósmio";
            numeroAtomico.innerText = "76";
            numeroMassa.innerText = "190,23";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[6], 4f[14]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "8B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=e46bbc0d8046a5daJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0yZjcwYmNhNS01Y2I0LTY3NjMtMTBlMS1hZjM2NWQzNTY2YjAmaW5zaWQ9NTQ3Mg&ptn=3&hsh=3&fclid=2f70bca5-5cb4-6763-10e1-af365d3566b0&psq=osmio+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvJUMzJTkzc21pbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ir':
            nomeElemento.innerText = "Irídio";
            numeroAtomico.innerText = "77";
            numeroMassa.innerText = "192,2";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[7], 4f[14]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "8B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=75c18460456786f2JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0yZjQ5ZjZiMS1mZmYzLTZlZjAtMmU3Mi1lNTIyZmVhODZmNWUmaW5zaWQ9NTIxNw&ptn=3&hsh=3&fclid=2f49f6b1-fff3-6ef0-2e72-e522fea86f5e&psq=iridio+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvSXIlQzMlQURkaW8&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'pt':
            nomeElemento.innerText = "Platina";
            numeroAtomico.innerText = "78";
            numeroMassa.innerText = "195,08";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[9], 4f[14]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "8B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=d7f628d37fbc2787JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0xMTM3ZDc5My0xMDE5LTYyNGItMzgzMi1jNDAwMTFlYzYzMTgmaW5zaWQ9NTk3Ng&ptn=3&hsh=3&fclid=1137d793-1019-624b-3832-c40011ec6318&psq=platina+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvUGxhdGluYQ&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'au':
            nomeElemento.innerText = "Ouro";
            numeroAtomico.innerText = "79";
            numeroMassa.innerText = "179";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=a322ce14ec182323JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0yNjUxMDJlNi1mZjVmLTYyOGUtMjg5NC0xMTc1ZmU3NjYzZGYmaW5zaWQ9NTIxNQ&ptn=3&hsh=3&fclid=265102e6-ff5f-628e-2894-1175fe7663df&psq=ouro+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvT3Vybw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'hg':
            nomeElemento.innerText = "Mercúrio";
            numeroAtomico.innerText = "80";
            numeroMassa.innerText = "200,5";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Líquido";
            familia.innerText = "2B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=f73531b2233ba703JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0yNjg5ZTc3Ny1jZGRiLTY5YTYtMTI5NS1mNGU0Y2M1MDY4ZTEmaW5zaWQ9NTUwOQ&ptn=3&hsh=3&fclid=2689e777-cddb-69a6-1295-f4e4cc5068e1&psq=mercuruio+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvTWVyYyVDMyVCQXJpb18oZWxlbWVudG9fcXUlQzMlQURtaWNvKSM6fjp0ZXh0PU1lcmMlQzMlQkFyaW8lMjAlQzMlQTklMjB1bSUyMG1ldGFsJTIwbCVDMyVBRHF1aWRvJTIwJUMzJUEwJTIwdGVtcGVyYXR1cmElMjBhbWJpZW50ZSUyQyxFc3NhJTIwaG9tZW5hZ2VtJTIwJUMzJUE5JTIwZGV2aWRhJTIwJUMzJUEwJTIwZmx1aWRleiUyMGRvJTIwbWV0YWwu&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'tl':
            nomeElemento.innerText = "Tálio";
            numeroAtomico.innerText = "81";
            numeroMassa.innerText = "204,4";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[1]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "3A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=a0d5fabc22a0106dJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zZDkxOTNjMC00OTEyLTZmYjUtMTkwNi04MDUzNDg2ODZlYzgmaW5zaWQ9NTIxMw&ptn=3&hsh=3&fclid=3d9193c0-4912-6fb5-1906-805348686ec8&psq=talio+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvVCVDMyVBMWxpbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'pb':
            nomeElemento.innerText = "Chumbo";
            numeroAtomico.innerText = "82";
            numeroMassa.innerText = "207,2";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "4A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=b934d15ba28ffd92JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0xZDczMTI2ZC1hYTY5LTZlNDEtMjJhOC0wMWZlYWJiMjZmMmYmaW5zaWQ9NTIxMw&ptn=3&hsh=3&fclid=1d73126d-aa69-6e41-22a8-01feabb26f2f&psq=chumbo+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQ2h1bWJv&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'bi':
            nomeElemento.innerText = "Bismuto";
            numeroAtomico.innerText = "83";
            numeroMassa.innerText = "208,9";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[3]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "5A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=10beea339cf0d836JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zOTRlNTkzMS0xMDQ5LTY5NjQtMjI1Ni00YWEyMTEyNTY4MWEmaW5zaWQ9NTIwOQ&ptn=3&hsh=3&fclid=394e5931-1049-6964-2256-4aa21125681a&psq=bismuto+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQmlzbXV0bw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'po':
            nomeElemento.innerText = "Polônio";
            numeroAtomico.innerText = "84";
            numeroMassa.innerText = "209";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[4]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "6A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=bd70f3d723bab1efJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zZGEyNGZkYi01YzhmLTY0NTYtMTMxOS01YzQ4NWQ2ZDY1NzcmaW5zaWQ9NTUzMg&ptn=3&hsh=3&fclid=3da24fdb-5c8f-6456-1319-5c485d6d6577&psq=polonio+wikipedia&u=a1aHR0cHM6Ly9nbC53aWtpcGVkaWEub3JnL3dpa2kvUG9sb25pbyM6fjp0ZXh0PU8lMjBwb2xvbmlvJTIwJUMzJUE5JTIwdW4lMjBlbGVtZW50byUyMGRhJTIwdCVDMyVBMWJvYSUyMHBlcmklQzMlQjNkaWNhLG1hcmlkbyUyMEZyJUMzJUE5ZCVDMyVBOXJpYyUyMEpvbGlvdCUyMGZvcm9uJTIwZ2FsYXJkb2Fkb3MlMjBjJUMzJUIzJTIwUHJlbWlvJTIwTm9iZWwu&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'at':
            nomeElemento.innerText = "Ástato";
            numeroAtomico.innerText = "85";
            numeroMassa.innerText = "209,9871";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[5]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "7A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=e9c3de964450c103JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zZWJmYmEwMS0wNGVhLTZlYzQtMTQzYS1hOTkyMDU5NDZmNjkmaW5zaWQ9NTUxMA&ptn=3&hsh=3&fclid=3ebfba01-04ea-6ec4-143a-a99205946f69&psq=astato+wikipedia&u=a1aHR0cHM6Ly9nbC53aWtpcGVkaWEub3JnL3dpa2kvJUMzJTgxc3RhdG8jOn46dGV4dD0lQzMlODFzdGF0byUyMC0lMjBXaWtpcGVkaWElMkMlMjBhJTIwZW5jaWNsb3BlZGlhJTIwbGlicmUlMjAlQzMlODFzdGF0byUyME8sYSUyMHBhcnRpciUyMGRhJTIwZGVncmFkYWNpJUMzJUIzbiUyMGRlJTIwdXJhbmlvJTIwZSUyMHRvcmlvLg&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'rn':
            nomeElemento.innerText = "Radônio";
            numeroAtomico.innerText = "86";
            numeroMassa.innerText = "222";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Gasoso";
            familia.innerText = "8A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=131e5669c1bddfceJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zMWU0Y2FkYi01MjFjLTYwYWYtMTExNi1kOTQ4NTMwNDYxYTYmaW5zaWQ9NTgyNQ&ptn=3&hsh=3&fclid=31e4cadb-521c-60af-1116-d948530461a6&psq=radonio+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvUiVDMyVBMWRvbg&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'fr':
            nomeElemento.innerText = "Frâncio";
            numeroAtomico.innerText = "87";
            numeroMassa.innerText = "223";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[1]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=c48cba5a216321c0JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wNDNlMTBhZC0zMzBiLTYwMTYtMzQ4Zi0wMzNlMzI4ZTYxZDcmaW5zaWQ9NTQ2OA&ptn=3&hsh=3&fclid=043e10ad-330b-6016-348f-033e328e61d7&psq=francio+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvRnIlQzMlQTJuY2lv&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ra':
            nomeElemento.innerText = "Rádio";
            numeroAtomico.innerText = "88";
            numeroMassa.innerText = "226";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "2A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=f70577ebdd78fbfbJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0yYWExYjEwOS1jOWNlLTY5YjAtM2RiNy1hMjlhYzgwMTY4NjkmaW5zaWQ9NjA4Ng&ptn=3&hsh=3&fclid=2aa1b109-c9ce-69b0-3db7-a29ac8016869&psq=radio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvUiVDMyVBMWRpb18oZWxlbWVudG9fcXUlQzMlQURtaWNvKQ&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'rf':
            nomeElemento.innerText = "Rutherfórdio";
            numeroAtomico.innerText = "104";
            numeroMassa.innerText = "267";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[2], 5f[14]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "4B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=3c17ca58a06000cfJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0xN2RjMzBhOC0xYWI4LTZhNWEtMDYyMS0yMzNiMWI5MDZiNjUmaW5zaWQ9NTgzNw&ptn=3&hsh=3&fclid=17dc30a8-1ab8-6a5a-0621-233b1b906b65&psq=rutherfordio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvUnV0aGVyZiVDMyVCM3JkaW8&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'db':
            nomeElemento.innerText = "Dúbnio";
            numeroAtomico.innerText = "105";
            numeroMassa.innerText = "262";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[3], 5f[14]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "5B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=55c4e300ab3ad390JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0yYTNiMGZkYi03MTVkLTY2ZDUtMGQ4Yy0xYzQ4NzA1MzY3MzkmaW5zaWQ9NTg4MQ&ptn=3&hsh=3&fclid=2a3b0fdb-715d-66d5-0d8c-1c4870536739&psq=dubniop+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvRCVDMyVCQWJuaW8&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'sg':
            nomeElemento.innerText = "Seabórgio";
            numeroAtomico.innerText = "106";
            numeroMassa.innerText = "269";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[4], 5f[14]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "6B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=7e3d386b1110be40JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0yYWI5YTIxYS1kMThjLTY4MDktMmU4Yy1iMTg5ZDBlZDY5YTYmaW5zaWQ9NTg3Nw&ptn=3&hsh=3&fclid=2ab9a21a-d18c-6809-2e8c-b189d0ed69a6&psq=seaborgio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvU2VhYiVDMyVCM3JnaW8&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'bh':
            nomeElemento.innerText = "Bóhrio";
            numeroAtomico.innerText = "107";
            numeroMassa.innerText = "264";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[5], 5f[14]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "7B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=50d0148730c6684aJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zNzU1NWUxZS01YWE0LTYzNWQtMGFhMy00ZDhkNWI3YjYyZGQmaW5zaWQ9NTg3NA&ptn=3&hsh=3&fclid=37555e1e-5aa4-635d-0aa3-4d8d5b7b62dd&psq=bohrio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQiVDMyVCM2hyaW8&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'hs':
            nomeElemento.innerText = "Hássio";
            numeroAtomico.innerText = "108";
            numeroMassa.innerText = "265";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[6], 5f[14]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "8B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=32dd61d6a1ce7a93JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wNmY2YTVkMy1jZDQ1LTY3MmEtMDg5MC1iNjQwY2MyNjY2YmMmaW5zaWQ9NTg5OA&ptn=3&hsh=3&fclid=06f6a5d3-cd45-672a-0890-b640cc2666bc&psq=hassio%5d+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvSCVDMyVBMXNzaW8&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'mt':
            nomeElemento.innerText = "Meitnério";
            numeroAtomico.innerText = "109";
            numeroMassa.innerText = "278";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[7], 5f[14]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "8B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=e6dda4c8e78affceJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0yYjE4ZjNmYy0wYjMwLTYyZGItMzFlMy1lMDZmMGE0NTYzMDcmaW5zaWQ9NTc1MQ&ptn=3&hsh=3&fclid=2b18f3fc-0b30-62db-31e3-e06f0a456307&psq=meitnerio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvTWVpdG4lQzMlQTlyaW8&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ds':
            nomeElemento.innerText = "Darmstádtio";
            numeroAtomico.innerText = "110";
            numeroMassa.innerText = "281";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[1], 6d[9], 5f[14]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "8B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=7404521d03a1d246JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0xMmMxZDdhNS1lOTNkLTY1NzctMzk4Yy1jNDM2ZTg1YTY0YWYmaW5zaWQ9NTg0MQ&ptn=3&hsh=3&fclid=12c1d7a5-e93d-6577-398c-c436e85a64af&psq=darmstadio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvRGFybXN0JUMzJUExZHRpbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'rg':
            nomeElemento.innerText = "Roentgénio";
            numeroAtomico.innerText = "111";
            numeroMassa.innerText = "282";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[1], 6d[10], 5f[14]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "9B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=e8e1f94e383c33ceJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zMWZmNjkzMC0zZTM1LTY3YzEtMmMxZi03YWEzM2ZiNDY2NGImaW5zaWQ9NTIxNw&ptn=3&hsh=3&fclid=31ff6930-3e35-67c1-2c1f-7aa33fb4664b&psq=roentgenio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvUm9lbnRnJUMzJUFBbmlv&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'cn':
            nomeElemento.innerText = "Copernício";
            numeroAtomico.innerText = "112";
            numeroMassa.innerText = "285";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[10], 5f[14]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "10B"
            vejaMais.style.visibility = 'visible';;
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=fbbfebc8a7947cf4JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wYzFlYTZhYS0zYmJmLTY0YWUtMmVkMy1iNTM5M2FlOTY1ZGQmaW5zaWQ9NTIwOQ&ptn=3&hsh=3&fclid=0c1ea6aa-3bbf-64ae-2ed3-b5393ae965dd&psq=copernicio%5d+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQ29wZXJuJUMzJUFEY2lv&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'nh':
            nomeElemento.innerText = "Nihônio";
            numeroAtomico.innerText = "113";
            numeroMassa.innerText = "286";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[10], 5f[14], 7p[1]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "3A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=085c7cf22661eae1JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zYWJkMjIzNC1iMTJkLTZlMmUtMzczYi0zMWE3YjAwZTZmMGImaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=3abd2234-b12d-6e2e-373b-31a7b00e6f0b&psq=nihonio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvTmlob25pdW0&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'fl':
            nomeElemento.innerText = "Fleróvio";
            numeroAtomico.innerText = "114";
            numeroMassa.innerText = "289";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[10], 5f[14], 7p[2]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "4A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=1c8e98012654929eJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMTRkNWNlNi0wZGRkLTYwMTQtMDZhMS00Zjc1MGMwNjYxNzAmaW5zaWQ9NTIxNA&ptn=3&hsh=3&fclid=014d5ce6-0ddd-6014-06a1-4f750c066170&psq=flerovio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvRmxlciVDMyVCM3Zpbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'mc':
            nomeElemento.innerText = "Moscóvio";
            numeroAtomico.innerText = "115";
            numeroMassa.innerText = "289";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[10], 5f[14], 7p[3]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "5A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=d70b4974913326a4JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wMjM1NjY4Mi0xN2NmLTY1NzQtMDFlOS03NTExMTY0NjY0OWEmaW5zaWQ9NTUxNQ&ptn=3&hsh=3&fclid=02356682-17cf-6574-01e9-75111646649a&psq=moscovio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9lcy53aWtpcGVkaWEub3JnL3dpa2kvTW9zY292aW8jOn46dGV4dD1Nb3Njb3Zpby4lMjBwbS4lMjAlMjglMjBhbnRlcmlvcm1lbnRlJTIwbGxhbWFkbyUyMHVudW1wZW50aW8lMkMlMjBVdXAlMjBvLHF1ZSUyMGNvbnRpZW5lJTIwZWwlMjBuJUMzJUJBbWVybyUyMG0lQzMlQTFnaWNvJTIwZGUlMjAxODQlMjBuZXV0cm9uZXMu&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'lv':
            nomeElemento.innerText = "Livermório";
            numeroAtomico.innerText = "116";
            numeroMassa.innerText = "293";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[10], 5f[14], 7p[4]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "6A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=4cfb3ec0079d65c9JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0xYjFkYjRmOC1iZDk0LTY2ZjEtMTNiYS1hNzZiYmNlMTY3YTkmaW5zaWQ9NTIwOA&ptn=3&hsh=3&fclid=1b1db4f8-bd94-66f1-13ba-a76bbce167a9&psq=livermorio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvTGl2ZXJtJUMzJUIzcmlv&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ts':
            nomeElemento.innerText = "Tenesso";
            numeroAtomico.innerText = "117";
            numeroMassa.innerText = "294";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[10], 5f[14], 7p[5]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "7A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=0afbfebbbd8e69c4JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0xOGM0Mzc5ZS00ZTMxLTYzYWQtMDU2ZC0yNDBkNGY0NDYyOGUmaW5zaWQ9NTUxOA&ptn=3&hsh=3&fclid=18c4379e-4e31-63ad-056d-240d4f44628e&psq=tenesso+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvVGVuZXNzbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'og':
            nomeElemento.innerText = "Oganessônio";
            numeroAtomico.innerText = "118";
            numeroMassa.innerText = "294";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[10], 5f[14], 7p[6]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Gasoso";
            familia.innerText = "8A";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=cdc6b73baa137443JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wOTI3ZjA0Yi1jYWM5LTY2YmEtMzE4NS1lM2Q4Y2IzNTY3MjYmaW5zaWQ9NTUxMA&ptn=3&hsh=3&fclid=0927f04b-cac9-66ba-3185-e3d8cb356726&psq=oganessonio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvT2dhbmVzc29u&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'la':
            nomeElemento.innerText = "Lantânio";
            numeroAtomico.innerText = "57";
            numeroMassa.innerText = "138,90547";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[1]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=08433ec27c845792JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0xNTMzMmRlZi04YzNjLTZlMWUtMWE1MS0zZTdjOGQ4NjZmOTUmaW5zaWQ9NTIxMA&ptn=3&hsh=3&fclid=15332def-8c3c-6e1e-1a51-3e7c8d866f95&psq=lantanio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvTGFudCVDMyVBMm5pbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ce':
            nomeElemento.innerText = "Cério";
            numeroAtomico.innerText = "58";
            numeroMassa.innerText = "140,116";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 4f[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=8e6cdf6548e50c1dJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0yYWM2ZDUyMS1kYjdhLTYxMjYtM2ZhNS1jNmIyZGFhZTYwOTAmaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=2ac6d521-db7a-6126-3fa5-c6b2daae6090&psq=cerio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQyVDMyVBOXJpbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'pr':
            nomeElemento.innerText = "Praseodímio";
            numeroAtomico.innerText = "59";
            numeroMassa.innerText = "140,90765";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 4f[3]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=0ea0d78e1a7e2b14JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0yMjUyZTQzOS0wYTA1LTY3Y2EtMTAzNi1mN2FhMGJmMzY2Y2YmaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=2252e439-0a05-67ca-1036-f7aa0bf366cf&psq=prassedimio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvUHJhc2VvZCVDMyVBRG1pbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'nd':
            nomeElemento.innerText = "Neodímio";
            numeroAtomico.innerText = "60";
            numeroMassa.innerText = "144,242";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 4f[4]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=497003c29fc86189JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zNmNlN2U1Ni0zNTdlLTYzYjAtMjYyOC02ZGM1MzRjMjYyNDgmaW5zaWQ9NTIxNg&ptn=3&hsh=3&fclid=36ce7e56-357e-63b0-2628-6dc534c26248&psq=neodimio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvTmVvZCVDMyVBRG1pbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'pm':
            nomeElemento.innerText = "Promécio";
            numeroAtomico.innerText = "61";
            numeroMassa.innerText = "145";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 4f[5]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=dd4d0da057739f53JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wY2I4MGE3OS04MThiLTZmMzAtMjM0ZC0xOWVhODAyMzZlNTYmaW5zaWQ9NTUyMA&ptn=3&hsh=3&fclid=0cb80a79-818b-6f30-234d-19ea80236e56&psq=promecio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvUHJvbSVDMyVBOWNpbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'sm':
            nomeElemento.innerText = "Samário";
            numeroAtomico.innerText = "62";
            numeroMassa.innerText = "150,36";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 4f[6]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=49adcfbbad6d6c0aJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zMTg2NmQ3YS02YjQwLTZkMzktM2UxMy03ZWU5NmFkOTZjZWQmaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=31866d7a-6b40-6d39-3e13-7ee96ad96ced&psq=samario+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvU2FtJUMzJUExcmlv&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'eu':
            nomeElemento.innerText = "Európio";
            numeroAtomico.innerText = "63";
            numeroMassa.innerText = "152";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 4f[7]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=49adcfbbad6d6c0aJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zMTg2NmQ3YS02YjQwLTZkMzktM2UxMy03ZWU5NmFkOTZjZWQmaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=31866d7a-6b40-6d39-3e13-7ee96ad96ced&psq=samario+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvU2FtJUMzJUExcmlv&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'gd':
            nomeElemento.innerText = "Gadolínio";
            numeroAtomico.innerText = "64";
            numeroMassa.innerText = "157,25";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[1], 4f[7]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=2d96cc083c0711d3JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0xODliNGVkOC1jZTdjLTY1ZjctMmVmZS01ZDRiY2Y5NTY0NWMmaW5zaWQ9NTIxNA&ptn=3&hsh=3&fclid=189b4ed8-ce7c-65f7-2efe-5d4bcf95645c&psq=gadolinio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvR2Fkb2wlQzMlQURuaW8&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'tb':
            nomeElemento.innerText = "Térbio";
            numeroAtomico.innerText = "65";
            numeroMassa.innerText = "158,9";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 4f[9]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=8af31bb29a710fe2JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zYjA1NjczNC00NjFmLTY0NmItMDYwNC03NGE3NDc5NjY1MTUmaW5zaWQ9NTIwOQ&ptn=3&hsh=3&fclid=3b056734-461f-646b-0604-74a747966515&psq=terbio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvVCVDMyVBOXJiaW8&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'dy':
            nomeElemento.innerText = "Disprósio";
            numeroAtomico.innerText = "66";
            numeroMassa.innerText = "162,5";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 4f[10]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=2cad70b89b10ef1cJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wOTA4ZjlhMy02M2M5LTY5NzAtMDk4OC1lYTMwNjIwYjY4ZWMmaW5zaWQ9NTIwOA&ptn=3&hsh=3&fclid=0908f9a3-63c9-6970-0988-ea30620b68ec&psq=dispr%c3%b3sioelemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvRGlzcHIlQzMlQjNzaW8&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ho':
            nomeElemento.innerText = "Hólmio";
            numeroAtomico.innerText = "67";
            numeroMassa.innerText = "164,93";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 4f[11]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=0bb3afbdd1cbc8a0JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wZjZmYmQzNi1lZTkzLTZkOWMtMDdjNy1hZWE1ZWYwYTZjNzAmaW5zaWQ9NTIxMw&ptn=3&hsh=3&fclid=0f6fbd36-ee93-6d9c-07c7-aea5ef0a6c70&psq=holmio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvSCVDMyVCM2xtaW8&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'er':
            nomeElemento.innerText = "Érbio";
            numeroAtomico.innerText = "68";
            numeroMassa.innerText = "167,2";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 4f[12]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=35f6107eb57e9e01JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zZWExNmY2NS1hZTViLTZiNzEtMTI3ZC03Y2Y2YWY4ZjZhNmQmaW5zaWQ9NTIxOA&ptn=3&hsh=3&fclid=3ea16f65-ae5b-6b71-127d-7cf6af8f6a6d&psq=erbio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvJUMzJTg5cmJpbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'tm':
            nomeElemento.innerText = "Túlio";
            numeroAtomico.innerText = "69";
            numeroMassa.innerText = "168,9";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 4f[13]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=6cd076451be2fe38JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0xYmUzNWVjNC02OGEwLTY1NzQtMTljNS00ZDU3Njk5NjY0NzMmaW5zaWQ9NTIwOA&ptn=3&hsh=3&fclid=1be35ec4-68a0-6574-19c5-4d5769966473&psq=tulio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvVCVDMyVCQWxpbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'yb':
            nomeElemento.innerText = "Itérbio";
            numeroAtomico.innerText = "70";
            numeroMassa.innerText = "173,04";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 4f[14]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=ace459983d0cea02JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zYTdjMDJiYi1lNWM2LTZmMjQtMjU1NS0xMTI4ZTQ2OTZlNzQmaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=3a7c02bb-e5c6-6f24-2555-1128e4696e74&psq=iterbio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvSXQlQzMlQTlyYmlv&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'lu':
            nomeElemento.innerText = "Lutécio";
            numeroAtomico.innerText = "71";
            numeroMassa.innerText = "175";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[1], 4f[14]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=4a48a50323a73343JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0wYjE2ZWQ0Yy03Y2E2LTY1NGMtMzI5Ny1mZWRmN2QxYjY0MDAmaW5zaWQ9NTIwNw&ptn=3&hsh=3&fclid=0b16ed4c-7ca6-654c-3297-fedf7d1b6400&psq=lutecio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvTHV0JUMzJUE5Y2lv&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'ac':
            nomeElemento.innerText = "Actínio";
            numeroAtomico.innerText = "89";
            numeroMassa.innerText = "227";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[1]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=5e220756527cf616JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0xNzQ2ZDRmMC1hMDA3LTY2ZDctMmY4My1jNzYzYTFkZTY3NTQmaW5zaWQ9NTIxMA&ptn=3&hsh=3&fclid=1746d4f0-a007-66d7-2f83-c763a1de6754&psq=actinio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQWN0JUMzJUFEbmlv&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'th':
            nomeElemento.innerText = "Tório";
            numeroAtomico.innerText = "90";
            numeroMassa.innerText = "232";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=f8c9c3ab8831a49bJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0yMTcyOTQyZi1kYWY0LTY2NWMtMDc4ZS04N2JjZGIzYjY3MjMmaW5zaWQ9NTIxMg&ptn=3&hsh=3&fclid=2172942f-daf4-665c-078e-87bcdb3b6723&psq=torip+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvVCVDMyVCM3Jpbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'pa':
            nomeElemento.innerText = "Protactínio";
            numeroAtomico.innerText = "91";
            numeroMassa.innerText = "231,03588";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[1], 5f[2]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=8ee36491b47106f9JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zNDY5MWIzZi1iOGZhLTYyYWMtM2I5OC0wOGFjYjk3YjYzNGMmaW5zaWQ9NTIxMw&ptn=3&hsh=3&fclid=34691b3f-b8fa-62ac-3b98-08acb97b634c&psq=PROTACTINIO+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvUHJvdGFjdCVDMyVBRG5pbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'u':
            nomeElemento.innerText = "Urânio";
            numeroAtomico.innerText = "92";
            numeroMassa.innerText = "238,0289";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[1], 5f[3]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            if (visivel == false) {

                vejaMais.style.visibility = 'visible'; vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=d50d2266d8965611JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zNmI2N2M4YS1lNjRmLTY0MmYtM2FjYi02ZjE5ZTdjZTY1NDMmaW5zaWQ9NTIxMQ&ptn=3&hsh=3&fclid=36b67c8a-e64f-642f-3acb-6f19e7ce6543&psq=uranio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvVXIlQzMlQTJuaW8&ntb=1');
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'np':
            nomeElemento.innerText = "Netúnio";
            numeroAtomico.innerText = "93";
            numeroMassa.innerText = "237,0482";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[1], 5f[4]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=27c40b63ce24d675JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0xMjU2NTk2My04OTdhLTZjYTEtMWIzYi00YWYwODgzZTZkMzcmaW5zaWQ9NTIxMg&ptn=3&hsh=3&fclid=12565963-897a-6ca1-1b3b-4af0883e6d37&psq=netunio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvTmVwdCVDMyVCQW5pbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'pu':
            nomeElemento.innerText = "Plutônio";
            numeroAtomico.innerText = "94";
            numeroMassa.innerText = "244,0642";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 5f[6]";
            naturezaElemento.innerText = "Natural";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=65794a25f0e985c5JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0zNmExNTZlMy0xMGI3LTYzMzctMTJjZi00NTcwMTE4ODYyZGQmaW5zaWQ9NTIxNQ&ptn=3&hsh=3&fclid=36a156e3-10b7-6337-12cf-4570118862dd&psq=plutonio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvUGx1dCVDMyVCM25pbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'am':
            nomeElemento.innerText = "Amerício";
            numeroAtomico.innerText = "95";
            numeroMassa.innerText = "243,0614";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 5f[7]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=77ac0bb18f2027aaJmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0xMWQxMzZmYi04ODhlLTZhYTgtMTkyMS0yNTY4ODlkODZiOTkmaW5zaWQ9NTIxMg&ptn=3&hsh=3&fclid=11d136fb-888e-6aa8-1921-256889d86b99&psq=americio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQW1lciVDMyVBRGNpbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'cm':
            nomeElemento.innerText = "Cúrio";
            numeroAtomico.innerText = "96";
            numeroMassa.innerText = "247,0703";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[1], 5f[7]";
            naturezaElemento.innerText = "Artifical";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=43479e46d5481fa1JmltdHM9MTY5NTI1NDQwMCZpZ3VpZD0xYjIxODlhNC1kMTU0LTZlNWQtMTc4Yi05YTM3ZDBjNTZmMTUmaW5zaWQ9NTIwOQ&ptn=3&hsh=3&fclid=1b2189a4-d154-6e5d-178b-9a37d0c56f15&psq=curio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQyVDMyVCQXJpbw&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'bk':
            nomeElemento.innerText = "Berquélio";
            numeroAtomico.innerText = "97";
            numeroMassa.innerText = "247,0703";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 5f[9]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=f8c12e6080d1de9dJmltdHM9MTY5NTM0MDgwMCZpZ3VpZD0xNDIzNDUzNy1lOTY2LTZjZGEtMTk2NC01NjA4ZTgwZDZkODEmaW5zaWQ9NTIxNg&ptn=3&hsh=3&fclid=14234537-e966-6cda-1964-5608e80d6d81&psq=berqu%c3%a9lio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQmVycXUlQzMlQTlsaW8&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'cf':
            nomeElemento.innerText = "Califórnio";
            numeroAtomico.innerText = "98";
            numeroMassa.innerText = "251,0796";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 5f[10]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=b369b4b9cf0ed2e4JmltdHM9MTY5NTM0MDgwMCZpZ3VpZD0xNDIzNDUzNy1lOTY2LTZjZGEtMTk2NC01NjA4ZTgwZDZkODEmaW5zaWQ9NTg5OQ&ptn=3&hsh=3&fclid=14234537-e966-6cda-1964-5608e80d6d81&psq=calif%c3%b3rmio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvQ2FsaWbDs3JuaW8&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'es':
            nomeElemento.innerText = "Einstênio";
            numeroAtomico.innerText = "99";
            numeroMassa.innerText = "252,083";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 5f[11]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=6dc02303a52b1866JmltdHM9MTY5NTM0MDgwMCZpZ3VpZD0xNDIzNDUzNy1lOTY2LTZjZGEtMTk2NC01NjA4ZTgwZDZkODEmaW5zaWQ9NTk3Nw&ptn=3&hsh=3&fclid=14234537-e966-6cda-1964-5608e80d6d81&psq=einsteniio+elemento+quimico+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvRWluc3QlQzMlQUFuaW8&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'fm':
            nomeElemento.innerText = "Férmio";
            numeroAtomico.innerText = "100";
            numeroMassa.innerText = "257,0951";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 5f[12]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            vejaMais.style.visibility = 'visible';
            vejaMais.setAttribute('href', 'https://www.bing.com/ck/a?!&&p=c3d341cfd5ceb626JmltdHM9MTY5NTM0MDgwMCZpZ3VpZD0xNDIzNDUzNy1lOTY2LTZjZGEtMTk2NC01NjA4ZTgwZDZkODEmaW5zaWQ9NTIxNQ&ptn=3&hsh=3&fclid=14234537-e966-6cda-1964-5608e80d6d81&psq=f%c3%a9rmio+wikipedia&u=a1aHR0cHM6Ly9wdC53aWtpcGVkaWEub3JnL3dpa2kvRiVDMyVBOXJtaW8&ntb=1');
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'md':
            nomeElemento.innerText = "Mendelévio";
            numeroAtomico.innerText = "101";
            numeroMassa.innerText = "258,0984";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 5f[13]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'no':
            nomeElemento.innerText = "Nobélio";
            numeroAtomico.innerText = "102";
            numeroMassa.innerText = "259,1011";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 5f[14]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        case 'lr':
            nomeElemento.innerText = "Laurêncio";
            numeroAtomico.innerText = "103";
            numeroMassa.innerText = "262,1098";
            configEletronica.innerText = "1s[2], 2s[2], 2p[6], 3s[2], 3p[6], 4s[2], 3d[10], 4p[6], 5s[2], 4d[10], 5p[6], 6s[2], 5d[10], 4f[14], 6p[6], 7s[2], 6d[1], 5f[14]";
            naturezaElemento.innerText = "Sintético";
            estadoFisico.innerText = "Sólido";
            familia.innerText = "1B";
            if (visivel == false) {
                tabelaElemental.style.visibility = 'visible';
                visivel = true;
            }
            break;
        default:
            console.log('Easter Egg');
            break;
    }
});
