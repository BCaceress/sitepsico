import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Blog — Dra. Ana Clara Mendes | Saúde Mental e Bem-estar",
  description:
    "Artigos sobre saúde mental, ansiedade, depressão, autoconhecimento e bem-estar emocional pela Dra. Ana Clara Mendes.",
};

const posts = [
  {
    slug: "como-lidar-com-ansiedade",
    title: "Como lidar com a ansiedade no dia a dia",
    excerpt:
      "A ansiedade faz parte da vida, mas quando ela se torna excessiva pode prejudicar nossa rotina. Conheça estratégias práticas para gerenciar os sintomas e retomar o controle.",
    category: "Ansiedade",
    date: "5 de fevereiro de 2026",
    readTime: "5 min",
  },
  {
    slug: "sinais-de-burnout",
    title: "5 sinais de que você pode estar em Burnout",
    excerpt:
      "O esgotamento profissional é silencioso e progressivo. Aprenda a identificar os primeiros sinais e saiba quando buscar ajuda profissional.",
    category: "Burnout",
    date: "28 de janeiro de 2026",
    readTime: "7 min",
  },
  {
    slug: "importancia-terapia",
    title: "Por que fazer terapia? Os benefícios do acompanhamento psicológico",
    excerpt:
      "A terapia não é apenas para momentos de crise. Entenda como o processo terapêutico pode transformar sua relação consigo mesmo e com o mundo ao redor.",
    category: "Saúde Mental",
    date: "15 de janeiro de 2026",
    readTime: "6 min",
  },
  {
    slug: "autocuidado-saude-mental",
    title: "Autocuidado e saúde mental: práticas para o dia a dia",
    excerpt:
      "Pequenas mudanças na rotina podem ter um grande impacto na sua saúde emocional. Descubra práticas simples de autocuidado para incorporar no seu cotidiano.",
    category: "Bem-estar",
    date: "3 de janeiro de 2026",
    readTime: "4 min",
  },
  {
    slug: "terapia-de-casal-funciona",
    title: "Terapia de casal: quando procurar e como funciona",
    excerpt:
      "Muitos casais esperam a crise chegar para buscar ajuda. Saiba quando é o momento certo de procurar terapia de casal e o que esperar do processo.",
    category: "Relacionamentos",
    date: "20 de dezembro de 2025",
    readTime: "8 min",
  },
  {
    slug: "depressao-tratamento",
    title: "Depressão: entenda os sinais e saiba que tem tratamento",
    excerpt:
      "A depressão é um transtorno sério, mas é tratável. Conheça os sintomas, as causas e as formas de tratamento disponíveis.",
    category: "Depressão",
    date: "10 de dezembro de 2025",
    readTime: "6 min",
  },
];

const categories = [
  "Todos",
  "Ansiedade",
  "Burnout",
  "Saúde Mental",
  "Bem-estar",
  "Relacionamentos",
  "Depressão",
];

export default function Blog() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-off-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm tracking-[0.3em] uppercase text-sage-dark mb-3 font-medium">
              Blog
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal mb-4 leading-tight">
              Artigos sobre Saúde Mental
            </h1>
            <p className="text-charcoal-light leading-relaxed">
              Conteúdo informativo e acolhedor sobre saúde mental, bem-estar
              emocional e autoconhecimento.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                  cat === "Todos"
                    ? "bg-sage text-white"
                    : "bg-white text-charcoal-light border border-cream-dark/30 hover:border-sage hover:text-sage-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-cream-dark/20 hover:-translate-y-1"
              >
                {/* Image Placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-cream-dark to-sage-light/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-sage-dark/30">
                    <svg
                      className="w-12 h-12 opacity-40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                      />
                    </svg>
                  </div>

                  {/* Category badge */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-sage-dark text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-warm-gray mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} de leitura</span>
                  </div>
                  <h2 className="font-serif text-lg font-semibold text-charcoal mb-2 group-hover:text-sage-dark transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-charcoal-light leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm text-sage-dark font-medium hover:text-sage transition-colors duration-300"
                  >
                    Ler artigo
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-20 bg-cream rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-charcoal mb-3">
              Receba novos artigos
            </h3>
            <p className="text-charcoal-light mb-6 text-sm">
              Inscreva-se para receber conteúdo sobre saúde mental diretamente
              no seu e-mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-full border border-cream-dark/50 bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-sage text-white text-sm rounded-full font-medium hover:bg-sage-dark transition-all duration-300"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
