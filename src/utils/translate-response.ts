const errorTranslations: Record<string, string> = {
  'Invalid email or password': 'Email ou senha inválidos',
  'User already exists. Use another email.':
    'Usuário já existe. Use outro email.',
};

export function translateResponse(error: {
  response?: { data?: { message?: string } };
  message?: string;
}) {
  const message =
    error.response?.data?.message || error.message || 'Erro desconhecido';

  const translatedMessage = errorTranslations[message];

  return translatedMessage || message;
}
