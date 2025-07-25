// HomePage.js - Page d'accueil principale
function HomePage() {
  return {
    tag: "div",
    attributes: [["class", "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50"]],
    children: [
      // Hero Section
      {
        tag: "section",
        attributes: [["class", "relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white"]],
        children: [
          {
            tag: "div",
            attributes: [["class", "absolute inset-0 bg-black opacity-10"]],
            children: []
          },
          {
            tag: "div",
            attributes: [["class", "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32"]],
            children: [
              {
                tag: "div",
                attributes: [["class", "text-center"]],
                children: [
                  {
                    tag: "h1",
                    attributes: [["class", "text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"]],
                    children: ["Meetup Connect"]
                  },
                  {
                    tag: "p",
                    attributes: [["class", "text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed"]],
                    children: ["Connectez-vous avec votre communauté. Découvrez des événements passionnants, créez des liens durables et partagez vos passions."]
                  },
                  {
                    tag: "div",
                    attributes: [["class", "flex flex-col sm:flex-row gap-4 justify-center items-center"]],
                    children: [
                      {
                        tag: "a",
                        attributes: [
                          ["href", "#events"],
                          ["class", "bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"]
                        ],
                        children: ["🎯 Découvrir les événements"]
                      },
                      {
                        tag: "a",
                        attributes: [
                          ["href", "#communities"],
                          ["class", "border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"]
                        ],
                        children: ["👥 Rejoindre une communauté"]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },

      // Features Section
      {
        tag: "section",
        attributes: [["class", "py-20 bg-white"], ["id", "features"]],
        children: [
          {
            tag: "div",
            attributes: [["class", "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"]],
            children: [
              {
                tag: "div",
                attributes: [["class", "text-center mb-16"]],
                children: [
                  {
                    tag: "h2",
                    attributes: [["class", "text-4xl lg:text-5xl font-bold text-gray-900 mb-4"]],
                    children: ["Pourquoi choisir Meetup Connect ?"]
                  },
                  {
                    tag: "p",
                    attributes: [["class", "text-xl text-gray-600 max-w-3xl mx-auto"]],
                    children: ["Une plateforme moderne pour connecter les passionnés et créer des expériences mémorables."]
                  }
                ]
              },
              {
                tag: "div",
                attributes: [["class", "grid md:grid-cols-2 lg:grid-cols-3 gap-8"]],
                children: [
                  // Feature 1
                  {
                    tag: "div",
                    attributes: [["class", "bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"]],
                    children: [
                      {
                        tag: "div",
                        attributes: [["class", "text-4xl mb-4"]],
                        children: ["🎯"]
                      },
                      {
                        tag: "h3",
                        attributes: [["class", "text-2xl font-bold text-gray-900 mb-3"]],
                        children: ["Événements ciblés"]
                      },
                      {
                        tag: "p",
                        attributes: [["class", "text-gray-700 leading-relaxed"]],
                        children: ["Trouvez facilement des événements qui correspondent à vos centres d'intérêt et à votre localisation."]
                      }
                    ]
                  },
                  // Feature 2
                  {
                    tag: "div",
                    attributes: [["class", "bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"]],
                    children: [
                      {
                        tag: "div",
                        attributes: [["class", "text-4xl mb-4"]],
                        children: ["👥"]
                      },
                      {
                        tag: "h3",
                        attributes: [["class", "text-2xl font-bold text-gray-900 mb-3"]],
                        children: ["Communautés actives"]
                      },
                      {
                        tag: "p",
                        attributes: [["class", "text-gray-700 leading-relaxed"]],
                        children: ["Rejoignez des communautés passionnées et participez à des discussions enrichissantes."]
                      }
                    ]
                  },
                  // Feature 3
                  {
                    tag: "div",
                    attributes: [["class", "bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"]],
                    children: [
                      {
                        tag: "div",
                        attributes: [["class", "text-4xl mb-4"]],
                        children: ["⚡"]
                      },
                      {
                        tag: "h3",
                        attributes: [["class", "text-2xl font-bold text-gray-900 mb-3"]],
                        children: ["Interface moderne"]
                      },
                      {
                        tag: "p",
                        attributes: [["class", "text-gray-700 leading-relaxed"]],
                        children: ["Une expérience utilisateur fluide et intuitive sur tous vos appareils."]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },

      // Stats Section
      {
        tag: "section",
        attributes: [["class", "py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white"]],
        children: [
          {
            tag: "div",
            attributes: [["class", "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"]],
            children: [
              {
                tag: "div",
                attributes: [["class", "text-center mb-16"]],
                children: [
                  {
                    tag: "h2",
                    attributes: [["class", "text-4xl lg:text-5xl font-bold mb-4"]],
                    children: ["Notre impact en chiffres"]
                  }
                ]
              },
              {
                tag: "div",
                attributes: [["class", "grid grid-cols-2 lg:grid-cols-4 gap-8"]],
                children: [
                  {
                    tag: "div",
                    attributes: [["class", "text-center"]],
                    children: [
                      {
                        tag: "div",
                        attributes: [["class", "text-4xl lg:text-6xl font-bold text-blue-400 mb-2"]],
                        children: ["10K+"]
                      },
                      {
                        tag: "p",
                        attributes: [["class", "text-xl text-gray-300"]],
                        children: ["Membres actifs"]
                      }
                    ]
                  },
                  {
                    tag: "div",
                    attributes: [["class", "text-center"]],
                    children: [
                      {
                        tag: "div",
                        attributes: [["class", "text-4xl lg:text-6xl font-bold text-purple-400 mb-2"]],
                        children: ["500+"]
                      },
                      {
                        tag: "p",
                        attributes: [["class", "text-xl text-gray-300"]],
                        children: ["Événements organisés"]
                      }
                    ]
                  },
                  {
                    tag: "div",
                    attributes: [["class", "text-center"]],
                    children: [
                      {
                        tag: "div",
                        attributes: [["class", "text-4xl lg:text-6xl font-bold text-green-400 mb-2"]],
                        children: ["50+"]
                      },
                      {
                        tag: "p",
                        attributes: [["class", "text-xl text-gray-300"]],
                        children: ["Communautés"]
                      }
                    ]
                  },
                  {
                    tag: "div",
                    attributes: [["class", "text-center"]],
                    children: [
                      {
                        tag: "div",
                        attributes: [["class", "text-4xl lg:text-6xl font-bold text-yellow-400 mb-2"]],
                        children: ["98%"]
                      },
                      {
                        tag: "p",
                        attributes: [["class", "text-xl text-gray-300"]],
                        children: ["Satisfaction"]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },

      // CTA Section
      {
        tag: "section",
        attributes: [["class", "py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white"]],
        children: [
          {
            tag: "div",
            attributes: [["class", "max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"]],
            children: [
              {
                tag: "h2",
                attributes: [["class", "text-4xl lg:text-5xl font-bold mb-6"]],
                children: ["Prêt à commencer votre aventure ?"]
              },
              {
                tag: "p",
                attributes: [["class", "text-xl mb-8 text-blue-100"]],
                children: ["Rejoignez des milliers de personnes qui ont déjà trouvé leur communauté sur Meetup Connect."]
              },
              {
                tag: "div",
                attributes: [["class", "flex flex-col sm:flex-row gap-4 justify-center"]],
                children: [
                  {
                    tag: "a",
                    attributes: [
                      ["href", "/register"],
                      ["class", "bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"]
                    ],
                    children: ["🚀 Créer un compte"]
                  },
                  {
                    tag: "a",
                    attributes: [
                      ["href", "/login"],
                      ["class", "border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"]
                    ],
                    children: ["🔑 Se connecter"]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
}

// Export par défaut pour éviter l'erreur de module
export default HomePage;
