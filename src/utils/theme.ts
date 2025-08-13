// Tema global para o My Finance App
// Define cores, tipografia, espaçamentos, sombras e feedback visual

export const theme = {
  colors: {
    primary: '#4CAF50',      // verde moderno, confiança e organização
    secondary: '#FFC107',    // amarelo suave para destaques
    background: '#F9FAFB',   // cinza claro neutro
    text: '#1F2937',         // cinza quase preto, legível
    error: '#EF4444',        // vermelho suave para erros/avisos
  },

  typography: {
    fontFamily: 'Inter',     // ou 'Poppins'
    fontWeights: {
      regular: '400',
      semiBold: '600',       // usado em títulos
      bold: '700',
    },
    fontSizes: {
      title: 24,             // títulos em semibold
      body: 16,              // texto padrão
      small: 14,
      currency: 32,          // valores monetários em destaque
    },
  },

  layout: {
    borderRadius: 16,        // cards arredondados
    spacing: 8,              // espaçamento base
  },

  shadows: {
    card: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,    // sombra leve
      shadowRadius: 4,
      elevation: 2,
    },
  },

  icons: {
    // usar react-native-vector-icons ou @expo/vector-icons
    categorySize: 24,
    categoryColor: '#1F2937',
  },

  feedback: {
    // animações Lottie
    successAnimation: require('../../assets/lottie/success.json'),
    // confirmação modal (usar React Native Modal ou Alert)
  },
};

// Versão dark do tema
export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#1F2937',   // fundo escuro
    text: '#F9FAFB',         // texto claro
  },
  icons: {
    ...theme.icons,
    categoryColor: '#F9FAFB', // ícones claros
  },
};
