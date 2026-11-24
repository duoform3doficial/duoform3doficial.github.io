/* =========================================================
   PRODUTOS DA LOJA
   Dica: use a página  ferramentas.html  do próprio site para
   gerar o bloco de um produto novo já pronto e colar aqui.

   Cada produto fica entre { } e termina com vírgula.
   - codigo:     código curto e único (aparece no pedido do WhatsApp)
   - nome:       nome do produto
   - categoria:  usada nos filtros do topo
   - preco:      número com ponto (ex.: 24.90). Use 0 para "Sob consulta"
   - aPartirDe:  true mostra "a partir de" antes do preço
   - fotos:      arquivos dentro da pasta img/produtos (a 1ª é a capa)
   - descricao:  texto livre
   - cores:      opções de cor (deixe [] se não tiver)
   - personalizar: pergunta mostrada ao cliente (deixe "" se não tiver)
   - destaque:   true coloca o selo "Mais pedido"
   ========================================================= */
const PRODUTOS = [
  {
    codigo: "CH01",
    nome: "Chaveiro personalizado com a sua marca",
    categoria: "Chaveiros",
    preco: 0,
    aPartirDe: false,
    fotos: ["chaveiro-espaco-mulher.jpg", "chaveiro-ds-informatica.jpg"],
    descricao: "Chaveiro em relevo 3D com o logo e o telefone da sua empresa. Ideal para brindes e lembrancinhas de fim de ano. Pedido mínimo e valores conforme a quantidade.",
    cores: ["Cores da sua marca"],
    personalizar: "Nome da empresa e telefone (depois enviamos a arte pelo WhatsApp)",
    destaque: true
  },
  {
    codigo: "CP01",
    nome: "Kit copo porta-lata personalizado",
    categoria: "Copos e canecas",
    preco: 0,
    aPartirDe: false,
    fotos: ["kit-copo.jpg"],
    descricao: "Copo porta-lata com tampinha e abridor de lata em chaveiro. Você escolhe a cor e o nome.",
    cores: ["Verde", "Rosa", "Roxo", "Branco"],
    personalizar: "Nome que vai no copo",
    destaque: true
  },
  {
    codigo: "LT01",
    nome: "Letra decorativa com nome e tema",
    categoria: "Decoração infantil",
    preco: 0,
    aPartirDe: false,
    fotos: ["letra-personalizada.jpg"],
    descricao: "Letra inicial grande com o nome da criança e elementos do tema favorito. Perfeita para quarto, festa ou mesa do bolo.",
    cores: [],
    personalizar: "Nome da criança e tema desejado",
    destaque: false
  },
  {
    codigo: "LR01",
    nome: "Letreiro decorativo \"Jesus te ama\"",
    categoria: "Letreiros",
    preco: 0,
    aPartirDe: false,
    fotos: ["letreiro-jesus.jpg"],
    descricao: "Letreiro de mesa em 3D com letras em destaque e detalhe dourado. Lindo para salas, igrejas e presentes.",
    cores: ["Branco e dourado"],
    personalizar: "",
    destaque: false
  }
];
