import config from '../config';

const url_categories = `${config.url_backend}/categorias`;

function getAllWithVideos() {
  return fetch(`${url_categories}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('erro');
    });
}

export default {
  getAllWithVideos,
};
