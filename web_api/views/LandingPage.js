import { buildUrl } from "../utils/URLHelpers.js";

export default function LandingPage() {
  return {
    tag: "div",
    attributes: [["class", "min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50"]],
    children: [
      // Navigation simple
      {
        tag: "nav",
        attributes: [["class", "bg-white shadow-sm border-b"]],
        children: [
          {
            tag: "div",
            attributes: [["class", "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"]],
            children: [
              {
                tag: "div",
                attributes: [["class", "flex justify-between items-center py-4"]],
                children: [
                  {
                    tag: "div",
                    attributes: [["class", "flex items-center"]],
                    children: [
                      {
                        tag: "span",
                        attributes: [["class", "text-2xl font-bold text-purple-600"]],
                        children: ["🌟 Meetup Connect"]
                      }
                    ]
                  },
                  {
                    tag: "div",
                    attributes: [["class", "flex items-center space-x-4"]],
                    children: [
                      {
                        tag: "a",
                        attributes: [
                          ["href", buildUrl("login")],
                          ["class", "text-gray-600 hover:text-purple-600 font-medium transition-colors"]
                        ],
                        children: ["Connexion"]
                      },
                      {
                        tag: "a",
                        attributes: [
                          ["href", buildUrl("register")],
                          ["class", "bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"]
                        ],
                        children: ["S'inscrire"]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },

      // Hero Section
      {
        tag: "div",
        attributes: [["class", "relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white"]],
        children: [
          {
            tag: "div",
            attributes: [["class", "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"]],
            children: [
              {
                tag: "div",
                attributes: [["class", "text-center"]],
                children: [
                  {
                    tag: "h1",
                    attributes: [["class", "text-5xl md:text-6xl font-bold mb-6 leading-tight"]],
                    children: [
                      "Connectez-vous avec ",
                      {
                        tag: "span",
                        attributes: [["class", "text-yellow-300"]],
                        children: ["votre communauté"]
                      }
                    ]
                  },
                  {
                    tag: "p",
                    attributes: [["class", "text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto"]],
                    children: ["Découvrez des événements passionnants, rencontrez des personnes inspirantes et rejoignez des communautés qui vous ressemblent."]
                  },
                  {
                    tag: "div",
                    attributes: [["class", "flex flex-col sm:flex-row gap-4 justify-center items-center"]],
                    children: [
                      {
                        tag: "a",
                        attributes: [
                          ["href", buildUrl("register")],
                          ["class", "bg-yellow-400 hover:bg-yellow-300 text-purple-800 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"]
                        ],
                        children: ["🚀 Commencer gratuitement"]
                      },
                      {
                        tag: "a",
                        attributes: [
                          ["href", buildUrl("communautes")],
                          ["class", "bg-transparent border-2 border-white hover:bg-white hover:text-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"]
                        ],
                        children: ["🔍 Explorer"]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },

      // Features rapides
      {
        tag: "div",
        attributes: [["class", "py-16 bg-white"]],
        children: [
          {
            tag: "div",
            attributes: [["class", "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"]],
            children: [
              {
                tag: "div",
                attributes: [["class", "text-center mb-12"]],
                children: [
                  {
                    tag: "h2",
                    attributes: [["class", "text-3xl font-bold text-gray-900 mb-4"]],
                    children: ["Rejoignez la communauté"]
                  }
                ]
              },
              {
                tag: "div",
                attributes: [["class", "grid md:grid-cols-3 gap-8 text-center"]],
                children: [
                  {
                    tag: "div",
                    attributes: [["class", "p-6"]],
                    children: [
                      {
                        tag: "div",
                        attributes: [["class", "text-4xl mb-4"]],
                        children: ["🏘️"]
                      },
                      {
                        tag: "h3",
                        attributes: [["class", "text-xl font-bold mb-2"]],
                        children: ["Communautés"]
                      },
                      {
                        tag: "p",
                        attributes: [["class", "text-gray-600"]],
                        children: ["Trouvez votre tribu"]
                      }
                    ]
                  },
                  {
                    tag: "div",
                    attributes: [["class", "p-6"]],
                    children: [
                      {
                        tag: "div",
                        attributes: [["class", "text-4xl mb-4"]],
                        children: ["📅"]
                      },
                      {
                        tag: "h3",
                        attributes: [["class", "text-xl font-bold mb-2"]],
                        children: ["Événements"]
                      },
                      {
                        tag: "p",
                        attributes: [["class", "text-gray-600"]],
                        children: ["Participez et créez"]
                      }
                    ]
                  },
                  {
                    tag: "div",
                    attributes: [["class", "p-6"]],
                    children: [
                      {
                        tag: "div",
                        attributes: [["class", "text-4xl mb-4"]],
                        children: ["🤝"]
                      },
                      {
                        tag: "h3",
                        attributes: [["class", "text-xl font-bold mb-2"]],
                        children: ["Connexions"]
                      },
                      {
                        tag: "p",
                        attributes: [["class", "text-gray-600"]],
                        children: ["Rencontrez des gens"]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },

      // CTA final
      {
        tag: "div",
        attributes: [["class", "py-16 bg-purple-50"]],
        children: [
          {
            tag: "div",
            attributes: [["class", "max-w-4xl mx-auto text-center px-4"]],
            children: [
              {
                tag: "h2",
                attributes: [["class", "text-3xl font-bold text-gray-900 mb-6"]],
                children: ["Prêt à vous connecter ?"]
              },
              {
                tag: "a",
                attributes: [
                  ["href", buildUrl("register")],
                  ["class", "bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"]
                ],
                children: ["✨ Rejoindre Meetup Connect"]
              }
            ]
          }
        ]
      }
    ]
  };
}
